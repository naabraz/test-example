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
    if (this.isFull()) return 'Full'

    this.items.push(element)
    return element
  }

  pop() {
    return this.isEmpty() ? 'Empty' : this.items.pop()
  }

  shift() {
    return this.isEmpty() ? 'Empty' : this.items.shift()
  }
}

module.exports = Stack