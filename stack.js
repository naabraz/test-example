class Stack {
  constructor(capacity) {
    this.items = []
    this.capacity = capacity
  }

  isEmpty() {
    return this.items.length === 0
  }

  isFull() {
    return this.items.length === this.capacity
  }

  push(element) {
    this.items.push(element)
  }
}

module.exports = Stack