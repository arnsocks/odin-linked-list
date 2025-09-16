import Node from "./node.js";

export default class LinkedList {
  #head = null;
  constructor() {}

  append(value) {
    // adds a new node containing VALUE to the end of the list
    if (this.#head == null) {
      this.prepend(value);
    } else {
      let temp = this.#head;
      while (temp.nextNode != null) {
        temp = temp.nextNode;
      }
      temp.nextNode = new Node(value);
    }
  }

  prepend(value) {
    // adds a new node containing VALUE to the start of the list
    this.#head = new Node(value, this.#head);
  }

  size() {
    // returns the total number of nodes in the list
    if (this.#head == null) return 0;
    else {
      let temp = this.#head;
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
    return this.#head;
  }

  tail() {
    // returns the last node in the list
    if (this.#head == null) return null;
    else {
      let temp = this.#head;
      while (temp.nextNode != null) {
        temp = temp.nextNode;
      }
      return temp;
    }
  }

  at(index) {
    // returns the node at the given index
    let temp = this.#head;
    let i = 0;
    while (index <= this.size()) {
      if (i === index) return temp;
      temp = temp.nextNode;
      i++;
    }
  }

  pop() {
    // removes the last element from the list
    let current = this.#head;
    let next = this.#head.nextNode;
    while (next.nextNode != null) {
      current = next;
      next = next.nextNode;
    }
    current.nextNode = null;
  }

  contains(value) {
    // returns true if the VALUE is in the list and otherwise returns false
    let temp = this.#head;
    while (temp != null) {
      if (temp.value === value) return true;
      temp = temp.nextNode;
    }
    return false;
  }

  find(value) {
    // returns the index of the node containing VALUE, or null if not found
    let temp = this.#head;
    let i = 0;
    while (temp != null) {
      if (temp.value === value) return i;
      temp = temp.nextNode;
      i++;
    }
    return null;
  }

  toString() {
    // represents the LinkedList object as strings, so you can print them out and preview them in console. Format should be:
    // ( value ) -> ( value ) -> ( value ) -> null
    let temp = this.#head;
    let string = "";
    while (temp != null) {
      string = string.concat(`( ${temp.value} ) -> `);
      temp = temp.nextNode;
    }
    string = string.concat("null");
    return string;
  }

  insertAt(value, index) {
    // inserts a new node with the provided VALUE at the given INDEX
    if (index == 0) {
      // insert at index 0 is the same as prepend
      this.prepend(value);
      return;
    } else if (index == this.size()) {
      this.append(value);
      return;
    } else if (index > this.size()) return; // Do nothing if index is not in list

    let current = this.#head;
    let next = this.#head.nextNode;
    let i = 0;
    while (i < index - 1) {
      current = next;
      next = next.nextNode;
      i++;
    }
    current.nextNode = new Node(value, next);
  }

  removeAt(index) {
    //removes the node at the given INDEX
    if (index === 0) {
      this.#head = this.#head.nextNode;
      return;
    } else if (index >= this.size) return;

    let current = this.#head;
    let next = this.#head.nextNode;
    let i = 0;
    while (i < index - 1) {
      current = next;
      next = next.nextNode;
      i++;
    }
    current.nextNode = next.nextNode;
  }
}
