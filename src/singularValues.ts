// tslint:disable cyclomatic-complexity

import { apply, indexOfFinalElement, isUndefined, Ordinal } from '@musical-patterns/utilities'
import {
    isArrayedDomSpecValue,
    isArrayedSpecValue,
    isArrayedValidation, isSingularDomSpecValue,
    isSingularSpecValue,
    isSingularValidation,
} from './typeGuards'
import { DomSpecValue, SingularDomSpecValue, SingularSpecValue, SpecValue } from './types'
import { SingularValidation, Validation } from './validation'

const computeSingularSubmittedValue: (computeSingularSubmittedValueParameters: {
    fieldIndex?: Ordinal,
    specValue: SpecValue,
}) => SingularSpecValue =
    ({ specValue, fieldIndex }: { fieldIndex?: Ordinal, specValue: SpecValue }): SingularSpecValue =>
        !isUndefined(fieldIndex) && isArrayedSpecValue(specValue) ?
            fieldIndex > indexOfFinalElement(specValue) ?
                undefined :
                apply.Ordinal(specValue, fieldIndex) :
            isSingularSpecValue(specValue) ?
                specValue :
                undefined

const computeSingularDisplayedValue: (computeSingularDisplayedValueParameters: {
    domSpecValue: DomSpecValue,
    fieldIndex?: Ordinal,
}) => SingularDomSpecValue =
    ({ domSpecValue, fieldIndex }: { domSpecValue: DomSpecValue, fieldIndex?: Ordinal }): SingularDomSpecValue =>
        !isUndefined(fieldIndex) && isArrayedDomSpecValue(domSpecValue) ?
            fieldIndex > indexOfFinalElement(domSpecValue) ?
                undefined :
                apply.Ordinal(domSpecValue, fieldIndex) :
            isSingularDomSpecValue(domSpecValue) ?
                domSpecValue :
                undefined

const computeSingularValidation: (computeSingularValidationParameters: {
    fieldIndex?: Ordinal,
    validation: Validation,
}) => SingularValidation =
    ({ validation, fieldIndex }: { fieldIndex?: Ordinal, validation: Validation }): SingularValidation =>
        !isUndefined(fieldIndex) && isArrayedValidation(validation) ?
            isUndefined(validation) || fieldIndex > indexOfFinalElement(validation) ?
                undefined :
                apply.Ordinal(validation, fieldIndex) :
            isSingularValidation(validation) ?
                validation :
                undefined

export {
    computeSingularValidation,
    computeSingularDisplayedValue,
    computeSingularSubmittedValue,
}
