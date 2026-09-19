/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ChangeEvent, Component, useContext } from "react";
import { EuiSmallButton, EuiSmallButtonEmpty, EuiComboBoxOptionOption, EuiFlexGroup, EuiFlexItem } from "@elastic/eui";
import { RouteComponentProps } from "react-router-dom";
import moment from "moment";
import { RollupService, TransformService } from "../../../../services";
import { BREADCRUMBS, ROUTES } from "../../../../utils/constants";
import IndexService from "../../../../services/IndexService";
import { ManagedCatIndex } from "../../../../../server/models/interfaces";
import SetUpIndices from "../SetUpIndicesStep";
import DefineTransformsStep from "../DefineTransformsStep";
import {
  FieldItem,
  IndexItem,
  Transform,
  TRANSFORM_AGG_TYPE,
  TransformAggItem,
  TransformGroupItem,
} from "../../../../../models/interfaces";
import { getErrorMessage } from "../../../../utils/helpers";
import { DefaultSampleDataSize, EMPTY_TRANSFORM } from "../../utils/constants";
import SpecifyScheduleStep from "../SpecifyScheduleStep";
import ReviewAndCreateStep from "../ReviewAndCreateStep";
import { compareFieldItem, createdTransformToastMessage, isGroupBy, parseFieldOptions } from "../../utils/helpers";
import { CoreServicesContext } from "../../../../components/core_services";
import {
  DataSourceMenuContext,
  DataSourceMenuProperties,
  DataSourceMenuReadOnlyContext,
  DataSourceMenuReadOnlyProperties,
} from "../../../../services/DataSourceMenuContext";
import { useUpdateUrlWithDataSourceProperties } from "../../../../components/MDSEnabledComponent";
import { getUISettings } from "../../../../services/Services";

interface CreateTransformFormProps extends RouteComponentProps, DataSourceMenuProperties, DataSourceMenuReadOnlyProperties {
  rollupService: RollupService;
  transformService: TransformService;
  indexService: IndexService;
}

interface CreateTransformFormState {
  currentStep: number;
  transformId: string;
  transformIdError: string;
  transformSeqNo: number | null;
  transformPrimaryTerm: number | null;
  submitError: string;
  isSubmitting: boolean;
  hasSubmitted: boolean;
  loadingIndices: boolean;
  indices: ManagedCatIndex[];
  totalIndices: number;
  previewTransform: any[];

  description: string;
  sourceIndex: { label: string; value?: IndexItem }[];
  sourceIndexError: string;
  sourceIndexFilter: string;
  sourceIndexFilterError: string;
  targetIndex: { label: string; value?: IndexItem }[];
  targetIndexError: string;

  mappings: any;
  allMappings: FieldItem[][];
  fields: FieldItem[];
  fieldSelectedOption: string;

  selectedGroupField: TransformGroupItem[];
  selectedAggregations: any;
  aggList: TransformAggItem[];
  selectedFields: FieldItem[];
  jobEnabledByDefault: boolean;

  continuousJob: string;
  interval: number;
  intervalError: string;
  intervalTimeunit: string;
  pageSize: number;
  transformJSON: any;

  beenWarned: boolean;
  isLoading: boolean;
}

export class CreateTransformForm extends Component<CreateTransformFormProps, CreateTransformFormState> {
  static contextType = CoreServicesContext;
  _isMount: boolean;

  static baseState = {
    currentStep: 1,
    transformSeqNo: null,
    transformPrimaryTerm: null,
    transformId: "",
    transformIdError: "",
    submitError: "",
    isSubmitting: false,
    hasSubmitted: false,
    loadingIndices: true,
    indices: [],
    totalIndices: 0,
    previewTransform: [],

    mappings: "",
    allMappings: [],
    fields: [],
    fieldSelectedOption: "",
    selectedFields: [],
    selectedGroupField: [],
    selectedAggregations: {},
    aggList: [],
    description: "",

    sourceIndex: [],
    sourceIndexError: "",
    sourceIndexFilter: "",
    sourceIndexFilterError: "",
    targetIndex: [],
    targetIndexError: "",

    intervalError: "",

    jobEnabledByDefault: true,
    continuousJob: "no",
    interval: 1,
    intervalTimeunit: "MINUTES",
    pageSize: 1000,
    transformJSON: JSON.parse(EMPTY_TRANSFORM),

    beenWarned: false,
    isLoading: false,
  };

