export function isMatch(s: string, p: string): boolean {
	const m = s.length,
		n = p.length

	const dp = [[true]]
	for (let i = 1; i <= n; i++) {
		if (p[i - 1] !== '*') {
			break
		}

		dp[0][i] = true
	}
	for (let i = 1; i <= m; i++) {
		dp[i] = dp[i] || []
	}

	for (let i = 1; i <= m; i++) {
		for (let j = 1; j <= n; j++) {
			if (p[j - 1] === '*') {
				dp[i][j] = dp[i][j - 1] || dp[i - 1][j]
			} else if (p[j - 1] === '?' || s[i - 1] === p[j - 1]) {
				dp[i][j] = dp[i - 1][j - 1]
			}
		}
	}

	return dp[m][n] || false
}
