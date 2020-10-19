// Shamelessly ripped from https://github.com/slavik57/enum-values and modified
export type EnumValueType = string | number;

export class EnumUtil<TEnum> {
  static memberCache: Map<string, string[] | number[]> = new Map<string, string[] | number[]>();

  static GetNamesAndValues<T extends EnumValueType>(e: any): { name: string, value: T }[] {
    return this.GetNames(e).map(_name => { return { name: _name, value: e[_name] as T }; });
  }

  /**
   * Non-cached version of instance method. Get a string list of the members of an enum.
   * @param e An enum instance.
   */
  static GetNames(e: Record<string, unknown>): string[] {
    return Object.keys(e).filter(key => isNaN(+key));  // filter out the enum reverse fields created for number-valued enums.
  }

  /**
   * Non-cached version of instance method. Get the member name of an enum member. For example, for getting "AndroidId" from ExternalIdentityTypeEnum.AndroidId.
   * @param e An enum instance.
   * @param value An enum member. Eg., ExternalIdentityTypeEnum.AndroidId
   */
  static GetNameFromValue<T extends EnumValueType>(e: any, value: T): string | null {
    const all = this.GetNamesAndValues(e).filter(pair => pair.value === value);
    return all.length == 1 ? all[0].name : null;
  }

  static GetValues<T extends EnumValueType>(e: any): T[] {
    return this.GetNames(e).map(name => e[name]) as T[];
  }

  enumType: TEnum;
  typeName: string;
  constructor(x: TEnum) {
    this.enumType = x;
    this.typeName = Object.keys(x).join("");
    EnumUtil.memberCache[this.typeName] = Object.keys(x).filter(key => isNaN(+key));  // filter out the enum reverse fields created for number-valued enums.
  }

  getNamesAndValues<T extends EnumValueType>(): { name: string; value: T }[] {
    return this.getNames().map(_name => { return { name: _name, value: this.enumType[_name] as T }; });
  }

  /**
   * Get a string list of the members of an enum.
   * @param e An enum instance.
   */
  getNames(): string[] {
    return EnumUtil.memberCache[this.typeName];
  }

  /**
   * Get the member name of an enum member. For example, for getting "AndroidId" from ExternalIdentityTypeEnum.AndroidId.
   * @param e An enum instance.
   * @param value An enum member. Eg., ExternalIdentityTypeEnum.AndroidId
   */
  getNameFromValue<T extends EnumValueType>(value: T): string | null {
    const all = this.getNamesAndValues().filter(pair => pair.value === value);
    return all.length == 1 ? all[0].name : null;
  }

  getValues<T extends EnumValueType>(): T[] {
    return this.getNames().map(name => this.enumType[name]) as T[];
  }
}

// Also re-export as ES-2015 default export
export default EnumUtil;
