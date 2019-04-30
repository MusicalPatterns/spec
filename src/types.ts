import {
    Duration,
    HtmlValueOrChecked,
    KeyMap,
    Location,
    Maybe,
    NominalNumber,
    ObjectOf,
    Tone,
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
    MS_PHYSICALIZATION = 'msPhysicalization',
    MS_PHYSICALIZATION_TRANSLATION = 'msPhysicalizationTranslation',
    HZ_PHYSICALIZATION = 'hzPhysicalization',
    HZ_PHYSICALIZATION_TRANSLATION = 'hzPhysicalizationTranslation',
    METERS_PHYSICALIZATION = 'metersPhysicalization',
    METERS_PHYSICALIZATION_TRANSLATION = 'metersPhysicalizationTranslation',
}

type StandardSpecs = Partial<{
    [ StandardSpec.MS_PHYSICALIZATION ]: Duration,
    [ StandardSpec.MS_PHYSICALIZATION_TRANSLATION ]: Translation<Duration>,
    [ StandardSpec.HZ_PHYSICALIZATION ]: Tone,
    [ StandardSpec.HZ_PHYSICALIZATION_TRANSLATION ]: Translation<Tone>,
    [ StandardSpec.METERS_PHYSICALIZATION ]: Location,
    [ StandardSpec.METERS_PHYSICALIZATION_TRANSLATION ]: Array<Translation<Location>>,
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
