export function climbStairs(n: number): number {
	let res = [1, 2]

	if (n <= 2) return n

	for (let i = 2; i < n - 1; i++) {
		res = [res[1], res[0] + res[1]]
	}

	return res[0] + res[1]
}
