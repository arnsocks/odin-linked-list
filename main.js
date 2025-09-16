import LinkedList from "./linkedList.js";

let myList = new LinkedList();

myList.append("bananas");
myList.append("feet");
myList.append("purple");
myList.append("elephant");

console.log(`Length of list: ${myList.size()}`);
console.log("Head: " + myList.head().value);
console.log("Tail: " + myList.tail().value);
console.log("Index 1: " + myList.at(1).value);

myList.pop();

console.log("Tail: " + myList.tail().value);
