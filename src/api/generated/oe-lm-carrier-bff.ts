/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface CreateCourierLegalRequestCourierDto {
  attributes?: string[];
  email?: string;
  firstName?: string;
  /** @format int64 */
  organizationId?: string;
  /** @format int64 */
  partnerId?: string;
  phoneNumber?: string;
  secondName?: string;
  /** @format int64 */
  supervisorId?: string;
  surname?: string;
  /** @format int64 */
  typeId?: string;
  /** @format int64 */
  warehouseId?: string;
}

export interface CreateCourierLegalRequestCourierPersonalInformationDto {
  bikOfBankTheCounterpart?: string;
  /** @format date-time */
  birthDate?: string;
  citizenshipCode?: string;
  correspondentAccountOfBankTheCounterpart?: string;
  inn?: string;
  nameOfBankTheCounterpart?: string;
  /** @format date-time */
  passportDateOfIssue?: string;
  passportIssuingAuthority?: string;
  passportNumber?: string;
  paymentAccountNumber?: string;
  postalAddress?: string;
  snils?: string;
}

export interface ListFamilyLaborWarehouseCombinationsResponseCombinationDto {
  jobTitle?: OeLmCarrierBffJobTitleDto;
  jobTitleFamily?: OeLmCarrierBffJobTitleFamilyDto;
  laborRelation?: OeLmCarrierBffLaborRelationDto;
  warehouses?: OeLmCarrierBffWarehouseDto[];
}

export interface ModelCargoLimitsDto {
  /** @format int64 */
  carryingCapacity?: string;
  /** @format int64 */
  height?: string;
  /** @format int64 */
  length?: string;
  /** @format int64 */
  volume?: string;
  /** @format int64 */
  width?: string;
}

export interface ValidateDraftCourierSchedulesRequestValidateScheduleDto {
  schedules?: OeLmCarrierBffScheduleDto[];
  /** @format date-time */
  validateDate?: string;
}

/** @default "VALIDATE_STATUS_UNKNOWN" */
export enum ValidateDraftCourierSchedulesResponseValidateReasonTypeDto {
  VALIDATE_STATUS_UNKNOWN = "VALIDATE_STATUS_UNKNOWN",
  VALIDATE_STATUS_ERROR = "VALIDATE_STATUS_ERROR",
  VALIDATE_STATUS_WARNING = "VALIDATE_STATUS_WARNING",
}

export interface ValidateDraftCourierSchedulesResponseValidateScheduleReasonDto {
  message?: string;
  /** @format int64 */
  scheduleId?: string;
  validateReasonType?: ValidateDraftCourierSchedulesResponseValidateReasonTypeDto;
}

export interface ValidateDraftCourierSchedulesResponseValidateScheduleUnitDto {
  /** @format date-time */
  validateDate?: string;
  validationReasons?: ValidateDraftCourierSchedulesResponseValidateScheduleReasonDto[];
}

export interface ApioeLmCarrierBffTagDto {
  hasAttachedWarehouse?: boolean;
  /** @format int64 */
  id?: string;
  title?: string;
}

export interface OeCourierLegalGatewayAttributeDto {
  code?: string;
  description?: string;
}

export interface OeCourierLegalGatewayCitizenshipDto {
  code?: string;
  name?: string;
}

export interface OeCourierLegalGatewayCourierTypeDto {
  forCreate?: boolean;
  /** @format int64 */
  id?: string;
  name?: string;
  slug?: string;
}

export interface OeCourierLegalGatewayCreateCourierLegalRequestDto {
  courier?: CreateCourierLegalRequestCourierDto;
  personalInfo?: CreateCourierLegalRequestCourierPersonalInformationDto;
}

export interface OeCourierLegalGatewayCreateCourierLegalResponseDto {
  /** @format int64 */
  courierId?: string;
}

export interface OeCourierLegalGatewayListAttributesResponseDto {
  attributes?: OeCourierLegalGatewayAttributeDto[];
}

export interface OeCourierLegalGatewayListCitizenshipsResponseDto {
  list?: OeCourierLegalGatewayCitizenshipDto[];
}

export interface OeCourierLegalGatewayListCouierOrganisationsResponseDto {
  courierOrganizations?: OeCourierLegalGatewayOrganisationDto[];
}

export interface OeCourierLegalGatewayListCourierTypesResponseDto {
  types?: OeCourierLegalGatewayCourierTypeDto[];
}

export interface OeCourierLegalGatewayListPartnersResponseDto {
  /** @format int64 */
  count?: string;
  partners?: OeCourierLegalGatewayPartnerDto[];
  /** @format int64 */
  skipped?: string;
  /** @format int64 */
  total?: string;
}

export interface OeCourierLegalGatewayOrganisationDto {
  country?: string;
  /** @format int64 */
  id?: string;
  name?: string;
}

export interface OeCourierLegalGatewayPartnerDto {
  /** @format int64 */
  id?: string;
  metazonId?: string;
  name?: string;
}

export interface OeLmCarrierBffAddCourierTagRequestDto {
  /** @format int64 */
  courierId: string;
  /** @format int64 */
  tagId: string;
}

export interface OeLmCarrierBffBatchGetCourierTransportTypesResponseDto {
  transportTypes?: OeLmCarrierBffTransportTypeDescriptionDto[];
}

export interface OeLmCarrierBffBatchGetVehiclesResponseDto {
  vehicles?: OeLmCarrierBffVehicleDto[];
}

export interface OeLmCarrierBffBrandDto {
  /** @format int64 */
  id?: string;
  name?: string;
}

export interface OeLmCarrierBffCourierDto {
  confirmed?: OeLmCarrierBffScheduleSummaryDto;
  courierStatus?: OeLmCarrierBffCourierStatusDto;
  courierType?: OeLmCarrierBffTypeOfCourierDto;
  firstName?: string;
  /** @format int64 */
  id?: string;
  jobTitle?: OeLmCarrierBffJobTitleDto;
  jobTitleFamily?: OeLmCarrierBffJobTitleFamilyDto;
  laborRelation?: OeLmCarrierBffLaborRelationDto;
  lastName?: string;
  middleName?: string;
  /** @format int64 */
  ozonId?: string;
  phoneNumber?: string;
  planned?: OeLmCarrierBffScheduleSummaryDto;
  refused?: OeLmCarrierBffScheduleSummaryDto;
  regular?: OeLmCarrierBffScheduleSummaryDto;
  schedules?: OeLmCarrierBffScheduleDto[];
  sideWork?: OeLmCarrierBffScheduleSummaryDto;
  state?: OeLmCarrierBffCourierStateDto;
  supervisor?: OeLmCarrierBffSupervisorDto;
  tags?: ApioeLmCarrierBffTagDto[];
  vehicle?: OeLmCarrierBffCourierVehicleDto;
  warehouse?: OeLmCarrierBffWarehouseDto;
  /** @format int64 */
  workingDays?: string;
}

/** @default "COURIER_STATE_UNKNOWN" */
export enum OeLmCarrierBffCourierStateDto {
  COURIER_STATE_UNKNOWN = "COURIER_STATE_UNKNOWN",
  COURIER_STATE_ACTIVE = "COURIER_STATE_ACTIVE",
  COURIER_STATE_INACTIVE = "COURIER_STATE_INACTIVE",
}

