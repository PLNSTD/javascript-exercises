const removeFromArray = function(arrayToUse, ...elementsToRemove) {
    const newArray = [];
    arrayToUse.forEach(element => {
        if (!elementsToRemove.includes(element))
            newArray.push(element);
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
