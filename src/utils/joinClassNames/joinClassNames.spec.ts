import joinClassNames from '.'

describe('joinClassNames', () => {
  test('should generate the class with the junction of the parameters', () => {
    expect(joinClassNames('class-1', 'class-2')).toEqual('class-1 class-2')
  })

  test('should generate the class with one parameter', () => {
    expect(joinClassNames('foo')).toEqual('foo')
  })
})
