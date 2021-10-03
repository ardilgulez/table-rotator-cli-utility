const { expect } = require("chai");

const { processList } = require("../src/list-processor");

describe("Array Processor", () => {
    it("Should process lists of square sizes", () => {
        expect(processList([1, 2, 3, 4, 5, 6, 7, 8, 9])).to.deep.equal([
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ]);
    });

    it("Should process lists of size 1", () => {
        expect(processList([1])).to.deep.equal([[1]]);
    });

    it("Should process lists of size 0", () => {
        expect(processList([])).to.deep.equal([]);
    });

    it("Should not process lists of non-square size", () => {
        expect(processList([1, 2])).to.be.false;
    });
});
