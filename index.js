//Iteration 1: Names and Input
//1.1 Create a variable hacker1 with the driver’s name.
let hacker1 = "Oracle";

//1.2 Print "The driver's name is XXXX".
console.log(`The driver's name is ${hacker1}`);

//1.3 Create a variable hacker2 with the navigator’s name.

let hacker2 = "Google chrome";

//1.4 Print "The navigator's name is YYYY".

console.log(`The navigator's name is ${hacker2}`);

//Iteration 2: Conditionals
//2.1. Depending on which name is longer, print:

let lenght1 = hacker1.length;
let lenght2 = hacker2.length;
if (lenght1 > lenght2) {
  console.log(`The driver has the longest name, it has ${lenght1} characters`);
} else if (lenght2 > lenght1) {
  console.log(
    `It seems that the navigator has the longest name, it has ${lenght2} characters`
  );
} else `Wow, you both have equally long names, XX characters!`;

// Iteration 3: Loops
// 3.1 Print all the characters of the driver’s name, separated by a space and in capitals i.e. "J O H N"
let driver = "";
for (let i = 0; i < hacker1.length; i++) {
  driver += hacker1[i].toUpperCase() + " ";
}
console.log(`${driver}`);

// 3.2 Print all the characters of the navigator’s name, in reverse order. i.e. "nhoJ"
let navigator = [];
for (let i = 0; i < hacker2.length; i++) {
  navigator.unshift(hacker2[i]);
}
console.log(`${navigator}`);

// 3.3 Depending on the lexicographic order of the strings, print:

const lexicographic = "abcdefghijklmnopqrstuvwxyz";
let indexHacker1 = lexicographic.indexOf(hacker1[0]);
let indexHacker2 = lexicographic.indexOf(hacker2[0]);
if (hacker1 === hacker2) {
  console.log("What?! You both have the same name?");
} else {
  indexHacker1 < indexHacker2
    ? console.log("The driver's name goes first")
    : console.log("Yo, the navigator goes first definitely.");
}

//Bonus 1:

let paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nibh elementum, commodo mauris et, sodales neque. Nulla facilisi. Maecenas vehicula posuere ullamcorper. Aliquam sed eros arcu. Nunc at lacus fermentum, lacinia risus non, suscipit velit. Suspendisse nisl nisi, sollicitudin ac nulla at, bibendum rhoncus purus. Mauris volutpat pharetra urna vel dictum. Nam dolor ante, laoreet suscipit nisl a, ornare consectetur nunc. Nam ut ante vitae erat pharetra luctus vel nec libero. Curabitur vulputate diam id convallis lobortis. Nulla blandit pharetra turpis, vitae blandit augue scelerisque ut. Suspendisse potenti. In sit amet justo sit amet augue dictum venenatis. Donec convallis ante odio, et pretium augue pulvinar ut. Nam quis ligula aliquam, condimentum dolor tincidunt, sagittis enim. Curabitur gravida faucibus elit, vel tempor metus cursus ut. Integer nec gravida massa. Sed aliquet, magna vel pellentesque tristique, velit augue vestibulum quam, id dapibus elit velit ut nibh. Quisque nunc neque, vehicula in elit vitae, dignissim ullamcorper augue. Duis nunc est, aliquet sed lacus eget, viverra pretium diam. Etiam eget ante velit. Vivamus aliquam ultricies turpis at dictum.Curabitur consequat nisl vel dolor convallis lobortis. Quisque id felis nunc. Vestibulum a enim elementum, malesuada nisi non, ultrices augue. Sed massa ipsum, rutrum vitae eros vitae, vestibulum congue libero. Praesent tortor ligula, rhoncus vitae porttitor quis, pretium non eros. Etiam ac neque id libero vestibulum vulputate. Integer a arcu at turpis vulputate congue nec ac odio. Praesent condimentum dictum lectus a luctus. Vestibulum semper dignissim ultricies. Integer bibendum aliquet fermentum. Donec sollicitudin tortor orci, sed auctor dui fringilla in. Integer at dolor vitae ligula gravida eleifend finibus vitae sem. Sed ac felis vitae ex maximus mattis laoreet vel libero. Nunc ultricies odio vitae accumsan laoreet. Cras consequat lectus purus, nec posuere metus pellentesque id. Etiam accumsan tristique velit eget auctor.";

let counter = 1;

for (let i = 0; i < paragraph.length; i++) {
  if (paragraph[i] === " ") {
    counter++;
  }
}

console.log(counter);

let counterEt = 0;

for (let i = 0; i < paragraph.length; i++) {
  if (
    paragraph[i] === "e" &&
    paragraph[i + 1] === "t" &&
    paragraph[i - 1] === " "
  ) {
    counterEt++;
  }
}

console.log(counterEt);

// Bonnus 2:

let originalPhrase = "A man, a plan, a canal, Panama!";
let phraseNoSpace = "";
let phraseReverse = "";

for (let i = 0; i < originalPhrase.length; i++) {
  let char = originalPhrase[i];
  if (char !== " " && char !== "," && char !== "." && char !== "!") {
    phraseNoSpace += char;
  }
}
for (let i = phraseNoSpace.length - 1; i > -1; i--) {
  phraseReverse += phraseNoSpace[i];
}

if (phraseNoSpace.toLowerCase() === phraseReverse.toLowerCase()) {
  console.log("The assigned value is a Palindrome!");
} else {
  console.log("Sorry, no Palindrome.");
}
