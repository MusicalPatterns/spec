import { isUndefined, Maybe } from '@musical-patterns/utilities'
import { RangedConstraint } from '../configuration'
import { DomSpecValue } from '../types'
import { SingularValidation } from './types'

const validByMin: (numericValue: number, min: Maybe<number>, excludeMin: boolean) => SingularValidation =
    (numericValue: number, min: Maybe<number>, excludeMin: boolean): SingularValidation => {
        if (isUndefined(min)) {
            return undefined
        }

        if (excludeMin) {
            if (numericValue <= min) {
                return `must be greater than ${min}`
            }
        }
        else {
            if (numericValue < min) {
                return `must be greater than or equal to ${min}`
            }
        }

        return undefined
    }

const validByMax: (numericValue: number, max: Maybe<number>, excludeMax: boolean) => SingularValidation =
    (numericValue: number, max: Maybe<number>, excludeMax: boolean): SingularValidation => {
        if (isUndefined(max)) {
            return undefined
        }

        if (excludeMax) {
            if (numericValue >= max) {
                return `must be less than ${max}`
            }
        }
        else {
            if (numericValue > max) {
                return `must be less than or equal to ${max}`
            }
        }

        return undefined
    }

const validByStep: (numericValue: number, integer: Maybe<boolean>) => SingularValidation =
    (numericValue: number, integer: Maybe<boolean>): SingularValidation => {
        if (!integer) {
            return undefined
        }

        if (!Number.isInteger(numericValue)) {
            return `must be an integer`
        }

        return undefined
    }

const validByRangedConstraint:
    (displayedSpecValue: DomSpecValue, constraint: Maybe<RangedConstraint>) => SingularValidation =
    (displayedSpecValue: DomSpecValue, constraint: Maybe<RangedConstraint>): SingularValidation => {
        let numericValue: number
        try {
            numericValue = JSON.parse(displayedSpecValue as string)
        }
        catch (e) {
            return 'this input is formatted in a way which cannot be parsed'
        }

        if (isUndefined(constraint)) {
            return undefined
        }

        const { min, max, excludeMin = false, excludeMax = false, integer = false } = constraint

        return validByStep(numericValue, integer) ||
            validByMin(numericValue, min, excludeMin) ||
            validByMax(numericValue, max, excludeMax)
    }

export {
    validByRangedConstraint,
}
