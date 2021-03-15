type ValueType = string[][]

export function isValidSudoku(board: string[][]): boolean {
	const column: ValueType = []
	const row: ValueType = []
	const square: ValueType = []

  const checkDuplicate = (str, x, y) {
    // 检查行
    for (let i = 0; i < x; i++) {
      if (board[x][i] === str) return true
    }

    // 检查列
    for (let j = 0; j < y; j++) {
      if (board[j][y] === str) return true
    }

    // 检查方列
    const num = Math.floor(x / 3) + 1

    return false
  }
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[i].length; j++) {
      const str = board[i][j]
      if (str !== '.') {

      }
    }
	}
}

function checkDuplicate() {

}