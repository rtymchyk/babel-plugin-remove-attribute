const babel = require('babel-core')

const PLUGIN = './plugin.js'
const JSXPLUGIN = 'syntax-jsx'

describe('plugin', () => {
  it('invokes remove if attribute from options is present', () => {
    const output = babel.transform(
      '<Example no-match="noMatch"><span match="match">Hi</span></Example>;', {
      plugins: [JSXPLUGIN, [PLUGIN, { attribute: 'match' }]]
    })

    expect(output.code).toEqual(
      '<Example no-match="noMatch"><span>Hi</span></Example>;')
  })

  it('does not invoke remove if attribute from options is not present', () => {
    const input = '<Example no-match="noMatch"><span no-match-again="noMatch2">Hi</span></Example>;'
    const output = babel.transform(input, {
      plugins: [JSXPLUGIN, [PLUGIN, { attribute: 'match' }]]
    })

    expect(output.code).toEqual(input)
  })
})
