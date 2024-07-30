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
import type { DepartmentEnum } from './DepartmentEnum';
import {
    DepartmentEnumFromJSON,
    DepartmentEnumFromJSONTyped,
    DepartmentEnumToJSON,
} from './DepartmentEnum';

/**
 * 
 * @export
 * @interface PatchedEmployee
 */
export interface PatchedEmployee {
    /**
     * 
     * @type {number}
     * @memberof PatchedEmployee
     */
    readonly id?: number;
    /**
     * 
     * @type {number}
     * @memberof PatchedEmployee
     */
    readonly user?: number;
    /**
     * Your employee's name.
     * @type {string}
     * @memberof PatchedEmployee
     */
    name?: string;
    /**
     * 
     * @type {DepartmentEnum}
     * @memberof PatchedEmployee
     */
    department?: DepartmentEnum;
    /**
     * Your employee's annual salary.
     * @type {number}
     * @memberof PatchedEmployee
     */
    salary?: number;
    /**
     * 
     * @type {Date}
     * @memberof PatchedEmployee
     */
    readonly createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof PatchedEmployee
     */
    readonly updatedAt?: Date;
}

/**
 * Check if a given object implements the PatchedEmployee interface.
 */
export function instanceOfPatchedEmployee(value: object): boolean {
    return true;
}

export function PatchedEmployeeFromJSON(json: any): PatchedEmployee {
    return PatchedEmployeeFromJSONTyped(json, false);
}

export function PatchedEmployeeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedEmployee {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'user': json['user'] == null ? undefined : json['user'],
        'name': json['name'] == null ? undefined : json['name'],
        'department': json['department'] == null ? undefined : DepartmentEnumFromJSON(json['department']),
        'salary': json['salary'] == null ? undefined : json['salary'],
        'createdAt': json['created_at'] == null ? undefined : (new Date(json['created_at'])),
        'updatedAt': json['updated_at'] == null ? undefined : (new Date(json['updated_at'])),
    };
}

export function PatchedEmployeeToJSON(value?: Omit<PatchedEmployee, 'id'|'user'|'created_at'|'updated_at'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'department': DepartmentEnumToJSON(value['department']),
        'salary': value['salary'],
    };
}

