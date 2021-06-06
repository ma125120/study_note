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
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
	if (!p && !q) return true

	let res = true

	const traverse = (p: TreeNode | null, q: TreeNode | null) => {
		if (!res) return

		if ((p && !q) || (q && !p)) {
			res = false
			return
		}

		if (!p && !q) return

		if (p.val === q.val) {
			traverse(p.left, q.left)
			traverse(p.right, q.right)
		} else {
			res = false
		}
	}
	traverse(p, q)
	return res
}
