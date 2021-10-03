const processList = (list) => {
    const dimensionSize = Math.sqrt(list.length);
    if (!Number.isInteger(dimensionSize)) {
        return false;
    }
    let processedList = [];
    for (let i = 0; i < dimensionSize; i++) {
        processedList.push([]);
        for (let j = 0; j < dimensionSize; j++) {
            processedList[i].push(list[i * dimensionSize + j]);
        }
    }
    return processedList;
};

module.exports = { processList };
