import { computeBasicOptionedConstraintFromEnum, OptionedConstraint } from '../../../../src/indexForTest'
import { ExampleEnum } from '../../../support'

describe('optioned constraints', (): void => {
    describe('compute basic optioned constraint from enum', (): void => {
        it('works', (): void => {
            const optionedContraint: OptionedConstraint = computeBasicOptionedConstraintFromEnum(ExampleEnum, { required: true })

            expect(optionedContraint.required)
                .toBe(true)
            expect(optionedContraint[ 0 ])
                .toEqual({ value: ExampleEnum.OPTION_ONE })
            expect(optionedContraint[ 1 ])
                .toEqual({ value: ExampleEnum.OPTION_TWO })
            expect(optionedContraint[ 2 ])
                .toEqual({ value: ExampleEnum.OPTION_THREE })
        })

        it('works when not required', (): void => {
            const optionedContraint: OptionedConstraint = computeBasicOptionedConstraintFromEnum(ExampleEnum)

            expect(optionedContraint[ 0 ])
                .toEqual({ formattedName: '', value: undefined })
            expect(optionedContraint[ 1 ])
                .toEqual({ value: ExampleEnum.OPTION_ONE })
            expect(optionedContraint[ 2 ])
                .toEqual({ value: ExampleEnum.OPTION_TWO })
            expect(optionedContraint[ 3 ])
                .toEqual({ value: ExampleEnum.OPTION_THREE })
        })
    })
})