  constructor(props: CreateTransformFormProps) {
    super(props);
    this.state = CreateTransformForm.baseState;
    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
    this._isMount = true;
  }

  componentDidMount = async (): Promise<void> => {
    const uiSettings = getUISettings();
    const useUpdatedUX = uiSettings.get("home:useNewHomePage");
    const breadCrumbs = useUpdatedUX
      ? [BREADCRUMBS.TRANSFORMS, BREADCRUMBS.CREATE_TRANSFORM]
      : [BREADCRUMBS.INDEX_MANAGEMENT, BREADCRUMBS.TRANSFORMS, BREADCRUMBS.CREATE_TRANSFORM];
    this.context.chrome.setBreadcrumbs(breadCrumbs);
  };

  componentDidUpdate(prevProps: CreateTransformFormProps, prevState: Readonly<CreateTransformFormState>) {
    if (prevProps.dataSourceId !== this.props.dataSourceId) {
      // reset the state, if dataSourceId changes, i.e., clear state
      this.setState({
        ...CreateTransformForm.baseState,
        transformId: this.state.transformId,
        description: this.state.description,
      });
    }
  }

  componentWillUnmount() {
    this._isMount = false;
  }

  getMappings = async (srcIndex: string): Promise<void> => {
    if (!srcIndex.length) return;
    try {
      const { rollupService } = this.props;
      const response = await rollupService.getMappings(srcIndex);
      if (response.ok) {
        let allMappings: FieldItem[][] = [];
        const mappings = response.response;
        //Push mappings array to allMappings 2D array first
        for (let index in mappings) {
          allMappings.push(parseFieldOptions("", mappings[index].mappings.properties));
        }
        //Find intersect from all mappings
        const fields = allMappings.reduce((mappingA, mappingB) =>
          mappingA.filter((itemA) => mappingB.some((itemB) => compareFieldItem(itemA, itemB)))
        );
        this.setState({ mappings, fields, allMappings });
      } else {
        this.context.notifications.toasts.addDanger(`필드를 불러올 수 없습니다: ${response.error}`);
      }
    } catch (err) {
      this.context.notifications.toasts.addDanger(getErrorMessage(err, "필드를 불러올 수 없습니다"));
    }
  };

  previewTransform = async (transform: any): Promise<boolean> => {
    try {
      const { transformService } = this.props;
      const previewResponse = await transformService.previewTransform(transform);
      if (previewResponse.ok) {
        this.setState({ previewTransform: previewResponse.response.documents });
        return true;
      } else {
        this.context.notifications.toasts.addDanger(`트랜스폼을 미리 볼 수 없습니다: ${previewResponse.error}`);
        return false;
      }
    } catch (err) {
      this.context.notifications.toasts.addDanger(getErrorMessage(err, "트랜스폼 미리보기를 불러올 수 없습니다"));
      return false;
    }
  };

  searchData = async (): Promise<boolean> => {
    const { transformService } = this.props;
    const { sourceIndex, sourceIndexFilter } = this.state;
    this.setState({ isLoading: true });
    try {
      const response = await transformService.searchSampleData(sourceIndex[0].label, sourceIndexFilter, {
        from: 0,
        size: DefaultSampleDataSize,
      });

      if (!response.ok) {
        const errMsg = response.error ? response.error : "원본 인덱스에서 데이터를 검색하는 중에 문제가 발생했습니다.";
        this.setState({ sourceIndexFilterError: errMsg });
        this.context.notifications.toasts.addDanger(errMsg);
      }
      this.setState({ isLoading: false });
      return response.ok;
    } catch (err) {
      this.setState({ sourceIndexFilterError: "데이터 필터를 적용하는 중에 오류가 발생했습니다. 필터를 수정하거나 제거하세요." });
      this.context.notifications.toasts.addDanger(getErrorMessage(err, "원본 인덱스에서 데이터를 검색하는 중에 문제가 발생했습니다."));
      this.setState({ isLoading: false });
      return false;
    }
  };

