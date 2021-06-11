/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
class ListNode {
	val: number
	next: ListNode | null
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val
		this.next = next === undefined ? null : next
	}
}
export const toNodes = (list: any[]) =>
	list.reduceRight(
		(prev, next) =>
			new ListNode(next, typeof prev === 'number' ? new ListNode(prev) : prev),
	)

export const getNodes = (head: ListNode) => {
	let res = []
	let current = head
	while (current && current.val) {
		res.push(current.val)
		current = current.next
	}

	return res
}

export function deleteDuplicates(head: ListNode | null): ListNode | null {
	if (!head) return head

	let current = head
	while (current.next) {
		if (current.val === current.next.val) {
			current.next = current.next.next
		} else {
			current = current.next
		}
	}

	return head
}
