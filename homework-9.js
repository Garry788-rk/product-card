const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = numbers.filter((number) => number > 5);

console.log(filteredNumbers);

const clothes = ["хoodie", "t - shirt", "jeans", "jacket", "sneakers"];
const hasJacket = clothes.includes("jacket");
const hasSocks = clothes.includes("socks");

console.log(hasJacket);
console.log(hasSocks);

const reverseNumbers = numbers.reverse();
console.log(reverseNumbers);

const reversedClothes = clothes.reverse();
console.log(reversedClothes);

import { comments } from "./comments.js";
console.log(comments);

const comEmailCommeents = comments.filter((comment) =>
  comment.email.includes(".com"),
);
console.log(comEmailCommeents);

const updatedComments = comments.map((comment) => {
  const updatedComment = { ...comment };
  if (updatedComment.id < 5) {
    updatedComment.postId = 2;
  } else {
    updatedComment.postId = 1;
  }
  return updatedComment;
});
console.log(updatedComments);

const simplefiedComments = comments.map((comment) => ({
  id: comment.id,
  name: comment.name,
}));
console.log(simplefiedComments);

const validatedComments = comments.map((comment) => {
  const updatedComment = { ...comment };
  updatedComment.isInvalid = updatedComment.body.length > 180;
  return updatedComment;
});
console.log(validatedComments);

const emailReduce = comments.reduce((accumulator, comment) => {
  accumulator.push(comment.email);
  return accumulator;
}, []);
console.log(emailReduce);

const emailsMap = comments.map((comment) => comment.email);
console.log(emailsMap);

const emails = comments.map((comment) => comment.email);
const result1 = emails.toString();
const result2 = emails.join(", ");
const result3 = emails.join(" \\n ");
console.log(result1);
console.log(result2);
console.log(result3);
