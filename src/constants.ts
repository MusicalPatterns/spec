// tslint:disable no-magic-numbers

import { Hz, Meters, Ms, NO_TRANSLATION, of, Scalar, to, Translation } from '@musical-patterns/utilities'

const STANDARD_BASE_FREQUENCY: Scalar<Hz> = to.Scalar(of.Hz(700))
const STANDARD_BASE_DURATION: Scalar<Ms> = to.Scalar(of.Ms(700))
const STANDARD_BASE_POSITION: Array<Translation<Meters>> = [ NO_TRANSLATION, NO_TRANSLATION, NO_TRANSLATION ]

const STANDARD_BASE_POSITION_SCALAR: Scalar<Meters> = to.Scalar(of.Meters(1))
const STANDARD_BASE_DURATION_TRANSLATION: Translation<Ms> = NO_TRANSLATION
const STANDARD_BASE_FREQUENCY_TRANSLATION: Translation<Hz> = NO_TRANSLATION

export {
    STANDARD_BASE_POSITION,
    STANDARD_BASE_POSITION_SCALAR,
    STANDARD_BASE_DURATION,
    STANDARD_BASE_FREQUENCY,
    STANDARD_BASE_DURATION_TRANSLATION,
    STANDARD_BASE_FREQUENCY_TRANSLATION,
}