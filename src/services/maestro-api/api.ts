/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface Analysis
 */
export interface Analysis {
    /**
     * 
     * @type {string}
     * @memberof Analysis
     */
    'analysisId'?: string;
    /**
     * 
     * @type {AnalysisTypeId}
     * @memberof Analysis
     */
    'analysisType'?: AnalysisTypeId;
    /**
     * 
     * @type {string}
     * @memberof Analysis
     */
    'analysisState'?: string;
    /**
     * 
     * @type {string}
     * @memberof Analysis
     */
    'updatedAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof Analysis
     */
    'publishedAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof Analysis
     */
    'firstPublishedAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof Analysis
     */
    'studyId'?: string;
    /**
     * 
     * @type {Array<any>}
     * @memberof Analysis
     */
    'files'?: Array<any>;
    /**
     * 
     * @type {Array<Sample>}
     * @memberof Analysis
     */
    'samples'?: Array<Sample>;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof Analysis
     */
    'experiment'?: { [key: string]: object; };
}
/**
 * 
 * @export
 * @interface AnalysisTypeId
 */
export interface AnalysisTypeId {
    /**
     * 
     * @type {string}
     * @memberof AnalysisTypeId
     */
    'name'?: string;
    /**
     * 
     * @type {number}
     * @memberof AnalysisTypeId
     */
    'version'?: number;
}
/**
 * 
 * @export
 * @interface ConvertAnalysisCommand
 */
export interface ConvertAnalysisCommand {
    /**
     * 
     * @type {Array<Analysis>}
     * @memberof ConvertAnalysisCommand
     */
    'analyses'?: Array<Analysis>;
    /**
     * 
     * @type {string}
     * @memberof ConvertAnalysisCommand
     */
    'repoCode'?: string;
}
/**
 * 
 * @export
 * @interface Donor
 */
export interface Donor {
    /**
     * 
     * @type {string}
     * @memberof Donor
     */
    'donorId'?: string;
    /**
     * 
     * @type {string}
     * @memberof Donor
     */
    'submitterDonorId'?: string;
    /**
     * 
     * @type {string}
     * @memberof Donor
     */
    'studyId'?: string;
    /**
     * 
     * @type {string}
     * @memberof Donor
     */
    'gender'?: string;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof Donor
     */
    'info'?: { [key: string]: object; };
}
/**
 * 
 * @export
 * @interface ErrorDetails
 */
export interface ErrorDetails {
    /**
     * 
     * @type {string}
     * @memberof ErrorDetails
     */
    'timestamp'?: string;
    /**
     * 
     * @type {string}
     * @memberof ErrorDetails
     */
    'message'?: string;
    /**
     * 
     * @type {string}
     * @memberof ErrorDetails
     */
    'details'?: string;
}
/**
 * 
 * @export
 * @interface FailureData
 */
export interface FailureData {
    /**
     * 
     * @type {{ [key: string]: Set<string>; }}
     * @memberof FailureData
     */
    'failingIds'?: { [key: string]: Set<string>; };
}
/**
 * 
 * @export
 * @interface FileCentricAnalysis
 */
export interface FileCentricAnalysis {
    /**
     * 
     * @type {string}
     * @memberof FileCentricAnalysis
     */
    'analysisId'?: string;
    /**
     * 
     * @type {string}
     * @memberof FileCentricAnalysis
     */
    'analysisType'?: string;
    /**
     * 
     * @type {number}
     * @memberof FileCentricAnalysis
     */
    'analysisVersion'?: number;
    /**
     * 
     * @type {string}
     * @memberof FileCentricAnalysis
     */
    'analysisState'?: string;
    /**
     * 
     * @type {string}
     * @memberof FileCentricAnalysis
     */
    'updatedAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof FileCentricAnalysis
     */
    'firstPublishedAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof FileCentricAnalysis
     */
    'publishedAt'?: string;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof FileCentricAnalysis
     */
    'experiment'?: { [key: string]: object; };
}
/**
 * 
 * @export
 * @interface FileCentricDocument
 */
