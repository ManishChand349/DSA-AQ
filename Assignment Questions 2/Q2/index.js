let distributeCandies = function(candyType) {
    const uniqueTypes = new Set(candyType);
    const maxTypes = candyType.length / 2;

    return Math.min(uniqueTypes.size, maxTypes);
};

const candyType = [1, 1, 2, 2, 3, 3];
const result = distributeCandies(candyType);

console.log(result); 