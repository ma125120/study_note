import { lengthOfLastWord } from './index'

test(`单空格`, () => {
	expect(lengthOfLastWord('  ')).toStrictEqual(0)
})

test(`之前空格 `, () => {
	expect(lengthOfLastWord('  fdsa')).toStrictEqual(4)
})

test(`之前空格 `, () => {
	expect(lengthOfLastWord('  fdsa  ')).toStrictEqual(4)
})

test(`最后空格 `, () => {
	expect(lengthOfLastWord('fdsa  ')).toStrictEqual(4)
})

test(`中间空格 `, () => {
	expect(lengthOfLastWord('fdsa  sd')).toStrictEqual(2)
})
