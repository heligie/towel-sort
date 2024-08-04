
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix) {
        return matrix.reduce((acc, item, index) => {
            index % 2 !== 0 ? acc.push(...item.reverse()) : acc.push(...item);
            return acc;
        }, []);
    }
    return [];
}
