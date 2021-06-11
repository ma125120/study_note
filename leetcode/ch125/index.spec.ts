import { isPalindrome } from './index'

test(`验证回文串 1`, () => {
	expect(isPalindrome('A man, a plan, a canal: Panama')).toStrictEqual(true)
})

test(`验证回文串 2`, () => {
	expect(isPalindrome('race a car')).toStrictEqual(false)
})

test(`验证回文串 3`, () => {
	expect(isPalindrome('ab_a')).toStrictEqual(true)
})

test(`验证回文串 4`, () => {
	expect(isPalindrome('a_ba')).toStrictEqual(true)
})
