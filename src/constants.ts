// tslint:disable no-magic-numbers

import { as, Duration, musicalAs, NO_SHIFT, Pitch, Position, Translation } from '@musical-patterns/utilities'

const STANDARD_BASIS_DURATION: Duration = musicalAs.Duration(700)
const STANDARD_BASIS_DURATION_TRANSLATION: Translation<Duration> = NO_SHIFT

const STANDARD_BASIS_FREQUENCY: Pitch = musicalAs.Pitch(700)
const STANDARD_BASIS_FREQUENCY_TRANSLATION: Translation<Pitch> = NO_SHIFT

const STANDARD_BASIS_POSITION: Position = musicalAs.Position(1)
const STANDARD_BASIS_POSITION_TRANSLATION: Array<Translation<Position>> =
    [ 0, 0, 0 ].map((dimension: number) => as.Translation<Position>(dimension))

export {
    STANDARD_BASIS_DURATION,
    STANDARD_BASIS_DURATION_TRANSLATION,
    STANDARD_BASIS_FREQUENCY,
    STANDARD_BASIS_FREQUENCY_TRANSLATION,
    STANDARD_BASIS_POSITION,
    STANDARD_BASIS_POSITION_TRANSLATION,
}
