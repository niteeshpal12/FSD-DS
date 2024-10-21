// let arr = [1, 2, 3, 4, 5, 6, 77];

// Example for mapping (e.g., multiplying by 2)
// let newary = arr.map((x) => x * 2);
// console.log(newary);

// let even = arr.filter(x => x % 2 == 0);
// console.log(even);

// let sum = arr.reduce((x, y) => x + y, 0);
// console.log(sum);

// let evensum = arr.filter((x) => x % 2 == 0).reduce((x, y) => x + y, 0);
// console.log(evensum);

const students = [
    { name: "Alice", score: 50 },
    { name: "BOB", score: 40 },
    { name: "Charlie", score: 70 },
    { name: "DAVID", score: 45 },
    { name: "Joas", score: 75 },
];

let newar=students
    .filter((student)=> student.score>60);
    
     
    
console.log(newar);