/** @default "COURIER_STATUS_UNKNOWN" */
export enum OeLmCarrierBffCourierStatusDto {
  COURIER_STATUS_UNKNOWN = "COURIER_STATUS_UNKNOWN",
  COURIER_STATUS_CREATING = "COURIER_STATUS_CREATING",
  COURIER_STATUS_ACTIVE = "COURIER_STATUS_ACTIVE",
  COURIER_STATUS_LOCKED = "COURIER_STATUS_LOCKED",
  COURIER_STATUS_DELETING = "COURIER_STATUS_DELETING",
  COURIER_STATUS_DELETED = "COURIER_STATUS_DELETED",
}

/** @default "COURIER_TRANSPORT_TYPE_UNKNOWN" */
export enum OeLmCarrierBffCourierTransportTypeDto {
  COURIER_TRANSPORT_TYPE_UNKNOWN = "COURIER_TRANSPORT_TYPE_UNKNOWN",
  COURIER_TRANSPORT_TYPE_AUTO = "COURIER_TRANSPORT_TYPE_AUTO",
  COURIER_TRANSPORT_TYPE_SCOOTER = "COURIER_TRANSPORT_TYPE_SCOOTER",
  COURIER_TRANSPORT_TYPE_BIKE = "COURIER_TRANSPORT_TYPE_BIKE",
  COURIER_TRANSPORT_TYPE_FOOT = "COURIER_TRANSPORT_TYPE_FOOT",
}

export interface OeLmCarrierBffCourierTypeDto {
  /** @format int64 */
  capacity?: string;
  /** @format int64 */
  clearingId?: string;
  /** @format double */
  cost?: number;
  /** @format int64 */
  distanceMeters?: string;
  /** @format int64 */
  heightMillimeters?: string;
  /** @format int64 */
  id?: string;
  /** @format int64 */
  lengthMillimeters?: string;
  name?: string;
  /** @format int64 */
  postingCapacity?: string;
  transportType?: OeLmCarrierBffCourierTransportTypeDto;
  /** @format int64 */
  weightGramms?: string;
  /** @format int64 */
  widthMillimeters?: string;
}

export interface OeLmCarrierBffCourierVehicleDto {
  /** @format int64 */
  id?: string;
  numberPlate?: string;
}

export interface OeLmCarrierBffCreateAttributeRequestDto {
  name: string;
}

export interface OeLmCarrierBffCreateAttributeResponseDto {
  /** @format int64 */
  id?: string;
}

export interface OeLmCarrierBffCreateBrandRequestDto {
  name: string;
}

export interface OeLmCarrierBffCreateBrandResponseDto {
  brand?: OeLmCarrierBffBrandDto;
}

export interface OeLmCarrierBffCreateCourierTypeRequestDto {
  courierType?: OeLmCarrierBffCourierTypeDto;
}

export interface OeLmCarrierBffCreateCourierTypeResponseDto {
  /** @format int64 */
  id?: string;
}

export interface OeLmCarrierBffCreateModelRequestDto {
  /** @format int64 */
  brandId: string;
  /** @format int64 */
  carryingCapacity: string;
  /** @format int64 */
  height: string;
  /** @format int64 */
  length: string;
  name: string;
  /** @format double */
  occupancyRate: number;
  /** @format int64 */
  transportClassId: string;
  /** @format int64 */
  volume: string;
  /** @format int64 */
  width: string;
  /** @format int64 */
  year?: number;
}

export interface OeLmCarrierBffCreateModelResponseDto {
  /** @format int64 */
  modelId?: string;
}

export interface OeLmCarrierBffCreateTagRequestDto {
  title: string;
  /** @format int64 */
  warehouseClearingId?: string;
}

export interface OeLmCarrierBffCreateTransportClassRequestDto {
  name: string;
}

export interface OeLmCarrierBffCreateTransportClassResponseDto {
  transportClass?: OeLmCarrierBffTransportClassDto;
}

export interface OeLmCarrierBffCreateVehicleRequestDto {
  attributes?: OeLmCarrierBffCreateVehicleRequestAttributeDto[];
  color: string;
  /** @format int64 */
  initMileage?: string;
  /** @format int64 */
  mileageMaintenanceLimit?: string;
  /** @format int64 */
  modelId: string;
  numberPlate: string;
  ownerName: string;
  ownerType: OeLmCarrierBffVehicleOwnerTypeDto;
  vin: string;
  /** @format int64 */
  warehouseClearingId: string;
}

export interface OeLmCarrierBffCreateVehicleRequestAttributeDto {
  /** @format int64 */
  id?: string;
  value?: string;
}

export interface OeLmCarrierBffCreateVehicleResponseDto {
  /** @format int64 */
  id?: string;
}

export type OeLmCarrierBffDeleteAttributeResponseDto = object;

export type OeLmCarrierBffDeleteBrandResponseDto = object;

export type OeLmCarrierBffDeleteModelResponseDto = object;

export type OeLmCarrierBffDeleteTransportClassResponseDto = object;

export type OeLmCarrierBffDeleteVehicleResponseDto = object;

export interface OeLmCarrierBffExportCouriersByPeriodRequestDto {
  /** @format date-time */
  periodFrom: string;
  /** @format date-time */
  periodTo: string;
  /** @format string */
  timezone: string;
  /** @format int64 */
  warehouseId: string;
}

export interface OeLmCarrierBffGetBrandResponseDto {
  brand?: OeLmCarrierBffBrandDto;
}

export interface OeLmCarrierBffGetCourierByIDResponseDto {
  courier?: OeLmCarrierBffCourierDto;
}

export interface OeLmCarrierBffGetCourierTypesByWarehouseIDResponseDto {
  courierTypes?: OeLmCarrierBffCourierTypeDto[];
}

export interface OeLmCarrierBffGetModelResponseDto {
  model?: OeLmCarrierBffModelDto;
}

export interface OeLmCarrierBffGetTransportClassResponseDto {
  transportClass?: OeLmCarrierBffTransportClassDto;
}

export interface OeLmCarrierBffGetVehicleResponseDto {
  vehicle?: OeLmCarrierBffVehicleDto;
}

export interface OeLmCarrierBffGetWarehouseSettingProhibitionResponseDto {
  /** @format int64 */
  days?: string;
  isActive?: boolean;
  /** @format int64 */
  warehouseId?: string;
}

export interface OeLmCarrierBffJobTitleDto {
  /** @format int64 */
  id?: string;
  name?: string;
}

export interface OeLmCarrierBffJobTitleFamilyDto {
  /** @format int64 */
  id?: string;
  name?: string;
}

export interface OeLmCarrierBffLaborRelationDto {
  /** @format int64 */
  id?: string;
  name?: string;
}

export interface OeLmCarrierBffListAttributesResponseDto {
  attributes?: OeLmCarrierBffListAttributesResponseAttributeDto[];
  /** @format uint64 */
  totalCount?: string;
}

export interface OeLmCarrierBffListAttributesResponseAttributeDto {
  /** @format int64 */
  id?: string;
  name?: string;
}

export interface OeLmCarrierBffListBrandsResponseDto {
  brands?: OeLmCarrierBffBrandDto[];
}

export interface OeLmCarrierBffListCourierIdsWithProblemJobTitleResponseDto {
  courierIds?: string[];
}

