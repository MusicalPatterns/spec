import { deepClone, isUndefined, Maybe } from '@musical-patterns/utilities'
import { isArrayedDomSpecValue, isArrayedSpecValue, isArrayedValidation } from './typeGuards'
import { ArrayedDomSpecValue, ArrayedSpecValue, DomSpecs, DomSpecValue, Specs, SpecValue } from './types'
import { ArrayedValidation, Validation, Validations } from './validation'

const computeArrayedDomSpecValue: (displayedSpecs: DomSpecs, specKey: string) => ArrayedDomSpecValue =
    (displayedSpecs: DomSpecs, specKey: string): ArrayedDomSpecValue => {
        const maybeDisplayedValue: Maybe<DomSpecValue> = deepClone(displayedSpecs[ specKey ])
        if (isUndefined(maybeDisplayedValue)) {
            throw new Error('displayed value was undefined')
        }

        if (!isArrayedDomSpecValue(maybeDisplayedValue)) {
            throw new Error(`displayed value was not arrayed: ${maybeDisplayedValue}`)
        }

        return maybeDisplayedValue
    }

const computeArrayedSpecValue: (submittedSpecs: Specs, specKey: string) => ArrayedSpecValue =
    (submittedSpecs: Specs, specKey: string): ArrayedSpecValue => {
        const maybeSubmittedValue: Maybe<SpecValue> = deepClone(submittedSpecs[ specKey ])
        if (isUndefined(maybeSubmittedValue)) {
            throw new Error('submitted value was undefined')
        }

        if (!isArrayedSpecValue(maybeSubmittedValue)) {
            throw new Error(`submitted value was not arrayed: ${String(maybeSubmittedValue)}`)
        }

        return maybeSubmittedValue
    }

const computeArrayedValidation: (validations: Validations, specKey: string) => ArrayedValidation =
    (validations: Validations, specKey: string): ArrayedValidation => {
        const validation: Validation = validations && validations[ specKey ]

        if (!isArrayedValidation(validation)) {
            throw new Error(`cannot treat a singular validation as arrayed: ${validation}`)
        }

        return validation
    }

export {
    computeArrayedSpecValue,
    computeArrayedDomSpecValue,
    computeArrayedValidation,
}
