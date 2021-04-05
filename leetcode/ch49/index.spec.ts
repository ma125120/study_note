import { groupAnagrams } from './index'

test(`字母异位词分组 1`, () => {
	expect(
		groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']),
	).toStrictEqual([['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']])
})

test(`字母异位词分组 2`, () => {
	expect(groupAnagrams(['ddddddddddg', 'dgggggggggg'])).toStrictEqual([
		['ddddddddddg'],
		['dgggggggggg'],
	])
})
