// tslint:disable cyclomatic-complexity

import { indexOfFinalElement, insteadOf, isUndefined, Ordinal, use } from '@musical-patterns/utilities'
import {
    isArrayedDomSpecValue,
    isArrayedSpecValue,
    isArrayedValidation,
    isSingularDomSpecValue,
    isSingularSpecValue,
    isSingularValidation,
} from './typeGuards'
import {
    ArrayedDomSpecValue,
    ArrayedSpecValue,
    DomSpecValue,
    SingularDomSpecValue,
    SingularSpecValue,
    SpecValue,
} from './types'
import { ArrayedValidation, SingularValidation, Validation } from './validation'

const computeSingularSubmittedValue: (computeSingularSubmittedValueParameters: {
    fieldIndex?: Ordinal,
    specValue: SpecValue,
}) => SingularSpecValue =
    ({ specValue, fieldIndex }: { fieldIndex?: Ordinal, specValue: SpecValue }): SingularSpecValue =>
        !isUndefined(fieldIndex) && isArrayedSpecValue(specValue) ?
            insteadOf<Ordinal, ArrayedSpecValue>(fieldIndex) >
            indexOfFinalElement<SingularSpecValue, SingularSpecValue[]>(specValue) ?
                undefined :
                use.Ordinal(specValue, insteadOf<Ordinal, ArrayedSpecValue>(fieldIndex)) :
            isSingularSpecValue(specValue) ?
                specValue :
                undefined

const computeSingularDisplayedValue: (computeSingularDisplayedValueParameters: {
    domSpecValue: DomSpecValue,
    fieldIndex?: Ordinal,
}) => SingularDomSpecValue =
    ({ domSpecValue, fieldIndex }: { domSpecValue: DomSpecValue, fieldIndex?: Ordinal }): SingularDomSpecValue =>
        !isUndefined(fieldIndex) && isArrayedDomSpecValue(domSpecValue) ?
            insteadOf<Ordinal, ArrayedDomSpecValue>(fieldIndex) >
            indexOfFinalElement<SingularDomSpecValue, SingularDomSpecValue[]>(domSpecValue) ?
                undefined :
                use.Ordinal(domSpecValue, insteadOf<Ordinal, ArrayedDomSpecValue>(fieldIndex)) :
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
            insteadOf<Ordinal, ArrayedValidation>(fieldIndex) >
            indexOfFinalElement<SingularValidation, SingularValidation[]>(validation) ?
                undefined :
                use.Ordinal(validation, insteadOf<Ordinal, SingularValidation[]>(fieldIndex)) :
            isSingularValidation(validation) ?
                validation :
                undefined

export {
    computeSingularValidation,
    computeSingularDisplayedValue,
    computeSingularSubmittedValue,
}
