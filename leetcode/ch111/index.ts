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
export function minDepth(root: TreeNode | null): number {
	if (!root) return 0

	let queues = [[root, 1]]

	while (queues.length) {
		const [node, count] = queues.shift() as any
		if (!node.left && !node.right) return count

		if (node.left) {
			queues.push([node.left, count + 1])
		}
		if (node.right) {
			queues.push([node.right, count + 1])
		}
	}

	return 0
}
