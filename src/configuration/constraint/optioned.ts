import { ARBITRARILY_LARGE_NUMBER, isUndefined, keys, map, negative, ObjectOf } from '@musical-patterns/utilities'
import { OptionedConstraint, OptionedConstraintOption } from '../types'

const computeBasicOptionedConstraintFromEnum:
    (enumerator: unknown, options?: { required?: boolean }) => OptionedConstraint =
    (enumerator: unknown, { required }: { required?: boolean } = { required: true }): OptionedConstraint => {
        const optionedConstraint: OptionedConstraint = map(
            keys(enumerator as ObjectOf<string>),
            (key: string): OptionedConstraintOption => ({
                value: key,
            }),
        )

        if (!required) {
            optionedConstraint.unshift({ value: undefined })
        }
        else {
            optionedConstraint.required = true
        }

        return optionedConstraint
    }

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
