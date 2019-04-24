import {
    Duration,
    HtmlValueOrChecked,
    Hz,
    KeyMap,
    Maybe,
    Meters,
    NominalNumber,
    ObjectOf,
    Point,
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
    BASIS_DURATION_TRANSLATION = 'baseDurationTranslation',
    BASIS_DURATION = 'baseDuration',
    BASIS_FREQUENCY_TRANSLATION = 'baseFrequencyTranslation',
    BASIS_FREQUENCY = 'baseFrequency',
    BASIS_POSITION = 'basePosition',
    BASIS_POSITION_SCALAR = 'basePositionScalar',
}

type StandardSpecs = Partial<{
    [ StandardSpec.BASIS_DURATION_TRANSLATION ]: Translation<Duration>,
    [ StandardSpec.BASIS_DURATION ]: Duration,
    [ StandardSpec.BASIS_FREQUENCY_TRANSLATION ]: Translation<Point<Hz>>,
    [ StandardSpec.BASIS_FREQUENCY ]: Point<Hz>,
    [ StandardSpec.BASIS_POSITION ]: Array<Point<Meters>>,
    [ StandardSpec.BASIS_POSITION_SCALAR ]: Scalar<Point<Meters>>,
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
