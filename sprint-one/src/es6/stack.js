class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.key = 0;
  }
  push(value) {
    this.storage[this.key] = value;
    this.key++;
  }
  pop() {
    if (this.key > 0) {
      this.key--;
      var value = this.storage[this.key];
      delete this.storage[this.key];
      return value;
    }
  }
  size() {
    return this.key;
  }
}
var Five = new Stack('five', 5);
