// tslint:disable no-magic-numbers

import {
    as,
    Duration,
    Hz,
    Meters,
    Ms,
    NO_SHIFT,
    Point,
    Position,
    Scalar,
    Translation,
} from '@musical-patterns/utilities'

const STANDARD_BASIS_FREQUENCY: Point<Hz> = as.Point<Hz>(700)
const STANDARD_BASIS_DURATION: Duration = as.Translation<Point<Ms>>(700)
const STANDARD_BASIS_POSITION: Position[] =
    [ 0, 0, 0 ].map((dimension: number) => as.Point<Meters>(dimension))

const STANDARD_BASIS_POSITION_SCALAR: Scalar<Position> = as.Scalar<Position>(1)
const STANDARD_BASIS_DURATION_TRANSLATION: Translation<Duration> = NO_SHIFT
const STANDARD_BASIS_FREQUENCY_TRANSLATION: Translation<Point<Hz>> = NO_SHIFT

export {
    STANDARD_BASIS_POSITION,
    STANDARD_BASIS_POSITION_SCALAR,
    STANDARD_BASIS_DURATION,
    STANDARD_BASIS_FREQUENCY,
    STANDARD_BASIS_DURATION_TRANSLATION,
    STANDARD_BASIS_FREQUENCY_TRANSLATION,
}
