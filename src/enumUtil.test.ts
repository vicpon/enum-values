import { EnumUtil } from "../../../src/utils/enum-util";
import { expect } from "chai";



describe("EnumUtil", () => {
  describe("numeric values", () => {
    enum NumericValuesTestEnum {
      A,
      B,
      C
    }

    it("getNames should return correct values", () => {
      expect(EnumUtil.GetNames(NumericValuesTestEnum)).to.deep.equal(["A", "B", "C"]);
      const enumUtil = new EnumUtil(NumericValuesTestEnum);
      expect(enumUtil.getNames()).to.deep.equal(["A", "B", "C"]);
    });

    it("getValues should return correct values", () => {
      expect(EnumUtil.GetValues<number>(NumericValuesTestEnum)).to.deep.equal([0, 1, 2]);
      const enumUtil = new EnumUtil(NumericValuesTestEnum);
      expect(enumUtil.getValues()).to.deep.equal([0, 1, 2]);
    });

    it("getNameFromValue should return the name for that value", () => {
      const expectedResult = "B";

      expect(EnumUtil.GetNameFromValue(NumericValuesTestEnum, 1)).equal(expectedResult);
      const enumUtil = new EnumUtil(NumericValuesTestEnum);
      expect(enumUtil.getNameFromValue(1)).equal(expectedResult);
    });

    it("getNameFromValue should return null", () => {
      expect(EnumUtil.GetNameFromValue(NumericValuesTestEnum, 11)).to.be.null;
      const enumUtil = new EnumUtil(NumericValuesTestEnum);
      expect(enumUtil.getNameFromValue(11)).to.be.null;
    });

    it("getNamesAndValues should return correct values", () => {
      const expectedResult = [
        { name: "A", value: 0 },
        { name: "B", value: 1 },
        { name: "C", value: 2 }
      ];

      expect(EnumUtil.GetNamesAndValues<number>(NumericValuesTestEnum)).to.deep.equal(expectedResult);
      const enumUtil = new EnumUtil(NumericValuesTestEnum);
      expect(enumUtil.getNamesAndValues()).to.deep.equal(expectedResult);
    });
  })

  describe("string values", () => {
    enum StringValuesTestEnum {
      A = "AValue",
      B = "BValue",
      C = "CValue"
    }

    it("getNames should return correct values", () => {
      expect(EnumUtil.GetNames(StringValuesTestEnum)).to.deep.equal(["A", "B", "C"]);
      const enumUtil = new EnumUtil(StringValuesTestEnum);
      expect(enumUtil.getNames()).to.deep.equal(["A", "B", "C"]);
    });

    it("getNameFromValue should return the name for that value", () => {
      const expectedResult = "B";

      expect(EnumUtil.GetNameFromValue(StringValuesTestEnum, "BValue")).equal(expectedResult);
      const enumUtil = new EnumUtil(StringValuesTestEnum);
      expect(enumUtil.getNameFromValue("BValue")).equal(expectedResult);
    });

    it("getNameFromValue should return null", () => {
      expect(EnumUtil.GetNameFromValue(StringValuesTestEnum, "BadValue")).to.be.null;
      const enumUtil = new EnumUtil(StringValuesTestEnum);
      expect(enumUtil.getNameFromValue("BadValue")).to.be.null;
    });

    it("getValues should return correct values", () => {
      expect(EnumUtil.GetValues<string>(StringValuesTestEnum)).to.deep.equal(["AValue", "BValue", "CValue"]);
      const enumUtil = new EnumUtil(StringValuesTestEnum);
      expect(enumUtil.getValues()).to.deep.equal(["AValue", "BValue", "CValue"]);
    });

    it("getNamesAndValues should return correct values", () => {
      const expectedResult = [
        { name: "A", value: "AValue" },
        { name: "B", value: "BValue" },
        { name: "C", value: "CValue" }
      ];

      expect(EnumUtil.GetNamesAndValues<string>(StringValuesTestEnum)).to.deep.equal(expectedResult);
      const enumUtil = new EnumUtil(StringValuesTestEnum);
      expect(enumUtil.getNamesAndValues()).to.deep.equal(expectedResult);
    });
  })

  describe("mixed values", () => {
    enum MixedEnum {
      A = "first",
      B = 2,
      c = "third"
    }

    it("getNames should return correct values", () => {
      expect(EnumUtil.GetNames(MixedEnum)).to.deep.equal(["A", "B", "c"]);
      const enumUtil = new EnumUtil(MixedEnum);
      expect(enumUtil.getNames()).to.deep.equal(["A", "B", "c"]);
    });

    it("getValues should return correct values", () => {
      expect(EnumUtil.GetValues(MixedEnum)).to.deep.equal(["first", 2, "third"]);
      const enumUtil = new EnumUtil(MixedEnum);
      expect(enumUtil.getValues()).to.deep.equal(["first", 2, "third"]);
    });

    it("getNamesAndValues should return correct values", () => {
      const expectedResult = [
        { name: "A", value: "first" },
        { name: "B", value: 2 },
        { name: "c", value: "third" }
      ];

      expect(EnumUtil.GetNamesAndValues(MixedEnum)).to.deep.equal(expectedResult);
      const enumUtil = new EnumUtil(MixedEnum);
      expect(enumUtil.getNamesAndValues()).to.deep.equal(expectedResult);
    });
  })
});
