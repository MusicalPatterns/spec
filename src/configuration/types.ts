// tslint:disable max-file-line-count

import { Presentable } from '@musical-patterns/metadata'
import { HtmlValueOrChecked, KeyMap, Units } from '@musical-patterns/utilities'
import { Specs, StandardSpec, StandardSpecs } from '../types'

enum InputType {
    RANGED = 'RANGED',
    OPTIONED = 'OPTIONED',
    STRINGED = 'STRINGED',
    TOGGLED = 'TOGGLED',
}

enum RangedInputType {
    NUMBER = 'NUMBER',
    RANGE = 'RANGE',
}

interface RangedConstraint {
    excludeMax?: boolean,
    excludeMin?: boolean,
    integer?: boolean,
    max?: number,
    min?: number,
}

interface StringedConstraint {
    maxLength?: number,
    minLength?: number,
}

interface OptionedConstraintOption extends Presentable {
    value: string,
}

type OptionedConstraint = OptionedConstraintOption[]

type Constraint = RangedConstraint | OptionedConstraint | StringedConstraint

interface ArrayedConstraint {
    maxLength?: number,
    minLength?: number,
}

interface SharedConfiguration extends Presentable {
    arrayedConstraint?: ArrayedConstraint
    arrayedNewFieldInitialValue?: HtmlValueOrChecked,
    isArrayed?: boolean,
    units?: Units,
}

interface RangedConfiguration extends SharedConfiguration {
    constraint?: RangedConstraint,
    hideInput?: RangedInputType,
    inputType: InputType.RANGED,
}

interface OptionedConfiguration extends SharedConfiguration {
    constraint: OptionedConstraint,
    inputType: InputType.OPTIONED,
}

interface StringedConfiguration extends SharedConfiguration {
    constraint?: StringedConstraint,
    inputType: InputType.STRINGED,
}

interface ToggledConfiguration extends SharedConfiguration {
    constraint?: undefined,
    inputType: InputType.TOGGLED,
}

type Configuration =
    RangedConfiguration |
    OptionedConfiguration |
    StringedConfiguration |
    ToggledConfiguration

interface StandardConfigurations extends Configurations<StandardSpecs> {
    [ StandardSpec.BASE_DURATION_TRANSLATION ]: RangedConfiguration,
    [ StandardSpec.BASE_DURATION ]: RangedConfiguration,
    [ StandardSpec.BASE_FREQUENCY_TRANSLATION ]: RangedConfiguration,
    [ StandardSpec.BASE_FREQUENCY ]: RangedConfiguration,
    [ StandardSpec.BASE_POSITION ]: RangedConfiguration,
    [ StandardSpec.BASE_POSITION_SCALAR ]: RangedConfiguration,
}

type Configurations<SpecsType = Specs> = KeyMap<SpecsType, Configuration>

export {
    Configuration,
    OptionedConfiguration,
    RangedConfiguration,
    StringedConfiguration,
    ToggledConfiguration,
    RangedConstraint,
    OptionedConstraint,
    StringedConstraint,
    Constraint,
    InputType,
    StandardConfigurations,
    Configurations,
    OptionedConstraintOption,
    RangedInputType,
    ArrayedConstraint,
}
