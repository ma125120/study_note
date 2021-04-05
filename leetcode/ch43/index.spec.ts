import { multiply } from './index'

test(`字符串相乘 1`, () => {
	expect(multiply('2', '3')).toStrictEqual('6')
})

test(`字符串相乘 2`, () => {
	expect(multiply('123', '456')).toStrictEqual('56088')
})

test(`字符串相乘 3`, () => {
	expect(multiply('26', '5')).toStrictEqual('130')
})

test(`字符串相乘 4`, () => {
	expect(multiply('9133', '0')).toStrictEqual('0')
})

test(`字符串相乘 5`, () => {
	expect(multiply('12548', '148875687')).toStrictEqual('1868092120476')
})
