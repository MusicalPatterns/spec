// tslint:disable no-magic-numbers

import { as, Duration, musicalAs, NO_SHIFT, Pitch, Position, Scalar, Translation } from '@musical-patterns/utilities'

const STANDARD_BASIS_FREQUENCY: Pitch = musicalAs.Pitch(700)
const STANDARD_BASIS_DURATION: Duration = musicalAs.Duration(700)
const STANDARD_BASIS_POSITION: Position[] =
    [ 0, 0, 0 ].map((dimension: number) => musicalAs.Position(dimension))

const STANDARD_BASIS_POSITION_SCALAR: Scalar<Position> = as.Scalar<Position>(1)
const STANDARD_BASIS_DURATION_TRANSLATION: Translation<Duration> = NO_SHIFT
const STANDARD_BASIS_FREQUENCY_TRANSLATION: Translation<Pitch> = NO_SHIFT

export {
    STANDARD_BASIS_POSITION,
    STANDARD_BASIS_POSITION_SCALAR,
    STANDARD_BASIS_DURATION,
    STANDARD_BASIS_FREQUENCY,
    STANDARD_BASIS_DURATION_TRANSLATION,
    STANDARD_BASIS_FREQUENCY_TRANSLATION,
}
