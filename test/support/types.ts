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

export {
    MinimumTestableSpec,
    ExampleEnum,
}
