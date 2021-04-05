export function groupAnagrams(strs: string[]): string[][] {
	const aCode = 'a'.charCodeAt(0)
	const res: Record<string, string[]> = {}

	for (let i = 0; i < strs.length; i++) {
		const s = strs[i]
		let count: any = new Array(26).fill(0)
		for (let c of s) {
			count[c.charCodeAt(0) - aCode]++
		}
		res[count] ? res[count].push(s) : (res[count] = [s])
	}

	return Object.values(res)
}
