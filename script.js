// Question 1: Clean the room function: given an input of[1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20], 
// make a function that organizes these into individual array that is ordered.For example answer(ArrayFromAbove) 
// should return: [[1, 1, 1, 1], [2, 2, 2], 4, 5, 10, [20, 20], 391, 392, 591].Bonus: Make it so it organizes strings 
// differently from number types.i.e. [1, "2", "3", 2] should return [[1, 2], ["2", "3"]]

const array = [1, 2, 4, 591, 392, 2, 5, 10, 2, 1, 1, 1, 20];
const array2 = [1, 2, 4, 591, 392, 2];
const array = [10, 9, 1, 5];
const array = [1, 2, 4, 591, 392]

let done = false;

while (!done) {

    let counter = 1;
    let correctCounter = 0;

    for (i = 0; i < array.length; i++) {
        let temp = array[i];

        if (temp > array[i + 1]) {

            array[i] = array[i + 1];
            array[i + 1] = temp;
        }

        if (array[counter] < array[counter - 2]) {
            temp = array[counter];

            array[counter] = array[counter - 2];
            array[counter - 2] = temp;
        }

        if (temp < array[i - 1]) {
            array[i] = array[i - 1];
            array[i - 1] = temp;
        }
        counter++;

        if (array[i] <= array[i + 1]) {
            counter++;
        }

        if (correctCounter === array.length) {
            console.log('It is sorted')
        } else {
            console.log(`It's not done sorting`)
        }

    }

}



// arrange array in ascending order
let done = false;

while (!done) {

    let counter = 1;

    for (i = 0; i < array.length; i++) {
        let temp = array[i];

        if (temp > array[i + 1]) {

            array[i] = array[i + 1];
            array[i + 1] = temp;

        }

        if (temp < array[i - 1]) {

            array[i] = array[i - 1];
            array[i - 1] = temp;
        }

        if (array[i - 1] <= array[i]) {
            counter++;
        }

    }

    if (counter === array.length) {
        done = true;
    }

}


// group arrays by equal values
const array = [1, 1, 1, 2, 3, 4];


for (i = 0; i < array.length; i++) {
    let temp = i;
    let sliced = [];


    while (array[i] === array[temp + 1]) {

        let position = i;
        sliced = array.slice(position, temp + 2);

        if (array[temp + 1] != array[temp + 2]) {

            array.splice(i, sliced.length, sliced);
        }

        temp++;
    }


}

const answer = (array) => {
    
    
    // Organize array in smallest to largest value
    let done = false;

    while (!done) {

        let counter = 1;

        for (i = 0; i < array.length; i++) {
            let temp = array[i];

            if (temp > array[i + 1]) {

                array[i] = array[i + 1];
                array[i + 1] = temp;

            }

            if (temp < array[i - 1]) {

                array[i] = array[i - 1];
                array[i - 1] = temp;
            }

            if (array[i - 1] <= array[i]) {
                counter++;
            }

        }

        if (counter === array.length) {
            done = true;
        }

    }

    // create an array of arrays of the same numbers
    for (i = 0; i < array.length; i++) {
        let temp = i;
        let sliced = [];
    
    
        while (array[i] === array[temp + 1]) {
    
            let position = i;
            sliced = array.slice(position, temp + 2);
    
            if (array[temp + 1] != array[temp + 2]) {
    
                array.splice(i, sliced.length, sliced);
            }
    
            temp++;
        }
    }
    return array;
}

// Question 2: Write a javascript function that takes an array of numbers and a target number. 
// The function should find two different numbers in the array that, when added together, give the target number. 
// For example: answer([1,2,3], 4)should return [1,3]



// Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you 
// enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.
