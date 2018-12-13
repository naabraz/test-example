const Stack = require('./stack')

describe('Stack', () => {
  let stack
  beforeEach(() => {
    stack = new Stack(3)
  })

  it('Should constructs the stack with a given capacity', () => {
    expect(stack.items).toEqual([])
    expect(stack.capacity).toBe(3)
  })

  it('Should have an isEmpty function that returns true if the stack is empty and false otherwise', () => {
    expect(stack.isEmpty()).toBe(true)
    expect(stack.capacity).toBe(3)
    stack.items.push(2)
    expect(stack.isEmpty()).toBe(false)
  })

  it('Should have an isFull function that returns true if the stack is full and false otherwise', () => {
    expect(stack.isFull()).toBe(false)
    stack.items.push(0, 1, 2)
    expect(stack.isFull()).toBe(true)
  })

  describe('Stack push', () => {
    it('Should add a new element on top of the stack', () => {
      stack.push(2)
      expect(stack.items[stack.items.length -1]).toBe(2)
    })

    it('Should return the new element pushed at the top of the stack', () => {
      let elementPushed = stack.push(2)
      expect(elementPushed).toBe(2)
    })

    it('Should return full if one tries to push at the top of the stack while it is full', () => {
      stack.items = [1, 2, 3]
      let element = stack.push(4)
      expect(stack.items[stack.items.length -1]).toBe(3)
      expect(element).toBe('Full')
    })
  })

  describe('Stack pop', () => {
    it('Should remove the last element of the stack', () => {
      stack.items = [1, 2, 3]
      stack.pop()
      expect(stack.items[stack.items.length -1]).toBe(2)
    })

    it('Should return the element popped of the stack', () => {
      stack.items = [1, 2, 3]
      expect(stack.pop()).toBe(3)
    })

    it('Should try to pop an empty stack', () => {
      expect(stack.pop()).toBe('Empty')
    })
  })
})