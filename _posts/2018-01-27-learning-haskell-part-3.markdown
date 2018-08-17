---
layout: post
title:  "Learning Haskell - First-class functions"
description: "Functions FTW"
date:   2018-01-27 09:00:00 +0100
categories: blog
---

Continuing my journey on exploring and learning Haskell, let's take a look at the concept of first-class functions that we can use in Haskell, and in other languages like Python, JavaScript.

The idea of first class functions is that we can pass functions as arguments for other functions and even return functions of functions. (Lots of `functions` in this sentence... I know).

This feature allows us to prevent repetitive computation in our code by abstracting it out.

Let's see how we can use functions as arguments.

## Function as argument

To start with it, imagine for a moment that you don't like odd numbers, I know this is odd, but for the example's sake let's imagine this hypothetical situation. :)

So you create two functions, one that adds 1 if the number is odd, turning it to an even number, and another, just for fun, that you doubles the number if it's odd. In both cases, we should return the number itself if isn't odd.

> Haskell has a built-in function to check if the number is odd, its name is, as you can probably guess... `odd`.

As we can see, both functions are very similar, the only part that changes is the logic we apply if the number is odd.

```haskell
-- Adds 1 if odd
ifOddInc n = if odd n
  then n + 1
  else n

-- Double the number if odd
ifOddDouble n = if odd n
  then n * 2
  else n
```

So let's improve this approach, let's create a function that checks if the given number is odd, and if so, we apply a function that is being passed as argument with the given number.

```haskell
-- Receives a function and a number as argument
ifOdd func x = if odd x
  then func x
  else x
```

Now we have the `ifOdd` function, let's create two more functions, one that receive a number and adds 1 to it, and another function which also receives a number but it doubles it. Let's called them `incNumber` and `doubleNumber` respectively.

```haskell
incNumber n = n + 1
doubleNumber n = n * 2
```

So basically now if you want to increment or double an odd number (converting it to even, remember, you don't like odd number for some odd reason), you can easily do that avoiding repetition by invoking your `ifOdd` function passing `incNumber` or `doubleNumber` as argument:

```haskell
ifOdd incNumber 3
-- 4

ifOdd incNumber 2
-- 2

ifOdd doubleNumber 3
-- 6

ifOdd doubleNumber 4
-- 4
```

To finish, another cool thing we can do, is to pass a [Lambda function](/blog/2018/01/22/learning-haskell-part-2/) as argument to your function...

```haskell
ifOdd (\x -> x + 1) 9
-- 10
```

... which for me looks simpler than creating another abstraction for that, but it doesn't mean it is better.

Functions can give us a lot of powers with the ability to create layers of abstraction to solve our problems, the question is, how much abstraction is too much abstraction? That's another discussion, but I do believe we are safe to assume that abstraction leads to complexity, and I believe we should strive for simplicity instead, so, think twice before abstracting, maybe you don't need abstraction at all.

--

That's all for now, until the next time!
