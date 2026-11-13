/*
 * Wazuh app - Shared helpers for the "폴더 실시간 감시 추가/제거" (FIM 감시 폴더)
 * 기능에서 쓰는 agent.conf 원문(raw XML) 문자열 처리 유틸.
 * (Zero 서버 커스텀 유틸 — VirusTotal 설정 화면과 그룹 구성(agent.conf) 편집
 * 화면 두 곳에서 공통으로 사용)
 */

// XML 예약문자 escape (경로에 &, <, > 가 들어가는 경우를 대비)
export const escapeXml = value =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

// escapeXml의 역변환 (agent.conf에서 읽어온 경로를 화면에 표시할 때 사용)
export const unescapeXml = value =>
  String(value)
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');

// 정규식에 그대로 넣을 수 있도록 특수문자를 escape한다.
export const escapeRegex = value =>
  String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/**
 * 그룹 agent.conf 원문(raw XML)의 첫 번째 <agent_config><syscheck> 블록 안에
 * 등록된 <directories> 경로 목록을 읽어온다 (화면 진입 시 기존 감시 폴더
 * 리스트를 보여주기 위한 용도). 여러 <agent_config> 블록이 있는 경우 첫
 * 번째 블록만 본다 (addFimDirectory/removeFimDirectory와 동일한 전제).
 */
export const parseFimDirectories = xml => {
  const content = (xml || '').toString();
  const agentConfigMatch = content.match(
    /<agent_config(\s[^>]*)?>([\s\S]*?)<\/agent_config>/i,
  );
  if (!agentConfigMatch) {
    return [];
  }
  const syscheckMatch = agentConfigMatch[2].match(
    /<syscheck(\s[^>]*)?>([\s\S]*?)<\/syscheck>/i,
  );
  if (!syscheckMatch) {
    return [];
  }
  const dirRegex = /<directories[^>]*>([\s\S]*?)<\/directories>/gi;
  const paths = [];
  let match;
  while ((match = dirRegex.exec(syscheckMatch[2])) !== null) {
    const path = unescapeXml(match[1].trim());
    if (path) {
      paths.push(path);
    }
  }
  return paths;
};

/**
 * agent.conf 원문(raw XML)에 실시간 FIM 감시 폴더를 추가한다.
 *   <agent_config>
 *     <syscheck>
 *       <directories realtime="yes">경로</directories>
 *     </syscheck>
 *   </agent_config>
 * - 이미 같은 경로가 등록되어 있으면 그대로 두고 added:false를 반환한다.
 * - <agent_config> 블록이 없으면 파일 끝에 새로 만든다.
 * - <agent_config>는 있지만 <syscheck>가 없으면 그 안에 새로 만든다.
 * - 여러 개의 <agent_config> 블록이 있는 경우 첫 번째 블록만 사용한다
 *   (os 프로필별로 나뉜 복잡한 agent.conf는 구성 편집 화면에서 직접
 *   수정해야 함).
 */
export const addFimDirectory = (xml, path) => {
  const content = (xml || '').toString();
  const trimmedPath = String(path).trim();
  const safePath = escapeXml(trimmedPath);

  const alreadyExists = new RegExp(
    `<directories[^>]*>\\s*${escapeRegex(safePath)}\\s*<\\/directories>`,
    'i',
  ).test(content);
  if (alreadyExists) {
    return { xml: content, added: false };
  }

  const directoryLine = `      <directories realtime="yes">${safePath}</directories>`;

  const agentConfigRegex = /<agent_config(\s[^>]*)?>([\s\S]*?)<\/agent_config>/i;
  const agentConfigMatch = content.match(agentConfigRegex);

  if (!agentConfigMatch) {
    const block = [
      '<agent_config>',
      '  <syscheck>',
      directoryLine,
      '  </syscheck>',
      '</agent_config>',
      '',
    ].join('\n');
    const trimmed = content.replace(/\s+$/, '');
    const newXml = trimmed ? `${trimmed}\n${block}` : block;
    return { xml: newXml, added: true };
  }

  const [, attrs = '', inner] = agentConfigMatch;
  const syscheckRegex = /<syscheck(\s[^>]*)?>([\s\S]*?)<\/syscheck>/i;
  const syscheckMatch = inner.match(syscheckRegex);

  let newInner;
  if (syscheckMatch) {
    const [, syscheckAttrs = '', syscheckInner] = syscheckMatch;
    const newSyscheck = `<syscheck${syscheckAttrs}>${syscheckInner}\n${directoryLine}\n  </syscheck>`;
    newInner = inner.replace(syscheckRegex, newSyscheck);
  } else {
    newInner = `${inner}\n  <syscheck>\n${directoryLine}\n  </syscheck>\n`;
  }

  const newAgentConfig = `<agent_config${attrs}>${newInner}</agent_config>`;
  const newXml = content.replace(agentConfigRegex, newAgentConfig);
  return { xml: newXml, added: true };
};

