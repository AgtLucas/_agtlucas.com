---
layout: post
title:  "Learning Haskell - Lambda functions"
description: "Let's take a look at Lambda functions"
date:   2018-01-22 07:00:00 -0300
categories: blog
comments: true
---

In the last post, we explored the basics of Haskell, how to install Haskell, "variables", functions, etc. In part 2 of "Learning Haskell", we are going to explore a little bit about Lambda functions.

> [Read part 1 one on the last post](/blog/2018/01/04/learning-haskell/).

You probably have seen this piece of JavaScript code before:

```javascript
(function () {
  console.log('Something...')
})()
```

The pattern above is called [IIFE (Immediately Invoked Function Expression)](http://benalman.com/news/2010/11/immediately-invoked-function-expression/), this is a function that it's **immediately invoked** and runs as soon as it is defined.

In other words, we can say that IIFE is a Lambda function too.

## Lambda functions

Also called as Anonymous function, Lambda functions (λ) are functions with no name, they are the very minimum possible function, and as any other function in Haskell, it takes a value and return that value.

A very simple Lambda function:

```haskell
(\x -> x)
-- The backslash means this function is a Lambda function
```

To use this very simple function, you should call it passing its parameters like so:

```haskell
(\x -> x) "Haskell!"
-- Haskell!
```

Another example, let's say we have this function that doubles twice a value:

```haskell
doubleDouble x = dubs * 2
  where dubs = x * 2
```

This is a very simple function, we are using the `where` keyword to create or `dubs` "variable", no big deal.

With Lambda function, we could write the same function like so:

```haskell
doubleDouble x = (\dubs -> dubs * 2) (x * 2)
-- doubleDouble 2
-- will return 8 :p
```

Although the Lambda function might look a little difficult to understand at first, bear in mind that as an expression, your Lambda function is not syntactically  wrapped in your function like the way the `where` keyword it is.

The big thing about Lambda functions is that you can create functions on the fly, with its own scope. By the way, Haskell uses [Lexical Scope](https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch2.md) like JavaScript.

--

That's all for today. Stay tuned!
