import LinkedList from "./linkedList.js";

let myList = new LinkedList();

myList.append("bananas");
myList.append("feet");
myList.append("purple");
myList.append("elephant");

// console.log(`Length of list: ${myList.size()}`);
// console.log("Head: " + myList.head().value);
// console.log("Tail: " + myList.tail().value);
// console.log("Index 1: " + myList.at(1).value);

// myList.pop();

// console.log("Tail: " + myList.tail().value);

// console.log("Contains 'purple': " + myList.contains("purple"));
// console.log("Contains 'elephant': " + myList.contains("elephant"));
// console.log("Index of 'purple': " + myList.find("purple"));
// console.log("Index of 'bananas': " + myList.find("bananas"));
console.log(myList.toString());

console.log("Inserting 'hats' at index 2");
myList.insertAt("hats", 2);
console.log(myList.toString());
