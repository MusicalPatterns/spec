import { isUndefined, objectSet } from '@musical-patterns/utilities'
import { DomSpecs, Specs } from '../types'
import { Validation, Validations } from './types'

const mergeValidations: (parameters: {
    updatedDisplayedSpecs: DomSpecs,
    updatedSubmittedSpecs: Specs,
    validations: Validations,
}) => Specs =
    ({ validations, updatedDisplayedSpecs, updatedSubmittedSpecs }: {
        updatedDisplayedSpecs: DomSpecs
        updatedSubmittedSpecs: Specs,
        validations: Validations,
    }): Specs => {
        if (!isUndefined(validations)) {
            Object.entries(validations)
                .forEach(([ validationSpecKey, validation ]: [ string, Validation ]) => {
                    if (isUndefined(validation)) {
                        objectSet(
                            updatedSubmittedSpecs,
                            validationSpecKey,
                            updatedDisplayedSpecs[ validationSpecKey ],
                        )
                    }
                })
        }

        return updatedSubmittedSpecs
    }

export {
    mergeValidations,
}
