export function quickSort(
	list: number[] = [],
	begin = 0,
	end = list.length - 1,
) {
	if (begin < end) {
		const key = list[begin]
		let i = begin
		let j = end
		while (i < j) {
			// 寻找右侧第一个 < key，交换位置
			while (i < j && list[j] > key) {
				j--
			}
			if (i < j) {
				list[i] = list[j]
				i++
			}

			// 寻找右侧第一个 > key，交换位置
			while (i < j && list[i] < key) {
				i++
			}
			if (i < j) {
				list[j] = list[i]
				j--
			}
		}
		list[i] = key
		quickSort(list, begin, i - 1)
		quickSort(list, i + 1, end)
	}
}
