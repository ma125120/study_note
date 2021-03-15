// 没有考虑 字符串数组是等长的，时间超时

export const findSubstring = function (s: string, words: string[]): number[] {
	if (!s || words.length === 0) return []
	let wordLength = words[0].length

	let res: number[] = []
	const len = s.length

	for (let i = 0; i < len; i++) {
		if (getMatchRes(s, i, words)) {
			res.push(i)
		}
	}

	return res
}

export const getMatchRes = (
	s: string,
	startIndex: number,
	restWords: string[],
	len = s.length,
): boolean => {
	// 如果剩余数组为0，表示通过
	if (restWords.length === 0) return true

	let res = false
	const str = s[startIndex]
	const wordLen = restWords.length
	const firstWords = restWords.map((v) => v[0])

	for (let j = 0; j < wordLen; j++) {
		if (str === firstWords[j]) {
			const word = restWords[j]
			// 匹配到第一个，直接进行字符串匹配
			if (s.slice(startIndex, startIndex + word.length) !== word) {
				continue
			}
			// 如果这是最后一个，表示通过
			if (restWords.length === 1) {
				return true
			}

			// 匹配剩余的数组
			const arr = [...restWords]
			arr.splice(j, 1)

			let result = getMatchRes(s, startIndex + word.length, arr, len)
			if (!result) continue

			res = true
		}
	}

	return res
}

// 先顺序遍历，如果第一个字母匹配 -> 匹配该元素的所有字符串 -> 该元素匹配完成后 -> 遍历剩余数组元素，
