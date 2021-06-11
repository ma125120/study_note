/**
 * Definition for a binary tree node.

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

export function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
	if (!root) return false

	const isLeaf = (node: TreeNode) => !node.left && !node.right

	let sum = root.val
	const dst = (node: TreeNode) => {
		if (sum === targetSum && isLeaf(node)) return true

		if (node.left) {
			sum += node.left.val
			if (dst(node.left)) return true
			sum -= node.left.val
		}
		if (node.right) {
			sum += node.right.val
			if (dst(node.right)) return true
			sum -= node.right.val
		}
	}

	return !!dst(root)
}
