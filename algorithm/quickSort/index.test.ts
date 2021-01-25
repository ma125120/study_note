import { quickSort } from '.'

const data = [
	{
		input: [10, 5, 78, 9, 789, 456, 132, 45, 87],
		output: [5, 9, 10, 45, 78, 87, 132, 456, 789],
	},
]

data.map((v) => {
	const msg = `排序算法`
	test(msg, () => {
		quickSort(v.input)
		expect(v.input).toStrictEqual(v.output)
	})
})
