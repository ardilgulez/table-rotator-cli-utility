const { expect } = require("chai");
const { rotateTable } = require("../src/table-rotator");

describe("Table Rotator", () => {
    it("Should be able to parse an odd length square table", () => {
        const rotatedTable = rotateTable([
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ]);
        expect(rotatedTable).to.deep.equal([
            [4, 1, 2],
            [7, 5, 3],
            [8, 9, 6],
        ]);
    });

    it("Should be able to parse an even length square table", () => {
        const rotatedTable = rotateTable([
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16],
        ]);
        expect(rotatedTable).to.deep.equal([
            [5, 1, 2, 3],
            [9, 10, 6, 4],
            [13, 11, 7, 8],
            [14, 15, 16, 12],
        ]);
    });

    it("Should parse a 1-length table", () => {
        expect(rotateTable([1])).to.deep.equal([1]);
    });

    it("Should parse a 1-length square table", () => {
        expect(rotateTable([[1]])).to.deep.equal([[1]]);
    });

    it("Should parse a 0-length table", () => {
        expect(rotateTable([])).to.deep.equal([]);
    });

    it("Should not parse a non-square table", () => {
        expect(rotateTable([1, 2])).to.be.false;
    });

    it("Should not parse false", () => {
        expect(rotateTable(false)).to.be.false;
    });
});
