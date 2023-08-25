const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius", () => {
  describe("encoding a message", () => {
    it("should encode a message by converting text to numbers", () => {
      const message = "message";
      const actual = polybius(message);
      const expected = "23513434112251";

      expect(actual).to.equal(expected);
    });

    it("should maintain spaces", () => {
      const message = "my message";
      const actual = polybius(message);
      const expected = "2345 23513434112251";

      expect(actual).to.equal(expected);
    });

    it("should translate 'i' and 'j' to '42'", () => {
      const message = "jig";
      const actual = polybius(message);
      const expected = "424222";

      expect(actual).to.equal(expected);
    });

    it("should change capital letters to lowercase", () => {
      const message = "MESSAGE";
      const actual = polybius(message);
      const expected = "23513434112251";

      expect(actual).to.equal(expected);

    });

  });

  describe("decoding a message", () => {
    it("should decode a message by translating each pair of numbers into a letter", () => {
      const message = "23513434112251";
      const actual = polybius(message, false);
      const expected = "message";

      expect(actual).to.equal(expected);
    });

    it("should return false if the total length of numbers is odd", () => {
      const message = "235134341122516";
      const actual = polybius(message, false);

      expect(actual).to.be.false;

    });

    it("should translate '42' to 'i' and 'j'", () => {
      const message = "424222";
      const actual = polybius(message, false);
      
      expect(actual).to.include("i");
      expect(actual).to.include("j");
    });

    it("should maintain spaces", () => {
      const message = "2345 23513434112251";
      const actual = polybius(message, false);
      const expected = "my message";

      expect(actual).to.equal(expected);
    });

  });

});