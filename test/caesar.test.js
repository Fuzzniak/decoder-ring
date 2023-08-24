const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar()", () => {
  describe("error handling", () => {
    it("should return false if the shift amount is 0", () => {
      const message = "What in tarnation?!";
      const shift = 0;
      const actual = caesar(message, shift);
      
      expect(actual).to.be.false;
    });

    it("should return false if the shift amount is less than -25", () => {
      const message = "What in tarnation?!";
      const shift = -26;
      const actual = caesar(message, shift);
      
      expect(actual).to.be.false;
    });

    it("should return false if the shift amount is greater than 25", () => {
      const message = "What in tarnation?!";
      const shift = 26;
      const actual = caesar(message, shift);
      
      expect(actual).to.be.false; 
    });
  });

  describe("encoding a message", () => {
    it("should encode a message by shifting letters", () => {
      const message ="message";
      const shift = 1;
      const actual = caesar(message, shift);
      const expected = "nbttbhf";
      
      expect(actual).to.equal(expected);
    });

    it("should maintain spaces and other symbols throughout", () => {
      const message = "this message?!";
      const shift = 1;
      const actual = caesar(message, shift);
      const expected = "uijt nbttbhf?!";

      expect(actual).to.equal(expected);
    });

    it("should ignore capitol letters", () => {
      const message = "MESSAGE";
      const shift = 1;
      const actual = caesar(message, shift);
      const expected = "nbttbhf";

      expect(actual).to.equal(expected);
    });

    it("should wrap around the alphabet", () => {
      const message = "ziss izz zee message";
      const shift = 1;
      const actual =caesar(message, shift);
      const expected = "ajtt jaa aff nfttbhf";

      expect(actual).to.equal(expected);
    });

    it("should allow for a negative shift that will shift to the left", () => {
      const message = "message";
      const shift = -1;
      const actual = caesar(message, shift);
      const expected = "ldrrzfd";

      expect(actual).to.equal(expected);
    });
  });

  describe("decoding a message", () => {
    it("should decode a message by shiftin letters the opposite way", () => {
      const message = "nbttbhf";
      const shift = 1;
      const actual = caesar(message, shift);
      const expected = "message";
      
      expect(actual).to.equal(expected);
    });

    it("should maintain spaces and other symbols throughout", () => {
      const message = "uijt nbttbhf?!";
      const shift = 1;
      const actual = caesar(message, shift);
      const expected = "this message?!";
      
      expect(actual).to.equal(expected);
    });

    it("should ignore capitol letters", () => {
      const message = "NBTTBHF";
      const shift = 1;
      const actual = caesar(message, shift);
      const expected = "message";
      
      expect(actual).to.equal(expected);
    });

    it("should wrap around the alphabet", () => {
      const message = "ajtt jaa aff nfttbhf";
      const shift = 1;
      const actual =caesar(message, shift);
      const expected = "ziss izz zee message";

      expect(actual).to.equal(expected);
    });

    it("should allow for a negative shift that will shift to the left", () => {
      const message = "ldrrzfd";
      const shift = -1;
      const actual = caesar(message, shift);
      const expected = "message";

      expect(actual).to.equal(expected);
    });
  });
});