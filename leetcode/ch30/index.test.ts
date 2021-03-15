import { findSubstring, getMatchRes } from './index'
import { data } from './mock'

data.map((v) => {
	test('串联所有单词的子串 测试1', () => {
		expect(findSubstring(v.s, v.words)).toStrictEqual(v.res)
	})
})

test('串联所有单词的子串 测试5', () => {
	const s = 'aaa'
	const words = ['aa', 'aa']
	expect(getMatchRes(s, 2, ['aa'])).toStrictEqual(false)
})

test('串联所有单词的子串 getMatchRes', () => {
	const s = 'bccbcc'
	const words = ['bc', 'cc', 'cb']
	expect(getMatchRes(s, 2, words.slice(1))).toStrictEqual(true)
})