export interface OeLmCarrierBffListCourierJobTitlesResponseDto {
  jobTitles?: OeLmCarrierBffJobTitleDto[];
}

export interface OeLmCarrierBffListCourierSchedulesResponseDto {
  couriers?: OeLmCarrierBffCourierDto[];
}

export interface OeLmCarrierBffListCourierTypesResponseDto {
  courierTypes?: OeLmCarrierBffCourierTypeDto[];
}

export interface OeLmCarrierBffListCouriersResponseDto {
  couriers?: OeLmCarrierBffCourierDto[];
  /** @format int64 */
  total?: number;
}

export interface OeLmCarrierBffListFamilyLaborWarehouseCombinationsResponseDto {
  combinations?: ListFamilyLaborWarehouseCombinationsResponseCombinationDto[];
}

export interface OeLmCarrierBffListFreshWarehousesResponseDto {
  /** @format int64 */
  total?: number;
  warehouses?: OeLmCarrierBffWarehouseDto[];
}

export interface OeLmCarrierBffListJobTitleFamilyResponseDto {
  jobTitleFamilies?: OeLmCarrierBffJobTitleFamilyDto[];
}

export interface OeLmCarrierBffListLaborRelationsResponseDto {
  laborRelations?: OeLmCarrierBffLaborRelationDto[];
}

export interface OeLmCarrierBffListModelsResponseDto {
  models?: OeLmCarrierBffModelDto[];
  /** @format uint64 */
  totalCount?: string;
}

export interface OeLmCarrierBffListTagsResponseDto {
  tags?: ApioeLmCarrierBffTagDto[];
  /** @format int64 */
  total?: number;
}

export interface OeLmCarrierBffListTransportClassesResponseDto {
  transportClasses?: OeLmCarrierBffTransportClassDto[];
}

export interface OeLmCarrierBffListVehiclesByNumberResponseDto {
  vehicles?: OeLmCarrierBffVehicleDto[];
}

export interface OeLmCarrierBffListVehiclesResponseDto {
  /** @format uint64 */
  totalCount?: string;
  vehicles?: OeLmCarrierBffVehicleDto[];
}

export interface OeLmCarrierBffModelDto {
  brand?: OeLmCarrierBffBrandDto;
  cargoLimits?: ModelCargoLimitsDto;
  /** @format int64 */
  id?: string;
  name?: string;
  /** @format double */
  occupancyRate?: number;
  transportClass?: OeLmCarrierBffTransportClassDto;
  /** @format int64 */
  year?: number;
}

export interface OeLmCarrierBffOwnerDto {
  name?: string;
  typeId?: OeLmCarrierBffVehicleOwnerTypeDto;
}

export interface OeLmCarrierBffPlanCouriersSchedulesRequestDto {
  schedules?: OeLmCarrierBffScheduleDto[];
}

export interface OeLmCarrierBffPlanCouriersSchedulesResponseV3Dto {
  warnings?: string[];
}

export type OeLmCarrierBffSaveFamilyLaborWarehouseCombinationResponseDto = object;

export interface OeLmCarrierBffScheduleDto {
  /** @format int64 */
  courierId?: string;
  /** @format date-time */
  factFinish?: string;
  /** @format date-time */
  factStart?: string;
  /** @format date-time */
  from?: string;
  /** @format int64 */
  id?: string;
  /** @format int64 */
  lateForMinutes?: string;
  scheduleType?: OeLmCarrierBffScheduleTypeDto;
  status?: OeLmCarrierBffScheduleStatusDto;
  /** @format date-time */
  to?: string;
}

/** @default "SCHEDULE_STATUS_UNKNOWN" */
export enum OeLmCarrierBffScheduleStatusDto {
  SCHEDULE_STATUS_UNKNOWN = "SCHEDULE_STATUS_UNKNOWN",
  SCHEDULE_STATUS_PLANNED = "SCHEDULE_STATUS_PLANNED",
  SCHEDULE_STATUS_COMFIRMED = "SCHEDULE_STATUS_COMFIRMED",
  SCHEDULE_STATUS_REFUSED = "SCHEDULE_STATUS_REFUSED",
}

export interface OeLmCarrierBffScheduleSummaryDto {
  /** @format int64 */
  count?: string;
  /** @format int64 */
  hours?: string;
}

/** @default "SCHEDULE_TYPE_UNKNOWN" */
export enum OeLmCarrierBffScheduleTypeDto {
  SCHEDULE_TYPE_UNKNOWN = "SCHEDULE_TYPE_UNKNOWN",
  SCHEDULE_TYPE_REGULAR = "SCHEDULE_TYPE_REGULAR",
  SCHEDULE_TYPE_SIDE = "SCHEDULE_TYPE_SIDE",
}

export interface OeLmCarrierBffSetWarehouseSettingProhibitionRequestDto {
  authorEmail: string;
  /** @format int64 */
  days?: string;
  isActive: boolean;
  /** @format int64 */
  warehouseId?: string;
}

export interface OeLmCarrierBffSupervisorDto {
  email?: string;
  firstName?: string;
  /** @format int64 */
  id?: string;
  phoneNumber?: string;
  secondName?: string;
  surname?: string;
}

export interface OeLmCarrierBffTransportClassDto {
  /** @format int64 */
  id?: string;
  name?: string;
}

export interface OeLmCarrierBffTransportTypeDescriptionDto {
  name?: string;
  transportType?: OeLmCarrierBffCourierTransportTypeDto;
}

export interface OeLmCarrierBffTypeOfCourierDto {
  /** @format int64 */
  id?: string;
  name?: string;
}

export type OeLmCarrierBffUpdateAttributeResponseDto = object;

export interface OeLmCarrierBffUpdateCourierInfoRequestBodyDto {
  /** @format int64 */
  courierTypeId?: string;
  /** @format int64 */
  jobTitleId: string;
  /** @format int64 */
  supervisorId?: string;
  tagsIds?: string[];
  /** @format int64 */
  vehicleId?: string;
}

export type OeLmCarrierBffUpdateVehicleMileageResponseDto = object;

export interface OeLmCarrierBffUpdateVehicleRequestAttributeDto {
  /** @format int64 */
  id?: string;
  value?: string;
}

export type OeLmCarrierBffUpdateVehicleResponseDto = object;

export interface OeLmCarrierBffValidateDraftCourierSchedulesRequestDto {
  validateSchedules?: ValidateDraftCourierSchedulesRequestValidateScheduleDto[];
}

export interface OeLmCarrierBffValidateDraftCourierSchedulesResponseDto {
  validateUnits?: ValidateDraftCourierSchedulesResponseValidateScheduleUnitDto[];
}

export interface OeLmCarrierBffVehicleDto {
  attributes?: OeLmCarrierBffVehicleAttributeDto[];
  color?: string;
  /** @format int64 */
  id?: string;
  /** @format int64 */
  mileage?: string;
  model?: OeLmCarrierBffModelDto;
  numberPlate?: string;
  owner?: OeLmCarrierBffOwnerDto;
  vin?: string;
  /** @format int64 */
  warehouseClearingId?: string;
}

export interface OeLmCarrierBffVehicleAttributeDto {
  /** @format int64 */
  id?: string;
  name?: string;
  value?: string;
}