export interface FileCentricDocument {
    /**
     * 
     * @type {string}
     * @memberof FileCentricDocument
     */
    'objectId'?: string;
    /**
     * 
     * @type {string}
     * @memberof FileCentricDocument
     */
    'studyId'?: string;
    /**
     * 
     * @type {string}
     * @memberof FileCentricDocument
     */
    'dataType'?: string;
    /**
     * 
     * @type {string}
     * @memberof FileCentricDocument
     */
    'fileType'?: string;
    /**
     * 
     * @type {string}
     * @memberof FileCentricDocument
     */
    'fileAccess'?: string;
    /**
     * 
     * @type {FileCentricAnalysis}
     * @memberof FileCentricDocument
     */
    'analysis'?: FileCentricAnalysis;
    /**
     * 
     * @type {any}
     * @memberof FileCentricDocument
     */
    'file'?: any;
    /**
     * 
     * @type {Array<Repository>}
     * @memberof FileCentricDocument
     */
    'repositories'?: Array<Repository>;
    /**
     * 
     * @type {Array<Donor>}
     * @memberof FileCentricDocument
     */
    'donors'?: Array<Donor>;
}
/**
 * 
 * @export
 * @interface IndexResult
 */
export interface IndexResult {
    /**
     * 
     * @type {string}
     * @memberof IndexResult
     */
    'indexName'?: string;
    /**
     * 
     * @type {FailureData}
     * @memberof IndexResult
     */
    'failureData'?: FailureData;
    /**
     * 
     * @type {boolean}
     * @memberof IndexResult
     */
    'successful'?: boolean;
}
/**
 * 
 * @export
 * @interface ModelFile
 */
export interface ModelFile {
    /**
     * 
     * @type {string}
     * @memberof ModelFile
     */
    'objectId'?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelFile
     */
    'studyId'?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelFile
     */
    'analysisId'?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelFile
     */
    'fileName'?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelFile
     */
    'fileType'?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelFile
     */
    'fileMd5sum'?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelFile
     */
    'fileAccess'?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelFile
     */
    'dataType'?: string;
    /**
     * 
     * @type {number}
     * @memberof ModelFile
     */
    'fileSize'?: number;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof ModelFile
     */
    'info'?: { [key: string]: object; };
}
/**
 * 
 * @export
 * @interface Repository
 */
export interface Repository {
    /**
     * 
     * @type {string}
     * @memberof Repository
     */
    'code'?: string;
    /**
     * 
     * @type {string}
     * @memberof Repository
     */
    'organization'?: string;
    /**
     * 
     * @type {string}
     * @memberof Repository
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof Repository
     */
    'type'?: string;
    /**
     * 
     * @type {string}
     * @memberof Repository
     */
    'country'?: string;
    /**
     * 
     * @type {string}
     * @memberof Repository
     */
    'url'?: string;
}
/**
 * 
 * @export
 * @interface Sample
 */
export interface Sample {
    /**
     * 
     * @type {string}
     * @memberof Sample
     */
    'sampleId'?: string;
    /**
     * 
     * @type {string}
     * @memberof Sample
     */
    'specimenId'?: string;
    /**
     * 
     * @type {string}
     * @memberof Sample
     */
    'submitterSampleId'?: string;
    /**
     * 
     * @type {string}
     * @memberof Sample
     */
    'matchedNormalSubmitterSampleId'?: string;
    /**
     * 
     * @type {string}
     * @memberof Sample
     */
    'sampleType'?: string;
    /**
     * 
     * @type {Donor}
     * @memberof Sample
     */
    'donor'?: Donor;
    /**
     * 
     * @type {Specimen}
     * @memberof Sample
     */
    'specimen'?: Specimen;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof Sample
     */
    'info'?: { [key: string]: object; };
}
/**
 * 
 * @export
 * @interface Specimen
 */
export interface Specimen {
    /**
     * 
     * @type {string}
     * @memberof Specimen
     */
    'specimenId'?: string;
    /**
     * 
     * @type {string}
     * @memberof Specimen
     */
    'donorId'?: string;
    /**
     * 
     * @type {string}
     * @memberof Specimen
     */
    'submitterSpecimenId'?: string;
    /**
     * 
     * @type {string}
     * @memberof Specimen
     */
    'tumourNormalDesignation'?: string;
    /**
     * 
     * @type {string}
     * @memberof Specimen
     */
    'specimenTissueSource'?: string;
    /**
     * 
     * @type {string}
     * @memberof Specimen
     */
    'specimenType'?: string;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof Specimen
     */
    'info'?: { [key: string]: object; };
}

/**
 * ConversionApi - axios parameter creator
 * @export
 */
