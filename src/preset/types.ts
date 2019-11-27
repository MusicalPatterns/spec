import { Presentable } from '@musical-patterns/metadata'
import { Specs } from '../types'

interface Preset<SpecsType extends Specs = Specs> extends Presentable {
    specs: SpecsType,
}

export {
    Preset,
}
