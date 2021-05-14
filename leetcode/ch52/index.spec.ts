import { totalNQueens } from './index'

test(`N皇后 1`, () => {
	expect(totalNQueens(4)).toStrictEqual(2)
})

test(`N皇后 2`, () => {
	expect(totalNQueens(1)).toStrictEqual(1)
})

test(`N皇后 3`, () => {
	expect(totalNQueens(8)).toStrictEqual(15)
})
