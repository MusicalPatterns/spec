import { standardConfigurations } from './configuration'
import {
    STANDARD_BASIS_DURATION,
    STANDARD_BASIS_DURATION_TRANSLATION,
    STANDARD_BASIS_FREQUENCY,
    STANDARD_BASIS_FREQUENCY_TRANSLATION,
    STANDARD_BASIS_POSITION,
    STANDARD_BASIS_POSITION_SCALAR,
} from './constants'
import { Spec, StandardSpec, StandardSpecs } from './types'

const standardInitialSpecs: StandardSpecs = {
    [ StandardSpec.BASIS_DURATION_TRANSLATION ]: STANDARD_BASIS_DURATION_TRANSLATION,
    [ StandardSpec.BASIS_DURATION ]: STANDARD_BASIS_DURATION,
    [ StandardSpec.BASIS_FREQUENCY_TRANSLATION ]: STANDARD_BASIS_FREQUENCY_TRANSLATION,
    [ StandardSpec.BASIS_FREQUENCY ]: STANDARD_BASIS_FREQUENCY,
    [ StandardSpec.BASIS_POSITION ]: STANDARD_BASIS_POSITION,
    [ StandardSpec.BASIS_POSITION_SCALAR ]: STANDARD_BASIS_POSITION_SCALAR,
}

const standardSpec: Spec<StandardSpecs> = {
    configurations: standardConfigurations,
    initialSpecs: standardInitialSpecs,
}

export {
    standardInitialSpecs,
    standardSpec,
}
