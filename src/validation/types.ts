import { KeyMap, Maybe } from '@musical-patterns/utilities'
import { Configurations } from '../configuration'
import { Specs } from '../types'

type SingularValidation = Maybe<string>

type ArrayedValidation = Maybe<SingularValidation[]>

type Validation = SingularValidation | ArrayedValidation

type Validations<SpecsType = Specs> = Maybe<Partial<KeyMap<SpecsType, Validation>>>

type ComputeValidations<SpecsType = Specs> = (specs: SpecsType) => Validations<SpecsType>

interface ValidateSpecsParameters<SpecsType = Specs> {
    computeValidations: Maybe<ComputeValidations<SpecsType>>,
    configurations: Configurations<SpecsType>,
    displayedSpecs: SpecsType,
}

export {
    SingularValidation,
    ArrayedValidation,
    Validation,
    Validations,
    ComputeValidations,
    ValidateSpecsParameters,
}