/** @default "VEHICLE_OWNER_TYPE_UNKNOWN" */
export enum OeLmCarrierBffVehicleOwnerTypeDto {
  VEHICLE_OWNER_TYPE_UNKNOWN = "VEHICLE_OWNER_TYPE_UNKNOWN",
  VEHICLE_OWNER_TYPE_OWN = "VEHICLE_OWNER_TYPE_OWN",
  VEHICLE_OWNER_TYPE_PRIVATE = "VEHICLE_OWNER_TYPE_PRIVATE",
}

export interface OeLmCarrierBffWarehouseDto {
  /** @format int64 */
  clearingId?: string;
  name?: string;
}

export interface ProtobufAnyDto {
  "@type"?: string;
}

export interface RpcStatusDto {
  /** @format int32 */
  code?: number;
  details?: ProtobufAnyDto[];
  message?: string;
}

export interface SupervisorsBffBatchGetSupervisorsResponseDto {
  supervisors?: SupervisorsBffSupervisorDto[];
}

export interface SupervisorsBffListSupervisorsResponseDto {
  /** @format int64 */
  count?: string;
  list?: SupervisorsBffSupervisorDto[];
  /** @format int64 */
  skipped?: string;
  /** @format int64 */
  total?: string;
}

export interface SupervisorsBffSupervisorDto {
  email?: string;
  firstName?: string;
  /** @format int64 */
  id?: string;
  phoneNumber?: string;
  secondName?: string;
  surname?: string;
}

import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";
import qs from "qs";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export type HttpQueryArrayFormat =
  | "brackets" // 'a[]=b&a[]=c'
  | "indices" // 'a[0]=b&a[1]=c'
  | "repeat" // 'a=b&a=c'
  | "comma"; // 'a=b,c'

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient {
  private instance: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.instance = axios;
  }

  private stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  private createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  private serializeParams(params: AxiosRequestConfig["paramsSerializer"]) {
    return qs.stringify(params, { arrayFormat: "repeat" });
  }

  public request = async <T = any, _E = any>({
    path,
    type,
    query,
    format = "json",
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...params,
      paramsSerializer: this.serializeParams,
      headers: {
        ...(params.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: format,
      data: body,
      url: path,
    });
  };
}

/**
 * @title oe-lm-carrier-bff
 * @version release-elo-6153
 * @baseUrl //oe-lm-carrier-bff-release-elo-6153.stg.a.o3.ru:80
 */
export class Api {
  http: HttpClient;

  constructor(private axios: AxiosInstance) {
    this.http = new HttpClient(axios);
  }

