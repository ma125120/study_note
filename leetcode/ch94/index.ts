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
export class TreeNode {
	val: number
	left: TreeNode | null
	right: TreeNode | null
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val
		this.left = left === undefined ? null : left
		this.right = right === undefined ? null : right
	}
}

export function inorderTraversal(root: TreeNode | null): number[] {
	let res: number[] = []

	const traverse = (root: TreeNode | null) => {
		if (!root) return

		if (root.left || root.right) {
			traverse(root.left)
			res.push(root.val)
			traverse(root.right)
			return
		}

		res.push(root.val)
	}

	traverse(root)

	return res
}
