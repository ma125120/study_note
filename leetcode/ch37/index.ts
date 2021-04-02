/**
 Do not return anything, modify board in-place instead.
 */
const N = 9
const rows: number[] = []
const cols: number[] = []
const cells: number[][] = []

const fillNum = (x: number, y: number, n: number, fill: boolean) => {
	const cx = parseInt(x / 3 + ''),
		cy = parseInt(y / 3 + '')
	cells[cx] = cells[cx] || []
	if (fill) {
		const mask = 1 << n
		// | 运算将 n 位的数字，转为 1
		rows[x] = rows[x] | mask
		cols[y] = cols[y] | mask
		cells[cx][cy] = cells[cx][cy] | mask
	} else {
		const mask = ~(1 << n)
		// & 运算将 n 位的数字，转为 0
		rows[x] = rows[x] & mask
		cols[y] = cols[y] & mask
		cells[cx][cy] = cells[cx][cy] & mask
	}
}

// 获取 行、列、单元格内可填充的二进制码
const getMask = (x: number, y: number) =>
	rows[x] | cols[y] | cells[parseInt(x / 3 + '')][parseInt(y / 3 + '')]

// 获取Mask可填充的数量
const getCount = (mask: number) => {
	let count = 0
	for (let i = 0; i < N; i++) {
		if ((mask & (1 << i)) === 0) count++
	}
	return count
}

const getMinOkMaskCountPos = (board: string[][]) => {
	let res: number[] = []
	let min = 10
	for (let i = 0; i < N; i++) {
		for (let j = 0; j < N; j++) {
			if (board[i][j] === '.') {
				const mask = getMask(i, j)
				const count = getCount(mask)
				if (count < min) {
					min = count
					res = [i, j]
				}
			}
		}
	}

	return res
}

const testMask = (mask: number, index: number) => (mask & (1 << index)) == 0

const backtrace = (board: string[][], count: number) => {
	if (count == 0) return true

	// 找到可选数字比较少的位置
	const [x, y] = getMinOkMaskCountPos(board)
	const mask = getMask(x, y)
	for (let c = 1; c <= 9; c++) {
		const idx = c - 1
		if (testMask(mask, idx)) {
			fillNum(x, y, idx, true)
			board[x][y] = c + ''

			if (backtrace(board, count - 1)) return true

			board[x][y] = '.'
			fillNum(x, y, idx, false)
		}
	}

	return false
}

export function solveSudoku(board: string[][]) {
	// 未填写的个数
	let count = 0

	for (let i = 0; i < N; i++) {
		for (let j = 0; j < N; j++) {
			const s = board[i][j]
			if (s === '.') {
				count++
			} else {
				fillNum(i, j, +s - 1, true)
			}
		}
	}
	backtrace(board, count)

	return board
}
