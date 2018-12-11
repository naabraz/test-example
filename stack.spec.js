const Stack = require('./stack')

describe('Stack', () => {
  it('Should constructs the stack with a given capacity', () => {
    let stack = new Stack(3)
    expect(stack.items).toEqual([])
    expect(stack.capacity).toBe(3)
  })

  it('Should have an isEmpty function that returns true if the stack is empty and false otherwise', () => {
    let stack = new Stack(3)
    expect(stack.isEmpty()).toBe(true)
    expect(stack.capacity).toBe(3)
    stack.items.push(2)
    expect(stack.isEmpty()).toBe(false)
  })

  it('Should have an isFull function that returns true if the stack is full and false otherwise', () => {
    let stack = new Stack(3)
    expect(stack.isFull()).toBe(false)
    stack.items.push(0, 1, 2)
    expect(stack.isFull()).toBe(true)
  })

  describe('Stack push', () => {
    it('Should add a new element on top of the stack', () => {
      let stack = new Stack(3)
      stack.push(2)
      expect(stack.items[stack.items.length -1]).toBe(2)
    })
  })
})