//assign fizzBuzz30 an arrow function that does not take any inputs.  fizzBuzz30 should output an array of all the numbers from
//1 through 30 replacing numbers divisible by 3 with 'fizz', numbers divisible by 5 with 'buzz' and numbers divisible by 3 and 5 with
//'fizzbuzz'


const fizzBuzz30 = () =>  {
    let newArray = [];
    for (var i=1; i <= 30; i++){
        if (i % 15 == 0) newArray.push("fizzbuzz");
        else if (i % 3 == 0) newArray.push("fizz");
        else if (i % 5 == 0) newArray.push("buzz");
        else newArray.push(i);

    }
    return newArray;
}




//Do not edit
module.exports = fizzBuzz30;