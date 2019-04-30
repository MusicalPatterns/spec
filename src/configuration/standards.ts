import { Units } from '@musical-patterns/utilities'
import { StandardSpec } from '../types'
import { InputType, RangedInputType, StandardConfigurations } from './types'

const standardConfigurations: StandardConfigurations = {
    [ StandardSpec.MS_PHYSICALIZATION ]: {
        constraint: {
            excludeMin: true,
            min: 0,
        },
        formattedName: 'basis duration',
        inputType: InputType.RANGED,
        units: Units.MILLISECONDS,
    },
    [ StandardSpec.MS_PHYSICALIZATION_TRANSLATION ]: {
        description: 'translate each duration by this amount (does not preserve temporal ratios)',
        formattedName: 'basis duration translation',
        inputType: InputType.RANGED,
        units: Units.MILLISECONDS,
    },
    [ StandardSpec.HZ_PHYSICALIZATION ]: {
        constraint: {
            excludeMin: true,
            min: 0,
        },
        formattedName: 'basis frequency',
        inputType: InputType.RANGED,
        units: Units.HERTZ,
    },
    [ StandardSpec.HZ_PHYSICALIZATION_TRANSLATION ]: {
        description: 'translate each pitch by this amount (does not preserve harmonic ratios)',
        formattedName: 'basis frequency translation',
        inputType: InputType.RANGED,
        units: Units.HERTZ,
    },
    [ StandardSpec.METERS_PHYSICALIZATION ]: {
        description: 'how wide apart the sounds will be placed',
        formattedName: 'basis size',
        hideInput: RangedInputType.RANGE,
        inputType: InputType.RANGED,
        isArrayed: true,
        order: 1,
        units: Units.METERS,
    },
    [ StandardSpec.METERS_PHYSICALIZATION_TRANSLATION]: {
        description: 'where the pattern will be spatially centered',
        formattedName: 'basis position',
        inputType: InputType.RANGED,
        order: 2,
        units: Units.METERS,
    },
}

export {
    standardConfigurations,
}
