import { Units } from '@musical-patterns/utilities'
import { StandardSpec } from '../types'
import { InputType, RangedInputType, StandardConfigurations } from './types'

const standardConfigurations: StandardConfigurations = {
    [ StandardSpec.BASIS_DURATION_TRANSLATION ]: {
        description: 'translate each duration by this amount (does not preserve temporal ratios)',
        inputType: InputType.RANGED,
        units: Units.MILLISECONDS,
    },
    [ StandardSpec.BASIS_DURATION ]: {
        constraint: {
            excludeMin: true,
            min: 0,
        },
        inputType: InputType.RANGED,
        units: Units.MILLISECONDS,
    },
    [ StandardSpec.BASIS_FREQUENCY_TRANSLATION ]: {
        description: 'translate each pitch by this amount (does not preserve harmonic ratios)',
        inputType: InputType.RANGED,
        units: Units.HERTZ,
    },
    [ StandardSpec.BASIS_FREQUENCY ]: {
        constraint: {
            excludeMin: true,
            min: 0,
        },
        inputType: InputType.RANGED,
        units: Units.HERTZ,
    },
    [ StandardSpec.BASIS_POSITION ]: {
        description: 'where in your virtual space the pattern will be centered',
        hideInput: RangedInputType.RANGE,
        inputType: InputType.RANGED,
        isArrayed: true,
        order: 1,
        units: Units.METERS,
    },
    [ StandardSpec.BASIS_POSITION_SCALAR ]: {
        description: 'how far away the sounds will come from',
        inputType: InputType.RANGED,
        order: 2,
        units: Units.METERS,
    },
}

export {
    standardConfigurations,
}
