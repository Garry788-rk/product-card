import { comments } from "./comments.js";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = numbers.filter((number) => number > 5);
const clothes = ["hoodie", "t - shirt", "jeans", "jacket", "sneakers"];

console.log(filteredNumbers);

function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return "Incorrect data type. Please provide an array";
  }

  return [...arr].reverse();
}

const reverseNumbers = reverseArray(numbers);
const reverseClothes = reverseArray(clothes);

console.log("reverseNumbers:", reverseNumbers);
console.log("reverseClothes:", reverseClothes);

function hasClothes(clothesName) {
  if (typeof clothesName !== "string") {
    return "Incorrect data type. Please provide a string";
  }

  return clothes.includes(clothesName);
}

const hasJacket = hasClothes("jacket");
const hasSocks = hasClothes("socks");

console.log(hasJacket);
console.log(hasSocks);
console.log(hasClothes("10"));

const comEmailCommeents = comments.filter((comment) =>
  comment.email.includes(".com"),
);
console.log(comEmailCommeents);

const updatedComments = comments.map((comment) => ({
  ...comment,
  postId: comment.id < 5 ? 2 : 1,
}));

console.log(updatedComments);

const simplefiedComments = comments.map((comment) => ({ id, name }) => ({
  id,
  name,
}));

console.log(simplefiedComments);

const validatedComments = comments.map((comment) => ({
  ...comment,
  isinvalid: comment.body.length > 180,
}));

console.log(validatedComments);

const emailReduce = comments.reduce((accumulator, comment) => {
  accumulator.push(comment.email);

  return accumulator;
}, []);

console.log(emailReduce);

const emails = comments.map(({ email }) => email);
const result1 = emails.toString();
const result2 = emails.join(", ");
const result3 = emails.join(" \\n ");

console.log(result1);
console.log(result2);
console.log(result3);
