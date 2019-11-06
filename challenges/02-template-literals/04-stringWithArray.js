//Complete the below function to output a string using template literals. The string should read: The second item in this array is _____.
//Make use of interpolation to include the 2nd item from the array input in place of ____. Ex.  The second item in the array is orange.

let newArray = ['Lions', 'Tigers', 'Bears']
const stringWithArray = (array) => {
    return `The second item in this array is ${array[1]}.`;
};

console.log (stringWithArray(newArray));








//Do not edit
module.exports = stringWithArray;