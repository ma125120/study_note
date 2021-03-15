# [class-transform](https://github.com/typestack/class-transformer)

## [demo](https://github.com/ma125120/study_note/blob/master/js/practice/AOP/example.ts) 我的一些个人理解
<style>
  summary {
    cursor: pointer;
  }
</style>
<details class="details-2">
    <summary tabindex="-1">在ES6和typescript的时代，相比于以往，你会更多的使用类和构造函数生成对象。Class-transformer允许你把字面量对象转换成某些类的实例，反之亦然。同时，它也可以基于某些条件进行对象的序列化和反序列化。这个工具在前端和后端都是非常有用的。</summary>
    <p class="box">Its ES6 and Typescript era. Nowadays you are working with classes and constructor objects more then ever.
Class-transformer allows you to transform plain object to some instance of class and versa.
Also it allows to serialize / deserialize object based on criteria.
This tool is super useful on both frontend and backend.</p>
</details>
<br >

<details class="details-2" >
    <summary tabindex="-1">在 <a href="http://plnkr.co/edit/Mja1ZYAjVySWASMHVB9R">plunker</a>中有关于在angular2中使用的例子.源码在<a href="https://github.com/pleerock/class-transformer-demo">这里</a>
Source code is available [here](https://github.com/pleerock/class-transformer-demo).</summary>
    <p class="box">Example how to use with angular 2 in <a href="http://plnkr.co/edit/Mja1ZYAjVySWASMHVB9R">plunker</a>.
Source code is available <a href="https://github.com/pleerock/class-transformer-demo">[here]</a>.</p>
</details>

## 什么是 class-transformer

<details class="details-2" >
  <summary tabindex="-1">在js中有两种类型的对象</summary>
  <p class="box">In JavaScript there are two types of objects:</p>
</details>

* plain (literal) objects（普通（字面量）对象）
* class (constructor) objects（类（构造函数）对象）
<br />

<details class="details-2" >
  <summary tabindex="-1">普通对象是 `Object`类的实例对象。当使用 `{}`符号创建时，它们又被叫做 <b>字面量</b> 对象。类对象是具有自己定义的构造函数，属性和方法的类的实例。通常，您通过“类”表示法定义它们。</summary>
  <p class="box">Plain objects are objects that are instances of `Object` class.
Sometimes they are called <b>literal</b> objects, when created via `{}` notation.
Class objects are instances of classes with own defined constructor, properties and methods.
Usually you define them via `class` notation.</p>
</details>
<br />

<details class="details-2" >
  <summary tabindex="-1">所以，问题是什么</summary>
  <p class="box">So, what is the problem?</p>
</details>
<br />

<details class="details-2" >
  <summary tabindex="-1">有时候，你想要把普通对象转换成已有的ES6类实例。举个例子，如果你从后端、一些api或者一个json文件加载了一个json，在经过 <code>JSON.parse</code> 之后，你拥有了一个普通的js对象，而不是已有类的实例</summary>
  <p class="box">Sometimes you want to transform plain javascript object to the ES6 <b>classes</b> you have.
For example, if you are loading a json from your backend, some api or from a json file,
and after you `JSON.parse` it you have a plain javascript object, not instance of class you have.</p>
</details>
<br />

<details class="details-2" >
  <summary tabindex="-1">举例来说，从 <code>users.json</code> 中加载了一个 users 的列表</summary>
  <p class="box">For example you have a list of users in your `users.json` that you are loading:</p>
</details>
<br />

```json
[{
  "id": 1,
  "firstName": "Johny",
  "lastName": "Cage",
  "age": 27
},
{
  "id": 2,
  "firstName": "Ismoil",
  "lastName": "Somoni",
  "age": 50
},
{
  "id": 3,
  "firstName": "Luke",
  "lastName": "Dacascos",
  "age": 12
}]
```

<details class="details-2" >
  <summary tabindex="-1">并且你拥有一个<code>User</code>类：</summary>
  <p class="box">And you have a `User` class:</p>
</details>
<br />

```typescript
export class User {
    id: number;
    firstName: string;
    lastName: string;
    age: number;

    getName() {
        return this.firstName + " " + this.lastName;
    }

    isAdult() {
        return this.age > 36 && this.age < 60;
    }
}
```
<details class="details-2" >
  <summary tabindex="-1">假设你正在从 <code>users.json</code> 文件下载 基于 <code>User</code> 类的用户，你可能会这么写：</summary>
  <p class="box">You are assuming that you are downloading users of type `User` from `users.json` file and may want to write
following code:</p>
</details>
<br />

```typescript
fetch("users.json").then((users: User[]) => {
  // 在这里可以使用users,并且类型提示也可以使用
  // 但是 users 实际上并不是 User 类的实例，这意味着你并不能使用 User 类的方法

  // you can use users here, and type hinting also will be available to you,
  //  but users are not actually instances of User class
  // this means that you can't use methods of User class
});
```

<details class="details-2" >
  <summary tabindex="-1">在这段代码中，你可以使用 <code>users[0].id</code> , 也可以使用 <code>users[0].firstName</code> 和 <code>users[0].lastName</code> 。然而，你不能使用 <code>users[0].getName() </code> 和 <code>users[0].isAdult()</code> 。因为 <code>users</code> 实际上只是包含普通对象的数组而已，而不是 <code>User</code> 类的实例。对编译器来说， <code>users: User[]</code> 这个类型标识是假的。</summary>
  <p class="box">In this code you can use `users[0].id`, you can also use `users[0].firstName` and `users[0].lastName`.
However you cannot use `users[0].getName()` or `users[0].isAdult()` because "users" actually is
array of plain javascript objects, not instances of User object.
You actually lied to compiler when you said that its `users: User[]`.</p>
</details>
<br />

<details class="details-2" >
  <summary tabindex="-1">所以应该做什么呢？怎样可以获得<code>User</code> 类型的 <code>users</code> 数组，而不是普通的js对象呢？ 解决办法就是创建一个 <code>User</code> 实例对象，并且手动将所有对象复制到新对象。但是一旦对象层次更加复杂，很快就会出错</summary>
  <p class="box">So what to do? How to make a `users` array of instances of `User` objects instead of plain javascript objects?
Solution is to create new instances of User object and manually copy all properties to new objects.
But things may go wrong very fast once you have a more complex object hierarchy.</p>
</details>
<br />

<details class="details-2" >
  <summary tabindex="-1">有现成的方案吗？ 是的，您可以使用<code>class-transformer</code>。 该库的目的是帮助您映射普通的 js对象 指向您所拥有的 类的实例。</summary>
  <p class="box">Alternatives? Yes, you can use class-transformer. Purpose of this library is to help you to map you plain javascript objects to the instances of classes you have.</p>
</details>
<br />

<details class="details-2" >
  <summary tabindex="-1">该库还非常适合在你的 APIs 中暴露模型,因为它提供了一个很棒的工具来控制模型在 API 中暴露的内容。下面就是有关它怎样工作的案例：</summary>
  <p class="box">This library also great for models exposed in your APIs, because it provides a great tooling to control what your models are exposing in your API. Here is example how it will look like:</p>
</details>
<br />

```typescript
fetch("users.json").then((users: Object[]) => {
    const realUsers = plainToClass(User, users);
    // now each user in realUsers is instance of User class
});
```

<details class="details-2" >
  <summary tabindex="-1">现在你可以使用 <code>users[0].getName()</code> 和  <code>users[0].isAdult()</code> 方法了。</summary>
  <p class="box">Now you can use `users[0].getName()` and `users[0].isAdult()` methods.</p>
</details>
<br />


## 安装

### Node.js

1. 安装模块:

    `npm install class-transformer --save`

2. `reflect-metadata` shim 也是需要的，使用同样的方式安装:

    `npm install reflect-metadata --save`

    并且确保在一个全局的地方引入它，例如 app.ts

    ```typescript
    import "reflect-metadata";
    ```

3. 由于使用ES6的新特性，所以如果你正在使用旧版本的 nodejs，你可能还需要安装 ``` es6-shim ``` es6-shim:

   `npm install es6-shim --save`

   并且确保在一个全局的地方引入它，例如 app.ts

    ```typescript
    import "es6-shim";
    ```

### Browser 浏览器

1. 安装模块:

    `npm install class-transformer --save`

2. `reflect-metadata` 也是需要的，使用同样的方式安装:

    `npm install reflect-metadata --save`

    在你的`index.html`中添加  reflect-metadata 的标签

    ```html
    <html>
       <head>
           <!-- ... -->
           <script src="node_modules/reflect-metadata/Reflect.js"></script>
       </head>
       <!-- ... -->
    </html>
    ```

    如果你正在使用angular 2 ，这个shim默认就已经安装了。

3. 如果你正在使用 `system.js`，你可能需要添加 `map` and `package` 配置:

    ```json
    {
        "map": {
            "class-transformer": "node_modules/class-transformer"
        },
        "packages": {
            "class-transformer": { "main": "index.js", "defaultExtension": "js" }
        }
    }
    ```

## 方法

#### plainToClass

<details class="details-2" >
  <summary tabindex="-1">这个方法会把一个普通的js对象转换成指定类的实例。</summary>
  <p class="box">This method transforms a plain javascript object to instance of specific class.</p>
</details>
<br />

```typescript
import {plainToClass} from "class-transformer";

let users = plainToClass(User, userJson); 
// 把 user 的 普通对象 转换成 User类的实例，数组也是支持的 
// to convert user plain object a single user. also supports arrays
```

#### plainToClassFromExist
<details class="details-2" >
  <summary tabindex="-1">这个方法会把一个普通的js对象转换成 一个已经被填充过的目标类的实例。</summary>
  <p class="box">This method transforms a plain object into a instance using a already filled Object which is a instance from the target class.</p>
</details>
<br />

```typescript
const defaultUser = new User();
defaultUser.role = 'user';

let mixedUser = plainToClassFromExist(defaultUser, user); 
// 如果 user 的 role 没有被设置，那么 mixed user 的 role 将被设置为 'user'
// user: { name: 'test' } -> mixedUser -> { name: 'test', role: 'user' }
// user: { name: 'test', role: 'self' } -> mixedUser -> { name: 'test', role: 'self' }

// mixed user should have the value role = user when no value is set otherwise.
```

#### classToPlain
<details class="details-2" >
  <summary tabindex="-1">这个方法把你的类对象还原成普通的js对象，在那之后就可以使用 <code>JSON.stringify</code></summary>
  <p class="box">This method transforms your class object back to plain javascript object, that can be `JSON.stringify` later.</p>
</details>
<br />

```typescript
import {classToPlain} from "class-transformer";
let photo = classToPlain(photo);
```

#### classToClass
<details class="details-2" >
  <summary tabindex="-1">这个方法可以将您的类对象转换成一个新的实例。这个可以视为对象的深拷贝</summary>
  <p class="box">This method transforms your class object into new instance of the class object. This maybe treated as deep clone of your objects.</p>
</details>
<br />

```typescript
import {classToClass} from "class-transformer";
let photo = classToClass(photo);
```
<details class="details-2" >
  <summary tabindex="-1">你也可以在 transformation 中使用 <code>ignoreDecorators</code> 选项来忽略你在类上使用的所有装饰器</summary>
  <p class="box">You can also use a `ignoreDecorators` option in transformation options to ignore all decorators you classes is using.</p>
</details>
<br />

#### serialize 序列化
<details class="details-2" >
  <summary tabindex="-1">您可以使用 <code>serialize</code>  方法将模型直接序列化为json：</summary>
  <p class="box">You can serialize your model right to the json using `serialize` method:</p>
</details>
<br />

```typescript
import {serialize} from "class-transformer";
let photo = serialize(photo);
```
<details class="details-2" >
  <summary tabindex="-1"><code>serialize</code>  方法可同时用于数组和非数组：</summary>
  <p class="box">`serialize` works with both arrays and non-arrays.</p>
</details>
<br />

#### deserialize and deserializeArray 反序列化和数组反序列化
<details class="details-2" >
  <summary tabindex="-1">你可以使用<code>deserialize</code> 方法将模型反序列化为json：</summary>
  <p class="box">You can deserialize your model to from a json using `deserialize` method:</p>
</details>
<br />

```typescript
import {deserialize} from "class-transformer";
let photo = deserialize(Photo, photo);
```
<details class="details-2" >
  <summary tabindex="-1">为了让数组的反序列化也能执行，你需要使用   <code>deserializeArray</code>：</summary>
  <p class="box">To make deserialization to work with arrays use `deserializeArray` method:</p>
</details>
<br />


```typescript
import {deserializeArray} from "class-transformer";
let photos = deserializeArray(Photo, photos);
```

## Enforcing type-safe instance (强制开启实例的类型安全)

- 简单的说，就是用 excludeExtraneousValues 和 Expose 来空值实例中哪些字段存在，一般场景不需要使用，除非内存过小或数据类型要求严格，不允许冗余

<details class="details-2" >
  <summary tabindex="-1"> <code>plainToClass</code>方法的默认行为是设置 <b>所有</b> 来自普通对象的属性，即使那些属性在 类 里面并没有定义：</summary>
  <p class="box">The default behaviour of the `plainToClass` method is to set *all* properties from the plain object,
even those which are not specified in the class.
</p>
</details>
<br />

```typescript
import {plainToClass} from "class-transformer";

class User {
  id: number
  firstName: string
  lastName: string
}

const fromPlainUser = {
  unkownProp: 'hello there',
  firstName: 'Umed',
  lastName: 'Khudoiberdiev',
}

console.log(plainToClass(User, fromPlainUser))

// User {
//   unkownProp: 'hello there',
//   firstName: 'Umed',
//   lastName: 'Khudoiberdiev',
// }
```
<details class="details-2" >
  <summary tabindex="-1">如果这种行为不符合您的需求，则可以在 <code>plainToClass</code> 方法中使用 <code>excludeExtraneousValues</code> 选项
，同时<b>根据需要公开所有类属性</b></summary>
  <p class="box">If this behaviour does not suit your needs, you can use the `excludeExtraneousValues` option
in the `plainToClass` method while *exposing all your class properties* as a requirement.</p>
</details>
<br />

```typescript
import {Expose, plainToClass} from "class-transformer";

class User {
    @Expose() id: number;
    @Expose() firstName: string;
    @Expose() lastName: string;
}

const fromPlainUser = {
  unkownProp: 'hello there',
  firstName: 'Umed',
  lastName: 'Khudoiberdiev',
}

console.log(plainToClass(User, fromPlainUser, { excludeExtraneousValues: true }))

// User {
//   id: undefined,
//   firstName: 'Umed',
//   lastName: 'Khudoiberdiev'
// }
```

## Working with nested objects（嵌套对象）
<details class="details-2" >
  <summary tabindex="-1">当您尝试转换具有嵌套对象的对象时，必须知道您要转换的对象类型。由于Typescript还没有很好的反射能力，我们应隐式指定每个属性包含的对象类型。这是通过 <code>@ Type</code>  装饰器完成的。</summary>
  <p class="box">When you are trying to transform objects that have nested objects,
its required to known what type of object you are trying to transform.
Since Typescript does not have good reflection abilities yet,
we should implicitly specify what type of object each property contain.
This is done using `@Type` decorator.</p>
</details>
<br />

<details class="details-2" >
  <summary tabindex="-1">假设我们有一个包含照片的相册。当我们尝试将专辑普通对象转换为类对象时：</summary>
  <p class="box">Lets say we have an album with photos.And we are trying to convert album plain object to class object:</p>
</details>
<br />

```typescript
import {Type, plainToClass} from "class-transformer";

export class Album {

    id: number;

    name: string;

    @Type(() => Photo)
    photos: Photo[];
}

export class Photo {
    id: number;
    filename: string;
}

let album = plainToClass(Album, albumJson);
// 现在的 album 是一个内部带有 photo 对象的实例
// now album is Album object with Photo objects inside
```

### Providing more than one type option（提供超过一个类型的选项）
- 类的某一个属性，可以根据指定的属性值，使用不同的类进行实例化
<details class="details-2" >
  <summary tabindex="-1">如果嵌套对象可以是不同的类型，则可以提供其他选项对象，指定一个鉴别符。 鉴别器选项必须定义一个包含子对象的“属性”对象的类型名称以及可能的“ subTypes”，可以将嵌套对象转换为该对象。 子类型有一个“值”，其中包含类型的构造函数和“名称”，可以与“属性”匹配鉴别器。</summary>
  <p class="box">In case the nested object can be of different types, you can provide an additional options object,
that specifies a discriminator. The discriminator option must define a `property` that holds the sub
type name for the object and the possible `subTypes`, the nested object can converted to. A sub type
has a `value`, that holds the constructor of the Type and the `name`, that can match with the `property`
of the discriminator.</p>
</details>
<br />
<details class="details-2" >
  <summary tabindex="-1">假设我们有一个相册中有一张顶级照片。 但是这张照片可以是某些不同的类型。并且我们正在尝试将专辑普通对象转换为类对象。 普通对象输入必须定义附加属性__type。 默认情况下，此属性在转换过程中被删除：</summary>
  <p class="box">Lets say we have an album that has a top photo. But this photo can be of certain different types. And we are trying to convert album plain object to class object. The plain object input has to define the additional property `__type`. This property is removed during transformation by default:</p>
</details>
<br />


**JSON input**:
```json
{
    "id": 1,
    "name": "foo",
    "topPhoto": {
        "id": 9,
        "filename": "cool_wale.jpg",
        "depth": 1245,
        "__type": "underwater"
    }
}
```

```typescript
import {Type, plainToClass} from "class-transformer";

export abstract class Photo {
    id: number;
    filename: string;
}

export class Landscape extends Photo {
    panorama: boolean;
}

export class Portrait extends Photo {
    person: Person;
}

export class UnderWater extends Photo {
    depth: number;
}

export class Album {

    id: number;
    name: string;

    @Type(() => Photo, {
        discriminator: {
            property: "__type",
            subTypes: [
                { value: Landscape, name: "landscape" },
                { value: Portrait, name: "portrait" },
                { value: UnderWater, name: "underwater" }
            ]
        }
    })
    topPhoto: Landscape | Portrait | UnderWater;

}

let album = plainToClass(Album, albumJson);
// now album is Album object with a UnderWater object without `__type` property.
```
<details class="details-2" >
  <summary tabindex="-1">提示：同样适用于具有不同子类型的数组。 此外，您可以指定`keepDiscriminatorProperty：true`。在选项中将discriminator属性也保留在结果类中。</summary>
  <p class="box">Hint: The same applies for arrays with different sub types. Moreover you can specify `keepDiscriminatorProperty: true` in the options to keep the discriminator property also inside your resulting class.</p>
</details>
<br />

## Exposing getters and method return values
- Expose 在 plainToClass 打印时不显示，但可以访问，如果使用 classToPlain 再转成普通对象， 就可以看到 Expose 的 getters 属性了

<details class="details-2" >
  <summary tabindex="-1">您可以通过为这些getter或方法设置<code>@Expose（）</code>装饰器来暴露您的getter或方法返回的内容</summary>
  <p class="box">You can expose what your getter or method return by setting a `@Expose()` decorator to those getters or methods:</p>
</details>
<br />

```typescript
import {Expose} from "class-transformer";

export class User {

    id: number;
    firstName: string;
    lastName: string;
    password: string;

    @Expose()
    get name() {
        return this.firstName + " " + this.lastName;
    }

    @Expose()
    getFullName() {
        return this.firstName + " " + this.lastName;
    }
}
```

## Exposing properties with different names (用不同的name暴露属性)

* 使用 uid 才能赋值，使用 id 无法赋值
* plainToClass 显示为 id 字段
* classToPlain 显示为 uid 字段
* 使用时注意区别

<details class="details-2" >
  <summary tabindex="-1">如果要使用其他名称公开某些属性，可以通过为@Expose装饰器指定一个“名称”选项来实现:</summary>
  <p class="box">If you want to expose some of properties with a different name,you can do it by specifying a `name` option to `@Expose` decorator:</p>
</details>
<br />

```typescript
import {Expose} from "class-transformer";

export class User {

    @Expose({ name: "uid" })
    id: number;

    firstName: string;

    lastName: string;

    @Expose({ name: "secretKey" })
    password: string;

    @Expose({ name: "fullName" })
    getFullName() {
        return this.firstName + " " + this.lastName;
    }
}
```

## Skipping specific properties(跳过自定义属性)
<details class="details-2" >
  <summary tabindex="-1">有时您想在转换过程中跳过一些属性。 这可以使用`@ Exclude`装饰器来完成：</summary>
  <p class="box">Sometimes you want to skip some properties during transformation. This can be done using `@Exclude` decorator:</p>
</details>
<br />

```typescript
import {Exclude} from "class-transformer";

export class User {

    id: number;

    email: string;

    @Exclude()
    password: string;
}
```
<details class="details-2" >
  <summary tabindex="-1">现在，当您转换 User 时，`password`属性将被跳过，并且不包含在转换结果中。</summary>
  <p class="box">Now when you transform a User, `password` property will be skipped and not be included in the transformed result.</p>
</details>
<br />

## Skipping depend of operation(通过配置取决是否跳过)
<details class="details-2" >
  <summary tabindex="-1">您可以使用 `toClassOnly` 或 `toPlainOnly` 选项控制要排除的属性：</summary>
  <p class="box">You can control on what operation you will exclude a property. Use `toClassOnly` or `toPlainOnly` options:</p>
</details>
<br />


```typescript
import {Exclude} from "class-transformer";

export class User {

    id: number;

    email: string;

    @Exclude({ toPlainOnly: true })
    password: string;
}
```
<details class="details-2" >
  <summary tabindex="-1">现在，“ password”属性仅在“ classToPlain”操作期间被排除。 相反，使用`toClassOnly`选项。</summary>
  <p class="box">Now `password` property will be excluded only during `classToPlain` operation. Oppositely, use `toClassOnly` option.</p>
</details>
<br />


## Skipping all properties of the class(跳过类的所有属性)
<details class="details-2" >
  <summary tabindex="-1">您可以跳过该类的所有属性，而只公开那些明确需要的属性：</summary>
  <p class="box">You can skip all properties of the class, and expose only those are needed explicitly:</p>
</details>
<br />


```typescript
import {Exclude, Expose} from "class-transformer";

@Exclude()
export class User {

    @Expose()
    id: number;

    @Expose()
    email: string;

    password: string;
}
```
<details class="details-2" >
  <summary tabindex="-1">现在，将公开 <code>id</code> 和 <code>email</code> ，并且在转换期间将排除 <code>password</code> 。另外，您可以在转换期间设置排除策略：</summary>
  <p class="box">Now `id` and `email` will be exposed, and password will be excluded during transformation. Alternatively, you can set exclusion strategy during transformation:</p>
</details>
<br />


```typescript
import {classToPlain} from "class-transformer";
let photo = classToPlain(photo, { strategy: "excludeAll" });
```
<details class="details-2" >
  <summary tabindex="-1">在这个例子中，你不需要对整个类都使用 <code>@Exclude()</code> </summary>
  <p class="box">In this case you don't need to `@Exclude()` a whole class.</p>
</details>
<br />

## Skipping private properties, or some prefixed properties(跳过私有属性，或者某些带前缀的属性)
- 跳过私有属性或者 `excludePrefixes` 指定的前缀

<details class="details-2" >
  <summary tabindex="-1">如果您使用前缀命名私有属性，例如使用_，那么您也可以从转换中排除这些属性：</summary>
  <p class="box">If you name your private properties with a prefix, lets say with `_`,then you can exclude such properties from transformation too:</p>
</details>
<br />


```typescript
import {classToPlain} from "class-transformer";
let photo = classToPlain(photo, { excludePrefixes: ["_"] });
```
<details class="details-2" >
  <summary tabindex="-1">这将跳过所有以“ _”前缀开头的属性。
您可以传递任意数量的前缀，所有以这些前缀开头的属性都将被忽略。</summary>
  <p class="box">This will skip all properties that start with `_` prefix.
You can pass any number of prefixes and all properties that begin with these prefixes will be ignored.
</p>
</details>
<br />
For example:

```typescript
import {Expose} from "class-transformer";

export class User {

    id: number;
    private _firstName: string;
    private _lastName: string;
    _password: string;

    setName(firstName: string, lastName: string) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    @Expose()
    get name() {
        return this.firstName + " " + this.lastName;
    }

}

const user = new User();
user.id = 1;
user.setName("Johny", "Cage");
user._password = 123;

const plainUser = classToPlain(user, { excludePrefixes: ["_"] });
// here plainUser will be equal to
// { id: 1, name: "Johny Cage" }
```

## Using groups to control excluded properties(使用 groups 来空值排除属性)
<details class="details-2" >
  <summary tabindex="-1">您可以使用组来控制哪些数据将公开，哪些数据将不会公开：</summary>
  <p class="box">You can use groups to control what data will be exposed and what will not be:</p>
</details>
<br />


```typescript
import {Exclude, Expose} from "class-transformer";

@Exclude()
export class User {

    id: number;

    name: string;

    @Expose({ groups: ["user", "admin"] }) 
    // 这意味着这个数据只有在 user 和 admin 的组才会被排除
    // this means that this data will be exposed only to users and admins
    email: string;

    @Expose({ groups: ["user"] }) 
    // 这意味着这个数据只有在 user 的组才会被排除
    // this means that this data will be exposed only to users
    password: string;
}
```

```typescript
import {classToPlain} from "class-transformer";
let user1 = classToPlain(user, { groups: ["user"] }); // will contain id, name, email and password

let user2 = classToPlain(user, { groups: ["admin"] }); // will contain id, name and email
```

## Using versioning to control exposed and excluded properties (使用版本控制暴露和排除的属性)
<details class="details-2" >
  <summary tabindex="-1">如果要构建具有不同版本的API，则class-transformer具有非常有用的工具。
您可以控制应在哪个版本中公开或排除模型的哪些属性。 例如：</summary>
  <p class="box">If you are building an API that has different versions, class-transformer has extremely useful tools for that.
You can control which properties of your model should be exposed or excluded in what version. Example:</p>
</details>
<br />


```typescript
import {Exclude, Expose} from "class-transformer";

@Exclude()
export class User {

    id: number;

    name: string;

    @Expose({ since: 0.7, until: 1 }) 
    // 这意味着这个属性将会被暴露于版本 0.7 - 1
    // this means that this property will be exposed for version starting from 0.7 until 1
    email: string;

    @Expose({ since: 2.1 }) 
    // 这意味着这个属性将会被暴露于版本 2.1及之后
    // this means that this property will be exposed for version starting from 2.1
    password: string;
}
```

```typescript
import {classToPlain} from "class-transformer";
let user1 = classToPlain(user, { version: 0.5 }); // will contain id and name
let user2 = classToPlain(user, { version: 0.7 }); // will contain id, name and email
let user3 = classToPlain(user, { version: 1 }); // will contain id and name
let user4 = classToPlain(user, { version: 2 }); // will contain id and name
let user5 = classToPlain(user, { version: 2.1 }); // will contain id, name nad password
```

## Сonverting date strings into Date objects(日期字符串转化成日期对象)
<details class="details-2" >
  <summary tabindex="-1">有时，您的纯JavaScript对象中有一个以字符串格式接收的Date。
您想从中创建一个真正的javascript Date对象。
您可以简单地通过将Date对象传递给`@ Type`装饰器来实现：</summary>
  <p class="box">Sometimes you have a Date in your plain javascript object received in a string format.
And you want to create a real javascript Date object from it.
You can do it simply by passing a Date object to the `@Type` decorator:</p>
</details>
<br />


```typescript
import {Type} from "class-transformer";

export class User {

    id: number;

    email: string;

    password: string;

    @Type(() => Date)
    registrationDate: Date;
}
```
<details class="details-2" >
  <summary tabindex="-1">请注意，当您尝试将类对象转换为纯对象时，日期将转换为字符串。</summary>
  <p class="box">Note, that dates will be converted to strings when you'll try to convert class object to plain object.</p>
</details>
<br />
<details class="details-2" >
  <summary tabindex="-1">可以将相同的技术与Number，String，Boolean一起使用。
您想将值转换成这些类型时的基本类型。</summary>
  <p class="box">Note, that dates will be converted to strings when you'll try to convert class object to plain objectSame technique can be used with `Number`, `String`, `Boolean`
primitive types when you want to convert your values into these types.</p>
</details>
<br />

## Working with arrays (数组)
<details class="details-2" >
  <summary tabindex="-1">使用数组时，必须提供数组包含的对象的类型。</summary>
  <p class="box">When you are using arrays you must provide a type of the object that array contains.</p>
</details>
<br />
<details class="details-2" >
  <summary tabindex="-1">您可以在`@Type（）`装饰器中指定此类型：</summary>
  <p class="box">This type, you specify in a `@Type()` decorator:/</p>
</details>
<br />


```typescript
import {Type} from "class-transformer";

export class Photo {

    id: number;

    name: string;

    @Type(() => Album)
    albums: Album[];
}
```
<details class="details-2" >
  <summary tabindex="-1">你也可以自定义数组的类型:</summary>
  <p class="box">You can also use custom array types:</p>
</details>
<br />


```typescript
import {Type} from "class-transformer";

export class AlbumCollection extends Array<Album> {
    // custom array functions ...
}

export class Photo {

    id: number;

    name: string;

    @Type(() => Album)
    albums: AlbumCollection;
}
```

Library will handle proper transformation automatically.

ES6 collections `Set` and `Map` also require the `@Type` decorator:

```typescript
export class Skill {
    name: string;
}

export class Weapon {
    name: string;
    range: number;
}

export class Player {
    name: string;

    @Type(() => Skill)
    skills: Set<Skill>;

    @Type(() => Weapon)
    weapons: Map<string, Weapon>;
}
```

## Additional data transformation (额外的数据转换)

### Basic usage (基本使用)
<details class="details-2" >
  <summary tabindex="-1">您可以使用@Transform装饰器执行其他数据转换。</summary>
  <p class="box">You can perform additional data transformation using `@Transform` decorator.</p>
</details>
<br />
<details class="details-2" >
  <summary tabindex="-1">例如，当您将对象从普通对象转换为类时，您想使 “日期” 对象成为 <code>moment</code> 对象：</summary>
  <p class="box">For example, you want to make your `Date` object to be a `moment` object when you are transforming object from plain to class:</p>
</details>
<br />

```typescript
import {Transform} from "class-transformer";
import * as moment from "moment";
import {Moment} from "moment";

export class Photo {

    id: number;

    @Type(() => Date)
    @Transform(value => moment(value), { toClassOnly: true })
    date: Moment;
}
```
<details class="details-2" >
  <summary tabindex="-1">现在，当您调用“ plainToClass”并发送Photo对象的简单表示形式时，
它将照片对象中的日期值转换为时刻日期。
`@ Transform`装饰器还支持组和版本控制。</summary>
  <p class="box">Now when you call `plainToClass` and send a plain representation of the Photo object,
it will convert a date value in your photo object to moment date.
`@Transform` decorator also supports groups and versioning.</p>
</details>
<br />


### Advanced usage (高级用法)
<details class="details-2" >
  <summary tabindex="-1">给@Transform装饰器更多的参数，使您可以配置转换的完成方式。</summary>
  <p class="box">The `@Transform` decorator is given more arguments to let you configure how you want the transformation to be done.</p>
</details>
<br />

```
@Transform((value, obj, type) => value)
```

| Argument          | Description
|--------------------|---------------------------------------------------------------------------------|
| `value` | The property value before the transformation. 转换之前的属性值
| `obj` | The transformation source object. 转换源对象
| `type` | The transformation type. 转换类型

## Other decorators (其他装饰器)
| Signature          | Example                                  | Description
|--------------------|------------------------------------------|---------------------------------------------|
| `@TransformClassToPlain` | `@TransformClassToPlain({ groups: ["user"] })` | 用 classToPlain 转换该方法返回的结果
| `@TransformClassToClass` | `@TransformClassToClass({ groups: ["user"] })` | 用 classToClass 转换该方法返回的结果
| `@TransformPlainToClass` | `@TransformPlainToClass(User, { groups: ["user"] })` | 用 plainToClass 转换该方法返回的结果
<details class="details-2" >
  <summary tabindex="-1">上述装饰器接受一个可选参数：
ClassTransformOptions-转换选项，例如组，版本，名称</summary>
  <p class="box">The above decorators accept one optional argument:
ClassTransformOptions - The transform options like groups, version, name</p>
</details>
<br />


An example:

```typescript
@Exclude()
class User {

    id: number;

    @Expose()
    firstName: string;

    @Expose()
    lastName: string;

    @Expose({ groups: ['user.email'] })
    email: string;

    password: string;
}

class UserController {

    @TransformClassToPlain({ groups: ['user.email'] })
    getUser() {
        const user = new User();
        user.firstName = "Snir";
        user.lastName = "Segal";
        user.password = "imnosuperman";

        return user;
    }
}

const controller = new UserController();
const user = controller.getUser();
```
<details class="details-2" >
  <summary tabindex="-1">用户变量仅包含firstName，lastName和email属性，因为它们是暴露的变量。 电子邮件属性也被公开，因为我们提到了“ user.email”组。</summary>
  <p class="box">the `user` variable will contain only firstName,lastName, email properties becuase they are
the exposed variables. email property is also exposed becuase we metioned the group "user.email".</p>
</details>
<br />


## Working with generics (泛型)
<details class="details-2" >
  <summary tabindex="-1">不支持泛型，因为TypeScript还没有良好的反射功能。一旦TypeScript团队为我们提供了更好的运行时类型反映工具，便将实现泛型。有一些调整，但是您可以使用，也许可以解决您的问题。</summary>
  <p class="box">Generics are not supported because TypeScript does not have good reflection abilities yet.
Once TypeScript team provide us better runtime type reflection tools, generics will be implemented.
There are some tweaks however you can use, that maybe can solve your problem.</p>
</details>
<br />

[Checkout this example.](https://github.com/pleerock/class-transformer/tree/master/sample/sample4-generics)

## Implicit type conversion (隐式类型转换)

> **注意** 如果你使用了 `class-validator` 和 `class-transformer`, 那么你可能不需要这个功能
<details class="details-2" >
  <summary tabindex="-1">根据Typescript提供的类型信息，启用内置类型之间的自动转换。 默认禁用。</summary>
  <p class="box">Enables automatic conversion between built-in types based on type information provided by Typescript. Disabled by default.</p>
</details>
<br />


```ts
import { IsString } from 'class-validator'

class MyPayload {

  @IsString()
  prop: string
}


const result1 = plainToClass(MyPayload, { prop: 1234 }, { enableImplicitConversion: true });
const result2 = plainToClass(MyPayload, { prop: 1234 }, { enableImplicitConversion: false });

/**
 *  result1 will be `{ prop: "1234" }` - notice how the prop value has been converted to string.
 *  result2 will be `{ prop: 1234 }` - default behaviour
 */
```

## How does it handle circular references? (怎么处理循环引用)
<details class="details-2" >
  <summary tabindex="-1">循环引用将被忽略</summary>
  <p class="box">Circular references are ignored.</p>
</details>
<br />
<details class="details-2" >
  <summary tabindex="-1">例如，如果您要转换类“ User”，其中包含类型为“Photo”的属性“photos”，并且“Photo”包含指向其父“User”的链接“user”，那么在转换过程中将忽略“user”。循环引用仅在`classToClass`操作期间不会被忽略。</summary>
  <p class="box">For example, if you are transforming class `User` that contains property `photos` with type of `Photo`,
 and `Photo` contains link `user` to its parent `User`, then `user` will be ignored during transformation.
Circular references are not ignored only during `classToClass` operation.</p>
</details>
<br />


## Example with Angular2

Lets say you want to download users and want them automatically to be mapped to the instances of `User` class.

```typescript
import {plainToClass} from "class-transformer";

this.http
    .get("users.json")
    .map(res => res.json())
    .map(res => plainToClass(User, res as Object[]))
    .subscribe(users => {
        // now "users" is type of User[] and each user has getName() and isAdult() methods available
        console.log(users);
    });
```

You can also inject a class `ClassTransformer` as a service in `providers`, and use its methods.

Example how to use with angular 2 in [plunker](http://plnkr.co/edit/Mja1ZYAjVySWASMHVB9R).
Source code is [here](https://github.com/pleerock/class-transformer-demo).

## Samples

Take a look on samples in [./sample](https://github.com/pleerock/class-transformer/tree/master/sample) for more examples of
usages.

## Release notes

See information about breaking changes and release notes [here](https://github.com/pleerock/class-transformer/tree/master/doc/release-notes.md).
