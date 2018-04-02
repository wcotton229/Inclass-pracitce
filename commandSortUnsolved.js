var numbers = []

for (var i =2; i < process.argv.length; i++){
    numbers.push(parseFloat(process.argv[i]));
}

console.log(numbers);

console.log(numbers.sort(sortNums));

function sortNums(a,b) {
    return a - b;
}
