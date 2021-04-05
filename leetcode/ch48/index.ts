/**
 Do not return anything, modify matrix in-place instead.
 */
export function rotate(matrix: number[][]) {
	const len = matrix.length
	// 水平翻转
	for (let i = 0; i < len / 2; i++) {
		for (let j = 0; j < len; j++) {
			;[matrix[i][j], matrix[len - i - 1][j]] = [
				matrix[len - i - 1][j],
				matrix[i][j],
			]
		}
	}
	// 主对角线翻转
	for (let i = 0; i < len; i++) {
		for (let j = 0; j < i; j++) {
			;[matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
		}
	}

	return matrix
}
