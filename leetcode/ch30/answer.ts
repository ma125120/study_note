type DataMap = {
	[k: string]: number
}

export const findSubstring = function (s: string, words: string[]): number[] {
	if (!s || words.length === 0) return []
	const oneWordLen = words[0].length
	let needs = words.reduce(
		(prev, next) => ((prev[next] = (prev[next] || 0) + 1), prev),
		{} as DataMap,
	)

	let l = 0,
		r = 0,
		count = 0,
		windows = {} as DataMap,
		needsKeyLen = Object.keys(needs).length,
		ans = []

	for (let i = 0; i < oneWordLen; i++) {
		windows = {}
		r = l = i
		count = 0
		while (r <= s.length - oneWordLen) {
			let word = s.slice(r, r + oneWordLen)
			r += oneWordLen

			if (!needs[word]) {
				windows = {}
				l = r
				count = 0
				continue
			}

			windows[word] = (windows[word] || 0) + 1
			if (windows[word] === needs[word]) count++

			while (count === needsKeyLen) {
				if (r - l === oneWordLen * words.length) ans.push(l)

				let word2 = s.slice(l, l + oneWordLen)
				l += oneWordLen
				if (needs[word2]) {
					windows[word2]--
					if (windows[word2] < needs[word2]) count--
				}
			}
		}
	}

	return ans
}

// https://leetcode-cn.com/problems/substring-with-concatenation-of-all-words/solution/js-bao-li-qiu-jie-yu-hua-dong-chuang-kou-jie-fa-ji/
