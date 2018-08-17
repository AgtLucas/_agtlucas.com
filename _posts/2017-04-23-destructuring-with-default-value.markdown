---
layout: post
title:  "Destructuring with default value"
description: "Learning one thing new everyday!"
date:   2017-04-23 10:00:00 -0300
categories: blog
tags: [js, es6]
---

If you're familiar with ES6/ES2015, you probably have heard about `Destructuring`, right? Me too, but there's one thing I wasn't aware of. Destructuring with default value!

## Destructuring

From the awesome [MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment):

> The destructuring assignment syntax is a JavaScript expression that makes it possible to extract data from arrays or objects into distinct variables.

The basic idea is that you can easily get any specific property from an object, so instead of doing this:

```javascript
const obj = { foo: 123, bar: 456, baz: 000, other: 'other' }

console.log(obj.foo) // 123
console.log(obj.bar) // 456
```

You can pull all the properties you'd desire like so:

```javascript
const obj = { foo: 123, bar: 456, baz: 000, other: 'other' }
const { foo, bar } = obj

console.log(foo) // 123
console.log(bar) // 456
```

## Default value

But what if the property we would like is undefined, or if is not defined at all? 🤔

As you can see bellow, we'd get an `undefined` if we tried to access that property.

```javascript
const obj = { bar: 456, baz: 000, other: 'other' }
// or
// const obj = { foo: undefined, bar: 456, baz: 000, other: 'other' }
// or
// const obj = { foo, bar: 456, baz: 000, other: 'other' }
const { foo } = obj

console.log(foo) // undefined
```

For sure you can use a condition to verify if the property has a value or if it exists, but we can do better, we can define a **default value**!

```javascript
const obj = { bar: 456, baz: 000, other: 'other' }
// or
// const obj = { foo: undefined, bar: 456, baz: 000, other: 'other' }
// or
// const obj = { foo, bar: 456, baz: 000, other: 'other' }
const { foo = 'My default value' } = obj

console.log(foo) // 'My default value'
```

And we can use for arrays too...

```javascript
const [a = 'Default value', b] = [, 20, 30]

console.log(a) // 'Default value'
```

That's it! I just wanted to share this little thing that I've learned today. And you, what have you learned today?
