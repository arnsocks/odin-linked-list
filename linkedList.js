import Node from "./node.js";

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  append(value) {
    // adds a new node containing VALUE to the end of the list

    if (this.head == null) {
      this.prepend(value);
    } else {
      let temp = this.head;
      while (temp.nextNode != null) {
        temp = temp.nextNode;
      }
      temp.nextNode = new Node(value);
    }
  }

  prepend(value) {
    // adds a new node containing VALUE to the start of the list
    this.head = new Node(value, this.head);
  }

  size() {
    // returns the total number of nodes in the list

    if (this.head == null) return 0;
    else {
      let temp = this.head;
      let length = 1;
      while (temp.nextNode != null) {
        length++;
        temp = temp.nextNode;
      }
      return length;
    }
  }

  head() {
    // returns the first node in the list
  }

  tail() {
    // returns the last node in the list
  }

  at(index) {
    // returns the node at the given index
  }

  pop() {
    // removes the last element from the list
  }

  contains(value) {
    // returns true if the VALUE is in the list and otherwise returns false
  }

  find(value) {
    // returns the index of the node containing VALUE, or null if not found
  }

  toString() {
    // represents the LinkedList object as strings, so you can print them out and preview them in console. Format should be:
    // ( value ) -> ( value ) -> ( value ) -> null
  }

  // BONUS

  insertAt(value, index) {
    // inserts a new node with the provided VALUE at the given INDEX
  }

  removeAt(index) {
    //removes the node at the given INDEX
  }

  // DEBUG
  speak(message) {
    console.log(message + "- From the Linked List file");
  }
}
