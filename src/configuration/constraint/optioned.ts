import { ARBITRARILY_LARGE_NUMBER, isUndefined, keys, map, negative, ObjectOf } from '@musical-patterns/utilities'
import { OptionedConstraint, OptionedConstraintOption } from '../types'

const computeBasicOptionedConstraintFromEnum: (enumerator: unknown) => OptionedConstraint =
    (enumerator: unknown): OptionedConstraint =>
        map(keys(enumerator as ObjectOf<string>), (key: string): OptionedConstraintOption => ({
            value: key,
        }))

const sortOptions: (option: OptionedConstraintOption, nextOption: OptionedConstraintOption) => number =
    (option: OptionedConstraintOption, nextOption: OptionedConstraintOption): number => {
        const order: number = isUndefined(option.order) ? ARBITRARILY_LARGE_NUMBER : option.order
        const nextOrder: number = isUndefined(nextOption.order) ?
            ARBITRARILY_LARGE_NUMBER :
            nextOption.order

        return order < nextOrder ? negative(1) : 1
    }

export {
    computeBasicOptionedConstraintFromEnum,
    sortOptions,
}
