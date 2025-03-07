/* tslint:disable */
/* eslint-disable */
/**
 * SIT4
 * This is to complete the SIT4 Intelligence Test.
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { Employee } from './Employee';
import {
    EmployeeFromJSON,
    EmployeeFromJSONTyped,
    EmployeeToJSON,
} from './Employee';

/**
 * 
 * @export
 * @interface PaginatedEmployeeList
 */
export interface PaginatedEmployeeList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedEmployeeList
     */
    count: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedEmployeeList
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginatedEmployeeList
     */
    previous?: string;
    /**
     * 
     * @type {Array<Employee>}
     * @memberof PaginatedEmployeeList
     */
    results: Array<Employee>;
}

/**
 * Check if a given object implements the PaginatedEmployeeList interface.
 */
export function instanceOfPaginatedEmployeeList(value: object): boolean {
    if (!('count' in value)) return false;
    if (!('results' in value)) return false;
    return true;
}

export function PaginatedEmployeeListFromJSON(json: any): PaginatedEmployeeList {
    return PaginatedEmployeeListFromJSONTyped(json, false);
}

export function PaginatedEmployeeListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedEmployeeList {
    if (json == null) {
        return json;
    }
    return {
        
        'count': json['count'],
        'next': json['next'] == null ? undefined : json['next'],
        'previous': json['previous'] == null ? undefined : json['previous'],
        'results': ((json['results'] as Array<any>).map(EmployeeFromJSON)),
    };
}

export function PaginatedEmployeeListToJSON(value?: PaginatedEmployeeList | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'count': value['count'],
        'next': value['next'],
        'previous': value['previous'],
        'results': ((value['results'] as Array<any>).map(EmployeeToJSON)),
    };
}

