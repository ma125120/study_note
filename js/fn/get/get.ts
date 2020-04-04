const reg = /(\w+)\[(\d+)\]/
type nameType = string | Array<string>

const _get = (obj: any, names: nameType) => {
  let keys = Array.isArray(names) ? names : names.split('.')

  return keys.reduce((prev, next) => {
    if (reg.test(next)) {
      const [_, name, index] = next.match(reg)
      return prev && prev[name] && prev[name][index]
    } else {
      return prev && prev[next]
    }
  }, obj)
}

const get = (obj: any, names: nameType, defaultValue?: any) => _get(obj, names) || defaultValue

export default get