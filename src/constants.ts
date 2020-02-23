// tslint:disable no-magic-numbers

import { as, Duration, Location, Maybe, musicalAs, Tone, Translation } from '@musical-patterns/utilities'

const STANDARD_MS_PHYSICALIZATION: Duration = musicalAs.Duration(700)
const STANDARD_MS_PHYSICALIZATION_TRANSLATION: Maybe<Translation<Duration>> = undefined

const STANDARD_HZ_PHYSICALIZATION: Tone = musicalAs.Tone(700)
const STANDARD_HZ_PHYSICALIZATION_TRANSLATION: Maybe<Translation<Tone>> = undefined

const STANDARD_METERS_PHYSICALIZATION: Maybe<Location> = undefined
const STANDARD_METERS_PHYSICALIZATION_TRANSLATION: Array<Translation<Location>> =
    [ 0, 0, 0 ].map((dimension: number): Translation<Location> => as.Translation<Location>(dimension))

export {
    STANDARD_MS_PHYSICALIZATION,
    STANDARD_MS_PHYSICALIZATION_TRANSLATION,
    STANDARD_HZ_PHYSICALIZATION,
    STANDARD_HZ_PHYSICALIZATION_TRANSLATION,
    STANDARD_METERS_PHYSICALIZATION,
    STANDARD_METERS_PHYSICALIZATION_TRANSLATION,
}
