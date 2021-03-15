import get from './get'

const obj = {
  users: [
    {
      name: 'sad'
    }
  ]
}

test('测试get的字符串方式', () => {
  expect(get(obj, `users[0].name`)).toBe('sad');
});

test('测试get的数组', () => {
  expect(get(obj, ['users', '0', 'name'])).toBe('sad');
});

test('测试get的默认值是否生效', () => {
  expect(get(obj, ['users', '0', 'username'], 'default')).toBe('default');
});

test('测试get中间出现空值是否会报错', () => {
  expect(get(obj, ['users', '1', 'name'])).toBe(undefined);
});