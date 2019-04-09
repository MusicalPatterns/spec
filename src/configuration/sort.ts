import { ARBITRARILY_LARGE_NUMBER, isUndefined, Maybe, negative } from '@musical-patterns/utilities'
import { Configurations } from './types'

const computeSortSpecs: (configurations: Configurations) => (specKey: string, nextSpecKey: string) => number =
    (configurations: Configurations): (specKey: string, nextSpecKey: string) => number =>
        (specKey: string, nextSpecKey: string): number => {
            const order: Maybe<number> = configurations[ specKey ].order
            const sortOrder: number = isUndefined(order) ? ARBITRARILY_LARGE_NUMBER : order

            const nextOrder: Maybe<number> = configurations[ nextSpecKey ].order
            const nextSortOrder: number = isUndefined(nextOrder) ? ARBITRARILY_LARGE_NUMBER : nextOrder

            return sortOrder < nextSortOrder ? negative(1) : 1
        }

export {
    computeSortSpecs,
}
