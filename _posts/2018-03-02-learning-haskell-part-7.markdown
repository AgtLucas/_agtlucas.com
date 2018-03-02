---
layout: post
title:  "Learning Haskell - Introducing types"
description: ""
date: 2018-03-02 09:00:00 +0100
categories: blog
comments: true
---

One of the main reasons for my interest in learning Haskell is its type system.

Coming from a JavaScript background, I'm not so used to types in programming, although I had some contact with types back in 2012 when I was working with [C#](https://github.com/dotnet/csharplang) as an intern, with Java back in the university and more recently playing with [ReasonML](https://reasonml.github.io/) and [Elm](http://elm-lang.org/).

In this posts, let's take a initial look at Haskell's type system.

**Read the other posts of this serie:**

* [Part 1](/blog/2018/01/04/learning-haskell/)
* [Part 2 - Lambda functions](/blog/2018/01/22/learning-haskell-part-2/)
* [Part 3 - First-class functions](/blog/2018/01/27/learning-haskell-part-3/)
* [Part 4 - Lists](/blog/2018/01/29/learning-haskell-part-4/)
* [Part 5 - Rules for recursion](/blog/2018/02/04/learning-haskell-part-5/)
* [Part 6 - Pattern matching](/blog/2018/02/17/learning-haskell-part-6/)

## Static type

Haskell is a statically typed language, meaning that all the type analysis happens during the compilation of your code, instead of happening during the runtime like dynamically typed languages, such as JavaScript, Python, etc.

The main benefit of static typing is that types mistakes won't be happening during runtime execution, meaning that the compiler will throw an error and it won't compile your code until you fixed it. The disadvantage is that we need to add many types notations. Types signatures are required for every function and all variables must have their type declared.

If you've been reading the other posts of my "Learning Haskell" series, you probably noticed that so far we didn't use any type declaration, this is because Haskell compiler uses type inference to automagically determine the types of all values at compile time based on how functions and variables are being used.

## Type signature

Haskell's type signature is different if you are familiar with other statically typed languages such as Swift.

Consider this `add` function written in Swift:

```swift
func add(_ x: Int, _ y: Int) -> Int {
    return x + y;
}

add(2, 4); // 6
```

Now let's take a look at the same implementation but now in Haskell:

```haskell
add :: Int -> Int -> Int
add x y = x + y

add 2 4 -- 6
```

As you can see, the difference in Haskell's type signature is that we need to declare it before our function's declaration.

**Some important notes to take in consideration:**

* In Haskell, we use `->` to separate arguments and return values.
* The last type (from left to right) is the **return** value type.
* All types in Haskell starts with a capital letter to distinguish them from functions which start with lowercase letter or `_` underscore.

## Wrapping up

In this post we learned the very basics of types in Haskell, for the next posts we will dive deep into Haskell type system, learning the types Haskell supports out of the box and also how to create your types.

See you later!
