/**
 * Definition for a binary tree node.
 * 有序数组转换为二叉搜索树
 */
class TreeNode {
	val: number
	left: TreeNode | null
	right: TreeNode | null
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val
		this.left = left === undefined ? null : left
		this.right = right === undefined ? null : right
	}
}
export function sortedArrayToBST(nums: number[]): TreeNode | null {
	const dst = (nums: number[], start = 0, end = nums.length - 1): any => {
		if (start > end) return null

		const min = Math.floor((start + end) / 2)
		return new TreeNode(
			nums[min],
			dst(nums, start, min - 1),
			dst(nums, min + 1, end),
		)
	}

	return dst(nums)
}
