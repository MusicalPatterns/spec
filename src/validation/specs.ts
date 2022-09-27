import { entries, isUndefined, Maybe, reduce } from '@musical-patterns/utilities'
import {
    Configuration,
    Configurations,
    Constraint,
    InputType,
    RangedConstraint,
    StringedConstraint,
} from '../configuration'
import { isArrayedDomSpecValue } from '../typeGuards'
import { DomSpecValue, Specs, SpecValue } from '../types'
import { validateArrayedSpec } from './arrayedSpecs'
import {
    mergeAnyValidationResultsFromFunctionOverAllSpecsOntoValidationsOfEachSpecBasedSolelyOnItsOwnConstraint,
    validationRequired,
} from './helpers'
import { validByRangedConstraint } from './rangedConstraints'
import { validByStringedConstraint } from './stringedConstraints'
import { ComputeValidations, ValidateSpecsParameters, Validation, Validations } from './types'

const isRequired: (constraint: Maybe<Constraint>) => boolean =
    (constraint: Maybe<Constraint>): boolean =>
        !!constraint && !!constraint.required

const validateUndefinedSpec: (constraint: Maybe<Constraint>) => Validation =
    (constraint: Maybe<Constraint>): Validation =>
        isRequired(constraint) ? 'this spec is required' : undefined

const validateSpec: (displayedSpecValue: DomSpecValue, configuration: Maybe<Configuration>) => Validation =
    (displayedSpecValue: DomSpecValue, configuration: Maybe<Configuration>): Validation => {
        if (!validationRequired(configuration)) {
            return undefined
        }

        const { constraint, inputType } = configuration

        if (isUndefined(displayedSpecValue)) {
            return validateUndefinedSpec(constraint)
        }

        if (isArrayedDomSpecValue(displayedSpecValue)) {
            return validateArrayedSpec(displayedSpecValue, configuration)
        }
        if (inputType === InputType.STRINGED) {
            return validByStringedConstraint(displayedSpecValue as string, constraint as Maybe<StringedConstraint>)
        }

        return validByRangedConstraint(displayedSpecValue, constraint as Maybe<RangedConstraint>)
    }

const validateSpecs: <SpecsType extends Specs = Specs>(parameters: {
    computeValidations: Maybe<ComputeValidations<SpecsType>>,
    configurations: Configurations<SpecsType>,
    displayedSpecs: SpecsType,
}) => Validations<SpecsType> =
    <SpecsType extends Specs = Specs>(
        {
            displayedSpecs,
            configurations,
            computeValidations,
        }: ValidateSpecsParameters<SpecsType>,
    ): Validations<SpecsType> => {
        const reevaluatedValidationsOfEachSpecAsItIsDisplayedAndBasedSolelyOnItsOwnConstraint: Validations<SpecsType> =
            reduce(
                entries<string, SpecValue>(displayedSpecs),
                (
                    accumulator: Validations<SpecsType>,
                    [ key, val ]: [ string, SpecValue ],
                    // @ts-ignore
                ): Validations<SpecsType> => ({
                    ...accumulator,
                    // @ts-ignore
                    [ key ]: validateSpec(val, configurations[ key ]),
                }),
                {},
            )

        let reevaluatedValidationsFromFunctionOverAllSpecsAsTheyAreDisplayed: Validations<SpecsType>
        if (computeValidations) {
            const displayedSpecsTreatedAsRealSpecsForTheBenefitOfTheComputeValidationsFunctionOfThePattern: SpecsType =
                displayedSpecs as unknown as SpecsType
            reevaluatedValidationsFromFunctionOverAllSpecsAsTheyAreDisplayed = computeValidations(
                displayedSpecsTreatedAsRealSpecsForTheBenefitOfTheComputeValidationsFunctionOfThePattern,
            )
        }

        return mergeAnyValidationResultsFromFunctionOverAllSpecsOntoValidationsOfEachSpecBasedSolelyOnItsOwnConstraint(
            reevaluatedValidationsOfEachSpecAsItIsDisplayedAndBasedSolelyOnItsOwnConstraint,
            reevaluatedValidationsFromFunctionOverAllSpecsAsTheyAreDisplayed,
        )
    }

export {
    validateSpecs,
    validateSpec,
}
