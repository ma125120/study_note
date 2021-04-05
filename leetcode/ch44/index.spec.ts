import { isMatch } from './index'

test(`通配符匹配 1`, () => {
	expect(isMatch('aa', 'a')).toStrictEqual(false)
})

test(`通配符匹配 2`, () => {
	expect(isMatch('aa', '*')).toStrictEqual(true)
})

test(`通配符匹配 3`, () => {
	expect(isMatch('cb', '?a')).toStrictEqual(false)
})

test(`通配符匹配 4`, () => {
	expect(isMatch('adceb', '*a*b')).toStrictEqual(true)
})

test(`通配符匹配 5`, () => {
	expect(isMatch('acdcb', 'a*c?b')).toStrictEqual(false)
})
test(`通配符匹配 6`, () => {
	expect(isMatch('', 'a*c?b')).toStrictEqual(false)
})
test(`通配符匹配 7`, () => {
	expect(isMatch('acdcb', '')).toStrictEqual(false)
})
