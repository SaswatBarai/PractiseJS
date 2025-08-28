const number = [1, 2, 3, 4];
const sum = number.reduce(
    (acc,num) => {
        return acc + num;
    }
)

// acc starts as 1 (first element), num starts as 2 (second element)
// 1 + 2 → 3
// 3 + 3 → 6
// 6 + 4 → 10


console.log(sum); // 10

const nested = [[1, 2], [3, 4], [5, 6]];

const flat = nested.reduce(
    (acc,arr) =>{
        return acc.concat(arr);
    }
)

console.log(flat); // [1, 2, 3, 4, 5, 6]



const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 25 }
];



const groupedByAge = people.reduce(
    (acc,person) => {
        const key = person.age;
        if(!acc[key]) {
            acc[key] = [];
        }

        acc[key].push(person);
        return acc;
    },
    {}// why we are adding empty object here? because we want to start with an empty object as the accumulator
)




