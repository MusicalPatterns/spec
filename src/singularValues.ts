// tslint:disable cyclomatic-complexity

import { apply, from, Index, indexOfFinalElement, isUndefined, Maybe } from '@musical-patterns/utilities'
import {
    isArrayedDomSpecValue,
    isArrayedSpecValue,
    isArrayedValidation,
    isSingularDomSpecValue,
    isSingularSpecValue,
    isSingularValidation,
} from './typeGuards'
import { DomSpecValue, SingularDomSpecValue, SingularSpecValue, SpecValue } from './types'
import { SingularValidation, Validation } from './validation'

const computeSingularSubmittedValue: (computeSingularSubmittedValueParameters: {
    fieldIndex?: Index,
    specValue: SpecValue,
}) => SingularSpecValue =
    ({ specValue, fieldIndex }: { fieldIndex?: Index, specValue: SpecValue }): SingularSpecValue =>
        !isUndefined(fieldIndex) && isArrayedSpecValue(specValue) ?
            fieldIndex > indexOfFinalElement(specValue) ?
                undefined :
                apply.Index(specValue, fieldIndex) :
            isSingularSpecValue(specValue) ?
                specValue :
                undefined

const computeSingularDisplayedValue: (computeSingularDisplayedValueParameters: {
    domSpecValue: DomSpecValue,
    fieldIndex?: Index,
}) => SingularDomSpecValue =
    ({ domSpecValue, fieldIndex }: { domSpecValue: DomSpecValue, fieldIndex?: Index }): SingularDomSpecValue =>
        !isUndefined(fieldIndex) && isArrayedDomSpecValue(domSpecValue) ?
            fieldIndex > indexOfFinalElement(domSpecValue) ?
                undefined :
                apply.Index(domSpecValue, fieldIndex) :
            isSingularDomSpecValue(domSpecValue) ?
                domSpecValue :
                undefined

const computeSingularValidation: (computeSingularValidationParameters: {
    fieldIndex?: Index,
    validation: Validation,
}) => SingularValidation =
    ({ validation, fieldIndex }: { fieldIndex?: Index, validation: Validation }): SingularValidation =>
        !isUndefined(fieldIndex) && isArrayedValidation(validation) ?
            isUndefined(validation) ||
            from.Index(fieldIndex) > from.Index<Maybe<string>>(indexOfFinalElement(validation)) ?
                undefined :
                apply.Index(validation, fieldIndex as unknown as Index<SingularValidation>) :
            isSingularValidation(validation) ?
                validation :
                undefined

export {
    computeSingularValidation,
    computeSingularDisplayedValue,
    computeSingularSubmittedValue,
}