/**
 * addFimDirectory의 반대 동작: agent.conf 원문에서 첫 번째
 * <agent_config><syscheck> 블록 안의 <directories>경로</directories> 한
 * 줄을 제거한다. 경로가 없으면 removed:false를 반환한다.
 */
export const removeFimDirectory = (xml, path) => {
  const content = (xml || '').toString();
  const safePath = escapeXml(String(path).trim());
  const directoryLineRegex = new RegExp(
    `[ \\t]*<directories[^>]*>\\s*${escapeRegex(safePath)}\\s*<\\/directories>\\r?\\n?`,
    'i',
  );
  if (!directoryLineRegex.test(content)) {
    return { xml: content, removed: false };
  }
  // 줄을 지운 자리에 빈 줄이 계속 쌓이지 않도록 3줄 이상 연속된 빈 줄은
  // 한 줄로 정리한다 (기능상 문제는 없지만, 반복해서 추가/제거할 때
  // agent.conf가 지저분해지는 것을 방지).
  const removedXml = content
    .replace(directoryLineRegex, '')
    .replace(/\n{3,}/g, '\n\n');
  return { xml: removedXml, removed: true };
};

/**
 * 현재 화면에 표시 중인 목록(fimSelectedOptions)과 마지막으로 불러오거나
 * 저장한 목록(fimDirectories)을 비교해서 추가/제거해야 할 경로를 계산한다.
 * (VirusTotal 설정 화면, 그룹 구성 편집 화면 양쪽에서 동일하게 사용)
 */
export const diffFimDirectories = (existingOptions, selectedOptions) => {
  const existingLabels = existingOptions.map(o => o.label);
  const selectedLabels = selectedOptions.map(o => o.label);
  const toAdd = selectedLabels.filter(
    label =>
      !existingLabels.some(e => e.toLowerCase() === label.toLowerCase()),
  );
  const toRemove = existingLabels.filter(
    label =>
      !selectedLabels.some(s => s.toLowerCase() === label.toLowerCase()),
  );
  return { toAdd, toRemove };
};

/**
 * 콤마(,)나 줄바꿈으로 구분된 문자열을 여러 개의 경로로 나누고, 이미
 * 선택되어 있는 항목과 중복되는 것은 걸러낸다 (EuiComboBox의
 * onCreateOption 핸들러에서 공통으로 사용).
 */
export const splitNewFimPaths = (searchValue, currentOptions) => {
  const parts = String(searchValue || '')
    .split(/[,\n]/)
    .map(part => part.trim())
    .filter(Boolean);
  if (!parts.length) {
    return [];
  }
  const currentLabelsLower = currentOptions.map(o => o.label.toLowerCase());
  const newOptions = [];
  parts.forEach(part => {
    const lower = part.toLowerCase();
    const alreadyThere =
      currentLabelsLower.includes(lower) ||
      newOptions.some(o => o.label.toLowerCase() === lower);
    if (!alreadyThere) {
      newOptions.push({ label: part });
    }
  });
  return newOptions;
};
