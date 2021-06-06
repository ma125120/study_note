const reg = /(\w+)\[(\d+)\]/
type nameType = string | Array<string>

const _get = (obj: any, names: nameType) => {
	let keys = Array.isArray(names) ? names : names.split('.')

	return keys.reduce((prev, next) => {
		if (reg.test(next)) {
			const [_, name, index] = next.match(reg)
			return prev && prev[name] && prev[name][index]
		} else {
			return prev && prev[next]
		}
	}, obj)
}

const get = (obj: any, names: nameType, defaultValue?: any) =>
	_get(obj, names) || defaultValue

export default get

// var list7 = [7, 2, 11, 2, 0, 1, 2, 4, 5, 10, 13, 14, 15]
// // step1: [0, 1, 2, 4, 5, 7, 10, 11, 13, 14, 15]
// // step2: [0,1,2] [4,5] [7] [10,11] [13,14,15]
// // step3: ["0->2", "4->5", "7", "10->11", "13->15"]

// function summaryRanges(list) {
// 	if (!list.length) return []

// 	const res = []
// 	const arr = [...list]
// 	arr.sort((a, b) => a - b)

// 	let item = []
//   const pushItem = () => {
//     if (item.length === 1) {
//       res.push(item[0])
//     } else if (item.length > 1) {
//       res.push(`${item.shift()}->${item.pop()}`)
//     }
//   }
// 	for (let i = 0; i < arr.length; i++) {
// 		if (!item.length) {
//       item = [arr[i]]
//     } else if (arr[i] === arr[i - 1] || arr[i] - 1 === arr[i - 1]) {
//       item.push(arr[i])
//     } else {
//       pushItem()
//       item = [arr[i]]
//     }
// 	}

//   pushItem()
// 	return res
// }

// var res2 = summaryRanges(list7)
// console.log(res2) // ["0->2", "4->5", "7", "10->11", "13->15"]
