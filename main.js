function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log("max is:", findMax([4, 7, 2, 9, 11, 12, 40]));

function reverseStrings(str) {
  let temp = "";
  for (let i = str.length - 1; i >= 0; i--) {
    temp = temp + str[i];
  }
  return temp;
}
console.log("reversed word is", reverseStrings("hello"));
function reverseString(str) {
  const str2 = str.split("");
  let x;
  for (let i = 0; i < str.length / 2; i++) {
    x = str2[i];
    str2[i] = str2[str.length - i];
    str2[str.length - i] = x;
  }
  return str2.join("");
}
console.log("methode 2", reverseString("hello world"));

function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u", "y"];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}
console.log("count is ", countVowels("apple"));

function greet(name) {
  if (!name) {
    return "Hello, Stranger";
  }
  return "Hello, " + name;
}
console.log(greet()); // This Should log "Hello, Stranger"
console.log(greet("Sam")); // This Should log "Hello, Sam

function sumEven(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
      sum += numbers[i];
    }
  }
  return sum;
}
console.log(sumEven([1, 2, 3, 4, 5, 6, 9, 12, 20])); // ? 12

function fuzzBuzz() {
  for (let i = 1; i <= 15; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
fuzzBuzz();

let button1 = document.querySelector("#btn1");
let button2 = document.querySelector("#btn2");
let div1 = document.getElementById("clue1");
let div2 = document.getElementById("clue2");
let div3 = document.getElementById("clue3");

button1.addEventListener("click", () => {
  button1.classList.add("hidden");
  button2.classList.remove("hidden");
  div2.classList.remove("hidden");
  div1.classList.add("hidden");
});
button2.addEventListener("click", () => {
  button2.classList.add("hidden");
  div3.classList.remove("hidden");
  div2.classList.add("hidden");
});
