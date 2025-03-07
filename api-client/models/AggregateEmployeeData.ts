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
/**
 * 
 * @export
 * @interface AggregateEmployeeData
 */
export interface AggregateEmployeeData {
    /**
     * 
     * @type {any}
     * @memberof AggregateEmployeeData
     */
    totalCosts: any | null;
    /**
     * 
     * @type {any}
     * @memberof AggregateEmployeeData
     */
    averageSalaries: any | null;
    /**
     * 
     * @type {any}
     * @memberof AggregateEmployeeData
     */
    headcounts: any | null;
}

/**
 * Check if a given object implements the AggregateEmployeeData interface.
 */
export function instanceOfAggregateEmployeeData(value: object): boolean {
    if (!('totalCosts' in value)) return false;
    if (!('averageSalaries' in value)) return false;
    if (!('headcounts' in value)) return false;
    return true;
}

export function AggregateEmployeeDataFromJSON(json: any): AggregateEmployeeData {
    return AggregateEmployeeDataFromJSONTyped(json, false);
}

export function AggregateEmployeeDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AggregateEmployeeData {
    if (json == null) {
        return json;
    }
    return {
        
        'totalCosts': json['total_costs'],
        'averageSalaries': json['average_salaries'],
        'headcounts': json['headcounts'],
    };
}

export function AggregateEmployeeDataToJSON(value?: AggregateEmployeeData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'total_costs': value['totalCosts'],
        'average_salaries': value['averageSalaries'],
        'headcounts': value['headcounts'],
    };
}

