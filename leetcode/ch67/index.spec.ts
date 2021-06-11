import { addBinary } from './index'

test(`二进制求和`, () => {
	expect(addBinary('111', '1')).toStrictEqual('1000')
})

test(`二进制求和`, () => {
	expect(addBinary('1', '11')).toStrictEqual('100')
})

test(`二进制求和`, () => {
	expect(addBinary('1010', '1011')).toStrictEqual('10101')
})

test(`二进制求和`, () => {
	expect(addBinary('0', '0')).toStrictEqual('0')
})

test(`二进制求和`, () => {
	expect(addBinary('1', '0')).toStrictEqual('1')
})

test(`二进制求和`, () => {
	expect(addBinary('1111', '1111')).toStrictEqual('11110')
})
