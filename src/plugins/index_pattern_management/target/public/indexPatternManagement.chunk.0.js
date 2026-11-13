(window["indexPatternManagement_bundle_jsonpfunction"] = window["indexPatternManagement_bundle_jsonpfunction"] || []).push([[0],{

/***/ "../../../node_modules/@xobotyi/scrollbar-width/dist/index.js":
/*!*********************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/@xobotyi/scrollbar-width/dist/index.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0});var e=function(t){if("undefined"==typeof document)return 0;if(document.body&&(!document.readyState||"loading"!==document.readyState)){if(!0!==t&&"number"==typeof e.__cache)return e.__cache;var o=document.createElement("div"),d=o.style;d.display="block",d.position="absolute",d.width="100px",d.height="100px",d.left="-999px",d.top="-999px",d.overflow="scroll",document.body.insertBefore(o,null);var r=o.clientWidth;if(0!==r)return e.__cache=100-r,document.body.removeChild(o),e.__cache;document.body.removeChild(o)}};exports.scrollbarWidth=e;


/***/ }),

/***/ "../../../node_modules/brace/mode/groovy.js":
/*!***************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/brace/mode/groovy.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

ace.define("ace/mode/doc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"], function(acequire, exports, module) {
"use strict";

var oop = acequire("../lib/oop");
var TextHighlightRules = acequire("./text_highlight_rules").TextHighlightRules;

var DocCommentHighlightRules = function() {
    this.$rules = {
        "start" : [ {
            token : "comment.doc.tag",
            regex : "@[\\w\\d_]+" // TODO: fix email addresses
        }, 
        DocCommentHighlightRules.getTagRule(),
        {
            defaultToken : "comment.doc",
            caseInsensitive: true
        }]
    };
};

oop.inherits(DocCommentHighlightRules, TextHighlightRules);

DocCommentHighlightRules.getTagRule = function(start) {
    return {
        token : "comment.doc.tag.storage.type",
        regex : "\\b(?:TODO|FIXME|XXX|HACK)\\b"
    };
};

DocCommentHighlightRules.getStartRule = function(start) {
    return {
        token : "comment.doc", // doc comment
        regex : "\\/\\*(?=\\*)",
        next  : start
    };
};

DocCommentHighlightRules.getEndRule = function (start) {
    return {
        token : "comment.doc", // closing comment
        regex : "\\*\\/",
        next  : start
    };
};


exports.DocCommentHighlightRules = DocCommentHighlightRules;

});

ace.define("ace/mode/javascript_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"], function(acequire, exports, module) {
"use strict";

var oop = acequire("../lib/oop");
var DocCommentHighlightRules = acequire("./doc_comment_highlight_rules").DocCommentHighlightRules;
var TextHighlightRules = acequire("./text_highlight_rules").TextHighlightRules;
var identifierRe = "[a-zA-Z\\$_\u00a1-\uffff][a-zA-Z\\d\\$_\u00a1-\uffff]*";

var JavaScriptHighlightRules = function(options) {
    var keywordMapper = this.createKeywordMapper({
        "variable.language":
            "Array|Boolean|Date|Function|Iterator|Number|Object|RegExp|String|Proxy|"  + // Constructors
            "Namespace|QName|XML|XMLList|"                                             + // E4X
            "ArrayBuffer|Float32Array|Float64Array|Int16Array|Int32Array|Int8Array|"   +
            "Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray|"                    +
            "Error|EvalError|InternalError|RangeError|ReferenceError|StopIteration|"   + // Errors
            "SyntaxError|TypeError|URIError|"                                          +
            "decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|eval|isFinite|" + // Non-constructor functions
            "isNaN|parseFloat|parseInt|"                                               +
            "JSON|Math|"                                                               + // Other
            "this|arguments|prototype|window|document"                                 , // Pseudo
        "keyword":
            "const|yield|import|get|set|async|await|" +
            "break|case|catch|continue|default|delete|do|else|finally|for|function|" +
            "if|in|of|instanceof|new|return|switch|throw|try|typeof|let|var|while|with|debugger|" +
            "__parent__|__count__|escape|unescape|with|__proto__|" +
            "class|enum|extends|super|export|implements|private|public|interface|package|protected|static",
        "storage.type":
            "const|let|var|function",
        "constant.language":
            "null|Infinity|NaN|undefined",
        "support.function":
            "alert",
        "constant.language.boolean": "true|false"
    }, "identifier");
    var kwBeforeRe = "case|do|else|finally|in|instanceof|return|throw|try|typeof|yield|void";

    var escapedRe = "\\\\(?:x[0-9a-fA-F]{2}|" + // hex
        "u[0-9a-fA-F]{4}|" + // unicode
        "u{[0-9a-fA-F]{1,6}}|" + // es6 unicode
        "[0-2][0-7]{0,2}|" + // oct
        "3[0-7][0-7]?|" + // oct
        "[4-7][0-7]?|" + //oct
        ".)";

    this.$rules = {
        "no_regex" : [
            DocCommentHighlightRules.getStartRule("doc-start"),
            comments("no_regex"),
            {
                token : "string",
                regex : "'(?=.)",
                next  : "qstring"
            }, {
                token : "string",
                regex : '"(?=.)',
                next  : "qqstring"
            }, {
                token : "constant.numeric", // hexadecimal, octal and binary
                regex : /0(?:[xX][0-9a-fA-F]+|[oO][0-7]+|[bB][01]+)\b/
            }, {
                token : "constant.numeric", // decimal integers and floats
                regex : /(?:\d\d*(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+\b)?/
            }, {
                token : [
                    "storage.type", "punctuation.operator", "support.function",
                    "punctuation.operator", "entity.name.function", "text","keyword.operator"
                ],
                regex : "(" + identifierRe + ")(\\.)(prototype)(\\.)(" + identifierRe +")(\\s*)(=)",
                next: "function_arguments"
            }, {
                token : [
                    "storage.type", "punctuation.operator", "entity.name.function", "text",
                    "keyword.operator", "text", "storage.type", "text", "paren.lparen"
                ],
                regex : "(" + identifierRe + ")(\\.)(" + identifierRe +")(\\s*)(=)(\\s*)(function)(\\s*)(\\()",
                next: "function_arguments"
            }, {
                token : [
                    "entity.name.function", "text", "keyword.operator", "text", "storage.type",
                    "text", "paren.lparen"
                ],
                regex : "(" + identifierRe +")(\\s*)(=)(\\s*)(function)(\\s*)(\\()",
                next: "function_arguments"
            }, {
                token : [
                    "storage.type", "punctuation.operator", "entity.name.function", "text",
                    "keyword.operator", "text",
                    "storage.type", "text", "entity.name.function", "text", "paren.lparen"
                ],
                regex : "(" + identifierRe + ")(\\.)(" + identifierRe +")(\\s*)(=)(\\s*)(function)(\\s+)(\\w+)(\\s*)(\\()",
                next: "function_arguments"
            }, {
                token : [
                    "storage.type", "text", "entity.name.function", "text", "paren.lparen"
                ],
                regex : "(function)(\\s+)(" + identifierRe + ")(\\s*)(\\()",
                next: "function_arguments"
            }, {
                token : [
                    "entity.name.function", "text", "punctuation.operator",
                    "text", "storage.type", "text", "paren.lparen"
                ],
                regex : "(" + identifierRe + ")(\\s*)(:)(\\s*)(function)(\\s*)(\\()",
                next: "function_arguments"
            }, {
                token : [
                    "text", "text", "storage.type", "text", "paren.lparen"
                ],
                regex : "(:)(\\s*)(function)(\\s*)(\\()",
                next: "function_arguments"
            }, {
                token : "keyword",
                regex : "from(?=\\s*('|\"))"
            }, {
                token : "keyword",
                regex : "(?:" + kwBeforeRe + ")\\b",
                next : "start"
            }, {
                token : ["support.constant"],
                regex : /that\b/
            }, {
                token : ["storage.type", "punctuation.operator", "support.function.firebug"],
                regex : /(console)(\.)(warn|info|log|error|time|trace|timeEnd|assert)\b/
            }, {
                token : keywordMapper,
                regex : identifierRe
            }, {
                token : "punctuation.operator",
                regex : /[.](?![.])/,
                next  : "property"
            }, {
                token : "storage.type",
                regex : /=>/
            }, {
                token : "keyword.operator",
                regex : /--|\+\+|\.{3}|===|==|=|!=|!==|<+=?|>+=?|!|&&|\|\||\?:|[!$%&*+\-~\/^]=?/,
                next  : "start"
            }, {
                token : "punctuation.operator",
                regex : /[?:,;.]/,
                next  : "start"
            }, {
                token : "paren.lparen",
                regex : /[\[({]/,
                next  : "start"
            }, {
                token : "paren.rparen",
                regex : /[\])}]/
            }, {
                token: "comment",
                regex: /^#!.*$/
            }
        ],
        property: [{
                token : "text",
                regex : "\\s+"
            }, {
                token : [
                    "storage.type", "punctuation.operator", "entity.name.function", "text",
                    "keyword.operator", "text",
                    "storage.type", "text", "entity.name.function", "text", "paren.lparen"
                ],
                regex : "(" + identifierRe + ")(\\.)(" + identifierRe +")(\\s*)(=)(\\s*)(function)(?:(\\s+)(\\w+))?(\\s*)(\\()",
                next: "function_arguments"
            }, {
                token : "punctuation.operator",
                regex : /[.](?![.])/
            }, {
                token : "support.function",
                regex : /(s(?:h(?:ift|ow(?:Mod(?:elessDialog|alDialog)|Help))|croll(?:X|By(?:Pages|Lines)?|Y|To)?|t(?:op|rike)|i(?:n|zeToContent|debar|gnText)|ort|u(?:p|b(?:str(?:ing)?)?)|pli(?:ce|t)|e(?:nd|t(?:Re(?:sizable|questHeader)|M(?:i(?:nutes|lliseconds)|onth)|Seconds|Ho(?:tKeys|urs)|Year|Cursor|Time(?:out)?|Interval|ZOptions|Date|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Date|FullYear)|FullYear|Active)|arch)|qrt|lice|avePreferences|mall)|h(?:ome|andleEvent)|navigate|c(?:har(?:CodeAt|At)|o(?:s|n(?:cat|textual|firm)|mpile)|eil|lear(?:Timeout|Interval)?|a(?:ptureEvents|ll)|reate(?:StyleSheet|Popup|EventObject))|t(?:o(?:GMTString|S(?:tring|ource)|U(?:TCString|pperCase)|Lo(?:caleString|werCase))|est|a(?:n|int(?:Enabled)?))|i(?:s(?:NaN|Finite)|ndexOf|talics)|d(?:isableExternalCapture|ump|etachEvent)|u(?:n(?:shift|taint|escape|watch)|pdateCommands)|j(?:oin|avaEnabled)|p(?:o(?:p|w)|ush|lugins.refresh|a(?:ddings|rse(?:Int|Float)?)|r(?:int|ompt|eference))|e(?:scape|nableExternalCapture|val|lementFromPoint|x(?:p|ec(?:Script|Command)?))|valueOf|UTC|queryCommand(?:State|Indeterm|Enabled|Value)|f(?:i(?:nd|le(?:ModifiedDate|Size|CreatedDate|UpdatedDate)|xed)|o(?:nt(?:size|color)|rward)|loor|romCharCode)|watch|l(?:ink|o(?:ad|g)|astIndexOf)|a(?:sin|nchor|cos|t(?:tachEvent|ob|an(?:2)?)|pply|lert|b(?:s|ort))|r(?:ou(?:nd|teEvents)|e(?:size(?:By|To)|calc|turnValue|place|verse|l(?:oad|ease(?:Capture|Events)))|andom)|g(?:o|et(?:ResponseHeader|M(?:i(?:nutes|lliseconds)|onth)|Se(?:conds|lection)|Hours|Year|Time(?:zoneOffset)?|Da(?:y|te)|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Da(?:y|te)|FullYear)|FullYear|A(?:ttention|llResponseHeaders)))|m(?:in|ove(?:B(?:y|elow)|To(?:Absolute)?|Above)|ergeAttributes|a(?:tch|rgins|x))|b(?:toa|ig|o(?:ld|rderWidths)|link|ack))\b(?=\()/
            }, {
                token : "support.function.dom",
                regex : /(s(?:ub(?:stringData|mit)|plitText|e(?:t(?:NamedItem|Attribute(?:Node)?)|lect))|has(?:ChildNodes|Feature)|namedItem|c(?:l(?:ick|o(?:se|neNode))|reate(?:C(?:omment|DATASection|aption)|T(?:Head|extNode|Foot)|DocumentFragment|ProcessingInstruction|E(?:ntityReference|lement)|Attribute))|tabIndex|i(?:nsert(?:Row|Before|Cell|Data)|tem)|open|delete(?:Row|C(?:ell|aption)|T(?:Head|Foot)|Data)|focus|write(?:ln)?|a(?:dd|ppend(?:Child|Data))|re(?:set|place(?:Child|Data)|move(?:NamedItem|Child|Attribute(?:Node)?)?)|get(?:NamedItem|Element(?:sBy(?:Name|TagName|ClassName)|ById)|Attribute(?:Node)?)|blur)\b(?=\()/
            }, {
                token :  "support.constant",
                regex : /(s(?:ystemLanguage|cr(?:ipts|ollbars|een(?:X|Y|Top|Left))|t(?:yle(?:Sheets)?|atus(?:Text|bar)?)|ibling(?:Below|Above)|ource|uffixes|e(?:curity(?:Policy)?|l(?:ection|f)))|h(?:istory|ost(?:name)?|as(?:h|Focus))|y|X(?:MLDocument|SLDocument)|n(?:ext|ame(?:space(?:s|URI)|Prop))|M(?:IN_VALUE|AX_VALUE)|c(?:haracterSet|o(?:n(?:structor|trollers)|okieEnabled|lorDepth|mp(?:onents|lete))|urrent|puClass|l(?:i(?:p(?:boardData)?|entInformation)|osed|asses)|alle(?:e|r)|rypto)|t(?:o(?:olbar|p)|ext(?:Transform|Indent|Decoration|Align)|ags)|SQRT(?:1_2|2)|i(?:n(?:ner(?:Height|Width)|put)|ds|gnoreCase)|zIndex|o(?:scpu|n(?:readystatechange|Line)|uter(?:Height|Width)|p(?:sProfile|ener)|ffscreenBuffering)|NEGATIVE_INFINITY|d(?:i(?:splay|alog(?:Height|Top|Width|Left|Arguments)|rectories)|e(?:scription|fault(?:Status|Ch(?:ecked|arset)|View)))|u(?:ser(?:Profile|Language|Agent)|n(?:iqueID|defined)|pdateInterval)|_content|p(?:ixelDepth|ort|ersonalbar|kcs11|l(?:ugins|atform)|a(?:thname|dding(?:Right|Bottom|Top|Left)|rent(?:Window|Layer)?|ge(?:X(?:Offset)?|Y(?:Offset)?))|r(?:o(?:to(?:col|type)|duct(?:Sub)?|mpter)|e(?:vious|fix)))|e(?:n(?:coding|abledPlugin)|x(?:ternal|pando)|mbeds)|v(?:isibility|endor(?:Sub)?|Linkcolor)|URLUnencoded|P(?:I|OSITIVE_INFINITY)|f(?:ilename|o(?:nt(?:Size|Family|Weight)|rmName)|rame(?:s|Element)|gColor)|E|whiteSpace|l(?:i(?:stStyleType|n(?:eHeight|kColor))|o(?:ca(?:tion(?:bar)?|lName)|wsrc)|e(?:ngth|ft(?:Context)?)|a(?:st(?:M(?:odified|atch)|Index|Paren)|yer(?:s|X)|nguage))|a(?:pp(?:MinorVersion|Name|Co(?:deName|re)|Version)|vail(?:Height|Top|Width|Left)|ll|r(?:ity|guments)|Linkcolor|bove)|r(?:ight(?:Context)?|e(?:sponse(?:XML|Text)|adyState))|global|x|m(?:imeTypes|ultiline|enubar|argin(?:Right|Bottom|Top|Left))|L(?:N(?:10|2)|OG(?:10E|2E))|b(?:o(?:ttom|rder(?:Width|RightWidth|BottomWidth|Style|Color|TopWidth|LeftWidth))|ufferDepth|elow|ackground(?:Color|Image)))\b/
            }, {
                token : "identifier",
                regex : identifierRe
            }, {
                regex: "",
                token: "empty",
                next: "no_regex"
            }
        ],
        "start": [
            DocCommentHighlightRules.getStartRule("doc-start"),
            comments("start"),
            {
                token: "string.regexp",
                regex: "\\/",
                next: "regex"
            }, {
                token : "text",
                regex : "\\s+|^$",
                next : "start"
            }, {
                token: "empty",
                regex: "",
                next: "no_regex"
            }
        ],
        "regex": [
            {
                token: "regexp.keyword.operator",
                regex: "\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"
            }, {
                token: "string.regexp",
                regex: "/[sxngimy]*",
                next: "no_regex"
            }, {
                token : "invalid",
                regex: /\{\d+\b,?\d*\}[+*]|[+*$^?][+*]|[$^][?]|\?{3,}/
            }, {
                token : "constant.language.escape",
                regex: /\(\?[:=!]|\)|\{\d+\b,?\d*\}|[+*]\?|[()$^+*?.]/
            }, {
                token : "constant.language.delimiter",
                regex: /\|/
            }, {
                token: "constant.language.escape",
                regex: /\[\^?/,
                next: "regex_character_class"
            }, {
                token: "empty",
                regex: "$",
                next: "no_regex"
            }, {
                defaultToken: "string.regexp"
            }
        ],
        "regex_character_class": [
            {
                token: "regexp.charclass.keyword.operator",
                regex: "\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"
            }, {
                token: "constant.language.escape",
                regex: "]",
                next: "regex"
            }, {
                token: "constant.language.escape",
                regex: "-"
            }, {
                token: "empty",
                regex: "$",
                next: "no_regex"
            }, {
                defaultToken: "string.regexp.charachterclass"
            }
        ],
        "function_arguments": [
            {
                token: "variable.parameter",
                regex: identifierRe
            }, {
                token: "punctuation.operator",
                regex: "[, ]+"
            }, {
                token: "punctuation.operator",
                regex: "$"
            }, {
                token: "empty",
                regex: "",
                next: "no_regex"
            }
        ],
        "qqstring" : [
            {
                token : "constant.language.escape",
                regex : escapedRe
            }, {
                token : "string",
                regex : "\\\\$",
                consumeLineEnd  : true
            }, {
                token : "string",
                regex : '"|$',
                next  : "no_regex"
            }, {
                defaultToken: "string"
            }
        ],
        "qstring" : [
            {
                token : "constant.language.escape",
                regex : escapedRe
            }, {
                token : "string",
                regex : "\\\\$",
                consumeLineEnd  : true
            }, {
                token : "string",
                regex : "'|$",
                next  : "no_regex"
            }, {
                defaultToken: "string"
            }
        ]
    };


    if (!options || !options.noES6) {
        this.$rules.no_regex.unshift({
            regex: "[{}]", onMatch: function(val, state, stack) {
                this.next = val == "{" ? this.nextState : "";
                if (val == "{" && stack.length) {
                    stack.unshift("start", state);
                }
                else if (val == "}" && stack.length) {
                    stack.shift();
                    this.next = stack.shift();
                    if (this.next.indexOf("string") != -1 || this.next.indexOf("jsx") != -1)
                        return "paren.quasi.end";
                }
                return val == "{" ? "paren.lparen" : "paren.rparen";
            },
            nextState: "start"
        }, {
            token : "string.quasi.start",
            regex : /`/,
            push  : [{
                token : "constant.language.escape",
                regex : escapedRe
            }, {
                token : "paren.quasi.start",
                regex : /\${/,
                push  : "start"
            }, {
                token : "string.quasi.end",
                regex : /`/,
                next  : "pop"
            }, {
                defaultToken: "string.quasi"
            }]
        });

        if (!options || options.jsx != false)
            JSX.call(this);
    }

    this.embedRules(DocCommentHighlightRules, "doc-",
        [ DocCommentHighlightRules.getEndRule("no_regex") ]);

    this.normalizeRules();
};

oop.inherits(JavaScriptHighlightRules, TextHighlightRules);

function JSX() {
    var tagRegex = identifierRe.replace("\\d", "\\d\\-");
    var jsxTag = {
        onMatch : function(val, state, stack) {
            var offset = val.charAt(1) == "/" ? 2 : 1;
            if (offset == 1) {
                if (state != this.nextState)
                    stack.unshift(this.next, this.nextState, 0);
                else
                    stack.unshift(this.next);
                stack[2]++;
            } else if (offset == 2) {
                if (state == this.nextState) {
                    stack[1]--;
                    if (!stack[1] || stack[1] < 0) {
                        stack.shift();
                        stack.shift();
                    }
                }
            }
            return [{
                type: "meta.tag.punctuation." + (offset == 1 ? "" : "end-") + "tag-open.xml",
                value: val.slice(0, offset)
            }, {
                type: "meta.tag.tag-name.xml",
                value: val.substr(offset)
            }];
        },
        regex : "</?" + tagRegex + "",
        next: "jsxAttributes",
        nextState: "jsx"
    };
    this.$rules.start.unshift(jsxTag);
    var jsxJsRule = {
        regex: "{",
        token: "paren.quasi.start",
        push: "start"
    };
    this.$rules.jsx = [
        jsxJsRule,
        jsxTag,
        {include : "reference"},
        {defaultToken: "string"}
    ];
    this.$rules.jsxAttributes = [{
        token : "meta.tag.punctuation.tag-close.xml",
        regex : "/?>",
        onMatch : function(value, currentState, stack) {
            if (currentState == stack[0])
                stack.shift();
            if (value.length == 2) {
                if (stack[0] == this.nextState)
                    stack[1]--;
                if (!stack[1] || stack[1] < 0) {
                    stack.splice(0, 2);
                }
            }
            this.next = stack[0] || "start";
            return [{type: this.token, value: value}];
        },
        nextState: "jsx"
    },
    jsxJsRule,
    comments("jsxAttributes"),
    {
        token : "entity.other.attribute-name.xml",
        regex : tagRegex
    }, {
        token : "keyword.operator.attribute-equals.xml",
        regex : "="
    }, {
        token : "text.tag-whitespace.xml",
        regex : "\\s+"
    }, {
        token : "string.attribute-value.xml",
        regex : "'",
        stateName : "jsx_attr_q",
        push : [
            {token : "string.attribute-value.xml", regex: "'", next: "pop"},
            {include : "reference"},
            {defaultToken : "string.attribute-value.xml"}
        ]
    }, {
        token : "string.attribute-value.xml",
        regex : '"',
        stateName : "jsx_attr_qq",
        push : [
            {token : "string.attribute-value.xml", regex: '"', next: "pop"},
            {include : "reference"},
            {defaultToken : "string.attribute-value.xml"}
        ]
    },
    jsxTag
    ];
    this.$rules.reference = [{
        token : "constant.language.escape.reference.xml",
        regex : "(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"
    }];
}

function comments(next) {
    return [
        {
            token : "comment", // multi line comment
            regex : /\/\*/,
            next: [
                DocCommentHighlightRules.getTagRule(),
                {token : "comment", regex : "\\*\\/", next : next || "pop"},
                {defaultToken : "comment", caseInsensitive: true}
            ]
        }, {
            token : "comment",
            regex : "\\/\\/",
            next: [
                DocCommentHighlightRules.getTagRule(),
                {token : "comment", regex : "$|^", next : next || "pop"},
                {defaultToken : "comment", caseInsensitive: true}
            ]
        }
    ];
}
exports.JavaScriptHighlightRules = JavaScriptHighlightRules;
});

ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"], function(acequire, exports, module) {
"use strict";

var Range = acequire("../range").Range;

var MatchingBraceOutdent = function() {};

(function() {

    this.checkOutdent = function(line, input) {
        if (! /^\s+$/.test(line))
            return false;

        return /^\s*\}/.test(input);
    };

    this.autoOutdent = function(doc, row) {
        var line = doc.getLine(row);
        var match = line.match(/^(\s*\})/);

        if (!match) return 0;

        var column = match[1].length;
        var openBracePos = doc.findMatchingBracket({row: row, column: column});

        if (!openBracePos || openBracePos.row == row) return 0;

        var indent = this.$getIndent(doc.getLine(openBracePos.row));
        doc.replace(new Range(row, 0, row, column-1), indent);
    };

    this.$getIndent = function(line) {
        return line.match(/^\s*/)[0];
    };

}).call(MatchingBraceOutdent.prototype);

exports.MatchingBraceOutdent = MatchingBraceOutdent;
});

ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"], function(acequire, exports, module) {
"use strict";

var oop = acequire("../../lib/oop");
var Range = acequire("../../range").Range;
var BaseFoldMode = acequire("./fold_mode").FoldMode;

var FoldMode = exports.FoldMode = function(commentRegex) {
    if (commentRegex) {
        this.foldingStartMarker = new RegExp(
            this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.start)
        );
        this.foldingStopMarker = new RegExp(
            this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.end)
        );
    }
};
oop.inherits(FoldMode, BaseFoldMode);

(function() {
    
    this.foldingStartMarker = /([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/;
    this.foldingStopMarker = /^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/;
    this.singleLineBlockCommentRe= /^\s*(\/\*).*\*\/\s*$/;
    this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/;
    this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/;
    this._getFoldWidgetBase = this.getFoldWidget;
    this.getFoldWidget = function(session, foldStyle, row) {
        var line = session.getLine(row);
    
        if (this.singleLineBlockCommentRe.test(line)) {
            if (!this.startRegionRe.test(line) && !this.tripleStarBlockCommentRe.test(line))
                return "";
        }
    
        var fw = this._getFoldWidgetBase(session, foldStyle, row);
    
        if (!fw && this.startRegionRe.test(line))
            return "start"; // lineCommentRegionStart
    
        return fw;
    };

    this.getFoldWidgetRange = function(session, foldStyle, row, forceMultiline) {
        var line = session.getLine(row);
        
        if (this.startRegionRe.test(line))
            return this.getCommentRegionBlock(session, line, row);
        
        var match = line.match(this.foldingStartMarker);
        if (match) {
            var i = match.index;

            if (match[1])
                return this.openingBracketBlock(session, match[1], row, i);
                
            var range = session.getCommentFoldRange(row, i + match[0].length, 1);
            
            if (range && !range.isMultiLine()) {
                if (forceMultiline) {
                    range = this.getSectionRange(session, row);
                } else if (foldStyle != "all")
                    range = null;
            }
            
            return range;
        }

        if (foldStyle === "markbegin")
            return;

        var match = line.match(this.foldingStopMarker);
        if (match) {
            var i = match.index + match[0].length;

            if (match[1])
                return this.closingBracketBlock(session, match[1], row, i);

            return session.getCommentFoldRange(row, i, -1);
        }
    };
    
    this.getSectionRange = function(session, row) {
        var line = session.getLine(row);
        var startIndent = line.search(/\S/);
        var startRow = row;
        var startColumn = line.length;
        row = row + 1;
        var endRow = row;
        var maxRow = session.getLength();
        while (++row < maxRow) {
            line = session.getLine(row);
            var indent = line.search(/\S/);
            if (indent === -1)
                continue;
            if  (startIndent > indent)
                break;
            var subRange = this.getFoldWidgetRange(session, "all", row);
            
            if (subRange) {
                if (subRange.start.row <= startRow) {
                    break;
                } else if (subRange.isMultiLine()) {
                    row = subRange.end.row;
                } else if (startIndent == indent) {
                    break;
                }
            }
            endRow = row;
        }
        
        return new Range(startRow, startColumn, endRow, session.getLine(endRow).length);
    };
    this.getCommentRegionBlock = function(session, line, row) {
        var startColumn = line.search(/\s*$/);
        var maxRow = session.getLength();
        var startRow = row;
        
        var re = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/;
        var depth = 1;
        while (++row < maxRow) {
            line = session.getLine(row);
            var m = re.exec(line);
            if (!m) continue;
            if (m[1]) depth--;
            else depth++;

            if (!depth) break;
        }

        var endRow = row;
        if (endRow > startRow) {
            return new Range(startRow, startColumn, endRow, line.length);
        }
    };

}).call(FoldMode.prototype);

});

ace.define("ace/mode/javascript",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/javascript_highlight_rules","ace/mode/matching_brace_outdent","ace/worker/worker_client","ace/mode/behaviour/cstyle","ace/mode/folding/cstyle"], function(acequire, exports, module) {
"use strict";

var oop = acequire("../lib/oop");
var TextMode = acequire("./text").Mode;
var JavaScriptHighlightRules = acequire("./javascript_highlight_rules").JavaScriptHighlightRules;
var MatchingBraceOutdent = acequire("./matching_brace_outdent").MatchingBraceOutdent;
var WorkerClient = acequire("../worker/worker_client").WorkerClient;
var CstyleBehaviour = acequire("./behaviour/cstyle").CstyleBehaviour;
var CStyleFoldMode = acequire("./folding/cstyle").FoldMode;

var Mode = function() {
    this.HighlightRules = JavaScriptHighlightRules;
    
    this.$outdent = new MatchingBraceOutdent();
    this.$behaviour = new CstyleBehaviour();
    this.foldingRules = new CStyleFoldMode();
};
oop.inherits(Mode, TextMode);

(function() {

    this.lineCommentStart = "//";
    this.blockComment = {start: "/*", end: "*/"};
    this.$quotes = {'"': '"', "'": "'", "`": "`"};

    this.getNextLineIndent = function(state, line, tab) {
        var indent = this.$getIndent(line);

        var tokenizedLine = this.getTokenizer().getLineTokens(line, state);
        var tokens = tokenizedLine.tokens;
        var endState = tokenizedLine.state;

        if (tokens.length && tokens[tokens.length-1].type == "comment") {
            return indent;
        }

        if (state == "start" || state == "no_regex") {
            var match = line.match(/^.*(?:\bcase\b.*:|[\{\(\[])\s*$/);
            if (match) {
                indent += tab;
            }
        } else if (state == "doc-start") {
            if (endState == "start" || endState == "no_regex") {
                return "";
            }
            var match = line.match(/^\s*(\/?)\*/);
            if (match) {
                if (match[1]) {
                    indent += " ";
                }
                indent += "* ";
            }
        }

        return indent;
    };

    this.checkOutdent = function(state, line, input) {
        return this.$outdent.checkOutdent(line, input);
    };

    this.autoOutdent = function(state, doc, row) {
        this.$outdent.autoOutdent(doc, row);
    };

    this.createWorker = function(session) {
        var worker = new WorkerClient(["ace"], __webpack_require__(/*! ../worker/javascript */ "../../../node_modules/brace/worker/javascript.js"), "JavaScriptWorker");
        worker.attachToDocument(session.getDocument());

        worker.on("annotate", function(results) {
            session.setAnnotations(results.data);
        });

        worker.on("terminate", function() {
            session.clearAnnotations();
        });

        return worker;
    };

    this.$id = "ace/mode/javascript";
}).call(Mode.prototype);

exports.Mode = Mode;
});

ace.define("ace/mode/groovy_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"], function(acequire, exports, module) {
"use strict";

var oop = acequire("../lib/oop");
var DocCommentHighlightRules = acequire("./doc_comment_highlight_rules").DocCommentHighlightRules;
var TextHighlightRules = acequire("./text_highlight_rules").TextHighlightRules;

var GroovyHighlightRules = function() {

    var keywords = (
        "assert|with|abstract|continue|for|new|switch|" +
        "assert|default|goto|package|synchronized|" +
        "boolean|do|if|private|this|" +
        "break|double|implements|protected|throw|" +
        "byte|else|import|public|throws|" +
        "case|enum|instanceof|return|transient|" +
        "catch|extends|int|short|try|" +
        "char|final|interface|static|void|" +
        "class|finally|long|strictfp|volatile|" +
        "def|float|native|super|while"
    );

    var buildinConstants = (
        "null|Infinity|NaN|undefined"
    );

    var langClasses = (
        "AbstractMethodError|AssertionError|ClassCircularityError|"+
        "ClassFormatError|Deprecated|EnumConstantNotPresentException|"+
        "ExceptionInInitializerError|IllegalAccessError|"+
        "IllegalThreadStateException|InstantiationError|InternalError|"+
        "NegativeArraySizeException|NoSuchFieldError|Override|Process|"+
        "ProcessBuilder|SecurityManager|StringIndexOutOfBoundsException|"+
        "SuppressWarnings|TypeNotPresentException|UnknownError|"+
        "UnsatisfiedLinkError|UnsupportedClassVersionError|VerifyError|"+
        "InstantiationException|IndexOutOfBoundsException|"+
        "ArrayIndexOutOfBoundsException|CloneNotSupportedException|"+
        "NoSuchFieldException|IllegalArgumentException|NumberFormatException|"+
        "SecurityException|Void|InheritableThreadLocal|IllegalStateException|"+
        "InterruptedException|NoSuchMethodException|IllegalAccessException|"+
        "UnsupportedOperationException|Enum|StrictMath|Package|Compiler|"+
        "Readable|Runtime|StringBuilder|Math|IncompatibleClassChangeError|"+
        "NoSuchMethodError|ThreadLocal|RuntimePermission|ArithmeticException|"+
        "NullPointerException|Long|Integer|Short|Byte|Double|Number|Float|"+
        "Character|Boolean|StackTraceElement|Appendable|StringBuffer|"+
        "Iterable|ThreadGroup|Runnable|Thread|IllegalMonitorStateException|"+
        "StackOverflowError|OutOfMemoryError|VirtualMachineError|"+
        "ArrayStoreException|ClassCastException|LinkageError|"+
        "NoClassDefFoundError|ClassNotFoundException|RuntimeException|"+
        "Exception|ThreadDeath|Error|Throwable|System|ClassLoader|"+
        "Cloneable|Class|CharSequence|Comparable|String|Object"
    );

    var keywordMapper = this.createKeywordMapper({
        "variable.language": "this",
        "keyword": keywords,
        "support.function": langClasses,
        "constant.language": buildinConstants
    }, "identifier");

    this.$rules = {
        "start" : [
            {
                token : "comment",
                regex : "\\/\\/.*$"
            },
            DocCommentHighlightRules.getStartRule("doc-start"),
            {
                token : "comment", // multi line comment
                regex : "\\/\\*",
                next : "comment"
            }, {
                token : "string.regexp",
                regex : "[/](?:(?:\\[(?:\\\\]|[^\\]])+\\])|(?:\\\\/|[^\\]/]))*[/]\\w*\\s*(?=[).,;]|$)"
            }, {
                token : "string",
                regex : '"""',
                next  : "qqstring"
            }, {
                token : "string",
                regex : "'''",
                next  : "qstring"
            }, {
                token : "string", // single line
                regex : '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'
            }, {
                token : "string", // single line
                regex : "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"
            }, {
                token : "constant.numeric", // hex
                regex : "0[xX][0-9a-fA-F]+\\b"
            }, {
                token : "constant.numeric", // float
                regex : "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
            }, {
                token : "constant.language.boolean",
                regex : "(?:true|false)\\b"
            }, {
                token : keywordMapper,
                regex : "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
            }, {
                token : "keyword.operator",
                regex : "\\?:|\\?\\.|\\*\\.|<=>|=~|==~|\\.@|\\*\\.@|\\.&|as|in|is|!|\\$|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^=|\\b(?:in|instanceof|new|delete|typeof|void)"
            }, {
                token : "lparen",
                regex : "[[({]"
            }, {
                token : "rparen",
                regex : "[\\])}]"
            }, {
                token : "text",
                regex : "\\s+"
            }
        ],
        "comment" : [
            {
                token : "comment", // closing comment
                regex : "\\*\\/",
                next : "start"
            }, {
                defaultToken : "comment"
            }
        ],
        "qqstring" : [
            {
                token : "constant.language.escape",
                regex : /\\(?:u[0-9A-Fa-f]{4}|.|$)/
            }, {
                token : "constant.language.escape",
                regex : /\$[\w\d]+/
            }, {
                token : "constant.language.escape",
                regex : /\$\{[^"\}]+\}?/
            }, {
                token : "string",
                regex : '"{3,5}',
                next : "start"
            }, {
                token : "string",
                regex : '.+?'
            }
        ],
        "qstring" : [
            {
                token : "constant.language.escape",
                regex : /\\(?:u[0-9A-Fa-f]{4}|.|$)/
            }, {
                token : "string",
                regex : "'{3,5}",
                next : "start"
            }, {
                token : "string",
                regex : ".+?"
            }
        ]
    };

    this.embedRules(DocCommentHighlightRules, "doc-",
        [ DocCommentHighlightRules.getEndRule("start") ]);
};

oop.inherits(GroovyHighlightRules, TextHighlightRules);

exports.GroovyHighlightRules = GroovyHighlightRules;
});

ace.define("ace/mode/groovy",["require","exports","module","ace/lib/oop","ace/mode/javascript","ace/mode/groovy_highlight_rules"], function(acequire, exports, module) {
"use strict";

var oop = acequire("../lib/oop");
var JavaScriptMode = acequire("./javascript").Mode;
var GroovyHighlightRules = acequire("./groovy_highlight_rules").GroovyHighlightRules;

var Mode = function() {
    JavaScriptMode.call(this);
    this.HighlightRules = GroovyHighlightRules;
};
oop.inherits(Mode, JavaScriptMode);

(function() {

    this.createWorker = function(session) {
        return null;
    };

    this.$id = "ace/mode/groovy";
}).call(Mode.prototype);

exports.Mode = Mode;
});


/***/ }),

/***/ "../../../node_modules/brace/worker/javascript.js":
/*!*********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/brace/worker/javascript.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports.id = 'ace/mode/javascript_worker';
module.exports.src = "\"no use strict\";!function(window){function resolveModuleId(id,paths){for(var testPath=id,tail=\"\";testPath;){var alias=paths[testPath];if(\"string\"==typeof alias)return alias+tail;if(alias)return alias.location.replace(/\\/*$/,\"/\")+(tail||alias.main||alias.name);if(alias===!1)return\"\";var i=testPath.lastIndexOf(\"/\");if(-1===i)break;tail=testPath.substr(i)+tail,testPath=testPath.slice(0,i)}return id}if(!(void 0!==window.window&&window.document||window.acequire&&window.define)){window.console||(window.console=function(){var msgs=Array.prototype.slice.call(arguments,0);postMessage({type:\"log\",data:msgs})},window.console.error=window.console.warn=window.console.log=window.console.trace=window.console),window.window=window,window.ace=window,window.onerror=function(message,file,line,col,err){postMessage({type:\"error\",data:{message:message,data:err.data,file:file,line:line,col:col,stack:err.stack}})},window.normalizeModule=function(parentId,moduleName){if(-1!==moduleName.indexOf(\"!\")){var chunks=moduleName.split(\"!\");return window.normalizeModule(parentId,chunks[0])+\"!\"+window.normalizeModule(parentId,chunks[1])}if(\".\"==moduleName.charAt(0)){var base=parentId.split(\"/\").slice(0,-1).join(\"/\");for(moduleName=(base?base+\"/\":\"\")+moduleName;-1!==moduleName.indexOf(\".\")&&previous!=moduleName;){var previous=moduleName;moduleName=moduleName.replace(/^\\.\\//,\"\").replace(/\\/\\.\\//,\"/\").replace(/[^\\/]+\\/\\.\\.\\//,\"\")}}return moduleName},window.acequire=function acequire(parentId,id){if(id||(id=parentId,parentId=null),!id.charAt)throw Error(\"worker.js acequire() accepts only (parentId, id) as arguments\");id=window.normalizeModule(parentId,id);var module=window.acequire.modules[id];if(module)return module.initialized||(module.initialized=!0,module.exports=module.factory().exports),module.exports;if(!window.acequire.tlns)return console.log(\"unable to load \"+id);var path=resolveModuleId(id,window.acequire.tlns);return\".js\"!=path.slice(-3)&&(path+=\".js\"),window.acequire.id=id,window.acequire.modules[id]={},importScripts(path),window.acequire(parentId,id)},window.acequire.modules={},window.acequire.tlns={},window.define=function(id,deps,factory){if(2==arguments.length?(factory=deps,\"string\"!=typeof id&&(deps=id,id=window.acequire.id)):1==arguments.length&&(factory=id,deps=[],id=window.acequire.id),\"function\"!=typeof factory)return window.acequire.modules[id]={exports:factory,initialized:!0},void 0;deps.length||(deps=[\"require\",\"exports\",\"module\"]);var req=function(childId){return window.acequire(id,childId)};window.acequire.modules[id]={exports:{},factory:function(){var module=this,returnExports=factory.apply(this,deps.map(function(dep){switch(dep){case\"require\":return req;case\"exports\":return module.exports;case\"module\":return module;default:return req(dep)}}));return returnExports&&(module.exports=returnExports),module}}},window.define.amd={},acequire.tlns={},window.initBaseUrls=function(topLevelNamespaces){for(var i in topLevelNamespaces)acequire.tlns[i]=topLevelNamespaces[i]},window.initSender=function(){var EventEmitter=window.acequire(\"ace/lib/event_emitter\").EventEmitter,oop=window.acequire(\"ace/lib/oop\"),Sender=function(){};return function(){oop.implement(this,EventEmitter),this.callback=function(data,callbackId){postMessage({type:\"call\",id:callbackId,data:data})},this.emit=function(name,data){postMessage({type:\"event\",name:name,data:data})}}.call(Sender.prototype),new Sender};var main=window.main=null,sender=window.sender=null;window.onmessage=function(e){var msg=e.data;if(msg.event&&sender)sender._signal(msg.event,msg.data);else if(msg.command)if(main[msg.command])main[msg.command].apply(main,msg.args);else{if(!window[msg.command])throw Error(\"Unknown command:\"+msg.command);window[msg.command].apply(window,msg.args)}else if(msg.init){window.initBaseUrls(msg.tlns),acequire(\"ace/lib/es5-shim\"),sender=window.sender=window.initSender();var clazz=acequire(msg.module)[msg.classname];main=window.main=new clazz(sender)}}}}(this),ace.define(\"ace/lib/oop\",[\"require\",\"exports\",\"module\"],function(acequire,exports){\"use strict\";exports.inherits=function(ctor,superCtor){ctor.super_=superCtor,ctor.prototype=Object.create(superCtor.prototype,{constructor:{value:ctor,enumerable:!1,writable:!0,configurable:!0}})},exports.mixin=function(obj,mixin){for(var key in mixin)obj[key]=mixin[key];return obj},exports.implement=function(proto,mixin){exports.mixin(proto,mixin)}}),ace.define(\"ace/range\",[\"require\",\"exports\",\"module\"],function(acequire,exports){\"use strict\";var comparePoints=function(p1,p2){return p1.row-p2.row||p1.column-p2.column},Range=function(startRow,startColumn,endRow,endColumn){this.start={row:startRow,column:startColumn},this.end={row:endRow,column:endColumn}};(function(){this.isEqual=function(range){return this.start.row===range.start.row&&this.end.row===range.end.row&&this.start.column===range.start.column&&this.end.column===range.end.column},this.toString=function(){return\"Range: [\"+this.start.row+\"/\"+this.start.column+\"] -> [\"+this.end.row+\"/\"+this.end.column+\"]\"},this.contains=function(row,column){return 0==this.compare(row,column)},this.compareRange=function(range){var cmp,end=range.end,start=range.start;return cmp=this.compare(end.row,end.column),1==cmp?(cmp=this.compare(start.row,start.column),1==cmp?2:0==cmp?1:0):-1==cmp?-2:(cmp=this.compare(start.row,start.column),-1==cmp?-1:1==cmp?42:0)},this.comparePoint=function(p){return this.compare(p.row,p.column)},this.containsRange=function(range){return 0==this.comparePoint(range.start)&&0==this.comparePoint(range.end)},this.intersects=function(range){var cmp=this.compareRange(range);return-1==cmp||0==cmp||1==cmp},this.isEnd=function(row,column){return this.end.row==row&&this.end.column==column},this.isStart=function(row,column){return this.start.row==row&&this.start.column==column},this.setStart=function(row,column){\"object\"==typeof row?(this.start.column=row.column,this.start.row=row.row):(this.start.row=row,this.start.column=column)},this.setEnd=function(row,column){\"object\"==typeof row?(this.end.column=row.column,this.end.row=row.row):(this.end.row=row,this.end.column=column)},this.inside=function(row,column){return 0==this.compare(row,column)?this.isEnd(row,column)||this.isStart(row,column)?!1:!0:!1},this.insideStart=function(row,column){return 0==this.compare(row,column)?this.isEnd(row,column)?!1:!0:!1},this.insideEnd=function(row,column){return 0==this.compare(row,column)?this.isStart(row,column)?!1:!0:!1},this.compare=function(row,column){return this.isMultiLine()||row!==this.start.row?this.start.row>row?-1:row>this.end.row?1:this.start.row===row?column>=this.start.column?0:-1:this.end.row===row?this.end.column>=column?0:1:0:this.start.column>column?-1:column>this.end.column?1:0},this.compareStart=function(row,column){return this.start.row==row&&this.start.column==column?-1:this.compare(row,column)},this.compareEnd=function(row,column){return this.end.row==row&&this.end.column==column?1:this.compare(row,column)},this.compareInside=function(row,column){return this.end.row==row&&this.end.column==column?1:this.start.row==row&&this.start.column==column?-1:this.compare(row,column)},this.clipRows=function(firstRow,lastRow){if(this.end.row>lastRow)var end={row:lastRow+1,column:0};else if(firstRow>this.end.row)var end={row:firstRow,column:0};if(this.start.row>lastRow)var start={row:lastRow+1,column:0};else if(firstRow>this.start.row)var start={row:firstRow,column:0};return Range.fromPoints(start||this.start,end||this.end)},this.extend=function(row,column){var cmp=this.compare(row,column);if(0==cmp)return this;if(-1==cmp)var start={row:row,column:column};else var end={row:row,column:column};return Range.fromPoints(start||this.start,end||this.end)},this.isEmpty=function(){return this.start.row===this.end.row&&this.start.column===this.end.column},this.isMultiLine=function(){return this.start.row!==this.end.row},this.clone=function(){return Range.fromPoints(this.start,this.end)},this.collapseRows=function(){return 0==this.end.column?new Range(this.start.row,0,Math.max(this.start.row,this.end.row-1),0):new Range(this.start.row,0,this.end.row,0)},this.toScreenRange=function(session){var screenPosStart=session.documentToScreenPosition(this.start),screenPosEnd=session.documentToScreenPosition(this.end);return new Range(screenPosStart.row,screenPosStart.column,screenPosEnd.row,screenPosEnd.column)},this.moveBy=function(row,column){this.start.row+=row,this.start.column+=column,this.end.row+=row,this.end.column+=column}}).call(Range.prototype),Range.fromPoints=function(start,end){return new Range(start.row,start.column,end.row,end.column)},Range.comparePoints=comparePoints,Range.comparePoints=function(p1,p2){return p1.row-p2.row||p1.column-p2.column},exports.Range=Range}),ace.define(\"ace/apply_delta\",[\"require\",\"exports\",\"module\"],function(acequire,exports){\"use strict\";exports.applyDelta=function(docLines,delta){var row=delta.start.row,startColumn=delta.start.column,line=docLines[row]||\"\";switch(delta.action){case\"insert\":var lines=delta.lines;if(1===lines.length)docLines[row]=line.substring(0,startColumn)+delta.lines[0]+line.substring(startColumn);else{var args=[row,1].concat(delta.lines);docLines.splice.apply(docLines,args),docLines[row]=line.substring(0,startColumn)+docLines[row],docLines[row+delta.lines.length-1]+=line.substring(startColumn)}break;case\"remove\":var endColumn=delta.end.column,endRow=delta.end.row;row===endRow?docLines[row]=line.substring(0,startColumn)+line.substring(endColumn):docLines.splice(row,endRow-row+1,line.substring(0,startColumn)+docLines[endRow].substring(endColumn))}}}),ace.define(\"ace/lib/event_emitter\",[\"require\",\"exports\",\"module\"],function(acequire,exports){\"use strict\";var EventEmitter={},stopPropagation=function(){this.propagationStopped=!0},preventDefault=function(){this.defaultPrevented=!0};EventEmitter._emit=EventEmitter._dispatchEvent=function(eventName,e){this._eventRegistry||(this._eventRegistry={}),this._defaultHandlers||(this._defaultHandlers={});var listeners=this._eventRegistry[eventName]||[],defaultHandler=this._defaultHandlers[eventName];if(listeners.length||defaultHandler){\"object\"==typeof e&&e||(e={}),e.type||(e.type=eventName),e.stopPropagation||(e.stopPropagation=stopPropagation),e.preventDefault||(e.preventDefault=preventDefault),listeners=listeners.slice();for(var i=0;listeners.length>i&&(listeners[i](e,this),!e.propagationStopped);i++);return defaultHandler&&!e.defaultPrevented?defaultHandler(e,this):void 0}},EventEmitter._signal=function(eventName,e){var listeners=(this._eventRegistry||{})[eventName];if(listeners){listeners=listeners.slice();for(var i=0;listeners.length>i;i++)listeners[i](e,this)}},EventEmitter.once=function(eventName,callback){var _self=this;callback&&this.addEventListener(eventName,function newCallback(){_self.removeEventListener(eventName,newCallback),callback.apply(null,arguments)})},EventEmitter.setDefaultHandler=function(eventName,callback){var handlers=this._defaultHandlers;if(handlers||(handlers=this._defaultHandlers={_disabled_:{}}),handlers[eventName]){var old=handlers[eventName],disabled=handlers._disabled_[eventName];disabled||(handlers._disabled_[eventName]=disabled=[]),disabled.push(old);var i=disabled.indexOf(callback);-1!=i&&disabled.splice(i,1)}handlers[eventName]=callback},EventEmitter.removeDefaultHandler=function(eventName,callback){var handlers=this._defaultHandlers;if(handlers){var disabled=handlers._disabled_[eventName];if(handlers[eventName]==callback)handlers[eventName],disabled&&this.setDefaultHandler(eventName,disabled.pop());else if(disabled){var i=disabled.indexOf(callback);-1!=i&&disabled.splice(i,1)}}},EventEmitter.on=EventEmitter.addEventListener=function(eventName,callback,capturing){this._eventRegistry=this._eventRegistry||{};var listeners=this._eventRegistry[eventName];return listeners||(listeners=this._eventRegistry[eventName]=[]),-1==listeners.indexOf(callback)&&listeners[capturing?\"unshift\":\"push\"](callback),callback},EventEmitter.off=EventEmitter.removeListener=EventEmitter.removeEventListener=function(eventName,callback){this._eventRegistry=this._eventRegistry||{};var listeners=this._eventRegistry[eventName];if(listeners){var index=listeners.indexOf(callback);-1!==index&&listeners.splice(index,1)}},EventEmitter.removeAllListeners=function(eventName){this._eventRegistry&&(this._eventRegistry[eventName]=[])},exports.EventEmitter=EventEmitter}),ace.define(\"ace/anchor\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/lib/event_emitter\"],function(acequire,exports){\"use strict\";var oop=acequire(\"./lib/oop\"),EventEmitter=acequire(\"./lib/event_emitter\").EventEmitter,Anchor=exports.Anchor=function(doc,row,column){this.$onChange=this.onChange.bind(this),this.attach(doc),column===void 0?this.setPosition(row.row,row.column):this.setPosition(row,column)};(function(){function $pointsInOrder(point1,point2,equalPointsInOrder){var bColIsAfter=equalPointsInOrder?point1.column<=point2.column:point1.column<point2.column;return point1.row<point2.row||point1.row==point2.row&&bColIsAfter}function $getTransformedPoint(delta,point,moveIfEqual){var deltaIsInsert=\"insert\"==delta.action,deltaRowShift=(deltaIsInsert?1:-1)*(delta.end.row-delta.start.row),deltaColShift=(deltaIsInsert?1:-1)*(delta.end.column-delta.start.column),deltaStart=delta.start,deltaEnd=deltaIsInsert?deltaStart:delta.end;return $pointsInOrder(point,deltaStart,moveIfEqual)?{row:point.row,column:point.column}:$pointsInOrder(deltaEnd,point,!moveIfEqual)?{row:point.row+deltaRowShift,column:point.column+(point.row==deltaEnd.row?deltaColShift:0)}:{row:deltaStart.row,column:deltaStart.column}}oop.implement(this,EventEmitter),this.getPosition=function(){return this.$clipPositionToDocument(this.row,this.column)},this.getDocument=function(){return this.document},this.$insertRight=!1,this.onChange=function(delta){if(!(delta.start.row==delta.end.row&&delta.start.row!=this.row||delta.start.row>this.row)){var point=$getTransformedPoint(delta,{row:this.row,column:this.column},this.$insertRight);this.setPosition(point.row,point.column,!0)}},this.setPosition=function(row,column,noClip){var pos;if(pos=noClip?{row:row,column:column}:this.$clipPositionToDocument(row,column),this.row!=pos.row||this.column!=pos.column){var old={row:this.row,column:this.column};this.row=pos.row,this.column=pos.column,this._signal(\"change\",{old:old,value:pos})}},this.detach=function(){this.document.removeEventListener(\"change\",this.$onChange)},this.attach=function(doc){this.document=doc||this.document,this.document.on(\"change\",this.$onChange)},this.$clipPositionToDocument=function(row,column){var pos={};return row>=this.document.getLength()?(pos.row=Math.max(0,this.document.getLength()-1),pos.column=this.document.getLine(pos.row).length):0>row?(pos.row=0,pos.column=0):(pos.row=row,pos.column=Math.min(this.document.getLine(pos.row).length,Math.max(0,column))),0>column&&(pos.column=0),pos}}).call(Anchor.prototype)}),ace.define(\"ace/document\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/apply_delta\",\"ace/lib/event_emitter\",\"ace/range\",\"ace/anchor\"],function(acequire,exports){\"use strict\";var oop=acequire(\"./lib/oop\"),applyDelta=acequire(\"./apply_delta\").applyDelta,EventEmitter=acequire(\"./lib/event_emitter\").EventEmitter,Range=acequire(\"./range\").Range,Anchor=acequire(\"./anchor\").Anchor,Document=function(textOrLines){this.$lines=[\"\"],0===textOrLines.length?this.$lines=[\"\"]:Array.isArray(textOrLines)?this.insertMergedLines({row:0,column:0},textOrLines):this.insert({row:0,column:0},textOrLines)};(function(){oop.implement(this,EventEmitter),this.setValue=function(text){var len=this.getLength()-1;this.remove(new Range(0,0,len,this.getLine(len).length)),this.insert({row:0,column:0},text)},this.getValue=function(){return this.getAllLines().join(this.getNewLineCharacter())},this.createAnchor=function(row,column){return new Anchor(this,row,column)},this.$split=0===\"aaa\".split(/a/).length?function(text){return text.replace(/\\r\\n|\\r/g,\"\\n\").split(\"\\n\")}:function(text){return text.split(/\\r\\n|\\r|\\n/)},this.$detectNewLine=function(text){var match=text.match(/^.*?(\\r\\n|\\r|\\n)/m);this.$autoNewLine=match?match[1]:\"\\n\",this._signal(\"changeNewLineMode\")},this.getNewLineCharacter=function(){switch(this.$newLineMode){case\"windows\":return\"\\r\\n\";case\"unix\":return\"\\n\";default:return this.$autoNewLine||\"\\n\"}},this.$autoNewLine=\"\",this.$newLineMode=\"auto\",this.setNewLineMode=function(newLineMode){this.$newLineMode!==newLineMode&&(this.$newLineMode=newLineMode,this._signal(\"changeNewLineMode\"))},this.getNewLineMode=function(){return this.$newLineMode},this.isNewLine=function(text){return\"\\r\\n\"==text||\"\\r\"==text||\"\\n\"==text},this.getLine=function(row){return this.$lines[row]||\"\"},this.getLines=function(firstRow,lastRow){return this.$lines.slice(firstRow,lastRow+1)},this.getAllLines=function(){return this.getLines(0,this.getLength())},this.getLength=function(){return this.$lines.length},this.getTextRange=function(range){return this.getLinesForRange(range).join(this.getNewLineCharacter())},this.getLinesForRange=function(range){var lines;if(range.start.row===range.end.row)lines=[this.getLine(range.start.row).substring(range.start.column,range.end.column)];else{lines=this.getLines(range.start.row,range.end.row),lines[0]=(lines[0]||\"\").substring(range.start.column);var l=lines.length-1;range.end.row-range.start.row==l&&(lines[l]=lines[l].substring(0,range.end.column))}return lines},this.insertLines=function(row,lines){return console.warn(\"Use of document.insertLines is deprecated. Use the insertFullLines method instead.\"),this.insertFullLines(row,lines)},this.removeLines=function(firstRow,lastRow){return console.warn(\"Use of document.removeLines is deprecated. Use the removeFullLines method instead.\"),this.removeFullLines(firstRow,lastRow)},this.insertNewLine=function(position){return console.warn(\"Use of document.insertNewLine is deprecated. Use insertMergedLines(position, ['', '']) instead.\"),this.insertMergedLines(position,[\"\",\"\"])},this.insert=function(position,text){return 1>=this.getLength()&&this.$detectNewLine(text),this.insertMergedLines(position,this.$split(text))},this.insertInLine=function(position,text){var start=this.clippedPos(position.row,position.column),end=this.pos(position.row,position.column+text.length);return this.applyDelta({start:start,end:end,action:\"insert\",lines:[text]},!0),this.clonePos(end)},this.clippedPos=function(row,column){var length=this.getLength();void 0===row?row=length:0>row?row=0:row>=length&&(row=length-1,column=void 0);var line=this.getLine(row);return void 0==column&&(column=line.length),column=Math.min(Math.max(column,0),line.length),{row:row,column:column}},this.clonePos=function(pos){return{row:pos.row,column:pos.column}},this.pos=function(row,column){return{row:row,column:column}},this.$clipPosition=function(position){var length=this.getLength();return position.row>=length?(position.row=Math.max(0,length-1),position.column=this.getLine(length-1).length):(position.row=Math.max(0,position.row),position.column=Math.min(Math.max(position.column,0),this.getLine(position.row).length)),position},this.insertFullLines=function(row,lines){row=Math.min(Math.max(row,0),this.getLength());var column=0;this.getLength()>row?(lines=lines.concat([\"\"]),column=0):(lines=[\"\"].concat(lines),row--,column=this.$lines[row].length),this.insertMergedLines({row:row,column:column},lines)},this.insertMergedLines=function(position,lines){var start=this.clippedPos(position.row,position.column),end={row:start.row+lines.length-1,column:(1==lines.length?start.column:0)+lines[lines.length-1].length};return this.applyDelta({start:start,end:end,action:\"insert\",lines:lines}),this.clonePos(end)},this.remove=function(range){var start=this.clippedPos(range.start.row,range.start.column),end=this.clippedPos(range.end.row,range.end.column);return this.applyDelta({start:start,end:end,action:\"remove\",lines:this.getLinesForRange({start:start,end:end})}),this.clonePos(start)},this.removeInLine=function(row,startColumn,endColumn){var start=this.clippedPos(row,startColumn),end=this.clippedPos(row,endColumn);return this.applyDelta({start:start,end:end,action:\"remove\",lines:this.getLinesForRange({start:start,end:end})},!0),this.clonePos(start)},this.removeFullLines=function(firstRow,lastRow){firstRow=Math.min(Math.max(0,firstRow),this.getLength()-1),lastRow=Math.min(Math.max(0,lastRow),this.getLength()-1);var deleteFirstNewLine=lastRow==this.getLength()-1&&firstRow>0,deleteLastNewLine=this.getLength()-1>lastRow,startRow=deleteFirstNewLine?firstRow-1:firstRow,startCol=deleteFirstNewLine?this.getLine(startRow).length:0,endRow=deleteLastNewLine?lastRow+1:lastRow,endCol=deleteLastNewLine?0:this.getLine(endRow).length,range=new Range(startRow,startCol,endRow,endCol),deletedLines=this.$lines.slice(firstRow,lastRow+1);return this.applyDelta({start:range.start,end:range.end,action:\"remove\",lines:this.getLinesForRange(range)}),deletedLines},this.removeNewLine=function(row){this.getLength()-1>row&&row>=0&&this.applyDelta({start:this.pos(row,this.getLine(row).length),end:this.pos(row+1,0),action:\"remove\",lines:[\"\",\"\"]})},this.replace=function(range,text){if(range instanceof Range||(range=Range.fromPoints(range.start,range.end)),0===text.length&&range.isEmpty())return range.start;if(text==this.getTextRange(range))return range.end;this.remove(range);var end;return end=text?this.insert(range.start,text):range.start},this.applyDeltas=function(deltas){for(var i=0;deltas.length>i;i++)this.applyDelta(deltas[i])},this.revertDeltas=function(deltas){for(var i=deltas.length-1;i>=0;i--)this.revertDelta(deltas[i])},this.applyDelta=function(delta,doNotValidate){var isInsert=\"insert\"==delta.action;(isInsert?1>=delta.lines.length&&!delta.lines[0]:!Range.comparePoints(delta.start,delta.end))||(isInsert&&delta.lines.length>2e4&&this.$splitAndapplyLargeDelta(delta,2e4),applyDelta(this.$lines,delta,doNotValidate),this._signal(\"change\",delta))},this.$splitAndapplyLargeDelta=function(delta,MAX){for(var lines=delta.lines,l=lines.length,row=delta.start.row,column=delta.start.column,from=0,to=0;;){from=to,to+=MAX-1;var chunk=lines.slice(from,to);if(to>l){delta.lines=chunk,delta.start.row=row+from,delta.start.column=column;break}chunk.push(\"\"),this.applyDelta({start:this.pos(row+from,column),end:this.pos(row+to,column=0),action:delta.action,lines:chunk},!0)}},this.revertDelta=function(delta){this.applyDelta({start:this.clonePos(delta.start),end:this.clonePos(delta.end),action:\"insert\"==delta.action?\"remove\":\"insert\",lines:delta.lines.slice()})},this.indexToPosition=function(index,startRow){for(var lines=this.$lines||this.getAllLines(),newlineLength=this.getNewLineCharacter().length,i=startRow||0,l=lines.length;l>i;i++)if(index-=lines[i].length+newlineLength,0>index)return{row:i,column:index+lines[i].length+newlineLength};return{row:l-1,column:lines[l-1].length}},this.positionToIndex=function(pos,startRow){for(var lines=this.$lines||this.getAllLines(),newlineLength=this.getNewLineCharacter().length,index=0,row=Math.min(pos.row,lines.length),i=startRow||0;row>i;++i)index+=lines[i].length+newlineLength;return index+pos.column}}).call(Document.prototype),exports.Document=Document}),ace.define(\"ace/lib/lang\",[\"require\",\"exports\",\"module\"],function(acequire,exports){\"use strict\";exports.last=function(a){return a[a.length-1]},exports.stringReverse=function(string){return string.split(\"\").reverse().join(\"\")},exports.stringRepeat=function(string,count){for(var result=\"\";count>0;)1&count&&(result+=string),(count>>=1)&&(string+=string);return result};var trimBeginRegexp=/^\\s\\s*/,trimEndRegexp=/\\s\\s*$/;exports.stringTrimLeft=function(string){return string.replace(trimBeginRegexp,\"\")},exports.stringTrimRight=function(string){return string.replace(trimEndRegexp,\"\")},exports.copyObject=function(obj){var copy={};for(var key in obj)copy[key]=obj[key];return copy},exports.copyArray=function(array){for(var copy=[],i=0,l=array.length;l>i;i++)copy[i]=array[i]&&\"object\"==typeof array[i]?this.copyObject(array[i]):array[i];return copy},exports.deepCopy=function deepCopy(obj){if(\"object\"!=typeof obj||!obj)return obj;var copy;if(Array.isArray(obj)){copy=[];for(var key=0;obj.length>key;key++)copy[key]=deepCopy(obj[key]);return copy}if(\"[object Object]\"!==Object.prototype.toString.call(obj))return obj;copy={};for(var key in obj)copy[key]=deepCopy(obj[key]);return copy},exports.arrayToMap=function(arr){for(var map={},i=0;arr.length>i;i++)map[arr[i]]=1;return map},exports.createMap=function(props){var map=Object.create(null);for(var i in props)map[i]=props[i];return map},exports.arrayRemove=function(array,value){for(var i=0;array.length>=i;i++)value===array[i]&&array.splice(i,1)},exports.escapeRegExp=function(str){return str.replace(/([.*+?^${}()|[\\]\\/\\\\])/g,\"\\\\$1\")},exports.escapeHTML=function(str){return str.replace(/&/g,\"&#38;\").replace(/\"/g,\"&#34;\").replace(/'/g,\"&#39;\").replace(/</g,\"&#60;\")},exports.getMatchOffsets=function(string,regExp){var matches=[];return string.replace(regExp,function(str){matches.push({offset:arguments[arguments.length-2],length:str.length})}),matches},exports.deferredCall=function(fcn){var timer=null,callback=function(){timer=null,fcn()},deferred=function(timeout){return deferred.cancel(),timer=setTimeout(callback,timeout||0),deferred};return deferred.schedule=deferred,deferred.call=function(){return this.cancel(),fcn(),deferred},deferred.cancel=function(){return clearTimeout(timer),timer=null,deferred},deferred.isPending=function(){return timer},deferred},exports.delayedCall=function(fcn,defaultTimeout){var timer=null,callback=function(){timer=null,fcn()},_self=function(timeout){null==timer&&(timer=setTimeout(callback,timeout||defaultTimeout))};return _self.delay=function(timeout){timer&&clearTimeout(timer),timer=setTimeout(callback,timeout||defaultTimeout)},_self.schedule=_self,_self.call=function(){this.cancel(),fcn()},_self.cancel=function(){timer&&clearTimeout(timer),timer=null},_self.isPending=function(){return timer},_self}}),ace.define(\"ace/worker/mirror\",[\"require\",\"exports\",\"module\",\"ace/range\",\"ace/document\",\"ace/lib/lang\"],function(acequire,exports){\"use strict\";acequire(\"../range\").Range;var Document=acequire(\"../document\").Document,lang=acequire(\"../lib/lang\"),Mirror=exports.Mirror=function(sender){this.sender=sender;var doc=this.doc=new Document(\"\"),deferredUpdate=this.deferredUpdate=lang.delayedCall(this.onUpdate.bind(this)),_self=this;sender.on(\"change\",function(e){var data=e.data;if(data[0].start)doc.applyDeltas(data);else for(var i=0;data.length>i;i+=2){if(Array.isArray(data[i+1]))var d={action:\"insert\",start:data[i],lines:data[i+1]};else var d={action:\"remove\",start:data[i],end:data[i+1]};doc.applyDelta(d,!0)}return _self.$timeout?deferredUpdate.schedule(_self.$timeout):(_self.onUpdate(),void 0)})};(function(){this.$timeout=500,this.setTimeout=function(timeout){this.$timeout=timeout},this.setValue=function(value){this.doc.setValue(value),this.deferredUpdate.schedule(this.$timeout)},this.getValue=function(callbackId){this.sender.callback(this.doc.getValue(),callbackId)},this.onUpdate=function(){},this.isPending=function(){return this.deferredUpdate.isPending()}}).call(Mirror.prototype)}),ace.define(\"ace/mode/javascript/jshint\",[\"require\",\"exports\",\"module\"],function(acequire,exports,module){module.exports=function outer(modules,cache,entry){function newRequire(name,jumped){if(!cache[name]){if(!modules[name]){var currentRequire=\"function\"==typeof acequire&&acequire;if(!jumped&&currentRequire)return currentRequire(name,!0);if(previousRequire)return previousRequire(name,!0);var err=Error(\"Cannot find module '\"+name+\"'\");throw err.code=\"MODULE_NOT_FOUND\",err}var m=cache[name]={exports:{}};modules[name][0].call(m.exports,function(x){var id=modules[name][1][x];return newRequire(id?id:x)},m,m.exports,outer,modules,cache,entry)}return cache[name].exports}for(var previousRequire=\"function\"==typeof acequire&&acequire,i=0;entry.length>i;i++)newRequire(entry[i]);return newRequire(entry[0])}({\"/node_modules/browserify/node_modules/events/events.js\":[function(_dereq_,module){function EventEmitter(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function isFunction(arg){return\"function\"==typeof arg}function isNumber(arg){return\"number\"==typeof arg}function isObject(arg){return\"object\"==typeof arg&&null!==arg}function isUndefined(arg){return void 0===arg}module.exports=EventEmitter,EventEmitter.EventEmitter=EventEmitter,EventEmitter.prototype._events=void 0,EventEmitter.prototype._maxListeners=void 0,EventEmitter.defaultMaxListeners=10,EventEmitter.prototype.setMaxListeners=function(n){if(!isNumber(n)||0>n||isNaN(n))throw TypeError(\"n must be a positive number\");return this._maxListeners=n,this},EventEmitter.prototype.emit=function(type){var er,handler,len,args,i,listeners;if(this._events||(this._events={}),\"error\"===type&&(!this._events.error||isObject(this._events.error)&&!this._events.error.length)){if(er=arguments[1],er instanceof Error)throw er;throw TypeError('Uncaught, unspecified \"error\" event.')}if(handler=this._events[type],isUndefined(handler))return!1;if(isFunction(handler))switch(arguments.length){case 1:handler.call(this);break;case 2:handler.call(this,arguments[1]);break;case 3:handler.call(this,arguments[1],arguments[2]);break;default:for(len=arguments.length,args=Array(len-1),i=1;len>i;i++)args[i-1]=arguments[i];handler.apply(this,args)}else if(isObject(handler)){for(len=arguments.length,args=Array(len-1),i=1;len>i;i++)args[i-1]=arguments[i];for(listeners=handler.slice(),len=listeners.length,i=0;len>i;i++)listeners[i].apply(this,args)}return!0},EventEmitter.prototype.addListener=function(type,listener){var m;if(!isFunction(listener))throw TypeError(\"listener must be a function\");if(this._events||(this._events={}),this._events.newListener&&this.emit(\"newListener\",type,isFunction(listener.listener)?listener.listener:listener),this._events[type]?isObject(this._events[type])?this._events[type].push(listener):this._events[type]=[this._events[type],listener]:this._events[type]=listener,isObject(this._events[type])&&!this._events[type].warned){var m;m=isUndefined(this._maxListeners)?EventEmitter.defaultMaxListeners:this._maxListeners,m&&m>0&&this._events[type].length>m&&(this._events[type].warned=!0,console.error(\"(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.\",this._events[type].length),\"function\"==typeof console.trace&&console.trace())}return this},EventEmitter.prototype.on=EventEmitter.prototype.addListener,EventEmitter.prototype.once=function(type,listener){function g(){this.removeListener(type,g),fired||(fired=!0,listener.apply(this,arguments))}if(!isFunction(listener))throw TypeError(\"listener must be a function\");var fired=!1;return g.listener=listener,this.on(type,g),this},EventEmitter.prototype.removeListener=function(type,listener){var list,position,length,i;if(!isFunction(listener))throw TypeError(\"listener must be a function\");if(!this._events||!this._events[type])return this;if(list=this._events[type],length=list.length,position=-1,list===listener||isFunction(list.listener)&&list.listener===listener)delete this._events[type],this._events.removeListener&&this.emit(\"removeListener\",type,listener);else if(isObject(list)){for(i=length;i-->0;)if(list[i]===listener||list[i].listener&&list[i].listener===listener){position=i;break}if(0>position)return this;1===list.length?(list.length=0,delete this._events[type]):list.splice(position,1),this._events.removeListener&&this.emit(\"removeListener\",type,listener)}return this},EventEmitter.prototype.removeAllListeners=function(type){var key,listeners;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[type]&&delete this._events[type],this;if(0===arguments.length){for(key in this._events)\"removeListener\"!==key&&this.removeAllListeners(key);return this.removeAllListeners(\"removeListener\"),this._events={},this\n}if(listeners=this._events[type],isFunction(listeners))this.removeListener(type,listeners);else for(;listeners.length;)this.removeListener(type,listeners[listeners.length-1]);return delete this._events[type],this},EventEmitter.prototype.listeners=function(type){var ret;return ret=this._events&&this._events[type]?isFunction(this._events[type])?[this._events[type]]:this._events[type].slice():[]},EventEmitter.listenerCount=function(emitter,type){var ret;return ret=emitter._events&&emitter._events[type]?isFunction(emitter._events[type])?1:emitter._events[type].length:0}},{}],\"/node_modules/jshint/data/ascii-identifier-data.js\":[function(_dereq_,module){for(var identifierStartTable=[],i=0;128>i;i++)identifierStartTable[i]=36===i||i>=65&&90>=i||95===i||i>=97&&122>=i;for(var identifierPartTable=[],i=0;128>i;i++)identifierPartTable[i]=identifierStartTable[i]||i>=48&&57>=i;module.exports={asciiIdentifierStartTable:identifierStartTable,asciiIdentifierPartTable:identifierPartTable}},{}],\"/node_modules/jshint/lodash.js\":[function(_dereq_,module,exports){(function(global){(function(){function baseFindIndex(array,predicate,fromRight){for(var length=array.length,index=fromRight?length:-1;fromRight?index--:length>++index;)if(predicate(array[index],index,array))return index;return-1}function baseIndexOf(array,value,fromIndex){if(value!==value)return indexOfNaN(array,fromIndex);for(var index=fromIndex-1,length=array.length;length>++index;)if(array[index]===value)return index;return-1}function baseIsFunction(value){return\"function\"==typeof value||!1}function baseToString(value){return\"string\"==typeof value?value:null==value?\"\":value+\"\"}function indexOfNaN(array,fromIndex,fromRight){for(var length=array.length,index=fromIndex+(fromRight?0:-1);fromRight?index--:length>++index;){var other=array[index];if(other!==other)return index}return-1}function isObjectLike(value){return!!value&&\"object\"==typeof value}function lodash(){}function arrayCopy(source,array){var index=-1,length=source.length;for(array||(array=Array(length));length>++index;)array[index]=source[index];return array}function arrayEach(array,iteratee){for(var index=-1,length=array.length;length>++index&&iteratee(array[index],index,array)!==!1;);return array}function arrayFilter(array,predicate){for(var index=-1,length=array.length,resIndex=-1,result=[];length>++index;){var value=array[index];predicate(value,index,array)&&(result[++resIndex]=value)}return result}function arrayMap(array,iteratee){for(var index=-1,length=array.length,result=Array(length);length>++index;)result[index]=iteratee(array[index],index,array);return result}function arrayMax(array){for(var index=-1,length=array.length,result=NEGATIVE_INFINITY;length>++index;){var value=array[index];value>result&&(result=value)}return result}function arraySome(array,predicate){for(var index=-1,length=array.length;length>++index;)if(predicate(array[index],index,array))return!0;return!1}function assignWith(object,source,customizer){var props=keys(source);push.apply(props,getSymbols(source));for(var index=-1,length=props.length;length>++index;){var key=props[index],value=object[key],result=customizer(value,source[key],key,object,source);(result===result?result===value:value!==value)&&(value!==undefined||key in object)||(object[key]=result)}return object}function baseCopy(source,props,object){object||(object={});for(var index=-1,length=props.length;length>++index;){var key=props[index];object[key]=source[key]}return object}function baseCallback(func,thisArg,argCount){var type=typeof func;return\"function\"==type?thisArg===undefined?func:bindCallback(func,thisArg,argCount):null==func?identity:\"object\"==type?baseMatches(func):thisArg===undefined?property(func):baseMatchesProperty(func,thisArg)}function baseClone(value,isDeep,customizer,key,object,stackA,stackB){var result;if(customizer&&(result=object?customizer(value,key,object):customizer(value)),result!==undefined)return result;if(!isObject(value))return value;var isArr=isArray(value);if(isArr){if(result=initCloneArray(value),!isDeep)return arrayCopy(value,result)}else{var tag=objToString.call(value),isFunc=tag==funcTag;if(tag!=objectTag&&tag!=argsTag&&(!isFunc||object))return cloneableTags[tag]?initCloneByTag(value,tag,isDeep):object?value:{};if(result=initCloneObject(isFunc?{}:value),!isDeep)return baseAssign(result,value)}stackA||(stackA=[]),stackB||(stackB=[]);for(var length=stackA.length;length--;)if(stackA[length]==value)return stackB[length];return stackA.push(value),stackB.push(result),(isArr?arrayEach:baseForOwn)(value,function(subValue,key){result[key]=baseClone(subValue,isDeep,customizer,key,value,stackA,stackB)}),result}function baseFilter(collection,predicate){var result=[];return baseEach(collection,function(value,index,collection){predicate(value,index,collection)&&result.push(value)}),result}function baseForIn(object,iteratee){return baseFor(object,iteratee,keysIn)}function baseForOwn(object,iteratee){return baseFor(object,iteratee,keys)}function baseGet(object,path,pathKey){if(null!=object){pathKey!==undefined&&pathKey in toObject(object)&&(path=[pathKey]);for(var index=-1,length=path.length;null!=object&&length>++index;)var result=object=object[path[index]];return result}}function baseIsEqual(value,other,customizer,isLoose,stackA,stackB){if(value===other)return 0!==value||1/value==1/other;var valType=typeof value,othType=typeof other;return\"function\"!=valType&&\"object\"!=valType&&\"function\"!=othType&&\"object\"!=othType||null==value||null==other?value!==value&&other!==other:baseIsEqualDeep(value,other,baseIsEqual,customizer,isLoose,stackA,stackB)}function baseIsEqualDeep(object,other,equalFunc,customizer,isLoose,stackA,stackB){var objIsArr=isArray(object),othIsArr=isArray(other),objTag=arrayTag,othTag=arrayTag;objIsArr||(objTag=objToString.call(object),objTag==argsTag?objTag=objectTag:objTag!=objectTag&&(objIsArr=isTypedArray(object))),othIsArr||(othTag=objToString.call(other),othTag==argsTag?othTag=objectTag:othTag!=objectTag&&(othIsArr=isTypedArray(other)));var objIsObj=objTag==objectTag,othIsObj=othTag==objectTag,isSameTag=objTag==othTag;if(isSameTag&&!objIsArr&&!objIsObj)return equalByTag(object,other,objTag);if(!isLoose){var valWrapped=objIsObj&&hasOwnProperty.call(object,\"__wrapped__\"),othWrapped=othIsObj&&hasOwnProperty.call(other,\"__wrapped__\");if(valWrapped||othWrapped)return equalFunc(valWrapped?object.value():object,othWrapped?other.value():other,customizer,isLoose,stackA,stackB)}if(!isSameTag)return!1;stackA||(stackA=[]),stackB||(stackB=[]);for(var length=stackA.length;length--;)if(stackA[length]==object)return stackB[length]==other;stackA.push(object),stackB.push(other);var result=(objIsArr?equalArrays:equalObjects)(object,other,equalFunc,customizer,isLoose,stackA,stackB);return stackA.pop(),stackB.pop(),result}function baseIsMatch(object,props,values,strictCompareFlags,customizer){for(var index=-1,length=props.length,noCustomizer=!customizer;length>++index;)if(noCustomizer&&strictCompareFlags[index]?values[index]!==object[props[index]]:!(props[index]in object))return!1;for(index=-1;length>++index;){var key=props[index],objValue=object[key],srcValue=values[index];if(noCustomizer&&strictCompareFlags[index])var result=objValue!==undefined||key in object;else result=customizer?customizer(objValue,srcValue,key):undefined,result===undefined&&(result=baseIsEqual(srcValue,objValue,customizer,!0));if(!result)return!1}return!0}function baseMatches(source){var props=keys(source),length=props.length;if(!length)return constant(!0);if(1==length){var key=props[0],value=source[key];if(isStrictComparable(value))return function(object){return null==object?!1:object[key]===value&&(value!==undefined||key in toObject(object))}}for(var values=Array(length),strictCompareFlags=Array(length);length--;)value=source[props[length]],values[length]=value,strictCompareFlags[length]=isStrictComparable(value);return function(object){return null!=object&&baseIsMatch(toObject(object),props,values,strictCompareFlags)}}function baseMatchesProperty(path,value){var isArr=isArray(path),isCommon=isKey(path)&&isStrictComparable(value),pathKey=path+\"\";return path=toPath(path),function(object){if(null==object)return!1;var key=pathKey;if(object=toObject(object),!(!isArr&&isCommon||key in object)){if(object=1==path.length?object:baseGet(object,baseSlice(path,0,-1)),null==object)return!1;key=last(path),object=toObject(object)}return object[key]===value?value!==undefined||key in object:baseIsEqual(value,object[key],null,!0)}}function baseMerge(object,source,customizer,stackA,stackB){if(!isObject(object))return object;var isSrcArr=isLength(source.length)&&(isArray(source)||isTypedArray(source));if(!isSrcArr){var props=keys(source);push.apply(props,getSymbols(source))}return arrayEach(props||source,function(srcValue,key){if(props&&(key=srcValue,srcValue=source[key]),isObjectLike(srcValue))stackA||(stackA=[]),stackB||(stackB=[]),baseMergeDeep(object,source,key,baseMerge,customizer,stackA,stackB);else{var value=object[key],result=customizer?customizer(value,srcValue,key,object,source):undefined,isCommon=result===undefined;isCommon&&(result=srcValue),!isSrcArr&&result===undefined||!isCommon&&(result===result?result===value:value!==value)||(object[key]=result)}}),object}function baseMergeDeep(object,source,key,mergeFunc,customizer,stackA,stackB){for(var length=stackA.length,srcValue=source[key];length--;)if(stackA[length]==srcValue)return object[key]=stackB[length],undefined;var value=object[key],result=customizer?customizer(value,srcValue,key,object,source):undefined,isCommon=result===undefined;isCommon&&(result=srcValue,isLength(srcValue.length)&&(isArray(srcValue)||isTypedArray(srcValue))?result=isArray(value)?value:getLength(value)?arrayCopy(value):[]:isPlainObject(srcValue)||isArguments(srcValue)?result=isArguments(value)?toPlainObject(value):isPlainObject(value)?value:{}:isCommon=!1),stackA.push(srcValue),stackB.push(result),isCommon?object[key]=mergeFunc(result,srcValue,customizer,stackA,stackB):(result===result?result!==value:value===value)&&(object[key]=result)}function baseProperty(key){return function(object){return null==object?undefined:object[key]}}function basePropertyDeep(path){var pathKey=path+\"\";return path=toPath(path),function(object){return baseGet(object,path,pathKey)}}function baseSlice(array,start,end){var index=-1,length=array.length;start=null==start?0:+start||0,0>start&&(start=-start>length?0:length+start),end=end===undefined||end>length?length:+end||0,0>end&&(end+=length),length=start>end?0:end-start>>>0,start>>>=0;for(var result=Array(length);length>++index;)result[index]=array[index+start];return result}function baseSome(collection,predicate){var result;return baseEach(collection,function(value,index,collection){return result=predicate(value,index,collection),!result}),!!result}function baseValues(object,props){for(var index=-1,length=props.length,result=Array(length);length>++index;)result[index]=object[props[index]];return result}function binaryIndex(array,value,retHighest){var low=0,high=array?array.length:low;if(\"number\"==typeof value&&value===value&&HALF_MAX_ARRAY_LENGTH>=high){for(;high>low;){var mid=low+high>>>1,computed=array[mid];(retHighest?value>=computed:value>computed)?low=mid+1:high=mid}return high}return binaryIndexBy(array,value,identity,retHighest)}function binaryIndexBy(array,value,iteratee,retHighest){value=iteratee(value);for(var low=0,high=array?array.length:0,valIsNaN=value!==value,valIsUndef=value===undefined;high>low;){var mid=floor((low+high)/2),computed=iteratee(array[mid]),isReflexive=computed===computed;if(valIsNaN)var setLow=isReflexive||retHighest;else setLow=valIsUndef?isReflexive&&(retHighest||computed!==undefined):retHighest?value>=computed:value>computed;setLow?low=mid+1:high=mid}return nativeMin(high,MAX_ARRAY_INDEX)}function bindCallback(func,thisArg,argCount){if(\"function\"!=typeof func)return identity;if(thisArg===undefined)return func;switch(argCount){case 1:return function(value){return func.call(thisArg,value)};case 3:return function(value,index,collection){return func.call(thisArg,value,index,collection)};case 4:return function(accumulator,value,index,collection){return func.call(thisArg,accumulator,value,index,collection)};case 5:return function(value,other,key,object,source){return func.call(thisArg,value,other,key,object,source)}}return function(){return func.apply(thisArg,arguments)}}function bufferClone(buffer){return bufferSlice.call(buffer,0)}function createAssigner(assigner){return restParam(function(object,sources){var index=-1,length=null==object?0:sources.length,customizer=length>2&&sources[length-2],guard=length>2&&sources[2],thisArg=length>1&&sources[length-1];for(\"function\"==typeof customizer?(customizer=bindCallback(customizer,thisArg,5),length-=2):(customizer=\"function\"==typeof thisArg?thisArg:null,length-=customizer?1:0),guard&&isIterateeCall(sources[0],sources[1],guard)&&(customizer=3>length?null:customizer,length=1);length>++index;){var source=sources[index];source&&assigner(object,source,customizer)}return object})}function createBaseEach(eachFunc,fromRight){return function(collection,iteratee){var length=collection?getLength(collection):0;if(!isLength(length))return eachFunc(collection,iteratee);for(var index=fromRight?length:-1,iterable=toObject(collection);(fromRight?index--:length>++index)&&iteratee(iterable[index],index,iterable)!==!1;);return collection}}function createBaseFor(fromRight){return function(object,iteratee,keysFunc){for(var iterable=toObject(object),props=keysFunc(object),length=props.length,index=fromRight?length:-1;fromRight?index--:length>++index;){var key=props[index];if(iteratee(iterable[key],key,iterable)===!1)break}return object}}function createFindIndex(fromRight){return function(array,predicate,thisArg){return array&&array.length?(predicate=getCallback(predicate,thisArg,3),baseFindIndex(array,predicate,fromRight)):-1}}function createForEach(arrayFunc,eachFunc){return function(collection,iteratee,thisArg){return\"function\"==typeof iteratee&&thisArg===undefined&&isArray(collection)?arrayFunc(collection,iteratee):eachFunc(collection,bindCallback(iteratee,thisArg,3))}}function equalArrays(array,other,equalFunc,customizer,isLoose,stackA,stackB){var index=-1,arrLength=array.length,othLength=other.length,result=!0;if(arrLength!=othLength&&!(isLoose&&othLength>arrLength))return!1;for(;result&&arrLength>++index;){var arrValue=array[index],othValue=other[index];if(result=undefined,customizer&&(result=isLoose?customizer(othValue,arrValue,index):customizer(arrValue,othValue,index)),result===undefined)if(isLoose)for(var othIndex=othLength;othIndex--&&(othValue=other[othIndex],!(result=arrValue&&arrValue===othValue||equalFunc(arrValue,othValue,customizer,isLoose,stackA,stackB))););else result=arrValue&&arrValue===othValue||equalFunc(arrValue,othValue,customizer,isLoose,stackA,stackB)}return!!result}function equalByTag(object,other,tag){switch(tag){case boolTag:case dateTag:return+object==+other;case errorTag:return object.name==other.name&&object.message==other.message;case numberTag:return object!=+object?other!=+other:0==object?1/object==1/other:object==+other;case regexpTag:case stringTag:return object==other+\"\"}return!1}function equalObjects(object,other,equalFunc,customizer,isLoose,stackA,stackB){var objProps=keys(object),objLength=objProps.length,othProps=keys(other),othLength=othProps.length;if(objLength!=othLength&&!isLoose)return!1;for(var skipCtor=isLoose,index=-1;objLength>++index;){var key=objProps[index],result=isLoose?key in other:hasOwnProperty.call(other,key);if(result){var objValue=object[key],othValue=other[key];result=undefined,customizer&&(result=isLoose?customizer(othValue,objValue,key):customizer(objValue,othValue,key)),result===undefined&&(result=objValue&&objValue===othValue||equalFunc(objValue,othValue,customizer,isLoose,stackA,stackB))}if(!result)return!1;skipCtor||(skipCtor=\"constructor\"==key)}if(!skipCtor){var objCtor=object.constructor,othCtor=other.constructor;if(objCtor!=othCtor&&\"constructor\"in object&&\"constructor\"in other&&!(\"function\"==typeof objCtor&&objCtor instanceof objCtor&&\"function\"==typeof othCtor&&othCtor instanceof othCtor))return!1}return!0}function getCallback(func,thisArg,argCount){var result=lodash.callback||callback;return result=result===callback?baseCallback:result,argCount?result(func,thisArg,argCount):result}function getIndexOf(collection,target,fromIndex){var result=lodash.indexOf||indexOf;return result=result===indexOf?baseIndexOf:result,collection?result(collection,target,fromIndex):result}function initCloneArray(array){var length=array.length,result=new array.constructor(length);return length&&\"string\"==typeof array[0]&&hasOwnProperty.call(array,\"index\")&&(result.index=array.index,result.input=array.input),result}function initCloneObject(object){var Ctor=object.constructor;return\"function\"==typeof Ctor&&Ctor instanceof Ctor||(Ctor=Object),new Ctor}function initCloneByTag(object,tag,isDeep){var Ctor=object.constructor;switch(tag){case arrayBufferTag:return bufferClone(object);case boolTag:case dateTag:return new Ctor(+object);case float32Tag:case float64Tag:case int8Tag:case int16Tag:case int32Tag:case uint8Tag:case uint8ClampedTag:case uint16Tag:case uint32Tag:var buffer=object.buffer;return new Ctor(isDeep?bufferClone(buffer):buffer,object.byteOffset,object.length);case numberTag:case stringTag:return new Ctor(object);case regexpTag:var result=new Ctor(object.source,reFlags.exec(object));result.lastIndex=object.lastIndex}return result}function isIndex(value,length){return value=+value,length=null==length?MAX_SAFE_INTEGER:length,value>-1&&0==value%1&&length>value}function isIterateeCall(value,index,object){if(!isObject(object))return!1;var type=typeof index;if(\"number\"==type)var length=getLength(object),prereq=isLength(length)&&isIndex(index,length);else prereq=\"string\"==type&&index in object;if(prereq){var other=object[index];return value===value?value===other:other!==other}return!1}function isKey(value,object){var type=typeof value;if(\"string\"==type&&reIsPlainProp.test(value)||\"number\"==type)return!0;if(isArray(value))return!1;var result=!reIsDeepProp.test(value);return result||null!=object&&value in toObject(object)}function isLength(value){return\"number\"==typeof value&&value>-1&&0==value%1&&MAX_SAFE_INTEGER>=value}function isStrictComparable(value){return value===value&&(0===value?1/value>0:!isObject(value))}function shimIsPlainObject(value){var Ctor;if(lodash.support,!isObjectLike(value)||objToString.call(value)!=objectTag||!hasOwnProperty.call(value,\"constructor\")&&(Ctor=value.constructor,\"function\"==typeof Ctor&&!(Ctor instanceof Ctor)))return!1;var result;return baseForIn(value,function(subValue,key){result=key}),result===undefined||hasOwnProperty.call(value,result)}function shimKeys(object){for(var props=keysIn(object),propsLength=props.length,length=propsLength&&object.length,support=lodash.support,allowIndexes=length&&isLength(length)&&(isArray(object)||support.nonEnumArgs&&isArguments(object)),index=-1,result=[];propsLength>++index;){var key=props[index];(allowIndexes&&isIndex(key,length)||hasOwnProperty.call(object,key))&&result.push(key)}return result}function toObject(value){return isObject(value)?value:Object(value)}function toPath(value){if(isArray(value))return value;var result=[];return baseToString(value).replace(rePropName,function(match,number,quote,string){result.push(quote?string.replace(reEscapeChar,\"$1\"):number||match)}),result}function indexOf(array,value,fromIndex){var length=array?array.length:0;if(!length)return-1;if(\"number\"==typeof fromIndex)fromIndex=0>fromIndex?nativeMax(length+fromIndex,0):fromIndex;else if(fromIndex){var index=binaryIndex(array,value),other=array[index];return(value===value?value===other:other!==other)?index:-1}return baseIndexOf(array,value,fromIndex||0)}function last(array){var length=array?array.length:0;return length?array[length-1]:undefined}function slice(array,start,end){var length=array?array.length:0;return length?(end&&\"number\"!=typeof end&&isIterateeCall(array,start,end)&&(start=0,end=length),baseSlice(array,start,end)):[]}function unzip(array){for(var index=-1,length=(array&&array.length&&arrayMax(arrayMap(array,getLength)))>>>0,result=Array(length);length>++index;)result[index]=arrayMap(array,baseProperty(index));return result}function includes(collection,target,fromIndex,guard){var length=collection?getLength(collection):0;return isLength(length)||(collection=values(collection),length=collection.length),length?(fromIndex=\"number\"!=typeof fromIndex||guard&&isIterateeCall(target,fromIndex,guard)?0:0>fromIndex?nativeMax(length+fromIndex,0):fromIndex||0,\"string\"==typeof collection||!isArray(collection)&&isString(collection)?length>fromIndex&&collection.indexOf(target,fromIndex)>-1:getIndexOf(collection,target,fromIndex)>-1):!1}function reject(collection,predicate,thisArg){var func=isArray(collection)?arrayFilter:baseFilter;return predicate=getCallback(predicate,thisArg,3),func(collection,function(value,index,collection){return!predicate(value,index,collection)})}function some(collection,predicate,thisArg){var func=isArray(collection)?arraySome:baseSome;return thisArg&&isIterateeCall(collection,predicate,thisArg)&&(predicate=null),(\"function\"!=typeof predicate||thisArg!==undefined)&&(predicate=getCallback(predicate,thisArg,3)),func(collection,predicate)}function restParam(func,start){if(\"function\"!=typeof func)throw new TypeError(FUNC_ERROR_TEXT);return start=nativeMax(start===undefined?func.length-1:+start||0,0),function(){for(var args=arguments,index=-1,length=nativeMax(args.length-start,0),rest=Array(length);length>++index;)rest[index]=args[start+index];switch(start){case 0:return func.call(this,rest);case 1:return func.call(this,args[0],rest);case 2:return func.call(this,args[0],args[1],rest)}var otherArgs=Array(start+1);for(index=-1;start>++index;)otherArgs[index]=args[index];return otherArgs[start]=rest,func.apply(this,otherArgs)}}function clone(value,isDeep,customizer,thisArg){return isDeep&&\"boolean\"!=typeof isDeep&&isIterateeCall(value,isDeep,customizer)?isDeep=!1:\"function\"==typeof isDeep&&(thisArg=customizer,customizer=isDeep,isDeep=!1),customizer=\"function\"==typeof customizer&&bindCallback(customizer,thisArg,1),baseClone(value,isDeep,customizer)}function isArguments(value){var length=isObjectLike(value)?value.length:undefined;return isLength(length)&&objToString.call(value)==argsTag}function isEmpty(value){if(null==value)return!0;var length=getLength(value);return isLength(length)&&(isArray(value)||isString(value)||isArguments(value)||isObjectLike(value)&&isFunction(value.splice))?!length:!keys(value).length}function isObject(value){var type=typeof value;return\"function\"==type||!!value&&\"object\"==type}function isNative(value){return null==value?!1:objToString.call(value)==funcTag?reIsNative.test(fnToString.call(value)):isObjectLike(value)&&reIsHostCtor.test(value)}function isNumber(value){return\"number\"==typeof value||isObjectLike(value)&&objToString.call(value)==numberTag}function isString(value){return\"string\"==typeof value||isObjectLike(value)&&objToString.call(value)==stringTag}function isTypedArray(value){return isObjectLike(value)&&isLength(value.length)&&!!typedArrayTags[objToString.call(value)]}function toPlainObject(value){return baseCopy(value,keysIn(value))}function has(object,path){if(null==object)return!1;var result=hasOwnProperty.call(object,path);return result||isKey(path)||(path=toPath(path),object=1==path.length?object:baseGet(object,baseSlice(path,0,-1)),path=last(path),result=null!=object&&hasOwnProperty.call(object,path)),result}function keysIn(object){if(null==object)return[];isObject(object)||(object=Object(object));var length=object.length;length=length&&isLength(length)&&(isArray(object)||support.nonEnumArgs&&isArguments(object))&&length||0;for(var Ctor=object.constructor,index=-1,isProto=\"function\"==typeof Ctor&&Ctor.prototype===object,result=Array(length),skipIndexes=length>0;length>++index;)result[index]=index+\"\";for(var key in object)skipIndexes&&isIndex(key,length)||\"constructor\"==key&&(isProto||!hasOwnProperty.call(object,key))||result.push(key);return result}function values(object){return baseValues(object,keys(object))}function escapeRegExp(string){return string=baseToString(string),string&&reHasRegExpChars.test(string)?string.replace(reRegExpChars,\"\\\\$&\"):string}function callback(func,thisArg,guard){return guard&&isIterateeCall(func,thisArg,guard)&&(thisArg=null),baseCallback(func,thisArg)}function constant(value){return function(){return value}}function identity(value){return value}function property(path){return isKey(path)?baseProperty(path):basePropertyDeep(path)}var undefined,VERSION=\"3.7.0\",FUNC_ERROR_TEXT=\"Expected a function\",argsTag=\"[object Arguments]\",arrayTag=\"[object Array]\",boolTag=\"[object Boolean]\",dateTag=\"[object Date]\",errorTag=\"[object Error]\",funcTag=\"[object Function]\",mapTag=\"[object Map]\",numberTag=\"[object Number]\",objectTag=\"[object Object]\",regexpTag=\"[object RegExp]\",setTag=\"[object Set]\",stringTag=\"[object String]\",weakMapTag=\"[object WeakMap]\",arrayBufferTag=\"[object ArrayBuffer]\",float32Tag=\"[object Float32Array]\",float64Tag=\"[object Float64Array]\",int8Tag=\"[object Int8Array]\",int16Tag=\"[object Int16Array]\",int32Tag=\"[object Int32Array]\",uint8Tag=\"[object Uint8Array]\",uint8ClampedTag=\"[object Uint8ClampedArray]\",uint16Tag=\"[object Uint16Array]\",uint32Tag=\"[object Uint32Array]\",reIsDeepProp=/\\.|\\[(?:[^[\\]]+|([\"'])(?:(?!\\1)[^\\n\\\\]|\\\\.)*?)\\1\\]/,reIsPlainProp=/^\\w*$/,rePropName=/[^.[\\]]+|\\[(?:(-?\\d+(?:\\.\\d+)?)|([\"'])((?:(?!\\2)[^\\n\\\\]|\\\\.)*?)\\2)\\]/g,reRegExpChars=/[.*+?^${}()|[\\]\\/\\\\]/g,reHasRegExpChars=RegExp(reRegExpChars.source),reEscapeChar=/\\\\(\\\\)?/g,reFlags=/\\w*$/,reIsHostCtor=/^\\[object .+?Constructor\\]$/,typedArrayTags={};typedArrayTags[float32Tag]=typedArrayTags[float64Tag]=typedArrayTags[int8Tag]=typedArrayTags[int16Tag]=typedArrayTags[int32Tag]=typedArrayTags[uint8Tag]=typedArrayTags[uint8ClampedTag]=typedArrayTags[uint16Tag]=typedArrayTags[uint32Tag]=!0,typedArrayTags[argsTag]=typedArrayTags[arrayTag]=typedArrayTags[arrayBufferTag]=typedArrayTags[boolTag]=typedArrayTags[dateTag]=typedArrayTags[errorTag]=typedArrayTags[funcTag]=typedArrayTags[mapTag]=typedArrayTags[numberTag]=typedArrayTags[objectTag]=typedArrayTags[regexpTag]=typedArrayTags[setTag]=typedArrayTags[stringTag]=typedArrayTags[weakMapTag]=!1;var cloneableTags={};cloneableTags[argsTag]=cloneableTags[arrayTag]=cloneableTags[arrayBufferTag]=cloneableTags[boolTag]=cloneableTags[dateTag]=cloneableTags[float32Tag]=cloneableTags[float64Tag]=cloneableTags[int8Tag]=cloneableTags[int16Tag]=cloneableTags[int32Tag]=cloneableTags[numberTag]=cloneableTags[objectTag]=cloneableTags[regexpTag]=cloneableTags[stringTag]=cloneableTags[uint8Tag]=cloneableTags[uint8ClampedTag]=cloneableTags[uint16Tag]=cloneableTags[uint32Tag]=!0,cloneableTags[errorTag]=cloneableTags[funcTag]=cloneableTags[mapTag]=cloneableTags[setTag]=cloneableTags[weakMapTag]=!1;var objectTypes={\"function\":!0,object:!0},freeExports=objectTypes[typeof exports]&&exports&&!exports.nodeType&&exports,freeModule=objectTypes[typeof module]&&module&&!module.nodeType&&module,freeGlobal=freeExports&&freeModule&&\"object\"==typeof global&&global&&global.Object&&global,freeSelf=objectTypes[typeof self]&&self&&self.Object&&self,freeWindow=objectTypes[typeof window]&&window&&window.Object&&window,moduleExports=freeModule&&freeModule.exports===freeExports&&freeExports,root=freeGlobal||freeWindow!==(this&&this.window)&&freeWindow||freeSelf||this,arrayProto=Array.prototype,objectProto=Object.prototype,fnToString=Function.prototype.toString,hasOwnProperty=objectProto.hasOwnProperty,objToString=objectProto.toString,reIsNative=RegExp(\"^\"+escapeRegExp(objToString).replace(/toString|(function).*?(?=\\\\\\()| for .+?(?=\\\\\\])/g,\"$1.*?\")+\"$\"),ArrayBuffer=isNative(ArrayBuffer=root.ArrayBuffer)&&ArrayBuffer,bufferSlice=isNative(bufferSlice=ArrayBuffer&&new ArrayBuffer(0).slice)&&bufferSlice,floor=Math.floor,getOwnPropertySymbols=isNative(getOwnPropertySymbols=Object.getOwnPropertySymbols)&&getOwnPropertySymbols,getPrototypeOf=isNative(getPrototypeOf=Object.getPrototypeOf)&&getPrototypeOf,push=arrayProto.push,preventExtensions=isNative(Object.preventExtensions=Object.preventExtensions)&&preventExtensions,propertyIsEnumerable=objectProto.propertyIsEnumerable,Uint8Array=isNative(Uint8Array=root.Uint8Array)&&Uint8Array,Float64Array=function(){try{var func=isNative(func=root.Float64Array)&&func,result=new func(new ArrayBuffer(10),0,1)&&func}catch(e){}return result}(),nativeAssign=function(){var object={1:0},func=preventExtensions&&isNative(func=Object.assign)&&func;try{func(preventExtensions(object),\"xo\")}catch(e){}return!object[1]&&func}(),nativeIsArray=isNative(nativeIsArray=Array.isArray)&&nativeIsArray,nativeKeys=isNative(nativeKeys=Object.keys)&&nativeKeys,nativeMax=Math.max,nativeMin=Math.min,NEGATIVE_INFINITY=Number.NEGATIVE_INFINITY,MAX_ARRAY_LENGTH=Math.pow(2,32)-1,MAX_ARRAY_INDEX=MAX_ARRAY_LENGTH-1,HALF_MAX_ARRAY_LENGTH=MAX_ARRAY_LENGTH>>>1,FLOAT64_BYTES_PER_ELEMENT=Float64Array?Float64Array.BYTES_PER_ELEMENT:0,MAX_SAFE_INTEGER=Math.pow(2,53)-1,support=lodash.support={};(function(x){var Ctor=function(){this.x=x},props=[];Ctor.prototype={valueOf:x,y:x};for(var key in new Ctor)props.push(key);support.funcDecomp=/\\bthis\\b/.test(function(){return this}),support.funcNames=\"string\"==typeof Function.name;try{support.nonEnumArgs=!propertyIsEnumerable.call(arguments,1)}catch(e){support.nonEnumArgs=!0}})(1,0);var baseAssign=nativeAssign||function(object,source){return null==source?object:baseCopy(source,getSymbols(source),baseCopy(source,keys(source),object))},baseEach=createBaseEach(baseForOwn),baseFor=createBaseFor();bufferSlice||(bufferClone=ArrayBuffer&&Uint8Array?function(buffer){var byteLength=buffer.byteLength,floatLength=Float64Array?floor(byteLength/FLOAT64_BYTES_PER_ELEMENT):0,offset=floatLength*FLOAT64_BYTES_PER_ELEMENT,result=new ArrayBuffer(byteLength);if(floatLength){var view=new Float64Array(result,0,floatLength);view.set(new Float64Array(buffer,0,floatLength))}return byteLength!=offset&&(view=new Uint8Array(result,offset),view.set(new Uint8Array(buffer,offset))),result}:constant(null));var getLength=baseProperty(\"length\"),getSymbols=getOwnPropertySymbols?function(object){return getOwnPropertySymbols(toObject(object))}:constant([]),findLastIndex=createFindIndex(!0),zip=restParam(unzip),forEach=createForEach(arrayEach,baseEach),isArray=nativeIsArray||function(value){return isObjectLike(value)&&isLength(value.length)&&objToString.call(value)==arrayTag},isFunction=baseIsFunction(/x/)||Uint8Array&&!baseIsFunction(Uint8Array)?function(value){return objToString.call(value)==funcTag}:baseIsFunction,isPlainObject=getPrototypeOf?function(value){if(!value||objToString.call(value)!=objectTag)return!1;var valueOf=value.valueOf,objProto=isNative(valueOf)&&(objProto=getPrototypeOf(valueOf))&&getPrototypeOf(objProto);return objProto?value==objProto||getPrototypeOf(value)==objProto:shimIsPlainObject(value)}:shimIsPlainObject,assign=createAssigner(function(object,source,customizer){return customizer?assignWith(object,source,customizer):baseAssign(object,source)}),keys=nativeKeys?function(object){if(object)var Ctor=object.constructor,length=object.length;return\"function\"==typeof Ctor&&Ctor.prototype===object||\"function\"!=typeof object&&isLength(length)?shimKeys(object):isObject(object)?nativeKeys(object):[]}:shimKeys,merge=createAssigner(baseMerge);lodash.assign=assign,lodash.callback=callback,lodash.constant=constant,lodash.forEach=forEach,lodash.keys=keys,lodash.keysIn=keysIn,lodash.merge=merge,lodash.property=property,lodash.reject=reject,lodash.restParam=restParam,lodash.slice=slice,lodash.toPlainObject=toPlainObject,lodash.unzip=unzip,lodash.values=values,lodash.zip=zip,lodash.each=forEach,lodash.extend=assign,lodash.iteratee=callback,lodash.clone=clone,lodash.escapeRegExp=escapeRegExp,lodash.findLastIndex=findLastIndex,lodash.has=has,lodash.identity=identity,lodash.includes=includes,lodash.indexOf=indexOf,lodash.isArguments=isArguments,lodash.isArray=isArray,lodash.isEmpty=isEmpty,lodash.isFunction=isFunction,lodash.isNative=isNative,lodash.isNumber=isNumber,lodash.isObject=isObject,lodash.isPlainObject=isPlainObject,lodash.isString=isString,lodash.isTypedArray=isTypedArray,lodash.last=last,lodash.some=some,lodash.any=some,lodash.contains=includes,lodash.include=includes,lodash.VERSION=VERSION,freeExports&&freeModule?moduleExports?(freeModule.exports=lodash)._=lodash:freeExports._=lodash:root._=lodash\n}).call(this)}).call(this,\"undefined\"!=typeof global?global:\"undefined\"!=typeof self?self:\"undefined\"!=typeof window?window:{})},{}],\"/node_modules/jshint/src/jshint.js\":[function(_dereq_,module,exports){var _=_dereq_(\"../lodash\"),events=_dereq_(\"events\"),vars=_dereq_(\"./vars.js\"),messages=_dereq_(\"./messages.js\"),Lexer=_dereq_(\"./lex.js\").Lexer,reg=_dereq_(\"./reg.js\"),state=_dereq_(\"./state.js\").state,style=_dereq_(\"./style.js\"),options=_dereq_(\"./options.js\"),scopeManager=_dereq_(\"./scope-manager.js\"),JSHINT=function(){\"use strict\";function checkOption(name,t){return name=name.trim(),/^[+-]W\\d{3}$/g.test(name)?!0:-1!==options.validNames.indexOf(name)||\"jslint\"===t.type||_.has(options.removed,name)?!0:(error(\"E001\",t,name),!1)}function isString(obj){return\"[object String]\"===Object.prototype.toString.call(obj)}function isIdentifier(tkn,value){return tkn?tkn.identifier&&tkn.value===value?!0:!1:!1}function isReserved(token){if(!token.reserved)return!1;var meta=token.meta;if(meta&&meta.isFutureReservedWord&&state.inES5()){if(!meta.es5)return!1;if(meta.strictOnly&&!state.option.strict&&!state.isStrict())return!1;if(token.isProperty)return!1}return!0}function supplant(str,data){return str.replace(/\\{([^{}]*)\\}/g,function(a,b){var r=data[b];return\"string\"==typeof r||\"number\"==typeof r?r:a})}function combine(dest,src){Object.keys(src).forEach(function(name){_.has(JSHINT.blacklist,name)||(dest[name]=src[name])})}function processenforceall(){if(state.option.enforceall){for(var enforceopt in options.bool.enforcing)void 0!==state.option[enforceopt]||options.noenforceall[enforceopt]||(state.option[enforceopt]=!0);for(var relaxopt in options.bool.relaxing)void 0===state.option[relaxopt]&&(state.option[relaxopt]=!1)}}function assume(){processenforceall(),state.option.esversion||state.option.moz||(state.option.esversion=state.option.es3?3:state.option.esnext?6:5),state.inES5()&&combine(predefined,vars.ecmaIdentifiers[5]),state.inES6()&&combine(predefined,vars.ecmaIdentifiers[6]),state.option.module&&(state.option.strict===!0&&(state.option.strict=\"global\"),state.inES6()||warning(\"W134\",state.tokens.next,\"module\",6)),state.option.couch&&combine(predefined,vars.couch),state.option.qunit&&combine(predefined,vars.qunit),state.option.rhino&&combine(predefined,vars.rhino),state.option.shelljs&&(combine(predefined,vars.shelljs),combine(predefined,vars.node)),state.option.typed&&combine(predefined,vars.typed),state.option.phantom&&(combine(predefined,vars.phantom),state.option.strict===!0&&(state.option.strict=\"global\")),state.option.prototypejs&&combine(predefined,vars.prototypejs),state.option.node&&(combine(predefined,vars.node),combine(predefined,vars.typed),state.option.strict===!0&&(state.option.strict=\"global\")),state.option.devel&&combine(predefined,vars.devel),state.option.dojo&&combine(predefined,vars.dojo),state.option.browser&&(combine(predefined,vars.browser),combine(predefined,vars.typed)),state.option.browserify&&(combine(predefined,vars.browser),combine(predefined,vars.typed),combine(predefined,vars.browserify),state.option.strict===!0&&(state.option.strict=\"global\")),state.option.nonstandard&&combine(predefined,vars.nonstandard),state.option.jasmine&&combine(predefined,vars.jasmine),state.option.jquery&&combine(predefined,vars.jquery),state.option.mootools&&combine(predefined,vars.mootools),state.option.worker&&combine(predefined,vars.worker),state.option.wsh&&combine(predefined,vars.wsh),state.option.globalstrict&&state.option.strict!==!1&&(state.option.strict=\"global\"),state.option.yui&&combine(predefined,vars.yui),state.option.mocha&&combine(predefined,vars.mocha)}function quit(code,line,chr){var percentage=Math.floor(100*(line/state.lines.length)),message=messages.errors[code].desc;throw{name:\"JSHintError\",line:line,character:chr,message:message+\" (\"+percentage+\"% scanned).\",raw:message,code:code}}function removeIgnoredMessages(){var ignored=state.ignoredLines;_.isEmpty(ignored)||(JSHINT.errors=_.reject(JSHINT.errors,function(err){return ignored[err.line]}))}function warning(code,t,a,b,c,d){var ch,l,w,msg;if(/^W\\d{3}$/.test(code)){if(state.ignored[code])return;msg=messages.warnings[code]}else/E\\d{3}/.test(code)?msg=messages.errors[code]:/I\\d{3}/.test(code)&&(msg=messages.info[code]);return t=t||state.tokens.next||{},\"(end)\"===t.id&&(t=state.tokens.curr),l=t.line||0,ch=t.from||0,w={id:\"(error)\",raw:msg.desc,code:msg.code,evidence:state.lines[l-1]||\"\",line:l,character:ch,scope:JSHINT.scope,a:a,b:b,c:c,d:d},w.reason=supplant(msg.desc,w),JSHINT.errors.push(w),removeIgnoredMessages(),JSHINT.errors.length>=state.option.maxerr&&quit(\"E043\",l,ch),w}function warningAt(m,l,ch,a,b,c,d){return warning(m,{line:l,from:ch},a,b,c,d)}function error(m,t,a,b,c,d){warning(m,t,a,b,c,d)}function errorAt(m,l,ch,a,b,c,d){return error(m,{line:l,from:ch},a,b,c,d)}function addInternalSrc(elem,src){var i;return i={id:\"(internal)\",elem:elem,value:src},JSHINT.internals.push(i),i}function doOption(){var nt=state.tokens.next,body=nt.body.match(/(-\\s+)?[^\\s,:]+(?:\\s*:\\s*(-\\s+)?[^\\s,]+)?/g)||[],predef={};if(\"globals\"===nt.type){body.forEach(function(g,idx){g=g.split(\":\");var key=(g[0]||\"\").trim(),val=(g[1]||\"\").trim();if(\"-\"===key||!key.length){if(idx>0&&idx===body.length-1)return;return error(\"E002\",nt),void 0}\"-\"===key.charAt(0)?(key=key.slice(1),val=!1,JSHINT.blacklist[key]=key,delete predefined[key]):predef[key]=\"true\"===val}),combine(predefined,predef);for(var key in predef)_.has(predef,key)&&(declared[key]=nt)}\"exported\"===nt.type&&body.forEach(function(e,idx){if(!e.length){if(idx>0&&idx===body.length-1)return;return error(\"E002\",nt),void 0}state.funct[\"(scope)\"].addExported(e)}),\"members\"===nt.type&&(membersOnly=membersOnly||{},body.forEach(function(m){var ch1=m.charAt(0),ch2=m.charAt(m.length-1);ch1!==ch2||'\"'!==ch1&&\"'\"!==ch1||(m=m.substr(1,m.length-2).replace('\\\\\"','\"')),membersOnly[m]=!1}));var numvals=[\"maxstatements\",\"maxparams\",\"maxdepth\",\"maxcomplexity\",\"maxerr\",\"maxlen\",\"indent\"];(\"jshint\"===nt.type||\"jslint\"===nt.type)&&(body.forEach(function(g){g=g.split(\":\");var key=(g[0]||\"\").trim(),val=(g[1]||\"\").trim();if(checkOption(key,nt))if(numvals.indexOf(key)>=0)if(\"false\"!==val){if(val=+val,\"number\"!=typeof val||!isFinite(val)||0>=val||Math.floor(val)!==val)return error(\"E032\",nt,g[1].trim()),void 0;state.option[key]=val}else state.option[key]=\"indent\"===key?4:!1;else{if(\"validthis\"===key)return state.funct[\"(global)\"]?void error(\"E009\"):\"true\"!==val&&\"false\"!==val?void error(\"E002\",nt):(state.option.validthis=\"true\"===val,void 0);if(\"quotmark\"!==key)if(\"shadow\"!==key)if(\"unused\"!==key)if(\"latedef\"!==key)if(\"ignore\"!==key)if(\"strict\"!==key){\"module\"===key&&(hasParsedCode(state.funct)||error(\"E055\",state.tokens.next,\"module\"));var esversions={es3:3,es5:5,esnext:6};if(!_.has(esversions,key)){if(\"esversion\"===key){switch(val){case\"5\":state.inES5(!0)&&warning(\"I003\");case\"3\":case\"6\":state.option.moz=!1,state.option.esversion=+val;break;case\"2015\":state.option.moz=!1,state.option.esversion=6;break;default:error(\"E002\",nt)}return hasParsedCode(state.funct)||error(\"E055\",state.tokens.next,\"esversion\"),void 0}var match=/^([+-])(W\\d{3})$/g.exec(key);if(match)return state.ignored[match[2]]=\"-\"===match[1],void 0;var tn;return\"true\"===val||\"false\"===val?(\"jslint\"===nt.type?(tn=options.renamed[key]||key,state.option[tn]=\"true\"===val,void 0!==options.inverted[tn]&&(state.option[tn]=!state.option[tn])):state.option[key]=\"true\"===val,\"newcap\"===key&&(state.option[\"(explicitNewcap)\"]=!0),void 0):(error(\"E002\",nt),void 0)}switch(val){case\"true\":state.option.moz=!1,state.option.esversion=esversions[key];break;case\"false\":state.option.moz||(state.option.esversion=5);break;default:error(\"E002\",nt)}}else switch(val){case\"true\":state.option.strict=!0;break;case\"false\":state.option.strict=!1;break;case\"func\":case\"global\":case\"implied\":state.option.strict=val;break;default:error(\"E002\",nt)}else switch(val){case\"line\":state.ignoredLines[nt.line]=!0,removeIgnoredMessages();break;default:error(\"E002\",nt)}else switch(val){case\"true\":state.option.latedef=!0;break;case\"false\":state.option.latedef=!1;break;case\"nofunc\":state.option.latedef=\"nofunc\";break;default:error(\"E002\",nt)}else switch(val){case\"true\":state.option.unused=!0;break;case\"false\":state.option.unused=!1;break;case\"vars\":case\"strict\":state.option.unused=val;break;default:error(\"E002\",nt)}else switch(val){case\"true\":state.option.shadow=!0;break;case\"outer\":state.option.shadow=\"outer\";break;case\"false\":case\"inner\":state.option.shadow=\"inner\";break;default:error(\"E002\",nt)}else switch(val){case\"true\":case\"false\":state.option.quotmark=\"true\"===val;break;case\"double\":case\"single\":state.option.quotmark=val;break;default:error(\"E002\",nt)}}}),assume())}function peek(p){var t,i=p||0,j=lookahead.length;if(j>i)return lookahead[i];for(;i>=j;)t=lookahead[j],t||(t=lookahead[j]=lex.token()),j+=1;return t||\"(end)\"!==state.tokens.next.id?t:state.tokens.next}function peekIgnoreEOL(){var t,i=0;do t=peek(i++);while(\"(endline)\"===t.id);return t}function advance(id,t){switch(state.tokens.curr.id){case\"(number)\":\".\"===state.tokens.next.id&&warning(\"W005\",state.tokens.curr);break;case\"-\":(\"-\"===state.tokens.next.id||\"--\"===state.tokens.next.id)&&warning(\"W006\");break;case\"+\":(\"+\"===state.tokens.next.id||\"++\"===state.tokens.next.id)&&warning(\"W007\")}for(id&&state.tokens.next.id!==id&&(t?\"(end)\"===state.tokens.next.id?error(\"E019\",t,t.id):error(\"E020\",state.tokens.next,id,t.id,t.line,state.tokens.next.value):(\"(identifier)\"!==state.tokens.next.type||state.tokens.next.value!==id)&&warning(\"W116\",state.tokens.next,id,state.tokens.next.value)),state.tokens.prev=state.tokens.curr,state.tokens.curr=state.tokens.next;;){if(state.tokens.next=lookahead.shift()||lex.token(),state.tokens.next||quit(\"E041\",state.tokens.curr.line),\"(end)\"===state.tokens.next.id||\"(error)\"===state.tokens.next.id)return;if(state.tokens.next.check&&state.tokens.next.check(),state.tokens.next.isSpecial)\"falls through\"===state.tokens.next.type?state.tokens.curr.caseFallsThrough=!0:doOption();else if(\"(endline)\"!==state.tokens.next.id)break}}function isInfix(token){return token.infix||!token.identifier&&!token.template&&!!token.led}function isEndOfExpr(){var curr=state.tokens.curr,next=state.tokens.next;return\";\"===next.id||\"}\"===next.id||\":\"===next.id?!0:isInfix(next)===isInfix(curr)||\"yield\"===curr.id&&state.inMoz()?curr.line!==startLine(next):!1}function isBeginOfExpr(prev){return!prev.left&&\"unary\"!==prev.arity}function expression(rbp,initial){var left,isArray=!1,isObject=!1,isLetExpr=!1;state.nameStack.push(),initial||\"let\"!==state.tokens.next.value||\"(\"!==peek(0).value||(state.inMoz()||warning(\"W118\",state.tokens.next,\"let expressions\"),isLetExpr=!0,state.funct[\"(scope)\"].stack(),advance(\"let\"),advance(\"(\"),state.tokens.prev.fud(),advance(\")\")),\"(end)\"===state.tokens.next.id&&error(\"E006\",state.tokens.curr);var isDangerous=state.option.asi&&state.tokens.prev.line!==startLine(state.tokens.curr)&&_.contains([\"]\",\")\"],state.tokens.prev.id)&&_.contains([\"[\",\"(\"],state.tokens.curr.id);if(isDangerous&&warning(\"W014\",state.tokens.curr,state.tokens.curr.id),advance(),initial&&(state.funct[\"(verb)\"]=state.tokens.curr.value,state.tokens.curr.beginsStmt=!0),initial===!0&&state.tokens.curr.fud)left=state.tokens.curr.fud();else for(state.tokens.curr.nud?left=state.tokens.curr.nud():error(\"E030\",state.tokens.curr,state.tokens.curr.id);(state.tokens.next.lbp>rbp||\"(template)\"===state.tokens.next.type)&&!isEndOfExpr();)isArray=\"Array\"===state.tokens.curr.value,isObject=\"Object\"===state.tokens.curr.value,left&&(left.value||left.first&&left.first.value)&&(\"new\"!==left.value||left.first&&left.first.value&&\".\"===left.first.value)&&(isArray=!1,left.value!==state.tokens.curr.value&&(isObject=!1)),advance(),isArray&&\"(\"===state.tokens.curr.id&&\")\"===state.tokens.next.id&&warning(\"W009\",state.tokens.curr),isObject&&\"(\"===state.tokens.curr.id&&\")\"===state.tokens.next.id&&warning(\"W010\",state.tokens.curr),left&&state.tokens.curr.led?left=state.tokens.curr.led(left):error(\"E033\",state.tokens.curr,state.tokens.curr.id);return isLetExpr&&state.funct[\"(scope)\"].unstack(),state.nameStack.pop(),left}function startLine(token){return token.startLine||token.line}function nobreaknonadjacent(left,right){left=left||state.tokens.curr,right=right||state.tokens.next,state.option.laxbreak||left.line===startLine(right)||warning(\"W014\",right,right.value)}function nolinebreak(t){t=t||state.tokens.curr,t.line!==startLine(state.tokens.next)&&warning(\"E022\",t,t.value)}function nobreakcomma(left,right){left.line!==startLine(right)&&(state.option.laxcomma||(comma.first&&(warning(\"I001\"),comma.first=!1),warning(\"W014\",left,right.value)))}function comma(opts){if(opts=opts||{},opts.peek?nobreakcomma(state.tokens.prev,state.tokens.curr):(nobreakcomma(state.tokens.curr,state.tokens.next),advance(\",\")),state.tokens.next.identifier&&(!opts.property||!state.inES5()))switch(state.tokens.next.value){case\"break\":case\"case\":case\"catch\":case\"continue\":case\"default\":case\"do\":case\"else\":case\"finally\":case\"for\":case\"if\":case\"in\":case\"instanceof\":case\"return\":case\"switch\":case\"throw\":case\"try\":case\"var\":case\"let\":case\"while\":case\"with\":return error(\"E024\",state.tokens.next,state.tokens.next.value),!1}if(\"(punctuator)\"===state.tokens.next.type)switch(state.tokens.next.value){case\"}\":case\"]\":case\",\":if(opts.allowTrailing)return!0;case\")\":return error(\"E024\",state.tokens.next,state.tokens.next.value),!1}return!0}function symbol(s,p){var x=state.syntax[s];return x&&\"object\"==typeof x||(state.syntax[s]=x={id:s,lbp:p,value:s}),x}function delim(s){var x=symbol(s,0);return x.delim=!0,x}function stmt(s,f){var x=delim(s);return x.identifier=x.reserved=!0,x.fud=f,x}function blockstmt(s,f){var x=stmt(s,f);return x.block=!0,x}function reserveName(x){var c=x.id.charAt(0);return(c>=\"a\"&&\"z\">=c||c>=\"A\"&&\"Z\">=c)&&(x.identifier=x.reserved=!0),x}function prefix(s,f){var x=symbol(s,150);return reserveName(x),x.nud=\"function\"==typeof f?f:function(){return this.arity=\"unary\",this.right=expression(150),(\"++\"===this.id||\"--\"===this.id)&&(state.option.plusplus?warning(\"W016\",this,this.id):!this.right||this.right.identifier&&!isReserved(this.right)||\".\"===this.right.id||\"[\"===this.right.id||warning(\"W017\",this),this.right&&this.right.isMetaProperty?error(\"E031\",this):this.right&&this.right.identifier&&state.funct[\"(scope)\"].block.modify(this.right.value,this)),this},x}function type(s,f){var x=delim(s);return x.type=s,x.nud=f,x}function reserve(name,func){var x=type(name,func);return x.identifier=!0,x.reserved=!0,x}function FutureReservedWord(name,meta){var x=type(name,meta&&meta.nud||function(){return this});return meta=meta||{},meta.isFutureReservedWord=!0,x.value=name,x.identifier=!0,x.reserved=!0,x.meta=meta,x}function reservevar(s,v){return reserve(s,function(){return\"function\"==typeof v&&v(this),this})}function infix(s,f,p,w){var x=symbol(s,p);return reserveName(x),x.infix=!0,x.led=function(left){return w||nobreaknonadjacent(state.tokens.prev,state.tokens.curr),\"in\"!==s&&\"instanceof\"!==s||\"!\"!==left.id||warning(\"W018\",left,\"!\"),\"function\"==typeof f?f(left,this):(this.left=left,this.right=expression(p),this)},x}function application(s){var x=symbol(s,42);return x.led=function(left){return nobreaknonadjacent(state.tokens.prev,state.tokens.curr),this.left=left,this.right=doFunction({type:\"arrow\",loneArg:left}),this},x}function relation(s,f){var x=symbol(s,100);return x.led=function(left){nobreaknonadjacent(state.tokens.prev,state.tokens.curr),this.left=left;var right=this.right=expression(100);return isIdentifier(left,\"NaN\")||isIdentifier(right,\"NaN\")?warning(\"W019\",this):f&&f.apply(this,[left,right]),left&&right||quit(\"E041\",state.tokens.curr.line),\"!\"===left.id&&warning(\"W018\",left,\"!\"),\"!\"===right.id&&warning(\"W018\",right,\"!\"),this},x}function isPoorRelation(node){return node&&(\"(number)\"===node.type&&0===+node.value||\"(string)\"===node.type&&\"\"===node.value||\"null\"===node.type&&!state.option.eqnull||\"true\"===node.type||\"false\"===node.type||\"undefined\"===node.type)}function isTypoTypeof(left,right,state){var values;return state.option.notypeof?!1:left&&right?(values=state.inES6()?typeofValues.es6:typeofValues.es3,\"(identifier)\"===right.type&&\"typeof\"===right.value&&\"(string)\"===left.type?!_.contains(values,left.value):!1):!1}function isGlobalEval(left,state){var isGlobal=!1;return\"this\"===left.type&&null===state.funct[\"(context)\"]?isGlobal=!0:\"(identifier)\"===left.type&&(state.option.node&&\"global\"===left.value?isGlobal=!0:!state.option.browser||\"window\"!==left.value&&\"document\"!==left.value||(isGlobal=!0)),isGlobal}function findNativePrototype(left){function walkPrototype(obj){return\"object\"==typeof obj?\"prototype\"===obj.right?obj:walkPrototype(obj.left):void 0}function walkNative(obj){for(;!obj.identifier&&\"object\"==typeof obj.left;)obj=obj.left;return obj.identifier&&natives.indexOf(obj.value)>=0?obj.value:void 0}var natives=[\"Array\",\"ArrayBuffer\",\"Boolean\",\"Collator\",\"DataView\",\"Date\",\"DateTimeFormat\",\"Error\",\"EvalError\",\"Float32Array\",\"Float64Array\",\"Function\",\"Infinity\",\"Intl\",\"Int16Array\",\"Int32Array\",\"Int8Array\",\"Iterator\",\"Number\",\"NumberFormat\",\"Object\",\"RangeError\",\"ReferenceError\",\"RegExp\",\"StopIteration\",\"String\",\"SyntaxError\",\"TypeError\",\"Uint16Array\",\"Uint32Array\",\"Uint8Array\",\"Uint8ClampedArray\",\"URIError\"],prototype=walkPrototype(left);return prototype?walkNative(prototype):void 0}function checkLeftSideAssign(left,assignToken,options){var allowDestructuring=options&&options.allowDestructuring;if(assignToken=assignToken||left,state.option.freeze){var nativeObject=findNativePrototype(left);nativeObject&&warning(\"W121\",left,nativeObject)}return left.identifier&&!left.isMetaProperty&&state.funct[\"(scope)\"].block.reassign(left.value,left),\".\"===left.id?((!left.left||\"arguments\"===left.left.value&&!state.isStrict())&&warning(\"E031\",assignToken),state.nameStack.set(state.tokens.prev),!0):\"{\"===left.id||\"[\"===left.id?(allowDestructuring&&state.tokens.curr.left.destructAssign?state.tokens.curr.left.destructAssign.forEach(function(t){t.id&&state.funct[\"(scope)\"].block.modify(t.id,t.token)}):\"{\"!==left.id&&left.left?\"arguments\"!==left.left.value||state.isStrict()||warning(\"E031\",assignToken):warning(\"E031\",assignToken),\"[\"===left.id&&state.nameStack.set(left.right),!0):left.isMetaProperty?(error(\"E031\",assignToken),!0):left.identifier&&!isReserved(left)?(\"exception\"===state.funct[\"(scope)\"].labeltype(left.value)&&warning(\"W022\",left),state.nameStack.set(left),!0):(left===state.syntax[\"function\"]&&warning(\"W023\",state.tokens.curr),!1)}function assignop(s,f,p){var x=infix(s,\"function\"==typeof f?f:function(left,that){return that.left=left,left&&checkLeftSideAssign(left,that,{allowDestructuring:!0})?(that.right=expression(10),that):(error(\"E031\",that),void 0)},p);return x.exps=!0,x.assign=!0,x}function bitwise(s,f,p){var x=symbol(s,p);return reserveName(x),x.led=\"function\"==typeof f?f:function(left){return state.option.bitwise&&warning(\"W016\",this,this.id),this.left=left,this.right=expression(p),this},x}function bitwiseassignop(s){return assignop(s,function(left,that){return state.option.bitwise&&warning(\"W016\",that,that.id),left&&checkLeftSideAssign(left,that)?(that.right=expression(10),that):(error(\"E031\",that),void 0)},20)}function suffix(s){var x=symbol(s,150);return x.led=function(left){return state.option.plusplus?warning(\"W016\",this,this.id):left.identifier&&!isReserved(left)||\".\"===left.id||\"[\"===left.id||warning(\"W017\",this),left.isMetaProperty?error(\"E031\",this):left&&left.identifier&&state.funct[\"(scope)\"].block.modify(left.value,left),this.left=left,this},x}function optionalidentifier(fnparam,prop,preserve){if(state.tokens.next.identifier){preserve||advance();var curr=state.tokens.curr,val=state.tokens.curr.value;return isReserved(curr)?prop&&state.inES5()?val:fnparam&&\"undefined\"===val?val:(warning(\"W024\",state.tokens.curr,state.tokens.curr.id),val):val}}function identifier(fnparam,prop){var i=optionalidentifier(fnparam,prop,!1);if(i)return i;if(\"...\"===state.tokens.next.value){if(state.inES6(!0)||warning(\"W119\",state.tokens.next,\"spread/rest operator\",\"6\"),advance(),checkPunctuator(state.tokens.next,\"...\"))for(warning(\"E024\",state.tokens.next,\"...\");checkPunctuator(state.tokens.next,\"...\");)advance();return state.tokens.next.identifier?identifier(fnparam,prop):(warning(\"E024\",state.tokens.curr,\"...\"),void 0)}error(\"E030\",state.tokens.next,state.tokens.next.value),\";\"!==state.tokens.next.id&&advance()}function reachable(controlToken){var t,i=0;if(\";\"===state.tokens.next.id&&!controlToken.inBracelessBlock)for(;;){do t=peek(i),i+=1;while(\"(end)\"!==t.id&&\"(comment)\"===t.id);if(t.reach)return;if(\"(endline)\"!==t.id){if(\"function\"===t.id){state.option.latedef===!0&&warning(\"W026\",t);break}warning(\"W027\",t,t.value,controlToken.value);break}}}function parseFinalSemicolon(){if(\";\"!==state.tokens.next.id){if(state.tokens.next.isUnclosed)return advance();var sameLine=startLine(state.tokens.next)===state.tokens.curr.line&&\"(end)\"!==state.tokens.next.id,blockEnd=checkPunctuator(state.tokens.next,\"}\");sameLine&&!blockEnd?errorAt(\"E058\",state.tokens.curr.line,state.tokens.curr.character):state.option.asi||(blockEnd&&!state.option.lastsemic||!sameLine)&&warningAt(\"W033\",state.tokens.curr.line,state.tokens.curr.character)}else advance(\";\")}function statement(){var r,i=indent,t=state.tokens.next,hasOwnScope=!1;if(\";\"===t.id)return advance(\";\"),void 0;var res=isReserved(t);if(res&&t.meta&&t.meta.isFutureReservedWord&&\":\"===peek().id&&(warning(\"W024\",t,t.id),res=!1),t.identifier&&!res&&\":\"===peek().id&&(advance(),advance(\":\"),hasOwnScope=!0,state.funct[\"(scope)\"].stack(),state.funct[\"(scope)\"].block.addBreakLabel(t.value,{token:state.tokens.curr}),state.tokens.next.labelled||\"{\"===state.tokens.next.value||warning(\"W028\",state.tokens.next,t.value,state.tokens.next.value),state.tokens.next.label=t.value,t=state.tokens.next),\"{\"===t.id){var iscase=\"case\"===state.funct[\"(verb)\"]&&\":\"===state.tokens.curr.value;return block(!0,!0,!1,!1,iscase),void 0}return r=expression(0,!0),!r||r.identifier&&\"function\"===r.value||\"(punctuator)\"===r.type&&r.left&&r.left.identifier&&\"function\"===r.left.value||state.isStrict()||\"global\"!==state.option.strict||warning(\"E007\"),t.block||(state.option.expr||r&&r.exps?state.option.nonew&&r&&r.left&&\"(\"===r.id&&\"new\"===r.left.id&&warning(\"W031\",t):warning(\"W030\",state.tokens.curr),parseFinalSemicolon()),indent=i,hasOwnScope&&state.funct[\"(scope)\"].unstack(),r}function statements(){for(var p,a=[];!state.tokens.next.reach&&\"(end)\"!==state.tokens.next.id;)\";\"===state.tokens.next.id?(p=peek(),(!p||\"(\"!==p.id&&\"[\"!==p.id)&&warning(\"W032\"),advance(\";\")):a.push(statement());return a}function directives(){for(var i,p,pn;\"(string)\"===state.tokens.next.id;){if(p=peek(0),\"(endline)\"===p.id){i=1;do pn=peek(i++);while(\"(endline)\"===pn.id);if(\";\"===pn.id)p=pn;else{if(\"[\"===pn.value||\".\"===pn.value)break;state.option.asi&&\"(\"!==pn.value||warning(\"W033\",state.tokens.next)}}else{if(\".\"===p.id||\"[\"===p.id)break;\";\"!==p.id&&warning(\"W033\",p)}advance();var directive=state.tokens.curr.value;(state.directive[directive]||\"use strict\"===directive&&\"implied\"===state.option.strict)&&warning(\"W034\",state.tokens.curr,directive),state.directive[directive]=!0,\";\"===p.id&&advance(\";\")}state.isStrict()&&(state.option[\"(explicitNewcap)\"]||(state.option.newcap=!0),state.option.undef=!0)}function block(ordinary,stmt,isfunc,isfatarrow,iscase){var a,m,t,line,d,b=inblock,old_indent=indent;inblock=ordinary,t=state.tokens.next;var metrics=state.funct[\"(metrics)\"];if(metrics.nestedBlockDepth+=1,metrics.verifyMaxNestedBlockDepthPerFunction(),\"{\"===state.tokens.next.id){if(advance(\"{\"),state.funct[\"(scope)\"].stack(),line=state.tokens.curr.line,\"}\"!==state.tokens.next.id){for(indent+=state.option.indent;!ordinary&&state.tokens.next.from>indent;)indent+=state.option.indent;if(isfunc){m={};for(d in state.directive)_.has(state.directive,d)&&(m[d]=state.directive[d]);directives(),state.option.strict&&state.funct[\"(context)\"][\"(global)\"]&&(m[\"use strict\"]||state.isStrict()||warning(\"E007\"))}a=statements(),metrics.statementCount+=a.length,indent-=state.option.indent}advance(\"}\",t),isfunc&&(state.funct[\"(scope)\"].validateParams(),m&&(state.directive=m)),state.funct[\"(scope)\"].unstack(),indent=old_indent}else if(ordinary)state.funct[\"(noblockscopedvar)\"]=\"for\"!==state.tokens.next.id,state.funct[\"(scope)\"].stack(),(!stmt||state.option.curly)&&warning(\"W116\",state.tokens.next,\"{\",state.tokens.next.value),state.tokens.next.inBracelessBlock=!0,indent+=state.option.indent,a=[statement()],indent-=state.option.indent,state.funct[\"(scope)\"].unstack(),delete state.funct[\"(noblockscopedvar)\"];else if(isfunc){if(state.funct[\"(scope)\"].stack(),m={},!stmt||isfatarrow||state.inMoz()||error(\"W118\",state.tokens.curr,\"function closure expressions\"),!stmt)for(d in state.directive)_.has(state.directive,d)&&(m[d]=state.directive[d]);expression(10),state.option.strict&&state.funct[\"(context)\"][\"(global)\"]&&(m[\"use strict\"]||state.isStrict()||warning(\"E007\")),state.funct[\"(scope)\"].unstack()}else error(\"E021\",state.tokens.next,\"{\",state.tokens.next.value);switch(state.funct[\"(verb)\"]){case\"break\":case\"continue\":case\"return\":case\"throw\":if(iscase)break;default:state.funct[\"(verb)\"]=null}return inblock=b,!ordinary||!state.option.noempty||a&&0!==a.length||warning(\"W035\",state.tokens.prev),metrics.nestedBlockDepth-=1,a}function countMember(m){membersOnly&&\"boolean\"!=typeof membersOnly[m]&&warning(\"W036\",state.tokens.curr,m),\"number\"==typeof member[m]?member[m]+=1:member[m]=1}function comprehensiveArrayExpression(){var res={};res.exps=!0,state.funct[\"(comparray)\"].stack();var reversed=!1;return\"for\"!==state.tokens.next.value&&(reversed=!0,state.inMoz()||warning(\"W116\",state.tokens.next,\"for\",state.tokens.next.value),state.funct[\"(comparray)\"].setState(\"use\"),res.right=expression(10)),advance(\"for\"),\"each\"===state.tokens.next.value&&(advance(\"each\"),state.inMoz()||warning(\"W118\",state.tokens.curr,\"for each\")),advance(\"(\"),state.funct[\"(comparray)\"].setState(\"define\"),res.left=expression(130),_.contains([\"in\",\"of\"],state.tokens.next.value)?advance():error(\"E045\",state.tokens.curr),state.funct[\"(comparray)\"].setState(\"generate\"),expression(10),advance(\")\"),\"if\"===state.tokens.next.value&&(advance(\"if\"),advance(\"(\"),state.funct[\"(comparray)\"].setState(\"filter\"),res.filter=expression(10),advance(\")\")),reversed||(state.funct[\"(comparray)\"].setState(\"use\"),res.right=expression(10)),advance(\"]\"),state.funct[\"(comparray)\"].unstack(),res}function isMethod(){return state.funct[\"(statement)\"]&&\"class\"===state.funct[\"(statement)\"].type||state.funct[\"(context)\"]&&\"class\"===state.funct[\"(context)\"][\"(verb)\"]}function isPropertyName(token){return token.identifier||\"(string)\"===token.id||\"(number)\"===token.id}function propertyName(preserveOrToken){var id,preserve=!0;return\"object\"==typeof preserveOrToken?id=preserveOrToken:(preserve=preserveOrToken,id=optionalidentifier(!1,!0,preserve)),id?\"object\"==typeof id&&(\"(string)\"===id.id||\"(identifier)\"===id.id?id=id.value:\"(number)\"===id.id&&(id=\"\"+id.value)):\"(string)\"===state.tokens.next.id?(id=state.tokens.next.value,preserve||advance()):\"(number)\"===state.tokens.next.id&&(id=\"\"+state.tokens.next.value,preserve||advance()),\"hasOwnProperty\"===id&&warning(\"W001\"),id}function functionparams(options){function addParam(addParamArgs){state.funct[\"(scope)\"].addParam.apply(state.funct[\"(scope)\"],addParamArgs)}var next,ident,t,paramsIds=[],tokens=[],pastDefault=!1,pastRest=!1,arity=0,loneArg=options&&options.loneArg;if(loneArg&&loneArg.identifier===!0)return state.funct[\"(scope)\"].addParam(loneArg.value,loneArg),{arity:1,params:[loneArg.value]};if(next=state.tokens.next,options&&options.parsedOpening||advance(\"(\"),\")\"===state.tokens.next.id)return advance(\")\"),void 0;for(;;){arity++;var currentParams=[];if(_.contains([\"{\",\"[\"],state.tokens.next.id)){tokens=destructuringPattern();for(t in tokens)t=tokens[t],t.id&&(paramsIds.push(t.id),currentParams.push([t.id,t.token]))}else if(checkPunctuator(state.tokens.next,\"...\")&&(pastRest=!0),ident=identifier(!0))paramsIds.push(ident),currentParams.push([ident,state.tokens.curr]);else for(;!checkPunctuators(state.tokens.next,[\",\",\")\"]);)advance();if(pastDefault&&\"=\"!==state.tokens.next.id&&error(\"W138\",state.tokens.current),\"=\"===state.tokens.next.id&&(state.inES6()||warning(\"W119\",state.tokens.next,\"default parameters\",\"6\"),advance(\"=\"),pastDefault=!0,expression(10)),currentParams.forEach(addParam),\",\"!==state.tokens.next.id)return advance(\")\",next),{arity:arity,params:paramsIds};pastRest&&warning(\"W131\",state.tokens.next),comma()}}function functor(name,token,overwrites){var funct={\"(name)\":name,\"(breakage)\":0,\"(loopage)\":0,\"(tokens)\":{},\"(properties)\":{},\"(catch)\":!1,\"(global)\":!1,\"(line)\":null,\"(character)\":null,\"(metrics)\":null,\"(statement)\":null,\"(context)\":null,\"(scope)\":null,\"(comparray)\":null,\"(generator)\":null,\"(arrow)\":null,\"(params)\":null};return token&&_.extend(funct,{\"(line)\":token.line,\"(character)\":token.character,\"(metrics)\":createMetrics(token)}),_.extend(funct,overwrites),funct[\"(context)\"]&&(funct[\"(scope)\"]=funct[\"(context)\"][\"(scope)\"],funct[\"(comparray)\"]=funct[\"(context)\"][\"(comparray)\"]),funct}function isFunctor(token){return\"(scope)\"in token}function hasParsedCode(funct){return funct[\"(global)\"]&&!funct[\"(verb)\"]}function doTemplateLiteral(left){function end(){if(state.tokens.curr.template&&state.tokens.curr.tail&&state.tokens.curr.context===ctx)return!0;var complete=state.tokens.next.template&&state.tokens.next.tail&&state.tokens.next.context===ctx;return complete&&advance(),complete||state.tokens.next.isUnclosed}var ctx=this.context,noSubst=this.noSubst,depth=this.depth;if(!noSubst)for(;!end();)!state.tokens.next.template||state.tokens.next.depth>depth?expression(0):advance();return{id:\"(template)\",type:\"(template)\",tag:left}}function doFunction(options){var f,token,name,statement,classExprBinding,isGenerator,isArrow,ignoreLoopFunc,oldOption=state.option,oldIgnored=state.ignored;options&&(name=options.name,statement=options.statement,classExprBinding=options.classExprBinding,isGenerator=\"generator\"===options.type,isArrow=\"arrow\"===options.type,ignoreLoopFunc=options.ignoreLoopFunc),state.option=Object.create(state.option),state.ignored=Object.create(state.ignored),state.funct=functor(name||state.nameStack.infer(),state.tokens.next,{\"(statement)\":statement,\"(context)\":state.funct,\"(arrow)\":isArrow,\"(generator)\":isGenerator}),f=state.funct,token=state.tokens.curr,token.funct=state.funct,functions.push(state.funct),state.funct[\"(scope)\"].stack(\"functionouter\");var internallyAccessibleName=name||classExprBinding;internallyAccessibleName&&state.funct[\"(scope)\"].block.add(internallyAccessibleName,classExprBinding?\"class\":\"function\",state.tokens.curr,!1),state.funct[\"(scope)\"].stack(\"functionparams\");var paramsInfo=functionparams(options);return paramsInfo?(state.funct[\"(params)\"]=paramsInfo.params,state.funct[\"(metrics)\"].arity=paramsInfo.arity,state.funct[\"(metrics)\"].verifyMaxParametersPerFunction()):state.funct[\"(metrics)\"].arity=0,isArrow&&(state.inES6(!0)||warning(\"W119\",state.tokens.curr,\"arrow function syntax (=>)\",\"6\"),options.loneArg||advance(\"=>\")),block(!1,!0,!0,isArrow),!state.option.noyield&&isGenerator&&\"yielded\"!==state.funct[\"(generator)\"]&&warning(\"W124\",state.tokens.curr),state.funct[\"(metrics)\"].verifyMaxStatementsPerFunction(),state.funct[\"(metrics)\"].verifyMaxComplexityPerFunction(),state.funct[\"(unusedOption)\"]=state.option.unused,state.option=oldOption,state.ignored=oldIgnored,state.funct[\"(last)\"]=state.tokens.curr.line,state.funct[\"(lastcharacter)\"]=state.tokens.curr.character,state.funct[\"(scope)\"].unstack(),state.funct[\"(scope)\"].unstack(),state.funct=state.funct[\"(context)\"],ignoreLoopFunc||state.option.loopfunc||!state.funct[\"(loopage)\"]||f[\"(isCapturing)\"]&&warning(\"W083\",token),f}function createMetrics(functionStartToken){return{statementCount:0,nestedBlockDepth:-1,ComplexityCount:1,arity:0,verifyMaxStatementsPerFunction:function(){state.option.maxstatements&&this.statementCount>state.option.maxstatements&&warning(\"W071\",functionStartToken,this.statementCount)\n},verifyMaxParametersPerFunction:function(){_.isNumber(state.option.maxparams)&&this.arity>state.option.maxparams&&warning(\"W072\",functionStartToken,this.arity)},verifyMaxNestedBlockDepthPerFunction:function(){state.option.maxdepth&&this.nestedBlockDepth>0&&this.nestedBlockDepth===state.option.maxdepth+1&&warning(\"W073\",null,this.nestedBlockDepth)},verifyMaxComplexityPerFunction:function(){var max=state.option.maxcomplexity,cc=this.ComplexityCount;max&&cc>max&&warning(\"W074\",functionStartToken,cc)}}}function increaseComplexityCount(){state.funct[\"(metrics)\"].ComplexityCount+=1}function checkCondAssignment(expr){var id,paren;switch(expr&&(id=expr.id,paren=expr.paren,\",\"===id&&(expr=expr.exprs[expr.exprs.length-1])&&(id=expr.id,paren=paren||expr.paren)),id){case\"=\":case\"+=\":case\"-=\":case\"*=\":case\"%=\":case\"&=\":case\"|=\":case\"^=\":case\"/=\":paren||state.option.boss||warning(\"W084\")}}function checkProperties(props){if(state.inES5())for(var name in props)props[name]&&props[name].setterToken&&!props[name].getterToken&&warning(\"W078\",props[name].setterToken)}function metaProperty(name,c){if(checkPunctuator(state.tokens.next,\".\")){var left=state.tokens.curr.id;advance(\".\");var id=identifier();return state.tokens.curr.isMetaProperty=!0,name!==id?error(\"E057\",state.tokens.prev,left,id):c(),state.tokens.curr}}function destructuringPattern(options){var isAssignment=options&&options.assignment;return state.inES6()||warning(\"W104\",state.tokens.curr,isAssignment?\"destructuring assignment\":\"destructuring binding\",\"6\"),destructuringPatternRecursive(options)}function destructuringPatternRecursive(options){var ids,identifiers=[],openingParsed=options&&options.openingParsed,isAssignment=options&&options.assignment,recursiveOptions=isAssignment?{assignment:isAssignment}:null,firstToken=openingParsed?state.tokens.curr:state.tokens.next,nextInnerDE=function(){var ident;if(checkPunctuators(state.tokens.next,[\"[\",\"{\"])){ids=destructuringPatternRecursive(recursiveOptions);for(var id in ids)id=ids[id],identifiers.push({id:id.id,token:id.token})}else if(checkPunctuator(state.tokens.next,\",\"))identifiers.push({id:null,token:state.tokens.curr});else{if(!checkPunctuator(state.tokens.next,\"(\")){var is_rest=checkPunctuator(state.tokens.next,\"...\");if(isAssignment){var identifierToken=is_rest?peek(0):state.tokens.next;identifierToken.identifier||warning(\"E030\",identifierToken,identifierToken.value);var assignTarget=expression(155);assignTarget&&(checkLeftSideAssign(assignTarget),assignTarget.identifier&&(ident=assignTarget.value))}else ident=identifier();return ident&&identifiers.push({id:ident,token:state.tokens.curr}),is_rest}advance(\"(\"),nextInnerDE(),advance(\")\")}return!1},assignmentProperty=function(){var id;checkPunctuator(state.tokens.next,\"[\")?(advance(\"[\"),expression(10),advance(\"]\"),advance(\":\"),nextInnerDE()):\"(string)\"===state.tokens.next.id||\"(number)\"===state.tokens.next.id?(advance(),advance(\":\"),nextInnerDE()):(id=identifier(),checkPunctuator(state.tokens.next,\":\")?(advance(\":\"),nextInnerDE()):id&&(isAssignment&&checkLeftSideAssign(state.tokens.curr),identifiers.push({id:id,token:state.tokens.curr})))};if(checkPunctuator(firstToken,\"[\")){openingParsed||advance(\"[\"),checkPunctuator(state.tokens.next,\"]\")&&warning(\"W137\",state.tokens.curr);for(var element_after_rest=!1;!checkPunctuator(state.tokens.next,\"]\");)nextInnerDE()&&!element_after_rest&&checkPunctuator(state.tokens.next,\",\")&&(warning(\"W130\",state.tokens.next),element_after_rest=!0),checkPunctuator(state.tokens.next,\"=\")&&(checkPunctuator(state.tokens.prev,\"...\")?advance(\"]\"):advance(\"=\"),\"undefined\"===state.tokens.next.id&&warning(\"W080\",state.tokens.prev,state.tokens.prev.value),expression(10)),checkPunctuator(state.tokens.next,\"]\")||advance(\",\");advance(\"]\")}else if(checkPunctuator(firstToken,\"{\")){for(openingParsed||advance(\"{\"),checkPunctuator(state.tokens.next,\"}\")&&warning(\"W137\",state.tokens.curr);!checkPunctuator(state.tokens.next,\"}\")&&(assignmentProperty(),checkPunctuator(state.tokens.next,\"=\")&&(advance(\"=\"),\"undefined\"===state.tokens.next.id&&warning(\"W080\",state.tokens.prev,state.tokens.prev.value),expression(10)),checkPunctuator(state.tokens.next,\"}\")||(advance(\",\"),!checkPunctuator(state.tokens.next,\"}\"))););advance(\"}\")}return identifiers}function destructuringPatternMatch(tokens,value){var first=value.first;first&&_.zip(tokens,Array.isArray(first)?first:[first]).forEach(function(val){var token=val[0],value=val[1];token&&value?token.first=value:token&&token.first&&!value&&warning(\"W080\",token.first,token.first.value)})}function blockVariableStatement(type,statement,context){var tokens,lone,value,letblock,prefix=context&&context.prefix,inexport=context&&context.inexport,isLet=\"let\"===type,isConst=\"const\"===type;for(state.inES6()||warning(\"W104\",state.tokens.curr,type,\"6\"),isLet&&\"(\"===state.tokens.next.value?(state.inMoz()||warning(\"W118\",state.tokens.next,\"let block\"),advance(\"(\"),state.funct[\"(scope)\"].stack(),letblock=!0):state.funct[\"(noblockscopedvar)\"]&&error(\"E048\",state.tokens.curr,isConst?\"Const\":\"Let\"),statement.first=[];;){var names=[];_.contains([\"{\",\"[\"],state.tokens.next.value)?(tokens=destructuringPattern(),lone=!1):(tokens=[{id:identifier(),token:state.tokens.curr}],lone=!0),!prefix&&isConst&&\"=\"!==state.tokens.next.id&&warning(\"E012\",state.tokens.curr,state.tokens.curr.value);for(var t in tokens)tokens.hasOwnProperty(t)&&(t=tokens[t],state.funct[\"(scope)\"].block.isGlobal()&&predefined[t.id]===!1&&warning(\"W079\",t.token,t.id),t.id&&!state.funct[\"(noblockscopedvar)\"]&&(state.funct[\"(scope)\"].addlabel(t.id,{type:type,token:t.token}),names.push(t.token),lone&&inexport&&state.funct[\"(scope)\"].setExported(t.token.value,t.token)));if(\"=\"===state.tokens.next.id&&(advance(\"=\"),prefix||\"undefined\"!==state.tokens.next.id||warning(\"W080\",state.tokens.prev,state.tokens.prev.value),!prefix&&\"=\"===peek(0).id&&state.tokens.next.identifier&&warning(\"W120\",state.tokens.next,state.tokens.next.value),value=expression(prefix?120:10),lone?tokens[0].first=value:destructuringPatternMatch(names,value)),statement.first=statement.first.concat(names),\",\"!==state.tokens.next.id)break;comma()}return letblock&&(advance(\")\"),block(!0,!0),statement.block=!0,state.funct[\"(scope)\"].unstack()),statement}function classdef(isStatement){return state.inES6()||warning(\"W104\",state.tokens.curr,\"class\",\"6\"),isStatement?(this.name=identifier(),state.funct[\"(scope)\"].addlabel(this.name,{type:\"class\",token:state.tokens.curr})):state.tokens.next.identifier&&\"extends\"!==state.tokens.next.value?(this.name=identifier(),this.namedExpr=!0):this.name=state.nameStack.infer(),classtail(this),this}function classtail(c){var wasInClassBody=state.inClassBody;\"extends\"===state.tokens.next.value&&(advance(\"extends\"),c.heritage=expression(10)),state.inClassBody=!0,advance(\"{\"),c.body=classbody(c),advance(\"}\"),state.inClassBody=wasInClassBody}function classbody(c){for(var name,isStatic,isGenerator,getset,computed,props=Object.create(null),staticProps=Object.create(null),i=0;\"}\"!==state.tokens.next.id;++i)if(name=state.tokens.next,isStatic=!1,isGenerator=!1,getset=null,\";\"!==name.id){if(\"*\"===name.id&&(isGenerator=!0,advance(\"*\"),name=state.tokens.next),\"[\"===name.id)name=computedPropertyName(),computed=!0;else{if(!isPropertyName(name)){warning(\"W052\",state.tokens.next,state.tokens.next.value||state.tokens.next.type),advance();continue}advance(),computed=!1,name.identifier&&\"static\"===name.value&&(checkPunctuator(state.tokens.next,\"*\")&&(isGenerator=!0,advance(\"*\")),(isPropertyName(state.tokens.next)||\"[\"===state.tokens.next.id)&&(computed=\"[\"===state.tokens.next.id,isStatic=!0,name=state.tokens.next,\"[\"===state.tokens.next.id?name=computedPropertyName():advance())),!name.identifier||\"get\"!==name.value&&\"set\"!==name.value||(isPropertyName(state.tokens.next)||\"[\"===state.tokens.next.id)&&(computed=\"[\"===state.tokens.next.id,getset=name,name=state.tokens.next,\"[\"===state.tokens.next.id?name=computedPropertyName():advance())}if(!checkPunctuator(state.tokens.next,\"(\")){for(error(\"E054\",state.tokens.next,state.tokens.next.value);\"}\"!==state.tokens.next.id&&!checkPunctuator(state.tokens.next,\"(\");)advance();\"(\"!==state.tokens.next.value&&doFunction({statement:c})}if(computed||(getset?saveAccessor(getset.value,isStatic?staticProps:props,name.value,name,!0,isStatic):(\"constructor\"===name.value?state.nameStack.set(c):state.nameStack.set(name),saveProperty(isStatic?staticProps:props,name.value,name,!0,isStatic))),getset&&\"constructor\"===name.value){var propDesc=\"get\"===getset.value?\"class getter method\":\"class setter method\";error(\"E049\",name,propDesc,\"constructor\")}else\"prototype\"===name.value&&error(\"E049\",name,\"class method\",\"prototype\");propertyName(name),doFunction({statement:c,type:isGenerator?\"generator\":null,classExprBinding:c.namedExpr?c.name:null})}else warning(\"W032\"),advance(\";\");checkProperties(props)}function saveProperty(props,name,tkn,isClass,isStatic){var msg=[\"key\",\"class method\",\"static class method\"];msg=msg[(isClass||!1)+(isStatic||!1)],tkn.identifier&&(name=tkn.value),props[name]&&\"__proto__\"!==name?warning(\"W075\",state.tokens.next,msg,name):props[name]=Object.create(null),props[name].basic=!0,props[name].basictkn=tkn}function saveAccessor(accessorType,props,name,tkn,isClass,isStatic){var flagName=\"get\"===accessorType?\"getterToken\":\"setterToken\",msg=\"\";isClass?(isStatic&&(msg+=\"static \"),msg+=accessorType+\"ter method\"):msg=\"key\",state.tokens.curr.accessorType=accessorType,state.nameStack.set(tkn),props[name]?(props[name].basic||props[name][flagName])&&\"__proto__\"!==name&&warning(\"W075\",state.tokens.next,msg,name):props[name]=Object.create(null),props[name][flagName]=tkn}function computedPropertyName(){advance(\"[\"),state.inES6()||warning(\"W119\",state.tokens.curr,\"computed property names\",\"6\");var value=expression(10);return advance(\"]\"),value}function checkPunctuators(token,values){return\"(punctuator)\"===token.type?_.contains(values,token.value):!1}function checkPunctuator(token,value){return\"(punctuator)\"===token.type&&token.value===value}function destructuringAssignOrJsonValue(){var block=lookupBlockType();block.notJson?(!state.inES6()&&block.isDestAssign&&warning(\"W104\",state.tokens.curr,\"destructuring assignment\",\"6\"),statements()):(state.option.laxbreak=!0,state.jsonMode=!0,jsonValue())}function jsonValue(){function jsonObject(){var o={},t=state.tokens.next;if(advance(\"{\"),\"}\"!==state.tokens.next.id)for(;;){if(\"(end)\"===state.tokens.next.id)error(\"E026\",state.tokens.next,t.line);else{if(\"}\"===state.tokens.next.id){warning(\"W094\",state.tokens.curr);break}\",\"===state.tokens.next.id?error(\"E028\",state.tokens.next):\"(string)\"!==state.tokens.next.id&&warning(\"W095\",state.tokens.next,state.tokens.next.value)}if(o[state.tokens.next.value]===!0?warning(\"W075\",state.tokens.next,\"key\",state.tokens.next.value):\"__proto__\"===state.tokens.next.value&&!state.option.proto||\"__iterator__\"===state.tokens.next.value&&!state.option.iterator?warning(\"W096\",state.tokens.next,state.tokens.next.value):o[state.tokens.next.value]=!0,advance(),advance(\":\"),jsonValue(),\",\"!==state.tokens.next.id)break;advance(\",\")}advance(\"}\")}function jsonArray(){var t=state.tokens.next;if(advance(\"[\"),\"]\"!==state.tokens.next.id)for(;;){if(\"(end)\"===state.tokens.next.id)error(\"E027\",state.tokens.next,t.line);else{if(\"]\"===state.tokens.next.id){warning(\"W094\",state.tokens.curr);break}\",\"===state.tokens.next.id&&error(\"E028\",state.tokens.next)}if(jsonValue(),\",\"!==state.tokens.next.id)break;advance(\",\")}advance(\"]\")}switch(state.tokens.next.id){case\"{\":jsonObject();break;case\"[\":jsonArray();break;case\"true\":case\"false\":case\"null\":case\"(number)\":case\"(string)\":advance();break;case\"-\":advance(\"-\"),advance(\"(number)\");break;default:error(\"E003\",state.tokens.next)}}var api,declared,functions,inblock,indent,lookahead,lex,member,membersOnly,predefined,stack,urls,bang={\"<\":!0,\"<=\":!0,\"==\":!0,\"===\":!0,\"!==\":!0,\"!=\":!0,\">\":!0,\">=\":!0,\"+\":!0,\"-\":!0,\"*\":!0,\"/\":!0,\"%\":!0},functionicity=[\"closure\",\"exception\",\"global\",\"label\",\"outer\",\"unused\",\"var\"],extraModules=[],emitter=new events.EventEmitter,typeofValues={};typeofValues.legacy=[\"xml\",\"unknown\"],typeofValues.es3=[\"undefined\",\"boolean\",\"number\",\"string\",\"function\",\"object\"],typeofValues.es3=typeofValues.es3.concat(typeofValues.legacy),typeofValues.es6=typeofValues.es3.concat(\"symbol\"),type(\"(number)\",function(){return this}),type(\"(string)\",function(){return this}),state.syntax[\"(identifier)\"]={type:\"(identifier)\",lbp:0,identifier:!0,nud:function(){var v=this.value;return\"=>\"===state.tokens.next.id?this:(state.funct[\"(comparray)\"].check(v)||state.funct[\"(scope)\"].block.use(v,state.tokens.curr),this)},led:function(){error(\"E033\",state.tokens.next,state.tokens.next.value)}};var baseTemplateSyntax={lbp:0,identifier:!1,template:!0};state.syntax[\"(template)\"]=_.extend({type:\"(template)\",nud:doTemplateLiteral,led:doTemplateLiteral,noSubst:!1},baseTemplateSyntax),state.syntax[\"(template middle)\"]=_.extend({type:\"(template middle)\",middle:!0,noSubst:!1},baseTemplateSyntax),state.syntax[\"(template tail)\"]=_.extend({type:\"(template tail)\",tail:!0,noSubst:!1},baseTemplateSyntax),state.syntax[\"(no subst template)\"]=_.extend({type:\"(template)\",nud:doTemplateLiteral,led:doTemplateLiteral,noSubst:!0,tail:!0},baseTemplateSyntax),type(\"(regexp)\",function(){return this}),delim(\"(endline)\"),delim(\"(begin)\"),delim(\"(end)\").reach=!0,delim(\"(error)\").reach=!0,delim(\"}\").reach=!0,delim(\")\"),delim(\"]\"),delim('\"').reach=!0,delim(\"'\").reach=!0,delim(\";\"),delim(\":\").reach=!0,delim(\"#\"),reserve(\"else\"),reserve(\"case\").reach=!0,reserve(\"catch\"),reserve(\"default\").reach=!0,reserve(\"finally\"),reservevar(\"arguments\",function(x){state.isStrict()&&state.funct[\"(global)\"]&&warning(\"E008\",x)}),reservevar(\"eval\"),reservevar(\"false\"),reservevar(\"Infinity\"),reservevar(\"null\"),reservevar(\"this\",function(x){state.isStrict()&&!isMethod()&&!state.option.validthis&&(state.funct[\"(statement)\"]&&state.funct[\"(name)\"].charAt(0)>\"Z\"||state.funct[\"(global)\"])&&warning(\"W040\",x)}),reservevar(\"true\"),reservevar(\"undefined\"),assignop(\"=\",\"assign\",20),assignop(\"+=\",\"assignadd\",20),assignop(\"-=\",\"assignsub\",20),assignop(\"*=\",\"assignmult\",20),assignop(\"/=\",\"assigndiv\",20).nud=function(){error(\"E014\")},assignop(\"%=\",\"assignmod\",20),bitwiseassignop(\"&=\"),bitwiseassignop(\"|=\"),bitwiseassignop(\"^=\"),bitwiseassignop(\"<<=\"),bitwiseassignop(\">>=\"),bitwiseassignop(\">>>=\"),infix(\",\",function(left,that){var expr;if(that.exprs=[left],state.option.nocomma&&warning(\"W127\"),!comma({peek:!0}))return that;for(;;){if(!(expr=expression(10)))break;if(that.exprs.push(expr),\",\"!==state.tokens.next.value||!comma())break}return that},10,!0),infix(\"?\",function(left,that){return increaseComplexityCount(),that.left=left,that.right=expression(10),advance(\":\"),that[\"else\"]=expression(10),that},30);var orPrecendence=40;infix(\"||\",function(left,that){return increaseComplexityCount(),that.left=left,that.right=expression(orPrecendence),that},orPrecendence),infix(\"&&\",\"and\",50),bitwise(\"|\",\"bitor\",70),bitwise(\"^\",\"bitxor\",80),bitwise(\"&\",\"bitand\",90),relation(\"==\",function(left,right){var eqnull=state.option.eqnull&&(\"null\"===(left&&left.value)||\"null\"===(right&&right.value));switch(!0){case!eqnull&&state.option.eqeqeq:this.from=this.character,warning(\"W116\",this,\"===\",\"==\");break;case isPoorRelation(left):warning(\"W041\",this,\"===\",left.value);break;case isPoorRelation(right):warning(\"W041\",this,\"===\",right.value);break;case isTypoTypeof(right,left,state):warning(\"W122\",this,right.value);break;case isTypoTypeof(left,right,state):warning(\"W122\",this,left.value)}return this}),relation(\"===\",function(left,right){return isTypoTypeof(right,left,state)?warning(\"W122\",this,right.value):isTypoTypeof(left,right,state)&&warning(\"W122\",this,left.value),this}),relation(\"!=\",function(left,right){var eqnull=state.option.eqnull&&(\"null\"===(left&&left.value)||\"null\"===(right&&right.value));return!eqnull&&state.option.eqeqeq?(this.from=this.character,warning(\"W116\",this,\"!==\",\"!=\")):isPoorRelation(left)?warning(\"W041\",this,\"!==\",left.value):isPoorRelation(right)?warning(\"W041\",this,\"!==\",right.value):isTypoTypeof(right,left,state)?warning(\"W122\",this,right.value):isTypoTypeof(left,right,state)&&warning(\"W122\",this,left.value),this}),relation(\"!==\",function(left,right){return isTypoTypeof(right,left,state)?warning(\"W122\",this,right.value):isTypoTypeof(left,right,state)&&warning(\"W122\",this,left.value),this}),relation(\"<\"),relation(\">\"),relation(\"<=\"),relation(\">=\"),bitwise(\"<<\",\"shiftleft\",120),bitwise(\">>\",\"shiftright\",120),bitwise(\">>>\",\"shiftrightunsigned\",120),infix(\"in\",\"in\",120),infix(\"instanceof\",\"instanceof\",120),infix(\"+\",function(left,that){var right;return that.left=left,that.right=right=expression(130),left&&right&&\"(string)\"===left.id&&\"(string)\"===right.id?(left.value+=right.value,left.character=right.character,!state.option.scripturl&&reg.javascriptURL.test(left.value)&&warning(\"W050\",left),left):that},130),prefix(\"+\",\"num\"),prefix(\"+++\",function(){return warning(\"W007\"),this.arity=\"unary\",this.right=expression(150),this}),infix(\"+++\",function(left){return warning(\"W007\"),this.left=left,this.right=expression(130),this},130),infix(\"-\",\"sub\",130),prefix(\"-\",\"neg\"),prefix(\"---\",function(){return warning(\"W006\"),this.arity=\"unary\",this.right=expression(150),this}),infix(\"---\",function(left){return warning(\"W006\"),this.left=left,this.right=expression(130),this},130),infix(\"*\",\"mult\",140),infix(\"/\",\"div\",140),infix(\"%\",\"mod\",140),suffix(\"++\"),prefix(\"++\",\"preinc\"),state.syntax[\"++\"].exps=!0,suffix(\"--\"),prefix(\"--\",\"predec\"),state.syntax[\"--\"].exps=!0,prefix(\"delete\",function(){var p=expression(10);return p?(\".\"!==p.id&&\"[\"!==p.id&&warning(\"W051\"),this.first=p,p.identifier&&!state.isStrict()&&(p.forgiveUndef=!0),this):this}).exps=!0,prefix(\"~\",function(){return state.option.bitwise&&warning(\"W016\",this,\"~\"),this.arity=\"unary\",this.right=expression(150),this}),prefix(\"...\",function(){return state.inES6(!0)||warning(\"W119\",this,\"spread/rest operator\",\"6\"),state.tokens.next.identifier||\"(string)\"===state.tokens.next.type||checkPunctuators(state.tokens.next,[\"[\",\"(\"])||error(\"E030\",state.tokens.next,state.tokens.next.value),expression(150),this}),prefix(\"!\",function(){return this.arity=\"unary\",this.right=expression(150),this.right||quit(\"E041\",this.line||0),bang[this.right.id]===!0&&warning(\"W018\",this,\"!\"),this}),prefix(\"typeof\",function(){var p=expression(150);return this.first=this.right=p,p||quit(\"E041\",this.line||0,this.character||0),p.identifier&&(p.forgiveUndef=!0),this}),prefix(\"new\",function(){var mp=metaProperty(\"target\",function(){state.inES6(!0)||warning(\"W119\",state.tokens.prev,\"new.target\",\"6\");for(var inFunction,c=state.funct;c&&(inFunction=!c[\"(global)\"],c[\"(arrow)\"]);)c=c[\"(context)\"];inFunction||warning(\"W136\",state.tokens.prev,\"new.target\")});if(mp)return mp;var i,c=expression(155);if(c&&\"function\"!==c.id)if(c.identifier)switch(c[\"new\"]=!0,c.value){case\"Number\":case\"String\":case\"Boolean\":case\"Math\":case\"JSON\":warning(\"W053\",state.tokens.prev,c.value);break;case\"Symbol\":state.inES6()&&warning(\"W053\",state.tokens.prev,c.value);break;case\"Function\":state.option.evil||warning(\"W054\");break;case\"Date\":case\"RegExp\":case\"this\":break;default:\"function\"!==c.id&&(i=c.value.substr(0,1),state.option.newcap&&(\"A\">i||i>\"Z\")&&!state.funct[\"(scope)\"].isPredefined(c.value)&&warning(\"W055\",state.tokens.curr))}else\".\"!==c.id&&\"[\"!==c.id&&\"(\"!==c.id&&warning(\"W056\",state.tokens.curr);else state.option.supernew||warning(\"W057\",this);return\"(\"===state.tokens.next.id||state.option.supernew||warning(\"W058\",state.tokens.curr,state.tokens.curr.value),this.first=this.right=c,this}),state.syntax[\"new\"].exps=!0,prefix(\"void\").exps=!0,infix(\".\",function(left,that){var m=identifier(!1,!0);return\"string\"==typeof m&&countMember(m),that.left=left,that.right=m,m&&\"hasOwnProperty\"===m&&\"=\"===state.tokens.next.value&&warning(\"W001\"),!left||\"arguments\"!==left.value||\"callee\"!==m&&\"caller\"!==m?state.option.evil||!left||\"document\"!==left.value||\"write\"!==m&&\"writeln\"!==m||warning(\"W060\",left):state.option.noarg?warning(\"W059\",left,m):state.isStrict()&&error(\"E008\"),state.option.evil||\"eval\"!==m&&\"execScript\"!==m||isGlobalEval(left,state)&&warning(\"W061\"),that},160,!0),infix(\"(\",function(left,that){state.option.immed&&left&&!left.immed&&\"function\"===left.id&&warning(\"W062\");var n=0,p=[];if(left&&\"(identifier)\"===left.type&&left.value.match(/^[A-Z]([A-Z0-9_$]*[a-z][A-Za-z0-9_$]*)?$/)&&-1===\"Array Number String Boolean Date Object Error Symbol\".indexOf(left.value)&&(\"Math\"===left.value?warning(\"W063\",left):state.option.newcap&&warning(\"W064\",left)),\")\"!==state.tokens.next.id)for(;p[p.length]=expression(10),n+=1,\",\"===state.tokens.next.id;)comma();return advance(\")\"),\"object\"==typeof left&&(state.inES5()||\"parseInt\"!==left.value||1!==n||warning(\"W065\",state.tokens.curr),state.option.evil||(\"eval\"===left.value||\"Function\"===left.value||\"execScript\"===left.value?(warning(\"W061\",left),p[0]&&\"(string)\"===[0].id&&addInternalSrc(left,p[0].value)):!p[0]||\"(string)\"!==p[0].id||\"setTimeout\"!==left.value&&\"setInterval\"!==left.value?!p[0]||\"(string)\"!==p[0].id||\".\"!==left.value||\"window\"!==left.left.value||\"setTimeout\"!==left.right&&\"setInterval\"!==left.right||(warning(\"W066\",left),addInternalSrc(left,p[0].value)):(warning(\"W066\",left),addInternalSrc(left,p[0].value))),left.identifier||\".\"===left.id||\"[\"===left.id||\"=>\"===left.id||\"(\"===left.id||\"&&\"===left.id||\"||\"===left.id||\"?\"===left.id||state.inES6()&&left[\"(name)\"]||warning(\"W067\",that)),that.left=left,that},155,!0).exps=!0,prefix(\"(\",function(){var pn1,ret,triggerFnExpr,first,last,pn=state.tokens.next,i=-1,parens=1,opening=state.tokens.curr,preceeding=state.tokens.prev,isNecessary=!state.option.singleGroups;do\"(\"===pn.value?parens+=1:\")\"===pn.value&&(parens-=1),i+=1,pn1=pn,pn=peek(i);while((0!==parens||\")\"!==pn1.value)&&\";\"!==pn.value&&\"(end)\"!==pn.type);if(\"function\"===state.tokens.next.id&&(triggerFnExpr=state.tokens.next.immed=!0),\"=>\"===pn.value)return doFunction({type:\"arrow\",parsedOpening:!0});var exprs=[];if(\")\"!==state.tokens.next.id)for(;exprs.push(expression(10)),\",\"===state.tokens.next.id;)state.option.nocomma&&warning(\"W127\"),comma();return advance(\")\",this),state.option.immed&&exprs[0]&&\"function\"===exprs[0].id&&\"(\"!==state.tokens.next.id&&\".\"!==state.tokens.next.id&&\"[\"!==state.tokens.next.id&&warning(\"W068\",this),exprs.length?(exprs.length>1?(ret=Object.create(state.syntax[\",\"]),ret.exprs=exprs,first=exprs[0],last=exprs[exprs.length-1],isNecessary||(isNecessary=preceeding.assign||preceeding.delim)):(ret=first=last=exprs[0],isNecessary||(isNecessary=opening.beginsStmt&&(\"{\"===ret.id||triggerFnExpr||isFunctor(ret))||triggerFnExpr&&(!isEndOfExpr()||\"}\"!==state.tokens.prev.id)||isFunctor(ret)&&!isEndOfExpr()||\"{\"===ret.id&&\"=>\"===preceeding.id||\"(number)\"===ret.type&&checkPunctuator(pn,\".\")&&/^\\d+$/.test(ret.value))),ret&&(!isNecessary&&(first.left||first.right||ret.exprs)&&(isNecessary=!isBeginOfExpr(preceeding)&&first.lbp<=preceeding.lbp||!isEndOfExpr()&&last.lbp<state.tokens.next.lbp),isNecessary||warning(\"W126\",opening),ret.paren=!0),ret):void 0}),application(\"=>\"),infix(\"[\",function(left,that){var s,e=expression(10);return e&&\"(string)\"===e.type&&(state.option.evil||\"eval\"!==e.value&&\"execScript\"!==e.value||isGlobalEval(left,state)&&warning(\"W061\"),countMember(e.value),!state.option.sub&&reg.identifier.test(e.value)&&(s=state.syntax[e.value],s&&isReserved(s)||warning(\"W069\",state.tokens.prev,e.value))),advance(\"]\",that),e&&\"hasOwnProperty\"===e.value&&\"=\"===state.tokens.next.value&&warning(\"W001\"),that.left=left,that.right=e,that},160,!0),prefix(\"[\",function(){var blocktype=lookupBlockType();if(blocktype.isCompArray)return state.option.esnext||state.inMoz()||warning(\"W118\",state.tokens.curr,\"array comprehension\"),comprehensiveArrayExpression();if(blocktype.isDestAssign)return this.destructAssign=destructuringPattern({openingParsed:!0,assignment:!0}),this;var b=state.tokens.curr.line!==startLine(state.tokens.next);for(this.first=[],b&&(indent+=state.option.indent,state.tokens.next.from===indent+state.option.indent&&(indent+=state.option.indent));\"(end)\"!==state.tokens.next.id;){for(;\",\"===state.tokens.next.id;){if(!state.option.elision){if(state.inES5()){warning(\"W128\");do advance(\",\");while(\",\"===state.tokens.next.id);continue}warning(\"W070\")}advance(\",\")}if(\"]\"===state.tokens.next.id)break;if(this.first.push(expression(10)),\",\"!==state.tokens.next.id)break;if(comma({allowTrailing:!0}),\"]\"===state.tokens.next.id&&!state.inES5()){warning(\"W070\",state.tokens.curr);break}}return b&&(indent-=state.option.indent),advance(\"]\",this),this}),function(x){x.nud=function(){var b,f,i,p,t,nextVal,isGeneratorMethod=!1,props=Object.create(null);b=state.tokens.curr.line!==startLine(state.tokens.next),b&&(indent+=state.option.indent,state.tokens.next.from===indent+state.option.indent&&(indent+=state.option.indent));var blocktype=lookupBlockType();if(blocktype.isDestAssign)return this.destructAssign=destructuringPattern({openingParsed:!0,assignment:!0}),this;for(;\"}\"!==state.tokens.next.id;){if(nextVal=state.tokens.next.value,!state.tokens.next.identifier||\",\"!==peekIgnoreEOL().id&&\"}\"!==peekIgnoreEOL().id)if(\":\"===peek().id||\"get\"!==nextVal&&\"set\"!==nextVal){if(\"*\"===state.tokens.next.value&&\"(punctuator)\"===state.tokens.next.type?(state.inES6()||warning(\"W104\",state.tokens.next,\"generator functions\",\"6\"),advance(\"*\"),isGeneratorMethod=!0):isGeneratorMethod=!1,\"[\"===state.tokens.next.id)i=computedPropertyName(),state.nameStack.set(i);else if(state.nameStack.set(state.tokens.next),i=propertyName(),saveProperty(props,i,state.tokens.next),\"string\"!=typeof i)break;\"(\"===state.tokens.next.value?(state.inES6()||warning(\"W104\",state.tokens.curr,\"concise methods\",\"6\"),doFunction({type:isGeneratorMethod?\"generator\":null})):(advance(\":\"),expression(10))}else advance(nextVal),state.inES5()||error(\"E034\"),i=propertyName(),i||state.inES6()||error(\"E035\"),i&&saveAccessor(nextVal,props,i,state.tokens.curr),t=state.tokens.next,f=doFunction(),p=f[\"(params)\"],\"get\"===nextVal&&i&&p?warning(\"W076\",t,p[0],i):\"set\"!==nextVal||!i||p&&1===p.length||warning(\"W077\",t,i);else state.inES6()||warning(\"W104\",state.tokens.next,\"object short notation\",\"6\"),i=propertyName(!0),saveProperty(props,i,state.tokens.next),expression(10);if(countMember(i),\",\"!==state.tokens.next.id)break;comma({allowTrailing:!0,property:!0}),\",\"===state.tokens.next.id?warning(\"W070\",state.tokens.curr):\"}\"!==state.tokens.next.id||state.inES5()||warning(\"W070\",state.tokens.curr)}return b&&(indent-=state.option.indent),advance(\"}\",this),checkProperties(props),this},x.fud=function(){error(\"E036\",state.tokens.curr)}}(delim(\"{\"));var conststatement=stmt(\"const\",function(context){return blockVariableStatement(\"const\",this,context)});conststatement.exps=!0;var letstatement=stmt(\"let\",function(context){return blockVariableStatement(\"let\",this,context)});letstatement.exps=!0;var varstatement=stmt(\"var\",function(context){var tokens,lone,value,prefix=context&&context.prefix,inexport=context&&context.inexport,implied=context&&context.implied,report=!(context&&context.ignore);for(this.first=[];;){var names=[];_.contains([\"{\",\"[\"],state.tokens.next.value)?(tokens=destructuringPattern(),lone=!1):(tokens=[{id:identifier(),token:state.tokens.curr}],lone=!0),prefix&&implied||!report||!state.option.varstmt||warning(\"W132\",this),this.first=this.first.concat(names);for(var t in tokens)tokens.hasOwnProperty(t)&&(t=tokens[t],!implied&&state.funct[\"(global)\"]&&(predefined[t.id]===!1?warning(\"W079\",t.token,t.id):state.option.futurehostile===!1&&(!state.inES5()&&vars.ecmaIdentifiers[5][t.id]===!1||!state.inES6()&&vars.ecmaIdentifiers[6][t.id]===!1)&&warning(\"W129\",t.token,t.id)),t.id&&(\"for\"===implied?(state.funct[\"(scope)\"].has(t.id)||report&&warning(\"W088\",t.token,t.id),state.funct[\"(scope)\"].block.use(t.id,t.token)):(state.funct[\"(scope)\"].addlabel(t.id,{type:\"var\",token:t.token}),lone&&inexport&&state.funct[\"(scope)\"].setExported(t.id,t.token)),names.push(t.token)));if(\"=\"===state.tokens.next.id&&(state.nameStack.set(state.tokens.curr),advance(\"=\"),prefix||!report||state.funct[\"(loopage)\"]||\"undefined\"!==state.tokens.next.id||warning(\"W080\",state.tokens.prev,state.tokens.prev.value),\"=\"===peek(0).id&&state.tokens.next.identifier&&(!prefix&&report&&!state.funct[\"(params)\"]||-1===state.funct[\"(params)\"].indexOf(state.tokens.next.value))&&warning(\"W120\",state.tokens.next,state.tokens.next.value),value=expression(prefix?120:10),lone?tokens[0].first=value:destructuringPatternMatch(names,value)),\",\"!==state.tokens.next.id)break;comma()}return this});varstatement.exps=!0,blockstmt(\"class\",function(){return classdef.call(this,!0)}),blockstmt(\"function\",function(context){var inexport=context&&context.inexport,generator=!1;\"*\"===state.tokens.next.value&&(advance(\"*\"),state.inES6({strict:!0})?generator=!0:warning(\"W119\",state.tokens.curr,\"function*\",\"6\")),inblock&&warning(\"W082\",state.tokens.curr);var i=optionalidentifier();return state.funct[\"(scope)\"].addlabel(i,{type:\"function\",token:state.tokens.curr}),void 0===i?warning(\"W025\"):inexport&&state.funct[\"(scope)\"].setExported(i,state.tokens.prev),doFunction({name:i,statement:this,type:generator?\"generator\":null,ignoreLoopFunc:inblock}),\"(\"===state.tokens.next.id&&state.tokens.next.line===state.tokens.curr.line&&error(\"E039\"),this}),prefix(\"function\",function(){var generator=!1;\"*\"===state.tokens.next.value&&(state.inES6()||warning(\"W119\",state.tokens.curr,\"function*\",\"6\"),advance(\"*\"),generator=!0);var i=optionalidentifier();return doFunction({name:i,type:generator?\"generator\":null}),this}),blockstmt(\"if\",function(){var t=state.tokens.next;increaseComplexityCount(),state.condition=!0,advance(\"(\");var expr=expression(0);checkCondAssignment(expr);var forinifcheck=null;state.option.forin&&state.forinifcheckneeded&&(state.forinifcheckneeded=!1,forinifcheck=state.forinifchecks[state.forinifchecks.length-1],forinifcheck.type=\"(punctuator)\"===expr.type&&\"!\"===expr.value?\"(negative)\":\"(positive)\"),advance(\")\",t),state.condition=!1;var s=block(!0,!0);return forinifcheck&&\"(negative)\"===forinifcheck.type&&s&&s[0]&&\"(identifier)\"===s[0].type&&\"continue\"===s[0].value&&(forinifcheck.type=\"(negative-with-continue)\"),\"else\"===state.tokens.next.id&&(advance(\"else\"),\"if\"===state.tokens.next.id||\"switch\"===state.tokens.next.id?statement():block(!0,!0)),this}),blockstmt(\"try\",function(){function doCatch(){if(advance(\"catch\"),advance(\"(\"),state.funct[\"(scope)\"].stack(\"catchparams\"),checkPunctuators(state.tokens.next,[\"[\",\"{\"])){var tokens=destructuringPattern();_.each(tokens,function(token){token.id&&state.funct[\"(scope)\"].addParam(token.id,token,\"exception\")})}else\"(identifier)\"!==state.tokens.next.type?warning(\"E030\",state.tokens.next,state.tokens.next.value):state.funct[\"(scope)\"].addParam(identifier(),state.tokens.curr,\"exception\");\"if\"===state.tokens.next.value&&(state.inMoz()||warning(\"W118\",state.tokens.curr,\"catch filter\"),advance(\"if\"),expression(0)),advance(\")\"),block(!1),state.funct[\"(scope)\"].unstack()}var b;for(block(!0);\"catch\"===state.tokens.next.id;)increaseComplexityCount(),b&&!state.inMoz()&&warning(\"W118\",state.tokens.next,\"multiple catch blocks\"),doCatch(),b=!0;return\"finally\"===state.tokens.next.id?(advance(\"finally\"),block(!0),void 0):(b||error(\"E021\",state.tokens.next,\"catch\",state.tokens.next.value),this)}),blockstmt(\"while\",function(){var t=state.tokens.next;return state.funct[\"(breakage)\"]+=1,state.funct[\"(loopage)\"]+=1,increaseComplexityCount(),advance(\"(\"),checkCondAssignment(expression(0)),advance(\")\",t),block(!0,!0),state.funct[\"(breakage)\"]-=1,state.funct[\"(loopage)\"]-=1,this}).labelled=!0,blockstmt(\"with\",function(){var t=state.tokens.next;return state.isStrict()?error(\"E010\",state.tokens.curr):state.option.withstmt||warning(\"W085\",state.tokens.curr),advance(\"(\"),expression(0),advance(\")\",t),block(!0,!0),this}),blockstmt(\"switch\",function(){var t=state.tokens.next,g=!1,noindent=!1;\nfor(state.funct[\"(breakage)\"]+=1,advance(\"(\"),checkCondAssignment(expression(0)),advance(\")\",t),t=state.tokens.next,advance(\"{\"),state.tokens.next.from===indent&&(noindent=!0),noindent||(indent+=state.option.indent),this.cases=[];;)switch(state.tokens.next.id){case\"case\":switch(state.funct[\"(verb)\"]){case\"yield\":case\"break\":case\"case\":case\"continue\":case\"return\":case\"switch\":case\"throw\":break;default:state.tokens.curr.caseFallsThrough||warning(\"W086\",state.tokens.curr,\"case\")}advance(\"case\"),this.cases.push(expression(0)),increaseComplexityCount(),g=!0,advance(\":\"),state.funct[\"(verb)\"]=\"case\";break;case\"default\":switch(state.funct[\"(verb)\"]){case\"yield\":case\"break\":case\"continue\":case\"return\":case\"throw\":break;default:this.cases.length&&(state.tokens.curr.caseFallsThrough||warning(\"W086\",state.tokens.curr,\"default\"))}advance(\"default\"),g=!0,advance(\":\");break;case\"}\":return noindent||(indent-=state.option.indent),advance(\"}\",t),state.funct[\"(breakage)\"]-=1,state.funct[\"(verb)\"]=void 0,void 0;case\"(end)\":return error(\"E023\",state.tokens.next,\"}\"),void 0;default:if(indent+=state.option.indent,g)switch(state.tokens.curr.id){case\",\":return error(\"E040\"),void 0;case\":\":g=!1,statements();break;default:return error(\"E025\",state.tokens.curr),void 0}else{if(\":\"!==state.tokens.curr.id)return error(\"E021\",state.tokens.next,\"case\",state.tokens.next.value),void 0;advance(\":\"),error(\"E024\",state.tokens.curr,\":\"),statements()}indent-=state.option.indent}return this}).labelled=!0,stmt(\"debugger\",function(){return state.option.debug||warning(\"W087\",this),this}).exps=!0,function(){var x=stmt(\"do\",function(){state.funct[\"(breakage)\"]+=1,state.funct[\"(loopage)\"]+=1,increaseComplexityCount(),this.first=block(!0,!0),advance(\"while\");var t=state.tokens.next;return advance(\"(\"),checkCondAssignment(expression(0)),advance(\")\",t),state.funct[\"(breakage)\"]-=1,state.funct[\"(loopage)\"]-=1,this});x.labelled=!0,x.exps=!0}(),blockstmt(\"for\",function(){var s,t=state.tokens.next,letscope=!1,foreachtok=null;\"each\"===t.value&&(foreachtok=t,advance(\"each\"),state.inMoz()||warning(\"W118\",state.tokens.curr,\"for each\")),increaseComplexityCount(),advance(\"(\");var nextop,comma,initializer,i=0,inof=[\"in\",\"of\"],level=0;checkPunctuators(state.tokens.next,[\"{\",\"[\"])&&++level;do{if(nextop=peek(i),++i,checkPunctuators(nextop,[\"{\",\"[\"])?++level:checkPunctuators(nextop,[\"}\",\"]\"])&&--level,0>level)break;0===level&&(!comma&&checkPunctuator(nextop,\",\")?comma=nextop:!initializer&&checkPunctuator(nextop,\"=\")&&(initializer=nextop))}while(level>0||!_.contains(inof,nextop.value)&&\";\"!==nextop.value&&\"(end)\"!==nextop.type);if(_.contains(inof,nextop.value)){state.inES6()||\"of\"!==nextop.value||warning(\"W104\",nextop,\"for of\",\"6\");var ok=!(initializer||comma);if(initializer&&error(\"W133\",comma,nextop.value,\"initializer is forbidden\"),comma&&error(\"W133\",comma,nextop.value,\"more than one ForBinding\"),\"var\"===state.tokens.next.id?(advance(\"var\"),state.tokens.curr.fud({prefix:!0})):\"let\"===state.tokens.next.id||\"const\"===state.tokens.next.id?(advance(state.tokens.next.id),letscope=!0,state.funct[\"(scope)\"].stack(),state.tokens.curr.fud({prefix:!0})):Object.create(varstatement).fud({prefix:!0,implied:\"for\",ignore:!ok}),advance(nextop.value),expression(20),advance(\")\",t),\"in\"===nextop.value&&state.option.forin&&(state.forinifcheckneeded=!0,void 0===state.forinifchecks&&(state.forinifchecks=[]),state.forinifchecks.push({type:\"(none)\"})),state.funct[\"(breakage)\"]+=1,state.funct[\"(loopage)\"]+=1,s=block(!0,!0),\"in\"===nextop.value&&state.option.forin){if(state.forinifchecks&&state.forinifchecks.length>0){var check=state.forinifchecks.pop();(s&&s.length>0&&(\"object\"!=typeof s[0]||\"if\"!==s[0].value)||\"(positive)\"===check.type&&s.length>1||\"(negative)\"===check.type)&&warning(\"W089\",this)}state.forinifcheckneeded=!1}state.funct[\"(breakage)\"]-=1,state.funct[\"(loopage)\"]-=1}else{if(foreachtok&&error(\"E045\",foreachtok),\";\"!==state.tokens.next.id)if(\"var\"===state.tokens.next.id)advance(\"var\"),state.tokens.curr.fud();else if(\"let\"===state.tokens.next.id)advance(\"let\"),letscope=!0,state.funct[\"(scope)\"].stack(),state.tokens.curr.fud();else for(;expression(0,\"for\"),\",\"===state.tokens.next.id;)comma();if(nolinebreak(state.tokens.curr),advance(\";\"),state.funct[\"(loopage)\"]+=1,\";\"!==state.tokens.next.id&&checkCondAssignment(expression(0)),nolinebreak(state.tokens.curr),advance(\";\"),\";\"===state.tokens.next.id&&error(\"E021\",state.tokens.next,\")\",\";\"),\")\"!==state.tokens.next.id)for(;expression(0,\"for\"),\",\"===state.tokens.next.id;)comma();advance(\")\",t),state.funct[\"(breakage)\"]+=1,block(!0,!0),state.funct[\"(breakage)\"]-=1,state.funct[\"(loopage)\"]-=1}return letscope&&state.funct[\"(scope)\"].unstack(),this}).labelled=!0,stmt(\"break\",function(){var v=state.tokens.next.value;return state.option.asi||nolinebreak(this),\";\"===state.tokens.next.id||state.tokens.next.reach||state.tokens.curr.line!==startLine(state.tokens.next)?0===state.funct[\"(breakage)\"]&&warning(\"W052\",state.tokens.next,this.value):(state.funct[\"(scope)\"].funct.hasBreakLabel(v)||warning(\"W090\",state.tokens.next,v),this.first=state.tokens.next,advance()),reachable(this),this}).exps=!0,stmt(\"continue\",function(){var v=state.tokens.next.value;return 0===state.funct[\"(breakage)\"]&&warning(\"W052\",state.tokens.next,this.value),state.funct[\"(loopage)\"]||warning(\"W052\",state.tokens.next,this.value),state.option.asi||nolinebreak(this),\";\"===state.tokens.next.id||state.tokens.next.reach||state.tokens.curr.line===startLine(state.tokens.next)&&(state.funct[\"(scope)\"].funct.hasBreakLabel(v)||warning(\"W090\",state.tokens.next,v),this.first=state.tokens.next,advance()),reachable(this),this}).exps=!0,stmt(\"return\",function(){return this.line===startLine(state.tokens.next)?\";\"===state.tokens.next.id||state.tokens.next.reach||(this.first=expression(0),!this.first||\"(punctuator)\"!==this.first.type||\"=\"!==this.first.value||this.first.paren||state.option.boss||warningAt(\"W093\",this.first.line,this.first.character)):\"(punctuator)\"===state.tokens.next.type&&[\"[\",\"{\",\"+\",\"-\"].indexOf(state.tokens.next.value)>-1&&nolinebreak(this),reachable(this),this}).exps=!0,function(x){x.exps=!0,x.lbp=25}(prefix(\"yield\",function(){var prev=state.tokens.prev;state.inES6(!0)&&!state.funct[\"(generator)\"]?\"(catch)\"===state.funct[\"(name)\"]&&state.funct[\"(context)\"][\"(generator)\"]||error(\"E046\",state.tokens.curr,\"yield\"):state.inES6()||warning(\"W104\",state.tokens.curr,\"yield\",\"6\"),state.funct[\"(generator)\"]=\"yielded\";var delegatingYield=!1;return\"*\"===state.tokens.next.value&&(delegatingYield=!0,advance(\"*\")),this.line!==startLine(state.tokens.next)&&state.inMoz()?state.option.asi||nolinebreak(this):((delegatingYield||\";\"!==state.tokens.next.id&&!state.option.asi&&!state.tokens.next.reach&&state.tokens.next.nud)&&(nobreaknonadjacent(state.tokens.curr,state.tokens.next),this.first=expression(10),\"(punctuator)\"!==this.first.type||\"=\"!==this.first.value||this.first.paren||state.option.boss||warningAt(\"W093\",this.first.line,this.first.character)),state.inMoz()&&\")\"!==state.tokens.next.id&&(prev.lbp>30||!prev.assign&&!isEndOfExpr()||\"yield\"===prev.id)&&error(\"E050\",this)),this})),stmt(\"throw\",function(){return nolinebreak(this),this.first=expression(20),reachable(this),this}).exps=!0,stmt(\"import\",function(){if(state.inES6()||warning(\"W119\",state.tokens.curr,\"import\",\"6\"),\"(string)\"===state.tokens.next.type)return advance(\"(string)\"),this;if(state.tokens.next.identifier){if(this.name=identifier(),state.funct[\"(scope)\"].addlabel(this.name,{type:\"const\",token:state.tokens.curr}),\",\"!==state.tokens.next.value)return advance(\"from\"),advance(\"(string)\"),this;advance(\",\")}if(\"*\"===state.tokens.next.id)advance(\"*\"),advance(\"as\"),state.tokens.next.identifier&&(this.name=identifier(),state.funct[\"(scope)\"].addlabel(this.name,{type:\"const\",token:state.tokens.curr}));else for(advance(\"{\");;){if(\"}\"===state.tokens.next.value){advance(\"}\");break}var importName;if(\"default\"===state.tokens.next.type?(importName=\"default\",advance(\"default\")):importName=identifier(),\"as\"===state.tokens.next.value&&(advance(\"as\"),importName=identifier()),state.funct[\"(scope)\"].addlabel(importName,{type:\"const\",token:state.tokens.curr}),\",\"!==state.tokens.next.value){if(\"}\"===state.tokens.next.value){advance(\"}\");break}error(\"E024\",state.tokens.next,state.tokens.next.value);break}advance(\",\")}return advance(\"from\"),advance(\"(string)\"),this}).exps=!0,stmt(\"export\",function(){var token,identifier,ok=!0;if(state.inES6()||(warning(\"W119\",state.tokens.curr,\"export\",\"6\"),ok=!1),state.funct[\"(scope)\"].block.isGlobal()||(error(\"E053\",state.tokens.curr),ok=!1),\"*\"===state.tokens.next.value)return advance(\"*\"),advance(\"from\"),advance(\"(string)\"),this;if(\"default\"===state.tokens.next.type){state.nameStack.set(state.tokens.next),advance(\"default\");var exportType=state.tokens.next.id;return(\"function\"===exportType||\"class\"===exportType)&&(this.block=!0),token=peek(),expression(10),identifier=token.value,this.block&&(state.funct[\"(scope)\"].addlabel(identifier,{type:exportType,token:token}),state.funct[\"(scope)\"].setExported(identifier,token)),this}if(\"{\"===state.tokens.next.value){advance(\"{\");for(var exportedTokens=[];;){if(state.tokens.next.identifier||error(\"E030\",state.tokens.next,state.tokens.next.value),advance(),exportedTokens.push(state.tokens.curr),\"as\"===state.tokens.next.value&&(advance(\"as\"),state.tokens.next.identifier||error(\"E030\",state.tokens.next,state.tokens.next.value),advance()),\",\"!==state.tokens.next.value){if(\"}\"===state.tokens.next.value){advance(\"}\");break}error(\"E024\",state.tokens.next,state.tokens.next.value);break}advance(\",\")}return\"from\"===state.tokens.next.value?(advance(\"from\"),advance(\"(string)\")):ok&&exportedTokens.forEach(function(token){state.funct[\"(scope)\"].setExported(token.value,token)}),this}if(\"var\"===state.tokens.next.id)advance(\"var\"),state.tokens.curr.fud({inexport:!0});else if(\"let\"===state.tokens.next.id)advance(\"let\"),state.tokens.curr.fud({inexport:!0});else if(\"const\"===state.tokens.next.id)advance(\"const\"),state.tokens.curr.fud({inexport:!0});else if(\"function\"===state.tokens.next.id)this.block=!0,advance(\"function\"),state.syntax[\"function\"].fud({inexport:!0});else if(\"class\"===state.tokens.next.id){this.block=!0,advance(\"class\");var classNameToken=state.tokens.next;state.syntax[\"class\"].fud(),state.funct[\"(scope)\"].setExported(classNameToken.value,classNameToken)}else error(\"E024\",state.tokens.next,state.tokens.next.value);return this}).exps=!0,FutureReservedWord(\"abstract\"),FutureReservedWord(\"boolean\"),FutureReservedWord(\"byte\"),FutureReservedWord(\"char\"),FutureReservedWord(\"class\",{es5:!0,nud:classdef}),FutureReservedWord(\"double\"),FutureReservedWord(\"enum\",{es5:!0}),FutureReservedWord(\"export\",{es5:!0}),FutureReservedWord(\"extends\",{es5:!0}),FutureReservedWord(\"final\"),FutureReservedWord(\"float\"),FutureReservedWord(\"goto\"),FutureReservedWord(\"implements\",{es5:!0,strictOnly:!0}),FutureReservedWord(\"import\",{es5:!0}),FutureReservedWord(\"int\"),FutureReservedWord(\"interface\",{es5:!0,strictOnly:!0}),FutureReservedWord(\"long\"),FutureReservedWord(\"native\"),FutureReservedWord(\"package\",{es5:!0,strictOnly:!0}),FutureReservedWord(\"private\",{es5:!0,strictOnly:!0}),FutureReservedWord(\"protected\",{es5:!0,strictOnly:!0}),FutureReservedWord(\"public\",{es5:!0,strictOnly:!0}),FutureReservedWord(\"short\"),FutureReservedWord(\"static\",{es5:!0,strictOnly:!0}),FutureReservedWord(\"super\",{es5:!0}),FutureReservedWord(\"synchronized\"),FutureReservedWord(\"transient\"),FutureReservedWord(\"volatile\");var lookupBlockType=function(){var pn,pn1,prev,i=-1,bracketStack=0,ret={};checkPunctuators(state.tokens.curr,[\"[\",\"{\"])&&(bracketStack+=1);do{if(prev=-1===i?state.tokens.curr:pn,pn=-1===i?state.tokens.next:peek(i),pn1=peek(i+1),i+=1,checkPunctuators(pn,[\"[\",\"{\"])?bracketStack+=1:checkPunctuators(pn,[\"]\",\"}\"])&&(bracketStack-=1),1===bracketStack&&pn.identifier&&\"for\"===pn.value&&!checkPunctuator(prev,\".\")){ret.isCompArray=!0,ret.notJson=!0;break}if(0===bracketStack&&checkPunctuators(pn,[\"}\",\"]\"])){if(\"=\"===pn1.value){ret.isDestAssign=!0,ret.notJson=!0;break}if(\".\"===pn1.value){ret.notJson=!0;break}}checkPunctuator(pn,\";\")&&(ret.isBlock=!0,ret.notJson=!0)}while(bracketStack>0&&\"(end)\"!==pn.id);return ret},arrayComprehension=function(){function declare(v){var l=_current.variables.filter(function(elt){return elt.value===v?(elt.undef=!1,v):void 0}).length;return 0!==l}function use(v){var l=_current.variables.filter(function(elt){return elt.value!==v||elt.undef?void 0:(elt.unused===!0&&(elt.unused=!1),v)}).length;return 0===l}var _current,CompArray=function(){this.mode=\"use\",this.variables=[]},_carrays=[];return{stack:function(){_current=new CompArray,_carrays.push(_current)},unstack:function(){_current.variables.filter(function(v){v.unused&&warning(\"W098\",v.token,v.raw_text||v.value),v.undef&&state.funct[\"(scope)\"].block.use(v.value,v.token)}),_carrays.splice(-1,1),_current=_carrays[_carrays.length-1]},setState:function(s){_.contains([\"use\",\"define\",\"generate\",\"filter\"],s)&&(_current.mode=s)},check:function(v){return _current?_current&&\"use\"===_current.mode?(use(v)&&_current.variables.push({funct:state.funct,token:state.tokens.curr,value:v,undef:!0,unused:!1}),!0):_current&&\"define\"===_current.mode?(declare(v)||_current.variables.push({funct:state.funct,token:state.tokens.curr,value:v,undef:!1,unused:!0}),!0):_current&&\"generate\"===_current.mode?(state.funct[\"(scope)\"].block.use(v,state.tokens.curr),!0):_current&&\"filter\"===_current.mode?(use(v)&&state.funct[\"(scope)\"].block.use(v,state.tokens.curr),!0):!1:void 0}}},escapeRegex=function(str){return str.replace(/[-\\/\\\\^$*+?.()|[\\]{}]/g,\"\\\\$&\")},itself=function(s,o,g){function each(obj,cb){obj&&(Array.isArray(obj)||\"object\"!=typeof obj||(obj=Object.keys(obj)),obj.forEach(cb))}var i,k,x,reIgnoreStr,reIgnore,optionKeys,newOptionObj={},newIgnoredObj={};o=_.clone(o),state.reset(),o&&o.scope?JSHINT.scope=o.scope:(JSHINT.errors=[],JSHINT.undefs=[],JSHINT.internals=[],JSHINT.blacklist={},JSHINT.scope=\"(main)\"),predefined=Object.create(null),combine(predefined,vars.ecmaIdentifiers[3]),combine(predefined,vars.reservedVars),combine(predefined,g||{}),declared=Object.create(null);var exported=Object.create(null);if(o)for(each(o.predef||null,function(item){var slice,prop;\"-\"===item[0]?(slice=item.slice(1),JSHINT.blacklist[slice]=slice,delete predefined[slice]):(prop=Object.getOwnPropertyDescriptor(o.predef,item),predefined[item]=prop?prop.value:!1)}),each(o.exported||null,function(item){exported[item]=!0}),delete o.predef,delete o.exported,optionKeys=Object.keys(o),x=0;optionKeys.length>x;x++)if(/^-W\\d{3}$/g.test(optionKeys[x]))newIgnoredObj[optionKeys[x].slice(1)]=!0;else{var optionKey=optionKeys[x];newOptionObj[optionKey]=o[optionKey],(\"esversion\"===optionKey&&5===o[optionKey]||\"es5\"===optionKey&&o[optionKey])&&warning(\"I003\"),\"newcap\"===optionKeys[x]&&o[optionKey]===!1&&(newOptionObj[\"(explicitNewcap)\"]=!0)}state.option=newOptionObj,state.ignored=newIgnoredObj,state.option.indent=state.option.indent||4,state.option.maxerr=state.option.maxerr||50,indent=1;var scopeManagerInst=scopeManager(state,predefined,exported,declared);if(scopeManagerInst.on(\"warning\",function(ev){warning.apply(null,[ev.code,ev.token].concat(ev.data))}),scopeManagerInst.on(\"error\",function(ev){error.apply(null,[ev.code,ev.token].concat(ev.data))}),state.funct=functor(\"(global)\",null,{\"(global)\":!0,\"(scope)\":scopeManagerInst,\"(comparray)\":arrayComprehension(),\"(metrics)\":createMetrics(state.tokens.next)}),functions=[state.funct],urls=[],stack=null,member={},membersOnly=null,inblock=!1,lookahead=[],!isString(s)&&!Array.isArray(s))return errorAt(\"E004\",0),!1;api={get isJSON(){return state.jsonMode},getOption:function(name){return state.option[name]||null},getCache:function(name){return state.cache[name]},setCache:function(name,value){state.cache[name]=value},warn:function(code,data){warningAt.apply(null,[code,data.line,data.char].concat(data.data))},on:function(names,listener){names.split(\" \").forEach(function(name){emitter.on(name,listener)}.bind(this))}},emitter.removeAllListeners(),(extraModules||[]).forEach(function(func){func(api)}),state.tokens.prev=state.tokens.curr=state.tokens.next=state.syntax[\"(begin)\"],o&&o.ignoreDelimiters&&(Array.isArray(o.ignoreDelimiters)||(o.ignoreDelimiters=[o.ignoreDelimiters]),o.ignoreDelimiters.forEach(function(delimiterPair){delimiterPair.start&&delimiterPair.end&&(reIgnoreStr=escapeRegex(delimiterPair.start)+\"[\\\\s\\\\S]*?\"+escapeRegex(delimiterPair.end),reIgnore=RegExp(reIgnoreStr,\"ig\"),s=s.replace(reIgnore,function(match){return match.replace(/./g,\" \")}))})),lex=new Lexer(s),lex.on(\"warning\",function(ev){warningAt.apply(null,[ev.code,ev.line,ev.character].concat(ev.data))}),lex.on(\"error\",function(ev){errorAt.apply(null,[ev.code,ev.line,ev.character].concat(ev.data))}),lex.on(\"fatal\",function(ev){quit(\"E041\",ev.line,ev.from)}),lex.on(\"Identifier\",function(ev){emitter.emit(\"Identifier\",ev)}),lex.on(\"String\",function(ev){emitter.emit(\"String\",ev)}),lex.on(\"Number\",function(ev){emitter.emit(\"Number\",ev)}),lex.start();for(var name in o)_.has(o,name)&&checkOption(name,state.tokens.curr);assume(),combine(predefined,g||{}),comma.first=!0;try{switch(advance(),state.tokens.next.id){case\"{\":case\"[\":destructuringAssignOrJsonValue();break;default:directives(),state.directive[\"use strict\"]&&\"global\"!==state.option.strict&&warning(\"W097\",state.tokens.prev),statements()}\"(end)\"!==state.tokens.next.id&&quit(\"E041\",state.tokens.curr.line),state.funct[\"(scope)\"].unstack()}catch(err){if(!err||\"JSHintError\"!==err.name)throw err;var nt=state.tokens.next||{};JSHINT.errors.push({scope:\"(main)\",raw:err.raw,code:err.code,reason:err.message,line:err.line||nt.line,character:err.character||nt.from},null)}if(\"(main)\"===JSHINT.scope)for(o=o||{},i=0;JSHINT.internals.length>i;i+=1)k=JSHINT.internals[i],o.scope=k.elem,itself(k.value,o,g);return 0===JSHINT.errors.length};return itself.addModule=function(func){extraModules.push(func)},itself.addModule(style.register),itself.data=function(){var fu,f,i,j,n,globals,data={functions:[],options:state.option};itself.errors.length&&(data.errors=itself.errors),state.jsonMode&&(data.json=!0);var impliedGlobals=state.funct[\"(scope)\"].getImpliedGlobals();for(impliedGlobals.length>0&&(data.implieds=impliedGlobals),urls.length>0&&(data.urls=urls),globals=state.funct[\"(scope)\"].getUsedOrDefinedGlobals(),globals.length>0&&(data.globals=globals),i=1;functions.length>i;i+=1){for(f=functions[i],fu={},j=0;functionicity.length>j;j+=1)fu[functionicity[j]]=[];for(j=0;functionicity.length>j;j+=1)0===fu[functionicity[j]].length&&delete fu[functionicity[j]];fu.name=f[\"(name)\"],fu.param=f[\"(params)\"],fu.line=f[\"(line)\"],fu.character=f[\"(character)\"],fu.last=f[\"(last)\"],fu.lastcharacter=f[\"(lastcharacter)\"],fu.metrics={complexity:f[\"(metrics)\"].ComplexityCount,parameters:f[\"(metrics)\"].arity,statements:f[\"(metrics)\"].statementCount},data.functions.push(fu)}var unuseds=state.funct[\"(scope)\"].getUnuseds();unuseds.length>0&&(data.unused=unuseds);for(n in member)if(\"number\"==typeof member[n]){data.member=member;break}return data},itself.jshint=itself,itself}();\"object\"==typeof exports&&exports&&(exports.JSHINT=JSHINT)},{\"../lodash\":\"/node_modules/jshint/lodash.js\",\"./lex.js\":\"/node_modules/jshint/src/lex.js\",\"./messages.js\":\"/node_modules/jshint/src/messages.js\",\"./options.js\":\"/node_modules/jshint/src/options.js\",\"./reg.js\":\"/node_modules/jshint/src/reg.js\",\"./scope-manager.js\":\"/node_modules/jshint/src/scope-manager.js\",\"./state.js\":\"/node_modules/jshint/src/state.js\",\"./style.js\":\"/node_modules/jshint/src/style.js\",\"./vars.js\":\"/node_modules/jshint/src/vars.js\",events:\"/node_modules/browserify/node_modules/events/events.js\"}],\"/node_modules/jshint/src/lex.js\":[function(_dereq_,module,exports){\"use strict\";function asyncTrigger(){var _checks=[];return{push:function(fn){_checks.push(fn)},check:function(){for(var check=0;_checks.length>check;++check)_checks[check]();_checks.splice(0,_checks.length)}}}function Lexer(source){var lines=source;\"string\"==typeof lines&&(lines=lines.replace(/\\r\\n/g,\"\\n\").replace(/\\r/g,\"\\n\").split(\"\\n\")),lines[0]&&\"#!\"===lines[0].substr(0,2)&&(-1!==lines[0].indexOf(\"node\")&&(state.option.node=!0),lines[0]=\"\"),this.emitter=new events.EventEmitter,this.source=source,this.setLines(lines),this.prereg=!0,this.line=0,this.char=1,this.from=1,this.input=\"\",this.inComment=!1,this.context=[],this.templateStarts=[];for(var i=0;state.option.indent>i;i+=1)state.tab+=\" \";this.ignoreLinterErrors=!1}var _=_dereq_(\"../lodash\"),events=_dereq_(\"events\"),reg=_dereq_(\"./reg.js\"),state=_dereq_(\"./state.js\").state,unicodeData=_dereq_(\"../data/ascii-identifier-data.js\"),asciiIdentifierStartTable=unicodeData.asciiIdentifierStartTable,asciiIdentifierPartTable=unicodeData.asciiIdentifierPartTable,Token={Identifier:1,Punctuator:2,NumericLiteral:3,StringLiteral:4,Comment:5,Keyword:6,NullLiteral:7,BooleanLiteral:8,RegExp:9,TemplateHead:10,TemplateMiddle:11,TemplateTail:12,NoSubstTemplate:13},Context={Block:1,Template:2};Lexer.prototype={_lines:[],inContext:function(ctxType){return this.context.length>0&&this.context[this.context.length-1].type===ctxType},pushContext:function(ctxType){this.context.push({type:ctxType})},popContext:function(){return this.context.pop()},isContext:function(context){return this.context.length>0&&this.context[this.context.length-1]===context},currentContext:function(){return this.context.length>0&&this.context[this.context.length-1]},getLines:function(){return this._lines=state.lines,this._lines},setLines:function(val){this._lines=val,state.lines=this._lines},peek:function(i){return this.input.charAt(i||0)},skip:function(i){i=i||1,this.char+=i,this.input=this.input.slice(i)},on:function(names,listener){names.split(\" \").forEach(function(name){this.emitter.on(name,listener)}.bind(this))},trigger:function(){this.emitter.emit.apply(this.emitter,Array.prototype.slice.call(arguments))},triggerAsync:function(type,args,checks,fn){checks.push(function(){fn()&&this.trigger(type,args)}.bind(this))},scanPunctuator:function(){var ch2,ch3,ch4,ch1=this.peek();switch(ch1){case\".\":if(/^[0-9]$/.test(this.peek(1)))return null;if(\".\"===this.peek(1)&&\".\"===this.peek(2))return{type:Token.Punctuator,value:\"...\"};case\"(\":case\")\":case\";\":case\",\":case\"[\":case\"]\":case\":\":case\"~\":case\"?\":return{type:Token.Punctuator,value:ch1};case\"{\":return this.pushContext(Context.Block),{type:Token.Punctuator,value:ch1};case\"}\":return this.inContext(Context.Block)&&this.popContext(),{type:Token.Punctuator,value:ch1};case\"#\":return{type:Token.Punctuator,value:ch1};case\"\":return null}return ch2=this.peek(1),ch3=this.peek(2),ch4=this.peek(3),\">\"===ch1&&\">\"===ch2&&\">\"===ch3&&\"=\"===ch4?{type:Token.Punctuator,value:\">>>=\"}:\"=\"===ch1&&\"=\"===ch2&&\"=\"===ch3?{type:Token.Punctuator,value:\"===\"}:\"!\"===ch1&&\"=\"===ch2&&\"=\"===ch3?{type:Token.Punctuator,value:\"!==\"}:\">\"===ch1&&\">\"===ch2&&\">\"===ch3?{type:Token.Punctuator,value:\">>>\"}:\"<\"===ch1&&\"<\"===ch2&&\"=\"===ch3?{type:Token.Punctuator,value:\"<<=\"}:\">\"===ch1&&\">\"===ch2&&\"=\"===ch3?{type:Token.Punctuator,value:\">>=\"}:\"=\"===ch1&&\">\"===ch2?{type:Token.Punctuator,value:ch1+ch2}:ch1===ch2&&\"+-<>&|\".indexOf(ch1)>=0?{type:Token.Punctuator,value:ch1+ch2}:\"<>=!+-*%&|^\".indexOf(ch1)>=0?\"=\"===ch2?{type:Token.Punctuator,value:ch1+ch2}:{type:Token.Punctuator,value:ch1}:\"/\"===ch1?\"=\"===ch2?{type:Token.Punctuator,value:\"/=\"}:{type:Token.Punctuator,value:\"/\"}:null},scanComments:function(){function commentToken(label,body,opt){var special=[\"jshint\",\"jslint\",\"members\",\"member\",\"globals\",\"global\",\"exported\"],isSpecial=!1,value=label+body,commentType=\"plain\";return opt=opt||{},opt.isMultiline&&(value+=\"*/\"),body=body.replace(/\\n/g,\" \"),\"/*\"===label&&reg.fallsThrough.test(body)&&(isSpecial=!0,commentType=\"falls through\"),special.forEach(function(str){if(!isSpecial&&(\"//\"!==label||\"jshint\"===str)&&(\" \"===body.charAt(str.length)&&body.substr(0,str.length)===str&&(isSpecial=!0,label+=str,body=body.substr(str.length)),isSpecial||\" \"!==body.charAt(0)||\" \"!==body.charAt(str.length+1)||body.substr(1,str.length)!==str||(isSpecial=!0,label=label+\" \"+str,body=body.substr(str.length+1)),isSpecial))switch(str){case\"member\":commentType=\"members\";break;case\"global\":commentType=\"globals\";break;default:var options=body.split(\":\").map(function(v){return v.replace(/^\\s+/,\"\").replace(/\\s+$/,\"\")});if(2===options.length)switch(options[0]){case\"ignore\":switch(options[1]){case\"start\":self.ignoringLinterErrors=!0,isSpecial=!1;break;case\"end\":self.ignoringLinterErrors=!1,isSpecial=!1}}commentType=str}}),{type:Token.Comment,commentType:commentType,value:value,body:body,isSpecial:isSpecial,isMultiline:opt.isMultiline||!1,isMalformed:opt.isMalformed||!1}}var ch1=this.peek(),ch2=this.peek(1),rest=this.input.substr(2),startLine=this.line,startChar=this.char,self=this;if(\"*\"===ch1&&\"/\"===ch2)return this.trigger(\"error\",{code:\"E018\",line:startLine,character:startChar}),this.skip(2),null;if(\"/\"!==ch1||\"*\"!==ch2&&\"/\"!==ch2)return null;if(\"/\"===ch2)return this.skip(this.input.length),commentToken(\"//\",rest);var body=\"\";if(\"*\"===ch2){for(this.inComment=!0,this.skip(2);\"*\"!==this.peek()||\"/\"!==this.peek(1);)if(\"\"===this.peek()){if(body+=\"\\n\",!this.nextLine())return this.trigger(\"error\",{code:\"E017\",line:startLine,character:startChar}),this.inComment=!1,commentToken(\"/*\",body,{isMultiline:!0,isMalformed:!0})}else body+=this.peek(),this.skip();return this.skip(2),this.inComment=!1,commentToken(\"/*\",body,{isMultiline:!0})}},scanKeyword:function(){var result=/^[a-zA-Z_$][a-zA-Z0-9_$]*/.exec(this.input),keywords=[\"if\",\"in\",\"do\",\"var\",\"for\",\"new\",\"try\",\"let\",\"this\",\"else\",\"case\",\"void\",\"with\",\"enum\",\"while\",\"break\",\"catch\",\"throw\",\"const\",\"yield\",\"class\",\"super\",\"return\",\"typeof\",\"delete\",\"switch\",\"export\",\"import\",\"default\",\"finally\",\"extends\",\"function\",\"continue\",\"debugger\",\"instanceof\"];return result&&keywords.indexOf(result[0])>=0?{type:Token.Keyword,value:result[0]}:null},scanIdentifier:function(){function isNonAsciiIdentifierStart(code){return code>256}function isNonAsciiIdentifierPart(code){return code>256}function isHexDigit(str){return/^[0-9a-fA-F]$/.test(str)}function removeEscapeSequences(id){return id.replace(/\\\\u([0-9a-fA-F]{4})/g,function(m0,codepoint){return String.fromCharCode(parseInt(codepoint,16))})}var type,char,id=\"\",index=0,readUnicodeEscapeSequence=function(){if(index+=1,\"u\"!==this.peek(index))return null;var code,ch1=this.peek(index+1),ch2=this.peek(index+2),ch3=this.peek(index+3),ch4=this.peek(index+4);return isHexDigit(ch1)&&isHexDigit(ch2)&&isHexDigit(ch3)&&isHexDigit(ch4)?(code=parseInt(ch1+ch2+ch3+ch4,16),asciiIdentifierPartTable[code]||isNonAsciiIdentifierPart(code)?(index+=5,\"\\\\u\"+ch1+ch2+ch3+ch4):null):null}.bind(this),getIdentifierStart=function(){var chr=this.peek(index),code=chr.charCodeAt(0);return 92===code?readUnicodeEscapeSequence():128>code?asciiIdentifierStartTable[code]?(index+=1,chr):null:isNonAsciiIdentifierStart(code)?(index+=1,chr):null}.bind(this),getIdentifierPart=function(){var chr=this.peek(index),code=chr.charCodeAt(0);return 92===code?readUnicodeEscapeSequence():128>code?asciiIdentifierPartTable[code]?(index+=1,chr):null:isNonAsciiIdentifierPart(code)?(index+=1,chr):null}.bind(this);if(char=getIdentifierStart(),null===char)return null;for(id=char;char=getIdentifierPart(),null!==char;)id+=char;switch(id){case\"true\":case\"false\":type=Token.BooleanLiteral;break;case\"null\":type=Token.NullLiteral;break;default:type=Token.Identifier}return{type:type,value:removeEscapeSequences(id),text:id,tokenLength:id.length}},scanNumericLiteral:function(){function isDecimalDigit(str){return/^[0-9]$/.test(str)}function isOctalDigit(str){return/^[0-7]$/.test(str)}function isBinaryDigit(str){return/^[01]$/.test(str)}function isHexDigit(str){return/^[0-9a-fA-F]$/.test(str)}function isIdentifierStart(ch){return\"$\"===ch||\"_\"===ch||\"\\\\\"===ch||ch>=\"a\"&&\"z\">=ch||ch>=\"A\"&&\"Z\">=ch}var bad,index=0,value=\"\",length=this.input.length,char=this.peek(index),isAllowedDigit=isDecimalDigit,base=10,isLegacy=!1;if(\".\"!==char&&!isDecimalDigit(char))return null;if(\".\"!==char){for(value=this.peek(index),index+=1,char=this.peek(index),\"0\"===value&&((\"x\"===char||\"X\"===char)&&(isAllowedDigit=isHexDigit,base=16,index+=1,value+=char),(\"o\"===char||\"O\"===char)&&(isAllowedDigit=isOctalDigit,base=8,state.inES6(!0)||this.trigger(\"warning\",{code:\"W119\",line:this.line,character:this.char,data:[\"Octal integer literal\",\"6\"]}),index+=1,value+=char),(\"b\"===char||\"B\"===char)&&(isAllowedDigit=isBinaryDigit,base=2,state.inES6(!0)||this.trigger(\"warning\",{code:\"W119\",line:this.line,character:this.char,data:[\"Binary integer literal\",\"6\"]}),index+=1,value+=char),isOctalDigit(char)&&(isAllowedDigit=isOctalDigit,base=8,isLegacy=!0,bad=!1,index+=1,value+=char),!isOctalDigit(char)&&isDecimalDigit(char)&&(index+=1,value+=char));length>index;){if(char=this.peek(index),isLegacy&&isDecimalDigit(char))bad=!0;else if(!isAllowedDigit(char))break;value+=char,index+=1}if(isAllowedDigit!==isDecimalDigit)return!isLegacy&&2>=value.length?{type:Token.NumericLiteral,value:value,isMalformed:!0}:length>index&&(char=this.peek(index),isIdentifierStart(char))?null:{type:Token.NumericLiteral,value:value,base:base,isLegacy:isLegacy,isMalformed:!1}}if(\".\"===char)for(value+=char,index+=1;length>index&&(char=this.peek(index),isDecimalDigit(char));)value+=char,index+=1;if(\"e\"===char||\"E\"===char){if(value+=char,index+=1,char=this.peek(index),(\"+\"===char||\"-\"===char)&&(value+=this.peek(index),index+=1),char=this.peek(index),!isDecimalDigit(char))return null;for(value+=char,index+=1;length>index&&(char=this.peek(index),isDecimalDigit(char));)value+=char,index+=1}return length>index&&(char=this.peek(index),isIdentifierStart(char))?null:{type:Token.NumericLiteral,value:value,base:base,isMalformed:!isFinite(value)}},scanEscapeSequence:function(checks){var allowNewLine=!1,jump=1;this.skip();var char=this.peek();switch(char){case\"'\":this.triggerAsync(\"warning\",{code:\"W114\",line:this.line,character:this.char,data:[\"\\\\'\"]},checks,function(){return state.jsonMode});break;case\"b\":char=\"\\\\b\";break;case\"f\":char=\"\\\\f\";break;case\"n\":char=\"\\\\n\";break;case\"r\":char=\"\\\\r\";break;case\"t\":char=\"\\\\t\";break;case\"0\":char=\"\\\\0\";var n=parseInt(this.peek(1),10);this.triggerAsync(\"warning\",{code:\"W115\",line:this.line,character:this.char},checks,function(){return n>=0&&7>=n&&state.isStrict()});break;case\"u\":var hexCode=this.input.substr(1,4),code=parseInt(hexCode,16);isNaN(code)&&this.trigger(\"warning\",{code:\"W052\",line:this.line,character:this.char,data:[\"u\"+hexCode]}),char=String.fromCharCode(code),jump=5;break;case\"v\":this.triggerAsync(\"warning\",{code:\"W114\",line:this.line,character:this.char,data:[\"\\\\v\"]},checks,function(){return state.jsonMode}),char=\"\u000b\";break;case\"x\":var x=parseInt(this.input.substr(1,2),16);this.triggerAsync(\"warning\",{code:\"W114\",line:this.line,character:this.char,data:[\"\\\\x-\"]},checks,function(){return state.jsonMode}),char=String.fromCharCode(x),jump=3;break;case\"\\\\\":char=\"\\\\\\\\\";break;case'\"':char='\\\\\"';break;case\"/\":break;case\"\":allowNewLine=!0,char=\"\"}return{\"char\":char,jump:jump,allowNewLine:allowNewLine}},scanTemplateLiteral:function(checks){var tokenType,ch,value=\"\",startLine=this.line,startChar=this.char,depth=this.templateStarts.length;if(!state.inES6(!0))return null;if(\"`\"===this.peek())tokenType=Token.TemplateHead,this.templateStarts.push({line:this.line,\"char\":this.char}),depth=this.templateStarts.length,this.skip(1),this.pushContext(Context.Template);else{if(!this.inContext(Context.Template)||\"}\"!==this.peek())return null;tokenType=Token.TemplateMiddle}for(;\"`\"!==this.peek();){for(;\"\"===(ch=this.peek());)if(value+=\"\\n\",!this.nextLine()){var startPos=this.templateStarts.pop();return this.trigger(\"error\",{code:\"E052\",line:startPos.line,character:startPos.char}),{type:tokenType,value:value,startLine:startLine,startChar:startChar,isUnclosed:!0,depth:depth,context:this.popContext()}}if(\"$\"===ch&&\"{\"===this.peek(1))return value+=\"${\",this.skip(2),{type:tokenType,value:value,startLine:startLine,startChar:startChar,isUnclosed:!1,depth:depth,context:this.currentContext()};\nif(\"\\\\\"===ch){var escape=this.scanEscapeSequence(checks);value+=escape.char,this.skip(escape.jump)}else\"`\"!==ch&&(value+=ch,this.skip(1))}return tokenType=tokenType===Token.TemplateHead?Token.NoSubstTemplate:Token.TemplateTail,this.skip(1),this.templateStarts.pop(),{type:tokenType,value:value,startLine:startLine,startChar:startChar,isUnclosed:!1,depth:depth,context:this.popContext()}},scanStringLiteral:function(checks){var quote=this.peek();if('\"'!==quote&&\"'\"!==quote)return null;this.triggerAsync(\"warning\",{code:\"W108\",line:this.line,character:this.char},checks,function(){return state.jsonMode&&'\"'!==quote});var value=\"\",startLine=this.line,startChar=this.char,allowNewLine=!1;for(this.skip();this.peek()!==quote;)if(\"\"===this.peek()){if(allowNewLine?(allowNewLine=!1,this.triggerAsync(\"warning\",{code:\"W043\",line:this.line,character:this.char},checks,function(){return!state.option.multistr}),this.triggerAsync(\"warning\",{code:\"W042\",line:this.line,character:this.char},checks,function(){return state.jsonMode&&state.option.multistr})):this.trigger(\"warning\",{code:\"W112\",line:this.line,character:this.char}),!this.nextLine())return this.trigger(\"error\",{code:\"E029\",line:startLine,character:startChar}),{type:Token.StringLiteral,value:value,startLine:startLine,startChar:startChar,isUnclosed:!0,quote:quote}}else{allowNewLine=!1;var char=this.peek(),jump=1;if(\" \">char&&this.trigger(\"warning\",{code:\"W113\",line:this.line,character:this.char,data:[\"<non-printable>\"]}),\"\\\\\"===char){var parsed=this.scanEscapeSequence(checks);char=parsed.char,jump=parsed.jump,allowNewLine=parsed.allowNewLine}value+=char,this.skip(jump)}return this.skip(),{type:Token.StringLiteral,value:value,startLine:startLine,startChar:startChar,isUnclosed:!1,quote:quote}},scanRegExp:function(){var terminated,index=0,length=this.input.length,char=this.peek(),value=char,body=\"\",flags=[],malformed=!1,isCharSet=!1,scanUnexpectedChars=function(){\" \">char&&(malformed=!0,this.trigger(\"warning\",{code:\"W048\",line:this.line,character:this.char})),\"<\"===char&&(malformed=!0,this.trigger(\"warning\",{code:\"W049\",line:this.line,character:this.char,data:[char]}))}.bind(this);if(!this.prereg||\"/\"!==char)return null;for(index+=1,terminated=!1;length>index;)if(char=this.peek(index),value+=char,body+=char,isCharSet)\"]\"===char&&(\"\\\\\"!==this.peek(index-1)||\"\\\\\"===this.peek(index-2))&&(isCharSet=!1),\"\\\\\"===char&&(index+=1,char=this.peek(index),body+=char,value+=char,scanUnexpectedChars()),index+=1;else{if(\"\\\\\"===char){if(index+=1,char=this.peek(index),body+=char,value+=char,scanUnexpectedChars(),\"/\"===char){index+=1;continue}if(\"[\"===char){index+=1;continue}}if(\"[\"!==char){if(\"/\"===char){body=body.substr(0,body.length-1),terminated=!0,index+=1;break}index+=1}else isCharSet=!0,index+=1}if(!terminated)return this.trigger(\"error\",{code:\"E015\",line:this.line,character:this.from}),void this.trigger(\"fatal\",{line:this.line,from:this.from});for(;length>index&&(char=this.peek(index),/[gim]/.test(char));)flags.push(char),value+=char,index+=1;try{RegExp(body,flags.join(\"\"))}catch(err){malformed=!0,this.trigger(\"error\",{code:\"E016\",line:this.line,character:this.char,data:[err.message]})}return{type:Token.RegExp,value:value,flags:flags,isMalformed:malformed}},scanNonBreakingSpaces:function(){return state.option.nonbsp?this.input.search(/(\\u00A0)/):-1},scanUnsafeChars:function(){return this.input.search(reg.unsafeChars)},next:function(checks){this.from=this.char;var start;if(/\\s/.test(this.peek()))for(start=this.char;/\\s/.test(this.peek());)this.from+=1,this.skip();var match=this.scanComments()||this.scanStringLiteral(checks)||this.scanTemplateLiteral(checks);return match?match:(match=this.scanRegExp()||this.scanPunctuator()||this.scanKeyword()||this.scanIdentifier()||this.scanNumericLiteral(),match?(this.skip(match.tokenLength||match.value.length),match):null)},nextLine:function(){var char;if(this.line>=this.getLines().length)return!1;this.input=this.getLines()[this.line],this.line+=1,this.char=1,this.from=1;var inputTrimmed=this.input.trim(),startsWith=function(){return _.some(arguments,function(prefix){return 0===inputTrimmed.indexOf(prefix)})},endsWith=function(){return _.some(arguments,function(suffix){return-1!==inputTrimmed.indexOf(suffix,inputTrimmed.length-suffix.length)})};if(this.ignoringLinterErrors===!0&&(startsWith(\"/*\",\"//\")||this.inComment&&endsWith(\"*/\")||(this.input=\"\")),char=this.scanNonBreakingSpaces(),char>=0&&this.trigger(\"warning\",{code:\"W125\",line:this.line,character:char+1}),this.input=this.input.replace(/\\t/g,state.tab),char=this.scanUnsafeChars(),char>=0&&this.trigger(\"warning\",{code:\"W100\",line:this.line,character:char}),!this.ignoringLinterErrors&&state.option.maxlen&&state.option.maxlen<this.input.length){var inComment=this.inComment||startsWith.call(inputTrimmed,\"//\")||startsWith.call(inputTrimmed,\"/*\"),shouldTriggerError=!inComment||!reg.maxlenException.test(inputTrimmed);shouldTriggerError&&this.trigger(\"warning\",{code:\"W101\",line:this.line,character:this.input.length})}return!0},start:function(){this.nextLine()},token:function(){function isReserved(token,isProperty){if(!token.reserved)return!1;var meta=token.meta;if(meta&&meta.isFutureReservedWord&&state.inES5()){if(!meta.es5)return!1;if(meta.strictOnly&&!state.option.strict&&!state.isStrict())return!1;if(isProperty)return!1}return!0}for(var token,checks=asyncTrigger(),create=function(type,value,isProperty,token){var obj;if(\"(endline)\"!==type&&\"(end)\"!==type&&(this.prereg=!1),\"(punctuator)\"===type){switch(value){case\".\":case\")\":case\"~\":case\"#\":case\"]\":case\"++\":case\"--\":this.prereg=!1;break;default:this.prereg=!0}obj=Object.create(state.syntax[value]||state.syntax[\"(error)\"])}return\"(identifier)\"===type&&((\"return\"===value||\"case\"===value||\"typeof\"===value)&&(this.prereg=!0),_.has(state.syntax,value)&&(obj=Object.create(state.syntax[value]||state.syntax[\"(error)\"]),isReserved(obj,isProperty&&\"(identifier)\"===type)||(obj=null))),obj||(obj=Object.create(state.syntax[type])),obj.identifier=\"(identifier)\"===type,obj.type=obj.type||type,obj.value=value,obj.line=this.line,obj.character=this.char,obj.from=this.from,obj.identifier&&token&&(obj.raw_text=token.text||token.value),token&&token.startLine&&token.startLine!==this.line&&(obj.startLine=token.startLine),token&&token.context&&(obj.context=token.context),token&&token.depth&&(obj.depth=token.depth),token&&token.isUnclosed&&(obj.isUnclosed=token.isUnclosed),isProperty&&obj.identifier&&(obj.isProperty=isProperty),obj.check=checks.check,obj}.bind(this);;){if(!this.input.length)return this.nextLine()?create(\"(endline)\",\"\"):this.exhausted?null:(this.exhausted=!0,create(\"(end)\",\"\"));if(token=this.next(checks))switch(token.type){case Token.StringLiteral:return this.triggerAsync(\"String\",{line:this.line,\"char\":this.char,from:this.from,startLine:token.startLine,startChar:token.startChar,value:token.value,quote:token.quote},checks,function(){return!0}),create(\"(string)\",token.value,null,token);case Token.TemplateHead:return this.trigger(\"TemplateHead\",{line:this.line,\"char\":this.char,from:this.from,startLine:token.startLine,startChar:token.startChar,value:token.value}),create(\"(template)\",token.value,null,token);case Token.TemplateMiddle:return this.trigger(\"TemplateMiddle\",{line:this.line,\"char\":this.char,from:this.from,startLine:token.startLine,startChar:token.startChar,value:token.value}),create(\"(template middle)\",token.value,null,token);case Token.TemplateTail:return this.trigger(\"TemplateTail\",{line:this.line,\"char\":this.char,from:this.from,startLine:token.startLine,startChar:token.startChar,value:token.value}),create(\"(template tail)\",token.value,null,token);case Token.NoSubstTemplate:return this.trigger(\"NoSubstTemplate\",{line:this.line,\"char\":this.char,from:this.from,startLine:token.startLine,startChar:token.startChar,value:token.value}),create(\"(no subst template)\",token.value,null,token);case Token.Identifier:this.triggerAsync(\"Identifier\",{line:this.line,\"char\":this.char,from:this.form,name:token.value,raw_name:token.text,isProperty:\".\"===state.tokens.curr.id},checks,function(){return!0});case Token.Keyword:case Token.NullLiteral:case Token.BooleanLiteral:return create(\"(identifier)\",token.value,\".\"===state.tokens.curr.id,token);case Token.NumericLiteral:return token.isMalformed&&this.trigger(\"warning\",{code:\"W045\",line:this.line,character:this.char,data:[token.value]}),this.triggerAsync(\"warning\",{code:\"W114\",line:this.line,character:this.char,data:[\"0x-\"]},checks,function(){return 16===token.base&&state.jsonMode}),this.triggerAsync(\"warning\",{code:\"W115\",line:this.line,character:this.char},checks,function(){return state.isStrict()&&8===token.base&&token.isLegacy}),this.trigger(\"Number\",{line:this.line,\"char\":this.char,from:this.from,value:token.value,base:token.base,isMalformed:token.malformed}),create(\"(number)\",token.value);case Token.RegExp:return create(\"(regexp)\",token.value);case Token.Comment:if(state.tokens.curr.comment=!0,token.isSpecial)return{id:\"(comment)\",value:token.value,body:token.body,type:token.commentType,isSpecial:token.isSpecial,line:this.line,character:this.char,from:this.from};break;case\"\":break;default:return create(\"(punctuator)\",token.value)}else this.input.length&&(this.trigger(\"error\",{code:\"E024\",line:this.line,character:this.char,data:[this.peek()]}),this.input=\"\")}}},exports.Lexer=Lexer,exports.Context=Context},{\"../data/ascii-identifier-data.js\":\"/node_modules/jshint/data/ascii-identifier-data.js\",\"../lodash\":\"/node_modules/jshint/lodash.js\",\"./reg.js\":\"/node_modules/jshint/src/reg.js\",\"./state.js\":\"/node_modules/jshint/src/state.js\",events:\"/node_modules/browserify/node_modules/events/events.js\"}],\"/node_modules/jshint/src/messages.js\":[function(_dereq_,module,exports){\"use strict\";var _=_dereq_(\"../lodash\"),errors={E001:\"Bad option: '{a}'.\",E002:\"Bad option value.\",E003:\"Expected a JSON value.\",E004:\"Input is neither a string nor an array of strings.\",E005:\"Input is empty.\",E006:\"Unexpected early end of program.\",E007:'Missing \"use strict\" statement.',E008:\"Strict violation.\",E009:\"Option 'validthis' can't be used in a global scope.\",E010:\"'with' is not allowed in strict mode.\",E011:\"'{a}' has already been declared.\",E012:\"const '{a}' is initialized to 'undefined'.\",E013:\"Attempting to override '{a}' which is a constant.\",E014:\"A regular expression literal can be confused with '/='.\",E015:\"Unclosed regular expression.\",E016:\"Invalid regular expression.\",E017:\"Unclosed comment.\",E018:\"Unbegun comment.\",E019:\"Unmatched '{a}'.\",E020:\"Expected '{a}' to match '{b}' from line {c} and instead saw '{d}'.\",E021:\"Expected '{a}' and instead saw '{b}'.\",E022:\"Line breaking error '{a}'.\",E023:\"Missing '{a}'.\",E024:\"Unexpected '{a}'.\",E025:\"Missing ':' on a case clause.\",E026:\"Missing '}' to match '{' from line {a}.\",E027:\"Missing ']' to match '[' from line {a}.\",E028:\"Illegal comma.\",E029:\"Unclosed string.\",E030:\"Expected an identifier and instead saw '{a}'.\",E031:\"Bad assignment.\",E032:\"Expected a small integer or 'false' and instead saw '{a}'.\",E033:\"Expected an operator and instead saw '{a}'.\",E034:\"get/set are ES5 features.\",E035:\"Missing property name.\",E036:\"Expected to see a statement and instead saw a block.\",E037:null,E038:null,E039:\"Function declarations are not invocable. Wrap the whole function invocation in parens.\",E040:\"Each value should have its own case label.\",E041:\"Unrecoverable syntax error.\",E042:\"Stopping.\",E043:\"Too many errors.\",E044:null,E045:\"Invalid for each loop.\",E046:\"A yield statement shall be within a generator function (with syntax: `function*`)\",E047:null,E048:\"{a} declaration not directly within block.\",E049:\"A {a} cannot be named '{b}'.\",E050:\"Mozilla acequires the yield expression to be parenthesized here.\",E051:null,E052:\"Unclosed template literal.\",E053:\"Export declaration must be in global scope.\",E054:\"Class properties must be methods. Expected '(' but instead saw '{a}'.\",E055:\"The '{a}' option cannot be set after any executable code.\",E056:\"'{a}' was used before it was declared, which is illegal for '{b}' variables.\",E057:\"Invalid meta property: '{a}.{b}'.\",E058:\"Missing semicolon.\"},warnings={W001:\"'hasOwnProperty' is a really bad name.\",W002:\"Value of '{a}' may be overwritten in IE 8 and earlier.\",W003:\"'{a}' was used before it was defined.\",W004:\"'{a}' is already defined.\",W005:\"A dot following a number can be confused with a decimal point.\",W006:\"Confusing minuses.\",W007:\"Confusing plusses.\",W008:\"A leading decimal point can be confused with a dot: '{a}'.\",W009:\"The array literal notation [] is preferable.\",W010:\"The object literal notation {} is preferable.\",W011:null,W012:null,W013:null,W014:\"Bad line breaking before '{a}'.\",W015:null,W016:\"Unexpected use of '{a}'.\",W017:\"Bad operand.\",W018:\"Confusing use of '{a}'.\",W019:\"Use the isNaN function to compare with NaN.\",W020:\"Read only.\",W021:\"Reassignment of '{a}', which is is a {b}. Use 'var' or 'let' to declare bindings that may change.\",W022:\"Do not assign to the exception parameter.\",W023:\"Expected an identifier in an assignment and instead saw a function invocation.\",W024:\"Expected an identifier and instead saw '{a}' (a reserved word).\",W025:\"Missing name in function declaration.\",W026:\"Inner functions should be listed at the top of the outer function.\",W027:\"Unreachable '{a}' after '{b}'.\",W028:\"Label '{a}' on {b} statement.\",W030:\"Expected an assignment or function call and instead saw an expression.\",W031:\"Do not use 'new' for side effects.\",W032:\"Unnecessary semicolon.\",W033:\"Missing semicolon.\",W034:'Unnecessary directive \"{a}\".',W035:\"Empty block.\",W036:\"Unexpected /*member '{a}'.\",W037:\"'{a}' is a statement label.\",W038:\"'{a}' used out of scope.\",W039:\"'{a}' is not allowed.\",W040:\"Possible strict violation.\",W041:\"Use '{a}' to compare with '{b}'.\",W042:\"Avoid EOL escaping.\",W043:\"Bad escaping of EOL. Use option multistr if needed.\",W044:\"Bad or unnecessary escaping.\",W045:\"Bad number '{a}'.\",W046:\"Don't use extra leading zeros '{a}'.\",W047:\"A trailing decimal point can be confused with a dot: '{a}'.\",W048:\"Unexpected control character in regular expression.\",W049:\"Unexpected escaped character '{a}' in regular expression.\",W050:\"JavaScript URL.\",W051:\"Variables should not be deleted.\",W052:\"Unexpected '{a}'.\",W053:\"Do not use {a} as a constructor.\",W054:\"The Function constructor is a form of eval.\",W055:\"A constructor name should start with an uppercase letter.\",W056:\"Bad constructor.\",W057:\"Weird construction. Is 'new' necessary?\",W058:\"Missing '()' invoking a constructor.\",W059:\"Avoid arguments.{a}.\",W060:\"document.write can be a form of eval.\",W061:\"eval can be harmful.\",W062:\"Wrap an immediate function invocation in parens to assist the reader in understanding that the expression is the result of a function, and not the function itself.\",W063:\"Math is not a function.\",W064:\"Missing 'new' prefix when invoking a constructor.\",W065:\"Missing radix parameter.\",W066:\"Implied eval. Consider passing a function instead of a string.\",W067:\"Bad invocation.\",W068:\"Wrapping non-IIFE function literals in parens is unnecessary.\",W069:\"['{a}'] is better written in dot notation.\",W070:\"Extra comma. (it breaks older versions of IE)\",W071:\"This function has too many statements. ({a})\",W072:\"This function has too many parameters. ({a})\",W073:\"Blocks are nested too deeply. ({a})\",W074:\"This function's cyclomatic complexity is too high. ({a})\",W075:\"Duplicate {a} '{b}'.\",W076:\"Unexpected parameter '{a}' in get {b} function.\",W077:\"Expected a single parameter in set {a} function.\",W078:\"Setter is defined without getter.\",W079:\"Redefinition of '{a}'.\",W080:\"It's not necessary to initialize '{a}' to 'undefined'.\",W081:null,W082:\"Function declarations should not be placed in blocks. Use a function expression or move the statement to the top of the outer function.\",W083:\"Don't make functions within a loop.\",W084:\"Assignment in conditional expression\",W085:\"Don't use 'with'.\",W086:\"Expected a 'break' statement before '{a}'.\",W087:\"Forgotten 'debugger' statement?\",W088:\"Creating global 'for' variable. Should be 'for (var {a} ...'.\",W089:\"The body of a for in should be wrapped in an if statement to filter unwanted properties from the prototype.\",W090:\"'{a}' is not a statement label.\",W091:null,W093:\"Did you mean to return a conditional instead of an assignment?\",W094:\"Unexpected comma.\",W095:\"Expected a string and instead saw {a}.\",W096:\"The '{a}' key may produce unexpected results.\",W097:'Use the function form of \"use strict\".',W098:\"'{a}' is defined but never used.\",W099:null,W100:\"This character may get silently deleted by one or more browsers.\",W101:\"Line is too long.\",W102:null,W103:\"The '{a}' property is deprecated.\",W104:\"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz).\",W105:\"Unexpected {a} in '{b}'.\",W106:\"Identifier '{a}' is not in camel case.\",W107:\"Script URL.\",W108:\"Strings must use doublequote.\",W109:\"Strings must use singlequote.\",W110:\"Mixed double and single quotes.\",W112:\"Unclosed string.\",W113:\"Control character in string: {a}.\",W114:\"Avoid {a}.\",W115:\"Octal literals are not allowed in strict mode.\",W116:\"Expected '{a}' and instead saw '{b}'.\",W117:\"'{a}' is not defined.\",W118:\"'{a}' is only available in Mozilla JavaScript extensions (use moz option).\",W119:\"'{a}' is only available in ES{b} (use 'esversion: {b}').\",W120:\"You might be leaking a variable ({a}) here.\",W121:\"Extending prototype of native object: '{a}'.\",W122:\"Invalid typeof value '{a}'\",W123:\"'{a}' is already defined in outer scope.\",W124:\"A generator function shall contain a yield statement.\",W125:\"This line contains non-breaking spaces: http://jshint.com/doc/options/#nonbsp\",W126:\"Unnecessary grouping operator.\",W127:\"Unexpected use of a comma operator.\",W128:\"Empty array elements acequire elision=true.\",W129:\"'{a}' is defined in a future version of JavaScript. Use a different variable name to avoid migration issues.\",W130:\"Invalid element after rest element.\",W131:\"Invalid parameter after rest parameter.\",W132:\"`var` declarations are forbidden. Use `let` or `const` instead.\",W133:\"Invalid for-{a} loop left-hand-side: {b}.\",W134:\"The '{a}' option is only available when linting ECMAScript {b} code.\",W135:\"{a} may not be supported by non-browser environments.\",W136:\"'{a}' must be in function scope.\",W137:\"Empty destructuring.\",W138:\"Regular parameters should not come after default parameters.\"},info={I001:\"Comma warnings can be turned off with 'laxcomma'.\",I002:null,I003:\"ES5 option is now set per default\"};exports.errors={},exports.warnings={},exports.info={},_.each(errors,function(desc,code){exports.errors[code]={code:code,desc:desc}}),_.each(warnings,function(desc,code){exports.warnings[code]={code:code,desc:desc}}),_.each(info,function(desc,code){exports.info[code]={code:code,desc:desc}})},{\"../lodash\":\"/node_modules/jshint/lodash.js\"}],\"/node_modules/jshint/src/name-stack.js\":[function(_dereq_,module){\"use strict\";function NameStack(){this._stack=[]}Object.defineProperty(NameStack.prototype,\"length\",{get:function(){return this._stack.length}}),NameStack.prototype.push=function(){this._stack.push(null)},NameStack.prototype.pop=function(){this._stack.pop()},NameStack.prototype.set=function(token){this._stack[this.length-1]=token},NameStack.prototype.infer=function(){var type,nameToken=this._stack[this.length-1],prefix=\"\";return nameToken&&\"class\"!==nameToken.type||(nameToken=this._stack[this.length-2]),nameToken?(type=nameToken.type,\"(string)\"!==type&&\"(number)\"!==type&&\"(identifier)\"!==type&&\"default\"!==type?\"(expression)\":(nameToken.accessorType&&(prefix=nameToken.accessorType+\" \"),prefix+nameToken.value)):\"(empty)\"},module.exports=NameStack},{}],\"/node_modules/jshint/src/options.js\":[function(_dereq_,module,exports){\"use strict\";exports.bool={enforcing:{bitwise:!0,freeze:!0,camelcase:!0,curly:!0,eqeqeq:!0,futurehostile:!0,notypeof:!0,es3:!0,es5:!0,forin:!0,funcscope:!0,immed:!0,iterator:!0,newcap:!0,noarg:!0,nocomma:!0,noempty:!0,nonbsp:!0,nonew:!0,undef:!0,singleGroups:!1,varstmt:!1,enforceall:!1},relaxing:{asi:!0,multistr:!0,debug:!0,boss:!0,evil:!0,globalstrict:!0,plusplus:!0,proto:!0,scripturl:!0,sub:!0,supernew:!0,laxbreak:!0,laxcomma:!0,validthis:!0,withstmt:!0,moz:!0,noyield:!0,eqnull:!0,lastsemic:!0,loopfunc:!0,expr:!0,esnext:!0,elision:!0},environments:{mootools:!0,couch:!0,jasmine:!0,jquery:!0,node:!0,qunit:!0,rhino:!0,shelljs:!0,prototypejs:!0,yui:!0,mocha:!0,module:!0,wsh:!0,worker:!0,nonstandard:!0,browser:!0,browserify:!0,devel:!0,dojo:!0,typed:!0,phantom:!0},obsolete:{onecase:!0,regexp:!0,regexdash:!0}},exports.val={maxlen:!1,indent:!1,maxerr:!1,predef:!1,globals:!1,quotmark:!1,scope:!1,maxstatements:!1,maxdepth:!1,maxparams:!1,maxcomplexity:!1,shadow:!1,strict:!0,unused:!0,latedef:!1,ignore:!1,ignoreDelimiters:!1,esversion:5},exports.inverted={bitwise:!0,forin:!0,newcap:!0,plusplus:!0,regexp:!0,undef:!0,eqeqeq:!0,strict:!0},exports.validNames=Object.keys(exports.val).concat(Object.keys(exports.bool.relaxing)).concat(Object.keys(exports.bool.enforcing)).concat(Object.keys(exports.bool.obsolete)).concat(Object.keys(exports.bool.environments)),exports.renamed={eqeq:\"eqeqeq\",windows:\"wsh\",sloppy:\"strict\"},exports.removed={nomen:!0,onevar:!0,passfail:!0,white:!0,gcl:!0,smarttabs:!0,trailing:!0},exports.noenforceall={varstmt:!0,strict:!0}},{}],\"/node_modules/jshint/src/reg.js\":[function(_dereq_,module,exports){\"use strict\";exports.unsafeString=/@cc|<\\/?|script|\\]\\s*\\]|<\\s*!|&lt/i,exports.unsafeChars=/[\\u0000-\\u001f\\u007f-\\u009f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]/,exports.needEsc=/[\\u0000-\\u001f&<\"\\/\\\\\\u007f-\\u009f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]/,exports.needEscGlobal=/[\\u0000-\\u001f&<\"\\/\\\\\\u007f-\\u009f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]/g,exports.starSlash=/\\*\\//,exports.identifier=/^([a-zA-Z_$][a-zA-Z0-9_$]*)$/,exports.javascriptURL=/^(?:javascript|jscript|ecmascript|vbscript|livescript)\\s*:/i,exports.fallsThrough=/^\\s*falls?\\sthrough\\s*$/,exports.maxlenException=/^(?:(?:\\/\\/|\\/\\*|\\*) ?)?[^ ]+$/},{}],\"/node_modules/jshint/src/scope-manager.js\":[function(_dereq_,module){\"use strict\";var _=_dereq_(\"../lodash\"),events=_dereq_(\"events\"),marker={},scopeManager=function(state,predefined,exported,declared){function _newScope(type){_current={\"(labels)\":Object.create(null),\"(usages)\":Object.create(null),\"(breakLabels)\":Object.create(null),\"(parent)\":_current,\"(type)\":type,\"(params)\":\"functionparams\"===type||\"catchparams\"===type?[]:null},_scopeStack.push(_current)}function warning(code,token){emitter.emit(\"warning\",{code:code,token:token,data:_.slice(arguments,2)})}function error(code,token){emitter.emit(\"warning\",{code:code,token:token,data:_.slice(arguments,2)})}function _setupUsages(labelName){_current[\"(usages)\"][labelName]||(_current[\"(usages)\"][labelName]={\"(modified)\":[],\"(reassigned)\":[],\"(tokens)\":[]})}function _checkForUnused(){if(\"functionparams\"===_current[\"(type)\"])return _checkParams(),void 0;var curentLabels=_current[\"(labels)\"];for(var labelName in curentLabels)curentLabels[labelName]&&\"exception\"!==curentLabels[labelName][\"(type)\"]&&curentLabels[labelName][\"(unused)\"]&&_warnUnused(labelName,curentLabels[labelName][\"(token)\"],\"var\")}function _checkParams(){var params=_current[\"(params)\"];if(params)for(var unused_opt,param=params.pop();param;){var label=_current[\"(labels)\"][param];if(unused_opt=_getUnusedOption(state.funct[\"(unusedOption)\"]),\"undefined\"===param)return;if(label[\"(unused)\"])_warnUnused(param,label[\"(token)\"],\"param\",state.funct[\"(unusedOption)\"]);else if(\"last-param\"===unused_opt)return;param=params.pop()}}function _getLabel(labelName){for(var i=_scopeStack.length-1;i>=0;--i){var scopeLabels=_scopeStack[i][\"(labels)\"];if(scopeLabels[labelName])return scopeLabels}}function usedSoFarInCurrentFunction(labelName){for(var i=_scopeStack.length-1;i>=0;i--){var current=_scopeStack[i];if(current[\"(usages)\"][labelName])return current[\"(usages)\"][labelName];if(current===_currentFunctBody)break}return!1}function _checkOuterShadow(labelName,token){if(\"outer\"===state.option.shadow)for(var isGlobal=\"global\"===_currentFunctBody[\"(type)\"],isNewFunction=\"functionparams\"===_current[\"(type)\"],outsideCurrentFunction=!isGlobal,i=0;_scopeStack.length>i;i++){var stackItem=_scopeStack[i];isNewFunction||_scopeStack[i+1]!==_currentFunctBody||(outsideCurrentFunction=!1),outsideCurrentFunction&&stackItem[\"(labels)\"][labelName]&&warning(\"W123\",token,labelName),stackItem[\"(breakLabels)\"][labelName]&&warning(\"W123\",token,labelName)}}function _latedefWarning(type,labelName,token){state.option.latedef&&(state.option.latedef===!0&&\"function\"===type||\"function\"!==type)&&warning(\"W003\",token,labelName)}var _current,_scopeStack=[];_newScope(\"global\"),_current[\"(predefined)\"]=predefined;var _currentFunctBody=_current,usedPredefinedAndGlobals=Object.create(null),impliedGlobals=Object.create(null),unuseds=[],emitter=new events.EventEmitter,_getUnusedOption=function(unused_opt){return void 0===unused_opt&&(unused_opt=state.option.unused),unused_opt===!0&&(unused_opt=\"last-param\"),unused_opt},_warnUnused=function(name,tkn,type,unused_opt){var line=tkn.line,chr=tkn.from,raw_name=tkn.raw_text||name;unused_opt=_getUnusedOption(unused_opt);var warnable_types={vars:[\"var\"],\"last-param\":[\"var\",\"param\"],strict:[\"var\",\"param\",\"last-param\"]};unused_opt&&warnable_types[unused_opt]&&-1!==warnable_types[unused_opt].indexOf(type)&&warning(\"W098\",{line:line,from:chr},raw_name),(unused_opt||\"var\"===type)&&unuseds.push({name:name,line:line,character:chr})},scopeManagerInst={on:function(names,listener){names.split(\" \").forEach(function(name){emitter.on(name,listener)})},isPredefined:function(labelName){return!this.has(labelName)&&_.has(_scopeStack[0][\"(predefined)\"],labelName)},stack:function(type){var previousScope=_current;_newScope(type),type||\"functionparams\"!==previousScope[\"(type)\"]||(_current[\"(isFuncBody)\"]=!0,_current[\"(context)\"]=_currentFunctBody,_currentFunctBody=_current)},unstack:function(){var i,j,subScope=_scopeStack.length>1?_scopeStack[_scopeStack.length-2]:null,isUnstackingFunctionBody=_current===_currentFunctBody,isUnstackingFunctionParams=\"functionparams\"===_current[\"(type)\"],isUnstackingFunctionOuter=\"functionouter\"===_current[\"(type)\"],currentUsages=_current[\"(usages)\"],currentLabels=_current[\"(labels)\"],usedLabelNameList=Object.keys(currentUsages);for(currentUsages.__proto__&&-1===usedLabelNameList.indexOf(\"__proto__\")&&usedLabelNameList.push(\"__proto__\"),i=0;usedLabelNameList.length>i;i++){var usedLabelName=usedLabelNameList[i],usage=currentUsages[usedLabelName],usedLabel=currentLabels[usedLabelName];if(usedLabel){var usedLabelType=usedLabel[\"(type)\"];if(usedLabel[\"(useOutsideOfScope)\"]&&!state.option.funcscope){var usedTokens=usage[\"(tokens)\"];if(usedTokens)for(j=0;usedTokens.length>j;j++)usedLabel[\"(function)\"]===usedTokens[j][\"(function)\"]&&error(\"W038\",usedTokens[j],usedLabelName)}if(_current[\"(labels)\"][usedLabelName][\"(unused)\"]=!1,\"const\"===usedLabelType&&usage[\"(modified)\"])for(j=0;usage[\"(modified)\"].length>j;j++)error(\"E013\",usage[\"(modified)\"][j],usedLabelName);if((\"function\"===usedLabelType||\"class\"===usedLabelType)&&usage[\"(reassigned)\"])for(j=0;usage[\"(reassigned)\"].length>j;j++)error(\"W021\",usage[\"(reassigned)\"][j],usedLabelName,usedLabelType)}else if(isUnstackingFunctionOuter&&(state.funct[\"(isCapturing)\"]=!0),subScope)if(subScope[\"(usages)\"][usedLabelName]){var subScopeUsage=subScope[\"(usages)\"][usedLabelName];subScopeUsage[\"(modified)\"]=subScopeUsage[\"(modified)\"].concat(usage[\"(modified)\"]),subScopeUsage[\"(tokens)\"]=subScopeUsage[\"(tokens)\"].concat(usage[\"(tokens)\"]),subScopeUsage[\"(reassigned)\"]=subScopeUsage[\"(reassigned)\"].concat(usage[\"(reassigned)\"]),subScopeUsage[\"(onlyUsedSubFunction)\"]=!1}else subScope[\"(usages)\"][usedLabelName]=usage,isUnstackingFunctionBody&&(subScope[\"(usages)\"][usedLabelName][\"(onlyUsedSubFunction)\"]=!0);else if(\"boolean\"==typeof _current[\"(predefined)\"][usedLabelName]){if(delete declared[usedLabelName],usedPredefinedAndGlobals[usedLabelName]=marker,_current[\"(predefined)\"][usedLabelName]===!1&&usage[\"(reassigned)\"])for(j=0;usage[\"(reassigned)\"].length>j;j++)warning(\"W020\",usage[\"(reassigned)\"][j])}else if(usage[\"(tokens)\"])for(j=0;usage[\"(tokens)\"].length>j;j++){var undefinedToken=usage[\"(tokens)\"][j];undefinedToken.forgiveUndef||(state.option.undef&&!undefinedToken.ignoreUndef&&warning(\"W117\",undefinedToken,usedLabelName),impliedGlobals[usedLabelName]?impliedGlobals[usedLabelName].line.push(undefinedToken.line):impliedGlobals[usedLabelName]={name:usedLabelName,line:[undefinedToken.line]})}}if(subScope||Object.keys(declared).forEach(function(labelNotUsed){_warnUnused(labelNotUsed,declared[labelNotUsed],\"var\")}),subScope&&!isUnstackingFunctionBody&&!isUnstackingFunctionParams&&!isUnstackingFunctionOuter){var labelNames=Object.keys(currentLabels);for(i=0;labelNames.length>i;i++){var defLabelName=labelNames[i];currentLabels[defLabelName][\"(blockscoped)\"]||\"exception\"===currentLabels[defLabelName][\"(type)\"]||this.funct.has(defLabelName,{excludeCurrent:!0})||(subScope[\"(labels)\"][defLabelName]=currentLabels[defLabelName],\"global\"!==_currentFunctBody[\"(type)\"]&&(subScope[\"(labels)\"][defLabelName][\"(useOutsideOfScope)\"]=!0),delete currentLabels[defLabelName])}}_checkForUnused(),_scopeStack.pop(),isUnstackingFunctionBody&&(_currentFunctBody=_scopeStack[_.findLastIndex(_scopeStack,function(scope){return scope[\"(isFuncBody)\"]||\"global\"===scope[\"(type)\"]})]),_current=subScope},addParam:function(labelName,token,type){if(type=type||\"param\",\"exception\"===type){var previouslyDefinedLabelType=this.funct.labeltype(labelName);previouslyDefinedLabelType&&\"exception\"!==previouslyDefinedLabelType&&(state.option.node||warning(\"W002\",state.tokens.next,labelName))}if(_.has(_current[\"(labels)\"],labelName)?_current[\"(labels)\"][labelName].duplicated=!0:(_checkOuterShadow(labelName,token,type),_current[\"(labels)\"][labelName]={\"(type)\":type,\"(token)\":token,\"(unused)\":!0},_current[\"(params)\"].push(labelName)),_.has(_current[\"(usages)\"],labelName)){var usage=_current[\"(usages)\"][labelName];usage[\"(onlyUsedSubFunction)\"]?_latedefWarning(type,labelName,token):warning(\"E056\",token,labelName,type)}},validateParams:function(){if(\"global\"!==_currentFunctBody[\"(type)\"]){var isStrict=state.isStrict(),currentFunctParamScope=_currentFunctBody[\"(parent)\"];currentFunctParamScope[\"(params)\"]&&currentFunctParamScope[\"(params)\"].forEach(function(labelName){var label=currentFunctParamScope[\"(labels)\"][labelName];label&&label.duplicated&&(isStrict?warning(\"E011\",label[\"(token)\"],labelName):state.option.shadow!==!0&&warning(\"W004\",label[\"(token)\"],labelName))})}},getUsedOrDefinedGlobals:function(){var list=Object.keys(usedPredefinedAndGlobals);return usedPredefinedAndGlobals.__proto__===marker&&-1===list.indexOf(\"__proto__\")&&list.push(\"__proto__\"),list},getImpliedGlobals:function(){var values=_.values(impliedGlobals),hasProto=!1;return impliedGlobals.__proto__&&(hasProto=values.some(function(value){return\"__proto__\"===value.name}),hasProto||values.push(impliedGlobals.__proto__)),values},getUnuseds:function(){return unuseds},has:function(labelName){return Boolean(_getLabel(labelName))},labeltype:function(labelName){var scopeLabels=_getLabel(labelName);return scopeLabels?scopeLabels[labelName][\"(type)\"]:null},addExported:function(labelName){var globalLabels=_scopeStack[0][\"(labels)\"];if(_.has(declared,labelName))delete declared[labelName];else if(_.has(globalLabels,labelName))globalLabels[labelName][\"(unused)\"]=!1;else{for(var i=1;_scopeStack.length>i;i++){var scope=_scopeStack[i];if(scope[\"(type)\"])break;if(_.has(scope[\"(labels)\"],labelName)&&!scope[\"(labels)\"][labelName][\"(blockscoped)\"])return scope[\"(labels)\"][labelName][\"(unused)\"]=!1,void 0}exported[labelName]=!0}},setExported:function(labelName,token){this.block.use(labelName,token)\n},addlabel:function(labelName,opts){var type=opts.type,token=opts.token,isblockscoped=\"let\"===type||\"const\"===type||\"class\"===type,isexported=\"global\"===(isblockscoped?_current:_currentFunctBody)[\"(type)\"]&&_.has(exported,labelName);if(_checkOuterShadow(labelName,token,type),isblockscoped){var declaredInCurrentScope=_current[\"(labels)\"][labelName];if(declaredInCurrentScope||_current!==_currentFunctBody||\"global\"===_current[\"(type)\"]||(declaredInCurrentScope=!!_currentFunctBody[\"(parent)\"][\"(labels)\"][labelName]),!declaredInCurrentScope&&_current[\"(usages)\"][labelName]){var usage=_current[\"(usages)\"][labelName];usage[\"(onlyUsedSubFunction)\"]?_latedefWarning(type,labelName,token):warning(\"E056\",token,labelName,type)}declaredInCurrentScope?warning(\"E011\",token,labelName):\"outer\"===state.option.shadow&&scopeManagerInst.funct.has(labelName)&&warning(\"W004\",token,labelName),scopeManagerInst.block.add(labelName,type,token,!isexported)}else{var declaredInCurrentFunctionScope=scopeManagerInst.funct.has(labelName);!declaredInCurrentFunctionScope&&usedSoFarInCurrentFunction(labelName)&&_latedefWarning(type,labelName,token),scopeManagerInst.funct.has(labelName,{onlyBlockscoped:!0})?warning(\"E011\",token,labelName):state.option.shadow!==!0&&declaredInCurrentFunctionScope&&\"__proto__\"!==labelName&&\"global\"!==_currentFunctBody[\"(type)\"]&&warning(\"W004\",token,labelName),scopeManagerInst.funct.add(labelName,type,token,!isexported),\"global\"===_currentFunctBody[\"(type)\"]&&(usedPredefinedAndGlobals[labelName]=marker)}},funct:{labeltype:function(labelName,options){for(var onlyBlockscoped=options&&options.onlyBlockscoped,excludeParams=options&&options.excludeParams,currentScopeIndex=_scopeStack.length-(options&&options.excludeCurrent?2:1),i=currentScopeIndex;i>=0;i--){var current=_scopeStack[i];if(current[\"(labels)\"][labelName]&&(!onlyBlockscoped||current[\"(labels)\"][labelName][\"(blockscoped)\"]))return current[\"(labels)\"][labelName][\"(type)\"];var scopeCheck=excludeParams?_scopeStack[i-1]:current;if(scopeCheck&&\"functionparams\"===scopeCheck[\"(type)\"])return null}return null},hasBreakLabel:function(labelName){for(var i=_scopeStack.length-1;i>=0;i--){var current=_scopeStack[i];if(current[\"(breakLabels)\"][labelName])return!0;if(\"functionparams\"===current[\"(type)\"])return!1}return!1},has:function(labelName,options){return Boolean(this.labeltype(labelName,options))},add:function(labelName,type,tok,unused){_current[\"(labels)\"][labelName]={\"(type)\":type,\"(token)\":tok,\"(blockscoped)\":!1,\"(function)\":_currentFunctBody,\"(unused)\":unused}}},block:{isGlobal:function(){return\"global\"===_current[\"(type)\"]},use:function(labelName,token){var paramScope=_currentFunctBody[\"(parent)\"];paramScope&&paramScope[\"(labels)\"][labelName]&&\"param\"===paramScope[\"(labels)\"][labelName][\"(type)\"]&&(scopeManagerInst.funct.has(labelName,{excludeParams:!0,onlyBlockscoped:!0})||(paramScope[\"(labels)\"][labelName][\"(unused)\"]=!1)),token&&(state.ignored.W117||state.option.undef===!1)&&(token.ignoreUndef=!0),_setupUsages(labelName),token&&(token[\"(function)\"]=_currentFunctBody,_current[\"(usages)\"][labelName][\"(tokens)\"].push(token))},reassign:function(labelName,token){this.modify(labelName,token),_current[\"(usages)\"][labelName][\"(reassigned)\"].push(token)},modify:function(labelName,token){_setupUsages(labelName),_current[\"(usages)\"][labelName][\"(modified)\"].push(token)},add:function(labelName,type,tok,unused){_current[\"(labels)\"][labelName]={\"(type)\":type,\"(token)\":tok,\"(blockscoped)\":!0,\"(unused)\":unused}},addBreakLabel:function(labelName,opts){var token=opts.token;scopeManagerInst.funct.hasBreakLabel(labelName)?warning(\"E011\",token,labelName):\"outer\"===state.option.shadow&&(scopeManagerInst.funct.has(labelName)?warning(\"W004\",token,labelName):_checkOuterShadow(labelName,token)),_current[\"(breakLabels)\"][labelName]=token}}};return scopeManagerInst};module.exports=scopeManager},{\"../lodash\":\"/node_modules/jshint/lodash.js\",events:\"/node_modules/browserify/node_modules/events/events.js\"}],\"/node_modules/jshint/src/state.js\":[function(_dereq_,module,exports){\"use strict\";var NameStack=_dereq_(\"./name-stack.js\"),state={syntax:{},isStrict:function(){return this.directive[\"use strict\"]||this.inClassBody||this.option.module||\"implied\"===this.option.strict},inMoz:function(){return this.option.moz},inES6:function(){return this.option.moz||this.option.esversion>=6},inES5:function(strict){return strict?!(this.option.esversion&&5!==this.option.esversion||this.option.moz):!this.option.esversion||this.option.esversion>=5||this.option.moz},reset:function(){this.tokens={prev:null,next:null,curr:null},this.option={},this.funct=null,this.ignored={},this.directive={},this.jsonMode=!1,this.jsonWarnings=[],this.lines=[],this.tab=\"\",this.cache={},this.ignoredLines={},this.forinifcheckneeded=!1,this.nameStack=new NameStack,this.inClassBody=!1}};exports.state=state},{\"./name-stack.js\":\"/node_modules/jshint/src/name-stack.js\"}],\"/node_modules/jshint/src/style.js\":[function(_dereq_,module,exports){\"use strict\";exports.register=function(linter){linter.on(\"Identifier\",function(data){linter.getOption(\"proto\")||\"__proto__\"===data.name&&linter.warn(\"W103\",{line:data.line,\"char\":data.char,data:[data.name,\"6\"]})}),linter.on(\"Identifier\",function(data){linter.getOption(\"iterator\")||\"__iterator__\"===data.name&&linter.warn(\"W103\",{line:data.line,\"char\":data.char,data:[data.name]})}),linter.on(\"Identifier\",function(data){linter.getOption(\"camelcase\")&&data.name.replace(/^_+|_+$/g,\"\").indexOf(\"_\")>-1&&!data.name.match(/^[A-Z0-9_]*$/)&&linter.warn(\"W106\",{line:data.line,\"char\":data.from,data:[data.name]})}),linter.on(\"String\",function(data){var code,quotmark=linter.getOption(\"quotmark\");quotmark&&(\"single\"===quotmark&&\"'\"!==data.quote&&(code=\"W109\"),\"double\"===quotmark&&'\"'!==data.quote&&(code=\"W108\"),quotmark===!0&&(linter.getCache(\"quotmark\")||linter.setCache(\"quotmark\",data.quote),linter.getCache(\"quotmark\")!==data.quote&&(code=\"W110\")),code&&linter.warn(code,{line:data.line,\"char\":data.char}))}),linter.on(\"Number\",function(data){\".\"===data.value.charAt(0)&&linter.warn(\"W008\",{line:data.line,\"char\":data.char,data:[data.value]}),\".\"===data.value.substr(data.value.length-1)&&linter.warn(\"W047\",{line:data.line,\"char\":data.char,data:[data.value]}),/^00+/.test(data.value)&&linter.warn(\"W046\",{line:data.line,\"char\":data.char,data:[data.value]})}),linter.on(\"String\",function(data){var re=/^(?:javascript|jscript|ecmascript|vbscript|livescript)\\s*:/i;linter.getOption(\"scripturl\")||re.test(data.value)&&linter.warn(\"W107\",{line:data.line,\"char\":data.char})})}},{}],\"/node_modules/jshint/src/vars.js\":[function(_dereq_,module,exports){\"use strict\";exports.reservedVars={arguments:!1,NaN:!1},exports.ecmaIdentifiers={3:{Array:!1,Boolean:!1,Date:!1,decodeURI:!1,decodeURIComponent:!1,encodeURI:!1,encodeURIComponent:!1,Error:!1,eval:!1,EvalError:!1,Function:!1,hasOwnProperty:!1,isFinite:!1,isNaN:!1,Math:!1,Number:!1,Object:!1,parseInt:!1,parseFloat:!1,RangeError:!1,ReferenceError:!1,RegExp:!1,String:!1,SyntaxError:!1,TypeError:!1,URIError:!1},5:{JSON:!1},6:{Map:!1,Promise:!1,Proxy:!1,Reflect:!1,Set:!1,Symbol:!1,WeakMap:!1,WeakSet:!1}},exports.browser={Audio:!1,Blob:!1,addEventListener:!1,applicationCache:!1,atob:!1,blur:!1,btoa:!1,cancelAnimationFrame:!1,CanvasGradient:!1,CanvasPattern:!1,CanvasRenderingContext2D:!1,CSS:!1,clearInterval:!1,clearTimeout:!1,close:!1,closed:!1,Comment:!1,CustomEvent:!1,DOMParser:!1,defaultStatus:!1,Document:!1,document:!1,DocumentFragment:!1,Element:!1,ElementTimeControl:!1,Event:!1,event:!1,fetch:!1,FileReader:!1,FormData:!1,focus:!1,frames:!1,getComputedStyle:!1,HTMLElement:!1,HTMLAnchorElement:!1,HTMLBaseElement:!1,HTMLBlockquoteElement:!1,HTMLBodyElement:!1,HTMLBRElement:!1,HTMLButtonElement:!1,HTMLCanvasElement:!1,HTMLCollection:!1,HTMLDirectoryElement:!1,HTMLDivElement:!1,HTMLDListElement:!1,HTMLFieldSetElement:!1,HTMLFontElement:!1,HTMLFormElement:!1,HTMLFrameElement:!1,HTMLFrameSetElement:!1,HTMLHeadElement:!1,HTMLHeadingElement:!1,HTMLHRElement:!1,HTMLHtmlElement:!1,HTMLIFrameElement:!1,HTMLImageElement:!1,HTMLInputElement:!1,HTMLIsIndexElement:!1,HTMLLabelElement:!1,HTMLLayerElement:!1,HTMLLegendElement:!1,HTMLLIElement:!1,HTMLLinkElement:!1,HTMLMapElement:!1,HTMLMenuElement:!1,HTMLMetaElement:!1,HTMLModElement:!1,HTMLObjectElement:!1,HTMLOListElement:!1,HTMLOptGroupElement:!1,HTMLOptionElement:!1,HTMLParagraphElement:!1,HTMLParamElement:!1,HTMLPreElement:!1,HTMLQuoteElement:!1,HTMLScriptElement:!1,HTMLSelectElement:!1,HTMLStyleElement:!1,HTMLTableCaptionElement:!1,HTMLTableCellElement:!1,HTMLTableColElement:!1,HTMLTableElement:!1,HTMLTableRowElement:!1,HTMLTableSectionElement:!1,HTMLTemplateElement:!1,HTMLTextAreaElement:!1,HTMLTitleElement:!1,HTMLUListElement:!1,HTMLVideoElement:!1,history:!1,Image:!1,Intl:!1,length:!1,localStorage:!1,location:!1,matchMedia:!1,MessageChannel:!1,MessageEvent:!1,MessagePort:!1,MouseEvent:!1,moveBy:!1,moveTo:!1,MutationObserver:!1,name:!1,Node:!1,NodeFilter:!1,NodeList:!1,Notification:!1,navigator:!1,onbeforeunload:!0,onblur:!0,onerror:!0,onfocus:!0,onload:!0,onresize:!0,onunload:!0,open:!1,openDatabase:!1,opener:!1,Option:!1,parent:!1,performance:!1,print:!1,Range:!1,requestAnimationFrame:!1,removeEventListener:!1,resizeBy:!1,resizeTo:!1,screen:!1,scroll:!1,scrollBy:!1,scrollTo:!1,sessionStorage:!1,setInterval:!1,setTimeout:!1,SharedWorker:!1,status:!1,SVGAElement:!1,SVGAltGlyphDefElement:!1,SVGAltGlyphElement:!1,SVGAltGlyphItemElement:!1,SVGAngle:!1,SVGAnimateColorElement:!1,SVGAnimateElement:!1,SVGAnimateMotionElement:!1,SVGAnimateTransformElement:!1,SVGAnimatedAngle:!1,SVGAnimatedBoolean:!1,SVGAnimatedEnumeration:!1,SVGAnimatedInteger:!1,SVGAnimatedLength:!1,SVGAnimatedLengthList:!1,SVGAnimatedNumber:!1,SVGAnimatedNumberList:!1,SVGAnimatedPathData:!1,SVGAnimatedPoints:!1,SVGAnimatedPreserveAspectRatio:!1,SVGAnimatedRect:!1,SVGAnimatedString:!1,SVGAnimatedTransformList:!1,SVGAnimationElement:!1,SVGCSSRule:!1,SVGCircleElement:!1,SVGClipPathElement:!1,SVGColor:!1,SVGColorProfileElement:!1,SVGColorProfileRule:!1,SVGComponentTransferFunctionElement:!1,SVGCursorElement:!1,SVGDefsElement:!1,SVGDescElement:!1,SVGDocument:!1,SVGElement:!1,SVGElementInstance:!1,SVGElementInstanceList:!1,SVGEllipseElement:!1,SVGExternalResourcesRequired:!1,SVGFEBlendElement:!1,SVGFEColorMatrixElement:!1,SVGFEComponentTransferElement:!1,SVGFECompositeElement:!1,SVGFEConvolveMatrixElement:!1,SVGFEDiffuseLightingElement:!1,SVGFEDisplacementMapElement:!1,SVGFEDistantLightElement:!1,SVGFEFloodElement:!1,SVGFEFuncAElement:!1,SVGFEFuncBElement:!1,SVGFEFuncGElement:!1,SVGFEFuncRElement:!1,SVGFEGaussianBlurElement:!1,SVGFEImageElement:!1,SVGFEMergeElement:!1,SVGFEMergeNodeElement:!1,SVGFEMorphologyElement:!1,SVGFEOffsetElement:!1,SVGFEPointLightElement:!1,SVGFESpecularLightingElement:!1,SVGFESpotLightElement:!1,SVGFETileElement:!1,SVGFETurbulenceElement:!1,SVGFilterElement:!1,SVGFilterPrimitiveStandardAttributes:!1,SVGFitToViewBox:!1,SVGFontElement:!1,SVGFontFaceElement:!1,SVGFontFaceFormatElement:!1,SVGFontFaceNameElement:!1,SVGFontFaceSrcElement:!1,SVGFontFaceUriElement:!1,SVGForeignObjectElement:!1,SVGGElement:!1,SVGGlyphElement:!1,SVGGlyphRefElement:!1,SVGGradientElement:!1,SVGHKernElement:!1,SVGICCColor:!1,SVGImageElement:!1,SVGLangSpace:!1,SVGLength:!1,SVGLengthList:!1,SVGLineElement:!1,SVGLinearGradientElement:!1,SVGLocatable:!1,SVGMPathElement:!1,SVGMarkerElement:!1,SVGMaskElement:!1,SVGMatrix:!1,SVGMetadataElement:!1,SVGMissingGlyphElement:!1,SVGNumber:!1,SVGNumberList:!1,SVGPaint:!1,SVGPathElement:!1,SVGPathSeg:!1,SVGPathSegArcAbs:!1,SVGPathSegArcRel:!1,SVGPathSegClosePath:!1,SVGPathSegCurvetoCubicAbs:!1,SVGPathSegCurvetoCubicRel:!1,SVGPathSegCurvetoCubicSmoothAbs:!1,SVGPathSegCurvetoCubicSmoothRel:!1,SVGPathSegCurvetoQuadraticAbs:!1,SVGPathSegCurvetoQuadraticRel:!1,SVGPathSegCurvetoQuadraticSmoothAbs:!1,SVGPathSegCurvetoQuadraticSmoothRel:!1,SVGPathSegLinetoAbs:!1,SVGPathSegLinetoHorizontalAbs:!1,SVGPathSegLinetoHorizontalRel:!1,SVGPathSegLinetoRel:!1,SVGPathSegLinetoVerticalAbs:!1,SVGPathSegLinetoVerticalRel:!1,SVGPathSegList:!1,SVGPathSegMovetoAbs:!1,SVGPathSegMovetoRel:!1,SVGPatternElement:!1,SVGPoint:!1,SVGPointList:!1,SVGPolygonElement:!1,SVGPolylineElement:!1,SVGPreserveAspectRatio:!1,SVGRadialGradientElement:!1,SVGRect:!1,SVGRectElement:!1,SVGRenderingIntent:!1,SVGSVGElement:!1,SVGScriptElement:!1,SVGSetElement:!1,SVGStopElement:!1,SVGStringList:!1,SVGStylable:!1,SVGStyleElement:!1,SVGSwitchElement:!1,SVGSymbolElement:!1,SVGTRefElement:!1,SVGTSpanElement:!1,SVGTests:!1,SVGTextContentElement:!1,SVGTextElement:!1,SVGTextPathElement:!1,SVGTextPositioningElement:!1,SVGTitleElement:!1,SVGTransform:!1,SVGTransformList:!1,SVGTransformable:!1,SVGURIReference:!1,SVGUnitTypes:!1,SVGUseElement:!1,SVGVKernElement:!1,SVGViewElement:!1,SVGViewSpec:!1,SVGZoomAndPan:!1,Text:!1,TextDecoder:!1,TextEncoder:!1,TimeEvent:!1,top:!1,URL:!1,WebGLActiveInfo:!1,WebGLBuffer:!1,WebGLContextEvent:!1,WebGLFramebuffer:!1,WebGLProgram:!1,WebGLRenderbuffer:!1,WebGLRenderingContext:!1,WebGLShader:!1,WebGLShaderPrecisionFormat:!1,WebGLTexture:!1,WebGLUniformLocation:!1,WebSocket:!1,window:!1,Window:!1,Worker:!1,XDomainRequest:!1,XMLHttpRequest:!1,XMLSerializer:!1,XPathEvaluator:!1,XPathException:!1,XPathExpression:!1,XPathNamespace:!1,XPathNSResolver:!1,XPathResult:!1},exports.devel={alert:!1,confirm:!1,console:!1,Debug:!1,opera:!1,prompt:!1},exports.worker={importScripts:!0,postMessage:!0,self:!0,FileReaderSync:!0},exports.nonstandard={escape:!1,unescape:!1},exports.couch={require:!1,respond:!1,getRow:!1,emit:!1,send:!1,start:!1,sum:!1,log:!1,exports:!1,module:!1,provides:!1},exports.node={__filename:!1,__dirname:!1,GLOBAL:!1,global:!1,module:!1,acequire:!1,Buffer:!0,console:!0,exports:!0,process:!0,setTimeout:!0,clearTimeout:!0,setInterval:!0,clearInterval:!0,setImmediate:!0,clearImmediate:!0},exports.browserify={__filename:!1,__dirname:!1,global:!1,module:!1,acequire:!1,Buffer:!0,exports:!0,process:!0},exports.phantom={phantom:!0,acequire:!0,WebPage:!0,console:!0,exports:!0},exports.qunit={asyncTest:!1,deepEqual:!1,equal:!1,expect:!1,module:!1,notDeepEqual:!1,notEqual:!1,notPropEqual:!1,notStrictEqual:!1,ok:!1,propEqual:!1,QUnit:!1,raises:!1,start:!1,stop:!1,strictEqual:!1,test:!1,\"throws\":!1},exports.rhino={defineClass:!1,deserialize:!1,gc:!1,help:!1,importClass:!1,importPackage:!1,java:!1,load:!1,loadClass:!1,Packages:!1,print:!1,quit:!1,readFile:!1,readUrl:!1,runCommand:!1,seal:!1,serialize:!1,spawn:!1,sync:!1,toint32:!1,version:!1},exports.shelljs={target:!1,echo:!1,exit:!1,cd:!1,pwd:!1,ls:!1,find:!1,cp:!1,rm:!1,mv:!1,mkdir:!1,test:!1,cat:!1,sed:!1,grep:!1,which:!1,dirs:!1,pushd:!1,popd:!1,env:!1,exec:!1,chmod:!1,config:!1,error:!1,tempdir:!1},exports.typed={ArrayBuffer:!1,ArrayBufferView:!1,DataView:!1,Float32Array:!1,Float64Array:!1,Int16Array:!1,Int32Array:!1,Int8Array:!1,Uint16Array:!1,Uint32Array:!1,Uint8Array:!1,Uint8ClampedArray:!1},exports.wsh={ActiveXObject:!0,Enumerator:!0,GetObject:!0,ScriptEngine:!0,ScriptEngineBuildVersion:!0,ScriptEngineMajorVersion:!0,ScriptEngineMinorVersion:!0,VBArray:!0,WSH:!0,WScript:!0,XDomainRequest:!0},exports.dojo={dojo:!1,dijit:!1,dojox:!1,define:!1,require:!1},exports.jquery={$:!1,jQuery:!1},exports.mootools={$:!1,$$:!1,Asset:!1,Browser:!1,Chain:!1,Class:!1,Color:!1,Cookie:!1,Core:!1,Document:!1,DomReady:!1,DOMEvent:!1,DOMReady:!1,Drag:!1,Element:!1,Elements:!1,Event:!1,Events:!1,Fx:!1,Group:!1,Hash:!1,HtmlTable:!1,IFrame:!1,IframeShim:!1,InputValidator:!1,instanceOf:!1,Keyboard:!1,Locale:!1,Mask:!1,MooTools:!1,Native:!1,Options:!1,OverText:!1,Request:!1,Scroller:!1,Slick:!1,Slider:!1,Sortables:!1,Spinner:!1,Swiff:!1,Tips:!1,Type:!1,typeOf:!1,URI:!1,Window:!1},exports.prototypejs={$:!1,$$:!1,$A:!1,$F:!1,$H:!1,$R:!1,$break:!1,$continue:!1,$w:!1,Abstract:!1,Ajax:!1,Class:!1,Enumerable:!1,Element:!1,Event:!1,Field:!1,Form:!1,Hash:!1,Insertion:!1,ObjectRange:!1,PeriodicalExecuter:!1,Position:!1,Prototype:!1,Selector:!1,Template:!1,Toggle:!1,Try:!1,Autocompleter:!1,Builder:!1,Control:!1,Draggable:!1,Draggables:!1,Droppables:!1,Effect:!1,Sortable:!1,SortableObserver:!1,Sound:!1,Scriptaculous:!1},exports.yui={YUI:!1,Y:!1,YUI_config:!1},exports.mocha={mocha:!1,describe:!1,xdescribe:!1,it:!1,xit:!1,context:!1,xcontext:!1,before:!1,after:!1,beforeEach:!1,afterEach:!1,suite:!1,test:!1,setup:!1,teardown:!1,suiteSetup:!1,suiteTeardown:!1},exports.jasmine={jasmine:!1,describe:!1,xdescribe:!1,it:!1,xit:!1,beforeEach:!1,afterEach:!1,setFixtures:!1,loadFixtures:!1,spyOn:!1,expect:!1,runs:!1,waitsFor:!1,waits:!1,beforeAll:!1,afterAll:!1,fail:!1,fdescribe:!1,fit:!1,pending:!1}},{}]},{},[\"/node_modules/jshint/src/jshint.js\"])}),ace.define(\"ace/mode/javascript_worker\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/worker/mirror\",\"ace/mode/javascript/jshint\"],function(acequire,exports,module){\"use strict\";function startRegex(arr){return RegExp(\"^(\"+arr.join(\"|\")+\")\")}var oop=acequire(\"../lib/oop\"),Mirror=acequire(\"../worker/mirror\").Mirror,lint=acequire(\"./javascript/jshint\").JSHINT,disabledWarningsRe=startRegex([\"Bad for in variable '(.+)'.\",'Missing \"use strict\"']),errorsRe=startRegex([\"Unexpected\",\"Expected \",\"Confusing (plus|minus)\",\"\\\\{a\\\\} unterminated regular expression\",\"Unclosed \",\"Unmatched \",\"Unbegun comment\",\"Bad invocation\",\"Missing space after\",\"Missing operator at\"]),infoRe=startRegex([\"Expected an assignment\",\"Bad escapement of EOL\",\"Unexpected comma\",\"Unexpected space\",\"Missing radix parameter.\",\"A leading decimal point can\",\"\\\\['{a}'\\\\] is better written in dot notation.\",\"'{a}' used out of scope\"]),JavaScriptWorker=exports.JavaScriptWorker=function(sender){Mirror.call(this,sender),this.setTimeout(500),this.setOptions()};oop.inherits(JavaScriptWorker,Mirror),function(){this.setOptions=function(options){this.options=options||{esnext:!0,moz:!0,devel:!0,browser:!0,node:!0,laxcomma:!0,laxbreak:!0,lastsemic:!0,onevar:!1,passfail:!1,maxerr:100,expr:!0,multistr:!0,globalstrict:!0},this.doc.getValue()&&this.deferredUpdate.schedule(100)},this.changeOptions=function(newOptions){oop.mixin(this.options,newOptions),this.doc.getValue()&&this.deferredUpdate.schedule(100)},this.isValidJS=function(str){try{eval(\"throw 0;\"+str)}catch(e){if(0===e)return!0}return!1},this.onUpdate=function(){var value=this.doc.getValue();if(value=value.replace(/^#!.*\\n/,\"\\n\"),!value)return this.sender.emit(\"annotate\",[]);var errors=[],maxErrorLevel=this.isValidJS(value)?\"warning\":\"error\";lint(value,this.options,this.options.globals);for(var results=lint.errors,errorAdded=!1,i=0;results.length>i;i++){var error=results[i];if(error){var raw=error.raw,type=\"warning\";if(\"Missing semicolon.\"==raw){var str=error.evidence.substr(error.character);str=str.charAt(str.search(/\\S/)),\"error\"==maxErrorLevel&&str&&/[\\w\\d{(['\"]/.test(str)?(error.reason='Missing \";\" before statement',type=\"error\"):type=\"info\"}else{if(disabledWarningsRe.test(raw))continue;infoRe.test(raw)?type=\"info\":errorsRe.test(raw)?(errorAdded=!0,type=maxErrorLevel):\"'{a}' is not defined.\"==raw?type=\"warning\":\"'{a}' is defined but never used.\"==raw&&(type=\"info\")}errors.push({row:error.line-1,column:error.character-1,text:error.reason,type:type,raw:raw})}}this.sender.emit(\"annotate\",errors)}}.call(JavaScriptWorker.prototype)}),ace.define(\"ace/lib/es5-shim\",[\"require\",\"exports\",\"module\"],function(){function Empty(){}function doesDefinePropertyWork(object){try{return Object.defineProperty(object,\"sentinel\",{}),\"sentinel\"in object}catch(exception){}}function toInteger(n){return n=+n,n!==n?n=0:0!==n&&n!==1/0&&n!==-(1/0)&&(n=(n>0||-1)*Math.floor(Math.abs(n))),n}Function.prototype.bind||(Function.prototype.bind=function(that){var target=this;if(\"function\"!=typeof target)throw new TypeError(\"Function.prototype.bind called on incompatible \"+target);var args=slice.call(arguments,1),bound=function(){if(this instanceof bound){var result=target.apply(this,args.concat(slice.call(arguments)));return Object(result)===result?result:this}return target.apply(that,args.concat(slice.call(arguments)))};return target.prototype&&(Empty.prototype=target.prototype,bound.prototype=new Empty,Empty.prototype=null),bound});var defineGetter,defineSetter,lookupGetter,lookupSetter,supportsAccessors,call=Function.prototype.call,prototypeOfArray=Array.prototype,prototypeOfObject=Object.prototype,slice=prototypeOfArray.slice,_toString=call.bind(prototypeOfObject.toString),owns=call.bind(prototypeOfObject.hasOwnProperty);if((supportsAccessors=owns(prototypeOfObject,\"__defineGetter__\"))&&(defineGetter=call.bind(prototypeOfObject.__defineGetter__),defineSetter=call.bind(prototypeOfObject.__defineSetter__),lookupGetter=call.bind(prototypeOfObject.__lookupGetter__),lookupSetter=call.bind(prototypeOfObject.__lookupSetter__)),2!=[1,2].splice(0).length)if(function(){function makeArray(l){var a=Array(l+2);return a[0]=a[1]=0,a}var lengthBefore,array=[];return array.splice.apply(array,makeArray(20)),array.splice.apply(array,makeArray(26)),lengthBefore=array.length,array.splice(5,0,\"XXX\"),lengthBefore+1==array.length,lengthBefore+1==array.length?!0:void 0}()){var array_splice=Array.prototype.splice;Array.prototype.splice=function(start,deleteCount){return arguments.length?array_splice.apply(this,[void 0===start?0:start,void 0===deleteCount?this.length-start:deleteCount].concat(slice.call(arguments,2))):[]}}else Array.prototype.splice=function(pos,removeCount){var length=this.length;pos>0?pos>length&&(pos=length):void 0==pos?pos=0:0>pos&&(pos=Math.max(length+pos,0)),length>pos+removeCount||(removeCount=length-pos);var removed=this.slice(pos,pos+removeCount),insert=slice.call(arguments,2),add=insert.length;if(pos===length)add&&this.push.apply(this,insert);else{var remove=Math.min(removeCount,length-pos),tailOldPos=pos+remove,tailNewPos=tailOldPos+add-remove,tailCount=length-tailOldPos,lengthAfterRemove=length-remove;if(tailOldPos>tailNewPos)for(var i=0;tailCount>i;++i)this[tailNewPos+i]=this[tailOldPos+i];else if(tailNewPos>tailOldPos)for(i=tailCount;i--;)this[tailNewPos+i]=this[tailOldPos+i];if(add&&pos===lengthAfterRemove)this.length=lengthAfterRemove,this.push.apply(this,insert);else for(this.length=lengthAfterRemove+add,i=0;add>i;++i)this[pos+i]=insert[i]}return removed};Array.isArray||(Array.isArray=function(obj){return\"[object Array]\"==_toString(obj)});var boxedString=Object(\"a\"),splitString=\"a\"!=boxedString[0]||!(0 in boxedString);if(Array.prototype.forEach||(Array.prototype.forEach=function(fun){var object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,thisp=arguments[1],i=-1,length=self.length>>>0;if(\"[object Function]\"!=_toString(fun))throw new TypeError;for(;length>++i;)i in self&&fun.call(thisp,self[i],i,object)}),Array.prototype.map||(Array.prototype.map=function(fun){var object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,length=self.length>>>0,result=Array(length),thisp=arguments[1];if(\"[object Function]\"!=_toString(fun))throw new TypeError(fun+\" is not a function\");for(var i=0;length>i;i++)i in self&&(result[i]=fun.call(thisp,self[i],i,object));return result}),Array.prototype.filter||(Array.prototype.filter=function(fun){var value,object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,length=self.length>>>0,result=[],thisp=arguments[1];if(\"[object Function]\"!=_toString(fun))throw new TypeError(fun+\" is not a function\");for(var i=0;length>i;i++)i in self&&(value=self[i],fun.call(thisp,value,i,object)&&result.push(value));return result}),Array.prototype.every||(Array.prototype.every=function(fun){var object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,length=self.length>>>0,thisp=arguments[1];if(\"[object Function]\"!=_toString(fun))throw new TypeError(fun+\" is not a function\");for(var i=0;length>i;i++)if(i in self&&!fun.call(thisp,self[i],i,object))return!1;return!0}),Array.prototype.some||(Array.prototype.some=function(fun){var object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,length=self.length>>>0,thisp=arguments[1];if(\"[object Function]\"!=_toString(fun))throw new TypeError(fun+\" is not a function\");for(var i=0;length>i;i++)if(i in self&&fun.call(thisp,self[i],i,object))return!0;return!1}),Array.prototype.reduce||(Array.prototype.reduce=function(fun){var object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,length=self.length>>>0;if(\"[object Function]\"!=_toString(fun))throw new TypeError(fun+\" is not a function\");if(!length&&1==arguments.length)throw new TypeError(\"reduce of empty array with no initial value\");var result,i=0;if(arguments.length>=2)result=arguments[1];else for(;;){if(i in self){result=self[i++];break}if(++i>=length)throw new TypeError(\"reduce of empty array with no initial value\")}for(;length>i;i++)i in self&&(result=fun.call(void 0,result,self[i],i,object));return result}),Array.prototype.reduceRight||(Array.prototype.reduceRight=function(fun){var object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,length=self.length>>>0;if(\"[object Function]\"!=_toString(fun))throw new TypeError(fun+\" is not a function\");if(!length&&1==arguments.length)throw new TypeError(\"reduceRight of empty array with no initial value\");var result,i=length-1;if(arguments.length>=2)result=arguments[1];else for(;;){if(i in self){result=self[i--];break}if(0>--i)throw new TypeError(\"reduceRight of empty array with no initial value\")}do i in this&&(result=fun.call(void 0,result,self[i],i,object));while(i--);return result}),Array.prototype.indexOf&&-1==[0,1].indexOf(1,2)||(Array.prototype.indexOf=function(sought){var self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):toObject(this),length=self.length>>>0;if(!length)return-1;var i=0;for(arguments.length>1&&(i=toInteger(arguments[1])),i=i>=0?i:Math.max(0,length+i);length>i;i++)if(i in self&&self[i]===sought)return i;return-1}),Array.prototype.lastIndexOf&&-1==[0,1].lastIndexOf(0,-3)||(Array.prototype.lastIndexOf=function(sought){var self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):toObject(this),length=self.length>>>0;if(!length)return-1;var i=length-1;for(arguments.length>1&&(i=Math.min(i,toInteger(arguments[1]))),i=i>=0?i:length-Math.abs(i);i>=0;i--)if(i in self&&sought===self[i])return i;return-1}),Object.getPrototypeOf||(Object.getPrototypeOf=function(object){return object.__proto__||(object.constructor?object.constructor.prototype:prototypeOfObject)}),!Object.getOwnPropertyDescriptor){var ERR_NON_OBJECT=\"Object.getOwnPropertyDescriptor called on a non-object: \";Object.getOwnPropertyDescriptor=function(object,property){if(\"object\"!=typeof object&&\"function\"!=typeof object||null===object)throw new TypeError(ERR_NON_OBJECT+object);if(owns(object,property)){var descriptor,getter,setter;if(descriptor={enumerable:!0,configurable:!0},supportsAccessors){var prototype=object.__proto__;object.__proto__=prototypeOfObject;var getter=lookupGetter(object,property),setter=lookupSetter(object,property);if(object.__proto__=prototype,getter||setter)return getter&&(descriptor.get=getter),setter&&(descriptor.set=setter),descriptor}return descriptor.value=object[property],descriptor}}}if(Object.getOwnPropertyNames||(Object.getOwnPropertyNames=function(object){return Object.keys(object)}),!Object.create){var createEmpty;createEmpty=null===Object.prototype.__proto__?function(){return{__proto__:null}}:function(){var empty={};for(var i in empty)empty[i]=null;return empty.constructor=empty.hasOwnProperty=empty.propertyIsEnumerable=empty.isPrototypeOf=empty.toLocaleString=empty.toString=empty.valueOf=empty.__proto__=null,empty},Object.create=function(prototype,properties){var object;if(null===prototype)object=createEmpty();else{if(\"object\"!=typeof prototype)throw new TypeError(\"typeof prototype[\"+typeof prototype+\"] != 'object'\");var Type=function(){};Type.prototype=prototype,object=new Type,object.__proto__=prototype}return void 0!==properties&&Object.defineProperties(object,properties),object}}if(Object.defineProperty){var definePropertyWorksOnObject=doesDefinePropertyWork({}),definePropertyWorksOnDom=\"undefined\"==typeof document||doesDefinePropertyWork(document.createElement(\"div\"));if(!definePropertyWorksOnObject||!definePropertyWorksOnDom)var definePropertyFallback=Object.defineProperty}if(!Object.defineProperty||definePropertyFallback){var ERR_NON_OBJECT_DESCRIPTOR=\"Property description must be an object: \",ERR_NON_OBJECT_TARGET=\"Object.defineProperty called on non-object: \",ERR_ACCESSORS_NOT_SUPPORTED=\"getters & setters can not be defined on this javascript engine\";Object.defineProperty=function(object,property,descriptor){if(\"object\"!=typeof object&&\"function\"!=typeof object||null===object)throw new TypeError(ERR_NON_OBJECT_TARGET+object);if(\"object\"!=typeof descriptor&&\"function\"!=typeof descriptor||null===descriptor)throw new TypeError(ERR_NON_OBJECT_DESCRIPTOR+descriptor);if(definePropertyFallback)try{return definePropertyFallback.call(Object,object,property,descriptor)}catch(exception){}if(owns(descriptor,\"value\"))if(supportsAccessors&&(lookupGetter(object,property)||lookupSetter(object,property))){var prototype=object.__proto__;object.__proto__=prototypeOfObject,delete object[property],object[property]=descriptor.value,object.__proto__=prototype}else object[property]=descriptor.value;else{if(!supportsAccessors)throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);owns(descriptor,\"get\")&&defineGetter(object,property,descriptor.get),owns(descriptor,\"set\")&&defineSetter(object,property,descriptor.set)}return object}}Object.defineProperties||(Object.defineProperties=function(object,properties){for(var property in properties)owns(properties,property)&&Object.defineProperty(object,property,properties[property]);return object}),Object.seal||(Object.seal=function(object){return object}),Object.freeze||(Object.freeze=function(object){return object});try{Object.freeze(function(){})}catch(exception){Object.freeze=function(freezeObject){return function(object){return\"function\"==typeof object?object:freezeObject(object)}}(Object.freeze)}if(Object.preventExtensions||(Object.preventExtensions=function(object){return object}),Object.isSealed||(Object.isSealed=function(){return!1}),Object.isFrozen||(Object.isFrozen=function(){return!1}),Object.isExtensible||(Object.isExtensible=function(object){if(Object(object)===object)throw new TypeError;for(var name=\"\";owns(object,name);)name+=\"?\";object[name]=!0;var returnValue=owns(object,name);return delete object[name],returnValue}),!Object.keys){var hasDontEnumBug=!0,dontEnums=[\"toString\",\"toLocaleString\",\"valueOf\",\"hasOwnProperty\",\"isPrototypeOf\",\"propertyIsEnumerable\",\"constructor\"],dontEnumsLength=dontEnums.length;for(var key in{toString:null})hasDontEnumBug=!1;Object.keys=function(object){if(\"object\"!=typeof object&&\"function\"!=typeof object||null===object)throw new TypeError(\"Object.keys called on a non-object\");var keys=[];for(var name in object)owns(object,name)&&keys.push(name);if(hasDontEnumBug)for(var i=0,ii=dontEnumsLength;ii>i;i++){var dontEnum=dontEnums[i];owns(object,dontEnum)&&keys.push(dontEnum)}return keys}}Date.now||(Date.now=function(){return(new Date).getTime()});var ws=\"\t\\n\u000b\\f\\r   ᠎             　\\u2028\\u2029﻿\";if(!String.prototype.trim||ws.trim()){ws=\"[\"+ws+\"]\";var trimBeginRegexp=RegExp(\"^\"+ws+ws+\"*\"),trimEndRegexp=RegExp(ws+ws+\"*$\");String.prototype.trim=function(){return(this+\"\").replace(trimBeginRegexp,\"\").replace(trimEndRegexp,\"\")}}var toObject=function(o){if(null==o)throw new TypeError(\"can't convert \"+o+\" to object\");return Object(o)}});";

/***/ }),

/***/ "../../../node_modules/copy-to-clipboard/index.js":
/*!*********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/copy-to-clipboard/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var deselectCurrent = __webpack_require__(/*! toggle-selection */ "../../../node_modules/toggle-selection/index.js");

var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  "default": "Text"
}

var defaultMessage = "Copy to clipboard: #{key}, Enter";

function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}

function copy(text, options) {
  var debug,
    message,
    reselectPrevious,
    range,
    selection,
    mark,
    success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();

    range = document.createRange();
    selection = document.getSelection();

    mark = document.createElement("span");
    mark.textContent = text;
    // reset user styles for span element
    mark.style.all = "unset";
    // prevents scrolling to the end of the page
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    // used to preserve spaces and line breaks
    mark.style.whiteSpace = "pre";
    // do not inherit user-select (it may be `none`)
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e) {
      e.stopPropagation();
      if (options.format) {
        e.preventDefault();
        if (typeof e.clipboardData === "undefined") { // IE 11
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"]
          window.clipboardData.setData(format, text);
        } else { // all other browsers
          e.clipboardData.clearData();
          e.clipboardData.setData(options.format, text);
        }
      }
      if (options.onCopy) {
        e.preventDefault();
        options.onCopy(e.clipboardData);
      }
    });

    document.body.appendChild(mark);

    range.selectNodeContents(mark);
    selection.addRange(range);

    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text);
      options.onCopy && options.onCopy(window.clipboardData);
      success = true;
    } catch (err) {
      debug && console.error("unable to copy using clipboardData: ", err);
      debug && console.error("falling back to prompt");
      message = format("message" in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }

  return success;
}

module.exports = copy;


/***/ }),

/***/ "../../../node_modules/fast-deep-equal/react.js":
/*!*******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/fast-deep-equal/react.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// do not edit .js files directly - edit src/index.jst



module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (key === '_owner' && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner.
        //  _owner contains circular references
        // and is not needed when comparing the actual elements (and not their owners)
        continue;
      }

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};


/***/ }),

/***/ "../../../node_modules/fast-shallow-equal/index.js":
/*!**********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/fast-shallow-equal/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var keyList = Object.keys;

exports.equal = function equal (a, b) {
  if (a === b) return true;
  if (!(a instanceof Object) || !(b instanceof Object)) return false;

  var keys = keyList(a);
  var length = keys.length;

  for (var i = 0; i < length; i++)
    if (!(keys[i] in b)) return false;

  for (var i = 0; i < length; i++)
    if (a[keys[i]] !== b[keys[i]]) return false;

  return length === keyList(b).length;
};


/***/ }),

/***/ "../../../node_modules/history/cjs/history.js":
/*!*****************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/history/cjs/history.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var resolvePathname = _interopDefault(__webpack_require__(/*! resolve-pathname */ "../../../node_modules/resolve-pathname/index.js"));
var valueEqual = _interopDefault(__webpack_require__(/*! value-equal */ "../../../node_modules/value-equal/index.js"));
var warning = _interopDefault(__webpack_require__(/*! tiny-warning */ "../../../node_modules/tiny-warning/dist/tiny-warning.cjs.js"));
var invariant = _interopDefault(__webpack_require__(/*! tiny-invariant */ "../../../node_modules/tiny-invariant/dist/tiny-invariant.cjs.js"));

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
}
function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
}
function hasBasename(path, prefix) {
  return path.toLowerCase().indexOf(prefix.toLowerCase()) === 0 && '/?#'.indexOf(path.charAt(prefix.length)) !== -1;
}
function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
}
function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
}
function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';
  var hashIndex = pathname.indexOf('#');

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
}
function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;
  var path = pathname || '/';
  if (search && search !== '?') path += search.charAt(0) === '?' ? search : "?" + search;
  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : "#" + hash;
  return path;
}

function createLocation(path, state, key, currentLocation) {
  var location;

  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = parsePath(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = _extends({}, path);
    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = resolvePathname(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
}
function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && valueEqual(a.state, b.state);
}

function createTransitionManager() {
  var prompt = null;

  function setPrompt(nextPrompt) {
    warning(prompt == null, 'A history supports only one prompt at a time');
    prompt = nextPrompt;
    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  }

  function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
          warning(false, 'A history needs a getUserConfirmation function in order to use a prompt message');
          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  }

  var listeners = [];

  function appendListener(fn) {
    var isActive = true;

    function listener() {
      if (isActive) fn.apply(void 0, arguments);
    }

    listeners.push(listener);
    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function notifyListeners() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(void 0, args);
    });
  }

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function getConfirmation(message, callback) {
  callback(window.confirm(message)); // eslint-disable-line no-alert
}
/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */

function supportsHistory() {
  var ua = window.navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
  return window.history && 'pushState' in window.history;
}
/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */

function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
}
/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
}
/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */

function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
}

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
}
/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */


function createBrowserHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ? invariant(false, 'Browser history needs a DOM') : void 0;
  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();
  var _props = props,
      _props$forceRefresh = _props.forceRefresh,
      forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

  function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;
    var path = pathname + search + hash;
    warning(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');
    if (basename) path = stripBasename(path, basename);
    return createLocation(path, state, key);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (isExtraneousPopstateEvent(event)) return;
    handlePop(getDOMLocation(event.state));
  }

  function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  }

  var forceNextPop = false;

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allKeys.indexOf(fromLocation.key);
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key]; // Public interface

  function createHref(location) {
    return basename + createPath(location);
  }

  function push(path, state) {
    warning(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.pushState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex + 1);
          nextKeys.push(location.key);
          allKeys = nextKeys;
          setState({
            action: action,
            location: location
          });
        }
      } else {
        warning(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');
        window.location.href = href;
      }
    });
  }

  function replace(path, state) {
    warning(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.replaceState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          if (prevIndex !== -1) allKeys[prevIndex] = location.key;
          setState({
            action: action,
            location: location
          });
        }
      } else {
        warning(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');
        window.location.replace(href);
      }
    });
  }

  function go(n) {
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.addEventListener(HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.removeEventListener(HashChangeEvent, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

var HashChangeEvent$1 = 'hashchange';
var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: stripLeadingSlash,
    decodePath: addLeadingSlash
  },
  slash: {
    encodePath: addLeadingSlash,
    decodePath: addLeadingSlash
  }
};

function stripHash(url) {
  var hashIndex = url.indexOf('#');
  return hashIndex === -1 ? url : url.slice(0, hashIndex);
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
}

function pushHashPath(path) {
  window.location.hash = path;
}

function replaceHashPath(path) {
  window.location.replace(stripHash(window.location.href) + '#' + path);
}

function createHashHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ? invariant(false, 'Hash history needs a DOM') : void 0;
  var globalHistory = window.history;
  var canGoWithoutReload = supportsGoWithoutReloadUsingHash();
  var _props = props,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$hashType = _props.hashType,
      hashType = _props$hashType === void 0 ? 'slash' : _props$hashType;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;

  function getDOMLocation() {
    var path = decodePath(getHashPath());
    warning(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');
    if (basename) path = stripBasename(path, basename);
    return createLocation(path);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  var forceNextPop = false;
  var ignorePath = null;

  function locationsAreEqual$$1(a, b) {
    return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash;
  }

  function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;
      if (!forceNextPop && locationsAreEqual$$1(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;
      handlePop(location);
    }
  }

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(createPath(toLocation));
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  } // Ensure the hash is encoded properly before doing anything else.


  var path = getHashPath();
  var encodedPath = encodePath(path);
  if (path !== encodedPath) replaceHashPath(encodedPath);
  var initialLocation = getDOMLocation();
  var allPaths = [createPath(initialLocation)]; // Public interface

  function createHref(location) {
    var baseTag = document.querySelector('base');
    var href = '';

    if (baseTag && baseTag.getAttribute('href')) {
      href = stripHash(window.location.href);
    }

    return href + '#' + encodePath(basename + createPath(location));
  }

  function push(path, state) {
    warning(state === undefined, 'Hash history cannot push state; it is ignored');
    var action = 'PUSH';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);
        var prevIndex = allPaths.lastIndexOf(createPath(history.location));
        var nextPaths = allPaths.slice(0, prevIndex + 1);
        nextPaths.push(path);
        allPaths = nextPaths;
        setState({
          action: action,
          location: location
        });
      } else {
        warning(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack');
        setState();
      }
    });
  }

  function replace(path, state) {
    warning(state === undefined, 'Hash history cannot replace state; it is ignored');
    var action = 'REPLACE';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(createPath(history.location));
      if (prevIndex !== -1) allPaths[prevIndex] = path;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
    warning(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser');
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(HashChangeEvent$1, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(HashChangeEvent$1, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
}
/**
 * Creates a history object that stores locations in memory.
 */


function createMemoryHistory(props) {
  if (props === void 0) {
    props = {};
  }

  var _props = props,
      getUserConfirmation = _props.getUserConfirmation,
      _props$initialEntries = _props.initialEntries,
      initialEntries = _props$initialEntries === void 0 ? ['/'] : _props$initialEntries,
      _props$initialIndex = _props.initialIndex,
      initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var transitionManager = createTransitionManager();

  function setState(nextState) {
    _extends(history, nextState);

    history.length = history.entries.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? createLocation(entry, undefined, createKey()) : createLocation(entry, undefined, entry.key || createKey());
  }); // Public interface

  var createHref = createPath;

  function push(path, state) {
    warning(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;
      var nextEntries = history.entries.slice(0);

      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  }

  function replace(path, state) {
    warning(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      history.entries[history.index] = location;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
    var action = 'POP';
    var location = history.entries[nextIndex];
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  }

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    return transitionManager.setPrompt(prompt);
  }

  function listen(listener) {
    return transitionManager.appendListener(listener);
  }

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };
  return history;
}

exports.createBrowserHistory = createBrowserHistory;
exports.createHashHistory = createHashHistory;
exports.createMemoryHistory = createMemoryHistory;
exports.createLocation = createLocation;
exports.locationsAreEqual = locationsAreEqual;
exports.parsePath = parsePath;
exports.createPath = createPath;


/***/ }),

/***/ "../../../node_modules/history/index.js":
/*!***********************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/history/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/history.js */ "../../../node_modules/history/cjs/history.js");
}


/***/ }),

/***/ "../../../node_modules/js-cookie/src/js.cookie.js":
/*!*********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/js-cookie/src/js.cookie.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function decode (s) {
		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
	}

	function init (converter) {
		function api() {}

		function set (key, value, attributes) {
			if (typeof document === 'undefined') {
				return;
			}

			attributes = extend({
				path: '/'
			}, api.defaults, attributes);

			if (typeof attributes.expires === 'number') {
				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
			}

			// We're using "expires" because "max-age" is not supported by IE
			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

			try {
				var result = JSON.stringify(value);
				if (/^[\{\[]/.test(result)) {
					value = result;
				}
			} catch (e) {}

			value = converter.write ?
				converter.write(value, key) :
				encodeURIComponent(String(value))
					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

			key = encodeURIComponent(String(key))
				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
				.replace(/[\(\)]/g, escape);

			var stringifiedAttributes = '';
			for (var attributeName in attributes) {
				if (!attributes[attributeName]) {
					continue;
				}
				stringifiedAttributes += '; ' + attributeName;
				if (attributes[attributeName] === true) {
					continue;
				}

				// Considers RFC 6265 section 5.2:
				// ...
				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
				//     character:
				// Consume the characters of the unparsed-attributes up to,
				// not including, the first %x3B (";") character.
				// ...
				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
			}

			return (document.cookie = key + '=' + value + stringifiedAttributes);
		}

		function get (key, json) {
			if (typeof document === 'undefined') {
				return;
			}

			var jar = {};
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all.
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = decode(parts[0]);
					cookie = (converter.read || converter)(cookie, name) ||
						decode(cookie);

					if (json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					jar[name] = cookie;

					if (key === name) {
						break;
					}
				} catch (e) {}
			}

			return key ? jar[key] : jar;
		}

		api.set = set;
		api.get = function (key) {
			return get(key, false /* read as raw */);
		};
		api.getJSON = function (key) {
			return get(key, true /* read as json */);
		};
		api.remove = function (key, attributes) {
			set(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.defaults = {};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ }),

/***/ "../../../node_modules/nano-css/addon/__dev__/warnOnMissingDependencies.js":
/*!**********************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/nano-css/addon/__dev__/warnOnMissingDependencies.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pkgName = 'nano-css';

module.exports = function warnOnMissingDependencies (addon, renderer, deps) {
    var missing = [];

    for (var i = 0; i < deps.length; i++) {
        var name = deps[i];

        if (!renderer[name]) {
            missing.push(name);
        }
    }

    if (missing.length) {
        var str = 'Addon "' + addon + '" is missing the following dependencies:';

        for (var j = 0; j < missing.length; j++) {
            str += '\n require("' + pkgName + '/addon/' + missing[j] + '").addon(nano);';
        }

        throw new Error(str);
    }
};


/***/ }),

/***/ "../../../node_modules/nano-css/addon/cssom.js":
/*!******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/nano-css/addon/cssom.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.addon = function (renderer) {
    // CSSOM support only browser environment.
    if (!renderer.client) return;

    if (true) {
        __webpack_require__(/*! ./__dev__/warnOnMissingDependencies */ "../../../node_modules/nano-css/addon/__dev__/warnOnMissingDependencies.js")('cssom', renderer, ['sh']);
    }

    // Style sheet for media queries.
    document.head.appendChild(renderer.msh = document.createElement('style'));

    renderer.createRule = function (selector, prelude) {
        var rawCss = selector + '{}';
        if (prelude) rawCss = prelude + '{' + rawCss + '}';
        var sheet = prelude ? renderer.msh.sheet : renderer.sh.sheet;
        var index = sheet.insertRule(rawCss, sheet.cssRules.length);
        var rule = (sheet.cssRules || sheet.rules)[index];

        // Keep track of `index` where rule was inserted in the sheet. This is
        // needed for rule deletion.
        rule.index = index;

        if (prelude) {
            // If rule has media query (it has prelude), move style (CSSStyleDeclaration)
            // object to the "top" to normalize it with a rule without the media
            // query, so that both rules have `.style` property available.
            var selectorRule = (rule.cssRules || rule.rules)[0];
            rule.style = selectorRule.style;
            rule.styleMap = selectorRule.styleMap;
        }

        return rule;
    };
};


/***/ }),

/***/ "../../../node_modules/nano-css/addon/vcssom.js":
/*!*******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/nano-css/addon/vcssom.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var removeRule = __webpack_require__(/*! ./vcssom/removeRule */ "../../../node_modules/nano-css/addon/vcssom/removeRule.js").removeRule;

exports.addon = function (renderer) {
    // VCSSOM support only browser environment.
    if (!renderer.client) return;

    if (true) {
        __webpack_require__(/*! ./__dev__/warnOnMissingDependencies */ "../../../node_modules/nano-css/addon/__dev__/warnOnMissingDependencies.js")('cssom', renderer, ['createRule']); // cssom
    }

    var kebab = renderer.kebab;

    function VRule (selector, prelude) {
        this.rule = renderer.createRule(selector, prelude);
        this.decl = {};
    }
    VRule.prototype.diff = function (newDecl) {
        var oldDecl = this.decl;
        var style = this.rule.style;
        var property;
        for (property in oldDecl)
            if (newDecl[property] === undefined)
                style.removeProperty(property);
        for (property in newDecl)
            if (newDecl[property] !== oldDecl[property])
                style.setProperty(kebab(property), newDecl[property]);
        this.decl = newDecl;
    };
    VRule.prototype.del = function () {
        removeRule(this.rule);
    };

    function VSheet () {
        /**
         * {
         *   '<at-rule-prelude>': {
         *     '<selector>': {
         *       color: 'red
         *     }
         *   }
         * }
         */
        this.tree = {};
    }
    VSheet.prototype.diff = function (newTree) {
        var oldTree = this.tree;

        // Remove media queries not present in new tree.
        for (var prelude in oldTree) {
            if (newTree[prelude] === undefined) {
                var rules = oldTree[prelude];
                for (var selector in rules)
                    rules[selector].del();
            }
        }

        for (var prelude in newTree) {
            if (oldTree[prelude] === undefined) {
                // Whole media query is new.
                for (var selector in newTree[prelude]) {
                    var rule = new VRule(selector, prelude);
                    rule.diff(newTree[prelude][selector]);
                    newTree[prelude][selector] = rule;
                }
            } else {
                // Old tree already has rules with this media query.
                var oldRules = oldTree[prelude];
                var newRules = newTree[prelude];

                // Remove rules not present in new tree.
                for (var selector in oldRules)
                    if (!newRules[selector])
                        oldRules[selector].del();

                // Apply new rules.
                for (var selector in newRules) {
                    var rule = oldRules[selector];
                    if (rule) {
                        rule.diff(newRules[selector]);
                        newRules[selector] = rule;
                    } else {
                        rule = new VRule(selector, prelude);
                        rule.diff(newRules[selector]);
                        newRules[selector] = rule;
                    }
                }
            }
        }

        this.tree = newTree;
    };

    renderer.VRule = VRule;
    renderer.VSheet = VSheet;
};


/***/ }),

/***/ "../../../node_modules/nano-css/addon/vcssom/cssToTree.js":
/*!*****************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/nano-css/addon/vcssom/cssToTree.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function cssToTree (tree, css, selector, prelude) {
    var declarations = {};
    var hasDeclarations = false;
    var key, value;

    for (key in css) {
        value = css[key];
        if (typeof value !== 'object') {
            hasDeclarations = true;
            declarations[key] = value;
        }
    }

    if (hasDeclarations) {
        if (!tree[prelude]) tree[prelude] = {};
        tree[prelude][selector] = declarations;
    }

    for (key in css) {
        value = css[key];
        if (typeof value === 'object') {
            if (key[0] === '@') {
                cssToTree(tree, value, selector, key);
            } else {
                var hasCurrentSymbol = key.indexOf('&') > -1;
                var selectorParts = selector.split(',');
                if (hasCurrentSymbol) {
                    for (var i = 0; i < selectorParts.length; i++) {
                        selectorParts[i] = key.replace(/&/g, selectorParts[i]);
                    }
                } else {
                    for (var i = 0; i < selectorParts.length; i++) {
                        selectorParts[i] = selectorParts[i] + ' ' + key;
                    }
                }
                cssToTree(tree, value, selectorParts.join(','), prelude);
            }
        }
    }
};

exports.cssToTree = cssToTree;


/***/ }),

/***/ "../../../node_modules/nano-css/addon/vcssom/removeRule.js":
/*!******************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/nano-css/addon/vcssom/removeRule.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function removeRule (rule) {
    var maxIndex = rule.index;
    var sh = rule.parentStyleSheet;
    var rules = sh.cssRules || sh.rules;
    maxIndex = Math.max(maxIndex, rules.length - 1);
    while (maxIndex >= 0) {
        if (rules[maxIndex] === rule) {
            sh.deleteRule(maxIndex);
            break;
        }
        maxIndex--;
    }
}

exports.removeRule = removeRule;


/***/ }),

/***/ "../../../node_modules/nano-css/index.js":
/*!************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/nano-css/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var KEBAB_REGEX = /[A-Z]/g;

var hash = function (str) {
    var h = 5381, i = str.length;

    while (i) h = (h * 33) ^ str.charCodeAt(--i);

    return '_' + (h >>> 0).toString(36);
};

exports.create = function (config) {
    config = config || {};
    var assign = config.assign || Object.assign;
    var client = typeof window === 'object';

    // Check if we are really in browser environment.
    if (true) {
        if (client) {
            if ((typeof document !== 'object') || !document.getElementsByTagName('HTML')) {
                console.error(
                    'nano-css detected browser environment because of "window" global, but ' +
                    '"document" global seems to be defective.'
                );
            }
        }
    }

    var renderer = assign({
        raw: '',
        pfx: '_',
        client: client,
        assign: assign,
        stringify: JSON.stringify,
        kebab: function (prop) {
            return prop.replace(KEBAB_REGEX, '-$&').toLowerCase();
        },
        decl: function (key, value) {
            key = renderer.kebab(key);
            return key + ':' + value + ';';
        },
        hash: function (obj) {
            return hash(renderer.stringify(obj));
        },
        selector: function (parent, selector) {
            return parent + (selector[0] === ':' ? ''  : ' ') + selector;
        },
        putRaw: function (rawCssRule) {
            renderer.raw += rawCssRule;
        }
    }, config);

    if (renderer.client) {
        if (!renderer.sh)
            document.head.appendChild(renderer.sh = document.createElement('style'));

        if (true) {
            renderer.sh.setAttribute('data-nano-css-dev', '');

            // Test style sheet used in DEV mode to test if .insetRule() would throw.
            renderer.shTest = document.createElement('style');
            renderer.shTest.setAttribute('data-nano-css-dev-tests', '');
            document.head.appendChild(renderer.shTest);
        }

        renderer.putRaw = function (rawCssRule) {
            // .insertRule() is faster than .appendChild(), that's why we use it in PROD.
            // But CSS injected using .insertRule() is not displayed in Chrome Devtools,
            // that's why we use .appendChild in DEV.
            if (false) { var sheet; } else {
                // Test if .insertRule() works in dev mode. Unknown pseudo-selectors will throw when
                // .insertRule() is used, but .appendChild() will not throw.
                try {
                    renderer.shTest.sheet.insertRule(rawCssRule, renderer.shTest.sheet.cssRules.length);
                } catch (error) {
                    if (config.verbose) {
                        console.error(error);
                    }
                }

                // Insert pretty-printed CSS for dev mode.
                renderer.sh.appendChild(document.createTextNode(rawCssRule));
            }
        };
    }

    renderer.put = function (selector, decls, atrule) {
        var str = '';
        var prop, value;
        var postponed = [];

        for (prop in decls) {
            value = decls[prop];

            if ((value instanceof Object) && !(value instanceof Array)) {
                postponed.push(prop);
            } else {
                if (( true) && !renderer.sourcemaps) {
                    str += '    ' + renderer.decl(prop, value, selector, atrule) + '\n';
                } else {
                    str += renderer.decl(prop, value, selector, atrule);
                }
            }
        }

        if (str) {
            if (( true) && !renderer.sourcemaps) {
                str = '\n' + selector + ' {\n' + str + '}\n';
            } else {
                str = selector + '{' + str + '}';
            }
            renderer.putRaw(atrule ? atrule + '{' + str + '}' : str);
        }

        for (var i = 0; i < postponed.length; i++) {
            prop = postponed[i];

            if (prop[0] === '@' && prop !== '@font-face') {
                renderer.putAt(selector, decls[prop], prop);
            } else {
                renderer.put(renderer.selector(selector, prop), decls[prop], atrule);
            }
        }
    };

    renderer.putAt = renderer.put;

    return renderer;
};


/***/ }),

/***/ "../../../node_modules/object-assign/index.js":
/*!*****************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/object-assign/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "../../../node_modules/process/browser.js":
/*!*************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/process/browser.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "../../../node_modules/prop-types/checkPropTypes.js":
/*!***********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/prop-types/checkPropTypes.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "../../../node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = __webpack_require__(/*! ./lib/has */ "../../../node_modules/prop-types/lib/has.js");

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "../../../node_modules/prop-types/factoryWithTypeCheckers.js":
/*!********************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "../../../node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "../../../node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "../../../node_modules/prop-types/lib/ReactPropTypesSecret.js");
var has = __webpack_require__(/*! ./lib/has */ "../../../node_modules/prop-types/lib/has.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "../../../node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "../../../node_modules/prop-types/index.js":
/*!**************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/prop-types/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "../../../node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "../../../node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "../../../node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*********************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "../../../node_modules/prop-types/lib/has.js":
/*!****************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/prop-types/lib/has.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);


/***/ }),

/***/ "../../../node_modules/react-is/cjs/react-is.development.js":
/*!*******************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-is/cjs/react-is.development.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "../../../node_modules/react-is/index.js":
/*!************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-is/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "../../../node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "../../../node_modules/react-use/lib/createBreakpoint.js":
/*!****************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/createBreakpoint.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var createBreakpoint = function (breakpoints) {
    if (breakpoints === void 0) { breakpoints = { laptopL: 1440, laptop: 1024, tablet: 768 }; }
    return function () {
        var _a = react_1.useState(0), screen = _a[0], setScreen = _a[1];
        react_1.useEffect(function () {
            var setSideScreen = function () {
                setScreen(window.innerWidth);
            };
            setSideScreen();
            window.addEventListener('resize', setSideScreen);
            return function () {
                window.removeEventListener('resize', setSideScreen);
            };
        });
        var sortedBreakpoints = react_1.useMemo(function () { return Object.entries(breakpoints).sort(function (a, b) { return (a[1] >= b[1] ? 1 : -1); }); }, [
            breakpoints,
        ]);
        var result = sortedBreakpoints.reduce(function (acc, _a) {
            var name = _a[0], width = _a[1];
            if (screen >= width) {
                return name;
            }
            else {
                return acc;
            }
        }, sortedBreakpoints[0][0]);
        return result;
    };
};
exports.default = createBreakpoint;


/***/ }),

/***/ "../../../node_modules/react-use/lib/createGlobalState.js":
/*!*****************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/createGlobalState.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useEffectOnce_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useEffectOnce */ "../../../node_modules/react-use/lib/useEffectOnce.js"));
function createGlobalState(initialState) {
    var store = {
        state: initialState,
        setState: function (state) {
            store.state = state;
            store.setters.forEach(function (setter) { return setter(store.state); });
        },
        setters: [],
    };
    return function () {
        var _a = react_1.useState(store.state), globalState = _a[0], stateSetter = _a[1];
        useEffectOnce_1.default(function () { return function () {
            store.setters = store.setters.filter(function (setter) { return setter !== stateSetter; });
        }; });
        react_1.useLayoutEffect(function () {
            if (!store.setters.includes(stateSetter)) {
                store.setters.push(stateSetter);
            }
        });
        return [globalState, store.setState];
    };
}
exports.createGlobalState = createGlobalState;
exports.default = createGlobalState;


/***/ }),

/***/ "../../../node_modules/react-use/lib/createMemo.js":
/*!**********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/createMemo.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var createMemo = function (fn) { return function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return react_1.useMemo(function () { return fn.apply(void 0, args); }, args);
}; };
exports.default = createMemo;


/***/ }),

/***/ "../../../node_modules/react-use/lib/createReducer.js":
/*!*************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/createReducer.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var react_1 = __webpack_require__(/*! react */ "react");
var useUpdateEffect_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useUpdateEffect */ "../../../node_modules/react-use/lib/useUpdateEffect.js"));
function composeMiddleware(chain) {
    return function (context, dispatch) {
        return chain.reduceRight(function (res, middleware) {
            return middleware(context)(res);
        }, dispatch);
    };
}
var createReducer = function () {
    var middlewares = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        middlewares[_i] = arguments[_i];
    }
    var composedMiddleware = composeMiddleware(middlewares);
    return function (reducer, initialState, initializer) {
        if (initializer === void 0) { initializer = function (value) { return value; }; }
        var ref = react_1.useRef(initializer(initialState));
        var _a = react_1.useState(ref.current), setState = _a[1];
        var dispatch = react_1.useCallback(function (action) {
            ref.current = reducer(ref.current, action);
            setState(ref.current);
            return action;
        }, [reducer]);
        var dispatchRef = react_1.useRef(composedMiddleware({
            getState: function () { return ref.current; },
            dispatch: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return dispatchRef.current.apply(dispatchRef, args);
            },
        }, dispatch));
        useUpdateEffect_1.default(function () {
            dispatchRef.current = composedMiddleware({
                getState: function () { return ref.current; },
                dispatch: function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    return dispatchRef.current.apply(dispatchRef, args);
                },
            }, dispatch);
        }, [dispatch]);
        return [ref.current, dispatchRef.current];
    };
};
exports.default = createReducer;


/***/ }),

/***/ "../../../node_modules/react-use/lib/createReducerContext.js":
/*!********************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/createReducerContext.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var createReducerContext = function (reducer, defaultInitialState) {
    var context = react_1.createContext(undefined);
    var providerFactory = react_1.createFactory(context.Provider);
    var ReducerProvider = function (_a) {
        var children = _a.children, initialState = _a.initialState;
        var state = react_1.useReducer(reducer, initialState !== undefined ? initialState : defaultInitialState);
        return providerFactory({ value: state }, children);
    };
    var useReducerContext = function () {
        var state = react_1.useContext(context);
        if (state == null) {
            throw new Error("useReducerContext must be used inside a ReducerProvider.");
        }
        return state;
    };
    return [useReducerContext, ReducerProvider, context];
};
exports.default = createReducerContext;


/***/ }),

/***/ "../../../node_modules/react-use/lib/createStateContext.js":
/*!******************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/createStateContext.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var createStateContext = function (defaultInitialValue) {
    var context = react_1.createContext(undefined);
    var providerFactory = react_1.createFactory(context.Provider);
    var StateProvider = function (_a) {
        var children = _a.children, initialValue = _a.initialValue;
        var state = react_1.useState(initialValue !== undefined ? initialValue : defaultInitialValue);
        return providerFactory({ value: state }, children);
    };
    var useStateContext = function () {
        var state = react_1.useContext(context);
        if (state == null) {
            throw new Error("useStateContext must be used inside a StateProvider.");
        }
        return state;
    };
    return [useStateContext, StateProvider, context];
};
exports.default = createStateContext;


/***/ }),

/***/ "../../../node_modules/react-use/lib/index.js":
/*!*****************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var createMemo_1 = __webpack_require__(/*! ./createMemo */ "../../../node_modules/react-use/lib/createMemo.js");
exports.createMemo = createMemo_1.default;
var createReducerContext_1 = __webpack_require__(/*! ./createReducerContext */ "../../../node_modules/react-use/lib/createReducerContext.js");
exports.createReducerContext = createReducerContext_1.default;
var createReducer_1 = __webpack_require__(/*! ./createReducer */ "../../../node_modules/react-use/lib/createReducer.js");
exports.createReducer = createReducer_1.default;
var createStateContext_1 = __webpack_require__(/*! ./createStateContext */ "../../../node_modules/react-use/lib/createStateContext.js");
exports.createStateContext = createStateContext_1.default;
var useAsync_1 = __webpack_require__(/*! ./useAsync */ "../../../node_modules/react-use/lib/useAsync.js");
exports.useAsync = useAsync_1.default;
var useAsyncFn_1 = __webpack_require__(/*! ./useAsyncFn */ "../../../node_modules/react-use/lib/useAsyncFn.js");
exports.useAsyncFn = useAsyncFn_1.default;
var useAsyncRetry_1 = __webpack_require__(/*! ./useAsyncRetry */ "../../../node_modules/react-use/lib/useAsyncRetry.js");
exports.useAsyncRetry = useAsyncRetry_1.default;
var useAudio_1 = __webpack_require__(/*! ./useAudio */ "../../../node_modules/react-use/lib/useAudio.js");
exports.useAudio = useAudio_1.default;
var useBattery_1 = __webpack_require__(/*! ./useBattery */ "../../../node_modules/react-use/lib/useBattery.js");
exports.useBattery = useBattery_1.default;
var useBeforeUnload_1 = __webpack_require__(/*! ./useBeforeUnload */ "../../../node_modules/react-use/lib/useBeforeUnload.js");
exports.useBeforeUnload = useBeforeUnload_1.default;
var useBoolean_1 = __webpack_require__(/*! ./useBoolean */ "../../../node_modules/react-use/lib/useBoolean.js");
exports.useBoolean = useBoolean_1.default;
var useClickAway_1 = __webpack_require__(/*! ./useClickAway */ "../../../node_modules/react-use/lib/useClickAway.js");
exports.useClickAway = useClickAway_1.default;
var useCookie_1 = __webpack_require__(/*! ./useCookie */ "../../../node_modules/react-use/lib/useCookie.js");
exports.useCookie = useCookie_1.default;
var useCopyToClipboard_1 = __webpack_require__(/*! ./useCopyToClipboard */ "../../../node_modules/react-use/lib/useCopyToClipboard.js");
exports.useCopyToClipboard = useCopyToClipboard_1.default;
var useCounter_1 = __webpack_require__(/*! ./useCounter */ "../../../node_modules/react-use/lib/useCounter.js");
exports.useCounter = useCounter_1.default;
var useCss_1 = __webpack_require__(/*! ./useCss */ "../../../node_modules/react-use/lib/useCss.js");
exports.useCss = useCss_1.default;
var useCustomCompareEffect_1 = __webpack_require__(/*! ./useCustomCompareEffect */ "../../../node_modules/react-use/lib/useCustomCompareEffect.js");
exports.useCustomCompareEffect = useCustomCompareEffect_1.default;
var useDebounce_1 = __webpack_require__(/*! ./useDebounce */ "../../../node_modules/react-use/lib/useDebounce.js");
exports.useDebounce = useDebounce_1.default;
var useDeepCompareEffect_1 = __webpack_require__(/*! ./useDeepCompareEffect */ "../../../node_modules/react-use/lib/useDeepCompareEffect.js");
exports.useDeepCompareEffect = useDeepCompareEffect_1.default;
var useDefault_1 = __webpack_require__(/*! ./useDefault */ "../../../node_modules/react-use/lib/useDefault.js");
exports.useDefault = useDefault_1.default;
var useDrop_1 = __webpack_require__(/*! ./useDrop */ "../../../node_modules/react-use/lib/useDrop.js");
exports.useDrop = useDrop_1.default;
var useDropArea_1 = __webpack_require__(/*! ./useDropArea */ "../../../node_modules/react-use/lib/useDropArea.js");
exports.useDropArea = useDropArea_1.default;
var useEffectOnce_1 = __webpack_require__(/*! ./useEffectOnce */ "../../../node_modules/react-use/lib/useEffectOnce.js");
exports.useEffectOnce = useEffectOnce_1.default;
var useEnsuredForwardedRef_1 = __webpack_require__(/*! ./useEnsuredForwardedRef */ "../../../node_modules/react-use/lib/useEnsuredForwardedRef.js");
exports.useEnsuredForwardedRef = useEnsuredForwardedRef_1.default;
exports.ensuredForwardRef = useEnsuredForwardedRef_1.ensuredForwardRef;
var useEvent_1 = __webpack_require__(/*! ./useEvent */ "../../../node_modules/react-use/lib/useEvent.js");
exports.useEvent = useEvent_1.default;
var useError_1 = __webpack_require__(/*! ./useError */ "../../../node_modules/react-use/lib/useError.js");
exports.useError = useError_1.default;
var useFavicon_1 = __webpack_require__(/*! ./useFavicon */ "../../../node_modules/react-use/lib/useFavicon.js");
exports.useFavicon = useFavicon_1.default;
var useFullscreen_1 = __webpack_require__(/*! ./useFullscreen */ "../../../node_modules/react-use/lib/useFullscreen.js");
exports.useFullscreen = useFullscreen_1.default;
var useGeolocation_1 = __webpack_require__(/*! ./useGeolocation */ "../../../node_modules/react-use/lib/useGeolocation.js");
exports.useGeolocation = useGeolocation_1.default;
var useGetSet_1 = __webpack_require__(/*! ./useGetSet */ "../../../node_modules/react-use/lib/useGetSet.js");
exports.useGetSet = useGetSet_1.default;
var useGetSetState_1 = __webpack_require__(/*! ./useGetSetState */ "../../../node_modules/react-use/lib/useGetSetState.js");
exports.useGetSetState = useGetSetState_1.default;
var useHarmonicIntervalFn_1 = __webpack_require__(/*! ./useHarmonicIntervalFn */ "../../../node_modules/react-use/lib/useHarmonicIntervalFn.js");
exports.useHarmonicIntervalFn = useHarmonicIntervalFn_1.default;
var useHover_1 = __webpack_require__(/*! ./useHover */ "../../../node_modules/react-use/lib/useHover.js");
exports.useHover = useHover_1.default;
var useHoverDirty_1 = __webpack_require__(/*! ./useHoverDirty */ "../../../node_modules/react-use/lib/useHoverDirty.js");
exports.useHoverDirty = useHoverDirty_1.default;
var useIdle_1 = __webpack_require__(/*! ./useIdle */ "../../../node_modules/react-use/lib/useIdle.js");
exports.useIdle = useIdle_1.default;
var useIntersection_1 = __webpack_require__(/*! ./useIntersection */ "../../../node_modules/react-use/lib/useIntersection.js");
exports.useIntersection = useIntersection_1.default;
var useInterval_1 = __webpack_require__(/*! ./useInterval */ "../../../node_modules/react-use/lib/useInterval.js");
exports.useInterval = useInterval_1.default;
var useIsomorphicLayoutEffect_1 = __webpack_require__(/*! ./useIsomorphicLayoutEffect */ "../../../node_modules/react-use/lib/useIsomorphicLayoutEffect.js");
exports.useIsomorphicLayoutEffect = useIsomorphicLayoutEffect_1.default;
var useKey_1 = __webpack_require__(/*! ./useKey */ "../../../node_modules/react-use/lib/useKey.js");
exports.useKey = useKey_1.default;
var createBreakpoint_1 = __webpack_require__(/*! ./createBreakpoint */ "../../../node_modules/react-use/lib/createBreakpoint.js");
exports.createBreakpoint = createBreakpoint_1.default;
// not exported because of peer dependency
// export { default as useKeyboardJs } from './useKeyboardJs';
var useKeyPress_1 = __webpack_require__(/*! ./useKeyPress */ "../../../node_modules/react-use/lib/useKeyPress.js");
exports.useKeyPress = useKeyPress_1.default;
var useKeyPressEvent_1 = __webpack_require__(/*! ./useKeyPressEvent */ "../../../node_modules/react-use/lib/useKeyPressEvent.js");
exports.useKeyPressEvent = useKeyPressEvent_1.default;
var useLifecycles_1 = __webpack_require__(/*! ./useLifecycles */ "../../../node_modules/react-use/lib/useLifecycles.js");
exports.useLifecycles = useLifecycles_1.default;
var useList_1 = __webpack_require__(/*! ./useList */ "../../../node_modules/react-use/lib/useList.js");
exports.useList = useList_1.default;
var useLocalStorage_1 = __webpack_require__(/*! ./useLocalStorage */ "../../../node_modules/react-use/lib/useLocalStorage.js");
exports.useLocalStorage = useLocalStorage_1.default;
var useLocation_1 = __webpack_require__(/*! ./useLocation */ "../../../node_modules/react-use/lib/useLocation.js");
exports.useLocation = useLocation_1.default;
var useLockBodyScroll_1 = __webpack_require__(/*! ./useLockBodyScroll */ "../../../node_modules/react-use/lib/useLockBodyScroll.js");
exports.useLockBodyScroll = useLockBodyScroll_1.default;
var useLogger_1 = __webpack_require__(/*! ./useLogger */ "../../../node_modules/react-use/lib/useLogger.js");
exports.useLogger = useLogger_1.default;
var useLongPress_1 = __webpack_require__(/*! ./useLongPress */ "../../../node_modules/react-use/lib/useLongPress.js");
exports.useLongPress = useLongPress_1.default;
var useMap_1 = __webpack_require__(/*! ./useMap */ "../../../node_modules/react-use/lib/useMap.js");
exports.useMap = useMap_1.default;
var useMedia_1 = __webpack_require__(/*! ./useMedia */ "../../../node_modules/react-use/lib/useMedia.js");
exports.useMedia = useMedia_1.default;
var useMediaDevices_1 = __webpack_require__(/*! ./useMediaDevices */ "../../../node_modules/react-use/lib/useMediaDevices.js");
exports.useMediaDevices = useMediaDevices_1.default;
var useMediatedState_1 = __webpack_require__(/*! ./useMediatedState */ "../../../node_modules/react-use/lib/useMediatedState.js");
exports.useMediatedState = useMediatedState_1.useMediatedState;
var useMethods_1 = __webpack_require__(/*! ./useMethods */ "../../../node_modules/react-use/lib/useMethods.js");
exports.useMethods = useMethods_1.default;
var useMotion_1 = __webpack_require__(/*! ./useMotion */ "../../../node_modules/react-use/lib/useMotion.js");
exports.useMotion = useMotion_1.default;
var useMount_1 = __webpack_require__(/*! ./useMount */ "../../../node_modules/react-use/lib/useMount.js");
exports.useMount = useMount_1.default;
var useMountedState_1 = __webpack_require__(/*! ./useMountedState */ "../../../node_modules/react-use/lib/useMountedState.js");
exports.useMountedState = useMountedState_1.default;
var useMouse_1 = __webpack_require__(/*! ./useMouse */ "../../../node_modules/react-use/lib/useMouse.js");
exports.useMouse = useMouse_1.default;
var useMouseHovered_1 = __webpack_require__(/*! ./useMouseHovered */ "../../../node_modules/react-use/lib/useMouseHovered.js");
exports.useMouseHovered = useMouseHovered_1.default;
var useNetwork_1 = __webpack_require__(/*! ./useNetwork */ "../../../node_modules/react-use/lib/useNetwork.js");
exports.useNetwork = useNetwork_1.default;
var useNumber_1 = __webpack_require__(/*! ./useNumber */ "../../../node_modules/react-use/lib/useNumber.js");
exports.useNumber = useNumber_1.default;
var useObservable_1 = __webpack_require__(/*! ./useObservable */ "../../../node_modules/react-use/lib/useObservable.js");
exports.useObservable = useObservable_1.default;
var useOrientation_1 = __webpack_require__(/*! ./useOrientation */ "../../../node_modules/react-use/lib/useOrientation.js");
exports.useOrientation = useOrientation_1.default;
var usePageLeave_1 = __webpack_require__(/*! ./usePageLeave */ "../../../node_modules/react-use/lib/usePageLeave.js");
exports.usePageLeave = usePageLeave_1.default;
var usePermission_1 = __webpack_require__(/*! ./usePermission */ "../../../node_modules/react-use/lib/usePermission.js");
exports.usePermission = usePermission_1.default;
var usePrevious_1 = __webpack_require__(/*! ./usePrevious */ "../../../node_modules/react-use/lib/usePrevious.js");
exports.usePrevious = usePrevious_1.default;
var usePreviousDistinct_1 = __webpack_require__(/*! ./usePreviousDistinct */ "../../../node_modules/react-use/lib/usePreviousDistinct.js");
exports.usePreviousDistinct = usePreviousDistinct_1.default;
var usePromise_1 = __webpack_require__(/*! ./usePromise */ "../../../node_modules/react-use/lib/usePromise.js");
exports.usePromise = usePromise_1.default;
var useQueue_1 = __webpack_require__(/*! ./useQueue */ "../../../node_modules/react-use/lib/useQueue.js");
exports.useQueue = useQueue_1.default;
var useRaf_1 = __webpack_require__(/*! ./useRaf */ "../../../node_modules/react-use/lib/useRaf.js");
exports.useRaf = useRaf_1.default;
var useRafLoop_1 = __webpack_require__(/*! ./useRafLoop */ "../../../node_modules/react-use/lib/useRafLoop.js");
exports.useRafLoop = useRafLoop_1.default;
var useRafState_1 = __webpack_require__(/*! ./useRafState */ "../../../node_modules/react-use/lib/useRafState.js");
exports.useRafState = useRafState_1.default;
var useSearchParam_1 = __webpack_require__(/*! ./useSearchParam */ "../../../node_modules/react-use/lib/useSearchParam.js");
exports.useSearchParam = useSearchParam_1.default;
var useScroll_1 = __webpack_require__(/*! ./useScroll */ "../../../node_modules/react-use/lib/useScroll.js");
exports.useScroll = useScroll_1.default;
var useScrolling_1 = __webpack_require__(/*! ./useScrolling */ "../../../node_modules/react-use/lib/useScrolling.js");
exports.useScrolling = useScrolling_1.default;
var useSessionStorage_1 = __webpack_require__(/*! ./useSessionStorage */ "../../../node_modules/react-use/lib/useSessionStorage.js");
exports.useSessionStorage = useSessionStorage_1.default;
var useSetState_1 = __webpack_require__(/*! ./useSetState */ "../../../node_modules/react-use/lib/useSetState.js");
exports.useSetState = useSetState_1.default;
var useShallowCompareEffect_1 = __webpack_require__(/*! ./useShallowCompareEffect */ "../../../node_modules/react-use/lib/useShallowCompareEffect.js");
exports.useShallowCompareEffect = useShallowCompareEffect_1.default;
var useSize_1 = __webpack_require__(/*! ./useSize */ "../../../node_modules/react-use/lib/useSize.js");
exports.useSize = useSize_1.default;
var useSlider_1 = __webpack_require__(/*! ./useSlider */ "../../../node_modules/react-use/lib/useSlider.js");
exports.useSlider = useSlider_1.default;
var useSpeech_1 = __webpack_require__(/*! ./useSpeech */ "../../../node_modules/react-use/lib/useSpeech.js");
exports.useSpeech = useSpeech_1.default;
// not exported because of peer dependency
// export { default as useSpring } from './useSpring';
var useStartTyping_1 = __webpack_require__(/*! ./useStartTyping */ "../../../node_modules/react-use/lib/useStartTyping.js");
exports.useStartTyping = useStartTyping_1.default;
var useStateWithHistory_1 = __webpack_require__(/*! ./useStateWithHistory */ "../../../node_modules/react-use/lib/useStateWithHistory.js");
exports.useStateWithHistory = useStateWithHistory_1.useStateWithHistory;
var useStateList_1 = __webpack_require__(/*! ./useStateList */ "../../../node_modules/react-use/lib/useStateList.js");
exports.useStateList = useStateList_1.default;
var useThrottle_1 = __webpack_require__(/*! ./useThrottle */ "../../../node_modules/react-use/lib/useThrottle.js");
exports.useThrottle = useThrottle_1.default;
var useThrottleFn_1 = __webpack_require__(/*! ./useThrottleFn */ "../../../node_modules/react-use/lib/useThrottleFn.js");
exports.useThrottleFn = useThrottleFn_1.default;
var useTimeout_1 = __webpack_require__(/*! ./useTimeout */ "../../../node_modules/react-use/lib/useTimeout.js");
exports.useTimeout = useTimeout_1.default;
var useTimeoutFn_1 = __webpack_require__(/*! ./useTimeoutFn */ "../../../node_modules/react-use/lib/useTimeoutFn.js");
exports.useTimeoutFn = useTimeoutFn_1.default;
var useTitle_1 = __webpack_require__(/*! ./useTitle */ "../../../node_modules/react-use/lib/useTitle.js");
exports.useTitle = useTitle_1.default;
var useToggle_1 = __webpack_require__(/*! ./useToggle */ "../../../node_modules/react-use/lib/useToggle.js");
exports.useToggle = useToggle_1.default;
var useTween_1 = __webpack_require__(/*! ./useTween */ "../../../node_modules/react-use/lib/useTween.js");
exports.useTween = useTween_1.default;
var useUnmount_1 = __webpack_require__(/*! ./useUnmount */ "../../../node_modules/react-use/lib/useUnmount.js");
exports.useUnmount = useUnmount_1.default;
var useUnmountPromise_1 = __webpack_require__(/*! ./useUnmountPromise */ "../../../node_modules/react-use/lib/useUnmountPromise.js");
exports.useUnmountPromise = useUnmountPromise_1.default;
var useUpdate_1 = __webpack_require__(/*! ./useUpdate */ "../../../node_modules/react-use/lib/useUpdate.js");
exports.useUpdate = useUpdate_1.default;
var useUpdateEffect_1 = __webpack_require__(/*! ./useUpdateEffect */ "../../../node_modules/react-use/lib/useUpdateEffect.js");
exports.useUpdateEffect = useUpdateEffect_1.default;
var useUpsert_1 = __webpack_require__(/*! ./useUpsert */ "../../../node_modules/react-use/lib/useUpsert.js");
exports.useUpsert = useUpsert_1.default;
var useVibrate_1 = __webpack_require__(/*! ./useVibrate */ "../../../node_modules/react-use/lib/useVibrate.js");
exports.useVibrate = useVibrate_1.default;
var useVideo_1 = __webpack_require__(/*! ./useVideo */ "../../../node_modules/react-use/lib/useVideo.js");
exports.useVideo = useVideo_1.default;
var useStateValidator_1 = __webpack_require__(/*! ./useStateValidator */ "../../../node_modules/react-use/lib/useStateValidator.js");
exports.useStateValidator = useStateValidator_1.default;
var useScrollbarWidth_1 = __webpack_require__(/*! ./useScrollbarWidth */ "../../../node_modules/react-use/lib/useScrollbarWidth.js");
exports.useScrollbarWidth = useScrollbarWidth_1.useScrollbarWidth;
var useMultiStateValidator_1 = __webpack_require__(/*! ./useMultiStateValidator */ "../../../node_modules/react-use/lib/useMultiStateValidator.js");
exports.useMultiStateValidator = useMultiStateValidator_1.useMultiStateValidator;
var useWindowScroll_1 = __webpack_require__(/*! ./useWindowScroll */ "../../../node_modules/react-use/lib/useWindowScroll.js");
exports.useWindowScroll = useWindowScroll_1.default;
var useWindowSize_1 = __webpack_require__(/*! ./useWindowSize */ "../../../node_modules/react-use/lib/useWindowSize.js");
exports.useWindowSize = useWindowSize_1.default;
var useMeasure_1 = __webpack_require__(/*! ./useMeasure */ "../../../node_modules/react-use/lib/useMeasure.js");
exports.useMeasure = useMeasure_1.default;
var useRendersCount_1 = __webpack_require__(/*! ./useRendersCount */ "../../../node_modules/react-use/lib/useRendersCount.js");
exports.useRendersCount = useRendersCount_1.useRendersCount;
var useFirstMountState_1 = __webpack_require__(/*! ./useFirstMountState */ "../../../node_modules/react-use/lib/useFirstMountState.js");
exports.useFirstMountState = useFirstMountState_1.useFirstMountState;
var useSet_1 = __webpack_require__(/*! ./useSet */ "../../../node_modules/react-use/lib/useSet.js");
exports.useSet = useSet_1.default;
var createGlobalState_1 = __webpack_require__(/*! ./createGlobalState */ "../../../node_modules/react-use/lib/createGlobalState.js");
exports.createGlobalState = createGlobalState_1.createGlobalState;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useAsync.js":
/*!********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useAsync.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var react_1 = __webpack_require__(/*! react */ "react");
var useAsyncFn_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useAsyncFn */ "../../../node_modules/react-use/lib/useAsyncFn.js"));
function useAsync(fn, deps) {
    if (deps === void 0) { deps = []; }
    var _a = useAsyncFn_1.default(fn, deps, {
        loading: true,
    }), state = _a[0], callback = _a[1];
    react_1.useEffect(function () {
        callback();
    }, [callback]);
    return state;
}
exports.default = useAsync;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useAsyncFn.js":
/*!**********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useAsyncFn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useMountedState_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useMountedState */ "../../../node_modules/react-use/lib/useMountedState.js"));
function useAsyncFn(fn, deps, initialState) {
    if (deps === void 0) { deps = []; }
    if (initialState === void 0) { initialState = { loading: false }; }
    var lastCallId = react_1.useRef(0);
    var _a = react_1.useState(initialState), state = _a[0], set = _a[1];
    var isMounted = useMountedState_1.default();
    var callback = react_1.useCallback(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var callId = ++lastCallId.current;
        set({ loading: true });
        return fn.apply(void 0, args).then(function (value) {
            isMounted() && callId === lastCallId.current && set({ value: value, loading: false });
            return value;
        }, function (error) {
            isMounted() && callId === lastCallId.current && set({ error: error, loading: false });
            return error;
        });
    }, deps);
    return [state, callback];
}
exports.default = useAsyncFn;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useAsyncRetry.js":
/*!*************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useAsyncRetry.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useAsync_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useAsync */ "../../../node_modules/react-use/lib/useAsync.js"));
var useAsyncRetry = function (fn, deps) {
    if (deps === void 0) { deps = []; }
    var _a = react_1.useState(0), attempt = _a[0], setAttempt = _a[1];
    var state = useAsync_1.default(fn, tslib_1.__spreadArrays(deps, [attempt]));
    var stateLoading = state.loading;
    var retry = react_1.useCallback(function () {
        if (stateLoading) {
            if (true) {
                console.log('You are calling useAsyncRetry hook retry() method while loading in progress, this is a no-op.');
            }
            return;
        }
        setAttempt(function (currentAttempt) { return currentAttempt + 1; });
    }, tslib_1.__spreadArrays(deps, [stateLoading]));
    return tslib_1.__assign(tslib_1.__assign({}, state), { retry: retry });
};
exports.default = useAsyncRetry;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useAudio.js":
/*!********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useAudio.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var createHTMLMediaHook_1 = tslib_1.__importDefault(__webpack_require__(/*! ./util/createHTMLMediaHook */ "../../../node_modules/react-use/lib/util/createHTMLMediaHook.js"));
var useAudio = createHTMLMediaHook_1.default('audio');
exports.default = useAudio;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useBattery.js":
/*!**********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useBattery.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var React = tslib_1.__importStar(__webpack_require__(/*! react */ "react"));
var util_1 = __webpack_require__(/*! ./util */ "../../../node_modules/react-use/lib/util.js");
var useState = React.useState, useEffect = React.useEffect;
var nav = typeof navigator === 'object' ? navigator : undefined;
var isBatteryApiSupported = nav && typeof nav.getBattery === 'function';
function useBatteryMock() {
    return { isSupported: false };
}
function useBattery() {
    var _a = useState({ isSupported: true, fetched: false }), state = _a[0], setState = _a[1];
    useEffect(function () {
        var isMounted = true;
        var battery = null;
        var handleChange = function () {
            if (!isMounted || !battery) {
                return;
            }
            var newState = {
                isSupported: true,
                fetched: true,
                level: battery.level,
                charging: battery.charging,
                dischargingTime: battery.dischargingTime,
                chargingTime: battery.chargingTime,
            };
            !util_1.isDeepEqual(state, newState) && setState(newState);
        };
        nav.getBattery().then(function (bat) {
            if (!isMounted) {
                return;
            }
            battery = bat;
            util_1.on(battery, 'chargingchange', handleChange);
            util_1.on(battery, 'chargingtimechange', handleChange);
            util_1.on(battery, 'dischargingtimechange', handleChange);
            util_1.on(battery, 'levelchange', handleChange);
            handleChange();
        });
        return function () {
            isMounted = false;
            if (battery) {
                util_1.off(battery, 'chargingchange', handleChange);
                util_1.off(battery, 'chargingtimechange', handleChange);
                util_1.off(battery, 'dischargingtimechange', handleChange);
                util_1.off(battery, 'levelchange', handleChange);
            }
        };
    }, []);
    return state;
}
exports.default = isBatteryApiSupported ? useBattery : useBatteryMock;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useBeforeUnload.js":
/*!***************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useBeforeUnload.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var useBeforeUnload = function (enabled, message) {
    if (enabled === void 0) { enabled = true; }
    var handler = react_1.useCallback(function (event) {
        var finalEnabled = typeof enabled === 'function' ? enabled() : true;
        if (!finalEnabled) {
            return;
        }
        event.preventDefault();
        if (message) {
            event.returnValue = message;
        }
        return message;
    }, [enabled, message]);
    react_1.useEffect(function () {
        if (!enabled) {
            return;
        }
        window.addEventListener('beforeunload', handler);
        return function () { return window.removeEventListener('beforeunload', handler); };
    }, [enabled, handler]);
};
exports.default = useBeforeUnload;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useBoolean.js":
/*!**********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useBoolean.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var useToggle_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useToggle */ "../../../node_modules/react-use/lib/useToggle.js"));
exports.default = useToggle_1.default;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useClickAway.js":
/*!************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useClickAway.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var util_1 = __webpack_require__(/*! ./util */ "../../../node_modules/react-use/lib/util.js");
var defaultEvents = ['mousedown', 'touchstart'];
var useClickAway = function (ref, onClickAway, events) {
    if (events === void 0) { events = defaultEvents; }
    var savedCallback = react_1.useRef(onClickAway);
    react_1.useEffect(function () {
        savedCallback.current = onClickAway;
    }, [onClickAway]);
    react_1.useEffect(function () {
        var handler = function (event) {
            var el = ref.current;
            el && !el.contains(event.target) && savedCallback.current(event);
        };
        for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
            var eventName = events_1[_i];
            util_1.on(document, eventName, handler);
        }
        return function () {
            for (var _i = 0, events_2 = events; _i < events_2.length; _i++) {
                var eventName = events_2[_i];
                util_1.off(document, eventName, handler);
            }
        };
    }, [events, ref]);
};
exports.default = useClickAway;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useCookie.js":
/*!*********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useCookie.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var react_1 = __webpack_require__(/*! react */ "react");
var js_cookie_1 = tslib_1.__importDefault(__webpack_require__(/*! js-cookie */ "../../../node_modules/js-cookie/src/js.cookie.js"));
var useCookie = function (cookieName) {
    var _a = react_1.useState(function () { return js_cookie_1.default.get(cookieName) || null; }), value = _a[0], setValue = _a[1];
    var updateCookie = react_1.useCallback(function (newValue, options) {
        js_cookie_1.default.set(cookieName, newValue, options);
        setValue(newValue);
    }, [cookieName]);
    var deleteCookie = react_1.useCallback(function () {
        js_cookie_1.default.remove(cookieName);
        setValue(null);
    }, [cookieName]);
    return [value, updateCookie, deleteCookie];
};
exports.default = useCookie;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useCopyToClipboard.js":
/*!******************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useCopyToClipboard.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var copy_to_clipboard_1 = tslib_1.__importDefault(__webpack_require__(/*! copy-to-clipboard */ "../../../node_modules/copy-to-clipboard/index.js"));
var react_1 = __webpack_require__(/*! react */ "react");
var useMountedState_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useMountedState */ "../../../node_modules/react-use/lib/useMountedState.js"));
var useSetState_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useSetState */ "../../../node_modules/react-use/lib/useSetState.js"));
var useCopyToClipboard = function () {
    var isMounted = useMountedState_1.default();
    var _a = useSetState_1.default({
        value: undefined,
        error: undefined,
        noUserInteraction: true,
    }), state = _a[0], setState = _a[1];
    var copyToClipboard = react_1.useCallback(function (value) {
        try {
            if (true) {
                if (typeof value !== 'string') {
                    console.error("Cannot copy typeof " + typeof value + " to clipboard, must be a string");
                }
            }
            var noUserInteraction = copy_to_clipboard_1.default(value);
            if (!isMounted()) {
                return;
            }
            setState({
                value: value,
                error: undefined,
                noUserInteraction: noUserInteraction,
            });
        }
        catch (error) {
            if (!isMounted()) {
                return;
            }
            setState({
                value: undefined,
                error: error,
                noUserInteraction: true,
            });
        }
    }, []);
    return [state, copyToClipboard];
};
exports.default = useCopyToClipboard;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useCounter.js":
/*!**********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useCounter.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useGetSet_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useGetSet */ "../../../node_modules/react-use/lib/useGetSet.js"));
var resolveHookState_1 = __webpack_require__(/*! ./util/resolveHookState */ "../../../node_modules/react-use/lib/util/resolveHookState.js");
function useCounter(initialValue, max, min) {
    if (initialValue === void 0) { initialValue = 0; }
    if (max === void 0) { max = null; }
    if (min === void 0) { min = null; }
    var init = resolveHookState_1.resolveHookState(initialValue);
    typeof init !== 'number' && console.error('initialValue has to be a number, got ' + typeof initialValue);
    if (typeof min === 'number') {
        init = Math.max(init, min);
    }
    else if (min !== null) {
        console.error('min has to be a number, got ' + typeof min);
    }
    if (typeof max === 'number') {
        init = Math.min(init, max);
    }
    else if (max !== null) {
        console.error('max has to be a number, got ' + typeof max);
    }
    var _a = useGetSet_1.default(init), get = _a[0], setInternal = _a[1];
    return [
        get(),
        react_1.useMemo(function () {
            var set = function (newState) {
                var prevState = get();
                var rState = resolveHookState_1.resolveHookState(newState, prevState);
                if (prevState !== rState) {
                    if (typeof min === 'number') {
                        rState = Math.max(rState, min);
                    }
                    if (typeof max === 'number') {
                        rState = Math.min(rState, max);
                    }
                    prevState !== rState && setInternal(rState);
                }
            };
            return {
                get: get,
                set: set,
                inc: function (delta) {
                    if (delta === void 0) { delta = 1; }
                    var rDelta = resolveHookState_1.resolveHookState(delta, get());
                    if (typeof rDelta !== 'number') {
                        console.error('delta has to be a number or function returning a number, got ' + typeof rDelta);
                    }
                    set(function (num) { return num + rDelta; });
                },
                dec: function (delta) {
                    if (delta === void 0) { delta = 1; }
                    var rDelta = resolveHookState_1.resolveHookState(delta, get());
                    if (typeof rDelta !== 'number') {
                        console.error('delta has to be a number or function returning a number, got ' + typeof rDelta);
                    }
                    set(function (num) { return num - rDelta; });
                },
                reset: function (value) {
                    if (value === void 0) { value = init; }
                    var rValue = resolveHookState_1.resolveHookState(value, get());
                    if (typeof rValue !== 'number') {
                        console.error('value has to be a number or function returning a number, got ' + typeof rValue);
                    }
                    init = rValue;
                    set(rValue);
                },
            };
        }, [init, min, max]),
    ];
}
exports.default = useCounter;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useCss.js":
/*!******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useCss.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var nano_css_1 = __webpack_require__(/*! nano-css */ "../../../node_modules/nano-css/index.js");
var cssom_1 = __webpack_require__(/*! nano-css/addon/cssom */ "../../../node_modules/nano-css/addon/cssom.js");
var vcssom_1 = __webpack_require__(/*! nano-css/addon/vcssom */ "../../../node_modules/nano-css/addon/vcssom.js");
var cssToTree_1 = __webpack_require__(/*! nano-css/addon/vcssom/cssToTree */ "../../../node_modules/nano-css/addon/vcssom/cssToTree.js");
var react_1 = __webpack_require__(/*! react */ "react");
var nano = nano_css_1.create();
cssom_1.addon(nano);
vcssom_1.addon(nano);
var counter = 0;
var useCss = function (css) {
    var className = react_1.useMemo(function () { return 'react-use-css-' + (counter++).toString(36); }, []);
    var sheet = react_1.useMemo(function () { return new nano.VSheet(); }, []);
    react_1.useLayoutEffect(function () {
        var tree = {};
        cssToTree_1.cssToTree(tree, css, '.' + className, '');
        sheet.diff(tree);
        return function () {
            sheet.diff({});
        };
    });
    return className;
};
exports.default = useCss;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useCustomCompareEffect.js":
/*!**********************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useCustomCompareEffect.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var isPrimitive = function (val) { return val !== Object(val); };
var useCustomCompareEffect = function (effect, deps, depsEqual) {
    if (true) {
        if (!(deps instanceof Array) || !deps.length) {
            console.warn('`useCustomCompareEffect` should not be used with no dependencies. Use React.useEffect instead.');
        }
        if (deps.every(isPrimitive)) {
            console.warn('`useCustomCompareEffect` should not be used with dependencies that are all primitive values. Use React.useEffect instead.');
        }
        if (typeof depsEqual !== 'function') {
            console.warn('`useCustomCompareEffect` should be used with depsEqual callback for comparing deps list');
        }
    }
    var ref = react_1.useRef(undefined);
    if (!ref.current || !depsEqual(deps, ref.current)) {
        ref.current = deps;
    }
    react_1.useEffect(effect, ref.current);
};
exports.default = useCustomCompareEffect;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useDebounce.js":
/*!***********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useDebounce.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var react_1 = __webpack_require__(/*! react */ "react");
var useTimeoutFn_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useTimeoutFn */ "../../../node_modules/react-use/lib/useTimeoutFn.js"));
function useDebounce(fn, ms, deps) {
    if (ms === void 0) { ms = 0; }
    if (deps === void 0) { deps = []; }
    var _a = useTimeoutFn_1.default(fn, ms), isReady = _a[0], cancel = _a[1], reset = _a[2];
    react_1.useEffect(reset, deps);
    return [isReady, cancel];
}
exports.default = useDebounce;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useDeepCompareEffect.js":
/*!********************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useDeepCompareEffect.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var util_1 = __webpack_require__(/*! ./util */ "../../../node_modules/react-use/lib/util.js");
var useCustomCompareEffect_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useCustomCompareEffect */ "../../../node_modules/react-use/lib/useCustomCompareEffect.js"));
var isPrimitive = function (val) { return val !== Object(val); };
var useDeepCompareEffect = function (effect, deps) {
    if (true) {
        if (!(deps instanceof Array) || !deps.length) {
            console.warn('`useDeepCompareEffect` should not be used with no dependencies. Use React.useEffect instead.');
        }
        if (deps.every(isPrimitive)) {
            console.warn('`useDeepCompareEffect` should not be used with dependencies that are all primitive values. Use React.useEffect instead.');
        }
    }
    useCustomCompareEffect_1.default(effect, deps, util_1.isDeepEqual);
};
exports.default = useDeepCompareEffect;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useDefault.js":
/*!**********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useDefault.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var useDefault = function (defaultValue, initialValue) {
    var _a = react_1.useState(initialValue), value = _a[0], setValue = _a[1];
    if (value === undefined || value === null) {
        return [defaultValue, setValue];
    }
    return [value, setValue];
};
exports.default = useDefault;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useDrop.js":
/*!*******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useDrop.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var React = tslib_1.__importStar(__webpack_require__(/*! react */ "react"));
var useMountedState_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useMountedState */ "../../../node_modules/react-use/lib/useMountedState.js"));
var useState = React.useState, useMemo = React.useMemo, useCallback = React.useCallback, useEffect = React.useEffect;
var noop = function () { };
/*
const defaultState: DropAreaState = {
  over: false,
};
*/
var createProcess = function (options, mounted) { return function (dataTransfer, event) {
    var uri = dataTransfer.getData('text/uri-list');
    if (uri) {
        (options.onUri || noop)(uri, event);
        return;
    }
    if (dataTransfer.files && dataTransfer.files.length) {
        (options.onFiles || noop)(Array.from(dataTransfer.files), event);
        return;
    }
    if (dataTransfer.items && dataTransfer.items.length) {
        dataTransfer.items[0].getAsString(function (text) {
            if (mounted) {
                (options.onText || noop)(text, event);
            }
        });
    }
}; };
var useDrop = function (options, args) {
    if (options === void 0) { options = {}; }
    if (args === void 0) { args = []; }
    var onFiles = options.onFiles, onText = options.onText, onUri = options.onUri;
    var isMounted = useMountedState_1.default();
    var _a = useState(false), over = _a[0], setOverRaw = _a[1];
    var setOver = useCallback(setOverRaw, []);
    var process = useMemo(function () { return createProcess(options, isMounted()); }, [onFiles, onText, onUri]);
    useEffect(function () {
        var onDragOver = function (event) {
            event.preventDefault();
            setOver(true);
        };
        var onDragEnter = function (event) {
            event.preventDefault();
            setOver(true);
        };
        var onDragLeave = function () {
            setOver(false);
        };
        var onDragExit = function () {
            setOver(false);
        };
        var onDrop = function (event) {
            event.preventDefault();
            setOver(false);
            process(event.dataTransfer, event);
        };
        var onPaste = function (event) {
            process(event.clipboardData, event);
        };
        document.addEventListener('dragover', onDragOver);
        document.addEventListener('dragenter', onDragEnter);
        document.addEventListener('dragleave', onDragLeave);
        document.addEventListener('dragexit', onDragExit);
        document.addEventListener('drop', onDrop);
        if (onText) {
            document.addEventListener('paste', onPaste);
        }
        return function () {
            document.removeEventListener('dragover', onDragOver);
            document.removeEventListener('dragenter', onDragEnter);
            document.removeEventListener('dragleave', onDragLeave);
            document.removeEventListener('dragexit', onDragExit);
            document.removeEventListener('drop', onDrop);
            document.removeEventListener('paste', onPaste);
        };
    }, tslib_1.__spreadArrays([process], args));
    return { over: over };
};
exports.default = useDrop;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useDropArea.js":
/*!***********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useDropArea.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useMountedState_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useMountedState */ "../../../node_modules/react-use/lib/useMountedState.js"));
var noop = function () { };
/*
const defaultState: DropAreaState = {
  over: false,
};
*/
var createProcess = function (options, mounted) { return function (dataTransfer, event) {
    var uri = dataTransfer.getData('text/uri-list');
    if (uri) {
        (options.onUri || noop)(uri, event);
        return;
    }
    if (dataTransfer.files && dataTransfer.files.length) {
        (options.onFiles || noop)(Array.from(dataTransfer.files), event);
        return;
    }
    if (dataTransfer.items && dataTransfer.items.length) {
        dataTransfer.items[0].getAsString(function (text) {
            if (mounted) {
                (options.onText || noop)(text, event);
            }
        });
    }
}; };
var createBond = function (process, setOver) { return ({
    onDragOver: function (event) {
        event.preventDefault();
    },
    onDragEnter: function (event) {
        event.preventDefault();
        setOver(true);
    },
    onDragLeave: function () {
        setOver(false);
    },
    onDrop: function (event) {
        event.preventDefault();
        event.persist();
        setOver(false);
        process(event.dataTransfer, event);
    },
    onPaste: function (event) {
        event.persist();
        process(event.clipboardData, event);
    },
}); };
var useDropArea = function (options) {
    if (options === void 0) { options = {}; }
    var onFiles = options.onFiles, onText = options.onText, onUri = options.onUri;
    var isMounted = useMountedState_1.default();
    var _a = react_1.useState(false), over = _a[0], setOver = _a[1];
    var process = react_1.useMemo(function () { return createProcess(options, isMounted()); }, [onFiles, onText, onUri]);
    var bond = react_1.useMemo(function () { return createBond(process, setOver); }, [process, setOver]);
    return [bond, { over: over }];
};
exports.default = useDropArea;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useEffectOnce.js":
/*!*************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useEffectOnce.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var useEffectOnce = function (effect) {
    react_1.useEffect(effect, []);
};
exports.default = useEffectOnce;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useEnsuredForwardedRef.js":
/*!**********************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useEnsuredForwardedRef.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
function useEnsuredForwardedRef(forwardedRef) {
    var ensuredRef = react_1.useRef(forwardedRef && forwardedRef.current);
    react_1.useEffect(function () {
        if (!forwardedRef) {
            return;
        }
        forwardedRef.current = ensuredRef.current;
    }, [forwardedRef]);
    return ensuredRef;
}
exports.default = useEnsuredForwardedRef;
function ensuredForwardRef(Component) {
    return react_1.forwardRef(function (props, ref) {
        var ensuredRef = useEnsuredForwardedRef(ref);
        return Component(props, ensuredRef);
    });
}
exports.ensuredForwardRef = ensuredForwardRef;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useError.js":
/*!********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useError.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var useError = function () {
    var _a = react_1.useState(null), error = _a[0], setError = _a[1];
    react_1.useEffect(function () {
        if (error) {
            throw error;
        }
    }, [error]);
    var dispatchError = react_1.useCallback(function (err) {
        setError(err);
    }, []);
    return dispatchError;
};
exports.default = useError;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useEvent.js":
/*!********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useEvent.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var util_1 = __webpack_require__(/*! ./util */ "../../../node_modules/react-use/lib/util.js");
var defaultTarget = util_1.isClient ? window : null;
var isListenerType1 = function (target) {
    return !!target.addEventListener;
};
var isListenerType2 = function (target) {
    return !!target.on;
};
var useEvent = function (name, handler, target, options) {
    if (target === void 0) { target = defaultTarget; }
    react_1.useEffect(function () {
        if (!handler) {
            return;
        }
        if (!target) {
            return;
        }
        if (isListenerType1(target)) {
            target.addEventListener(name, handler, options);
        }
        else if (isListenerType2(target)) {
            target.on(name, handler, options);
        }
        return function () {
            if (isListenerType1(target)) {
                target.removeEventListener(name, handler, options);
            }
            else if (isListenerType2(target)) {
                target.off(name, handler, options);
            }
        };
    }, [name, handler, target, JSON.stringify(options)]);
};
exports.default = useEvent;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useFavicon.js":
/*!**********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useFavicon.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var useFavicon = function (href) {
    react_1.useEffect(function () {
        var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = href;
        document.getElementsByTagName('head')[0].appendChild(link);
    }, [href]);
};
exports.default = useFavicon;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useFirstMountState.js":
/*!******************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useFirstMountState.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
function useFirstMountState() {
    var isFirst = react_1.useRef(true);
    if (isFirst.current) {
        isFirst.current = false;
        return true;
    }
    return isFirst.current;
}
exports.useFirstMountState = useFirstMountState;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useFullscreen.js":
/*!*************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useFullscreen.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var screenfull_1 = tslib_1.__importDefault(__webpack_require__(/*! screenfull */ "../../../node_modules/screenfull/dist/screenfull.js"));
var noop = function () { };
var useFullscreen = function (ref, on, options) {
    if (options === void 0) { options = {}; }
    var video = options.video, _a = options.onClose, onClose = _a === void 0 ? noop : _a;
    var _b = react_1.useState(on), isFullscreen = _b[0], setIsFullscreen = _b[1];
    react_1.useLayoutEffect(function () {
        if (!on) {
            return;
        }
        if (!ref.current) {
            return;
        }
        var onWebkitEndFullscreen = function () {
            video.current.removeEventListener('webkitendfullscreen', onWebkitEndFullscreen);
            onClose();
        };
        var onChange = function () {
            if (screenfull_1.default.isEnabled) {
                var isScreenfullFullscreen = screenfull_1.default.isFullscreen;
                setIsFullscreen(isScreenfullFullscreen);
                if (!isScreenfullFullscreen) {
                    onClose();
                }
            }
        };
        if (screenfull_1.default.isEnabled) {
            try {
                screenfull_1.default.request(ref.current);
                setIsFullscreen(true);
            }
            catch (error) {
                onClose(error);
                setIsFullscreen(false);
            }
            screenfull_1.default.on('change', onChange);
        }
        else if (video && video.current && video.current.webkitEnterFullscreen) {
            video.current.webkitEnterFullscreen();
            video.current.addEventListener('webkitendfullscreen', onWebkitEndFullscreen);
            setIsFullscreen(true);
        }
        else {
            onClose();
            setIsFullscreen(false);
        }
        return function () {
            setIsFullscreen(false);
            if (screenfull_1.default.isEnabled) {
                try {
                    screenfull_1.default.off('change', onChange);
                    screenfull_1.default.exit();
                }
                catch (_a) { }
            }
            else if (video && video.current && video.current.webkitExitFullscreen) {
                video.current.removeEventListener('webkitendfullscreen', onWebkitEndFullscreen);
                video.current.webkitExitFullscreen();
            }
        };
    }, [on, video, ref]);
    return isFullscreen;
};
exports.default = useFullscreen;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useGeolocation.js":
/*!**************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useGeolocation.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useGeolocation = function (options) {
    var _a = react_1.useState({
        loading: true,
        accuracy: null,
        altitude: null,
        altitudeAccuracy: null,
        heading: null,
        latitude: null,
        longitude: null,
        speed: null,
        timestamp: Date.now(),
    }), state = _a[0], setState = _a[1];
    var mounted = true;
    var watchId;
    var onEvent = function (event) {
        if (mounted) {
            setState({
                loading: false,
                accuracy: event.coords.accuracy,
                altitude: event.coords.altitude,
                altitudeAccuracy: event.coords.altitudeAccuracy,
                heading: event.coords.heading,
                latitude: event.coords.latitude,
                longitude: event.coords.longitude,
                speed: event.coords.speed,
                timestamp: event.timestamp,
            });
        }
    };
    var onEventError = function (error) {
        return mounted && setState(function (oldState) { return (tslib_1.__assign(tslib_1.__assign({}, oldState), { loading: false, error: error })); });
    };
    react_1.useEffect(function () {
        navigator.geolocation.getCurrentPosition(onEvent, onEventError, options);
        watchId = navigator.geolocation.watchPosition(onEvent, onEventError, options);
        return function () {
            mounted = false;
            navigator.geolocation.clearWatch(watchId);
        };
    }, []);
    return state;
};
exports.default = useGeolocation;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useGetSet.js":
/*!*********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useGetSet.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useUpdate_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useUpdate */ "../../../node_modules/react-use/lib/useUpdate.js"));
var resolveHookState_1 = __webpack_require__(/*! ./util/resolveHookState */ "../../../node_modules/react-use/lib/util/resolveHookState.js");
function useGetSet(initialState) {
    var state = react_1.useRef(resolveHookState_1.resolveHookState(initialState));
    var update = useUpdate_1.default();
    return react_1.useMemo(function () { return [
        // get
        function () { return state.current; },
        // set
        function (newState) {
            state.current = resolveHookState_1.resolveHookState(newState, state.current);
            update();
        },
    ]; }, []);
}
exports.default = useGetSet;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useGetSetState.js":
/*!**************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useGetSetState.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useUpdate_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useUpdate */ "../../../node_modules/react-use/lib/useUpdate.js"));
var useGetSetState = function (initialState) {
    if (initialState === void 0) { initialState = {}; }
    if (true) {
        if (typeof initialState !== 'object') {
            console.error('useGetSetState initial state must be an object.');
        }
    }
    var update = useUpdate_1.default();
    var state = react_1.useRef(tslib_1.__assign({}, initialState));
    var get = react_1.useCallback(function () { return state.current; }, []);
    var set = react_1.useCallback(function (patch) {
        if (!patch) {
            return;
        }
        if (true) {
            if (typeof patch !== 'object') {
                console.error('useGetSetState setter patch must be an object.');
            }
        }
        Object.assign(state.current, patch);
        update();
    }, []);
    return [get, set];
};
exports.default = useGetSetState;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useHarmonicIntervalFn.js":
/*!*********************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useHarmonicIntervalFn.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var set_harmonic_interval_1 = __webpack_require__(/*! set-harmonic-interval */ "../../../node_modules/set-harmonic-interval/lib/index.js");
var useHarmonicIntervalFn = function (fn, delay) {
    if (delay === void 0) { delay = 0; }
    var latestCallback = react_1.useRef(function () { });
    react_1.useEffect(function () {
        latestCallback.current = fn;
    });
    react_1.useEffect(function () {
        if (delay !== null) {
            var interval_1 = set_harmonic_interval_1.setHarmonicInterval(function () { return latestCallback.current(); }, delay);
            return function () { return set_harmonic_interval_1.clearHarmonicInterval(interval_1); };
        }
        return undefined;
    }, [delay]);
};
exports.default = useHarmonicIntervalFn;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useHover.js":
/*!********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useHover.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var React = tslib_1.__importStar(__webpack_require__(/*! react */ "react"));
var useState = React.useState;
var noop = function () { };
var useHover = function (element) {
    var _a = useState(false), state = _a[0], setState = _a[1];
    var onMouseEnter = function (originalOnMouseEnter) { return function (event) {
        (originalOnMouseEnter || noop)(event);
        setState(true);
    }; };
    var onMouseLeave = function (originalOnMouseLeave) { return function (event) {
        (originalOnMouseLeave || noop)(event);
        setState(false);
    }; };
    if (typeof element === 'function') {
        element = element(state);
    }
    var el = React.cloneElement(element, {
        onMouseEnter: onMouseEnter(element.props.onMouseEnter),
        onMouseLeave: onMouseLeave(element.props.onMouseLeave),
    });
    return [el, state];
};
exports.default = useHover;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useHoverDirty.js":
/*!*************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useHoverDirty.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
// kudos: https://usehooks.com/
var useHoverDirty = function (ref, enabled) {
    if (enabled === void 0) { enabled = true; }
    if (true) {
        if (typeof ref !== 'object' || typeof ref.current === 'undefined') {
            console.error('useHoverDirty expects a single ref argument.');
        }
    }
    var _a = react_1.useState(false), value = _a[0], setValue = _a[1];
    react_1.useEffect(function () {
        var onMouseOver = function () { return setValue(true); };
        var onMouseOut = function () { return setValue(false); };
        if (enabled && ref && ref.current) {
            ref.current.addEventListener('mouseover', onMouseOver);
            ref.current.addEventListener('mouseout', onMouseOut);
        }
        // fixes react-hooks/exhaustive-deps warning about stale ref elements
        var current = ref.current;
        return function () {
            if (enabled && current) {
                current.removeEventListener('mouseover', onMouseOver);
                current.removeEventListener('mouseout', onMouseOut);
            }
        };
    }, [enabled, ref]);
    return value;
};
exports.default = useHoverDirty;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useIdle.js":
/*!*******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useIdle.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var throttle_debounce_1 = __webpack_require__(/*! throttle-debounce */ "../../../node_modules/throttle-debounce/index.umd.js");
var util_1 = __webpack_require__(/*! ./util */ "../../../node_modules/react-use/lib/util.js");
var defaultEvents = ['mousemove', 'mousedown', 'resize', 'keydown', 'touchstart', 'wheel'];
var oneMinute = 60e3;
var useIdle = function (ms, initialState, events) {
    if (ms === void 0) { ms = oneMinute; }
    if (initialState === void 0) { initialState = false; }
    if (events === void 0) { events = defaultEvents; }
    var _a = react_1.useState(initialState), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        var mounted = true;
        var timeout;
        var localState = state;
        var set = function (newState) {
            if (mounted) {
                localState = newState;
                setState(newState);
            }
        };
        var onEvent = throttle_debounce_1.throttle(50, function () {
            if (localState) {
                set(false);
            }
            clearTimeout(timeout);
            timeout = setTimeout(function () { return set(true); }, ms);
        });
        var onVisibility = function () {
            if (!document.hidden) {
                onEvent();
            }
        };
        for (var i = 0; i < events.length; i++) {
            util_1.on(window, events[i], onEvent);
        }
        util_1.on(document, 'visibilitychange', onVisibility);
        timeout = setTimeout(function () { return set(true); }, ms);
        return function () {
            mounted = false;
            for (var i = 0; i < events.length; i++) {
                util_1.off(window, events[i], onEvent);
            }
            util_1.off(document, 'visibilitychange', onVisibility);
        };
    }, [ms, events]);
    return state;
};
exports.default = useIdle;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useIntersection.js":
/*!***************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useIntersection.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useIntersection = function (ref, options) {
    var _a = react_1.useState(null), intersectionObserverEntry = _a[0], setIntersectionObserverEntry = _a[1];
    react_1.useEffect(function () {
        if (ref.current && typeof IntersectionObserver === 'function') {
            var handler = function (entries) {
                setIntersectionObserverEntry(entries[0]);
            };
            var observer_1 = new IntersectionObserver(handler, options);
            observer_1.observe(ref.current);
            return function () {
                setIntersectionObserverEntry(null);
                observer_1.disconnect();
            };
        }
        return function () { };
    }, [ref.current, options.threshold, options.root, options.rootMargin]);
    return intersectionObserverEntry;
};
exports.default = useIntersection;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useInterval.js":
/*!***********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useInterval.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var useInterval = function (callback, delay) {
    var savedCallback = react_1.useRef(function () { });
    react_1.useEffect(function () {
        savedCallback.current = callback;
    });
    react_1.useEffect(function () {
        if (delay !== null) {
            var interval_1 = setInterval(function () { return savedCallback.current(); }, delay || 0);
            return function () { return clearInterval(interval_1); };
        }
        return undefined;
    }, [delay]);
};
exports.default = useInterval;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useIsomorphicLayoutEffect.js":
/*!*************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useIsomorphicLayoutEffect.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var useIsomorphicLayoutEffect = typeof window !== 'undefined' ? react_1.useLayoutEffect : react_1.useEffect;
exports.default = useIsomorphicLayoutEffect;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useKey.js":
/*!******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useKey.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useEvent_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useEvent */ "../../../node_modules/react-use/lib/useEvent.js"));
var noop = function () { };
var createKeyPredicate = function (keyFilter) {
    return typeof keyFilter === 'function'
        ? keyFilter
        : typeof keyFilter === 'string'
            ? function (event) { return event.key === keyFilter; }
            : keyFilter
                ? function () { return true; }
                : function () { return false; };
};
var useKey = function (key, fn, opts, deps) {
    if (fn === void 0) { fn = noop; }
    if (opts === void 0) { opts = {}; }
    if (deps === void 0) { deps = [key]; }
    var _a = opts.event, event = _a === void 0 ? 'keydown' : _a, target = opts.target, options = opts.options;
    var useMemoHandler = react_1.useMemo(function () {
        var predicate = createKeyPredicate(key);
        var handler = function (handlerEvent) {
            if (predicate(handlerEvent)) {
                return fn(handlerEvent);
            }
        };
        return handler;
    }, deps);
    useEvent_1.default(event, useMemoHandler, target, options);
};
exports.default = useKey;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useKeyPress.js":
/*!***********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useKeyPress.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var react_1 = __webpack_require__(/*! react */ "react");
var useKey_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useKey */ "../../../node_modules/react-use/lib/useKey.js"));
var useKeyPress = function (keyFilter) {
    var _a = react_1.useState([false, null]), state = _a[0], set = _a[1];
    useKey_1.default(keyFilter, function (event) { return set([true, event]); }, { event: 'keydown' }, [state]);
    useKey_1.default(keyFilter, function (event) { return set([false, event]); }, { event: 'keyup' }, [state]);
    return state;
};
exports.default = useKeyPress;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useKeyPressEvent.js":
/*!****************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useKeyPressEvent.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var useKeyPress_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useKeyPress */ "../../../node_modules/react-use/lib/useKeyPress.js"));
var useUpdateEffect_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useUpdateEffect */ "../../../node_modules/react-use/lib/useUpdateEffect.js"));
var useKeyPressEvent = function (key, keydown, keyup, useKeyPress) {
    if (useKeyPress === void 0) { useKeyPress = useKeyPress_1.default; }
    var _a = useKeyPress(key), pressed = _a[0], event = _a[1];
    useUpdateEffect_1.default(function () {
        if (!pressed && keyup) {
            keyup(event);
        }
        else if (pressed && keydown) {
            keydown(event);
        }
    }, [pressed]);
};
exports.default = useKeyPressEvent;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useLifecycles.js":
/*!*************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useLifecycles.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useLifecycles = function (mount, unmount) {
    react_1.useEffect(function () {
        if (mount) {
            mount();
        }
        return function () {
            if (unmount) {
                unmount();
            }
        };
    }, []);
};
exports.default = useLifecycles;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useList.js":
/*!*******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useList.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useUpdate_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useUpdate */ "../../../node_modules/react-use/lib/useUpdate.js"));
var resolveHookState_1 = __webpack_require__(/*! ./util/resolveHookState */ "../../../node_modules/react-use/lib/util/resolveHookState.js");
function useList(initialList) {
    if (initialList === void 0) { initialList = []; }
    var list = react_1.useRef(resolveHookState_1.resolveHookState(initialList));
    var update = useUpdate_1.default();
    var actions = react_1.useMemo(function () {
        var a = {
            set: function (newList) {
                list.current = resolveHookState_1.resolveHookState(newList, list.current);
                update();
            },
            push: function () {
                var items = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    items[_i] = arguments[_i];
                }
                items.length && actions.set(function (curr) { return curr.concat(items); });
            },
            updateAt: function (index, item) {
                actions.set(function (curr) {
                    var arr = curr.slice();
                    arr[index] = item;
                    return arr;
                });
            },
            insertAt: function (index, item) {
                actions.set(function (curr) {
                    var arr = curr.slice();
                    index > arr.length ? (arr[index] = item) : arr.splice(index, 0, item);
                    return arr;
                });
            },
            update: function (predicate, newItem) {
                actions.set(function (curr) { return curr.map(function (item) { return (predicate(item, newItem) ? newItem : item); }); });
            },
            updateFirst: function (predicate, newItem) {
                var index = list.current.findIndex(function (item) { return predicate(item, newItem); });
                index >= 0 && actions.updateAt(index, newItem);
            },
            upsert: function (predicate, newItem) {
                var index = list.current.findIndex(function (item) { return predicate(item, newItem); });
                index >= 0 ? actions.updateAt(index, newItem) : actions.push(newItem);
            },
            sort: function (compareFn) {
                actions.set(function (curr) { return curr.slice().sort(compareFn); });
            },
            filter: function (callbackFn, thisArg) {
                actions.set(function (curr) { return curr.slice().filter(callbackFn, thisArg); });
            },
            removeAt: function (index) {
                actions.set(function (curr) {
                    var arr = curr.slice();
                    arr.splice(index, 1);
                    return arr;
                });
            },
            clear: function () {
                actions.set([]);
            },
            reset: function () {
                actions.set(resolveHookState_1.resolveHookState(initialList).slice());
            },
        };
        /**
         * @deprecated Use removeAt method instead
         */
        a.remove = a.removeAt;
        return a;
    }, []);
    return [list.current, actions];
}
exports.default = useList;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useLocalStorage.js":
/*!***************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useLocalStorage.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var util_1 = __webpack_require__(/*! ./util */ "../../../node_modules/react-use/lib/util.js");
var useLocalStorage = function (key, initialValue, options) {
    if (!util_1.isClient) {
        return [initialValue, function () { }];
    }
    // Use provided serializer/deserializer or the default ones
    var serializer = options ? (options.raw ? String : options.serializer) : JSON.stringify;
    var deserializer = options ? (options.raw ? String : options.deserializer) : JSON.parse;
    var _a = react_1.useState(function () {
        try {
            var localStorageValue = localStorage.getItem(key);
            if (localStorageValue !== null) {
                return deserializer(localStorageValue);
            }
            else {
                initialValue && localStorage.setItem(key, serializer(initialValue));
                return initialValue;
            }
        }
        catch (_a) {
            // If user is in private mode or has storage restriction
            // localStorage can throw. JSON.parse and JSON.stringify
            // can throw, too.
            return initialValue;
        }
    }), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        try {
            localStorage.setItem(key, serializer(state));
        }
        catch (_a) {
            // If user is in private mode or has storage restriction
            // localStorage can throw. Also JSON.stringify can throw.
        }
    }, [state]);
    return [state, setState];
};
exports.default = useLocalStorage;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useLocation.js":
/*!***********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useLocation.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var util_1 = __webpack_require__(/*! ./util */ "../../../node_modules/react-use/lib/util.js");
var patchHistoryMethod = function (method) {
    var original = history[method];
    history[method] = function (state) {
        var result = original.apply(this, arguments);
        var event = new Event(method.toLowerCase());
        event.state = state;
        window.dispatchEvent(event);
        return result;
    };
};
if (util_1.isClient) {
    patchHistoryMethod('pushState');
    patchHistoryMethod('replaceState');
}
var useLocationServer = function () { return ({
    trigger: 'load',
    length: 1,
}); };
var buildState = function (trigger) {
    var state = history.state, length = history.length;
    var hash = location.hash, host = location.host, hostname = location.hostname, href = location.href, origin = location.origin, pathname = location.pathname, port = location.port, protocol = location.protocol, search = location.search;
    return {
        trigger: trigger,
        state: state,
        length: length,
        hash: hash,
        host: host,
        hostname: hostname,
        href: href,
        origin: origin,
        pathname: pathname,
        port: port,
        protocol: protocol,
        search: search,
    };
};
var useLocationBrowser = function () {
    var _a = react_1.useState(buildState('load')), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        var onPopstate = function () { return setState(buildState('popstate')); };
        var onPushstate = function () { return setState(buildState('pushstate')); };
        var onReplacestate = function () { return setState(buildState('replacestate')); };
        util_1.on(window, 'popstate', onPopstate);
        util_1.on(window, 'pushstate', onPushstate);
        util_1.on(window, 'replacestate', onReplacestate);
        return function () {
            util_1.off(window, 'popstate', onPopstate);
            util_1.off(window, 'pushstate', onPushstate);
            util_1.off(window, 'replacestate', onReplacestate);
        };
    }, []);
    return state;
};
var hasEventConstructor = typeof Event === 'function';
exports.default = util_1.isClient && hasEventConstructor ? useLocationBrowser : useLocationServer;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useLockBodyScroll.js":
/*!*****************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useLockBodyScroll.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
function getClosestBody(el) {
    if (!el) {
        return null;
    }
    else if (el.tagName === 'BODY') {
        return el;
    }
    else if (el.tagName === 'IFRAME') {
        var document_1 = el.contentDocument;
        return document_1 ? document_1.body : null;
    }
    else if (!el.offsetParent) {
        return null;
    }
    return getClosestBody(el.offsetParent);
}
exports.getClosestBody = getClosestBody;
function preventDefault(rawEvent) {
    var e = rawEvent || window.event;
    // Do not prevent if the event has more than one touch (usually meaning this is a multi touch gesture like pinch to zoom).
    if (e.touches.length > 1)
        return true;
    if (e.preventDefault)
        e.preventDefault();
    return false;
}
var isIosDevice = typeof window !== 'undefined' &&
    window.navigator &&
    window.navigator.platform &&
    /iP(ad|hone|od)/.test(window.navigator.platform);
var bodies = new Map();
var doc = typeof document === 'object' ? document : undefined;
var documentListenerAdded = false;
exports.default = !doc
    ? function useLockBodyMock(_locked, _elementRef) {
        if (_locked === void 0) { _locked = true; }
    }
    : function useLockBody(locked, elementRef) {
        if (locked === void 0) { locked = true; }
        elementRef = elementRef || react_1.useRef(doc.body);
        react_1.useEffect(function () {
            var body = getClosestBody(elementRef.current);
            if (!body) {
                return;
            }
            var bodyInfo = bodies.get(body);
            if (locked) {
                if (!bodyInfo) {
                    bodies.set(body, { counter: 1, initialOverflow: body.style.overflow });
                    if (isIosDevice) {
                        if (!documentListenerAdded) {
                            document.addEventListener('touchmove', preventDefault, { passive: false });
                            documentListenerAdded = true;
                        }
                    }
                    else {
                        body.style.overflow = 'hidden';
                    }
                }
                else {
                    bodies.set(body, { counter: bodyInfo.counter + 1, initialOverflow: bodyInfo.initialOverflow });
                }
            }
            else {
                if (bodyInfo) {
                    if (bodyInfo.counter === 1) {
                        bodies.delete(body);
                        if (isIosDevice) {
                            body.ontouchmove = null;
                            if (documentListenerAdded) {
                                document.removeEventListener('touchmove', preventDefault);
                                documentListenerAdded = false;
                            }
                        }
                        else {
                            body.style.overflow = bodyInfo.initialOverflow;
                        }
                    }
                    else {
                        bodies.set(body, { counter: bodyInfo.counter - 1, initialOverflow: bodyInfo.initialOverflow });
                    }
                }
            }
        }, [locked, elementRef.current]);
    };


/***/ }),

/***/ "../../../node_modules/react-use/lib/useLogger.js":
/*!*********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useLogger.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var useEffectOnce_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useEffectOnce */ "../../../node_modules/react-use/lib/useEffectOnce.js"));
var useUpdateEffect_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useUpdateEffect */ "../../../node_modules/react-use/lib/useUpdateEffect.js"));
var useLogger = function (componentName) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    useEffectOnce_1.default(function () {
        console.log.apply(console, tslib_1.__spreadArrays([componentName + " mounted"], rest));
        return function () { return console.log(componentName + " unmounted"); };
    });
    useUpdateEffect_1.default(function () {
        console.log.apply(console, tslib_1.__spreadArrays([componentName + " updated"], rest));
    });
};
exports.default = useLogger;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useLongPress.js":
/*!************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useLongPress.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var isTouchEvent = function (event) {
    return 'touches' in event;
};
var preventDefault = function (event) {
    if (!isTouchEvent(event))
        return;
    if (event.touches.length < 2 && event.preventDefault) {
        event.preventDefault();
    }
};
var useLongPress = function (callback, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.isPreventDefault, isPreventDefault = _c === void 0 ? true : _c, _d = _b.delay, delay = _d === void 0 ? 300 : _d;
    var timeout = react_1.useRef();
    var target = react_1.useRef();
    var start = react_1.useCallback(function (event) {
        // prevent ghost click on mobile devices
        if (isPreventDefault && event.target) {
            event.target.addEventListener('touchend', preventDefault, { passive: false });
            target.current = event.target;
        }
        timeout.current = setTimeout(function () { return callback(event); }, delay);
    }, [callback, delay]);
    var clear = react_1.useCallback(function () {
        // clearTimeout and removeEventListener
        timeout.current && clearTimeout(timeout.current);
        if (isPreventDefault && target.current) {
            target.current.removeEventListener('touchend', preventDefault);
        }
    }, []);
    return {
        onMouseDown: function (e) { return start(e); },
        onTouchStart: function (e) { return start(e); },
        onMouseUp: clear,
        onMouseLeave: clear,
        onTouchEnd: clear,
    };
};
exports.default = useLongPress;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useMap.js":
/*!******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useMap.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useMap = function (initialMap) {
    if (initialMap === void 0) { initialMap = {}; }
    var _a = react_1.useState(initialMap), map = _a[0], set = _a[1];
    var stableActions = react_1.useMemo(function () { return ({
        set: function (key, entry) {
            set(function (prevMap) {
                var _a;
                return (tslib_1.__assign(tslib_1.__assign({}, prevMap), (_a = {}, _a[key] = entry, _a)));
            });
        },
        setAll: function (newMap) {
            set(newMap);
        },
        remove: function (key) {
            set(function (prevMap) {
                var _a = prevMap, _b = key, omit = _a[_b], rest = tslib_1.__rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
                return rest;
            });
        },
        reset: function () { return set(initialMap); },
    }); }, [set]);
    var utils = tslib_1.__assign({ get: react_1.useCallback(function (key) { return map[key]; }, [map]) }, stableActions);
    return [map, utils];
};
exports.default = useMap;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useMeasure.js":
/*!**********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useMeasure.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var react_1 = __webpack_require__(/*! react */ "react");
var resize_observer_polyfill_1 = tslib_1.__importDefault(__webpack_require__(/*! resize-observer-polyfill */ "../../../node_modules/resize-observer-polyfill/dist/ResizeObserver.js"));
var useMeasure = function () {
    var _a = react_1.useState({
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    }), rect = _a[0], set = _a[1];
    var observer = react_1.useState(function () {
        return new resize_observer_polyfill_1.default(function (entries) {
            var entry = entries[0];
            if (entry) {
                set(entry.contentRect);
            }
        });
    })[0];
    var ref = react_1.useCallback(function (node) {
        observer.disconnect();
        if (node) {
            observer.observe(node);
        }
    }, [observer]);
    return [ref, rect];
};
exports.default = useMeasure;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useMedia.js":
/*!********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useMedia.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var util_1 = __webpack_require__(/*! ./util */ "../../../node_modules/react-use/lib/util.js");
var useMedia = function (query, defaultState) {
    if (defaultState === void 0) { defaultState = false; }
    var _a = react_1.useState(util_1.isClient ? function () { return window.matchMedia(query).matches; } : defaultState), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        var mounted = true;
        var mql = window.matchMedia(query);
        var onChange = function () {
            if (!mounted) {
                return;
            }
            setState(!!mql.matches);
        };
        mql.addListener(onChange);
        setState(mql.matches);
        return function () {
            mounted = false;
            mql.removeListener(onChange);
        };
    }, [query]);
    return state;
};
exports.default = useMedia;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useMediaDevices.js":
/*!***************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useMediaDevices.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var util_1 = __webpack_require__(/*! ./util */ "../../../node_modules/react-use/lib/util.js");
var noop = function () { };
var useMediaDevices = function () {
    var _a = react_1.useState({}), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        var mounted = true;
        var onChange = function () {
            navigator.mediaDevices
                .enumerateDevices()
                .then(function (devices) {
                if (mounted) {
                    setState({
                        devices: devices.map(function (_a) {
                            var deviceId = _a.deviceId, groupId = _a.groupId, kind = _a.kind, label = _a.label;
                            return ({ deviceId: deviceId, groupId: groupId, kind: kind, label: label });
                        }),
                    });
                }
            })
                .catch(noop);
        };
        util_1.on(navigator.mediaDevices, 'devicechange', onChange);
        onChange();
        return function () {
            mounted = false;
            util_1.off(navigator.mediaDevices, 'devicechange', onChange);
        };
    }, []);
    return state;
};
var useMediaDevicesMock = function () { return ({}); };
exports.default = typeof navigator === 'object' && !!navigator.mediaDevices ? useMediaDevices : useMediaDevicesMock;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useMediatedState.js":
/*!****************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useMediatedState.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
function useMediatedState(mediator, initialState) {
    var mediatorFn = react_1.useRef(mediator);
    var _a = react_1.useState(initialState), state = _a[0], setMediatedState = _a[1];
    var setState = react_1.useCallback(function (newState) {
        if (mediatorFn.current.length === 2) {
            mediatorFn.current(newState, setMediatedState);
        }
        else {
            setMediatedState(mediatorFn.current(newState));
        }
    }, [state]);
    return [state, setState];
}
exports.useMediatedState = useMediatedState;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useMethods.js":
/*!**********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useMethods.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var useMethods = function (createMethods, initialState) {
    var reducer = react_1.useMemo(function () { return function (reducerState, action) {
        var _a;
        return (_a = createMethods(reducerState))[action.type].apply(_a, action.payload);
    }; }, [createMethods]);
    var _a = react_1.useReducer(reducer, initialState), state = _a[0], dispatch = _a[1];
    var wrappedMethods = react_1.useMemo(function () {
        var actionTypes = Object.keys(createMethods(initialState));
        return actionTypes.reduce(function (acc, type) {
            acc[type] = function () {
                var payload = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    payload[_i] = arguments[_i];
                }
                return dispatch({ type: type, payload: payload });
            };
            return acc;
        }, {});
    }, [createMethods, initialState]);
    return [state, wrappedMethods];
};
exports.default = useMethods;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useMotion.js":
/*!*********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useMotion.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var util_1 = __webpack_require__(/*! ./util */ "../../../node_modules/react-use/lib/util.js");
var defaultState = {
    acceleration: {
        x: null,
        y: null,
        z: null,
    },
    accelerationIncludingGravity: {
        x: null,
        y: null,
        z: null,
    },
    rotationRate: {
        alpha: null,
        beta: null,
        gamma: null,
    },
    interval: 16,
};
var useMotion = function (initialState) {
    if (initialState === void 0) { initialState = defaultState; }
    var _a = react_1.useState(initialState), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        var handler = function (event) {
            var acceleration = event.acceleration, accelerationIncludingGravity = event.accelerationIncludingGravity, rotationRate = event.rotationRate, interval = event.interval;
            setState({
                acceleration: {
                    x: acceleration.x,
                    y: acceleration.y,
                    z: acceleration.z,
                },
                accelerationIncludingGravity: {
                    x: accelerationIncludingGravity.x,
                    y: accelerationIncludingGravity.y,
                    z: accelerationIncludingGravity.z,
                },
                rotationRate: {
                    alpha: rotationRate.alpha,
                    beta: rotationRate.beta,
                    gamma: rotationRate.gamma,
                },
                interval: interval,
            });
        };
        util_1.on(window, 'devicemotion', handler);
        return function () {
            util_1.off(window, 'devicemotion', handler);
        };
    }, []);
    return state;
};
exports.default = useMotion;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useMount.js":
/*!********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useMount.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var useEffectOnce_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useEffectOnce */ "../../../node_modules/react-use/lib/useEffectOnce.js"));
var useMount = function (fn) {
    useEffectOnce_1.default(function () {
        fn();
    });
};
exports.default = useMount;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useMountedState.js":
/*!***************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useMountedState.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
function useMountedState() {
    var mountedRef = react_1.useRef(false);
    var get = react_1.useCallback(function () { return mountedRef.current; }, []);
    react_1.useEffect(function () {
        mountedRef.current = true;
        return function () {
            mountedRef.current = false;
        };
    });
    return get;
}
exports.default = useMountedState;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useMouse.js":
/*!********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useMouse.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useRafState_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useRafState */ "../../../node_modules/react-use/lib/useRafState.js"));
var useMouse = function (ref) {
    if (true) {
        if (typeof ref !== 'object' || typeof ref.current === 'undefined') {
            console.error('useMouse expects a single ref argument.');
        }
    }
    var _a = useRafState_1.default({
        docX: 0,
        docY: 0,
        posX: 0,
        posY: 0,
        elX: 0,
        elY: 0,
        elH: 0,
        elW: 0,
    }), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        var moveHandler = function (event) {
            if (ref && ref.current) {
                var _a = ref.current.getBoundingClientRect(), left = _a.left, top_1 = _a.top, elW = _a.width, elH = _a.height;
                var posX = left + window.pageXOffset;
                var posY = top_1 + window.pageYOffset;
                var elX = event.pageX - posX;
                var elY = event.pageY - posY;
                setState({
                    docX: event.pageX,
                    docY: event.pageY,
                    posX: posX,
                    posY: posY,
                    elX: elX,
                    elY: elY,
                    elH: elH,
                    elW: elW,
                });
            }
        };
        document.addEventListener('mousemove', moveHandler);
        return function () {
            document.removeEventListener('mousemove', moveHandler);
        };
    }, [ref]);
    return state;
};
exports.default = useMouse;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useMouseHovered.js":
/*!***************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useMouseHovered.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var useHoverDirty_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useHoverDirty */ "../../../node_modules/react-use/lib/useHoverDirty.js"));
var useMouse_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useMouse */ "../../../node_modules/react-use/lib/useMouse.js"));
var nullRef = { current: null };
var useMouseHovered = function (ref, options) {
    if (options === void 0) { options = {}; }
    var whenHovered = !!options.whenHovered;
    var bound = !!options.bound;
    var isHovered = useHoverDirty_1.default(ref, whenHovered);
    var state = useMouse_1.default(whenHovered && !isHovered ? nullRef : ref);
    if (bound) {
        state.elX = Math.max(0, Math.min(state.elX, state.elW));
        state.elY = Math.max(0, Math.min(state.elY, state.elH));
    }
    return state;
};
exports.default = useMouseHovered;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useMultiStateValidator.js":
/*!**********************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useMultiStateValidator.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
function useMultiStateValidator(states, validator, initialValidity) {
    if (initialValidity === void 0) { initialValidity = [undefined]; }
    if (typeof states !== 'object') {
        throw new Error('states expected to be an object or array, got ' + typeof states);
    }
    var validatorInner = react_1.useRef(validator);
    var statesInner = react_1.useRef(states);
    validatorInner.current = validator;
    statesInner.current = states;
    var _a = react_1.useState(initialValidity), validity = _a[0], setValidity = _a[1];
    var validate = react_1.useCallback(function () {
        if (validatorInner.current.length >= 2) {
            validatorInner.current(statesInner.current, setValidity);
        }
        else {
            setValidity(validatorInner.current(statesInner.current));
        }
    }, [setValidity]);
    react_1.useEffect(function () {
        validate();
    }, Object.values(states));
    return [validity, validate];
}
exports.useMultiStateValidator = useMultiStateValidator;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useNetwork.js":
/*!**********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useNetwork.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var util_1 = __webpack_require__(/*! ./util */ "../../../node_modules/react-use/lib/util.js");
var getConnection = function () {
    if (typeof navigator !== 'object') {
        return null;
    }
    var nav = navigator;
    return nav.connection || nav.mozConnection || nav.webkitConnection;
};
var getConnectionState = function () {
    var connection = getConnection();
    if (!connection) {
        return {};
    }
    var downlink = connection.downlink, downlinkMax = connection.downlinkMax, effectiveType = connection.effectiveType, type = connection.type, rtt = connection.rtt;
    return {
        downlink: downlink,
        downlinkMax: downlinkMax,
        effectiveType: effectiveType,
        type: type,
        rtt: rtt,
    };
};
var useNetwork = function (initialState) {
    if (initialState === void 0) { initialState = {}; }
    var _a = react_1.useState(initialState), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        var localState = state;
        var localSetState = function (patch) {
            localState = tslib_1.__assign(tslib_1.__assign({}, localState), patch);
            setState(localState);
        };
        var connection = getConnection();
        var onOnline = function () {
            localSetState({
                online: true,
                since: new Date(),
            });
        };
        var onOffline = function () {
            localSetState({
                online: false,
                since: new Date(),
            });
        };
        var onConnectionChange = function () {
            localSetState(getConnectionState());
        };
        util_1.on(window, 'online', onOnline);
        util_1.on(window, 'offline', onOffline);
        if (connection) {
            util_1.on(connection, 'change', onConnectionChange);
            localSetState(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, state), { online: navigator.onLine, since: undefined }), getConnectionState()));
        }
        return function () {
            util_1.off(window, 'online', onOnline);
            util_1.off(window, 'offline', onOffline);
            if (connection) {
                util_1.off(connection, 'change', onConnectionChange);
            }
        };
    }, []);
    return state;
};
exports.default = useNetwork;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useNumber.js":
/*!*********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useNumber.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var useCounter_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useCounter */ "../../../node_modules/react-use/lib/useCounter.js"));
exports.default = useCounter_1.default;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useObservable.js":
/*!*************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useObservable.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var react_1 = __webpack_require__(/*! react */ "react");
var useIsomorphicLayoutEffect_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useIsomorphicLayoutEffect */ "../../../node_modules/react-use/lib/useIsomorphicLayoutEffect.js"));
function useObservable(observable$, initialValue) {
    var _a = react_1.useState(initialValue), value = _a[0], update = _a[1];
    useIsomorphicLayoutEffect_1.default(function () {
        var s = observable$.subscribe(update);
        return function () { return s.unsubscribe(); };
    }, [observable$]);
    return value;
}
exports.default = useObservable;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useOrientation.js":
/*!**************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useOrientation.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var util_1 = __webpack_require__(/*! ./util */ "../../../node_modules/react-use/lib/util.js");
var defaultState = {
    angle: 0,
    type: 'landscape-primary',
};
var useOrientation = function (initialState) {
    if (initialState === void 0) { initialState = defaultState; }
    var _a = react_1.useState(initialState), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        var mounted = true;
        var onChange = function () {
            if (mounted) {
                var orientation_1 = screen.orientation;
                if (orientation_1) {
                    var angle = orientation_1.angle, type = orientation_1.type;
                    setState({ angle: angle, type: type });
                }
                else if (window.orientation) {
                    setState({
                        angle: typeof window.orientation === 'number' ? window.orientation : 0,
                        type: '',
                    });
                }
                else {
                    setState(initialState);
                }
            }
        };
        util_1.on(window, 'orientationchange', onChange);
        onChange();
        return function () {
            mounted = false;
            util_1.off(window, 'orientationchange', onChange);
        };
    }, []);
    return state;
};
exports.default = useOrientation;


/***/ }),

/***/ "../../../node_modules/react-use/lib/usePageLeave.js":
/*!************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/usePageLeave.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var usePageLeave = function (onPageLeave, args) {
    if (args === void 0) { args = []; }
    react_1.useEffect(function () {
        if (!onPageLeave) {
            return;
        }
        var handler = function (event) {
            event = event ? event : window.event;
            var from = event.relatedTarget || event.toElement;
            if (!from || from.nodeName === 'HTML') {
                onPageLeave();
            }
        };
        document.addEventListener('mouseout', handler);
        return function () {
            document.removeEventListener('mouseout', handler);
        };
    }, args);
};
exports.default = usePageLeave;


/***/ }),

/***/ "../../../node_modules/react-use/lib/usePermission.js":
/*!*************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/usePermission.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var util_1 = __webpack_require__(/*! ./util */ "../../../node_modules/react-use/lib/util.js");
var noop = function () { };
var usePermission = function (permissionDesc) {
    var mounted = true;
    var permissionStatus = null;
    var _a = react_1.useState(''), state = _a[0], setState = _a[1];
    var onChange = function () {
        if (mounted && permissionStatus) {
            setState(permissionStatus.state);
        }
    };
    var changeState = function () {
        onChange();
        util_1.on(permissionStatus, 'change', onChange);
    };
    react_1.useEffect(function () {
        navigator.permissions
            .query(permissionDesc)
            .then(function (status) {
            permissionStatus = status;
            changeState();
        })
            .catch(noop);
        return function () {
            mounted = false;
            permissionStatus && util_1.off(permissionStatus, 'change', onChange);
        };
    }, []);
    return state;
};
exports.default = usePermission;


/***/ }),

/***/ "../../../node_modules/react-use/lib/usePrevious.js":
/*!***********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/usePrevious.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var usePrevious = function (state) {
    var ref = react_1.useRef();
    react_1.useEffect(function () {
        ref.current = state;
    });
    return ref.current;
};
exports.default = usePrevious;


/***/ }),

/***/ "../../../node_modules/react-use/lib/usePreviousDistinct.js":
/*!*******************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/usePreviousDistinct.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var useFirstMountState_1 = __webpack_require__(/*! ./useFirstMountState */ "../../../node_modules/react-use/lib/useFirstMountState.js");
var strictEquals = function (prev, next) { return prev === next; };
function usePreviousDistinct(value, compare) {
    if (compare === void 0) { compare = strictEquals; }
    var prevRef = react_1.useRef();
    var curRef = react_1.useRef(value);
    var isFirstMount = useFirstMountState_1.useFirstMountState();
    if (!isFirstMount && !compare(curRef.current, value)) {
        prevRef.current = curRef.current;
        curRef.current = value;
    }
    return prevRef.current;
}
exports.default = usePreviousDistinct;


/***/ }),

/***/ "../../../node_modules/react-use/lib/usePromise.js":
/*!**********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/usePromise.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useMountedState_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useMountedState */ "../../../node_modules/react-use/lib/useMountedState.js"));
var usePromise = function () {
    var isMounted = useMountedState_1.default();
    return react_1.useCallback(function (promise) {
        return new Promise(function (resolve, reject) {
            var onValue = function (value) {
                isMounted() && resolve(value);
            };
            var onError = function (error) {
                isMounted() && reject(error);
            };
            promise.then(onValue, onError);
        });
    }, []);
};
exports.default = usePromise;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useQueue.js":
/*!********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useQueue.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var react_1 = __webpack_require__(/*! react */ "react");
var useQueue = function (initialValue) {
    if (initialValue === void 0) { initialValue = []; }
    var _a = react_1.useState(initialValue), state = _a[0], set = _a[1];
    return {
        add: function (value) {
            set(function (queue) { return tslib_1.__spreadArrays(queue, [value]); });
        },
        remove: function () {
            var result;
            set(function (_a) {
                var first = _a[0], rest = _a.slice(1);
                result = first;
                return rest;
            });
            return result;
        },
        get first() {
            return state[0];
        },
        get last() {
            return state[state.length - 1];
        },
        get size() {
            return state.length;
        },
    };
};
exports.default = useQueue;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useRaf.js":
/*!******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useRaf.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var useRaf = function (ms, delay) {
    if (ms === void 0) { ms = 1e12; }
    if (delay === void 0) { delay = 0; }
    var _a = react_1.useState(0), elapsed = _a[0], set = _a[1];
    react_1.useLayoutEffect(function () {
        var raf;
        var timerStop;
        var start;
        var onFrame = function () {
            var time = Math.min(1, (Date.now() - start) / ms);
            set(time);
            loop();
        };
        var loop = function () {
            raf = requestAnimationFrame(onFrame);
        };
        var onStart = function () {
            timerStop = setTimeout(function () {
                cancelAnimationFrame(raf);
                set(1);
            }, ms);
            start = Date.now();
            loop();
        };
        var timerDelay = setTimeout(onStart, delay);
        return function () {
            clearTimeout(timerStop);
            clearTimeout(timerDelay);
            cancelAnimationFrame(raf);
        };
    }, [ms, delay]);
    return elapsed;
};
exports.default = useRaf;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useRafLoop.js":
/*!**********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useRafLoop.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
function useRafLoop(callback) {
    var raf = react_1.useRef(null);
    var _a = react_1.useState(true), isActive = _a[0], setIsActive = _a[1];
    function loopStep() {
        callback();
        raf.current = requestAnimationFrame(loopStep);
    }
    function loopStop() {
        setIsActive(false);
    }
    function loopStart() {
        setIsActive(true);
    }
    function clearCurrentLoop() {
        raf.current && cancelAnimationFrame(raf.current);
    }
    react_1.useEffect(function () { return clearCurrentLoop; }, []);
    react_1.useEffect(function () {
        clearCurrentLoop();
        isActive && (raf.current = requestAnimationFrame(loopStep));
        return clearCurrentLoop;
    }, [isActive, callback]);
    return [loopStop, isActive, loopStart];
}
exports.default = useRafLoop;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useRafState.js":
/*!***********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useRafState.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var react_1 = __webpack_require__(/*! react */ "react");
var useUnmount_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useUnmount */ "../../../node_modules/react-use/lib/useUnmount.js"));
var useRafState = function (initialState) {
    var frame = react_1.useRef(0);
    var _a = react_1.useState(initialState), state = _a[0], setState = _a[1];
    var setRafState = react_1.useCallback(function (value) {
        cancelAnimationFrame(frame.current);
        frame.current = requestAnimationFrame(function () {
            setState(value);
        });
    }, []);
    useUnmount_1.default(function () {
        cancelAnimationFrame(frame.current);
    });
    return [state, setRafState];
};
exports.default = useRafState;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useRendersCount.js":
/*!***************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useRendersCount.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
function useRendersCount() {
    return ++react_1.useRef(0).current;
}
exports.useRendersCount = useRendersCount;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useScroll.js":
/*!*********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useScroll.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useRafState_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useRafState */ "../../../node_modules/react-use/lib/useRafState.js"));
var useScroll = function (ref) {
    if (true) {
        if (typeof ref !== 'object' || typeof ref.current === 'undefined') {
            console.error('`useScroll` expects a single ref argument.');
        }
    }
    var _a = useRafState_1.default({
        x: 0,
        y: 0,
    }), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        var handler = function () {
            if (ref.current) {
                setState({
                    x: ref.current.scrollLeft,
                    y: ref.current.scrollTop,
                });
            }
        };
        if (ref.current) {
            ref.current.addEventListener('scroll', handler, {
                capture: false,
                passive: true,
            });
        }
        return function () {
            if (ref.current) {
                ref.current.removeEventListener('scroll', handler);
            }
        };
    }, [ref]);
    return state;
};
exports.default = useScroll;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useScrollbarWidth.js":
/*!*****************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useScrollbarWidth.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var scrollbar_width_1 = __webpack_require__(/*! @xobotyi/scrollbar-width */ "../../../node_modules/@xobotyi/scrollbar-width/dist/index.js");
var react_1 = __webpack_require__(/*! react */ "react");
function useScrollbarWidth() {
    var _a = react_1.useState(scrollbar_width_1.scrollbarWidth()), sbw = _a[0], setSbw = _a[1];
    // this needed to ensure the scrollbar width in case hook called before the DOM is ready
    react_1.useEffect(function () {
        if (typeof sbw !== 'undefined') {
            return;
        }
        var raf = requestAnimationFrame(function () {
            setSbw(scrollbar_width_1.scrollbarWidth());
        });
        return function () { return cancelAnimationFrame(raf); };
    }, []);
    return sbw;
}
exports.useScrollbarWidth = useScrollbarWidth;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useScrolling.js":
/*!************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useScrolling.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useScrolling = function (ref) {
    var _a = react_1.useState(false), scrolling = _a[0], setScrolling = _a[1];
    react_1.useEffect(function () {
        if (ref.current) {
            var scrollingTimeout_1;
            var handleScrollEnd_1 = function () {
                setScrolling(false);
            };
            var handleScroll_1 = function () {
                setScrolling(true);
                clearTimeout(scrollingTimeout_1);
                scrollingTimeout_1 = setTimeout(function () { return handleScrollEnd_1(); }, 150);
            };
            ref.current.addEventListener('scroll', handleScroll_1, false);
            return function () {
                if (ref.current) {
                    ref.current.removeEventListener('scroll', handleScroll_1, false);
                }
            };
        }
        return function () { };
    }, [ref]);
    return scrolling;
};
exports.default = useScrolling;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useSearchParam.js":
/*!**************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useSearchParam.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var getValue = function (search, param) { return new URLSearchParams(search).get(param); };
var useSearchParam = function (param) {
    var _a = react_1.useState(function () { return getValue(location.search, param); }), value = _a[0], setValue = _a[1];
    react_1.useEffect(function () {
        var onChange = function () {
            setValue(getValue(location.search, param));
        };
        window.addEventListener('popstate', onChange);
        window.addEventListener('pushstate', onChange);
        window.addEventListener('replacestate', onChange);
        return function () {
            window.removeEventListener('popstate', onChange);
            window.removeEventListener('pushstate', onChange);
            window.removeEventListener('replacestate', onChange);
        };
    }, []);
    return value;
};
var useSearchParamServer = function () { return null; };
exports.default = typeof window === 'object' ? useSearchParam : useSearchParamServer;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useSessionStorage.js":
/*!*****************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useSessionStorage.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var util_1 = __webpack_require__(/*! ./util */ "../../../node_modules/react-use/lib/util.js");
var useSessionStorage = function (key, initialValue, raw) {
    if (!util_1.isClient) {
        return [initialValue, function () { }];
    }
    var _a = react_1.useState(function () {
        try {
            var sessionStorageValue = sessionStorage.getItem(key);
            if (typeof sessionStorageValue !== 'string') {
                sessionStorage.setItem(key, raw ? String(initialValue) : JSON.stringify(initialValue));
                return initialValue;
            }
            else {
                return raw ? sessionStorageValue : JSON.parse(sessionStorageValue || 'null');
            }
        }
        catch (_a) {
            // If user is in private mode or has storage restriction
            // sessionStorage can throw. JSON.parse and JSON.stringify
            // cat throw, too.
            return initialValue;
        }
    }), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        try {
            var serializedState = raw ? String(state) : JSON.stringify(state);
            sessionStorage.setItem(key, serializedState);
        }
        catch (_a) {
            // If user is in private mode or has storage restriction
            // sessionStorage can throw. Also JSON.stringify can throw.
        }
    });
    return [state, setState];
};
exports.default = useSessionStorage;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useSet.js":
/*!******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useSet.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useSet = function (initialSet) {
    if (initialSet === void 0) { initialSet = new Set(); }
    var _a = react_1.useState(initialSet), set = _a[0], setSet = _a[1];
    var stableActions = react_1.useMemo(function () {
        var add = function (item) { return setSet(function (prevSet) { return new Set(tslib_1.__spreadArrays(Array.from(prevSet), [item])); }); };
        var remove = function (item) { return setSet(function (prevSet) { return new Set(Array.from(prevSet).filter(function (i) { return i !== item; })); }); };
        var toggle = function (item) {
            return setSet(function (prevSet) {
                return prevSet.has(item)
                    ? new Set(Array.from(prevSet).filter(function (i) { return i !== item; }))
                    : new Set(tslib_1.__spreadArrays(Array.from(prevSet), [item]));
            });
        };
        return { add: add, remove: remove, toggle: toggle, reset: function () { return setSet(initialSet); } };
    }, [setSet]);
    var utils = tslib_1.__assign({ has: react_1.useCallback(function (item) { return set.has(item); }, [set]) }, stableActions);
    return [set, utils];
};
exports.default = useSet;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useSetState.js":
/*!***********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useSetState.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var useSetState = function (initialState) {
    if (initialState === void 0) { initialState = {}; }
    var _a = react_1.useState(initialState), state = _a[0], set = _a[1];
    var setState = react_1.useCallback(function (patch) {
        set(function (prevState) { return Object.assign({}, prevState, patch instanceof Function ? patch(prevState) : patch); });
    }, [set]);
    return [state, setState];
};
exports.default = useSetState;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useShallowCompareEffect.js":
/*!***********************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useShallowCompareEffect.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var fast_shallow_equal_1 = __webpack_require__(/*! fast-shallow-equal */ "../../../node_modules/fast-shallow-equal/index.js");
var useCustomCompareEffect_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useCustomCompareEffect */ "../../../node_modules/react-use/lib/useCustomCompareEffect.js"));
var isPrimitive = function (val) { return val !== Object(val); };
var shallowEqualDepsList = function (prevDeps, nextDeps) {
    return prevDeps.every(function (dep, index) { return fast_shallow_equal_1.equal(dep, nextDeps[index]); });
};
var useShallowCompareEffect = function (effect, deps) {
    if (true) {
        if (!(deps instanceof Array) || !deps.length) {
            console.warn('`useShallowCompareEffect` should not be used with no dependencies. Use React.useEffect instead.');
        }
        if (deps.every(isPrimitive)) {
            console.warn('`useShallowCompareEffect` should not be used with dependencies that are all primitive values. Use React.useEffect instead.');
        }
    }
    useCustomCompareEffect_1.default(effect, deps, shallowEqualDepsList);
};
exports.default = useShallowCompareEffect;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useSize.js":
/*!*******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useSize.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var React = tslib_1.__importStar(__webpack_require__(/*! react */ "react"));
var util_1 = __webpack_require__(/*! ./util */ "../../../node_modules/react-use/lib/util.js");
var useState = React.useState, useEffect = React.useEffect, useRef = React.useRef;
var DRAF = function (callback) { return setTimeout(callback, 35); };
var useSize = function (element, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.width, width = _c === void 0 ? Infinity : _c, _d = _b.height, height = _d === void 0 ? Infinity : _d;
    if (!util_1.isClient) {
        return [typeof element === 'function' ? element({ width: width, height: height }) : element, { width: width, height: height }];
    }
    var _e = useState({ width: width, height: height }), state = _e[0], setState = _e[1];
    if (typeof element === 'function') {
        element = element(state);
    }
    var style = element.props.style || {};
    var ref = useRef(null);
    var window = null;
    var setSize = function () {
        var iframe = ref.current;
        var size = iframe
            ? {
                width: iframe.offsetWidth,
                height: iframe.offsetHeight,
            }
            : { width: width, height: height };
        setState(size);
    };
    var onWindow = function (windowToListenOn) {
        windowToListenOn.addEventListener('resize', setSize);
        DRAF(setSize);
    };
    useEffect(function () {
        var iframe = ref.current;
        if (!iframe) {
            // iframe will be undefined if component is already unmounted
            return;
        }
        if (iframe.contentWindow) {
            window = iframe.contentWindow;
            onWindow(window);
        }
        else {
            var onLoad_1 = function () {
                iframe.removeEventListener('load', onLoad_1);
                window = iframe.contentWindow;
                onWindow(window);
            };
            iframe.addEventListener('load', onLoad_1);
        }
        return function () {
            if (window && window.removeEventListener) {
                window.removeEventListener('resize', setSize);
            }
        };
    }, []);
    style.position = 'relative';
    var sized = React.cloneElement.apply(React, tslib_1.__spreadArrays([element,
        { style: style }], tslib_1.__spreadArrays([
        React.createElement('iframe', {
            ref: ref,
            style: {
                background: 'transparent',
                border: 'none',
                height: '100%',
                left: 0,
                position: 'absolute',
                top: 0,
                width: '100%',
                zIndex: -1,
            },
        })
    ], React.Children.toArray(element.props.children))));
    return [sized, state];
};
exports.default = useSize;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useSlider.js":
/*!*********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useSlider.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var util_1 = __webpack_require__(/*! ./util */ "../../../node_modules/react-use/lib/util.js");
var useMountedState_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useMountedState */ "../../../node_modules/react-use/lib/useMountedState.js"));
var useSetState_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useSetState */ "../../../node_modules/react-use/lib/useSetState.js"));
var noop = function () { };
var useSlider = function (ref, options) {
    if (options === void 0) { options = {}; }
    var isMounted = useMountedState_1.default();
    var isSliding = react_1.useRef(false);
    var frame = react_1.useRef(0);
    var _a = useSetState_1.default({
        isSliding: false,
        value: 0,
    }), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        if (util_1.isClient) {
            var styles = options.styles === undefined ? true : options.styles;
            var reverse_1 = options.reverse === undefined ? false : options.reverse;
            if (ref.current && styles) {
                ref.current.style.userSelect = 'none';
            }
            var startScrubbing_1 = function () {
                if (!isSliding.current && isMounted()) {
                    (options.onScrubStart || noop)();
                    isSliding.current = true;
                    setState({ isSliding: true });
                    bindEvents_1();
                }
            };
            var stopScrubbing_1 = function () {
                if (isSliding.current && isMounted()) {
                    (options.onScrubStop || noop)();
                    isSliding.current = false;
                    setState({ isSliding: false });
                    unbindEvents_1();
                }
            };
            var onMouseDown_1 = function (event) {
                startScrubbing_1();
                onMouseMove_1(event);
            };
            var onMouseMove_1 = options.vertical
                ? function (event) { return onScrub_1(event.clientY); }
                : function (event) { return onScrub_1(event.clientX); };
            var onTouchStart_1 = function (event) {
                startScrubbing_1();
                onTouchMove_1(event);
            };
            var onTouchMove_1 = options.vertical
                ? function (event) { return onScrub_1(event.changedTouches[0].clientY); }
                : function (event) { return onScrub_1(event.changedTouches[0].clientX); };
            var bindEvents_1 = function () {
                util_1.on(document, 'mousemove', onMouseMove_1);
                util_1.on(document, 'mouseup', stopScrubbing_1);
                util_1.on(document, 'touchmove', onTouchMove_1);
                util_1.on(document, 'touchend', stopScrubbing_1);
            };
            var unbindEvents_1 = function () {
                util_1.off(document, 'mousemove', onMouseMove_1);
                util_1.off(document, 'mouseup', stopScrubbing_1);
                util_1.off(document, 'touchmove', onTouchMove_1);
                util_1.off(document, 'touchend', stopScrubbing_1);
            };
            var onScrub_1 = function (clientXY) {
                cancelAnimationFrame(frame.current);
                frame.current = requestAnimationFrame(function () {
                    if (isMounted() && ref.current) {
                        var rect = ref.current.getBoundingClientRect();
                        var pos = options.vertical ? rect.top : rect.left;
                        var length_1 = options.vertical ? rect.height : rect.width;
                        // Prevent returning 0 when element is hidden by CSS
                        if (!length_1) {
                            return;
                        }
                        var value = (clientXY - pos) / length_1;
                        if (value > 1) {
                            value = 1;
                        }
                        else if (value < 0) {
                            value = 0;
                        }
                        if (reverse_1) {
                            value = 1 - value;
                        }
                        setState({
                            value: value,
                        });
                        (options.onScrub || noop)(value);
                    }
                });
            };
            util_1.on(ref.current, 'mousedown', onMouseDown_1);
            util_1.on(ref.current, 'touchstart', onTouchStart_1);
            return function () {
                util_1.off(ref.current, 'mousedown', onMouseDown_1);
                util_1.off(ref.current, 'touchstart', onTouchStart_1);
            };
        }
        else {
            return undefined;
        }
    }, [ref, options.vertical]);
    return state;
};
exports.default = useSlider;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useSpeech.js":
/*!*********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useSpeech.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var react_1 = __webpack_require__(/*! react */ "react");
var useMount_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useMount */ "../../../node_modules/react-use/lib/useMount.js"));
var useSetState_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useSetState */ "../../../node_modules/react-use/lib/useSetState.js"));
var voices = typeof window === 'object' && typeof window.speechSynthesis === 'object' ? window.speechSynthesis.getVoices() : [];
var useSpeech = function (text, opts) {
    if (opts === void 0) { opts = {}; }
    var _a = useSetState_1.default({
        isPlaying: false,
        lang: opts.lang || 'default',
        voice: opts.voice || voices[0],
        rate: opts.rate || 1,
        pitch: opts.pitch || 1,
        volume: opts.volume || 1,
    }), state = _a[0], setState = _a[1];
    var uterranceRef = react_1.useRef(null);
    useMount_1.default(function () {
        var utterance = new SpeechSynthesisUtterance(text);
        opts.lang && (utterance.lang = opts.lang);
        opts.voice && (utterance.voice = opts.voice);
        utterance.rate = opts.rate || 1;
        utterance.pitch = opts.pitch || 1;
        utterance.volume = opts.volume || 1;
        utterance.onstart = function () { return setState({ isPlaying: true }); };
        utterance.onresume = function () { return setState({ isPlaying: true }); };
        utterance.onend = function () { return setState({ isPlaying: false }); };
        utterance.onpause = function () { return setState({ isPlaying: false }); };
        uterranceRef.current = utterance;
        window.speechSynthesis.speak(uterranceRef.current);
    });
    return state;
};
exports.default = useSpeech;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useStartTyping.js":
/*!**************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useStartTyping.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var isFocusedElementEditable = function () {
    var activeElement = document.activeElement, body = document.body;
    if (!activeElement) {
        return false;
    }
    // If not element has focus, we assume it is not editable, too.
    if (activeElement === body) {
        return false;
    }
    // Assume <input> and <textarea> elements are editable.
    switch (activeElement.tagName) {
        case 'INPUT':
        case 'TEXTAREA':
            return true;
    }
    // Check if any other focused element id editable.
    return activeElement.hasAttribute('contenteditable');
};
var isTypedCharGood = function (_a) {
    var keyCode = _a.keyCode, metaKey = _a.metaKey, ctrlKey = _a.ctrlKey, altKey = _a.altKey;
    if (metaKey || ctrlKey || altKey) {
        return false;
    }
    // 0...9
    if (keyCode >= 48 && keyCode <= 57) {
        return true;
    }
    // a...z
    if (keyCode >= 65 && keyCode <= 90) {
        return true;
    }
    // All other keys.
    return false;
};
var useStartTyping = function (onStartTyping) {
    react_1.useLayoutEffect(function () {
        var keydown = function (event) {
            !isFocusedElementEditable() && isTypedCharGood(event) && onStartTyping(event);
        };
        document.addEventListener('keydown', keydown);
        return function () {
            document.removeEventListener('keydown', keydown);
        };
    }, []);
};
exports.default = useStartTyping;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useStateList.js":
/*!************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useStateList.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useMountedState_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useMountedState */ "../../../node_modules/react-use/lib/useMountedState.js"));
var useUpdate_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useUpdate */ "../../../node_modules/react-use/lib/useUpdate.js"));
var useUpdateEffect_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useUpdateEffect */ "../../../node_modules/react-use/lib/useUpdateEffect.js"));
function useStateList(stateSet) {
    if (stateSet === void 0) { stateSet = []; }
    var isMounted = useMountedState_1.default();
    var update = useUpdate_1.default();
    var index = react_1.useRef(0);
    // If new state list is shorter that before - switch to the last element
    useUpdateEffect_1.default(function () {
        if (stateSet.length <= index.current) {
            index.current = stateSet.length - 1;
            update();
        }
    }, [stateSet.length]);
    var actions = react_1.useMemo(function () { return ({
        next: function () { return actions.setStateAt(index.current + 1); },
        prev: function () { return actions.setStateAt(index.current - 1); },
        setStateAt: function (newIndex) {
            // do nothing on unmounted component
            if (!isMounted())
                return;
            // do nothing on empty states list
            if (!stateSet.length)
                return;
            // in case new index is equal current - do nothing
            if (newIndex === index.current)
                return;
            // it gives the ability to travel through the left and right borders.
            // 4ex: if list contains 5 elements, attempt to set index 9 will bring use to 5th element
            // in case of negative index it will start counting from the right, so -17 will bring us to 4th element
            index.current = newIndex >= 0 ? newIndex % stateSet.length : stateSet.length + (newIndex % stateSet.length);
            update();
        },
        setState: function (state) {
            // do nothing on unmounted component
            if (!isMounted())
                return;
            var newIndex = stateSet.length ? stateSet.indexOf(state) : -1;
            if (newIndex === -1) {
                throw new Error("State '" + state + "' is not a valid state (does not exist in state list)");
            }
            index.current = newIndex;
            update();
        },
    }); }, [stateSet]);
    return tslib_1.__assign({ state: stateSet[index.current], currentIndex: index.current }, actions);
}
exports.default = useStateList;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useStateValidator.js":
/*!*****************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useStateValidator.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
function useStateValidator(state, validator, initialState) {
    if (initialState === void 0) { initialState = [undefined]; }
    var validatorInner = react_1.useRef(validator);
    var stateInner = react_1.useRef(state);
    validatorInner.current = validator;
    stateInner.current = state;
    var _a = react_1.useState(initialState), validity = _a[0], setValidity = _a[1];
    var validate = react_1.useCallback(function () {
        if (validatorInner.current.length >= 2) {
            validatorInner.current(stateInner.current, setValidity);
        }
        else {
            setValidity(validatorInner.current(stateInner.current));
        }
    }, [setValidity]);
    react_1.useEffect(function () {
        validate();
    }, [state]);
    return [validity, validate];
}
exports.default = useStateValidator;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useStateWithHistory.js":
/*!*******************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useStateWithHistory.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useFirstMountState_1 = __webpack_require__(/*! ./useFirstMountState */ "../../../node_modules/react-use/lib/useFirstMountState.js");
var resolveHookState_1 = __webpack_require__(/*! ./util/resolveHookState */ "../../../node_modules/react-use/lib/util/resolveHookState.js");
function useStateWithHistory(initialState, capacity, initialHistory) {
    if (capacity === void 0) { capacity = 10; }
    if (capacity < 1) {
        throw new Error("Capacity has to be greater than 1, got '" + capacity + "'");
    }
    var isFirstMount = useFirstMountState_1.useFirstMountState();
    var _a = react_1.useState(initialState), state = _a[0], innerSetState = _a[1];
    var history = react_1.useRef((initialHistory !== null && initialHistory !== void 0 ? initialHistory : []));
    var historyPosition = react_1.useRef(0);
    // do the states manipulation only on first mount, no sense to load re-renders with useless calculations
    if (isFirstMount) {
        if (history.current.length) {
            // if last element of history !== initial - push initial to history
            if (history.current[history.current.length - 1] !== initialState) {
                history.current.push(initialState);
            }
            // if initial history bigger that capacity - crop the first elements out
            if (history.current.length > capacity) {
                history.current = history.current.slice(history.current.length - capacity);
            }
        }
        else {
            // initiate the history with initial state
            history.current.push(initialState);
        }
        historyPosition.current = history.current.length && history.current.length - 1;
    }
    var setState = react_1.useCallback(function (newState) {
        innerSetState(function (currentState) {
            newState = resolveHookState_1.resolveHookState(newState);
            // is state has changed
            if (newState !== currentState) {
                // if current position is not the last - pop element to the right
                if (historyPosition.current < history.current.length - 1) {
                    history.current = history.current.slice(0, historyPosition.current + 1);
                }
                historyPosition.current = history.current.push(newState) - 1;
                // if capacity is reached - shift first elements
                if (history.current.length > capacity) {
                    history.current = history.current.slice(history.current.length - capacity);
                }
            }
            return newState;
        });
    }, [state, capacity]);
    var historyState = react_1.useMemo(function () { return ({
        history: history.current,
        position: historyPosition.current,
        capacity: capacity,
        back: function (amount) {
            if (amount === void 0) { amount = 1; }
            // don't do anything if we already at the left border
            if (!historyPosition.current) {
                return;
            }
            innerSetState(function () {
                historyPosition.current -= Math.min(amount, historyPosition.current);
                return history.current[historyPosition.current];
            });
        },
        forward: function (amount) {
            if (amount === void 0) { amount = 1; }
            // don't do anything if we already at the right border
            if (historyPosition.current === history.current.length - 1) {
                return;
            }
            innerSetState(function () {
                historyPosition.current = Math.min(historyPosition.current + amount, history.current.length - 1);
                return history.current[historyPosition.current];
            });
        },
        go: function (position) {
            if (position === historyPosition.current) {
                return;
            }
            innerSetState(function () {
                historyPosition.current =
                    position < 0
                        ? Math.max(history.current.length + position, 0)
                        : Math.min(history.current.length - 1, position);
                return history.current[historyPosition.current];
            });
        },
    }); }, [state]);
    return [state, setState, historyState];
}
exports.useStateWithHistory = useStateWithHistory;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useThrottle.js":
/*!***********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useThrottle.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useUnmount_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useUnmount */ "../../../node_modules/react-use/lib/useUnmount.js"));
var useThrottle = function (value, ms) {
    if (ms === void 0) { ms = 200; }
    var _a = react_1.useState(value), state = _a[0], setState = _a[1];
    var timeout = react_1.useRef();
    var nextValue = react_1.useRef(null);
    var hasNextValue = react_1.useRef(0);
    react_1.useEffect(function () {
        if (!timeout.current) {
            setState(value);
            var timeoutCallback_1 = function () {
                if (hasNextValue.current) {
                    hasNextValue.current = false;
                    setState(nextValue.current);
                    timeout.current = setTimeout(timeoutCallback_1, ms);
                }
                else {
                    timeout.current = undefined;
                }
            };
            timeout.current = setTimeout(timeoutCallback_1, ms);
        }
        else {
            nextValue.current = value;
            hasNextValue.current = true;
        }
    }, [value]);
    useUnmount_1.default(function () {
        timeout.current && clearTimeout(timeout.current);
    });
    return state;
};
exports.default = useThrottle;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useThrottleFn.js":
/*!*************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useThrottleFn.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useUnmount_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useUnmount */ "../../../node_modules/react-use/lib/useUnmount.js"));
var useThrottleFn = function (fn, ms, args) {
    if (ms === void 0) { ms = 200; }
    var _a = react_1.useState(null), state = _a[0], setState = _a[1];
    var timeout = react_1.useRef();
    var nextArgs = react_1.useRef();
    react_1.useEffect(function () {
        if (!timeout.current) {
            setState(fn.apply(void 0, args));
            var timeoutCallback_1 = function () {
                if (nextArgs.current) {
                    setState(fn.apply(void 0, nextArgs.current));
                    nextArgs.current = undefined;
                    timeout.current = setTimeout(timeoutCallback_1, ms);
                }
                else {
                    timeout.current = undefined;
                }
            };
            timeout.current = setTimeout(timeoutCallback_1, ms);
        }
        else {
            nextArgs.current = args;
        }
    }, args);
    useUnmount_1.default(function () {
        timeout.current && clearTimeout(timeout.current);
    });
    return state;
};
exports.default = useThrottleFn;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useTimeout.js":
/*!**********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useTimeout.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var useTimeoutFn_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useTimeoutFn */ "../../../node_modules/react-use/lib/useTimeoutFn.js"));
var useUpdate_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useUpdate */ "../../../node_modules/react-use/lib/useUpdate.js"));
function useTimeout(ms) {
    if (ms === void 0) { ms = 0; }
    var update = useUpdate_1.default();
    return useTimeoutFn_1.default(update, ms);
}
exports.default = useTimeout;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useTimeoutFn.js":
/*!************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useTimeoutFn.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
function useTimeoutFn(fn, ms) {
    if (ms === void 0) { ms = 0; }
    var ready = react_1.useRef(false);
    var timeout = react_1.useRef();
    var callback = react_1.useRef(fn);
    var isReady = react_1.useCallback(function () { return ready.current; }, []);
    var set = react_1.useCallback(function () {
        ready.current = false;
        timeout.current && clearTimeout(timeout.current);
        timeout.current = setTimeout(function () {
            ready.current = true;
            callback.current();
        }, ms);
    }, [ms]);
    var clear = react_1.useCallback(function () {
        ready.current = null;
        timeout.current && clearTimeout(timeout.current);
    }, []);
    // update ref when function changes
    react_1.useEffect(function () {
        callback.current = fn;
    }, [fn]);
    // set on mount, clear on unmount
    react_1.useEffect(function () {
        set();
        return clear;
    }, [ms]);
    return [isReady, clear, set];
}
exports.default = useTimeoutFn;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useTitle.js":
/*!********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useTitle.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var DEFAULT_USE_TITLE_OPTIONS = {
    restoreOnUnmount: false,
};
function useTitle(title, options) {
    if (options === void 0) { options = DEFAULT_USE_TITLE_OPTIONS; }
    var prevTitleRef = react_1.useRef(document.title);
    document.title = title;
    react_1.useEffect(function () {
        if (options && options.restoreOnUnmount) {
            return function () {
                document.title = prevTitleRef.current;
            };
        }
        else {
            return;
        }
    }, []);
}
exports.default = typeof document !== 'undefined' ? useTitle : function (_title) { };


/***/ }),

/***/ "../../../node_modules/react-use/lib/useToggle.js":
/*!*********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useToggle.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var useToggle = function (initialValue) {
    var _a = react_1.useState(initialValue), value = _a[0], setValue = _a[1];
    var toggle = react_1.useCallback(function (nextValue) {
        if (typeof nextValue === 'boolean') {
            setValue(nextValue);
        }
        else {
            setValue(function (currentValue) { return !currentValue; });
        }
    }, [setValue]);
    return [value, toggle];
};
exports.default = useToggle;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useTween.js":
/*!********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useTween.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var ts_easing_1 = __webpack_require__(/*! ts-easing */ "../../../node_modules/ts-easing/lib/index.js");
var useRaf_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useRaf */ "../../../node_modules/react-use/lib/useRaf.js"));
var useTween = function (easingName, ms, delay) {
    if (easingName === void 0) { easingName = 'inCirc'; }
    if (ms === void 0) { ms = 200; }
    if (delay === void 0) { delay = 0; }
    var fn = ts_easing_1.easing[easingName];
    var t = useRaf_1.default(ms, delay);
    if (true) {
        if (typeof fn !== 'function') {
            console.error('useTween() expected "easingName" property to be a valid easing function name, like:' +
                '"' +
                Object.keys(ts_easing_1.easing).join('", "') +
                '".');
            console.trace();
            return 0;
        }
    }
    return fn(t);
};
exports.default = useTween;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useUnmount.js":
/*!**********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useUnmount.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var react_1 = __webpack_require__(/*! react */ "react");
var useEffectOnce_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useEffectOnce */ "../../../node_modules/react-use/lib/useEffectOnce.js"));
var useUnmount = function (fn) {
    var fnRef = react_1.useRef(fn);
    // update the ref each render so if it change the newest callback will be invoked
    fnRef.current = fn;
    useEffectOnce_1.default(function () { return function () { return fnRef.current(); }; });
};
exports.default = useUnmount;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useUnmountPromise.js":
/*!*****************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useUnmountPromise.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var useUnmountPromise = function () {
    var refUnmounted = react_1.useRef(false);
    react_1.useEffect(function () { return function () {
        refUnmounted.current = true;
    }; });
    var wrapper = react_1.useMemo(function () {
        var race = function (promise, onError) {
            var newPromise = new Promise(function (resolve, reject) {
                promise.then(function (result) {
                    if (!refUnmounted.current)
                        resolve(result);
                }, function (error) {
                    if (!refUnmounted.current)
                        reject(error);
                    else if (onError)
                        onError(error);
                    else
                        console.error('useUnmountPromise', error);
                });
            });
            return newPromise;
        };
        return race;
    }, []);
    return wrapper;
};
exports.default = useUnmountPromise;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useUpdate.js":
/*!*********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useUpdate.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var incrementParameter = function (num) { return ++num % 1000000; };
var useUpdate = function () {
    var _a = react_1.useState(0), setState = _a[1];
    // useCallback with empty deps as we only want to define updateCb once
    return react_1.useCallback(function () { return setState(incrementParameter); }, []);
};
exports.default = useUpdate;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useUpdateEffect.js":
/*!***************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useUpdateEffect.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useFirstMountState_1 = __webpack_require__(/*! ./useFirstMountState */ "../../../node_modules/react-use/lib/useFirstMountState.js");
var useUpdateEffect = function (effect, deps) {
    var isFirstMount = useFirstMountState_1.useFirstMountState();
    react_1.useEffect(function () {
        if (!isFirstMount) {
            return effect();
        }
    }, deps);
};
exports.default = useUpdateEffect;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useUpsert.js":
/*!*********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useUpsert.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var useList_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useList */ "../../../node_modules/react-use/lib/useList.js"));
/**
 * @deprecated Use `useList` hook's upsert action instead
 */
function useUpsert(predicate, initialList) {
    if (initialList === void 0) { initialList = []; }
    var _a = useList_1.default(initialList), list = _a[0], listActions = _a[1];
    return [
        list,
        tslib_1.__assign(tslib_1.__assign({}, listActions), { upsert: function (newItem) {
                listActions.upsert(predicate, newItem);
            } }),
    ];
}
exports.default = useUpsert;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useVibrate.js":
/*!**********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useVibrate.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var isVibrationApiSupported = typeof navigator === 'object' && 'vibrate' in navigator;
var useVibrateMock = function () { };
function useVibrate(enabled, pattern, loop) {
    if (enabled === void 0) { enabled = true; }
    if (pattern === void 0) { pattern = [1000, 1000]; }
    if (loop === void 0) { loop = true; }
    react_1.useEffect(function () {
        var interval;
        if (enabled) {
            navigator.vibrate(pattern);
            if (loop) {
                var duration = pattern instanceof Array ? pattern.reduce(function (a, b) { return a + b; }) : pattern;
                interval = setInterval(function () {
                    navigator.vibrate(pattern);
                }, duration);
            }
        }
        return function () {
            if (enabled) {
                navigator.vibrate(0);
                if (loop) {
                    clearInterval(interval);
                }
            }
        };
    }, [enabled]);
}
exports.default = isVibrationApiSupported ? useVibrate : useVibrateMock;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useVideo.js":
/*!********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useVideo.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var createHTMLMediaHook_1 = tslib_1.__importDefault(__webpack_require__(/*! ./util/createHTMLMediaHook */ "../../../node_modules/react-use/lib/util/createHTMLMediaHook.js"));
var useVideo = createHTMLMediaHook_1.default('video');
exports.default = useVideo;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useWindowScroll.js":
/*!***************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useWindowScroll.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var util_1 = __webpack_require__(/*! ./util */ "../../../node_modules/react-use/lib/util.js");
var useRafState_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useRafState */ "../../../node_modules/react-use/lib/useRafState.js"));
var useWindowScroll = function () {
    var _a = useRafState_1.default({
        x: util_1.isClient ? window.pageXOffset : 0,
        y: util_1.isClient ? window.pageYOffset : 0,
    }), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        var handler = function () {
            setState({
                x: window.pageXOffset,
                y: window.pageYOffset,
            });
        };
        window.addEventListener('scroll', handler, {
            capture: false,
            passive: true,
        });
        return function () {
            window.removeEventListener('scroll', handler);
        };
    }, []);
    return state;
};
exports.default = useWindowScroll;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useWindowSize.js":
/*!*************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useWindowSize.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useRafState_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useRafState */ "../../../node_modules/react-use/lib/useRafState.js"));
var util_1 = __webpack_require__(/*! ./util */ "../../../node_modules/react-use/lib/util.js");
var useWindowSize = function (initialWidth, initialHeight) {
    if (initialWidth === void 0) { initialWidth = Infinity; }
    if (initialHeight === void 0) { initialHeight = Infinity; }
    var _a = useRafState_1.default({
        width: util_1.isClient ? window.innerWidth : initialWidth,
        height: util_1.isClient ? window.innerHeight : initialHeight,
    }), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        if (util_1.isClient) {
            var handler_1 = function () {
                setState({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            };
            window.addEventListener('resize', handler_1);
            return function () {
                window.removeEventListener('resize', handler_1);
            };
        }
    }, []);
    return state;
};
exports.default = useWindowSize;


/***/ }),

/***/ "../../../node_modules/react-use/lib/util.js":
/*!****************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/util.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isClient = typeof window === 'object';
exports.on = function (obj) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return obj.addEventListener.apply(obj, args);
};
exports.off = function (obj) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return obj.removeEventListener.apply(obj, args);
};
exports.isDeepEqual = __webpack_require__(/*! fast-deep-equal/react */ "../../../node_modules/fast-deep-equal/react.js");


/***/ }),

/***/ "../../../node_modules/react-use/lib/util/createHTMLMediaHook.js":
/*!************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/util/createHTMLMediaHook.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var React = tslib_1.__importStar(__webpack_require__(/*! react */ "react"));
var react_1 = __webpack_require__(/*! react */ "react");
var useSetState_1 = tslib_1.__importDefault(__webpack_require__(/*! ../useSetState */ "../../../node_modules/react-use/lib/useSetState.js"));
var parseTimeRanges_1 = tslib_1.__importDefault(__webpack_require__(/*! ./parseTimeRanges */ "../../../node_modules/react-use/lib/util/parseTimeRanges.js"));
var createHTMLMediaHook = function (tag) {
    var hook = function (elOrProps) {
        var element;
        var props;
        if (React.isValidElement(elOrProps)) {
            element = elOrProps;
            props = element.props;
        }
        else {
            props = elOrProps;
        }
        var _a = useSetState_1.default({
            buffered: [],
            time: 0,
            duration: 0,
            paused: true,
            muted: false,
            volume: 1,
        }), state = _a[0], setState = _a[1];
        var ref = react_1.useRef(null);
        var wrapEvent = function (userEvent, proxyEvent) {
            return function (event) {
                try {
                    proxyEvent && proxyEvent(event);
                }
                finally {
                    userEvent && userEvent(event);
                }
            };
        };
        var onPlay = function () { return setState({ paused: false }); };
        var onPause = function () { return setState({ paused: true }); };
        var onVolumeChange = function () {
            var el = ref.current;
            if (!el) {
                return;
            }
            setState({
                muted: el.muted,
                volume: el.volume,
            });
        };
        var onDurationChange = function () {
            var el = ref.current;
            if (!el) {
                return;
            }
            var duration = el.duration, buffered = el.buffered;
            setState({
                duration: duration,
                buffered: parseTimeRanges_1.default(buffered),
            });
        };
        var onTimeUpdate = function () {
            var el = ref.current;
            if (!el) {
                return;
            }
            setState({ time: el.currentTime });
        };
        var onProgress = function () {
            var el = ref.current;
            if (!el) {
                return;
            }
            setState({ buffered: parseTimeRanges_1.default(el.buffered) });
        };
        if (element) {
            element = React.cloneElement(element, tslib_1.__assign(tslib_1.__assign({ controls: false }, props), { ref: ref, onPlay: wrapEvent(props.onPlay, onPlay), onPause: wrapEvent(props.onPause, onPause), onVolumeChange: wrapEvent(props.onVolumeChange, onVolumeChange), onDurationChange: wrapEvent(props.onDurationChange, onDurationChange), onTimeUpdate: wrapEvent(props.onTimeUpdate, onTimeUpdate), onProgress: wrapEvent(props.onProgress, onProgress) }));
        }
        else {
            element = React.createElement(tag, tslib_1.__assign(tslib_1.__assign({ controls: false }, props), { ref: ref, onPlay: wrapEvent(props.onPlay, onPlay), onPause: wrapEvent(props.onPause, onPause), onVolumeChange: wrapEvent(props.onVolumeChange, onVolumeChange), onDurationChange: wrapEvent(props.onDurationChange, onDurationChange), onTimeUpdate: wrapEvent(props.onTimeUpdate, onTimeUpdate), onProgress: wrapEvent(props.onProgress, onProgress) })); // TODO: fix this typing.
        }
        // Some browsers return `Promise` on `.play()` and may throw errors
        // if one tries to execute another `.play()` or `.pause()` while that
        // promise is resolving. So we prevent that with this lock.
        // See: https://bugs.chromium.org/p/chromium/issues/detail?id=593273
        var lockPlay = false;
        var controls = {
            play: function () {
                var el = ref.current;
                if (!el) {
                    return undefined;
                }
                if (!lockPlay) {
                    var promise = el.play();
                    var isPromise = typeof promise === 'object';
                    if (isPromise) {
                        lockPlay = true;
                        var resetLock = function () {
                            lockPlay = false;
                        };
                        promise.then(resetLock, resetLock);
                    }
                    return promise;
                }
                return undefined;
            },
            pause: function () {
                var el = ref.current;
                if (el && !lockPlay) {
                    return el.pause();
                }
            },
            seek: function (time) {
                var el = ref.current;
                if (!el || state.duration === undefined) {
                    return;
                }
                time = Math.min(state.duration, Math.max(0, time));
                el.currentTime = time;
            },
            volume: function (volume) {
                var el = ref.current;
                if (!el) {
                    return;
                }
                volume = Math.min(1, Math.max(0, volume));
                el.volume = volume;
                setState({ volume: volume });
            },
            mute: function () {
                var el = ref.current;
                if (!el) {
                    return;
                }
                el.muted = true;
            },
            unmute: function () {
                var el = ref.current;
                if (!el) {
                    return;
                }
                el.muted = false;
            },
        };
        react_1.useEffect(function () {
            var el = ref.current;
            if (!el) {
                if (true) {
                    console.error('useAudio() ref to <audio> element is empty at mount. ' +
                        'It seem you have not rendered the audio element, which is ' +
                        'returns as the first argument const [audio] = useAudio(...).');
                }
                return;
            }
            setState({
                volume: el.volume,
                muted: el.muted,
                paused: el.paused,
            });
            // Start media, if autoPlay requested.
            if (props.autoPlay && el.paused) {
                controls.play();
            }
        }, [props.src]);
        return [element, state, controls, ref];
    };
    return hook;
};
exports.default = createHTMLMediaHook;


/***/ }),

/***/ "../../../node_modules/react-use/lib/util/parseTimeRanges.js":
/*!********************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/util/parseTimeRanges.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var parseTimeRanges = function (ranges) {
    var result = [];
    for (var i = 0; i < ranges.length; i++) {
        result.push({
            start: ranges.start(i),
            end: ranges.end(i),
        });
    }
    return result;
};
exports.default = parseTimeRanges;


/***/ }),

/***/ "../../../node_modules/react-use/lib/util/resolveHookState.js":
/*!*********************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/util/resolveHookState.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function resolveHookState(newState, currentState) {
    if (typeof newState === 'function') {
        return newState(currentState);
    }
    return newState;
}
exports.resolveHookState = resolveHookState;


/***/ }),

/***/ "../../../node_modules/reselect/lib/defaultMemoize.js":
/*!*************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/reselect/lib/defaultMemoize.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCacheKeyComparator = createCacheKeyComparator;
exports.defaultEqualityCheck = void 0;
exports.defaultMemoize = defaultMemoize;
// Cache implementation based on Erik Rasmussen's `lru-memoize`:
// https://github.com/erikras/lru-memoize
var NOT_FOUND = 'NOT_FOUND';

function createSingletonCache(equals) {
  var entry;
  return {
    get: function get(key) {
      if (entry && equals(entry.key, key)) {
        return entry.value;
      }

      return NOT_FOUND;
    },
    put: function put(key, value) {
      entry = {
        key: key,
        value: value
      };
    },
    getEntries: function getEntries() {
      return entry ? [entry] : [];
    },
    clear: function clear() {
      entry = undefined;
    }
  };
}

function createLruCache(maxSize, equals) {
  var entries = [];

  function get(key) {
    var cacheIndex = entries.findIndex(function (entry) {
      return equals(key, entry.key);
    }); // We found a cached entry

    if (cacheIndex > -1) {
      var entry = entries[cacheIndex]; // Cached entry not at top of cache, move it to the top

      if (cacheIndex > 0) {
        entries.splice(cacheIndex, 1);
        entries.unshift(entry);
      }

      return entry.value;
    } // No entry found in cache, return sentinel


    return NOT_FOUND;
  }

  function put(key, value) {
    if (get(key) === NOT_FOUND) {
      // TODO Is unshift slow?
      entries.unshift({
        key: key,
        value: value
      });

      if (entries.length > maxSize) {
        entries.pop();
      }
    }
  }

  function getEntries() {
    return entries;
  }

  function clear() {
    entries = [];
  }

  return {
    get: get,
    put: put,
    getEntries: getEntries,
    clear: clear
  };
}

var defaultEqualityCheck = function defaultEqualityCheck(a, b) {
  return a === b;
};

exports.defaultEqualityCheck = defaultEqualityCheck;

function createCacheKeyComparator(equalityCheck) {
  return function areArgumentsShallowlyEqual(prev, next) {
    if (prev === null || next === null || prev.length !== next.length) {
      return false;
    } // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.


    var length = prev.length;

    for (var i = 0; i < length; i++) {
      if (!equalityCheck(prev[i], next[i])) {
        return false;
      }
    }

    return true;
  };
}

// defaultMemoize now supports a configurable cache size with LRU behavior,
// and optional comparison of the result value with existing values
function defaultMemoize(func, equalityCheckOrOptions) {
  var providedOptions = typeof equalityCheckOrOptions === 'object' ? equalityCheckOrOptions : {
    equalityCheck: equalityCheckOrOptions
  };
  var _providedOptions$equa = providedOptions.equalityCheck,
      equalityCheck = _providedOptions$equa === void 0 ? defaultEqualityCheck : _providedOptions$equa,
      _providedOptions$maxS = providedOptions.maxSize,
      maxSize = _providedOptions$maxS === void 0 ? 1 : _providedOptions$maxS,
      resultEqualityCheck = providedOptions.resultEqualityCheck;
  var comparator = createCacheKeyComparator(equalityCheck);
  var cache = maxSize === 1 ? createSingletonCache(comparator) : createLruCache(maxSize, comparator); // we reference arguments instead of spreading them for performance reasons

  function memoized() {
    var value = cache.get(arguments);

    if (value === NOT_FOUND) {
      // @ts-ignore
      value = func.apply(null, arguments);

      if (resultEqualityCheck) {
        var entries = cache.getEntries();
        var matchingEntry = entries.find(function (entry) {
          return resultEqualityCheck(entry.value, value);
        });

        if (matchingEntry) {
          value = matchingEntry.value;
        }
      }

      cache.put(arguments, value);
    }

    return value;
  }

  memoized.clearCache = function () {
    return cache.clear();
  };

  return memoized;
}

/***/ }),

/***/ "../../../node_modules/reselect/lib/index.js":
/*!****************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/reselect/lib/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSelector = void 0;
exports.createSelectorCreator = createSelectorCreator;
exports.createStructuredSelector = void 0;
Object.defineProperty(exports, "defaultEqualityCheck", {
  enumerable: true,
  get: function get() {
    return _defaultMemoize.defaultEqualityCheck;
  }
});
Object.defineProperty(exports, "defaultMemoize", {
  enumerable: true,
  get: function get() {
    return _defaultMemoize.defaultMemoize;
  }
});

var _defaultMemoize = __webpack_require__(/*! ./defaultMemoize */ "../../../node_modules/reselect/lib/defaultMemoize.js");

function getDependencies(funcs) {
  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

  if (!dependencies.every(function (dep) {
    return typeof dep === 'function';
  })) {
    var dependencyTypes = dependencies.map(function (dep) {
      return typeof dep === 'function' ? "function " + (dep.name || 'unnamed') + "()" : typeof dep;
    }).join(', ');
    throw new Error("createSelector expects all input-selectors to be functions, but received the following types: [" + dependencyTypes + "]");
  }

  return dependencies;
}

function createSelectorCreator(memoize) {
  for (var _len = arguments.length, memoizeOptionsFromArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    memoizeOptionsFromArgs[_key - 1] = arguments[_key];
  }

  var createSelector = function createSelector() {
    for (var _len2 = arguments.length, funcs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      funcs[_key2] = arguments[_key2];
    }

    var _recomputations = 0;

    var _lastResult; // Due to the intricacies of rest params, we can't do an optional arg after `...funcs`.
    // So, start by declaring the default value here.
    // (And yes, the words 'memoize' and 'options' appear too many times in this next sequence.)


    var directlyPassedOptions = {
      memoizeOptions: undefined
    }; // Normally, the result func or "output selector" is the last arg

    var resultFunc = funcs.pop(); // If the result func is actually an _object_, assume it's our options object

    if (typeof resultFunc === 'object') {
      directlyPassedOptions = resultFunc; // and pop the real result func off

      resultFunc = funcs.pop();
    }

    if (typeof resultFunc !== 'function') {
      throw new Error("createSelector expects an output function after the inputs, but received: [" + typeof resultFunc + "]");
    } // Determine which set of options we're using. Prefer options passed directly,
    // but fall back to options given to createSelectorCreator.


    var _directlyPassedOption = directlyPassedOptions,
        _directlyPassedOption2 = _directlyPassedOption.memoizeOptions,
        memoizeOptions = _directlyPassedOption2 === void 0 ? memoizeOptionsFromArgs : _directlyPassedOption2; // Simplifying assumption: it's unlikely that the first options arg of the provided memoizer
    // is an array. In most libs I've looked at, it's an equality function or options object.
    // Based on that, if `memoizeOptions` _is_ an array, we assume it's a full
    // user-provided array of options. Otherwise, it must be just the _first_ arg, and so
    // we wrap it in an array so we can apply it.

    var finalMemoizeOptions = Array.isArray(memoizeOptions) ? memoizeOptions : [memoizeOptions];
    var dependencies = getDependencies(funcs);
    var memoizedResultFunc = memoize.apply(void 0, [function recomputationWrapper() {
      _recomputations++; // apply arguments instead of spreading for performance.

      return resultFunc.apply(null, arguments);
    }].concat(finalMemoizeOptions)); // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.

    var selector = memoize(function dependenciesChecker() {
      var params = [];
      var length = dependencies.length;

      for (var i = 0; i < length; i++) {
        // apply arguments instead of spreading and mutate a local list of params for performance.
        // @ts-ignore
        params.push(dependencies[i].apply(null, arguments));
      } // apply arguments instead of spreading for performance.


      _lastResult = memoizedResultFunc.apply(null, params);
      return _lastResult;
    });
    Object.assign(selector, {
      resultFunc: resultFunc,
      memoizedResultFunc: memoizedResultFunc,
      dependencies: dependencies,
      lastResult: function lastResult() {
        return _lastResult;
      },
      recomputations: function recomputations() {
        return _recomputations;
      },
      resetRecomputations: function resetRecomputations() {
        return _recomputations = 0;
      }
    });
    return selector;
  }; // @ts-ignore


  return createSelector;
}

var createSelector = /* #__PURE__ */createSelectorCreator(_defaultMemoize.defaultMemoize);
exports.createSelector = createSelector;

// Manual definition of state and output arguments
var createStructuredSelector = function createStructuredSelector(selectors, selectorCreator) {
  if (selectorCreator === void 0) {
    selectorCreator = createSelector;
  }

  if (typeof selectors !== 'object') {
    throw new Error('createStructuredSelector expects first argument to be an object ' + ("where each property is a selector, instead received a " + typeof selectors));
  }

  var objectKeys = Object.keys(selectors);
  var resultSelector = selectorCreator( // @ts-ignore
  objectKeys.map(function (key) {
    return selectors[key];
  }), function () {
    for (var _len3 = arguments.length, values = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      values[_key3] = arguments[_key3];
    }

    return values.reduce(function (composition, value, index) {
      composition[objectKeys[index]] = value;
      return composition;
    }, {});
  });
  return resultSelector;
};

exports.createStructuredSelector = createStructuredSelector;

/***/ }),

/***/ "../../../node_modules/resize-observer-polyfill/dist/ResizeObserver.js":
/*!******************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/resize-observer-polyfill/dist/ResizeObserver.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {
     true ? module.exports = factory() :
    undefined;
}(this, (function () { 'use strict';

    /**
     * A collection of shims that provide minimal functionality of the ES6 collections.
     *
     * These implementations are not meant to be used outside of the ResizeObserver
     * modules as they cover only a limited range of use cases.
     */
    /* eslint-disable require-jsdoc, valid-jsdoc */
    var MapShim = (function () {
        if (typeof Map !== 'undefined') {
            return Map;
        }
        /**
         * Returns index in provided array that matches the specified key.
         *
         * @param {Array<Array>} arr
         * @param {*} key
         * @returns {number}
         */
        function getIndex(arr, key) {
            var result = -1;
            arr.some(function (entry, index) {
                if (entry[0] === key) {
                    result = index;
                    return true;
                }
                return false;
            });
            return result;
        }
        return /** @class */ (function () {
            function class_1() {
                this.__entries__ = [];
            }
            Object.defineProperty(class_1.prototype, "size", {
                /**
                 * @returns {boolean}
                 */
                get: function () {
                    return this.__entries__.length;
                },
                enumerable: true,
                configurable: true
            });
            /**
             * @param {*} key
             * @returns {*}
             */
            class_1.prototype.get = function (key) {
                var index = getIndex(this.__entries__, key);
                var entry = this.__entries__[index];
                return entry && entry[1];
            };
            /**
             * @param {*} key
             * @param {*} value
             * @returns {void}
             */
            class_1.prototype.set = function (key, value) {
                var index = getIndex(this.__entries__, key);
                if (~index) {
                    this.__entries__[index][1] = value;
                }
                else {
                    this.__entries__.push([key, value]);
                }
            };
            /**
             * @param {*} key
             * @returns {void}
             */
            class_1.prototype.delete = function (key) {
                var entries = this.__entries__;
                var index = getIndex(entries, key);
                if (~index) {
                    entries.splice(index, 1);
                }
            };
            /**
             * @param {*} key
             * @returns {void}
             */
            class_1.prototype.has = function (key) {
                return !!~getIndex(this.__entries__, key);
            };
            /**
             * @returns {void}
             */
            class_1.prototype.clear = function () {
                this.__entries__.splice(0);
            };
            /**
             * @param {Function} callback
             * @param {*} [ctx=null]
             * @returns {void}
             */
            class_1.prototype.forEach = function (callback, ctx) {
                if (ctx === void 0) { ctx = null; }
                for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                    var entry = _a[_i];
                    callback.call(ctx, entry[1], entry[0]);
                }
            };
            return class_1;
        }());
    })();

    /**
     * Detects whether window and document objects are available in current environment.
     */
    var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

    // Returns global object of a current environment.
    var global$1 = (function () {
        if (typeof global !== 'undefined' && global.Math === Math) {
            return global;
        }
        if (typeof self !== 'undefined' && self.Math === Math) {
            return self;
        }
        if (typeof window !== 'undefined' && window.Math === Math) {
            return window;
        }
        // eslint-disable-next-line no-new-func
        return Function('return this')();
    })();

    /**
     * A shim for the requestAnimationFrame which falls back to the setTimeout if
     * first one is not supported.
     *
     * @returns {number} Requests' identifier.
     */
    var requestAnimationFrame$1 = (function () {
        if (typeof requestAnimationFrame === 'function') {
            // It's required to use a bounded function because IE sometimes throws
            // an "Invalid calling object" error if rAF is invoked without the global
            // object on the left hand side.
            return requestAnimationFrame.bind(global$1);
        }
        return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
    })();

    // Defines minimum timeout before adding a trailing call.
    var trailingTimeout = 2;
    /**
     * Creates a wrapper function which ensures that provided callback will be
     * invoked only once during the specified delay period.
     *
     * @param {Function} callback - Function to be invoked after the delay period.
     * @param {number} delay - Delay after which to invoke callback.
     * @returns {Function}
     */
    function throttle (callback, delay) {
        var leadingCall = false, trailingCall = false, lastCallTime = 0;
        /**
         * Invokes the original callback function and schedules new invocation if
         * the "proxy" was called during current request.
         *
         * @returns {void}
         */
        function resolvePending() {
            if (leadingCall) {
                leadingCall = false;
                callback();
            }
            if (trailingCall) {
                proxy();
            }
        }
        /**
         * Callback invoked after the specified delay. It will further postpone
         * invocation of the original function delegating it to the
         * requestAnimationFrame.
         *
         * @returns {void}
         */
        function timeoutCallback() {
            requestAnimationFrame$1(resolvePending);
        }
        /**
         * Schedules invocation of the original function.
         *
         * @returns {void}
         */
        function proxy() {
            var timeStamp = Date.now();
            if (leadingCall) {
                // Reject immediately following calls.
                if (timeStamp - lastCallTime < trailingTimeout) {
                    return;
                }
                // Schedule new call to be in invoked when the pending one is resolved.
                // This is important for "transitions" which never actually start
                // immediately so there is a chance that we might miss one if change
                // happens amids the pending invocation.
                trailingCall = true;
            }
            else {
                leadingCall = true;
                trailingCall = false;
                setTimeout(timeoutCallback, delay);
            }
            lastCallTime = timeStamp;
        }
        return proxy;
    }

    // Minimum delay before invoking the update of observers.
    var REFRESH_DELAY = 20;
    // A list of substrings of CSS properties used to find transition events that
    // might affect dimensions of observed elements.
    var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
    // Check if MutationObserver is available.
    var mutationObserverSupported = typeof MutationObserver !== 'undefined';
    /**
     * Singleton controller class which handles updates of ResizeObserver instances.
     */
    var ResizeObserverController = /** @class */ (function () {
        /**
         * Creates a new instance of ResizeObserverController.
         *
         * @private
         */
        function ResizeObserverController() {
            /**
             * Indicates whether DOM listeners have been added.
             *
             * @private {boolean}
             */
            this.connected_ = false;
            /**
             * Tells that controller has subscribed for Mutation Events.
             *
             * @private {boolean}
             */
            this.mutationEventsAdded_ = false;
            /**
             * Keeps reference to the instance of MutationObserver.
             *
             * @private {MutationObserver}
             */
            this.mutationsObserver_ = null;
            /**
             * A list of connected observers.
             *
             * @private {Array<ResizeObserverSPI>}
             */
            this.observers_ = [];
            this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
            this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
        }
        /**
         * Adds observer to observers list.
         *
         * @param {ResizeObserverSPI} observer - Observer to be added.
         * @returns {void}
         */
        ResizeObserverController.prototype.addObserver = function (observer) {
            if (!~this.observers_.indexOf(observer)) {
                this.observers_.push(observer);
            }
            // Add listeners if they haven't been added yet.
            if (!this.connected_) {
                this.connect_();
            }
        };
        /**
         * Removes observer from observers list.
         *
         * @param {ResizeObserverSPI} observer - Observer to be removed.
         * @returns {void}
         */
        ResizeObserverController.prototype.removeObserver = function (observer) {
            var observers = this.observers_;
            var index = observers.indexOf(observer);
            // Remove observer if it's present in registry.
            if (~index) {
                observers.splice(index, 1);
            }
            // Remove listeners if controller has no connected observers.
            if (!observers.length && this.connected_) {
                this.disconnect_();
            }
        };
        /**
         * Invokes the update of observers. It will continue running updates insofar
         * it detects changes.
         *
         * @returns {void}
         */
        ResizeObserverController.prototype.refresh = function () {
            var changesDetected = this.updateObservers_();
            // Continue running updates if changes have been detected as there might
            // be future ones caused by CSS transitions.
            if (changesDetected) {
                this.refresh();
            }
        };
        /**
         * Updates every observer from observers list and notifies them of queued
         * entries.
         *
         * @private
         * @returns {boolean} Returns "true" if any observer has detected changes in
         *      dimensions of it's elements.
         */
        ResizeObserverController.prototype.updateObservers_ = function () {
            // Collect observers that have active observations.
            var activeObservers = this.observers_.filter(function (observer) {
                return observer.gatherActive(), observer.hasActive();
            });
            // Deliver notifications in a separate cycle in order to avoid any
            // collisions between observers, e.g. when multiple instances of
            // ResizeObserver are tracking the same element and the callback of one
            // of them changes content dimensions of the observed target. Sometimes
            // this may result in notifications being blocked for the rest of observers.
            activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
            return activeObservers.length > 0;
        };
        /**
         * Initializes DOM listeners.
         *
         * @private
         * @returns {void}
         */
        ResizeObserverController.prototype.connect_ = function () {
            // Do nothing if running in a non-browser environment or if listeners
            // have been already added.
            if (!isBrowser || this.connected_) {
                return;
            }
            // Subscription to the "Transitionend" event is used as a workaround for
            // delayed transitions. This way it's possible to capture at least the
            // final state of an element.
            document.addEventListener('transitionend', this.onTransitionEnd_);
            window.addEventListener('resize', this.refresh);
            if (mutationObserverSupported) {
                this.mutationsObserver_ = new MutationObserver(this.refresh);
                this.mutationsObserver_.observe(document, {
                    attributes: true,
                    childList: true,
                    characterData: true,
                    subtree: true
                });
            }
            else {
                document.addEventListener('DOMSubtreeModified', this.refresh);
                this.mutationEventsAdded_ = true;
            }
            this.connected_ = true;
        };
        /**
         * Removes DOM listeners.
         *
         * @private
         * @returns {void}
         */
        ResizeObserverController.prototype.disconnect_ = function () {
            // Do nothing if running in a non-browser environment or if listeners
            // have been already removed.
            if (!isBrowser || !this.connected_) {
                return;
            }
            document.removeEventListener('transitionend', this.onTransitionEnd_);
            window.removeEventListener('resize', this.refresh);
            if (this.mutationsObserver_) {
                this.mutationsObserver_.disconnect();
            }
            if (this.mutationEventsAdded_) {
                document.removeEventListener('DOMSubtreeModified', this.refresh);
            }
            this.mutationsObserver_ = null;
            this.mutationEventsAdded_ = false;
            this.connected_ = false;
        };
        /**
         * "Transitionend" event handler.
         *
         * @private
         * @param {TransitionEvent} event
         * @returns {void}
         */
        ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
            var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
            // Detect whether transition may affect dimensions of an element.
            var isReflowProperty = transitionKeys.some(function (key) {
                return !!~propertyName.indexOf(key);
            });
            if (isReflowProperty) {
                this.refresh();
            }
        };
        /**
         * Returns instance of the ResizeObserverController.
         *
         * @returns {ResizeObserverController}
         */
        ResizeObserverController.getInstance = function () {
            if (!this.instance_) {
                this.instance_ = new ResizeObserverController();
            }
            return this.instance_;
        };
        /**
         * Holds reference to the controller's instance.
         *
         * @private {ResizeObserverController}
         */
        ResizeObserverController.instance_ = null;
        return ResizeObserverController;
    }());

    /**
     * Defines non-writable/enumerable properties of the provided target object.
     *
     * @param {Object} target - Object for which to define properties.
     * @param {Object} props - Properties to be defined.
     * @returns {Object} Target object.
     */
    var defineConfigurable = (function (target, props) {
        for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
            var key = _a[_i];
            Object.defineProperty(target, key, {
                value: props[key],
                enumerable: false,
                writable: false,
                configurable: true
            });
        }
        return target;
    });

    /**
     * Returns the global object associated with provided element.
     *
     * @param {Object} target
     * @returns {Object}
     */
    var getWindowOf = (function (target) {
        // Assume that the element is an instance of Node, which means that it
        // has the "ownerDocument" property from which we can retrieve a
        // corresponding global object.
        var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
        // Return the local global object if it's not possible extract one from
        // provided element.
        return ownerGlobal || global$1;
    });

    // Placeholder of an empty content rectangle.
    var emptyRect = createRectInit(0, 0, 0, 0);
    /**
     * Converts provided string to a number.
     *
     * @param {number|string} value
     * @returns {number}
     */
    function toFloat(value) {
        return parseFloat(value) || 0;
    }
    /**
     * Extracts borders size from provided styles.
     *
     * @param {CSSStyleDeclaration} styles
     * @param {...string} positions - Borders positions (top, right, ...)
     * @returns {number}
     */
    function getBordersSize(styles) {
        var positions = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            positions[_i - 1] = arguments[_i];
        }
        return positions.reduce(function (size, position) {
            var value = styles['border-' + position + '-width'];
            return size + toFloat(value);
        }, 0);
    }
    /**
     * Extracts paddings sizes from provided styles.
     *
     * @param {CSSStyleDeclaration} styles
     * @returns {Object} Paddings box.
     */
    function getPaddings(styles) {
        var positions = ['top', 'right', 'bottom', 'left'];
        var paddings = {};
        for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
            var position = positions_1[_i];
            var value = styles['padding-' + position];
            paddings[position] = toFloat(value);
        }
        return paddings;
    }
    /**
     * Calculates content rectangle of provided SVG element.
     *
     * @param {SVGGraphicsElement} target - Element content rectangle of which needs
     *      to be calculated.
     * @returns {DOMRectInit}
     */
    function getSVGContentRect(target) {
        var bbox = target.getBBox();
        return createRectInit(0, 0, bbox.width, bbox.height);
    }
    /**
     * Calculates content rectangle of provided HTMLElement.
     *
     * @param {HTMLElement} target - Element for which to calculate the content rectangle.
     * @returns {DOMRectInit}
     */
    function getHTMLElementContentRect(target) {
        // Client width & height properties can't be
        // used exclusively as they provide rounded values.
        var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
        // By this condition we can catch all non-replaced inline, hidden and
        // detached elements. Though elements with width & height properties less
        // than 0.5 will be discarded as well.
        //
        // Without it we would need to implement separate methods for each of
        // those cases and it's not possible to perform a precise and performance
        // effective test for hidden elements. E.g. even jQuery's ':visible' filter
        // gives wrong results for elements with width & height less than 0.5.
        if (!clientWidth && !clientHeight) {
            return emptyRect;
        }
        var styles = getWindowOf(target).getComputedStyle(target);
        var paddings = getPaddings(styles);
        var horizPad = paddings.left + paddings.right;
        var vertPad = paddings.top + paddings.bottom;
        // Computed styles of width & height are being used because they are the
        // only dimensions available to JS that contain non-rounded values. It could
        // be possible to utilize the getBoundingClientRect if only it's data wasn't
        // affected by CSS transformations let alone paddings, borders and scroll bars.
        var width = toFloat(styles.width), height = toFloat(styles.height);
        // Width & height include paddings and borders when the 'border-box' box
        // model is applied (except for IE).
        if (styles.boxSizing === 'border-box') {
            // Following conditions are required to handle Internet Explorer which
            // doesn't include paddings and borders to computed CSS dimensions.
            //
            // We can say that if CSS dimensions + paddings are equal to the "client"
            // properties then it's either IE, and thus we don't need to subtract
            // anything, or an element merely doesn't have paddings/borders styles.
            if (Math.round(width + horizPad) !== clientWidth) {
                width -= getBordersSize(styles, 'left', 'right') + horizPad;
            }
            if (Math.round(height + vertPad) !== clientHeight) {
                height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
            }
        }
        // Following steps can't be applied to the document's root element as its
        // client[Width/Height] properties represent viewport area of the window.
        // Besides, it's as well not necessary as the <html> itself neither has
        // rendered scroll bars nor it can be clipped.
        if (!isDocumentElement(target)) {
            // In some browsers (only in Firefox, actually) CSS width & height
            // include scroll bars size which can be removed at this step as scroll
            // bars are the only difference between rounded dimensions + paddings
            // and "client" properties, though that is not always true in Chrome.
            var vertScrollbar = Math.round(width + horizPad) - clientWidth;
            var horizScrollbar = Math.round(height + vertPad) - clientHeight;
            // Chrome has a rather weird rounding of "client" properties.
            // E.g. for an element with content width of 314.2px it sometimes gives
            // the client width of 315px and for the width of 314.7px it may give
            // 314px. And it doesn't happen all the time. So just ignore this delta
            // as a non-relevant.
            if (Math.abs(vertScrollbar) !== 1) {
                width -= vertScrollbar;
            }
            if (Math.abs(horizScrollbar) !== 1) {
                height -= horizScrollbar;
            }
        }
        return createRectInit(paddings.left, paddings.top, width, height);
    }
    /**
     * Checks whether provided element is an instance of the SVGGraphicsElement.
     *
     * @param {Element} target - Element to be checked.
     * @returns {boolean}
     */
    var isSVGGraphicsElement = (function () {
        // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
        // interface.
        if (typeof SVGGraphicsElement !== 'undefined') {
            return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
        }
        // If it's so, then check that element is at least an instance of the
        // SVGElement and that it has the "getBBox" method.
        // eslint-disable-next-line no-extra-parens
        return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
            typeof target.getBBox === 'function'); };
    })();
    /**
     * Checks whether provided element is a document element (<html>).
     *
     * @param {Element} target - Element to be checked.
     * @returns {boolean}
     */
    function isDocumentElement(target) {
        return target === getWindowOf(target).document.documentElement;
    }
    /**
     * Calculates an appropriate content rectangle for provided html or svg element.
     *
     * @param {Element} target - Element content rectangle of which needs to be calculated.
     * @returns {DOMRectInit}
     */
    function getContentRect(target) {
        if (!isBrowser) {
            return emptyRect;
        }
        if (isSVGGraphicsElement(target)) {
            return getSVGContentRect(target);
        }
        return getHTMLElementContentRect(target);
    }
    /**
     * Creates rectangle with an interface of the DOMRectReadOnly.
     * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
     *
     * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
     * @returns {DOMRectReadOnly}
     */
    function createReadOnlyRect(_a) {
        var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
        // If DOMRectReadOnly is available use it as a prototype for the rectangle.
        var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
        var rect = Object.create(Constr.prototype);
        // Rectangle's properties are not writable and non-enumerable.
        defineConfigurable(rect, {
            x: x, y: y, width: width, height: height,
            top: y,
            right: x + width,
            bottom: height + y,
            left: x
        });
        return rect;
    }
    /**
     * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
     * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
     *
     * @param {number} x - X coordinate.
     * @param {number} y - Y coordinate.
     * @param {number} width - Rectangle's width.
     * @param {number} height - Rectangle's height.
     * @returns {DOMRectInit}
     */
    function createRectInit(x, y, width, height) {
        return { x: x, y: y, width: width, height: height };
    }

    /**
     * Class that is responsible for computations of the content rectangle of
     * provided DOM element and for keeping track of it's changes.
     */
    var ResizeObservation = /** @class */ (function () {
        /**
         * Creates an instance of ResizeObservation.
         *
         * @param {Element} target - Element to be observed.
         */
        function ResizeObservation(target) {
            /**
             * Broadcasted width of content rectangle.
             *
             * @type {number}
             */
            this.broadcastWidth = 0;
            /**
             * Broadcasted height of content rectangle.
             *
             * @type {number}
             */
            this.broadcastHeight = 0;
            /**
             * Reference to the last observed content rectangle.
             *
             * @private {DOMRectInit}
             */
            this.contentRect_ = createRectInit(0, 0, 0, 0);
            this.target = target;
        }
        /**
         * Updates content rectangle and tells whether it's width or height properties
         * have changed since the last broadcast.
         *
         * @returns {boolean}
         */
        ResizeObservation.prototype.isActive = function () {
            var rect = getContentRect(this.target);
            this.contentRect_ = rect;
            return (rect.width !== this.broadcastWidth ||
                rect.height !== this.broadcastHeight);
        };
        /**
         * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
         * from the corresponding properties of the last observed content rectangle.
         *
         * @returns {DOMRectInit} Last observed content rectangle.
         */
        ResizeObservation.prototype.broadcastRect = function () {
            var rect = this.contentRect_;
            this.broadcastWidth = rect.width;
            this.broadcastHeight = rect.height;
            return rect;
        };
        return ResizeObservation;
    }());

    var ResizeObserverEntry = /** @class */ (function () {
        /**
         * Creates an instance of ResizeObserverEntry.
         *
         * @param {Element} target - Element that is being observed.
         * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
         */
        function ResizeObserverEntry(target, rectInit) {
            var contentRect = createReadOnlyRect(rectInit);
            // According to the specification following properties are not writable
            // and are also not enumerable in the native implementation.
            //
            // Property accessors are not being used as they'd require to define a
            // private WeakMap storage which may cause memory leaks in browsers that
            // don't support this type of collections.
            defineConfigurable(this, { target: target, contentRect: contentRect });
        }
        return ResizeObserverEntry;
    }());

    var ResizeObserverSPI = /** @class */ (function () {
        /**
         * Creates a new instance of ResizeObserver.
         *
         * @param {ResizeObserverCallback} callback - Callback function that is invoked
         *      when one of the observed elements changes it's content dimensions.
         * @param {ResizeObserverController} controller - Controller instance which
         *      is responsible for the updates of observer.
         * @param {ResizeObserver} callbackCtx - Reference to the public
         *      ResizeObserver instance which will be passed to callback function.
         */
        function ResizeObserverSPI(callback, controller, callbackCtx) {
            /**
             * Collection of resize observations that have detected changes in dimensions
             * of elements.
             *
             * @private {Array<ResizeObservation>}
             */
            this.activeObservations_ = [];
            /**
             * Registry of the ResizeObservation instances.
             *
             * @private {Map<Element, ResizeObservation>}
             */
            this.observations_ = new MapShim();
            if (typeof callback !== 'function') {
                throw new TypeError('The callback provided as parameter 1 is not a function.');
            }
            this.callback_ = callback;
            this.controller_ = controller;
            this.callbackCtx_ = callbackCtx;
        }
        /**
         * Starts observing provided element.
         *
         * @param {Element} target - Element to be observed.
         * @returns {void}
         */
        ResizeObserverSPI.prototype.observe = function (target) {
            if (!arguments.length) {
                throw new TypeError('1 argument required, but only 0 present.');
            }
            // Do nothing if current environment doesn't have the Element interface.
            if (typeof Element === 'undefined' || !(Element instanceof Object)) {
                return;
            }
            if (!(target instanceof getWindowOf(target).Element)) {
                throw new TypeError('parameter 1 is not of type "Element".');
            }
            var observations = this.observations_;
            // Do nothing if element is already being observed.
            if (observations.has(target)) {
                return;
            }
            observations.set(target, new ResizeObservation(target));
            this.controller_.addObserver(this);
            // Force the update of observations.
            this.controller_.refresh();
        };
        /**
         * Stops observing provided element.
         *
         * @param {Element} target - Element to stop observing.
         * @returns {void}
         */
        ResizeObserverSPI.prototype.unobserve = function (target) {
            if (!arguments.length) {
                throw new TypeError('1 argument required, but only 0 present.');
            }
            // Do nothing if current environment doesn't have the Element interface.
            if (typeof Element === 'undefined' || !(Element instanceof Object)) {
                return;
            }
            if (!(target instanceof getWindowOf(target).Element)) {
                throw new TypeError('parameter 1 is not of type "Element".');
            }
            var observations = this.observations_;
            // Do nothing if element is not being observed.
            if (!observations.has(target)) {
                return;
            }
            observations.delete(target);
            if (!observations.size) {
                this.controller_.removeObserver(this);
            }
        };
        /**
         * Stops observing all elements.
         *
         * @returns {void}
         */
        ResizeObserverSPI.prototype.disconnect = function () {
            this.clearActive();
            this.observations_.clear();
            this.controller_.removeObserver(this);
        };
        /**
         * Collects observation instances the associated element of which has changed
         * it's content rectangle.
         *
         * @returns {void}
         */
        ResizeObserverSPI.prototype.gatherActive = function () {
            var _this = this;
            this.clearActive();
            this.observations_.forEach(function (observation) {
                if (observation.isActive()) {
                    _this.activeObservations_.push(observation);
                }
            });
        };
        /**
         * Invokes initial callback function with a list of ResizeObserverEntry
         * instances collected from active resize observations.
         *
         * @returns {void}
         */
        ResizeObserverSPI.prototype.broadcastActive = function () {
            // Do nothing if observer doesn't have active observations.
            if (!this.hasActive()) {
                return;
            }
            var ctx = this.callbackCtx_;
            // Create ResizeObserverEntry instance for every active observation.
            var entries = this.activeObservations_.map(function (observation) {
                return new ResizeObserverEntry(observation.target, observation.broadcastRect());
            });
            this.callback_.call(ctx, entries, ctx);
            this.clearActive();
        };
        /**
         * Clears the collection of active observations.
         *
         * @returns {void}
         */
        ResizeObserverSPI.prototype.clearActive = function () {
            this.activeObservations_.splice(0);
        };
        /**
         * Tells whether observer has active observations.
         *
         * @returns {boolean}
         */
        ResizeObserverSPI.prototype.hasActive = function () {
            return this.activeObservations_.length > 0;
        };
        return ResizeObserverSPI;
    }());

    // Registry of internal observers. If WeakMap is not available use current shim
    // for the Map collection as it has all required methods and because WeakMap
    // can't be fully polyfilled anyway.
    var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
    /**
     * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
     * exposing only those methods and properties that are defined in the spec.
     */
    var ResizeObserver = /** @class */ (function () {
        /**
         * Creates a new instance of ResizeObserver.
         *
         * @param {ResizeObserverCallback} callback - Callback that is invoked when
         *      dimensions of the observed elements change.
         */
        function ResizeObserver(callback) {
            if (!(this instanceof ResizeObserver)) {
                throw new TypeError('Cannot call a class as a function.');
            }
            if (!arguments.length) {
                throw new TypeError('1 argument required, but only 0 present.');
            }
            var controller = ResizeObserverController.getInstance();
            var observer = new ResizeObserverSPI(callback, controller, this);
            observers.set(this, observer);
        }
        return ResizeObserver;
    }());
    // Expose public methods of ResizeObserver.
    [
        'observe',
        'unobserve',
        'disconnect'
    ].forEach(function (method) {
        ResizeObserver.prototype[method] = function () {
            var _a;
            return (_a = observers.get(this))[method].apply(_a, arguments);
        };
    });

    var index = (function () {
        // Export existing implementation if available.
        if (typeof global$1.ResizeObserver !== 'undefined') {
            return global$1.ResizeObserver;
        }
        return ResizeObserver;
    })();

    return index;

})));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "../../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../../node_modules/resolve-pathname/cjs/resolve-pathname.js":
/*!***********************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/resolve-pathname/cjs/resolve-pathname.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to, from) {
  if (from === undefined) from = '';

  var toParts = (to && to.split('/')) || [];
  var fromParts = (from && from.split('/')) || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) fromParts.unshift('..');

  if (
    mustEndAbs &&
    fromParts[0] !== '' &&
    (!fromParts[0] || !isAbsolute(fromParts[0]))
  )
    fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

module.exports = resolvePathname;


/***/ }),

/***/ "../../../node_modules/resolve-pathname/index.js":
/*!********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/resolve-pathname/index.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/resolve-pathname.js */ "../../../node_modules/resolve-pathname/cjs/resolve-pathname.js");
}


/***/ }),

/***/ "../../../node_modules/screenfull/dist/screenfull.js":
/*!************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/screenfull/dist/screenfull.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
* screenfull
* v5.2.0 - 2021-11-03
* (c) Sindre Sorhus; MIT License
*/
(function () {
	'use strict';

	var document = typeof window !== 'undefined' && typeof window.document !== 'undefined' ? window.document : {};
	var isCommonjs =  true && module.exports;

	var fn = (function () {
		var val;

		var fnMap = [
			[
				'requestFullscreen',
				'exitFullscreen',
				'fullscreenElement',
				'fullscreenEnabled',
				'fullscreenchange',
				'fullscreenerror'
			],
			// New WebKit
			[
				'webkitRequestFullscreen',
				'webkitExitFullscreen',
				'webkitFullscreenElement',
				'webkitFullscreenEnabled',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			// Old WebKit
			[
				'webkitRequestFullScreen',
				'webkitCancelFullScreen',
				'webkitCurrentFullScreenElement',
				'webkitCancelFullScreen',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			[
				'mozRequestFullScreen',
				'mozCancelFullScreen',
				'mozFullScreenElement',
				'mozFullScreenEnabled',
				'mozfullscreenchange',
				'mozfullscreenerror'
			],
			[
				'msRequestFullscreen',
				'msExitFullscreen',
				'msFullscreenElement',
				'msFullscreenEnabled',
				'MSFullscreenChange',
				'MSFullscreenError'
			]
		];

		var i = 0;
		var l = fnMap.length;
		var ret = {};

		for (; i < l; i++) {
			val = fnMap[i];
			if (val && val[1] in document) {
				for (i = 0; i < val.length; i++) {
					ret[fnMap[0][i]] = val[i];
				}
				return ret;
			}
		}

		return false;
	})();

	var eventNameMap = {
		change: fn.fullscreenchange,
		error: fn.fullscreenerror
	};

	var screenfull = {
		request: function (element, options) {
			return new Promise(function (resolve, reject) {
				var onFullScreenEntered = function () {
					this.off('change', onFullScreenEntered);
					resolve();
				}.bind(this);

				this.on('change', onFullScreenEntered);

				element = element || document.documentElement;

				var returnPromise = element[fn.requestFullscreen](options);

				if (returnPromise instanceof Promise) {
					returnPromise.then(onFullScreenEntered).catch(reject);
				}
			}.bind(this));
		},
		exit: function () {
			return new Promise(function (resolve, reject) {
				if (!this.isFullscreen) {
					resolve();
					return;
				}

				var onFullScreenExit = function () {
					this.off('change', onFullScreenExit);
					resolve();
				}.bind(this);

				this.on('change', onFullScreenExit);

				var returnPromise = document[fn.exitFullscreen]();

				if (returnPromise instanceof Promise) {
					returnPromise.then(onFullScreenExit).catch(reject);
				}
			}.bind(this));
		},
		toggle: function (element, options) {
			return this.isFullscreen ? this.exit() : this.request(element, options);
		},
		onchange: function (callback) {
			this.on('change', callback);
		},
		onerror: function (callback) {
			this.on('error', callback);
		},
		on: function (event, callback) {
			var eventName = eventNameMap[event];
			if (eventName) {
				document.addEventListener(eventName, callback, false);
			}
		},
		off: function (event, callback) {
			var eventName = eventNameMap[event];
			if (eventName) {
				document.removeEventListener(eventName, callback, false);
			}
		},
		raw: fn
	};

	if (!fn) {
		if (isCommonjs) {
			module.exports = {isEnabled: false};
		} else {
			window.screenfull = {isEnabled: false};
		}

		return;
	}

	Object.defineProperties(screenfull, {
		isFullscreen: {
			get: function () {
				return Boolean(document[fn.fullscreenElement]);
			}
		},
		element: {
			enumerable: true,
			get: function () {
				return document[fn.fullscreenElement];
			}
		},
		isEnabled: {
			enumerable: true,
			get: function () {
				// Coerce to boolean in case of old WebKit
				return Boolean(document[fn.fullscreenEnabled]);
			}
		}
	});

	if (isCommonjs) {
		module.exports = screenfull;
	} else {
		window.screenfull = screenfull;
	}
})();


/***/ }),

/***/ "../../../node_modules/semver/classes/comparator.js":
/*!***********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/semver/classes/comparator.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const ANY = Symbol('SemVer ANY')
// hoisted class for cyclic dependency
class Comparator {
  static get ANY () {
    return ANY
  }

  constructor (comp, options) {
    options = parseOptions(options)

    if (comp instanceof Comparator) {
      if (comp.loose === !!options.loose) {
        return comp
      } else {
        comp = comp.value
      }
    }

    comp = comp.trim().split(/\s+/).join(' ')
    debug('comparator', comp, options)
    this.options = options
    this.loose = !!options.loose
    this.parse(comp)

    if (this.semver === ANY) {
      this.value = ''
    } else {
      this.value = this.operator + this.semver.version
    }

    debug('comp', this)
  }

  parse (comp) {
    const r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR]
    const m = comp.match(r)

    if (!m) {
      throw new TypeError(`Invalid comparator: ${comp}`)
    }

    this.operator = m[1] !== undefined ? m[1] : ''
    if (this.operator === '=') {
      this.operator = ''
    }

    // if it literally is just '>' or '' then allow anything.
    if (!m[2]) {
      this.semver = ANY
    } else {
      this.semver = new SemVer(m[2], this.options.loose)
    }
  }

  toString () {
    return this.value
  }

  test (version) {
    debug('Comparator.test', version, this.options.loose)

    if (this.semver === ANY || version === ANY) {
      return true
    }

    if (typeof version === 'string') {
      try {
        version = new SemVer(version, this.options)
      } catch (er) {
        return false
      }
    }

    return cmp(version, this.operator, this.semver, this.options)
  }

  intersects (comp, options) {
    if (!(comp instanceof Comparator)) {
      throw new TypeError('a Comparator is required')
    }

    if (this.operator === '') {
      if (this.value === '') {
        return true
      }
      return new Range(comp.value, options).test(this.value)
    } else if (comp.operator === '') {
      if (comp.value === '') {
        return true
      }
      return new Range(this.value, options).test(comp.semver)
    }

    options = parseOptions(options)

    // Special cases where nothing can possibly be lower
    if (options.includePrerelease &&
      (this.value === '<0.0.0-0' || comp.value === '<0.0.0-0')) {
      return false
    }
    if (!options.includePrerelease &&
      (this.value.startsWith('<0.0.0') || comp.value.startsWith('<0.0.0'))) {
      return false
    }

    // Same direction increasing (> or >=)
    if (this.operator.startsWith('>') && comp.operator.startsWith('>')) {
      return true
    }
    // Same direction decreasing (< or <=)
    if (this.operator.startsWith('<') && comp.operator.startsWith('<')) {
      return true
    }
    // same SemVer and both sides are inclusive (<= or >=)
    if (
      (this.semver.version === comp.semver.version) &&
      this.operator.includes('=') && comp.operator.includes('=')) {
      return true
    }
    // opposite directions less than
    if (cmp(this.semver, '<', comp.semver, options) &&
      this.operator.startsWith('>') && comp.operator.startsWith('<')) {
      return true
    }
    // opposite directions greater than
    if (cmp(this.semver, '>', comp.semver, options) &&
      this.operator.startsWith('<') && comp.operator.startsWith('>')) {
      return true
    }
    return false
  }
}

module.exports = Comparator

const parseOptions = __webpack_require__(/*! ../internal/parse-options */ "../../../node_modules/semver/internal/parse-options.js")
const { safeRe: re, t } = __webpack_require__(/*! ../internal/re */ "../../../node_modules/semver/internal/re.js")
const cmp = __webpack_require__(/*! ../functions/cmp */ "../../../node_modules/semver/functions/cmp.js")
const debug = __webpack_require__(/*! ../internal/debug */ "../../../node_modules/semver/internal/debug.js")
const SemVer = __webpack_require__(/*! ./semver */ "../../../node_modules/semver/classes/semver.js")
const Range = __webpack_require__(/*! ./range */ "../../../node_modules/semver/classes/range.js")


/***/ }),

/***/ "../../../node_modules/semver/classes/range.js":
/*!******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/semver/classes/range.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// hoisted class for cyclic dependency
class Range {
  constructor (range, options) {
    options = parseOptions(options)

    if (range instanceof Range) {
      if (
        range.loose === !!options.loose &&
        range.includePrerelease === !!options.includePrerelease
      ) {
        return range
      } else {
        return new Range(range.raw, options)
      }
    }

    if (range instanceof Comparator) {
      // just put it in the set and return
      this.raw = range.value
      this.set = [[range]]
      this.format()
      return this
    }

    this.options = options
    this.loose = !!options.loose
    this.includePrerelease = !!options.includePrerelease

    // First reduce all whitespace as much as possible so we do not have to rely
    // on potentially slow regexes like \s*. This is then stored and used for
    // future error messages as well.
    this.raw = range
      .trim()
      .split(/\s+/)
      .join(' ')

    // First, split on ||
    this.set = this.raw
      .split('||')
      // map the range to a 2d array of comparators
      .map(r => this.parseRange(r.trim()))
      // throw out any comparator lists that are empty
      // this generally means that it was not a valid range, which is allowed
      // in loose mode, but will still throw if the WHOLE range is invalid.
      .filter(c => c.length)

    if (!this.set.length) {
      throw new TypeError(`Invalid SemVer Range: ${this.raw}`)
    }

    // if we have any that are not the null set, throw out null sets.
    if (this.set.length > 1) {
      // keep the first one, in case they're all null sets
      const first = this.set[0]
      this.set = this.set.filter(c => !isNullSet(c[0]))
      if (this.set.length === 0) {
        this.set = [first]
      } else if (this.set.length > 1) {
        // if we have any that are *, then the range is just *
        for (const c of this.set) {
          if (c.length === 1 && isAny(c[0])) {
            this.set = [c]
            break
          }
        }
      }
    }

    this.format()
  }

  format () {
    this.range = this.set
      .map((comps) => comps.join(' ').trim())
      .join('||')
      .trim()
    return this.range
  }

  toString () {
    return this.range
  }

  parseRange (range) {
    // memoize range parsing for performance.
    // this is a very hot path, and fully deterministic.
    const memoOpts =
      (this.options.includePrerelease && FLAG_INCLUDE_PRERELEASE) |
      (this.options.loose && FLAG_LOOSE)
    const memoKey = memoOpts + ':' + range
    const cached = cache.get(memoKey)
    if (cached) {
      return cached
    }

    const loose = this.options.loose
    // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
    const hr = loose ? re[t.HYPHENRANGELOOSE] : re[t.HYPHENRANGE]
    range = range.replace(hr, hyphenReplace(this.options.includePrerelease))
    debug('hyphen replace', range)

    // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
    range = range.replace(re[t.COMPARATORTRIM], comparatorTrimReplace)
    debug('comparator trim', range)

    // `~ 1.2.3` => `~1.2.3`
    range = range.replace(re[t.TILDETRIM], tildeTrimReplace)
    debug('tilde trim', range)

    // `^ 1.2.3` => `^1.2.3`
    range = range.replace(re[t.CARETTRIM], caretTrimReplace)
    debug('caret trim', range)

    // At this point, the range is completely trimmed and
    // ready to be split into comparators.

    let rangeList = range
      .split(' ')
      .map(comp => parseComparator(comp, this.options))
      .join(' ')
      .split(/\s+/)
      // >=0.0.0 is equivalent to *
      .map(comp => replaceGTE0(comp, this.options))

    if (loose) {
      // in loose mode, throw out any that are not valid comparators
      rangeList = rangeList.filter(comp => {
        debug('loose invalid filter', comp, this.options)
        return !!comp.match(re[t.COMPARATORLOOSE])
      })
    }
    debug('range list', rangeList)

    // if any comparators are the null set, then replace with JUST null set
    // if more than one comparator, remove any * comparators
    // also, don't include the same comparator more than once
    const rangeMap = new Map()
    const comparators = rangeList.map(comp => new Comparator(comp, this.options))
    for (const comp of comparators) {
      if (isNullSet(comp)) {
        return [comp]
      }
      rangeMap.set(comp.value, comp)
    }
    if (rangeMap.size > 1 && rangeMap.has('')) {
      rangeMap.delete('')
    }

    const result = [...rangeMap.values()]
    cache.set(memoKey, result)
    return result
  }

  intersects (range, options) {
    if (!(range instanceof Range)) {
      throw new TypeError('a Range is required')
    }

    return this.set.some((thisComparators) => {
      return (
        isSatisfiable(thisComparators, options) &&
        range.set.some((rangeComparators) => {
          return (
            isSatisfiable(rangeComparators, options) &&
            thisComparators.every((thisComparator) => {
              return rangeComparators.every((rangeComparator) => {
                return thisComparator.intersects(rangeComparator, options)
              })
            })
          )
        })
      )
    })
  }

  // if ANY of the sets match ALL of its comparators, then pass
  test (version) {
    if (!version) {
      return false
    }

    if (typeof version === 'string') {
      try {
        version = new SemVer(version, this.options)
      } catch (er) {
        return false
      }
    }

    for (let i = 0; i < this.set.length; i++) {
      if (testSet(this.set[i], version, this.options)) {
        return true
      }
    }
    return false
  }
}

module.exports = Range

const LRU = __webpack_require__(/*! lru-cache */ "../../../node_modules/semver/node_modules/lru-cache/index.js")
const cache = new LRU({ max: 1000 })

const parseOptions = __webpack_require__(/*! ../internal/parse-options */ "../../../node_modules/semver/internal/parse-options.js")
const Comparator = __webpack_require__(/*! ./comparator */ "../../../node_modules/semver/classes/comparator.js")
const debug = __webpack_require__(/*! ../internal/debug */ "../../../node_modules/semver/internal/debug.js")
const SemVer = __webpack_require__(/*! ./semver */ "../../../node_modules/semver/classes/semver.js")
const {
  safeRe: re,
  t,
  comparatorTrimReplace,
  tildeTrimReplace,
  caretTrimReplace,
} = __webpack_require__(/*! ../internal/re */ "../../../node_modules/semver/internal/re.js")
const { FLAG_INCLUDE_PRERELEASE, FLAG_LOOSE } = __webpack_require__(/*! ../internal/constants */ "../../../node_modules/semver/internal/constants.js")

const isNullSet = c => c.value === '<0.0.0-0'
const isAny = c => c.value === ''

// take a set of comparators and determine whether there
// exists a version which can satisfy it
const isSatisfiable = (comparators, options) => {
  let result = true
  const remainingComparators = comparators.slice()
  let testComparator = remainingComparators.pop()

  while (result && remainingComparators.length) {
    result = remainingComparators.every((otherComparator) => {
      return testComparator.intersects(otherComparator, options)
    })

    testComparator = remainingComparators.pop()
  }

  return result
}

// comprised of xranges, tildes, stars, and gtlt's at this point.
// already replaced the hyphen ranges
// turn into a set of JUST comparators.
const parseComparator = (comp, options) => {
  debug('comp', comp, options)
  comp = replaceCarets(comp, options)
  debug('caret', comp)
  comp = replaceTildes(comp, options)
  debug('tildes', comp)
  comp = replaceXRanges(comp, options)
  debug('xrange', comp)
  comp = replaceStars(comp, options)
  debug('stars', comp)
  return comp
}

const isX = id => !id || id.toLowerCase() === 'x' || id === '*'

// ~, ~> --> * (any, kinda silly)
// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0-0
// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0-0
// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0-0
// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0-0
// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0-0
// ~0.0.1 --> >=0.0.1 <0.1.0-0
const replaceTildes = (comp, options) => {
  return comp
    .trim()
    .split(/\s+/)
    .map((c) => replaceTilde(c, options))
    .join(' ')
}

const replaceTilde = (comp, options) => {
  const r = options.loose ? re[t.TILDELOOSE] : re[t.TILDE]
  return comp.replace(r, (_, M, m, p, pr) => {
    debug('tilde', comp, _, M, m, p, pr)
    let ret

    if (isX(M)) {
      ret = ''
    } else if (isX(m)) {
      ret = `>=${M}.0.0 <${+M + 1}.0.0-0`
    } else if (isX(p)) {
      // ~1.2 == >=1.2.0 <1.3.0-0
      ret = `>=${M}.${m}.0 <${M}.${+m + 1}.0-0`
    } else if (pr) {
      debug('replaceTilde pr', pr)
      ret = `>=${M}.${m}.${p}-${pr
      } <${M}.${+m + 1}.0-0`
    } else {
      // ~1.2.3 == >=1.2.3 <1.3.0-0
      ret = `>=${M}.${m}.${p
      } <${M}.${+m + 1}.0-0`
    }

    debug('tilde return', ret)
    return ret
  })
}

// ^ --> * (any, kinda silly)
// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0-0
// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0-0
// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0-0
// ^1.2.3 --> >=1.2.3 <2.0.0-0
// ^1.2.0 --> >=1.2.0 <2.0.0-0
// ^0.0.1 --> >=0.0.1 <0.0.2-0
// ^0.1.0 --> >=0.1.0 <0.2.0-0
const replaceCarets = (comp, options) => {
  return comp
    .trim()
    .split(/\s+/)
    .map((c) => replaceCaret(c, options))
    .join(' ')
}

const replaceCaret = (comp, options) => {
  debug('caret', comp, options)
  const r = options.loose ? re[t.CARETLOOSE] : re[t.CARET]
  const z = options.includePrerelease ? '-0' : ''
  return comp.replace(r, (_, M, m, p, pr) => {
    debug('caret', comp, _, M, m, p, pr)
    let ret

    if (isX(M)) {
      ret = ''
    } else if (isX(m)) {
      ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`
    } else if (isX(p)) {
      if (M === '0') {
        ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`
      } else {
        ret = `>=${M}.${m}.0${z} <${+M + 1}.0.0-0`
      }
    } else if (pr) {
      debug('replaceCaret pr', pr)
      if (M === '0') {
        if (m === '0') {
          ret = `>=${M}.${m}.${p}-${pr
          } <${M}.${m}.${+p + 1}-0`
        } else {
          ret = `>=${M}.${m}.${p}-${pr
          } <${M}.${+m + 1}.0-0`
        }
      } else {
        ret = `>=${M}.${m}.${p}-${pr
        } <${+M + 1}.0.0-0`
      }
    } else {
      debug('no pr')
      if (M === '0') {
        if (m === '0') {
          ret = `>=${M}.${m}.${p
          }${z} <${M}.${m}.${+p + 1}-0`
        } else {
          ret = `>=${M}.${m}.${p
          }${z} <${M}.${+m + 1}.0-0`
        }
      } else {
        ret = `>=${M}.${m}.${p
        } <${+M + 1}.0.0-0`
      }
    }

    debug('caret return', ret)
    return ret
  })
}

const replaceXRanges = (comp, options) => {
  debug('replaceXRanges', comp, options)
  return comp
    .split(/\s+/)
    .map((c) => replaceXRange(c, options))
    .join(' ')
}

const replaceXRange = (comp, options) => {
  comp = comp.trim()
  const r = options.loose ? re[t.XRANGELOOSE] : re[t.XRANGE]
  return comp.replace(r, (ret, gtlt, M, m, p, pr) => {
    debug('xRange', comp, ret, gtlt, M, m, p, pr)
    const xM = isX(M)
    const xm = xM || isX(m)
    const xp = xm || isX(p)
    const anyX = xp

    if (gtlt === '=' && anyX) {
      gtlt = ''
    }

    // if we're including prereleases in the match, then we need
    // to fix this to -0, the lowest possible prerelease value
    pr = options.includePrerelease ? '-0' : ''

    if (xM) {
      if (gtlt === '>' || gtlt === '<') {
        // nothing is allowed
        ret = '<0.0.0-0'
      } else {
        // nothing is forbidden
        ret = '*'
      }
    } else if (gtlt && anyX) {
      // we know patch is an x, because we have any x at all.
      // replace X with 0
      if (xm) {
        m = 0
      }
      p = 0

      if (gtlt === '>') {
        // >1 => >=2.0.0
        // >1.2 => >=1.3.0
        gtlt = '>='
        if (xm) {
          M = +M + 1
          m = 0
          p = 0
        } else {
          m = +m + 1
          p = 0
        }
      } else if (gtlt === '<=') {
        // <=0.7.x is actually <0.8.0, since any 0.7.x should
        // pass.  Similarly, <=7.x is actually <8.0.0, etc.
        gtlt = '<'
        if (xm) {
          M = +M + 1
        } else {
          m = +m + 1
        }
      }

      if (gtlt === '<') {
        pr = '-0'
      }

      ret = `${gtlt + M}.${m}.${p}${pr}`
    } else if (xm) {
      ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0`
    } else if (xp) {
      ret = `>=${M}.${m}.0${pr
      } <${M}.${+m + 1}.0-0`
    }

    debug('xRange return', ret)

    return ret
  })
}

// Because * is AND-ed with everything else in the comparator,
// and '' means "any version", just remove the *s entirely.
const replaceStars = (comp, options) => {
  debug('replaceStars', comp, options)
  // Looseness is ignored here.  star is always as loose as it gets!
  return comp
    .trim()
    .replace(re[t.STAR], '')
}

const replaceGTE0 = (comp, options) => {
  debug('replaceGTE0', comp, options)
  return comp
    .trim()
    .replace(re[options.includePrerelease ? t.GTE0PRE : t.GTE0], '')
}

// This function is passed to string.replace(re[t.HYPHENRANGE])
// M, m, patch, prerelease, build
// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
// 1.2.3 - 3.4 => >=1.2.0 <3.5.0-0 Any 3.4.x will do
// 1.2 - 3.4 => >=1.2.0 <3.5.0-0
const hyphenReplace = incPr => ($0,
  from, fM, fm, fp, fpr, fb,
  to, tM, tm, tp, tpr, tb) => {
  if (isX(fM)) {
    from = ''
  } else if (isX(fm)) {
    from = `>=${fM}.0.0${incPr ? '-0' : ''}`
  } else if (isX(fp)) {
    from = `>=${fM}.${fm}.0${incPr ? '-0' : ''}`
  } else if (fpr) {
    from = `>=${from}`
  } else {
    from = `>=${from}${incPr ? '-0' : ''}`
  }

  if (isX(tM)) {
    to = ''
  } else if (isX(tm)) {
    to = `<${+tM + 1}.0.0-0`
  } else if (isX(tp)) {
    to = `<${tM}.${+tm + 1}.0-0`
  } else if (tpr) {
    to = `<=${tM}.${tm}.${tp}-${tpr}`
  } else if (incPr) {
    to = `<${tM}.${tm}.${+tp + 1}-0`
  } else {
    to = `<=${to}`
  }

  return `${from} ${to}`.trim()
}

const testSet = (set, version, options) => {
  for (let i = 0; i < set.length; i++) {
    if (!set[i].test(version)) {
      return false
    }
  }

  if (version.prerelease.length && !options.includePrerelease) {
    // Find the set of versions that are allowed to have prereleases
    // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
    // That should allow `1.2.3-pr.2` to pass.
    // However, `1.2.4-alpha.notready` should NOT be allowed,
    // even though it's within the range set by the comparators.
    for (let i = 0; i < set.length; i++) {
      debug(set[i].semver)
      if (set[i].semver === Comparator.ANY) {
        continue
      }

      if (set[i].semver.prerelease.length > 0) {
        const allowed = set[i].semver
        if (allowed.major === version.major &&
            allowed.minor === version.minor &&
            allowed.patch === version.patch) {
          return true
        }
      }
    }

    // Version has a -pre, but it's not one of the ones we like.
    return false
  }

  return true
}


/***/ }),

/***/ "../../../node_modules/semver/classes/semver.js":
/*!*******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/semver/classes/semver.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const debug = __webpack_require__(/*! ../internal/debug */ "../../../node_modules/semver/internal/debug.js")
const { MAX_LENGTH, MAX_SAFE_INTEGER } = __webpack_require__(/*! ../internal/constants */ "../../../node_modules/semver/internal/constants.js")
const { safeRe: re, t } = __webpack_require__(/*! ../internal/re */ "../../../node_modules/semver/internal/re.js")

const parseOptions = __webpack_require__(/*! ../internal/parse-options */ "../../../node_modules/semver/internal/parse-options.js")
const { compareIdentifiers } = __webpack_require__(/*! ../internal/identifiers */ "../../../node_modules/semver/internal/identifiers.js")
class SemVer {
  constructor (version, options) {
    options = parseOptions(options)

    if (version instanceof SemVer) {
      if (version.loose === !!options.loose &&
          version.includePrerelease === !!options.includePrerelease) {
        return version
      } else {
        version = version.version
      }
    } else if (typeof version !== 'string') {
      throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version}".`)
    }

    if (version.length > MAX_LENGTH) {
      throw new TypeError(
        `version is longer than ${MAX_LENGTH} characters`
      )
    }

    debug('SemVer', version, options)
    this.options = options
    this.loose = !!options.loose
    // this isn't actually relevant for versions, but keep it so that we
    // don't run into trouble passing this.options around.
    this.includePrerelease = !!options.includePrerelease

    const m = version.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL])

    if (!m) {
      throw new TypeError(`Invalid Version: ${version}`)
    }

    this.raw = version

    // these are actually numbers
    this.major = +m[1]
    this.minor = +m[2]
    this.patch = +m[3]

    if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
      throw new TypeError('Invalid major version')
    }

    if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
      throw new TypeError('Invalid minor version')
    }

    if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
      throw new TypeError('Invalid patch version')
    }

    // numberify any prerelease numeric ids
    if (!m[4]) {
      this.prerelease = []
    } else {
      this.prerelease = m[4].split('.').map((id) => {
        if (/^[0-9]+$/.test(id)) {
          const num = +id
          if (num >= 0 && num < MAX_SAFE_INTEGER) {
            return num
          }
        }
        return id
      })
    }

    this.build = m[5] ? m[5].split('.') : []
    this.format()
  }

  format () {
    this.version = `${this.major}.${this.minor}.${this.patch}`
    if (this.prerelease.length) {
      this.version += `-${this.prerelease.join('.')}`
    }
    return this.version
  }

  toString () {
    return this.version
  }

  compare (other) {
    debug('SemVer.compare', this.version, this.options, other)
    if (!(other instanceof SemVer)) {
      if (typeof other === 'string' && other === this.version) {
        return 0
      }
      other = new SemVer(other, this.options)
    }

    if (other.version === this.version) {
      return 0
    }

    return this.compareMain(other) || this.comparePre(other)
  }

  compareMain (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options)
    }

    return (
      compareIdentifiers(this.major, other.major) ||
      compareIdentifiers(this.minor, other.minor) ||
      compareIdentifiers(this.patch, other.patch)
    )
  }

  comparePre (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options)
    }

    // NOT having a prerelease is > having one
    if (this.prerelease.length && !other.prerelease.length) {
      return -1
    } else if (!this.prerelease.length && other.prerelease.length) {
      return 1
    } else if (!this.prerelease.length && !other.prerelease.length) {
      return 0
    }

    let i = 0
    do {
      const a = this.prerelease[i]
      const b = other.prerelease[i]
      debug('prerelease compare', i, a, b)
      if (a === undefined && b === undefined) {
        return 0
      } else if (b === undefined) {
        return 1
      } else if (a === undefined) {
        return -1
      } else if (a === b) {
        continue
      } else {
        return compareIdentifiers(a, b)
      }
    } while (++i)
  }

  compareBuild (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options)
    }

    let i = 0
    do {
      const a = this.build[i]
      const b = other.build[i]
      debug('prerelease compare', i, a, b)
      if (a === undefined && b === undefined) {
        return 0
      } else if (b === undefined) {
        return 1
      } else if (a === undefined) {
        return -1
      } else if (a === b) {
        continue
      } else {
        return compareIdentifiers(a, b)
      }
    } while (++i)
  }

  // preminor will bump the version up to the next minor release, and immediately
  // down to pre-release. premajor and prepatch work the same way.
  inc (release, identifier, identifierBase) {
    switch (release) {
      case 'premajor':
        this.prerelease.length = 0
        this.patch = 0
        this.minor = 0
        this.major++
        this.inc('pre', identifier, identifierBase)
        break
      case 'preminor':
        this.prerelease.length = 0
        this.patch = 0
        this.minor++
        this.inc('pre', identifier, identifierBase)
        break
      case 'prepatch':
        // If this is already a prerelease, it will bump to the next version
        // drop any prereleases that might already exist, since they are not
        // relevant at this point.
        this.prerelease.length = 0
        this.inc('patch', identifier, identifierBase)
        this.inc('pre', identifier, identifierBase)
        break
      // If the input is a non-prerelease version, this acts the same as
      // prepatch.
      case 'prerelease':
        if (this.prerelease.length === 0) {
          this.inc('patch', identifier, identifierBase)
        }
        this.inc('pre', identifier, identifierBase)
        break

      case 'major':
        // If this is a pre-major version, bump up to the same major version.
        // Otherwise increment major.
        // 1.0.0-5 bumps to 1.0.0
        // 1.1.0 bumps to 2.0.0
        if (
          this.minor !== 0 ||
          this.patch !== 0 ||
          this.prerelease.length === 0
        ) {
          this.major++
        }
        this.minor = 0
        this.patch = 0
        this.prerelease = []
        break
      case 'minor':
        // If this is a pre-minor version, bump up to the same minor version.
        // Otherwise increment minor.
        // 1.2.0-5 bumps to 1.2.0
        // 1.2.1 bumps to 1.3.0
        if (this.patch !== 0 || this.prerelease.length === 0) {
          this.minor++
        }
        this.patch = 0
        this.prerelease = []
        break
      case 'patch':
        // If this is not a pre-release version, it will increment the patch.
        // If it is a pre-release it will bump up to the same patch version.
        // 1.2.0-5 patches to 1.2.0
        // 1.2.0 patches to 1.2.1
        if (this.prerelease.length === 0) {
          this.patch++
        }
        this.prerelease = []
        break
      // This probably shouldn't be used publicly.
      // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.
      case 'pre': {
        const base = Number(identifierBase) ? 1 : 0

        if (!identifier && identifierBase === false) {
          throw new Error('invalid increment argument: identifier is empty')
        }

        if (this.prerelease.length === 0) {
          this.prerelease = [base]
        } else {
          let i = this.prerelease.length
          while (--i >= 0) {
            if (typeof this.prerelease[i] === 'number') {
              this.prerelease[i]++
              i = -2
            }
          }
          if (i === -1) {
            // didn't increment anything
            if (identifier === this.prerelease.join('.') && identifierBase === false) {
              throw new Error('invalid increment argument: identifier already exists')
            }
            this.prerelease.push(base)
          }
        }
        if (identifier) {
          // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
          // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
          let prerelease = [identifier, base]
          if (identifierBase === false) {
            prerelease = [identifier]
          }
          if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
            if (isNaN(this.prerelease[1])) {
              this.prerelease = prerelease
            }
          } else {
            this.prerelease = prerelease
          }
        }
        break
      }
      default:
        throw new Error(`invalid increment argument: ${release}`)
    }
    this.raw = this.format()
    if (this.build.length) {
      this.raw += `+${this.build.join('.')}`
    }
    return this
  }
}

module.exports = SemVer


/***/ }),

/***/ "../../../node_modules/semver/functions/clean.js":
/*!********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/semver/functions/clean.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const parse = __webpack_require__(/*! ./parse */ "../../../node_modules/semver/functions/parse.js")
const clean = (version, options) => {
  const s = parse(version.trim().replace(/^[=v]+/, ''), options)
  return s ? s.version : null
}
module.exports = clean


/***/ }),

/***/ "../../../node_modules/semver/functions/cmp.js":
/*!******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/semver/functions/cmp.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const eq = __webpack_require__(/*! ./eq */ "../../../node_modules/semver/functions/eq.js")
const neq = __webpack_require__(/*! ./neq */ "../../../node_modules/semver/functions/neq.js")
const gt = __webpack_require__(/*! ./gt */ "../../../node_modules/semver/functions/gt.js")
const gte = __webpack_require__(/*! ./gte */ "../../../node_modules/semver/functions/gte.js")
const lt = __webpack_require__(/*! ./lt */ "../../../node_modules/semver/functions/lt.js")
const lte = __webpack_require__(/*! ./lte */ "../../../node_modules/semver/functions/lte.js")

const cmp = (a, op, b, loose) => {
  switch (op) {
    case '===':
      if (typeof a === 'object') {
        a = a.version
      }
      if (typeof b === 'object') {
        b = b.version
      }
      return a === b

    case '!==':
      if (typeof a === 'object') {
        a = a.version
      }
      if (typeof b === 'object') {
        b = b.version
      }
      return a !== b

    case '':
    case '=':
    case '==':
      return eq(a, b, loose)

    case '!=':
      return neq(a, b, loose)

    case '>':
      return gt(a, b, loose)

    case '>=':
      return gte(a, b, loose)

    case '<':
      return lt(a, b, loose)

    case '<=':
      return lte(a, b, loose)

    default:
      throw new TypeError(`Invalid operator: ${op}`)
  }
}
module.exports = cmp


/***/ }),

/***/ "../../../node_modules/semver/functions/coerce.js":
/*!*********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/semver/functions/coerce.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const SemVer = __webpack_require__(/*! ../classes/semver */ "../../../node_modules/semver/classes/semver.js")
const parse = __webpack_require__(/*! ./parse */ "../../../node_modules/semver/functions/parse.js")
const { safeRe: re, t } = __webpack_require__(/*! ../internal/re */ "../../../node_modules/semver/internal/re.js")

const coerce = (version, options) => {
  if (version instanceof SemVer) {
    return version
  }

  if (typeof version === 'number') {
    version = String(version)
  }

  if (typeof version !== 'string') {
    return null
  }

  options = options || {}

  let match = null
  if (!options.rtl) {
    match = version.match(re[t.COERCE])
  } else {
    // Find the right-most coercible string that does not share
    // a terminus with a more left-ward coercible string.
    // Eg, '1.2.3.4' wants to coerce '2.3.4', not '3.4' or '4'
    //
    // Walk through the string checking with a /g regexp
    // Manually set the index so as to pick up overlapping matches.
    // Stop when we get a match that ends at the string end, since no
    // coercible string can be more right-ward without the same terminus.
    let next
    while ((next = re[t.COERCERTL].exec(version)) &&
        (!match || match.index + match[0].length !== version.length)
    ) {
      if (!match ||
            next.index + next[0].length !== match.index + match[0].length) {
        match = next
      }
      re[t.COERCERTL].lastIndex = next.index + next[1].length + next[2].length
    }
    // leave it in a clean state
    re[t.COERCERTL].lastIndex = -1
  }

  if (match === null) {
    return null
  }

  return parse(`${match[2]}.${match[3] || '0'}.${match[4] || '0'}`, options)
}
module.exports = coerce


/***/ }),

/***/ "../../../node_modules/semver/functions/compare-build.js":
/*!****************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/semver/functions/compare-build.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const SemVer = __webpack_require__(/*! ../classes/semver */ "../../../node_modules/semver/classes/semver.js")
const compareBuild = (a, b, loose) => {
  const versionA = new SemVer(a, loose)
  const versionB = new SemVer(b, loose)
  return versionA.compare(versionB) || versionA.compareBuild(versionB)
}
module.exports = compareBuild


/***/ }),

/***/ "../../../node_modules/semver/functions/compare-loose.js":
/*!****************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/semver/functions/compare-loose.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const compare = __webpack_require__(/*! ./compare */ "../../../node_modules/semver/functions/compare.js")
const compareLoose = (a, b) => compare(a, b, true)
module.exports = compareLoose


/***/ }),

/***/ "../../../node_modules/semver/functions/compare.js":
/*!**********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/semver/functions/compare.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const SemVer = __webpack_require__(/*! ../classes/semver */ "../../../node_modules/semver/classes/semver.js")
const compare = (a, b, loose) =>
  new SemVer(a, loose).compare(new SemVer(b, loose))

module.exports = compare


/***/ }),

/***/ "../../../node_modules/semver/functions/diff.js":
/*!*******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/semver/functions/diff.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const parse = __webpack_require__(/*! ./parse.js */ "../../../node_modules/semver/functions/parse.js")

const diff = (version1, version2) => {
  const v1 = parse(version1, null, true)
  const v2 = parse(version2, null, true)
  const comparison = v1.compare(v2)

  if (comparison === 0) {
    return null
  }

  const v1Higher = comparison > 0
  const highVersion = v1Higher ? v1 : v2
  const lowVersion = v1Higher ? v2 : v1
  const highHasPre = !!highVersion.prerelease.length
  const lowHasPre = !!lowVersion.prerelease.length

  if (lowHasPre && !highHasPre) {
    // Going from prerelease -> no prerelease requires some special casing

    // If the low version has only a major, then it will always be a major
    // Some examples:
    // 1.0.0-1 -> 1.0.0
    // 1.0.0-1 -> 1.1.1
    // 1.0.0-1 -> 2.0.0
    if (!lowVersion.patch && !lowVersion.minor) {
      return 'major'
    }

    // Otherwise it can be determined by checking the high version

    if (highVersion.patch) {
      // anything higher than a patch bump would result in the wrong version
      return 'patch'
    }

    if (highVersion.minor) {
      // anything higher than a minor bump would result in the wrong version
      return 'minor'
    }

    // bumping major/minor/patch all have same result
    return 'major'
  }

  // add the `pre` prefix if we are going to a prerelease version
  const prefix = highHasPre ? 'pre' : ''

  if (v1.major !== v2.major) {
    return prefix + 'major'
  }

  if (v1.minor !== v2.minor) {
    return prefix + 'minor'
  }

  if (v1.patch !== v2.patch) {
    return prefix + 'patch'
  }

  // high and low are preleases
  return 'prerelease'
}

module.exports = diff


/***/ }),

/***/ "../../../node_modules/semver/functions/eq.js":
/*!*****************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/semver/functions/eq.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const compare = __webpack_require__(/*! ./compare */ "../../../node_modules/semver/functions/compare.js")
const eq = (a, b, loose) => compare(a, b, loose) === 0
module.exports = eq


/***/ }),

/***/ "../../../node_modules/semver/functions/gt.js":
/*!*****************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/semver/functions/gt.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const compare = __webpack_require__(/*! ./compare */ "../../../node_modules/semver/functions/compare.js")
const gt = (a, b, loose) => compare(a, b, loose) > 0
module.exports = gt


/***/ }),

/***/ "../../../node_modules/semver/functions/gte.js":
/*!******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/semver/functions/gte.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const compare = __webpack_require__(/*! ./compare */ "../../../node_modules/semver/functions/compare.js")
const gte = (a, b, loose) => compare(a, b, loose) >= 0
module.exports = gte


/***/ }),

/***/ "../../../node_modules/semver/functions/inc.js":
/*!******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/semver/functions/inc.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const SemVer = __webpack_require__(/*! ../classes/semver */ "../../../node_modules/semver/classes/semver.js")

const inc = (version, release, options, identifier, identifierBase) => {
  if (typeof (options) === 'string') {
    identifierBase = identifier
    identifier = options
    options = undefined
  }

  try {
    return new SemVer(
      version instanceof SemVer ? version.version : version,
      options
    ).inc(release, identifier, identifierBase).version
  } catch (er) {
    return null
  }
}
module.exports = inc


/***/ }),

/***/ "../../../node_modules/semver/functions/lt.js":
/*!*****************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/semver/functions/lt.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const compare = __webpack_require__(/*! ./compare */ "../../../node_modules/semver/functions/compare.js")
const lt = (a, b, loose) => compare(a, b, loose) < 0
module.exports = lt


/***/ }),

/***/ "../../../node_modules/semver/functions/lte.js":
/*!******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/semver/functions/lte.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const compare = __webpack_require__(/*! ./compare */ "../../../node_modules/semver/functions/compare.js")
const lte = (a, b, loose) => compare(a, b, loose) <= 0
module.exports = lte


/***/ }),

/***/ "../../../node_modules/semver/functions/major.js":
/*!********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/semver/functions/major.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const SemVer = __webpack_require__(/*! ../classes/semver */ "../../../node_modules/semver/classes/semver.js")
const major = (a, loose) => new SemVer(a, loose).major
module.exports = major


/***/ }),

/***/ "../../../node_modules/semver/functions/minor.js":
/*!********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/semver/functions/minor.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const SemVer = __webpack_require__(/*! ../classes/semver */ "../../../node_modules/semver/classes/semver.js")
const minor = (a, loose) => new SemVer(a, loose).minor
module.exports = minor


/***/ }),

/***/ "../../../node_modules/semver/functions/neq.js":
/*!******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/semver/functions/neq.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const compare = __webpack_require__(/*! ./compare */ "../../../node_modules/semver/functions/compare.js")
const neq = (a, b, loose) => compare(a, b, loose) !== 0
module.exports = neq


/***/ }),

/***/ "../../../node_modules/semver/functions/parse.js":
/*!********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/semver/functions/parse.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const SemVer = __webpack_require__(/*! ../classes/semver */ "../../../node_modules/semver/classes/semver.js")
const parse = (version, options, throwErrors = false) => {
  if (version instanceof SemVer) {
    return version
  }
  try {
    return new SemVer(version, options)
  } catch (er) {
    if (!throwErrors) {
      return null
    }
    throw er
  }
}

module.exports = parse


/***/ }),

/***/ "../../../node_modules/semver/functions/patch.js":
/*!********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/semver/functions/patch.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const SemVer = __webpack_require__(/*! ../classes/semver */ "../../../node_modules/semver/classes/semver.js")
const patch = (a, loose) => new SemVer(a, loose).patch
module.exports = patch


/***/ }),

/***/ "../../../node_modules/semver/functions/prerelease.js":
/*!*************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/semver/functions/prerelease.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const parse = __webpack_require__(/*! ./parse */ "../../../node_modules/semver/functions/parse.js")
const prerelease = (version, options) => {
  const parsed = parse(version, options)
  return (parsed && parsed.prerelease.length) ? parsed.prerelease : null
}
module.exports = prerelease


/***/ }),

/***/ "../../../node_modules/semver/functions/rcompare.js":
/*!***********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/semver/functions/rcompare.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const compare = __webpack_require__(/*! ./compare */ "../../../node_modules/semver/functions/compare.js")
const rcompare = (a, b, loose) => compare(b, a, loose)
module.exports = rcompare


/***/ }),

/***/ "../../../node_modules/semver/functions/rsort.js":
/*!********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/semver/functions/rsort.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const compareBuild = __webpack_require__(/*! ./compare-build */ "../../../node_modules/semver/functions/compare-build.js")
const rsort = (list, loose) => list.sort((a, b) => compareBuild(b, a, loose))
module.exports = rsort


/***/ }),

/***/ "../../../node_modules/semver/functions/satisfies.js":
/*!************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/semver/functions/satisfies.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Range = __webpack_require__(/*! ../classes/range */ "../../../node_modules/semver/classes/range.js")
const satisfies = (version, range, options) => {
  try {
    range = new Range(range, options)
  } catch (er) {
    return false
  }
  return range.test(version)
}
module.exports = satisfies


/***/ }),

/***/ "../../../node_modules/semver/functions/sort.js":
/*!*******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/semver/functions/sort.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const compareBuild = __webpack_require__(/*! ./compare-build */ "../../../node_modules/semver/functions/compare-build.js")
const sort = (list, loose) => list.sort((a, b) => compareBuild(a, b, loose))
module.exports = sort


/***/ }),

/***/ "../../../node_modules/semver/functions/valid.js":
/*!********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/semver/functions/valid.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const parse = __webpack_require__(/*! ./parse */ "../../../node_modules/semver/functions/parse.js")
const valid = (version, options) => {
  const v = parse(version, options)
  return v ? v.version : null
}
module.exports = valid


/***/ }),

/***/ "../../../node_modules/semver/index.js":
/*!**********************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/semver/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// just pre-load all the stuff that index.js lazily exports
const internalRe = __webpack_require__(/*! ./internal/re */ "../../../node_modules/semver/internal/re.js")
const constants = __webpack_require__(/*! ./internal/constants */ "../../../node_modules/semver/internal/constants.js")
const SemVer = __webpack_require__(/*! ./classes/semver */ "../../../node_modules/semver/classes/semver.js")
const identifiers = __webpack_require__(/*! ./internal/identifiers */ "../../../node_modules/semver/internal/identifiers.js")
const parse = __webpack_require__(/*! ./functions/parse */ "../../../node_modules/semver/functions/parse.js")
const valid = __webpack_require__(/*! ./functions/valid */ "../../../node_modules/semver/functions/valid.js")
const clean = __webpack_require__(/*! ./functions/clean */ "../../../node_modules/semver/functions/clean.js")
const inc = __webpack_require__(/*! ./functions/inc */ "../../../node_modules/semver/functions/inc.js")
const diff = __webpack_require__(/*! ./functions/diff */ "../../../node_modules/semver/functions/diff.js")
const major = __webpack_require__(/*! ./functions/major */ "../../../node_modules/semver/functions/major.js")
const minor = __webpack_require__(/*! ./functions/minor */ "../../../node_modules/semver/functions/minor.js")
const patch = __webpack_require__(/*! ./functions/patch */ "../../../node_modules/semver/functions/patch.js")
const prerelease = __webpack_require__(/*! ./functions/prerelease */ "../../../node_modules/semver/functions/prerelease.js")
const compare = __webpack_require__(/*! ./functions/compare */ "../../../node_modules/semver/functions/compare.js")
const rcompare = __webpack_require__(/*! ./functions/rcompare */ "../../../node_modules/semver/functions/rcompare.js")
const compareLoose = __webpack_require__(/*! ./functions/compare-loose */ "../../../node_modules/semver/functions/compare-loose.js")
const compareBuild = __webpack_require__(/*! ./functions/compare-build */ "../../../node_modules/semver/functions/compare-build.js")
const sort = __webpack_require__(/*! ./functions/sort */ "../../../node_modules/semver/functions/sort.js")
const rsort = __webpack_require__(/*! ./functions/rsort */ "../../../node_modules/semver/functions/rsort.js")
const gt = __webpack_require__(/*! ./functions/gt */ "../../../node_modules/semver/functions/gt.js")
const lt = __webpack_require__(/*! ./functions/lt */ "../../../node_modules/semver/functions/lt.js")
const eq = __webpack_require__(/*! ./functions/eq */ "../../../node_modules/semver/functions/eq.js")
const neq = __webpack_require__(/*! ./functions/neq */ "../../../node_modules/semver/functions/neq.js")
const gte = __webpack_require__(/*! ./functions/gte */ "../../../node_modules/semver/functions/gte.js")
const lte = __webpack_require__(/*! ./functions/lte */ "../../../node_modules/semver/functions/lte.js")
const cmp = __webpack_require__(/*! ./functions/cmp */ "../../../node_modules/semver/functions/cmp.js")
const coerce = __webpack_require__(/*! ./functions/coerce */ "../../../node_modules/semver/functions/coerce.js")
const Comparator = __webpack_require__(/*! ./classes/comparator */ "../../../node_modules/semver/classes/comparator.js")
const Range = __webpack_require__(/*! ./classes/range */ "../../../node_modules/semver/classes/range.js")
const satisfies = __webpack_require__(/*! ./functions/satisfies */ "../../../node_modules/semver/functions/satisfies.js")
const toComparators = __webpack_require__(/*! ./ranges/to-comparators */ "../../../node_modules/semver/ranges/to-comparators.js")
const maxSatisfying = __webpack_require__(/*! ./ranges/max-satisfying */ "../../../node_modules/semver/ranges/max-satisfying.js")
const minSatisfying = __webpack_require__(/*! ./ranges/min-satisfying */ "../../../node_modules/semver/ranges/min-satisfying.js")
const minVersion = __webpack_require__(/*! ./ranges/min-version */ "../../../node_modules/semver/ranges/min-version.js")
const validRange = __webpack_require__(/*! ./ranges/valid */ "../../../node_modules/semver/ranges/valid.js")
const outside = __webpack_require__(/*! ./ranges/outside */ "../../../node_modules/semver/ranges/outside.js")
const gtr = __webpack_require__(/*! ./ranges/gtr */ "../../../node_modules/semver/ranges/gtr.js")
const ltr = __webpack_require__(/*! ./ranges/ltr */ "../../../node_modules/semver/ranges/ltr.js")
const intersects = __webpack_require__(/*! ./ranges/intersects */ "../../../node_modules/semver/ranges/intersects.js")
const simplifyRange = __webpack_require__(/*! ./ranges/simplify */ "../../../node_modules/semver/ranges/simplify.js")
const subset = __webpack_require__(/*! ./ranges/subset */ "../../../node_modules/semver/ranges/subset.js")
module.exports = {
  parse,
  valid,
  clean,
  inc,
  diff,
  major,
  minor,
  patch,
  prerelease,
  compare,
  rcompare,
  compareLoose,
  compareBuild,
  sort,
  rsort,
  gt,
  lt,
  eq,
  neq,
  gte,
  lte,
  cmp,
  coerce,
  Comparator,
  Range,
  satisfies,
  toComparators,
  maxSatisfying,
  minSatisfying,
  minVersion,
  validRange,
  outside,
  gtr,
  ltr,
  intersects,
  simplifyRange,
  subset,
  SemVer,
  re: internalRe.re,
  src: internalRe.src,
  tokens: internalRe.t,
  SEMVER_SPEC_VERSION: constants.SEMVER_SPEC_VERSION,
  RELEASE_TYPES: constants.RELEASE_TYPES,
  compareIdentifiers: identifiers.compareIdentifiers,
  rcompareIdentifiers: identifiers.rcompareIdentifiers,
}


/***/ }),

/***/ "../../../node_modules/semver/internal/constants.js":
/*!***********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/semver/internal/constants.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.
const SEMVER_SPEC_VERSION = '2.0.0'

const MAX_LENGTH = 256
const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER ||
/* istanbul ignore next */ 9007199254740991

// Max safe segment length for coercion.
const MAX_SAFE_COMPONENT_LENGTH = 16

// Max safe length for a build identifier. The max length minus 6 characters for
// the shortest version with a build 0.0.0+BUILD.
const MAX_SAFE_BUILD_LENGTH = MAX_LENGTH - 6

const RELEASE_TYPES = [
  'major',
  'premajor',
  'minor',
  'preminor',
  'patch',
  'prepatch',
  'prerelease',
]

module.exports = {
  MAX_LENGTH,
  MAX_SAFE_COMPONENT_LENGTH,
  MAX_SAFE_BUILD_LENGTH,
  MAX_SAFE_INTEGER,
  RELEASE_TYPES,
  SEMVER_SPEC_VERSION,
  FLAG_INCLUDE_PRERELEASE: 0b001,
  FLAG_LOOSE: 0b010,
}


/***/ }),

/***/ "../../../node_modules/semver/internal/debug.js":
/*!*******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/semver/internal/debug.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {const debug = (
  typeof process === 'object' &&
  process.env &&
  process.env.NODE_DEBUG &&
  /\bsemver\b/i.test(process.env.NODE_DEBUG)
) ? (...args) => console.error('SEMVER', ...args)
  : () => {}

module.exports = debug

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "../../../node_modules/process/browser.js")))

/***/ }),

/***/ "../../../node_modules/semver/internal/identifiers.js":
/*!*************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/semver/internal/identifiers.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const numeric = /^[0-9]+$/
const compareIdentifiers = (a, b) => {
  const anum = numeric.test(a)
  const bnum = numeric.test(b)

  if (anum && bnum) {
    a = +a
    b = +b
  }

  return a === b ? 0
    : (anum && !bnum) ? -1
    : (bnum && !anum) ? 1
    : a < b ? -1
    : 1
}

const rcompareIdentifiers = (a, b) => compareIdentifiers(b, a)

module.exports = {
  compareIdentifiers,
  rcompareIdentifiers,
}


/***/ }),

/***/ "../../../node_modules/semver/internal/parse-options.js":
/*!***************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/semver/internal/parse-options.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// parse out just the options we care about
const looseOption = Object.freeze({ loose: true })
const emptyOpts = Object.freeze({ })
const parseOptions = options => {
  if (!options) {
    return emptyOpts
  }

  if (typeof options !== 'object') {
    return looseOption
  }

  return options
}
module.exports = parseOptions


/***/ }),

/***/ "../../../node_modules/semver/internal/re.js":
/*!****************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/semver/internal/re.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  MAX_SAFE_COMPONENT_LENGTH,
  MAX_SAFE_BUILD_LENGTH,
  MAX_LENGTH,
} = __webpack_require__(/*! ./constants */ "../../../node_modules/semver/internal/constants.js")
const debug = __webpack_require__(/*! ./debug */ "../../../node_modules/semver/internal/debug.js")
exports = module.exports = {}

// The actual regexps go on exports.re
const re = exports.re = []
const safeRe = exports.safeRe = []
const src = exports.src = []
const t = exports.t = {}
let R = 0

const LETTERDASHNUMBER = '[a-zA-Z0-9-]'

// Replace some greedy regex tokens to prevent regex dos issues. These regex are
// used internally via the safeRe object since all inputs in this library get
// normalized first to trim and collapse all extra whitespace. The original
// regexes are exported for userland consumption and lower level usage. A
// future breaking change could export the safer regex only with a note that
// all input should have extra whitespace removed.
const safeRegexReplacements = [
  ['\\s', 1],
  ['\\d', MAX_LENGTH],
  [LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH],
]

const makeSafeRegex = (value) => {
  for (const [token, max] of safeRegexReplacements) {
    value = value
      .split(`${token}*`).join(`${token}{0,${max}}`)
      .split(`${token}+`).join(`${token}{1,${max}}`)
  }
  return value
}

const createToken = (name, value, isGlobal) => {
  const safe = makeSafeRegex(value)
  const index = R++
  debug(name, index, value)
  t[name] = index
  src[index] = value
  re[index] = new RegExp(value, isGlobal ? 'g' : undefined)
  safeRe[index] = new RegExp(safe, isGlobal ? 'g' : undefined)
}

// The following Regular Expressions can be used for tokenizing,
// validating, and parsing SemVer version strings.

// ## Numeric Identifier
// A single `0`, or a non-zero digit followed by zero or more digits.

createToken('NUMERICIDENTIFIER', '0|[1-9]\\d*')
createToken('NUMERICIDENTIFIERLOOSE', '\\d+')

// ## Non-numeric Identifier
// Zero or more digits, followed by a letter or hyphen, and then zero or
// more letters, digits, or hyphens.

createToken('NONNUMERICIDENTIFIER', `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`)

// ## Main Version
// Three dot-separated numeric identifiers.

createToken('MAINVERSION', `(${src[t.NUMERICIDENTIFIER]})\\.` +
                   `(${src[t.NUMERICIDENTIFIER]})\\.` +
                   `(${src[t.NUMERICIDENTIFIER]})`)

createToken('MAINVERSIONLOOSE', `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` +
                        `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` +
                        `(${src[t.NUMERICIDENTIFIERLOOSE]})`)

// ## Pre-release Version Identifier
// A numeric identifier, or a non-numeric identifier.

createToken('PRERELEASEIDENTIFIER', `(?:${src[t.NUMERICIDENTIFIER]
}|${src[t.NONNUMERICIDENTIFIER]})`)

createToken('PRERELEASEIDENTIFIERLOOSE', `(?:${src[t.NUMERICIDENTIFIERLOOSE]
}|${src[t.NONNUMERICIDENTIFIER]})`)

// ## Pre-release Version
// Hyphen, followed by one or more dot-separated pre-release version
// identifiers.

createToken('PRERELEASE', `(?:-(${src[t.PRERELEASEIDENTIFIER]
}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`)

createToken('PRERELEASELOOSE', `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]
}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`)

// ## Build Metadata Identifier
// Any combination of digits, letters, or hyphens.

createToken('BUILDIDENTIFIER', `${LETTERDASHNUMBER}+`)

// ## Build Metadata
// Plus sign, followed by one or more period-separated build metadata
// identifiers.

createToken('BUILD', `(?:\\+(${src[t.BUILDIDENTIFIER]
}(?:\\.${src[t.BUILDIDENTIFIER]})*))`)

// ## Full Version String
// A main version, followed optionally by a pre-release version and
// build metadata.

// Note that the only major, minor, patch, and pre-release sections of
// the version string are capturing groups.  The build metadata is not a
// capturing group, because it should not ever be used in version
// comparison.

createToken('FULLPLAIN', `v?${src[t.MAINVERSION]
}${src[t.PRERELEASE]}?${
  src[t.BUILD]}?`)

createToken('FULL', `^${src[t.FULLPLAIN]}$`)

// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
// common in the npm registry.
createToken('LOOSEPLAIN', `[v=\\s]*${src[t.MAINVERSIONLOOSE]
}${src[t.PRERELEASELOOSE]}?${
  src[t.BUILD]}?`)

createToken('LOOSE', `^${src[t.LOOSEPLAIN]}$`)

createToken('GTLT', '((?:<|>)?=?)')

// Something like "2.*" or "1.2.x".
// Note that "x.x" is a valid xRange identifer, meaning "any version"
// Only the first item is strictly required.
createToken('XRANGEIDENTIFIERLOOSE', `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`)
createToken('XRANGEIDENTIFIER', `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`)

createToken('XRANGEPLAIN', `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})` +
                   `(?:\\.(${src[t.XRANGEIDENTIFIER]})` +
                   `(?:\\.(${src[t.XRANGEIDENTIFIER]})` +
                   `(?:${src[t.PRERELEASE]})?${
                     src[t.BUILD]}?` +
                   `)?)?`)

createToken('XRANGEPLAINLOOSE', `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})` +
                        `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` +
                        `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` +
                        `(?:${src[t.PRERELEASELOOSE]})?${
                          src[t.BUILD]}?` +
                        `)?)?`)

createToken('XRANGE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`)
createToken('XRANGELOOSE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`)

// Coercion.
// Extract anything that could conceivably be a part of a valid semver
createToken('COERCE', `${'(^|[^\\d])' +
              '(\\d{1,'}${MAX_SAFE_COMPONENT_LENGTH}})` +
              `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?` +
              `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?` +
              `(?:$|[^\\d])`)
createToken('COERCERTL', src[t.COERCE], true)

// Tilde ranges.
// Meaning is "reasonably at or greater than"
createToken('LONETILDE', '(?:~>?)')

createToken('TILDETRIM', `(\\s*)${src[t.LONETILDE]}\\s+`, true)
exports.tildeTrimReplace = '$1~'

createToken('TILDE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`)
createToken('TILDELOOSE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`)

// Caret ranges.
// Meaning is "at least and backwards compatible with"
createToken('LONECARET', '(?:\\^)')

createToken('CARETTRIM', `(\\s*)${src[t.LONECARET]}\\s+`, true)
exports.caretTrimReplace = '$1^'

createToken('CARET', `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`)
createToken('CARETLOOSE', `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`)

// A simple gt/lt/eq thing, or just "" to indicate "any version"
createToken('COMPARATORLOOSE', `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`)
createToken('COMPARATOR', `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`)

// An expression to strip any whitespace between the gtlt and the thing
// it modifies, so that `> 1.2.3` ==> `>1.2.3`
createToken('COMPARATORTRIM', `(\\s*)${src[t.GTLT]
}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true)
exports.comparatorTrimReplace = '$1$2$3'

// Something like `1.2.3 - 1.2.4`
// Note that these all use the loose form, because they'll be
// checked against either the strict or loose comparator form
// later.
createToken('HYPHENRANGE', `^\\s*(${src[t.XRANGEPLAIN]})` +
                   `\\s+-\\s+` +
                   `(${src[t.XRANGEPLAIN]})` +
                   `\\s*$`)

createToken('HYPHENRANGELOOSE', `^\\s*(${src[t.XRANGEPLAINLOOSE]})` +
                        `\\s+-\\s+` +
                        `(${src[t.XRANGEPLAINLOOSE]})` +
                        `\\s*$`)

// Star ranges basically just allow anything at all.
createToken('STAR', '(<|>)?=?\\s*\\*')
// >=0.0.0 is like a star
createToken('GTE0', '^\\s*>=\\s*0\\.0\\.0\\s*$')
createToken('GTE0PRE', '^\\s*>=\\s*0\\.0\\.0-0\\s*$')


/***/ }),

/***/ "../../../node_modules/semver/node_modules/lru-cache/index.js":
/*!*********************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/semver/node_modules/lru-cache/index.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// A linked list to keep track of recently-used-ness
const Yallist = __webpack_require__(/*! yallist */ "../../../node_modules/yallist/yallist.js")

const MAX = Symbol('max')
const LENGTH = Symbol('length')
const LENGTH_CALCULATOR = Symbol('lengthCalculator')
const ALLOW_STALE = Symbol('allowStale')
const MAX_AGE = Symbol('maxAge')
const DISPOSE = Symbol('dispose')
const NO_DISPOSE_ON_SET = Symbol('noDisposeOnSet')
const LRU_LIST = Symbol('lruList')
const CACHE = Symbol('cache')
const UPDATE_AGE_ON_GET = Symbol('updateAgeOnGet')

const naiveLength = () => 1

// lruList is a yallist where the head is the youngest
// item, and the tail is the oldest.  the list contains the Hit
// objects as the entries.
// Each Hit object has a reference to its Yallist.Node.  This
// never changes.
//
// cache is a Map (or PseudoMap) that matches the keys to
// the Yallist.Node object.
class LRUCache {
  constructor (options) {
    if (typeof options === 'number')
      options = { max: options }

    if (!options)
      options = {}

    if (options.max && (typeof options.max !== 'number' || options.max < 0))
      throw new TypeError('max must be a non-negative number')
    // Kind of weird to have a default max of Infinity, but oh well.
    const max = this[MAX] = options.max || Infinity

    const lc = options.length || naiveLength
    this[LENGTH_CALCULATOR] = (typeof lc !== 'function') ? naiveLength : lc
    this[ALLOW_STALE] = options.stale || false
    if (options.maxAge && typeof options.maxAge !== 'number')
      throw new TypeError('maxAge must be a number')
    this[MAX_AGE] = options.maxAge || 0
    this[DISPOSE] = options.dispose
    this[NO_DISPOSE_ON_SET] = options.noDisposeOnSet || false
    this[UPDATE_AGE_ON_GET] = options.updateAgeOnGet || false
    this.reset()
  }

  // resize the cache when the max changes.
  set max (mL) {
    if (typeof mL !== 'number' || mL < 0)
      throw new TypeError('max must be a non-negative number')

    this[MAX] = mL || Infinity
    trim(this)
  }
  get max () {
    return this[MAX]
  }

  set allowStale (allowStale) {
    this[ALLOW_STALE] = !!allowStale
  }
  get allowStale () {
    return this[ALLOW_STALE]
  }

  set maxAge (mA) {
    if (typeof mA !== 'number')
      throw new TypeError('maxAge must be a non-negative number')

    this[MAX_AGE] = mA
    trim(this)
  }
  get maxAge () {
    return this[MAX_AGE]
  }

  // resize the cache when the lengthCalculator changes.
  set lengthCalculator (lC) {
    if (typeof lC !== 'function')
      lC = naiveLength

    if (lC !== this[LENGTH_CALCULATOR]) {
      this[LENGTH_CALCULATOR] = lC
      this[LENGTH] = 0
      this[LRU_LIST].forEach(hit => {
        hit.length = this[LENGTH_CALCULATOR](hit.value, hit.key)
        this[LENGTH] += hit.length
      })
    }
    trim(this)
  }
  get lengthCalculator () { return this[LENGTH_CALCULATOR] }

  get length () { return this[LENGTH] }
  get itemCount () { return this[LRU_LIST].length }

  rforEach (fn, thisp) {
    thisp = thisp || this
    for (let walker = this[LRU_LIST].tail; walker !== null;) {
      const prev = walker.prev
      forEachStep(this, fn, walker, thisp)
      walker = prev
    }
  }

  forEach (fn, thisp) {
    thisp = thisp || this
    for (let walker = this[LRU_LIST].head; walker !== null;) {
      const next = walker.next
      forEachStep(this, fn, walker, thisp)
      walker = next
    }
  }

  keys () {
    return this[LRU_LIST].toArray().map(k => k.key)
  }

  values () {
    return this[LRU_LIST].toArray().map(k => k.value)
  }

  reset () {
    if (this[DISPOSE] &&
        this[LRU_LIST] &&
        this[LRU_LIST].length) {
      this[LRU_LIST].forEach(hit => this[DISPOSE](hit.key, hit.value))
    }

    this[CACHE] = new Map() // hash of items by key
    this[LRU_LIST] = new Yallist() // list of items in order of use recency
    this[LENGTH] = 0 // length of items in the list
  }

  dump () {
    return this[LRU_LIST].map(hit =>
      isStale(this, hit) ? false : {
        k: hit.key,
        v: hit.value,
        e: hit.now + (hit.maxAge || 0)
      }).toArray().filter(h => h)
  }

  dumpLru () {
    return this[LRU_LIST]
  }

  set (key, value, maxAge) {
    maxAge = maxAge || this[MAX_AGE]

    if (maxAge && typeof maxAge !== 'number')
      throw new TypeError('maxAge must be a number')

    const now = maxAge ? Date.now() : 0
    const len = this[LENGTH_CALCULATOR](value, key)

    if (this[CACHE].has(key)) {
      if (len > this[MAX]) {
        del(this, this[CACHE].get(key))
        return false
      }

      const node = this[CACHE].get(key)
      const item = node.value

      // dispose of the old one before overwriting
      // split out into 2 ifs for better coverage tracking
      if (this[DISPOSE]) {
        if (!this[NO_DISPOSE_ON_SET])
          this[DISPOSE](key, item.value)
      }

      item.now = now
      item.maxAge = maxAge
      item.value = value
      this[LENGTH] += len - item.length
      item.length = len
      this.get(key)
      trim(this)
      return true
    }

    const hit = new Entry(key, value, len, now, maxAge)

    // oversized objects fall out of cache automatically.
    if (hit.length > this[MAX]) {
      if (this[DISPOSE])
        this[DISPOSE](key, value)

      return false
    }

    this[LENGTH] += hit.length
    this[LRU_LIST].unshift(hit)
    this[CACHE].set(key, this[LRU_LIST].head)
    trim(this)
    return true
  }

  has (key) {
    if (!this[CACHE].has(key)) return false
    const hit = this[CACHE].get(key).value
    return !isStale(this, hit)
  }

  get (key) {
    return get(this, key, true)
  }

  peek (key) {
    return get(this, key, false)
  }

  pop () {
    const node = this[LRU_LIST].tail
    if (!node)
      return null

    del(this, node)
    return node.value
  }

  del (key) {
    del(this, this[CACHE].get(key))
  }

  load (arr) {
    // reset the cache
    this.reset()

    const now = Date.now()
    // A previous serialized cache has the most recent items first
    for (let l = arr.length - 1; l >= 0; l--) {
      const hit = arr[l]
      const expiresAt = hit.e || 0
      if (expiresAt === 0)
        // the item was created without expiration in a non aged cache
        this.set(hit.k, hit.v)
      else {
        const maxAge = expiresAt - now
        // dont add already expired items
        if (maxAge > 0) {
          this.set(hit.k, hit.v, maxAge)
        }
      }
    }
  }

  prune () {
    this[CACHE].forEach((value, key) => get(this, key, false))
  }
}

const get = (self, key, doUse) => {
  const node = self[CACHE].get(key)
  if (node) {
    const hit = node.value
    if (isStale(self, hit)) {
      del(self, node)
      if (!self[ALLOW_STALE])
        return undefined
    } else {
      if (doUse) {
        if (self[UPDATE_AGE_ON_GET])
          node.value.now = Date.now()
        self[LRU_LIST].unshiftNode(node)
      }
    }
    return hit.value
  }
}

const isStale = (self, hit) => {
  if (!hit || (!hit.maxAge && !self[MAX_AGE]))
    return false

  const diff = Date.now() - hit.now
  return hit.maxAge ? diff > hit.maxAge
    : self[MAX_AGE] && (diff > self[MAX_AGE])
}

const trim = self => {
  if (self[LENGTH] > self[MAX]) {
    for (let walker = self[LRU_LIST].tail;
      self[LENGTH] > self[MAX] && walker !== null;) {
      // We know that we're about to delete this one, and also
      // what the next least recently used key will be, so just
      // go ahead and set it now.
      const prev = walker.prev
      del(self, walker)
      walker = prev
    }
  }
}

const del = (self, node) => {
  if (node) {
    const hit = node.value
    if (self[DISPOSE])
      self[DISPOSE](hit.key, hit.value)

    self[LENGTH] -= hit.length
    self[CACHE].delete(hit.key)
    self[LRU_LIST].removeNode(node)
  }
}

class Entry {
  constructor (key, value, length, now, maxAge) {
    this.key = key
    this.value = value
    this.length = length
    this.now = now
    this.maxAge = maxAge || 0
  }
}

const forEachStep = (self, fn, node, thisp) => {
  let hit = node.value
  if (isStale(self, hit)) {
    del(self, node)
    if (!self[ALLOW_STALE])
      hit = undefined
  }
  if (hit)
    fn.call(thisp, hit.value, hit.key, self)
}

module.exports = LRUCache


/***/ }),

/***/ "../../../node_modules/semver/ranges/gtr.js":
/*!***************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/semver/ranges/gtr.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Determine if version is greater than all the versions possible in the range.
const outside = __webpack_require__(/*! ./outside */ "../../../node_modules/semver/ranges/outside.js")
const gtr = (version, range, options) => outside(version, range, '>', options)
module.exports = gtr


/***/ }),

/***/ "../../../node_modules/semver/ranges/intersects.js":
/*!**********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/semver/ranges/intersects.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Range = __webpack_require__(/*! ../classes/range */ "../../../node_modules/semver/classes/range.js")
const intersects = (r1, r2, options) => {
  r1 = new Range(r1, options)
  r2 = new Range(r2, options)
  return r1.intersects(r2, options)
}
module.exports = intersects


/***/ }),

/***/ "../../../node_modules/semver/ranges/ltr.js":
/*!***************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/semver/ranges/ltr.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const outside = __webpack_require__(/*! ./outside */ "../../../node_modules/semver/ranges/outside.js")
// Determine if version is less than all the versions possible in the range
const ltr = (version, range, options) => outside(version, range, '<', options)
module.exports = ltr


/***/ }),

/***/ "../../../node_modules/semver/ranges/max-satisfying.js":
/*!**************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/semver/ranges/max-satisfying.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const SemVer = __webpack_require__(/*! ../classes/semver */ "../../../node_modules/semver/classes/semver.js")
const Range = __webpack_require__(/*! ../classes/range */ "../../../node_modules/semver/classes/range.js")

const maxSatisfying = (versions, range, options) => {
  let max = null
  let maxSV = null
  let rangeObj = null
  try {
    rangeObj = new Range(range, options)
  } catch (er) {
    return null
  }
  versions.forEach((v) => {
    if (rangeObj.test(v)) {
      // satisfies(v, range, options)
      if (!max || maxSV.compare(v) === -1) {
        // compare(max, v, true)
        max = v
        maxSV = new SemVer(max, options)
      }
    }
  })
  return max
}
module.exports = maxSatisfying


/***/ }),

/***/ "../../../node_modules/semver/ranges/min-satisfying.js":
/*!**************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/semver/ranges/min-satisfying.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const SemVer = __webpack_require__(/*! ../classes/semver */ "../../../node_modules/semver/classes/semver.js")
const Range = __webpack_require__(/*! ../classes/range */ "../../../node_modules/semver/classes/range.js")
const minSatisfying = (versions, range, options) => {
  let min = null
  let minSV = null
  let rangeObj = null
  try {
    rangeObj = new Range(range, options)
  } catch (er) {
    return null
  }
  versions.forEach((v) => {
    if (rangeObj.test(v)) {
      // satisfies(v, range, options)
      if (!min || minSV.compare(v) === 1) {
        // compare(min, v, true)
        min = v
        minSV = new SemVer(min, options)
      }
    }
  })
  return min
}
module.exports = minSatisfying


/***/ }),

/***/ "../../../node_modules/semver/ranges/min-version.js":
/*!***********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/semver/ranges/min-version.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const SemVer = __webpack_require__(/*! ../classes/semver */ "../../../node_modules/semver/classes/semver.js")
const Range = __webpack_require__(/*! ../classes/range */ "../../../node_modules/semver/classes/range.js")
const gt = __webpack_require__(/*! ../functions/gt */ "../../../node_modules/semver/functions/gt.js")

const minVersion = (range, loose) => {
  range = new Range(range, loose)

  let minver = new SemVer('0.0.0')
  if (range.test(minver)) {
    return minver
  }

  minver = new SemVer('0.0.0-0')
  if (range.test(minver)) {
    return minver
  }

  minver = null
  for (let i = 0; i < range.set.length; ++i) {
    const comparators = range.set[i]

    let setMin = null
    comparators.forEach((comparator) => {
      // Clone to avoid manipulating the comparator's semver object.
      const compver = new SemVer(comparator.semver.version)
      switch (comparator.operator) {
        case '>':
          if (compver.prerelease.length === 0) {
            compver.patch++
          } else {
            compver.prerelease.push(0)
          }
          compver.raw = compver.format()
          /* fallthrough */
        case '':
        case '>=':
          if (!setMin || gt(compver, setMin)) {
            setMin = compver
          }
          break
        case '<':
        case '<=':
          /* Ignore maximum versions */
          break
        /* istanbul ignore next */
        default:
          throw new Error(`Unexpected operation: ${comparator.operator}`)
      }
    })
    if (setMin && (!minver || gt(minver, setMin))) {
      minver = setMin
    }
  }

  if (minver && range.test(minver)) {
    return minver
  }

  return null
}
module.exports = minVersion


/***/ }),

/***/ "../../../node_modules/semver/ranges/outside.js":
/*!*******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/semver/ranges/outside.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const SemVer = __webpack_require__(/*! ../classes/semver */ "../../../node_modules/semver/classes/semver.js")
const Comparator = __webpack_require__(/*! ../classes/comparator */ "../../../node_modules/semver/classes/comparator.js")
const { ANY } = Comparator
const Range = __webpack_require__(/*! ../classes/range */ "../../../node_modules/semver/classes/range.js")
const satisfies = __webpack_require__(/*! ../functions/satisfies */ "../../../node_modules/semver/functions/satisfies.js")
const gt = __webpack_require__(/*! ../functions/gt */ "../../../node_modules/semver/functions/gt.js")
const lt = __webpack_require__(/*! ../functions/lt */ "../../../node_modules/semver/functions/lt.js")
const lte = __webpack_require__(/*! ../functions/lte */ "../../../node_modules/semver/functions/lte.js")
const gte = __webpack_require__(/*! ../functions/gte */ "../../../node_modules/semver/functions/gte.js")

const outside = (version, range, hilo, options) => {
  version = new SemVer(version, options)
  range = new Range(range, options)

  let gtfn, ltefn, ltfn, comp, ecomp
  switch (hilo) {
    case '>':
      gtfn = gt
      ltefn = lte
      ltfn = lt
      comp = '>'
      ecomp = '>='
      break
    case '<':
      gtfn = lt
      ltefn = gte
      ltfn = gt
      comp = '<'
      ecomp = '<='
      break
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"')
  }

  // If it satisfies the range it is not outside
  if (satisfies(version, range, options)) {
    return false
  }

  // From now on, variable terms are as if we're in "gtr" mode.
  // but note that everything is flipped for the "ltr" function.

  for (let i = 0; i < range.set.length; ++i) {
    const comparators = range.set[i]

    let high = null
    let low = null

    comparators.forEach((comparator) => {
      if (comparator.semver === ANY) {
        comparator = new Comparator('>=0.0.0')
      }
      high = high || comparator
      low = low || comparator
      if (gtfn(comparator.semver, high.semver, options)) {
        high = comparator
      } else if (ltfn(comparator.semver, low.semver, options)) {
        low = comparator
      }
    })

    // If the edge version comparator has a operator then our version
    // isn't outside it
    if (high.operator === comp || high.operator === ecomp) {
      return false
    }

    // If the lowest version comparator has an operator and our version
    // is less than it then it isn't higher than the range
    if ((!low.operator || low.operator === comp) &&
        ltefn(version, low.semver)) {
      return false
    } else if (low.operator === ecomp && ltfn(version, low.semver)) {
      return false
    }
  }
  return true
}

module.exports = outside


/***/ }),

/***/ "../../../node_modules/semver/ranges/simplify.js":
/*!********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/semver/ranges/simplify.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// given a set of versions and a range, create a "simplified" range
// that includes the same versions that the original range does
// If the original range is shorter than the simplified one, return that.
const satisfies = __webpack_require__(/*! ../functions/satisfies.js */ "../../../node_modules/semver/functions/satisfies.js")
const compare = __webpack_require__(/*! ../functions/compare.js */ "../../../node_modules/semver/functions/compare.js")
module.exports = (versions, range, options) => {
  const set = []
  let first = null
  let prev = null
  const v = versions.sort((a, b) => compare(a, b, options))
  for (const version of v) {
    const included = satisfies(version, range, options)
    if (included) {
      prev = version
      if (!first) {
        first = version
      }
    } else {
      if (prev) {
        set.push([first, prev])
      }
      prev = null
      first = null
    }
  }
  if (first) {
    set.push([first, null])
  }

  const ranges = []
  for (const [min, max] of set) {
    if (min === max) {
      ranges.push(min)
    } else if (!max && min === v[0]) {
      ranges.push('*')
    } else if (!max) {
      ranges.push(`>=${min}`)
    } else if (min === v[0]) {
      ranges.push(`<=${max}`)
    } else {
      ranges.push(`${min} - ${max}`)
    }
  }
  const simplified = ranges.join(' || ')
  const original = typeof range.raw === 'string' ? range.raw : String(range)
  return simplified.length < original.length ? simplified : range
}


/***/ }),

/***/ "../../../node_modules/semver/ranges/subset.js":
/*!******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/semver/ranges/subset.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Range = __webpack_require__(/*! ../classes/range.js */ "../../../node_modules/semver/classes/range.js")
const Comparator = __webpack_require__(/*! ../classes/comparator.js */ "../../../node_modules/semver/classes/comparator.js")
const { ANY } = Comparator
const satisfies = __webpack_require__(/*! ../functions/satisfies.js */ "../../../node_modules/semver/functions/satisfies.js")
const compare = __webpack_require__(/*! ../functions/compare.js */ "../../../node_modules/semver/functions/compare.js")

// Complex range `r1 || r2 || ...` is a subset of `R1 || R2 || ...` iff:
// - Every simple range `r1, r2, ...` is a null set, OR
// - Every simple range `r1, r2, ...` which is not a null set is a subset of
//   some `R1, R2, ...`
//
// Simple range `c1 c2 ...` is a subset of simple range `C1 C2 ...` iff:
// - If c is only the ANY comparator
//   - If C is only the ANY comparator, return true
//   - Else if in prerelease mode, return false
//   - else replace c with `[>=0.0.0]`
// - If C is only the ANY comparator
//   - if in prerelease mode, return true
//   - else replace C with `[>=0.0.0]`
// - Let EQ be the set of = comparators in c
// - If EQ is more than one, return true (null set)
// - Let GT be the highest > or >= comparator in c
// - Let LT be the lowest < or <= comparator in c
// - If GT and LT, and GT.semver > LT.semver, return true (null set)
// - If any C is a = range, and GT or LT are set, return false
// - If EQ
//   - If GT, and EQ does not satisfy GT, return true (null set)
//   - If LT, and EQ does not satisfy LT, return true (null set)
//   - If EQ satisfies every C, return true
//   - Else return false
// - If GT
//   - If GT.semver is lower than any > or >= comp in C, return false
//   - If GT is >=, and GT.semver does not satisfy every C, return false
//   - If GT.semver has a prerelease, and not in prerelease mode
//     - If no C has a prerelease and the GT.semver tuple, return false
// - If LT
//   - If LT.semver is greater than any < or <= comp in C, return false
//   - If LT is <=, and LT.semver does not satisfy every C, return false
//   - If GT.semver has a prerelease, and not in prerelease mode
//     - If no C has a prerelease and the LT.semver tuple, return false
// - Else return true

const subset = (sub, dom, options = {}) => {
  if (sub === dom) {
    return true
  }

  sub = new Range(sub, options)
  dom = new Range(dom, options)
  let sawNonNull = false

  OUTER: for (const simpleSub of sub.set) {
    for (const simpleDom of dom.set) {
      const isSub = simpleSubset(simpleSub, simpleDom, options)
      sawNonNull = sawNonNull || isSub !== null
      if (isSub) {
        continue OUTER
      }
    }
    // the null set is a subset of everything, but null simple ranges in
    // a complex range should be ignored.  so if we saw a non-null range,
    // then we know this isn't a subset, but if EVERY simple range was null,
    // then it is a subset.
    if (sawNonNull) {
      return false
    }
  }
  return true
}

const minimumVersionWithPreRelease = [new Comparator('>=0.0.0-0')]
const minimumVersion = [new Comparator('>=0.0.0')]

const simpleSubset = (sub, dom, options) => {
  if (sub === dom) {
    return true
  }

  if (sub.length === 1 && sub[0].semver === ANY) {
    if (dom.length === 1 && dom[0].semver === ANY) {
      return true
    } else if (options.includePrerelease) {
      sub = minimumVersionWithPreRelease
    } else {
      sub = minimumVersion
    }
  }

  if (dom.length === 1 && dom[0].semver === ANY) {
    if (options.includePrerelease) {
      return true
    } else {
      dom = minimumVersion
    }
  }

  const eqSet = new Set()
  let gt, lt
  for (const c of sub) {
    if (c.operator === '>' || c.operator === '>=') {
      gt = higherGT(gt, c, options)
    } else if (c.operator === '<' || c.operator === '<=') {
      lt = lowerLT(lt, c, options)
    } else {
      eqSet.add(c.semver)
    }
  }

  if (eqSet.size > 1) {
    return null
  }

  let gtltComp
  if (gt && lt) {
    gtltComp = compare(gt.semver, lt.semver, options)
    if (gtltComp > 0) {
      return null
    } else if (gtltComp === 0 && (gt.operator !== '>=' || lt.operator !== '<=')) {
      return null
    }
  }

  // will iterate one or zero times
  for (const eq of eqSet) {
    if (gt && !satisfies(eq, String(gt), options)) {
      return null
    }

    if (lt && !satisfies(eq, String(lt), options)) {
      return null
    }

    for (const c of dom) {
      if (!satisfies(eq, String(c), options)) {
        return false
      }
    }

    return true
  }

  let higher, lower
  let hasDomLT, hasDomGT
  // if the subset has a prerelease, we need a comparator in the superset
  // with the same tuple and a prerelease, or it's not a subset
  let needDomLTPre = lt &&
    !options.includePrerelease &&
    lt.semver.prerelease.length ? lt.semver : false
  let needDomGTPre = gt &&
    !options.includePrerelease &&
    gt.semver.prerelease.length ? gt.semver : false
  // exception: <1.2.3-0 is the same as <1.2.3
  if (needDomLTPre && needDomLTPre.prerelease.length === 1 &&
      lt.operator === '<' && needDomLTPre.prerelease[0] === 0) {
    needDomLTPre = false
  }

  for (const c of dom) {
    hasDomGT = hasDomGT || c.operator === '>' || c.operator === '>='
    hasDomLT = hasDomLT || c.operator === '<' || c.operator === '<='
    if (gt) {
      if (needDomGTPre) {
        if (c.semver.prerelease && c.semver.prerelease.length &&
            c.semver.major === needDomGTPre.major &&
            c.semver.minor === needDomGTPre.minor &&
            c.semver.patch === needDomGTPre.patch) {
          needDomGTPre = false
        }
      }
      if (c.operator === '>' || c.operator === '>=') {
        higher = higherGT(gt, c, options)
        if (higher === c && higher !== gt) {
          return false
        }
      } else if (gt.operator === '>=' && !satisfies(gt.semver, String(c), options)) {
        return false
      }
    }
    if (lt) {
      if (needDomLTPre) {
        if (c.semver.prerelease && c.semver.prerelease.length &&
            c.semver.major === needDomLTPre.major &&
            c.semver.minor === needDomLTPre.minor &&
            c.semver.patch === needDomLTPre.patch) {
          needDomLTPre = false
        }
      }
      if (c.operator === '<' || c.operator === '<=') {
        lower = lowerLT(lt, c, options)
        if (lower === c && lower !== lt) {
          return false
        }
      } else if (lt.operator === '<=' && !satisfies(lt.semver, String(c), options)) {
        return false
      }
    }
    if (!c.operator && (lt || gt) && gtltComp !== 0) {
      return false
    }
  }

  // if there was a < or >, and nothing in the dom, then must be false
  // UNLESS it was limited by another range in the other direction.
  // Eg, >1.0.0 <1.0.1 is still a subset of <2.0.0
  if (gt && hasDomLT && !lt && gtltComp !== 0) {
    return false
  }

  if (lt && hasDomGT && !gt && gtltComp !== 0) {
    return false
  }

  // we needed a prerelease range in a specific tuple, but didn't get one
  // then this isn't a subset.  eg >=1.2.3-pre is not a subset of >=1.0.0,
  // because it includes prereleases in the 1.2.3 tuple
  if (needDomGTPre || needDomLTPre) {
    return false
  }

  return true
}

// >=1.2.3 is lower than >1.2.3
const higherGT = (a, b, options) => {
  if (!a) {
    return b
  }
  const comp = compare(a.semver, b.semver, options)
  return comp > 0 ? a
    : comp < 0 ? b
    : b.operator === '>' && a.operator === '>=' ? b
    : a
}

// <=1.2.3 is higher than <1.2.3
const lowerLT = (a, b, options) => {
  if (!a) {
    return b
  }
  const comp = compare(a.semver, b.semver, options)
  return comp < 0 ? a
    : comp > 0 ? b
    : b.operator === '<' && a.operator === '<=' ? b
    : a
}

module.exports = subset


/***/ }),

/***/ "../../../node_modules/semver/ranges/to-comparators.js":
/*!**************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/semver/ranges/to-comparators.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Range = __webpack_require__(/*! ../classes/range */ "../../../node_modules/semver/classes/range.js")

// Mostly just for testing and legacy API reasons
const toComparators = (range, options) =>
  new Range(range, options).set
    .map(comp => comp.map(c => c.value).join(' ').trim().split(' '))

module.exports = toComparators


/***/ }),

/***/ "../../../node_modules/semver/ranges/valid.js":
/*!*****************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/semver/ranges/valid.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Range = __webpack_require__(/*! ../classes/range */ "../../../node_modules/semver/classes/range.js")
const validRange = (range, options) => {
  try {
    // Return '*' instead of '' so that truthiness works.
    // This will throw if it's invalid anyway
    return new Range(range, options).range || '*'
  } catch (er) {
    return null
  }
}
module.exports = validRange


/***/ }),

/***/ "../../../node_modules/set-harmonic-interval/lib/index.js":
/*!*****************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/set-harmonic-interval/lib/index.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var counter = 0;
var buckets = {};
var setHarmonicInterval = function (fn, ms) {
    var _a;
    var id = counter++;
    if (buckets[ms]) {
        buckets[ms].listeners[id] = fn;
    }
    else {
        var timer = setInterval(function () {
            var listeners = buckets[ms].listeners;
            var didThrow = false;
            var lastError;
            for (var _i = 0, _a = Object.values(listeners); _i < _a.length; _i++) {
                var listener = _a[_i];
                try {
                    listener();
                }
                catch (error) {
                    didThrow = true;
                    lastError = error;
                }
            }
            if (didThrow)
                throw lastError;
        }, ms);
        buckets[ms] = {
            ms: ms,
            timer: timer,
            listeners: (_a = {},
                _a[id] = fn,
                _a),
        };
    }
    return {
        bucket: buckets[ms],
        id: id,
    };
};
var clearHarmonicInterval = function (_a) {
    var bucket = _a.bucket, id = _a.id;
    delete bucket.listeners[id];
    var hasListeners = false;
    for (var listener in bucket.listeners) {
        hasListeners = true;
        break;
    }
    if (!hasListeners) {
        clearInterval(bucket.timer);
        delete buckets[bucket.ms];
    }
};

exports.clearHarmonicInterval = clearHarmonicInterval;
exports.setHarmonicInterval = setHarmonicInterval;


/***/ }),

/***/ "../../../node_modules/throttle-debounce/index.umd.js":
/*!*************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/throttle-debounce/index.umd.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory(exports) :
	undefined;
}(this, (function (exports) { 'use strict';

	/* eslint-disable no-undefined,no-param-reassign,no-shadow */

	/**
	 * Throttle execution of a function. Especially useful for rate limiting
	 * execution of handlers on events like resize and scroll.
	 *
	 * @param  {number}    delay -          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
	 * @param  {boolean}   [noTrailing] -   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
	 *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
	 *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
	 *                                    the internal counter is reset).
	 * @param  {Function}  callback -       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
	 *                                    to `callback` when the throttled-function is executed.
	 * @param  {boolean}   [debounceMode] - If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
	 *                                    schedule `callback` to execute after `delay` ms.
	 *
	 * @returns {Function}  A new, throttled, function.
	 */
	function throttle (delay, noTrailing, callback, debounceMode) {
	  /*
	   * After wrapper has stopped being called, this timeout ensures that
	   * `callback` is executed at the proper times in `throttle` and `end`
	   * debounce modes.
	   */
	  var timeoutID;
	  var cancelled = false; // Keep track of the last time `callback` was executed.

	  var lastExec = 0; // Function to clear existing timeout

	  function clearExistingTimeout() {
	    if (timeoutID) {
	      clearTimeout(timeoutID);
	    }
	  } // Function to cancel next exec


	  function cancel() {
	    clearExistingTimeout();
	    cancelled = true;
	  } // `noTrailing` defaults to falsy.


	  if (typeof noTrailing !== 'boolean') {
	    debounceMode = callback;
	    callback = noTrailing;
	    noTrailing = undefined;
	  }
	  /*
	   * The `wrapper` function encapsulates all of the throttling / debouncing
	   * functionality and when executed will limit the rate at which `callback`
	   * is executed.
	   */


	  function wrapper() {
	    for (var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++) {
	      arguments_[_key] = arguments[_key];
	    }

	    var self = this;
	    var elapsed = Date.now() - lastExec;

	    if (cancelled) {
	      return;
	    } // Execute `callback` and update the `lastExec` timestamp.


	    function exec() {
	      lastExec = Date.now();
	      callback.apply(self, arguments_);
	    }
	    /*
	     * If `debounceMode` is true (at begin) this is used to clear the flag
	     * to allow future `callback` executions.
	     */


	    function clear() {
	      timeoutID = undefined;
	    }

	    if (debounceMode && !timeoutID) {
	      /*
	       * Since `wrapper` is being called for the first time and
	       * `debounceMode` is true (at begin), execute `callback`.
	       */
	      exec();
	    }

	    clearExistingTimeout();

	    if (debounceMode === undefined && elapsed > delay) {
	      /*
	       * In throttle mode, if `delay` time has been exceeded, execute
	       * `callback`.
	       */
	      exec();
	    } else if (noTrailing !== true) {
	      /*
	       * In trailing throttle mode, since `delay` time has not been
	       * exceeded, schedule `callback` to execute `delay` ms after most
	       * recent execution.
	       *
	       * If `debounceMode` is true (at begin), schedule `clear` to execute
	       * after `delay` ms.
	       *
	       * If `debounceMode` is false (at end), schedule `callback` to
	       * execute after `delay` ms.
	       */
	      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
	    }
	  }

	  wrapper.cancel = cancel; // Return the wrapper function.

	  return wrapper;
	}

	/* eslint-disable no-undefined */
	/**
	 * Debounce execution of a function. Debouncing, unlike throttling,
	 * guarantees that a function is only executed a single time, either at the
	 * very beginning of a series of calls, or at the very end.
	 *
	 * @param  {number}   delay -         A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
	 * @param  {boolean}  [atBegin] -     Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
	 *                                  after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
	 *                                  (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
	 * @param  {Function} callback -      A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
	 *                                  to `callback` when the debounced-function is executed.
	 *
	 * @returns {Function} A new, debounced function.
	 */

	function debounce (delay, atBegin, callback) {
	  return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
	}

	exports.debounce = debounce;
	exports.throttle = throttle;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map


/***/ }),

/***/ "../../../node_modules/tiny-invariant/dist/tiny-invariant.cjs.js":
/*!************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/tiny-invariant/dist/tiny-invariant.cjs.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isProduction = "development" === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
    if (condition) {
        return;
    }
    if (isProduction) {
        throw new Error(prefix);
    }
    var provided = typeof message === 'function' ? message() : message;
    var value = provided ? prefix + ": " + provided : prefix;
    throw new Error(value);
}

module.exports = invariant;


/***/ }),

/***/ "../../../node_modules/tiny-warning/dist/tiny-warning.cjs.js":
/*!********************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/tiny-warning/dist/tiny-warning.cjs.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isProduction = "development" === 'production';
function warning(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }

    var text = "Warning: " + message;

    if (typeof console !== 'undefined') {
      console.warn(text);
    }

    try {
      throw Error(text);
    } catch (x) {}
  }
}

module.exports = warning;


/***/ }),

/***/ "../../../node_modules/toggle-selection/index.js":
/*!********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/toggle-selection/index.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


module.exports = function () {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function () {};
  }
  var active = document.activeElement;

  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
    case 'INPUT':
    case 'TEXTAREA':
      active.blur();
      break;

    default:
      active = null;
      break;
  }

  selection.removeAllRanges();
  return function () {
    selection.type === 'Caret' &&
    selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }

    active &&
    active.focus();
  };
};


/***/ }),

/***/ "../../../node_modules/ts-easing/lib/index.js":
/*!*****************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/ts-easing/lib/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.easing = {
    // No easing, no acceleration
    linear: function (t) { return t; },
    // Accelerates fast, then slows quickly towards end.
    quadratic: function (t) { return t * (-(t * t) * t + 4 * t * t - 6 * t + 4); },
    // Overshoots over 1 and then returns to 1 towards end.
    cubic: function (t) { return t * (4 * t * t - 9 * t + 6); },
    // Overshoots over 1 multiple times - wiggles around 1.
    elastic: function (t) { return t * (33 * t * t * t * t - 106 * t * t * t + 126 * t * t - 67 * t + 15); },
    // Accelerating from zero velocity
    inQuad: function (t) { return t * t; },
    // Decelerating to zero velocity
    outQuad: function (t) { return t * (2 - t); },
    // Acceleration until halfway, then deceleration
    inOutQuad: function (t) { return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t; },
    // Accelerating from zero velocity
    inCubic: function (t) { return t * t * t; },
    // Decelerating to zero velocity
    outCubic: function (t) { return (--t) * t * t + 1; },
    // Acceleration until halfway, then deceleration
    inOutCubic: function (t) { return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1; },
    // Accelerating from zero velocity
    inQuart: function (t) { return t * t * t * t; },
    // Decelerating to zero velocity
    outQuart: function (t) { return 1 - (--t) * t * t * t; },
    // Acceleration until halfway, then deceleration
    inOutQuart: function (t) { return t < .5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t; },
    // Accelerating from zero velocity
    inQuint: function (t) { return t * t * t * t * t; },
    // Decelerating to zero velocity
    outQuint: function (t) { return 1 + (--t) * t * t * t * t; },
    // Acceleration until halfway, then deceleration
    inOutQuint: function (t) { return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t; },
    // Accelerating from zero velocity
    inSine: function (t) { return -Math.cos(t * (Math.PI / 2)) + 1; },
    // Decelerating to zero velocity
    outSine: function (t) { return Math.sin(t * (Math.PI / 2)); },
    // Accelerating until halfway, then decelerating
    inOutSine: function (t) { return -(Math.cos(Math.PI * t) - 1) / 2; },
    // Exponential accelerating from zero velocity
    inExpo: function (t) { return Math.pow(2, 10 * (t - 1)); },
    // Exponential decelerating to zero velocity
    outExpo: function (t) { return -Math.pow(2, -10 * t) + 1; },
    // Exponential accelerating until halfway, then decelerating
    inOutExpo: function (t) {
        t /= .5;
        if (t < 1)
            return Math.pow(2, 10 * (t - 1)) / 2;
        t--;
        return (-Math.pow(2, -10 * t) + 2) / 2;
    },
    // Circular accelerating from zero velocity
    inCirc: function (t) { return -Math.sqrt(1 - t * t) + 1; },
    // Circular decelerating to zero velocity Moves VERY fast at the beginning and
    // then quickly slows down in the middle. This tween can actually be used
    // in continuous transitions where target value changes all the time,
    // because of the very quick start, it hides the jitter between target value changes.
    outCirc: function (t) { return Math.sqrt(1 - (t = t - 1) * t); },
    // Circular acceleration until halfway, then deceleration
    inOutCirc: function (t) {
        t /= .5;
        if (t < 1)
            return -(Math.sqrt(1 - t * t) - 1) / 2;
        t -= 2;
        return (Math.sqrt(1 - t * t) + 1) / 2;
    }
};


/***/ }),

/***/ "../../../node_modules/value-equal/cjs/value-equal.js":
/*!*************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/value-equal/cjs/value-equal.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function valueOf(obj) {
  return obj.valueOf ? obj.valueOf() : Object.prototype.valueOf.call(obj);
}

function valueEqual(a, b) {
  // Test for strict equality first.
  if (a === b) return true;

  // Otherwise, if either of them == null they are not equal.
  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return (
      Array.isArray(b) &&
      a.length === b.length &&
      a.every(function(item, index) {
        return valueEqual(item, b[index]);
      })
    );
  }

  if (typeof a === 'object' || typeof b === 'object') {
    var aValue = valueOf(a);
    var bValue = valueOf(b);

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    return Object.keys(Object.assign({}, a, b)).every(function(key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

module.exports = valueEqual;


/***/ }),

/***/ "../../../node_modules/value-equal/index.js":
/*!***************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/value-equal/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/value-equal.js */ "../../../node_modules/value-equal/cjs/value-equal.js");
}


/***/ }),

/***/ "../../../node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "../../../node_modules/yallist/iterator.js":
/*!**************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/yallist/iterator.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (Yallist) {
  Yallist.prototype[Symbol.iterator] = function* () {
    for (let walker = this.head; walker; walker = walker.next) {
      yield walker.value
    }
  }
}


/***/ }),

/***/ "../../../node_modules/yallist/yallist.js":
/*!*************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/yallist/yallist.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = Yallist

Yallist.Node = Node
Yallist.create = Yallist

function Yallist (list) {
  var self = this
  if (!(self instanceof Yallist)) {
    self = new Yallist()
  }

  self.tail = null
  self.head = null
  self.length = 0

  if (list && typeof list.forEach === 'function') {
    list.forEach(function (item) {
      self.push(item)
    })
  } else if (arguments.length > 0) {
    for (var i = 0, l = arguments.length; i < l; i++) {
      self.push(arguments[i])
    }
  }

  return self
}

Yallist.prototype.removeNode = function (node) {
  if (node.list !== this) {
    throw new Error('removing node which does not belong to this list')
  }

  var next = node.next
  var prev = node.prev

  if (next) {
    next.prev = prev
  }

  if (prev) {
    prev.next = next
  }

  if (node === this.head) {
    this.head = next
  }
  if (node === this.tail) {
    this.tail = prev
  }

  node.list.length--
  node.next = null
  node.prev = null
  node.list = null

  return next
}

Yallist.prototype.unshiftNode = function (node) {
  if (node === this.head) {
    return
  }

  if (node.list) {
    node.list.removeNode(node)
  }

  var head = this.head
  node.list = this
  node.next = head
  if (head) {
    head.prev = node
  }

  this.head = node
  if (!this.tail) {
    this.tail = node
  }
  this.length++
}

Yallist.prototype.pushNode = function (node) {
  if (node === this.tail) {
    return
  }

  if (node.list) {
    node.list.removeNode(node)
  }

  var tail = this.tail
  node.list = this
  node.prev = tail
  if (tail) {
    tail.next = node
  }

  this.tail = node
  if (!this.head) {
    this.head = node
  }
  this.length++
}

Yallist.prototype.push = function () {
  for (var i = 0, l = arguments.length; i < l; i++) {
    push(this, arguments[i])
  }
  return this.length
}

Yallist.prototype.unshift = function () {
  for (var i = 0, l = arguments.length; i < l; i++) {
    unshift(this, arguments[i])
  }
  return this.length
}

Yallist.prototype.pop = function () {
  if (!this.tail) {
    return undefined
  }

  var res = this.tail.value
  this.tail = this.tail.prev
  if (this.tail) {
    this.tail.next = null
  } else {
    this.head = null
  }
  this.length--
  return res
}

Yallist.prototype.shift = function () {
  if (!this.head) {
    return undefined
  }

  var res = this.head.value
  this.head = this.head.next
  if (this.head) {
    this.head.prev = null
  } else {
    this.tail = null
  }
  this.length--
  return res
}

Yallist.prototype.forEach = function (fn, thisp) {
  thisp = thisp || this
  for (var walker = this.head, i = 0; walker !== null; i++) {
    fn.call(thisp, walker.value, i, this)
    walker = walker.next
  }
}

Yallist.prototype.forEachReverse = function (fn, thisp) {
  thisp = thisp || this
  for (var walker = this.tail, i = this.length - 1; walker !== null; i--) {
    fn.call(thisp, walker.value, i, this)
    walker = walker.prev
  }
}

Yallist.prototype.get = function (n) {
  for (var i = 0, walker = this.head; walker !== null && i < n; i++) {
    // abort out of the list early if we hit a cycle
    walker = walker.next
  }
  if (i === n && walker !== null) {
    return walker.value
  }
}

Yallist.prototype.getReverse = function (n) {
  for (var i = 0, walker = this.tail; walker !== null && i < n; i++) {
    // abort out of the list early if we hit a cycle
    walker = walker.prev
  }
  if (i === n && walker !== null) {
    return walker.value
  }
}

Yallist.prototype.map = function (fn, thisp) {
  thisp = thisp || this
  var res = new Yallist()
  for (var walker = this.head; walker !== null;) {
    res.push(fn.call(thisp, walker.value, this))
    walker = walker.next
  }
  return res
}

Yallist.prototype.mapReverse = function (fn, thisp) {
  thisp = thisp || this
  var res = new Yallist()
  for (var walker = this.tail; walker !== null;) {
    res.push(fn.call(thisp, walker.value, this))
    walker = walker.prev
  }
  return res
}

Yallist.prototype.reduce = function (fn, initial) {
  var acc
  var walker = this.head
  if (arguments.length > 1) {
    acc = initial
  } else if (this.head) {
    walker = this.head.next
    acc = this.head.value
  } else {
    throw new TypeError('Reduce of empty list with no initial value')
  }

  for (var i = 0; walker !== null; i++) {
    acc = fn(acc, walker.value, i)
    walker = walker.next
  }

  return acc
}

Yallist.prototype.reduceReverse = function (fn, initial) {
  var acc
  var walker = this.tail
  if (arguments.length > 1) {
    acc = initial
  } else if (this.tail) {
    walker = this.tail.prev
    acc = this.tail.value
  } else {
    throw new TypeError('Reduce of empty list with no initial value')
  }

  for (var i = this.length - 1; walker !== null; i--) {
    acc = fn(acc, walker.value, i)
    walker = walker.prev
  }

  return acc
}

Yallist.prototype.toArray = function () {
  var arr = new Array(this.length)
  for (var i = 0, walker = this.head; walker !== null; i++) {
    arr[i] = walker.value
    walker = walker.next
  }
  return arr
}

Yallist.prototype.toArrayReverse = function () {
  var arr = new Array(this.length)
  for (var i = 0, walker = this.tail; walker !== null; i++) {
    arr[i] = walker.value
    walker = walker.prev
  }
  return arr
}

Yallist.prototype.slice = function (from, to) {
  to = to || this.length
  if (to < 0) {
    to += this.length
  }
  from = from || 0
  if (from < 0) {
    from += this.length
  }
  var ret = new Yallist()
  if (to < from || to < 0) {
    return ret
  }
  if (from < 0) {
    from = 0
  }
  if (to > this.length) {
    to = this.length
  }
  for (var i = 0, walker = this.head; walker !== null && i < from; i++) {
    walker = walker.next
  }
  for (; walker !== null && i < to; i++, walker = walker.next) {
    ret.push(walker.value)
  }
  return ret
}

Yallist.prototype.sliceReverse = function (from, to) {
  to = to || this.length
  if (to < 0) {
    to += this.length
  }
  from = from || 0
  if (from < 0) {
    from += this.length
  }
  var ret = new Yallist()
  if (to < from || to < 0) {
    return ret
  }
  if (from < 0) {
    from = 0
  }
  if (to > this.length) {
    to = this.length
  }
  for (var i = this.length, walker = this.tail; walker !== null && i > to; i--) {
    walker = walker.prev
  }
  for (; walker !== null && i > from; i--, walker = walker.prev) {
    ret.push(walker.value)
  }
  return ret
}

Yallist.prototype.splice = function (start, deleteCount, ...nodes) {
  if (start > this.length) {
    start = this.length - 1
  }
  if (start < 0) {
    start = this.length + start;
  }

  for (var i = 0, walker = this.head; walker !== null && i < start; i++) {
    walker = walker.next
  }

  var ret = []
  for (var i = 0; walker && i < deleteCount; i++) {
    ret.push(walker.value)
    walker = this.removeNode(walker)
  }
  if (walker === null) {
    walker = this.tail
  }

  if (walker !== this.head && walker !== this.tail) {
    walker = walker.prev
  }

  for (var i = 0; i < nodes.length; i++) {
    walker = insert(this, walker, nodes[i])
  }
  return ret;
}

Yallist.prototype.reverse = function () {
  var head = this.head
  var tail = this.tail
  for (var walker = head; walker !== null; walker = walker.prev) {
    var p = walker.prev
    walker.prev = walker.next
    walker.next = p
  }
  this.head = tail
  this.tail = head
  return this
}

function insert (self, node, value) {
  var inserted = node === self.head ?
    new Node(value, null, node, self) :
    new Node(value, node, node.next, self)

  if (inserted.next === null) {
    self.tail = inserted
  }
  if (inserted.prev === null) {
    self.head = inserted
  }

  self.length++

  return inserted
}

function push (self, item) {
  self.tail = new Node(item, self.tail, null, self)
  if (!self.head) {
    self.head = self.tail
  }
  self.length++
}

function unshift (self, item) {
  self.head = new Node(item, null, self.head, self)
  if (!self.tail) {
    self.tail = self.head
  }
  self.length++
}

function Node (value, prev, next, list) {
  if (!(this instanceof Node)) {
    return new Node(value, prev, next, list)
  }

  this.list = list
  this.value = value

  if (prev) {
    prev.next = this
    this.prev = prev
  } else {
    this.prev = null
  }

  if (next) {
    next.prev = this
    this.next = next
  } else {
    this.next = null
  }
}

try {
  // add if support for Symbol.iterator is present
  __webpack_require__(/*! ./iterator.js */ "../../../node_modules/yallist/iterator.js")(Yallist)
} catch (er) {}


/***/ })

}]);
//# sourceMappingURL=indexPatternManagement.chunk.0.js.map