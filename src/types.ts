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

type Specs = Partial<{
    [ StandardSpec.MS_PHYSICALIZATION ]: Duration,
    [ StandardSpec.MS_PHYSICALIZATION_TRANSLATION ]: Maybe<Translation<Duration>>,
    [ StandardSpec.HZ_PHYSICALIZATION ]: Tone,
    [ StandardSpec.HZ_PHYSICALIZATION_TRANSLATION ]: Maybe<Translation<Tone>>,
    [ StandardSpec.METERS_PHYSICALIZATION ]: Maybe<Location>,
    [ StandardSpec.METERS_PHYSICALIZATION_TRANSLATION ]: Array<Translation<Location>>,
}> & ObjectOf<Maybe<SpecValue>>

interface DomSpecs extends KeyMap<Specs, DomSpecValue>, ObjectOf<Maybe<DomSpecValue>> {}

interface Spec<SpecsType extends Specs = Specs> {
    computeValidations?: ComputeValidations<SpecsType>,
    configurations: Configurations<SpecsType>,
    initialSpecs: SpecsType,
    presets?: ObjectOf<Preset<SpecsType>>,
    restartOnModify?: boolean,
}

export {
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
