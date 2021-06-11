/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 * 获取二叉树深度
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
export function maxDepth(root: TreeNode | null): number {
	if (!root) return 0

	let max = 1

	const dst = (node: TreeNode | null, count = 1) => {
		if (!node) return

		if (!node.left && !node.right) {
			max = Math.max(count, max)
			return
		}

		if (node.left) {
			dst(node.left, count + 1)
		}

		if (node.right) {
			dst(node.right, count + 1)
		}
	}

	dst(root, 1)

	return max
}
