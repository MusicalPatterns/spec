import { isArray, isUndefined } from '@musical-patterns/utilities'
import {
    ArrayedDomSpecValue,
    ArrayedSpecValue,
    DomSpecValue,
    SingularDomSpecValue,
    SingularSpecValue,
    SpecValue,
} from './types'
import { ArrayedValidation, SingularValidation, Validation } from './validation'

const isArrayedSpecValue: (specValue: SpecValue) => specValue is ArrayedSpecValue =
    // tslint:disable-next-line no-unnecessary-callback-wrapper
    (specValue: SpecValue): specValue is ArrayedSpecValue =>
        isArray(specValue)

const isArrayedDomSpecValue: (domSpecValue: DomSpecValue) => domSpecValue is ArrayedDomSpecValue =
    // tslint:disable-next-line no-unnecessary-callback-wrapper
    (domSpecValue: DomSpecValue): domSpecValue is ArrayedDomSpecValue =>
        isArray(domSpecValue)

const isArrayedValidation: (validation: Validation) => validation is ArrayedValidation =
    (validation: Validation): validation is ArrayedValidation =>
        isUndefined(validation) || isArray(validation)

const isSingularSpecValue: (specValue: SpecValue) => specValue is SingularSpecValue =
    (specValue: SpecValue): specValue is SingularSpecValue =>
        !isArrayedSpecValue(specValue)

const isSingularDomSpecValue: (domSpecValue: DomSpecValue) => domSpecValue is SingularDomSpecValue =
    (domSpecValue: DomSpecValue): domSpecValue is SingularDomSpecValue =>
        !isArrayedDomSpecValue(domSpecValue)

const isSingularValidation: (validation: Validation) => validation is SingularValidation =
    (validation: Validation): validation is SingularValidation =>
        isUndefined(validation) || !isArrayedValidation(validation)

export {
    isArrayedSpecValue,
    isArrayedDomSpecValue,
    isArrayedValidation,
    isSingularDomSpecValue,
    isSingularSpecValue,
    isSingularValidation,
}
