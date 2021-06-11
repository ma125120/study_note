/**
 Do not return anything, modify nums1 in-place instead.
 */
export function merge(
	nums1: number[],
	m: number,
	nums2: number[],
	n: number,
): void {
	let p1 = m - 1,
		p2 = n - 1,
		tail = m + n - 1

	while (p1 >= 0 || p2 >= 0) {
		let cur
		if (p1 === -1) {
			cur = nums2[p2--]
		} else if (p2 === -1) {
			cur = nums1[p1--]
		} else if (nums1[p1] > nums2[p2]) {
			cur = nums1[p1--]
		} else {
			cur = nums2[p2--]
		}

		nums1[tail--] = cur
	}
}
