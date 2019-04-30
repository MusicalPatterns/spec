import {
    Duration,
    HtmlValueOrChecked,
    KeyMap,
    Maybe,
    NominalNumber,
    ObjectOf,
    Pitch,
    Position,
    Scalar,
    Translation,
} from '@musical-patterns/utilities'
import { Configurations } from './configuration'
import { Preset } from './preset'
import { ComputeValidations } from './validation'

type SingularSpecValue = HtmlValueOrChecked | NominalNumber
type ArrayedSpecValue = SingularSpecValue[]
type SpecValue = SingularSpecValue | ArrayedSpecValue

type SingularDomSpecValue = HtmlValueOrChecked
type ArrayedDomSpecValue = SingularDomSpecValue[]
type DomSpecValue = SingularDomSpecValue | ArrayedDomSpecValue

enum StandardSpec {
    BASIS_DURATION = 'basisDuration',
    BASIS_DURATION_TRANSLATION = 'basisDurationTranslation',
    BASIS_FREQUENCY = 'basisFrequency',
    BASIS_FREQUENCY_TRANSLATION = 'basisFrequencyTranslation',
    BASIS_POSITION = 'basisPosition',
    BASIS_POSITION_TRANSLATION = 'basisPositionTranslation',
}

type StandardSpecs = Partial<{
    [ StandardSpec.BASIS_DURATION ]: Duration,
    [ StandardSpec.BASIS_DURATION_TRANSLATION ]: Translation<Duration>,
    [ StandardSpec.BASIS_FREQUENCY ]: Pitch,
    [ StandardSpec.BASIS_FREQUENCY_TRANSLATION ]: Translation<Pitch>,
    [ StandardSpec.BASIS_POSITION ]: Position,
    [ StandardSpec.BASIS_POSITION_TRANSLATION ]: Array<Translation<Position>>,
}>

interface Specs extends StandardSpecs, ObjectOf<Maybe<SpecValue>> {}

interface DomSpecs extends KeyMap<StandardSpecs, DomSpecValue>, ObjectOf<Maybe<DomSpecValue>> {}

interface Spec<SpecsType = Specs> {
    computeValidations?: ComputeValidations<SpecsType>,
    configurations: Configurations<SpecsType>,
    initialSpecs: SpecsType,
    presets?: ObjectOf<Preset<SpecsType>>,
    restartOnModify?: boolean,
}

export {
    StandardSpecs,
    StandardSpec,
    Specs,
    Spec,
    SpecValue,
    SingularSpecValue,
    ArrayedSpecValue,
    DomSpecs,
    SingularDomSpecValue,
    ArrayedDomSpecValue,
    DomSpecValue,
}