export const ConversionApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Converts the passed array of analyses to a map of analysis Id -> Array of files of that analysis
         * @summary Convert Analyses to file centric documents
         * @param {ConvertAnalysisCommand} convertAnalysisCommand 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        convertAnalyses: async (convertAnalysisCommand: ConvertAnalysisCommand, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'convertAnalysisCommand' is not null or undefined
            assertParamExists('convertAnalyses', 'convertAnalysisCommand', convertAnalysisCommand)
            const localVarPath = `/convert`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(convertAnalysisCommand, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ConversionApi - functional programming interface
 * @export
 */
export const ConversionApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ConversionApiAxiosParamCreator(configuration)
    return {
        /**
         * Converts the passed array of analyses to a map of analysis Id -> Array of files of that analysis
         * @summary Convert Analyses to file centric documents
         * @param {ConvertAnalysisCommand} convertAnalysisCommand 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async convertAnalyses(convertAnalysisCommand: ConvertAnalysisCommand, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<{ [key: string]: Array<FileCentricDocument>; }>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.convertAnalyses(convertAnalysisCommand, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ConversionApi - factory interface
 * @export
 */
export const ConversionApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ConversionApiFp(configuration)
    return {
        /**
         * Converts the passed array of analyses to a map of analysis Id -> Array of files of that analysis
         * @summary Convert Analyses to file centric documents
         * @param {ConvertAnalysisCommand} convertAnalysisCommand 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        convertAnalyses(convertAnalysisCommand: ConvertAnalysisCommand, options?: any): AxiosPromise<{ [key: string]: Array<FileCentricDocument>; }> {
            return localVarFp.convertAnalyses(convertAnalysisCommand, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ConversionApi - object-oriented interface
 * @export
 * @class ConversionApi
 * @extends {BaseAPI}
 */
export class ConversionApi extends BaseAPI {
    /**
     * Converts the passed array of analyses to a map of analysis Id -> Array of files of that analysis
     * @summary Convert Analyses to file centric documents
     * @param {ConvertAnalysisCommand} convertAnalysisCommand 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConversionApi
     */
    public convertAnalyses(convertAnalysisCommand: ConvertAnalysisCommand, options?: AxiosRequestConfig) {
        return ConversionApiFp(this.configuration).convertAnalyses(convertAnalysisCommand, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * IndexingApi - axios parameter creator
 * @export
 */
export const IndexingApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Indexes single analysis on demand 
         * @summary Index Single Analysis
         * @param {string} analysisId 
         * @param {string} studyId 
         * @param {string} repositoryCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        indexAnalysis: async (analysisId: string, studyId: string, repositoryCode: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'analysisId' is not null or undefined
            assertParamExists('indexAnalysis', 'analysisId', analysisId)
            // verify required parameter 'studyId' is not null or undefined
            assertParamExists('indexAnalysis', 'studyId', studyId)
            // verify required parameter 'repositoryCode' is not null or undefined
            assertParamExists('indexAnalysis', 'repositoryCode', repositoryCode)
            const localVarPath = `/index/repository/{repositoryCode}/study/{studyId}/analysis/{analysisId}`
                .replace(`{${"analysisId"}}`, encodeURIComponent(String(analysisId)))
                .replace(`{${"studyId"}}`, encodeURIComponent(String(studyId)))
                .replace(`{${"repositoryCode"}}`, encodeURIComponent(String(repositoryCode)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * IndexingApi - functional programming interface
 * @export
 */
export const IndexingApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = IndexingApiAxiosParamCreator(configuration)
    return {
        /**
         * Indexes single analysis on demand 
         * @summary Index Single Analysis
         * @param {string} analysisId 
         * @param {string} studyId 
         * @param {string} repositoryCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async indexAnalysis(analysisId: string, studyId: string, repositoryCode: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<IndexResult>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.indexAnalysis(analysisId, studyId, repositoryCode, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * IndexingApi - factory interface
 * @export
 */
export const IndexingApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = IndexingApiFp(configuration)
    return {
        /**
         * Indexes single analysis on demand 
         * @summary Index Single Analysis
         * @param {string} analysisId 
         * @param {string} studyId 
         * @param {string} repositoryCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        indexAnalysis(analysisId: string, studyId: string, repositoryCode: string, options?: any): AxiosPromise<Array<IndexResult>> {
            return localVarFp.indexAnalysis(analysisId, studyId, repositoryCode, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * IndexingApi - object-oriented interface
 * @export
 * @class IndexingApi
 * @extends {BaseAPI}
 */
export class IndexingApi extends BaseAPI {
    /**
     * Indexes single analysis on demand 
     * @summary Index Single Analysis
     * @param {string} analysisId 
     * @param {string} studyId 
     * @param {string} repositoryCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IndexingApi
     */
    public indexAnalysis(analysisId: string, studyId: string, repositoryCode: string, options?: AxiosRequestConfig) {
        return IndexingApiFp(this.configuration).indexAnalysis(analysisId, studyId, repositoryCode, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * ManagementControllerApi - axios parameter creator
 * @export
 */
export const ManagementControllerApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} repositoryCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        indexRepository: async (repositoryCode: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'repositoryCode' is not null or undefined
            assertParamExists('indexRepository', 'repositoryCode', repositoryCode)
            const localVarPath = `/index/repository/{repositoryCode}`
                .replace(`{${"repositoryCode"}}`, encodeURIComponent(String(repositoryCode)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} studyId 
         * @param {string} repositoryCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        indexStudy: async (studyId: string, repositoryCode: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'studyId' is not null or undefined
            assertParamExists('indexStudy', 'studyId', studyId)
            // verify required parameter 'repositoryCode' is not null or undefined
            assertParamExists('indexStudy', 'repositoryCode', repositoryCode)
            const localVarPath = `/index/repository/{repositoryCode}/study/{studyId}`
                .replace(`{${"studyId"}}`, encodeURIComponent(String(studyId)))
                .replace(`{${"repositoryCode"}}`, encodeURIComponent(String(repositoryCode)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} analysisId 
         * @param {string} studyId 
         * @param {string} repositoryCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeAnalysis: async (analysisId: string, studyId: string, repositoryCode: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'analysisId' is not null or undefined
            assertParamExists('removeAnalysis', 'analysisId', analysisId)
            // verify required parameter 'studyId' is not null or undefined
            assertParamExists('removeAnalysis', 'studyId', studyId)
            // verify required parameter 'repositoryCode' is not null or undefined
            assertParamExists('removeAnalysis', 'repositoryCode', repositoryCode)
            const localVarPath = `/index/repository/{repositoryCode}/study/{studyId}/analysis/{analysisId}`
                .replace(`{${"analysisId"}}`, encodeURIComponent(String(analysisId)))
                .replace(`{${"studyId"}}`, encodeURIComponent(String(studyId)))
                .replace(`{${"repositoryCode"}}`, encodeURIComponent(String(repositoryCode)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ManagementControllerApi - functional programming interface
 * @export
 */
export const ManagementControllerApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ManagementControllerApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} repositoryCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async indexRepository(repositoryCode: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<{ [key: string]: IndexResult; }>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.indexRepository(repositoryCode, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} studyId 
         * @param {string} repositoryCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async indexStudy(studyId: string, repositoryCode: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<IndexResult>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.indexStudy(studyId, repositoryCode, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} analysisId 
         * @param {string} studyId 
         * @param {string} repositoryCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async removeAnalysis(analysisId: string, studyId: string, repositoryCode: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<IndexResult>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.removeAnalysis(analysisId, studyId, repositoryCode, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ManagementControllerApi - factory interface
 * @export
 */
export const ManagementControllerApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ManagementControllerApiFp(configuration)
    return {
        /**
         * 
         * @param {string} repositoryCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        indexRepository(repositoryCode: string, options?: any): AxiosPromise<{ [key: string]: IndexResult; }> {
            return localVarFp.indexRepository(repositoryCode, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} studyId 
         * @param {string} repositoryCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        indexStudy(studyId: string, repositoryCode: string, options?: any): AxiosPromise<Array<IndexResult>> {
            return localVarFp.indexStudy(studyId, repositoryCode, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} analysisId 
         * @param {string} studyId 
         * @param {string} repositoryCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeAnalysis(analysisId: string, studyId: string, repositoryCode: string, options?: any): AxiosPromise<Array<IndexResult>> {
            return localVarFp.removeAnalysis(analysisId, studyId, repositoryCode, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ManagementControllerApi - object-oriented interface
 * @export
 * @class ManagementControllerApi
 * @extends {BaseAPI}
 */
export class ManagementControllerApi extends BaseAPI {
    /**
     * 
     * @param {string} repositoryCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ManagementControllerApi
     */
    public indexRepository(repositoryCode: string, options?: AxiosRequestConfig) {
        return ManagementControllerApiFp(this.configuration).indexRepository(repositoryCode, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} studyId 
     * @param {string} repositoryCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ManagementControllerApi
     */
    public indexStudy(studyId: string, repositoryCode: string, options?: AxiosRequestConfig) {
        return ManagementControllerApiFp(this.configuration).indexStudy(studyId, repositoryCode, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} analysisId 
     * @param {string} studyId 
     * @param {string} repositoryCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ManagementControllerApi
     */
    public removeAnalysis(analysisId: string, studyId: string, repositoryCode: string, options?: AxiosRequestConfig) {
        return ManagementControllerApiFp(this.configuration).removeAnalysis(analysisId, studyId, repositoryCode, options).then((request) => request(this.axios, this.basePath));
    }
}


