import { standardConfigurations } from './configuration'
import {
    STANDARD_HZ_PHYSICALIZATION,
    STANDARD_HZ_PHYSICALIZATION_TRANSLATION,
    STANDARD_METERS_PHYSICALIZATION,
    STANDARD_METERS_PHYSICALIZATION_TRANSLATION,
    STANDARD_MS_PHYSICALIZATION,
    STANDARD_MS_PHYSICALIZATION_TRANSLATION,
} from './constants'
import { Spec, StandardSpec, StandardSpecs } from './types'

const standardInitialSpecs: StandardSpecs = {
    [ StandardSpec.MS_PHYSICALIZATION ]: STANDARD_MS_PHYSICALIZATION,
    [ StandardSpec.MS_PHYSICALIZATION_TRANSLATION ]: STANDARD_MS_PHYSICALIZATION_TRANSLATION,
    [ StandardSpec.HZ_PHYSICALIZATION ]: STANDARD_HZ_PHYSICALIZATION,
    [ StandardSpec.HZ_PHYSICALIZATION_TRANSLATION ]: STANDARD_HZ_PHYSICALIZATION_TRANSLATION,
    [ StandardSpec.METERS_PHYSICALIZATION ]: STANDARD_METERS_PHYSICALIZATION,
    [ StandardSpec.METERS_PHYSICALIZATION_TRANSLATION ]: STANDARD_METERS_PHYSICALIZATION_TRANSLATION,
}

const standardSpec: Spec<StandardSpecs> = {
    configurations: standardConfigurations,
    initialSpecs: standardInitialSpecs,
}

export {
    standardInitialSpecs,
    standardSpec,
}
