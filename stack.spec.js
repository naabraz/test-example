const Stack = require('./stack')

describe('Stack', () => {
  it('Should constructs the stack with a given capacity', () => {
    let stack = new Stack(3)
    expect(stack.items).toEqual([])
    expect(stack.capacity).toBe(3)
  })
})