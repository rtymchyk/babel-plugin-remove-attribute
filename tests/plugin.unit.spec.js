const plugin = require('../plugin')

describe('plugin', () => {
  const visitor = plugin().visitor.JSXAttribute

  function mockJSXAttributeASTNode(name) {
    return { name: { name } }
  }

  it('invokes remove if attribute from options is present', () => {
    const attribute = 'matching-attr'
    const remove = jest.fn()
    visitor({
      node: mockJSXAttributeASTNode(attribute),
      remove,
    }, { opts: { attribute }})

    expect(remove).toHaveBeenCalled()
  })

  it('does not invoke remove if attribute from options is not present', () => {
    const remove = jest.fn()
    visitor({
      node: mockJSXAttributeASTNode('other-attr'),
      remove,
    }, { opts: { attribute: 'some-other-attr' }})

    expect(remove).not.toHaveBeenCalled()
  })
})
