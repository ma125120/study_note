import { deleteDuplicates, getNodes, toNodes } from './index'

const testFn = (list: number[]) => getNodes(deleteDuplicates(toNodes(list)))

test(`爬楼梯`, () => {
	expect(testFn([1, 1, 2])).toStrictEqual([1, 2])
})

test(`爬楼梯`, () => {
	expect(testFn([1, 1, 2, 2, 2, 3])).toStrictEqual([1, 2, 3])
})
