import LinkedList from "./linkedList.js";

let myList = new LinkedList();

myList.append("bananas");
myList.append("feet");
myList.append("purple");

console.log(`Length of list: ${myList.size()}`);
console.log("Head: " + myList.head().value);
console.log("Tail: " + myList.tail().value);
