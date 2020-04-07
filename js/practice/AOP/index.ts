import { plainToClass } from 'class-transformer'
import { ClassType } from 'class-transformer/ClassTransformer'
import 'reflect-metadata'

function UseInterceptor(dataClass: ClassType<any>) {
  return (target: any, prop: string, desc: PropertyDescriptor) => {
    const oldValue = desc.value

    desc.value = function (...args: any[]) {
      const res = oldValue.apply(this, args)
      return plainToClass(dataClass, res, { enableImplicitConversion: true })
    }

    return desc
  }
}

export {
  UseInterceptor
}