  _next = async () => {
    let currentStep = this.state.currentStep;
    let warned = this.state.beenWarned;
    let error = false;

    const dataSourceReadOnly = this.props.dataSourceReadOnly;
    const setDataSourceReadOnly = this.props.setDataSourceReadOnly;
    if (this.props.multiDataSourceEnabled && !dataSourceReadOnly) {
      setDataSourceReadOnly(true);
    }

    // Verification here
    if (currentStep == 1) {
      const { transformId, sourceIndex, targetIndex, sourceIndexFilterError } = this.state;
      if (!transformId) {
        this.setState({ submitError: "작업 이름은 필수 항목입니다.", transformIdError: "작업 이름은 필수 항목입니다." });
        error = true;
      } else {
        // Check if transform job name is duplicated
        const response = await this.props.transformService.getTransform(transformId);
        if (response.ok && response.response._id == transformId) {
          this.setState({
            submitError: `"${transformId}" 이름의 작업이 이미 존재합니다. 다른 이름을 지정하세요.`,
            transformIdError: `"${transformId}" 이름의 작업이 이미 존재합니다. 다른 이름을 지정하세요.`,
          });
          error = true;
        }
      }
      if (sourceIndex.length == 0) {
        this.setState({ submitError: "원본 인덱스는 필수 항목입니다.", sourceIndexError: "원본 인덱스는 필수 항목입니다." });
        error = true;
      }
      if (targetIndex.length == 0) {
        this.setState({ submitError: "대상 인덱스는 필수 항목입니다.", targetIndexError: "대상 인덱스는 필수 항목입니다." });
        error = true;
      }
      if (sourceIndexFilterError !== "") {
        this.setState({ submitError: "원본 인덱스 필터가 유효하지 않습니다" });
        error = true;
      }
      // Run search of source index data
      if (!error) {
        const searchDataOk = await this.searchData();
        error = !searchDataOk;
      }
    } else if (currentStep == 2) {
      //TODO: Add checking to see if grouping is defined
    }
    if (error) return;
    currentStep = currentStep >= 3 ? 4 : currentStep + 1;
    warned = true;

    this.setState({
      submitError: "",
      currentStep: currentStep,
      beenWarned: warned,
    });
  };

  _prev() {
    let currentStep = this.state.currentStep;
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    if (currentStep == 1) {
      const dataSourceReadOnly = this.props.dataSourceReadOnly;
      const setDataSourceReadOnly = this.props.setDataSourceReadOnly;

      if (this.props.multiDataSourceEnabled && dataSourceReadOnly) {
        setDataSourceReadOnly(false);
      }
    }
    this.setState({
      currentStep: currentStep,
    });
  }

  onChangeStep = (step: number): void => {
    if (step > 3) return;
    this.setState({
      currentStep: step,
    });
  };

