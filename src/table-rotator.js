const rotateTable = (items) => {
    if (items.length === 0) {
        return [];
    }
    if (items.length === 1 && typeof items[0] === "number") {
        return items;
    }
    if (items.length !== items[0].length) {
        return false;
    }
    const midpoint = (items.length - 1) / 2;
    let startingPoint;
    if (Number.isInteger(midpoint)) {
        startingPoint = [midpoint, midpoint];
    } else {
        startingPoint = [Math.floor(midpoint), Math.ceil(midpoint)];
    }
    let newItems = items.map((item) => [...item]);

    while (startingPoint[1] < items.length) {
        for (let i = startingPoint[0]; i <= startingPoint[1]; i++) {
            if (i > startingPoint[0]) {
                newItems[startingPoint[0]][i] = items[startingPoint[0]][i - 1];
            }
            if (i + 1 <= startingPoint[1]) {
                newItems[i][startingPoint[0]] = items[i + 1][startingPoint[0]];
            }
            if (i + 1 <= startingPoint[1]) {
                newItems[startingPoint[1]][i] = items[startingPoint[1]][i + 1];
            }

            if (i > startingPoint[0]) {
                newItems[i][startingPoint[1]] = items[i - 1][startingPoint[1]];
            }
        }
        startingPoint[0] -= 1;
        startingPoint[1] += 1;
    }
    return newItems;
};

module.exports = {
    rotateTable,
};
