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
export function isSymmetric(root: TreeNode | null): boolean {
	if (!root) return true

	let res = true
	const isSame = (left: TreeNode | null, right: TreeNode | null) => {
		if (!res) return

		if (!left && !right) {
			return
		}

		if (left?.val === right?.val) {
			isSame(left?.left, right?.right)
			isSame(left?.right, right?.left)
		} else {
			res = false
		}
	}

	isSame(root.left, root.right)

	return res
}