  onChangeDescription = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    const description = e.target.value;
    let newJSON = this.state.transformJSON;
    newJSON.transform.description = description;
    this.setState({ description: description, transformJSON: newJSON });
  };

  onChangeName = (e: ChangeEvent<HTMLInputElement>): void => {
    const transformId = e.target.value;
    this.setState({ transformId, transformIdError: transformId ? "" : "이름은 필수 항목입니다" });
  };

  onChangeSourceIndex = async (options: EuiComboBoxOptionOption<IndexItem>[]): Promise<void> => {
    let newJSON = this.state.transformJSON;
    let sourceIndex = options.map(function (option) {
      return option.label;
    });
    const sourceIndexError = sourceIndex.length ? "" : "원본 인덱스는 필수 항목입니다";
    const srcIndexText = sourceIndex.length ? sourceIndex[0] : "";
    newJSON.transform.source_index = srcIndexText;
    this.setState({ sourceIndex: options, transformJSON: newJSON, sourceIndexError: sourceIndexError });
    this.setState({
      selectedGroupField: [],
      selectedAggregations: {},
      aggList: [],
    });
    await this.getMappings(srcIndexText);
  };

  //TODO: Change type from string to string[] or something else  when multiple data filter is supported
  onChangeSourceIndexFilter = (newFilter: string): void => {
    let newJSON = this.state.transformJSON;
    if (newFilter == "") {
      newJSON.transform.hasOwnProperty("data_selection_query") && delete newJSON.transform.data_selection_query;
      this.setState({ sourceIndexFilterError: "" });
    } else {
      try {
        newJSON.transform.data_selection_query = JSON.parse(newFilter);
        this.setState({ sourceIndexFilterError: "" });
      } catch (err) {
        this.setState({ sourceIndexFilterError: "원본 인덱스 필터 JSON이 유효하지 않습니다" });
      }
    }
    this.setState({ sourceIndexFilter: newFilter, transformJSON: newJSON });
  };

  onChangeTargetIndex = (options: EuiComboBoxOptionOption<IndexItem>[]): void => {
    //Try to get label text from option from the only array element in options, if exists
    let newJSON = this.state.transformJSON;
    let targetIndex = options.map(function (option) {
      return option.label;
    });

    const targetIndexError = targetIndex.length ? "" : "대상 인덱스는 필수 항목입니다";

    newJSON.transform.target_index = targetIndex[0];
    this.setState({ targetIndex: options, transformJSON: newJSON, targetIndexError: targetIndexError });
  };

  onGroupSelectionChange = async (selectedGroupField: TransformGroupItem[], aggItem: TransformAggItem): Promise<void> => {
    const { aggList } = this.state;
    aggList.push(aggItem);
    this.updateGroup();
    const previewSuccess = await this.previewTransform(this.state.transformJSON);

    // If preview successfully update groupings, else remove from list of transformation
    if (previewSuccess) this.setState({ selectedGroupField });
    else await this.onRemoveTransformation(aggItem.name);
  };

  onAggregationSelectionChange = async (selectedAggregations: any, aggItem: TransformAggItem): Promise<void> => {
    const { aggList } = this.state;
    aggList.push(aggItem);
    this.updateAggregation();
    const previewSuccess = await this.previewTransform(this.state.transformJSON);

    // If preview successfully update aggregations, else remove from list of transformation
    if (previewSuccess) this.setState({ selectedAggregations: selectedAggregations });
    else await this.onRemoveTransformation(aggItem.name);
  };

  onEditTransformation = async (oldName: string, newName: string): Promise<void> => {
    const { aggList } = this.state;

    const toEditIndex = aggList.findIndex((item) => {
      return item.name === oldName;
    });

    let newAggItem = aggList[toEditIndex];
    const type = aggList[toEditIndex].type;

    // Modify the name of transform
    newAggItem.name = newName;

    // Also modify the target field if the transformation is a group by definition
    if (isGroupBy(type)) newAggItem.item[type].target_field = newName;

    this.setState({ aggList });

    this.updateGroup();
    this.updateAggregation();
    await this.previewTransform(this.state.transformJSON);
  };

  onRemoveTransformation = async (name: string): Promise<void> => {
    const { aggList } = this.state;
    const toRemoveIndex = aggList.findIndex((item) => {
      return item.name === name;
    });
    aggList.splice(toRemoveIndex, 1);
    this.setState({ aggList });

    this.updateGroup();
    this.updateAggregation();
    await this.previewTransform(this.state.transformJSON);
  };

  onChangeJobEnabledByDefault = (): void => {
    const checked = this.state.jobEnabledByDefault;
    let newJSON = this.state.transformJSON;
    newJSON.transform.enabled = !checked;
    this.setState({ jobEnabledByDefault: !checked, transformJSON: newJSON });
  };

  onChangeContinuousJob = (optionId: string): void => {
    let newJSON = this.state.transformJSON;
    newJSON.transform.continuous = optionId == "yes";
    this.setState({ continuousJob: optionId, transformJSON: newJSON });
  };

  onChangeIntervalTime = (e: ChangeEvent<HTMLInputElement>): void => {
    this.setState({ interval: e.target.valueAsNumber });
    if (e.target.value == "") {
      const intervalErrorMsg = "간격 값은 필수 항목입니다.";
      this.setState({ submitError: intervalErrorMsg, intervalError: intervalErrorMsg });
    } else {
      this.setState({ intervalError: "" });
    }
  };

  onChangePage = (e: ChangeEvent<HTMLInputElement>): void => {
    let newJSON = this.state.transformJSON;
    newJSON.transform.page_size = e.target.valueAsNumber;
    this.setState({ pageSize: e.target.valueAsNumber, transformJSON: newJSON });
  };

  updateSchedule = (): void => {
    const { interval, intervalTimeunit } = this.state;
    let newJSON = this.state.transformJSON;

    newJSON.transform.schedule.interval = {
      start_time: moment().unix(),
      unit: `${intervalTimeunit}`,
      period: `${interval}`,
    };
    delete newJSON.transform.schedule["cron"];

    this.setState({ transformJSON: newJSON });
  };

  onChangeIntervalTimeunit = (e: ChangeEvent<HTMLSelectElement>): void => {
    this.setState({ intervalTimeunit: e.target.value });
  };

  updateGroup = (): void => {
    const { transformJSON, aggList } = this.state;
    let newJSON = transformJSON;
    let tempGroupSelect: TransformGroupItem[] = [];
    aggList.map((aggItem) => {
      if (
        aggItem.type == TRANSFORM_AGG_TYPE.histogram ||
        aggItem.type == TRANSFORM_AGG_TYPE.terms ||
        aggItem.type == TRANSFORM_AGG_TYPE.date_histogram
      )
        tempGroupSelect.push(aggItem.item);
    });
    if (tempGroupSelect.length) newJSON.transform.groups = tempGroupSelect;
    this.setState({ transformJSON: newJSON });
  };

  updateAggregation = (): void => {
    const { transformJSON, aggList } = this.state;
    let newJSON = transformJSON;
    let aggJSON: any = {};
    aggList.map((aggItem) => {
      // Form the final aggregation object with items with correct types from aggList
      if (
        aggItem.type !== TRANSFORM_AGG_TYPE.histogram &&
        aggItem.type !== TRANSFORM_AGG_TYPE.terms &&
        aggItem.type !== TRANSFORM_AGG_TYPE.date_histogram
      )
        aggJSON[aggItem.name] = aggItem.item;
    });
    newJSON.transform.aggregations = aggJSON;
    this.setState({ transformJSON: newJSON });
  };

  onSubmit = async (): Promise<void> => {
    const { transformId, transformJSON } = this.state;
    this.setState({ submitError: "", isSubmitting: true, hasSubmitted: true });
    try {
      if (!transformId) {
        this.setState({ transformIdError: "필수 항목입니다" });
      } else {
        this.updateGroup();
        this.updateAggregation();
        this.updateSchedule();
        await this.onCreate(transformId, transformJSON);
      }
    } catch (err) {
      this.context.notifications.toasts.addDanger("트랜스폼 JSON이 유효하지 않습니다");
      console.error(err);
    }

    if (!this._isMount) {
      return;
    }
    this.setState({ isSubmitting: false });
  };

  onCancel = (): void => {
    this.props.history.push(ROUTES.TRANSFORMS);
  };

  onCreate = async (transformId: string, transform: Transform): Promise<void> => {
    const { transformService } = this.props;
    try {
      const response = await transformService.putTransform(transform, transformId);
      if (response.ok) {
        this.context.notifications.toasts.addSuccess(createdTransformToastMessage(response.response._id));
        this.props.history.push(ROUTES.TRANSFORMS);
      } else {
        this.setState({ submitError: response.error });
        this.context.notifications.toasts.addDanger(`트랜스폼을 생성하지 못했습니다: ${response.error}`);
      }
    } catch (err) {
      this.setState({ submitError: getErrorMessage(err, "트랜스폼 작업을 생성하는 중에 문제가 발생했습니다") });
      this.context.notifications.toasts.addDanger(
        `트랜스폼을 생성하지 못했습니다: ${getErrorMessage(err, "트랜스폼 작업을 생성하는 중에 문제가 발생했습니다")}`
      );
    }
  };

  render() {
    const {
      transformId,
      transformIdError,
      submitError,
      isSubmitting,
      hasSubmitted,
      description,
      sourceIndex,
      sourceIndexError,
      sourceIndexFilter,
      sourceIndexFilterError,
      targetIndex,
      targetIndexError,
      currentStep,
      previewTransform,
      fields,
      fieldSelectedOption,
      selectedGroupField,
      selectedAggregations,
      aggList,
      jobEnabledByDefault,
      continuousJob,
      interval,
      intervalTimeunit,
      intervalError,
      pageSize,

      beenWarned,
      isLoading,
    } = this.state;
    const uiSettings = getUISettings();
    const useUpdatedUX = uiSettings.get("home:useNewHomePage");
    return (
      <div style={{ width: "100%" }}>
        <SetUpIndices
          {...this.props}
          transformId={transformId}
          transformIdError={transformIdError}
          submitError={submitError}
          isSubmitting={isSubmitting}
          hasSubmitted={hasSubmitted}
          description={description}
          sourceIndexFilter={sourceIndexFilter}
          sourceIndexFilterError={sourceIndexFilterError}
          sourceIndex={sourceIndex}
          sourceIndexError={sourceIndexError}
          targetIndex={targetIndex}
          targetIndexError={targetIndexError}
          onChangeName={this.onChangeName}
          onChangeDescription={this.onChangeDescription}
          onChangeSourceIndex={this.onChangeSourceIndex}
          onChangeSourceIndexFilter={this.onChangeSourceIndexFilter}
          onChangeTargetIndex={this.onChangeTargetIndex}
          currentStep={this.state.currentStep}
          hasAggregation={selectedGroupField.length != 0 || Object.keys(selectedAggregations).length != 0 || aggList.length != 0}
          fields={fields}
          fieldSelectedOption={fieldSelectedOption}
          beenWarned={beenWarned}
          useUpdatedUX={useUpdatedUX}
        />
        <DefineTransformsStep
          {...this.props}
          currentStep={this.state.currentStep}
          sourceIndex={sourceIndex[0] ? sourceIndex[0].label : ""}
          sourceIndexFilter={sourceIndexFilter}
          fields={fields}
          aggList={aggList}
          selectedGroupField={selectedGroupField}
          selectedAggregations={selectedAggregations}
          onGroupSelectionChange={this.onGroupSelectionChange}
          onAggregationSelectionChange={this.onAggregationSelectionChange}
          onEditTransformation={this.onEditTransformation}
          onRemoveTransformation={this.onRemoveTransformation}
          previewTransform={previewTransform}
          useUpdatedUX={useUpdatedUX}
        />
        <SpecifyScheduleStep
          {...this.props}
          currentStep={this.state.currentStep}
          jobEnabledByDefault={jobEnabledByDefault}
          continuousJob={continuousJob}
          interval={interval}
          intervalTimeunit={intervalTimeunit}
          intervalError={intervalError}
          pageSize={pageSize}
          onChangeJobEnabledByDefault={this.onChangeJobEnabledByDefault}
          onChangeContinuousJob={this.onChangeContinuousJob}
          onChangeIntervalTime={this.onChangeIntervalTime}
          onChangePage={this.onChangePage}
          onChangeIntervalTimeunit={this.onChangeIntervalTimeunit}
          useUpdatedUX={useUpdatedUX}
        />
        <ReviewAndCreateStep
          {...this.props}
          transformId={transformId}
          description={description}
          sourceIndex={sourceIndex}
          targetIndex={targetIndex}
          sourceIndexFilter={sourceIndexFilter}
          fields={fields}
          selectedGroupField={selectedGroupField}
          onGroupSelectionChange={this.onGroupSelectionChange}
          selectedAggregations={selectedAggregations}
          aggList={aggList}
          onAggregationSelectionChange={this.onAggregationSelectionChange}
          onRemoveTransformation={this.onRemoveTransformation}
          previewTransform={previewTransform}
          jobEnabledByDefault={jobEnabledByDefault}
          continuousJob={continuousJob}
          interval={interval}
          intervalTimeunit={intervalTimeunit}
          pageSize={pageSize}
          currentStep={this.state.currentStep}
          onChangeStep={this.onChangeStep}
          submitError={submitError}
          useUpdatedUX={useUpdatedUX}
        />
        <EuiFlexGroup
          alignItems="center"
          justifyContent="flexEnd"
          style={useUpdatedUX ? { padding: "0px" } : { padding: "5px 50px" }}
          gutterSize="s"
        >
          <EuiFlexItem grow={false}>
            <EuiSmallButtonEmpty onClick={this.onCancel} data-test-subj="createTransformCancelButton">
              취소
            </EuiSmallButtonEmpty>
          </EuiFlexItem>
          {currentStep != 1 && (
            <EuiFlexItem grow={false}>
              <EuiSmallButton onClick={this._prev} data-test-subj="createTransformPreviousButton">
                이전
              </EuiSmallButton>
            </EuiFlexItem>
          )}

          {currentStep == 4 ? (
            <EuiFlexItem grow={false}>
              <EuiSmallButton fill onClick={this.onSubmit} isLoading={isSubmitting} data-test-subj="createTransformSubmitButton">
                생성
              </EuiSmallButton>
            </EuiFlexItem>
          ) : (
            <EuiFlexItem grow={false}>
              <EuiSmallButton fill onClick={this._next} isLoading={isLoading} data-test-subj="createTransformNextButton">
                다음
              </EuiSmallButton>
            </EuiFlexItem>
          )}
        </EuiFlexGroup>
      </div>
    );
  }
}

export default function (props: Omit<CreateTransformFormProps, keyof DataSourceMenuProperties>) {
  const dataSourceMenuProperties = useContext(DataSourceMenuContext);
  useUpdateUrlWithDataSourceProperties();
  return <CreateTransformForm {...props} {...dataSourceMenuProperties} />;
}