  /**
   * No description
   *
   * @tags CarrierBff
   * @name CarrierBffListAttributes
   * @summary Вернуть список аттрибутов авто
   * @request GET:/v1/attributes
   */
  carrierBffListAttributes(
    query?: {
      name?: string;
      /** @format int64 */
      limit?: string;
      /** @format int64 */
      offset?: string;
    },
    params: RequestParams = {},
  ) {
    return this.http.request<OeLmCarrierBffListAttributesResponseDto, RpcStatusDto>({
      path: `/v1/attributes`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CarrierBff
   * @name CarrierBffCreateAttribute
   * @summary Создать аттрибут авто
   * @request POST:/v1/attributes
   */
  carrierBffCreateAttribute(body: OeLmCarrierBffCreateAttributeRequestDto, params: RequestParams = {}) {
    return this.http.request<OeLmCarrierBffCreateAttributeResponseDto, RpcStatusDto>({
      path: `/v1/attributes`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CarrierBff
   * @name CarrierBffUpdateAttribute
   * @summary Обновить аттрибут авто
   * @request PUT:/v1/attributes/{id}
   */
  carrierBffUpdateAttribute(
    id: string,
    body: {
      name: string;
    },
    params: RequestParams = {},
  ) {
    return this.http.request<OeLmCarrierBffUpdateAttributeResponseDto, RpcStatusDto>({
      path: `/v1/attributes/${id}`,
      method: "PUT",
      body: body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CarrierBff
   * @name CarrierBffDeleteAttribute
   * @summary Удалить аттрибут авто
   * @request DELETE:/v1/attributes/{id}
   */
  carrierBffDeleteAttribute(id: string, params: RequestParams = {}) {
    return this.http.request<OeLmCarrierBffDeleteAttributeResponseDto, RpcStatusDto>({
      path: `/v1/attributes/${id}`,
      method: "DELETE",
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CarrierBff
   * @name CarrierBffListBrands
   * @summary Вернуть список производителей авто
   * @request GET:/v1/brands
   */
  carrierBffListBrands(
    query?: {
      param?: string;
    },
    params: RequestParams = {},
  ) {
    return this.http.request<OeLmCarrierBffListBrandsResponseDto, RpcStatusDto>({
      path: `/v1/brands`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CarrierBff
   * @name CarrierBffCreateBrand
   * @summary Создать производителя авто
   * @request POST:/v1/brands
   */
  carrierBffCreateBrand(body: OeLmCarrierBffCreateBrandRequestDto, params: RequestParams = {}) {
    return this.http.request<OeLmCarrierBffCreateBrandResponseDto, RpcStatusDto>({
      path: `/v1/brands`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CarrierBff
   * @name CarrierBffGetBrand
   * @summary Получить производителя авто
   * @request GET:/v1/brands/{id}
   */
  carrierBffGetBrand(id: string, params: RequestParams = {}) {
    return this.http.request<OeLmCarrierBffGetBrandResponseDto, RpcStatusDto>({
      path: `/v1/brands/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CarrierBff
   * @name CarrierBffDeleteBrand
   * @summary Удалить производителя авто
   * @request DELETE:/v1/brands/{id}
   */
  carrierBffDeleteBrand(id: string, params: RequestParams = {}) {
    return this.http.request<OeLmCarrierBffDeleteBrandResponseDto, RpcStatusDto>({
      path: `/v1/brands/${id}`,
      method: "DELETE",
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags ReportServiceBff
   * @name CourierExportCreate
   * @summary Возвращает отчет по курьерам в Microsoft Excel
   * @request POST:/v1/courier/export
   */
  courierExportCreate(body: OeLmCarrierBffExportCouriersByPeriodRequestDto, params: RequestParams = {}) {
    return this.http.request<File, RpcStatusDto>({
      path: `/v1/courier/export`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CarrierBff
   * @name CarrierBffUpdateCourierType
   * @summary Обновить тип курьера
   * @request PUT:/v1/courier/types/{id}
   */
  carrierBffUpdateCourierType(id: string, courierType: OeLmCarrierBffCourierTypeDto, params: RequestParams = {}) {
    return this.http.request<OeLmCarrierBffDeleteAttributeResponseDto, RpcStatusDto>({
      path: `/v1/courier/types/${id}`,
      method: "PUT",
      body: courierType,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CarrierBff
   * @name CarrierBffGetCourierById
   * @request GET:/v1/courier/{courierId}
   */
  carrierBffGetCourierById(courierId: string, params: RequestParams = {}) {
    return this.http.request<OeLmCarrierBffGetCourierByIDResponseDto, RpcStatusDto>({
      path: `/v1/courier/${courierId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CarrierBff
   * @name CarrierBffListCouriers
   * @summary Возвращает список курьеров
   * @request GET:/v1/couriers
   */
  carrierBffListCouriers(
    query: {
      /** @format int64 */
      warehouseClearingId?: string;
      /** @format int64 */
      jobTitleId?: string;
      name?: string;
      carNumberPlate?: string;
      /** @default "COURIER_STATE_UNKNOWN" */
      courierState?: "COURIER_STATE_UNKNOWN" | "COURIER_STATE_ACTIVE" | "COURIER_STATE_INACTIVE";
      /** @format int64 */
      page: number;
      /** @format int64 */
      limit: number;
      /** @format int64 */
      supervisorId?: string;
      /** @format int64 */
      courierTypeId?: string;
      /** @default "COURIER_STATUS_UNKNOWN" */
      courierStatus?:
        | "COURIER_STATUS_UNKNOWN"
        | "COURIER_STATUS_CREATING"
        | "COURIER_STATUS_ACTIVE"
        | "COURIER_STATUS_LOCKED"
        | "COURIER_STATUS_DELETING"
        | "COURIER_STATUS_DELETED";
      courierTagsIds?: string[];
      phoneNumber?: string;
      courierIds?: string[];
    },
    params: RequestParams = {},
  ) {
    return this.http.request<OeLmCarrierBffListCouriersResponseDto, RpcStatusDto>({
      path: `/v1/couriers`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CarrierBff
   * @name CarrierBffListCourierSchedules
   * @summary Возвращает список курьеров с их графиками
   * @request GET:/v1/couriers/schedules
   */
  carrierBffListCourierSchedules(
    query?: {
      /** @format int64 */
      warehouseClearingId?: string;
      /** @format date-time */
      from?: string;
      /** @format date-time */
      to?: string;
      /** @format int64 */
      jobTitleId?: string;
      /** @default "COURIER_STATE_UNKNOWN" */
      courierState?: "COURIER_STATE_UNKNOWN" | "COURIER_STATE_ACTIVE" | "COURIER_STATE_INACTIVE";
      /** @format date-time */
      workTimeFrom?: string;
      /** @format date-time */
      workTimeTo?: string;
      carNumberPlate?: string;
      /** @format int64 */
      supervisorId?: string;
      /** @default "SCHEDULE_TYPE_UNKNOWN" */
      scheduleType?: "SCHEDULE_TYPE_UNKNOWN" | "SCHEDULE_TYPE_REGULAR" | "SCHEDULE_TYPE_SIDE";
      jobTitleIds?: string[];
      warehouseClearingIds?: string[];
      familyIds?: string[];
    },
    params: RequestParams = {},
  ) {
    return this.http.request<OeLmCarrierBffListCourierSchedulesResponseDto, RpcStatusDto>({
      path: `/v1/couriers/schedules`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CarrierBff
   * @name CarrierBffPlanCouriersSchedules
   * @summary Запланировать график курьера
   * @request POST:/v1/couriers/schedules
   */
  carrierBffPlanCouriersSchedules(body: OeLmCarrierBffPlanCouriersSchedulesRequestDto, params: RequestParams = {}) {
    return this.http.request<OeLmCarrierBffDeleteAttributeResponseDto, RpcStatusDto>({
      path: `/v1/couriers/schedules`,
      method: "POST",
      body: body,
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CarrierBff
   * @name CarrierBffRemoveSchedules
   * @summary Удалить график курьера
   * @request DELETE:/v1/couriers/schedules
   */
  carrierBffRemoveSchedules(
    query?: {
      scheduleIds?: string[];
    },
    params: RequestParams = {},
  ) {
    return this.http.request<OeLmCarrierBffDeleteAttributeResponseDto, RpcStatusDto>({
      path: `/v1/couriers/schedules`,
      method: "DELETE",
      query: query,
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CarrierBff
   * @name CarrierBffValidateDraftCourierSchedules
   * @request POST:/v1/couriers/schedules/validate
   */
  carrierBffValidateDraftCourierSchedules(
    body: OeLmCarrierBffValidateDraftCourierSchedulesRequestDto,
    params: RequestParams = {},
  ) {
    return this.http.request<OeLmCarrierBffValidateDraftCourierSchedulesResponseDto, RpcStatusDto>({
      path: `/v1/couriers/schedules/validate`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CarrierBff
   * @name CarrierBffConfirmSchedule
   * @summary Подтвердить график курьера
   * @request POST:/v1/couriers/schedules:confirm
   */
  carrierBffConfirmSchedule(
    confirm: string,
    query: {
      /** @format int64 */
      scheduleId: string;
    },
    params: RequestParams = {},
  ) {
    return this.http.request<OeLmCarrierBffDeleteAttributeResponseDto, RpcStatusDto>({
      path: `/v1/couriers/schedules${confirm}`,
      method: "POST",
      query: query,
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CarrierBff
   * @name CarrierBffRefuseSchedule
   * @summary Перевести график в статус Невыход Подтвержден (НП)
   * @request POST:/v1/couriers/schedules:refuse
   */
  carrierBffRefuseSchedule(
    refuse: string,
    query: {
      /** @format int64 */
      scheduleId: string;
    },
    params: RequestParams = {},
  ) {
    return this.http.request<OeLmCarrierBffDeleteAttributeResponseDto, RpcStatusDto>({
      path: `/v1/couriers/schedules${refuse}`,
      method: "POST",
      query: query,
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CarrierBff
   * @name CarrierBffSyncWarehouseCouriers
   * @summary Синхронизация курьеров для указанного склада
   * @request POST:/v1/couriers/sync
   */
  carrierBffSyncWarehouseCouriers(
    query?: {
      /** @format int64 */
      warehouseClearingId?: string;
    },
    params: RequestParams = {},
  ) {
    return this.http.request<OeLmCarrierBffDeleteAttributeResponseDto, RpcStatusDto>({
      path: `/v1/couriers/sync`,
      method: "POST",
      query: query,
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CarrierBff
   * @name CarrierBffListCourierTypes
   * @summary Получить список типов курьеров
   * @request GET:/v1/couriers/types
   */
  carrierBffListCourierTypes(
    query?: {
      /** @format int64 */
      warehouseClearingId?: string;
    },
    params: RequestParams = {},
  ) {
    return this.http.request<OeLmCarrierBffListCourierTypesResponseDto, RpcStatusDto>({
      path: `/v1/couriers/types`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CarrierBff
   * @name CarrierBffCreateCourierType
   * @summary Создать тип курьера
   * @request POST:/v1/couriers/types
   */
  carrierBffCreateCourierType(body: OeLmCarrierBffCreateCourierTypeRequestDto, params: RequestParams = {}) {
    return this.http.request<OeLmCarrierBffCreateCourierTypeResponseDto, RpcStatusDto>({
      path: `/v1/couriers/types`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CarrierBff
   * @name CarrierBffBatchGetCourierTransportTypes
   * @summary Список типов транспорта
   * @request GET:/v1/couriers/types/transport:batchGet
   */
  carrierBffBatchGetCourierTransportTypes(batchGet: string, params: RequestParams = {}) {
    return this.http.request<OeLmCarrierBffBatchGetCourierTransportTypesResponseDto, RpcStatusDto>({
      path: `/v1/couriers/types/transport${batchGet}`,
      method: "GET",
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CarrierBff
   * @name CarrierBffDeleteCourierType
   * @summary Удалить тип курьера
   * @request DELETE:/v1/couriers/types/{id}
   */
  carrierBffDeleteCourierType(id: string, params: RequestParams = {}) {
    return this.http.request<OeLmCarrierBffDeleteAttributeResponseDto, RpcStatusDto>({
      path: `/v1/couriers/types/${id}`,
      method: "DELETE",
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CarrierBff
   * @name CarrierBffUpdateCourierInfo
   * @summary Обновляет данные курьера
   * @request PUT:/v1/couriers/{courierId}/info
   */
  carrierBffUpdateCourierInfo(
    courierId: string,
    courierInfo: OeLmCarrierBffUpdateCourierInfoRequestBodyDto,
    params: RequestParams = {},
  ) {
    return this.http.request<OeLmCarrierBffDeleteAttributeResponseDto, RpcStatusDto>({
      path: `/v1/couriers/${courierId}/info`,
      method: "PUT",
      body: courierInfo,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CarrierBff
   * @name CarrierBffSyncCourier
   * @summary Синхронизирует курьера из Курьерыча по переданному идентификатору
   * @request POST:/v1/couriers/{courierId}/sync
   */
  carrierBffSyncCourier(courierId: string, params: RequestParams = {}) {
    return this.http.request<OeLmCarrierBffDeleteAttributeResponseDto, RpcStatusDto>({
      path: `/v1/couriers/${courierId}/sync`,
      method: "POST",
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CarrierBff
   * @name CarrierBffAddCourierTag
   * @summary Присвоить тег курьеру
   * @request POST:/v1/couriers:addTag
   */
  carrierBffAddCourierTag(addTag: string, body: OeLmCarrierBffAddCourierTagRequestDto, params: RequestParams = {}) {
    return this.http.request<OeLmCarrierBffDeleteAttributeResponseDto, RpcStatusDto>({
      path: `/v1/couriers${addTag}`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CouriersLegalService
   * @name CouriersLegalServiceCreateCourierLegal
   * @request POST:/v1/couriers:create
   */
  couriersLegalServiceCreateCourierLegal(
    create: string,
    body: OeCourierLegalGatewayCreateCourierLegalRequestDto,
    params: RequestParams = {},
  ) {
    return this.http.request<OeCourierLegalGatewayCreateCourierLegalResponseDto, RpcStatusDto>({
      path: `/v1/couriers${create}`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CouriersLegalService
   * @name CouriersLegalServiceListAttributes
   * @summary Список атрибутов
   * @request GET:/v1/couriers:listAttributes
   */
  couriersLegalServiceListAttributes(listAttributes: string, params: RequestParams = {}) {
    return this.http.request<OeCourierLegalGatewayListAttributesResponseDto, RpcStatusDto>({
      path: `/v1/couriers${listAttributes}`,
      method: "GET",
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CouriersLegalService
   * @name CouriersLegalServiceListCitizenships
   * @summary Получение списка гражданств
   * @request GET:/v1/couriers:listCitizenships
   */
  couriersLegalServiceListCitizenships(listCitizenships: string, params: RequestParams = {}) {
    return this.http.request<OeCourierLegalGatewayListCitizenshipsResponseDto, RpcStatusDto>({
      path: `/v1/couriers${listCitizenships}`,
      method: "GET",
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CarrierBff
   * @name CarrierBffListCourierIdsWithProblemJobTitle
   * @request GET:/v1/couriers:listCourierIdsWithProblemJobTitle
   */
  carrierBffListCourierIdsWithProblemJobTitle(
    listCourierIdsWithProblemJobTitle: string,
    query?: {
      /** @format int64 */
      warehouseClearingId?: string;
    },
    params: RequestParams = {},
  ) {
    return this.http.request<OeLmCarrierBffListCourierIdsWithProblemJobTitleResponseDto, RpcStatusDto>({
      path: `/v1/couriers${listCourierIdsWithProblemJobTitle}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CouriersLegalService
   * @name CouriersLegalServiceListCourierTypes
   * @summary Получение типов курьеров
   * @request GET:/v1/couriers:listTypes
   */
  couriersLegalServiceListCourierTypes(listTypes: string, params: RequestParams = {}) {
    return this.http.request<OeCourierLegalGatewayListCourierTypesResponseDto, RpcStatusDto>({
      path: `/v1/couriers${listTypes}`,
      method: "GET",
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CarrierBff
   * @name CarrierBffListLaborRelations
   * @request GET:/v1/labor-relations
   */
  carrierBffListLaborRelations(params: RequestParams = {}) {
    return this.http.request<OeLmCarrierBffListLaborRelationsResponseDto, RpcStatusDto>({
      path: `/v1/labor-relations`,
      method: "GET",
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CarrierBff
   * @name CarrierBffListModels
   * @summary Вернуть список моделей авто
   * @request GET:/v1/models
   */
  carrierBffListModels(
    query?: {
      /** @format int64 */
      brandId?: string;
      nameParam?: string;
    },
    params: RequestParams = {},
  ) {
    return this.http.request<OeLmCarrierBffListModelsResponseDto, RpcStatusDto>({
      path: `/v1/models`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CarrierBff
   * @name CarrierBffCreateModel
   * @summary Создать модель авто
   * @request POST:/v1/models
   */
  carrierBffCreateModel(body: OeLmCarrierBffCreateModelRequestDto, params: RequestParams = {}) {
    return this.http.request<OeLmCarrierBffCreateModelResponseDto, RpcStatusDto>({
      path: `/v1/models`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CarrierBff
   * @name CarrierBffGetModel
   * @summary Получить модель авто
   * @request GET:/v1/models/{id}
   */
  carrierBffGetModel(id: string, params: RequestParams = {}) {
    return this.http.request<OeLmCarrierBffGetModelResponseDto, RpcStatusDto>({
      path: `/v1/models/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CarrierBff
   * @name CarrierBffDeleteModel
   * @summary Удалить модель авто
   * @request DELETE:/v1/models/{id}
   */
  carrierBffDeleteModel(id: string, params: RequestParams = {}) {
    return this.http.request<OeLmCarrierBffDeleteModelResponseDto, RpcStatusDto>({
      path: `/v1/models/${id}`,
      method: "DELETE",
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CarrierBff
   * @name CarrierBffUpdateModel
   * @summary Обновляет модель ТС по идентификатору
   * @request PATCH:/v1/models/{id}
   */
  carrierBffUpdateModel(id: string, updateModel: OeLmCarrierBffModelDto, params: RequestParams = {}) {
    return this.http.request<OeLmCarrierBffDeleteAttributeResponseDto, RpcStatusDto>({
      path: `/v1/models/${id}`,
      method: "PATCH",
      body: updateModel,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CouriersLegalService
   * @name CouriersLegalServiceListCouierOrganisations
   * @summary Получение заказчиков
   * @request GET:/v1/organisations
   */
  couriersLegalServiceListCouierOrganisations(params: RequestParams = {}) {
    return this.http.request<OeCourierLegalGatewayListCouierOrganisationsResponseDto, RpcStatusDto>({
      path: `/v1/organisations`,
      method: "GET",
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CouriersLegalService
   * @name CouriersLegalServiceListPartners
   * @summary Получение партнеров
   * @request GET:/v1/partners
   */
  couriersLegalServiceListPartners(
    query?: {
      /** @format uint64 */
      limit?: string;
      /** @format uint64 */
      offset?: string;
      spilledOnly?: boolean;
      nameSimilar?: string;
    },
    params: RequestParams = {},
  ) {
    return this.http.request<OeCourierLegalGatewayListPartnersResponseDto, RpcStatusDto>({
      path: `/v1/partners`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CarrierBff
   * @name CarrierBffGetWarehouseSettingProhibition
   * @summary Получить ограничение по складу
   * @request GET:/v1/settings/warehouse/{warehouseId}
   */
  carrierBffGetWarehouseSettingProhibition(warehouseId: string, params: RequestParams = {}) {
    return this.http.request<OeLmCarrierBffGetWarehouseSettingProhibitionResponseDto, RpcStatusDto>({
      path: `/v1/settings/warehouse/${warehouseId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CarrierBff
   * @name CarrierBffSetWarehouseSettingProhibition
   * @summary Установить для склада ограничение X смен подряд
   * @request POST:/v1/settings/warehouse:setProhibition
   */
  carrierBffSetWarehouseSettingProhibition(
    setProhibition: string,
    body: OeLmCarrierBffSetWarehouseSettingProhibitionRequestDto,
    params: RequestParams = {},
  ) {
    return this.http.request<OeLmCarrierBffDeleteAttributeResponseDto, RpcStatusDto>({
      path: `/v1/settings/warehouse${setProhibition}`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags SupervisorsBFF
   * @name SupervisorsBffListSupervisors
   * @request GET:/v1/supervisors
   */
  supervisorsBffListSupervisors(
    query?: {
      /** @format uint64 */
      limit?: string;
      /** @format uint64 */
      offset?: string;
      warehouseIds?: string[];
      fioSimilar?: string;
      deletedOnly?: boolean;
    },
    params: RequestParams = {},
  ) {
    return this.http.request<SupervisorsBffListSupervisorsResponseDto, RpcStatusDto>({
      path: `/v1/supervisors`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags SupervisorsBFF
   * @name SupervisorsBffBatchGetSupervisors
   * @request GET:/v1/supervisors:batchGetSupervisors
   */
  supervisorsBffBatchGetSupervisors(
    batchGetSupervisors: string,
    query?: {
      supervisorsIds?: string[];
    },
    params: RequestParams = {},
  ) {
    return this.http.request<SupervisorsBffBatchGetSupervisorsResponseDto, RpcStatusDto>({
      path: `/v1/supervisors${batchGetSupervisors}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CarrierBff
   * @name CarrierBffListTags
   * @summary Получить список тегов
   * @request GET:/v1/tags
   */
  carrierBffListTags(
    query?: {
      /** @format int64 */
      page?: number;
      /** @format int64 */
      limit?: number;
      title?: string;
      /** @format int64 */
      warehouseClearingId?: string;
    },
    params: RequestParams = {},
  ) {
    return this.http.request<OeLmCarrierBffListTagsResponseDto, RpcStatusDto>({
      path: `/v1/tags`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CarrierBff
   * @name CarrierBffCreateTag
   * @summary Создать тег
   * @request POST:/v1/tags
   */
  carrierBffCreateTag(body: OeLmCarrierBffCreateTagRequestDto, params: RequestParams = {}) {
    return this.http.request<ApioeLmCarrierBffTagDto, RpcStatusDto>({
      path: `/v1/tags`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CarrierBff
   * @name CarrierBffGetTag
   * @summary Получить тег
   * @request GET:/v1/tags/{id}
   */
  carrierBffGetTag(id: string, params: RequestParams = {}) {
    return this.http.request<ApioeLmCarrierBffTagDto, RpcStatusDto>({
      path: `/v1/tags/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CarrierBff
   * @name CarrierBffUpdateTag
   * @summary Обновить тег
   * @request PUT:/v1/tags/{id}
   */
  carrierBffUpdateTag(
    id: string,
    body: {
      title: string;
      /** @format int64 */
      warehouseClearingId?: string;
    },
    params: RequestParams = {},
  ) {
    return this.http.request<OeLmCarrierBffDeleteAttributeResponseDto, RpcStatusDto>({
      path: `/v1/tags/${id}`,
      method: "PUT",
      body: body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CarrierBff
   * @name CarrierBffDeleteTag
   * @summary Удалить тег
   * @request DELETE:/v1/tags/{id}
   */
  carrierBffDeleteTag(id: string, params: RequestParams = {}) {
    return this.http.request<OeLmCarrierBffDeleteAttributeResponseDto, RpcStatusDto>({
      path: `/v1/tags/${id}`,
      method: "DELETE",
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CarrierBff
   * @name CarrierBffListJobTitleFamily
   * @request GET:/v1/title-families
   */
  carrierBffListJobTitleFamily(params: RequestParams = {}) {
    return this.http.request<OeLmCarrierBffListJobTitleFamilyResponseDto, RpcStatusDto>({
      path: `/v1/title-families`,
      method: "GET",
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CarrierBff
   * @name CarrierBffListFamilyLaborWarehouseCombinations
   * @request GET:/v1/title-family-labor-warehouses
   */
  carrierBffListFamilyLaborWarehouseCombinations(
    query?: {
      jobTitleIds?: string[];
      jobTitleFamilyIds?: string[];
      laborIds?: string[];
      warehouseClearingIds?: string[];
    },
    params: RequestParams = {},
  ) {
    return this.http.request<OeLmCarrierBffListFamilyLaborWarehouseCombinationsResponseDto, RpcStatusDto>({
      path: `/v1/title-family-labor-warehouses`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CarrierBff
   * @name CarrierBffSaveFamilyLaborWarehouseCombination
   * @request POST:/v1/title-family-labor-warehouses
   */
  carrierBffSaveFamilyLaborWarehouseCombination(
    query: {
      /** @format int64 */
      titleId: string;
      /** @format int64 */
      familyId: string;
      /** @format int64 */
      laborId: string;
      warehouseClearingIds?: string[];
    },
    params: RequestParams = {},
  ) {
    return this.http.request<OeLmCarrierBffSaveFamilyLaborWarehouseCombinationResponseDto, RpcStatusDto>({
      path: `/v1/title-family-labor-warehouses`,
      method: "POST",
      query: query,
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CarrierBff
   * @name CarrierBffListCourierJobTitles
   * @summary Возвращает список должностей
   * @request GET:/v1/titles
   */
  carrierBffListCourierJobTitles(params: RequestParams = {}) {
    return this.http.request<OeLmCarrierBffListCourierJobTitlesResponseDto, RpcStatusDto>({
      path: `/v1/titles`,
      method: "GET",
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CarrierBff
   * @name CarrierBffSyncJobTitles
   * @summary Синхронизировать должности
   * @request POST:/v1/titles/sync
   */
  carrierBffSyncJobTitles(params: RequestParams = {}) {
    return this.http.request<OeLmCarrierBffDeleteAttributeResponseDto, RpcStatusDto>({
      path: `/v1/titles/sync`,
      method: "POST",
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CarrierBff
   * @name CarrierBffListTransportClasses
   * @summary Получить список типов транспорта
   * @request GET:/v1/transport-class
   */
  carrierBffListTransportClasses(params: RequestParams = {}) {
    return this.http.request<OeLmCarrierBffListTransportClassesResponseDto, RpcStatusDto>({
      path: `/v1/transport-class`,
      method: "GET",
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CarrierBff
   * @name CarrierBffCreateTransportClass
   * @summary Создать тип транспорта
   * @request POST:/v1/transport-class
   */
  carrierBffCreateTransportClass(body: OeLmCarrierBffCreateTransportClassRequestDto, params: RequestParams = {}) {
    return this.http.request<OeLmCarrierBffCreateTransportClassResponseDto, RpcStatusDto>({
      path: `/v1/transport-class`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CarrierBff
   * @name CarrierBffGetTransportClass
   * @summary Получить тип транспорта
   * @request GET:/v1/transport-class/{id}
   */
  carrierBffGetTransportClass(id: string, params: RequestParams = {}) {
    return this.http.request<OeLmCarrierBffGetTransportClassResponseDto, RpcStatusDto>({
      path: `/v1/transport-class/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CarrierBff
   * @name CarrierBffDeleteTransportClass
   * @summary Удалить тип транспорта
   * @request DELETE:/v1/transport-class/{id}
   */
  carrierBffDeleteTransportClass(id: string, params: RequestParams = {}) {
    return this.http.request<OeLmCarrierBffDeleteTransportClassResponseDto, RpcStatusDto>({
      path: `/v1/transport-class/${id}`,
      method: "DELETE",
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CarrierBff
   * @name CarrierBffListVehicles
   * @summary Вернуть список авто
   * @request GET:/v1/vehicles
   */
  carrierBffListVehicles(
    query: {
      /** @format int64 */
      brandId?: string;
      /** @format int64 */
      transportClassId?: string;
      /** @format int64 */
      ownerType?: string;
      /** @format int64 */
      warehouseClearingId?: string;
      /** @format uint64 */
      limit: string;
      /** @format uint64 */
      offset: string;
    },
    params: RequestParams = {},
  ) {
    return this.http.request<OeLmCarrierBffListVehiclesResponseDto, RpcStatusDto>({
      path: `/v1/vehicles`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CarrierBff
   * @name CarrierBffCreateVehicle
   * @summary Создать авто
   * @request POST:/v1/vehicles
   */
  carrierBffCreateVehicle(body: OeLmCarrierBffCreateVehicleRequestDto, params: RequestParams = {}) {
    return this.http.request<OeLmCarrierBffCreateVehicleResponseDto, RpcStatusDto>({
      path: `/v1/vehicles`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CarrierBff
   * @name CarrierBffListVehiclesByNumber
   * @summary Поиск авто по гос. номеру
   * @request GET:/v1/vehicles/by-number
   */
  carrierBffListVehiclesByNumber(
    query: {
      numberPlate: string;
    },
    params: RequestParams = {},
  ) {
    return this.http.request<OeLmCarrierBffListVehiclesByNumberResponseDto, RpcStatusDto>({
      path: `/v1/vehicles/by-number`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CarrierBff
   * @name CarrierBffGetVehicle
   * @summary Получит авто
   * @request GET:/v1/vehicles/{id}
   */
  carrierBffGetVehicle(id: string, params: RequestParams = {}) {
    return this.http.request<OeLmCarrierBffGetVehicleResponseDto, RpcStatusDto>({
      path: `/v1/vehicles/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CarrierBff
   * @name CarrierBffUpdateVehicle
   * @summary Обновить авто
   * @request PUT:/v1/vehicles/{id}
   */
  carrierBffUpdateVehicle(
    id: string,
    body: {
      attributes?: OeLmCarrierBffUpdateVehicleRequestAttributeDto[];
      color: string;
      /** @format int64 */
      initMileage?: string;
      /** @format int64 */
      mileageMaintenanceLimit?: string;
      /** @format int64 */
      modelId: string;
      numberPlate: string;
      ownerName: string;
      ownerType: OeLmCarrierBffVehicleOwnerTypeDto;
      vin: string;
      /** @format int64 */
      warehouseClearingId: string;
    },
    params: RequestParams = {},
  ) {
    return this.http.request<OeLmCarrierBffUpdateVehicleResponseDto, RpcStatusDto>({
      path: `/v1/vehicles/${id}`,
      method: "PUT",
      body: body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CarrierBff
   * @name CarrierBffDeleteVehicle
   * @summary Удалить авто
   * @request DELETE:/v1/vehicles/{id}
   */
  carrierBffDeleteVehicle(id: string, params: RequestParams = {}) {
    return this.http.request<OeLmCarrierBffDeleteVehicleResponseDto, RpcStatusDto>({
      path: `/v1/vehicles/${id}`,
      method: "DELETE",
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CarrierBff
   * @name CarrierBffUpdateVehicleMileage
   * @summary Обновить километраж авто
   * @request PUT:/v1/vehicles/{vehicleId}/mileage
   */
  carrierBffUpdateVehicleMileage(
    vehicleId: string,
    body: {
      /** @format int64 */
      mileage: string;
    },
    params: RequestParams = {},
  ) {
    return this.http.request<OeLmCarrierBffUpdateVehicleMileageResponseDto, RpcStatusDto>({
      path: `/v1/vehicles/${vehicleId}/mileage`,
      method: "PUT",
      body: body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CarrierBff
   * @name CarrierBffBatchGetVehicles
   * @summary Получить авто по списку идентификаторов
   * @request GET:/v1/vehicles:batchGet
   */
  carrierBffBatchGetVehicles(
    batchGet: string,
    query: {
      ids: string[];
    },
    params: RequestParams = {},
  ) {
    return this.http.request<OeLmCarrierBffBatchGetVehiclesResponseDto, RpcStatusDto>({
      path: `/v1/vehicles${batchGet}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CarrierBff
   * @name CarrierBffListFreshWarehouses
   * @summary Возвращает список fresh-складов
   * @request GET:/v1/warehouses
   */
  carrierBffListFreshWarehouses(
    query: {
      /** @format int64 */
      page: number;
      /** @format int64 */
      limit: number;
    },
    params: RequestParams = {},
  ) {
    return this.http.request<OeLmCarrierBffListFreshWarehousesResponseDto, RpcStatusDto>({
      path: `/v1/warehouses`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CarrierBff
   * @name CarrierBffGetCourierTypesByWarehouseId
   * @summary Получить типы курьеров по идентификатору склада
   * @request GET:/v1/warehouses/{warehouseId}/couriers-types
   */
  carrierBffGetCourierTypesByWarehouseId(warehouseId: string, params: RequestParams = {}) {
    return this.http.request<OeLmCarrierBffGetCourierTypesByWarehouseIDResponseDto, RpcStatusDto>({
      path: `/v1/warehouses/${warehouseId}/couriers-types`,
      method: "GET",
      format: "json",
      ...params,
    });
  }

  /**
   * No description
   *
   * @tags CarrierBff
   * @name CarrierBffPlanCouriersSchedulesV3
   * @summary Создает новые или обновляет существующие графики курьеров
   * @request POST:/v3/couriers/schedules
   */
  carrierBffPlanCouriersSchedulesV3(body: OeLmCarrierBffPlanCouriersSchedulesRequestDto, params: RequestParams = {}) {
    return this.http.request<OeLmCarrierBffPlanCouriersSchedulesResponseV3Dto, RpcStatusDto>({
      path: `/v3/couriers/schedules`,
      method: "POST",
      body: body,
      format: "json",
      ...params,
    });
  }
}
