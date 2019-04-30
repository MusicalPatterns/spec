// tslint:disable no-magic-numbers

import { as, Duration, Location, musicalAs, NO_SHIFT, Tone, Translation } from '@musical-patterns/utilities'

const STANDARD_MS_PHYSICALIZATION: Duration = musicalAs.Duration(700)
const STANDARD_MS_PHYSICALIZATION_TRANSLATION: Translation<Duration> = NO_SHIFT

const STANDARD_HZ_PHYSICALIZATION: Tone = musicalAs.Tone(700)
const STANDARD_HZ_PHYSICALIZATION_TRANSLATION: Translation<Tone> = NO_SHIFT

const STANDARD_METERS_PHYSICALIZATION: Location = musicalAs.Location(1)
const STANDARD_METERS_PHYSICALIZATION_TRANSLATION: Array<Translation<Location>> =
    [ 0, 0, 0 ].map((dimension: number) => as.Translation<Location>(dimension))

export {
    STANDARD_MS_PHYSICALIZATION,
    STANDARD_MS_PHYSICALIZATION_TRANSLATION,
    STANDARD_HZ_PHYSICALIZATION,
    STANDARD_HZ_PHYSICALIZATION_TRANSLATION,
    STANDARD_METERS_PHYSICALIZATION,
    STANDARD_METERS_PHYSICALIZATION_TRANSLATION,
}
