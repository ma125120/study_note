export function trap(height: number[]): number {
	let total = 0
	const len = height.length
	if (len <= 2) return 0

	let leftMax = height[0],
		rightMax = height[len - 1],
		l = 0,
		r = len - 1

	while (l < r) {
		if (height[l] < height[r]) {
			if (height[l] < leftMax) {
				total += leftMax - height[l]
			} else {
				leftMax = height[l]
			}
			l++
		} else {
			if (height[r] < rightMax) {
				total += rightMax - height[r]
			} else {
				rightMax = height[r]
			}
			r--
		}
	}

	return total
}
