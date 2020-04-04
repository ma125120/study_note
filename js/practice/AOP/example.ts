import { Type, Exclude, Expose, TransformPlainToClass, classToPlain, Transform, } from 'class-transformer'
import 'reflect-metadata'
import * as dayjs from 'dayjs'

enum Role {
  superadmin = 1,
  admin = 10,
  vip = 50,
  user = 100,
}

export class User {
  /**
   * 赋值时使用 name 才能赋值，使用 username 无法赋值，
   * 访问时只能用username,因为推断没有name属性
   * plainToClass 显示为 username 字段
   * classToPlain 显示为 name 字段
   * 使用时注意区别
   */
  @Expose({ name: 'name' })
  username?: string;
  
  /**
   * 默认plainToClass 和 classToPlain 均不显示，且不可访问
   * 可以使用 toPlainOnly 空值 仅 classToPlain 时 跳过
   * 可以使用 toClassOnly 空值 仅 plainToClass 时 跳过
   * plainToClass 时就已经被删除，所以 plainToClass 后再 classToPlain 依然不显示
   */
  @Exclude({ toClassOnly: true, })
  password: string;

  /**
   * 版本控制，since <= version < until
   */
  @Expose({ since: 0.7, until: 2.1 })
  role: Role;

  /**
   * Transform 同样支持版本控制
   */
  @Type(() => dayjs.Dayjs)
  @Transform(value => dayjs(value), { toClassOnly: true, })
  date: dayjs.Dayjs;

  @Expose()
  get dateStr() {
    return this.date ? this.date.format(`YYYY-MM-DD`) : '';
  }
  /**
   * plainToClass 可以访问，console.log不显示
   * classToPlain 显示
   */
  @Expose()
  get roleName() {
    return Role[this.role];
  }

  @Type(() => Photo)
  photos?: Photo[];
}

export class Photo {
  id: string;
  url: string;
  @Expose()
  get name() {
    return this.url
  }
}

export class Api {
  @TransformPlainToClass(User, { version: 0.7 })
  async getUser() {
    const users = [
      {
        name: 'test',
        password: 'asda789*45d4as',
        role: Role.admin,
        date: 1585992382426
      },
      {
        name: 'test1',
        password: '的撒*45d4as',
        role: Role.superadmin,
        photos: [
          {
            id: 1,
            url: 'https://test.com/1.jpg'
          }
        ]
      },
    ]

    return (users as unknown) as User[]
  }
}

(async () => {
  const users = await new Api().getUser()
  console.log('palinToClass后的结果')
  console.log(users)

  console.log('classToPlain 后的结果')
  console.log(classToPlain(users))
  console.log(`用户名： ${users[0].username} , `)
  console.log(`用户密码： ${users[0].password} , 被排除了`)
  console.log(`用户角色： ${users[0].roleName} is ${Role.admin}`)
  console.log(`用户相册： ${users[1].photos[0].name} is https://test.com/1.jpg`)
})()
