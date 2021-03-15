import { longestValidParentheses } from './index'

test(`最长有效括号`, () => {
	expect(longestValidParentheses('(()')).toBe(2)
})

test(`最长有效括号`, () => {
	expect(longestValidParentheses(')()())')).toBe(4)
})

test(`最长有效括号`, () => {
	expect(longestValidParentheses(')(()())')).toBe(6)
})

test(`最长有效括号`, () => {
	expect(longestValidParentheses('(()))')).toBe(4)
})

test(`最长有效括号`, () => {
	expect(longestValidParentheses('()(()')).toBe(2)
})
