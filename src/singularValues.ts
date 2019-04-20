// tslint:disable cyclomatic-complexity

import { indexOfFinalElement, insteadOf, isUndefined, Maybe, notAs, Ordinal, use } from '@musical-patterns/utilities'
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
    fieldIndex?: Ordinal,
    specValue: SpecValue,
}) => SingularSpecValue =
    ({ specValue, fieldIndex }: { fieldIndex?: Ordinal, specValue: SpecValue }): SingularSpecValue =>
        !isUndefined(fieldIndex) && isArrayedSpecValue(specValue) ?
            fieldIndex > indexOfFinalElement(specValue) ?
                undefined :
                use.Ordinal(specValue, fieldIndex) :
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
                use.Ordinal(domSpecValue, fieldIndex) :
            isSingularDomSpecValue(domSpecValue) ?
                domSpecValue :
                undefined

const computeSingularValidation: (computeSingularValidationParameters: {
    fieldIndex?: Ordinal,
    validation: Validation,
}) => SingularValidation =
    ({ validation, fieldIndex }: { fieldIndex?: Ordinal, validation: Validation }): SingularValidation =>
        !isUndefined(fieldIndex) && isArrayedValidation(validation) ?
            isUndefined(validation) ||
            notAs.Ordinal(fieldIndex) > notAs.Ordinal<Maybe<string>>(indexOfFinalElement(validation)) ?
                undefined :
                use.Ordinal(validation, insteadOf<Ordinal, SingularValidation>(fieldIndex)) :
            isSingularValidation(validation) ?
                validation :
                undefined

export {
    computeSingularValidation,
    computeSingularDisplayedValue,
    computeSingularSubmittedValue,
}
