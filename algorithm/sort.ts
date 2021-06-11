/* tslint:disable */
var list = [10, 2, 2, 3, 4, 5, 66, 7, 8]
/** @ts-ignore */
function bubbleSort(list) {
	const len = list.length - 1
	for (let i = 0; i < len; i++) {
		for (let j = i; j < len; j++) {
			if (list[j] > list[j + 1]) {
				;[list[j], list[j + 1]] = [list[j + 1], list[j]]
			}
		}
	}

	return list
}
bubbleSort(list)
