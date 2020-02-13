import { computeBasicOptionedConstraintFromEnum, OptionedConstraint } from '../../../../src/indexForTest'
import { ExampleEnum } from '../../../support'

describe('optioned constraints', () => {
    describe('compute basic optioned constraint from enum', () => {
        it('works', () => {
            const optionedContraint: OptionedConstraint = computeBasicOptionedConstraintFromEnum(ExampleEnum)

            expect(optionedContraint.required)
                .toBe(true)
            expect(optionedContraint[0])
                .toEqual({ value: ExampleEnum.OPTION_ONE })
            expect(optionedContraint[1])
                .toEqual({ value: ExampleEnum.OPTION_TWO })
            expect(optionedContraint[2])
                .toEqual({ value: ExampleEnum.OPTION_THREE })
        })

        it('works when not required', () => {
            const optionedContraint: OptionedConstraint = computeBasicOptionedConstraintFromEnum(ExampleEnum, { required: false })

            expect(optionedContraint[0])
                .toEqual({ value: undefined })
            expect(optionedContraint[1])
                .toEqual({ value: ExampleEnum.OPTION_ONE })
            expect(optionedContraint[2])
                .toEqual({ value: ExampleEnum.OPTION_TWO })
            expect(optionedContraint[3])
                .toEqual({ value: ExampleEnum.OPTION_THREE })
        })
    })
})
