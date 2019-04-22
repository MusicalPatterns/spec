// tslint:disable no-magic-numbers

import { as, Hz, Meters, Ms, NO_SHIFT, Scalar, Translation } from '@musical-patterns/utilities'

const STANDARD_BASE_FREQUENCY: Scalar<Hz> = as.Scalar<Hz>(700)
const STANDARD_BASE_DURATION: Scalar<Ms> = as.Scalar<Ms>(700)
const STANDARD_BASE_POSITION: Array<Translation<Meters>> = [ NO_SHIFT, NO_SHIFT, NO_SHIFT ]

const STANDARD_BASE_POSITION_SCALAR: Scalar<Meters> = as.Scalar<Meters>(1)
const STANDARD_BASE_DURATION_TRANSLATION: Translation<Ms> = NO_SHIFT
const STANDARD_BASE_FREQUENCY_TRANSLATION: Translation<Hz> = NO_SHIFT

export {
    STANDARD_BASE_POSITION,
    STANDARD_BASE_POSITION_SCALAR,
    STANDARD_BASE_DURATION,
    STANDARD_BASE_FREQUENCY,
    STANDARD_BASE_DURATION_TRANSLATION,
    STANDARD_BASE_FREQUENCY_TRANSLATION,
}
