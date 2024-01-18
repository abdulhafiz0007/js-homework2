
var number = prompt("Sonni kiriting");

if(number % 3 == 0 && number % 5 == 0)  {
    console.log("FizzBuzz");
} else if (number % 5 == 0) {
    console.log("Fizz");
} else if (number % 3 == 0) {
    console.log("Buzz");
} else {
    console.log("Siz kiritgan raqam 3ga ham 5ga ham bo'linmaydi");
}

var randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);