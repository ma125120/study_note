export function isValidSudoku(board: string[][]): boolean {
	const column: number[][] = []
	const row: number[][] = []
	const square: number[][] = []

	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[i].length; j++) {
			const str: any = board[i][j]
			if (str !== '.') {
				column[i] = column[i] || []
				column[i][str] = (column[i][str] || 0) + 1
				if (column[i][str] > 1) return false

				row[j] = row[j] || []
				row[j][str] = (row[j][str] || 0) + 1
				if (row[j][str] > 1) return false

				const s = parseInt(i / 3 + '') * 3 + parseInt(j / 3 + '')
				square[s] = square[s] || []
				square[s][str] = (square[s][str] || 0) + 1
				if (square[s][str] > 1) return false
			}
		}
	}

	return true
}
