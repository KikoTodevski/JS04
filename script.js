//Loops

//for loops
for(var i = 0; i <= 10; i++) {
    // console.log("The index is at number: " + i);
    console.log(`The index is at number: ${i}`);
}; 

for(var i = 0; i <= 100; i+=5) {
    // console.log("The index is at number: " + i);
    console.log(`The index is at number: ${i}`);
}; 

var movies = [
    {name: "Pulp Fiction", year: 1994},
    {name: "Mad Max", year: 1982},
    {name: "Double Indemnity", year: 1954}
];

for(var i = 0; i < movies.length; i++) {
    // console.log(movies[i]);
    // console.log(movies[i].name);
    if(movies[i].year === 1954) {
        console.log(movies[i]);
    };
};

//=============================================================
// var numbers = [15, 192, 14, 84, 883, 74, 92, 12, 74, 56];

// var result = 0;

// for(var i = 0; i < numbers.length; i++) {
//     result += numbers[i];
// };

// console.log(`The sum of the numbers array is ${result}`);

//=============================================================
var other_numbers = [
    [5, 10, 15, 20],
    [40, 50, 60, 70],
    [100, 200, 300, 400]
];

var result = 0;

for(var i = 0; i < other_numbers.length; i++) {
    // console.log(other_numbers[i]);
    for(var b = 0; b < other_numbers[i].length; b++) {
        // console.log(other_numbers[i][b]);
        result += other_numbers[i][b];
    }
};

console.log(result);
// console.log(other_numbers[0][3]);