import { Maybe } from '@musical-patterns/utilities'
import { Specs } from '../../src/indexForTest'

enum ExampleEnum {
    OPTION_ONE = 'OPTION_ONE',
    OPTION_TWO = 'OPTION_TWO',
    OPTION_THREE = 'OPTION_THREE',
}

interface MinimumTestableSpec extends Specs {
    justChangedSpec: number,
    otherSpec: number,
}

interface OptionalTestingSpec extends Specs {
    notRequiredSpec: Maybe<number>,
    requiredSpec: Maybe<number>,
}

export {
    MinimumTestableSpec,
    OptionalTestingSpec,
    ExampleEnum,
}
