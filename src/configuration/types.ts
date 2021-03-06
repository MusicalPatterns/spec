// tslint:disable max-file-line-count

import { Presentable } from '@musical-patterns/metadata'
import { HtmlValueOrChecked, KeyMap, Units } from '@musical-patterns/utilities'
import { Specs, StandardSpec } from '../types'

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
    required?: boolean,
}

interface StringedConstraint {
    maxLength?: number,
    minLength?: number,
    required?: boolean,
}

interface OptionedConstraintOption extends Presentable {
    value?: string,
}

type OptionedConstraint = { required?: boolean } & OptionedConstraintOption[]

type Constraint = RangedConstraint | OptionedConstraint | StringedConstraint

interface ArrayedConstraint {
    maxLength?: number,
    minLength?: number,
    required?: boolean,
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

interface StandardConfigurations extends Configurations {
    [ StandardSpec.MS_PHYSICALIZATION ]: RangedConfiguration,
    [ StandardSpec.MS_PHYSICALIZATION_TRANSLATION ]: RangedConfiguration,
    [ StandardSpec.HZ_PHYSICALIZATION ]: RangedConfiguration,
    [ StandardSpec.HZ_PHYSICALIZATION_TRANSLATION ]: RangedConfiguration,
    [ StandardSpec.METERS_PHYSICALIZATION ]: RangedConfiguration,
    [ StandardSpec.METERS_PHYSICALIZATION_TRANSLATION ]: RangedConfiguration,
}

type Configurations<SpecsType extends Specs = Specs> = KeyMap<SpecsType, Configuration>

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
