---
layout: post
title:  "Learning Haskell - Lists"
description: "Lists FTW"
date:   2018-01-29 09:00:00 +0100
categories: blog
comments: true
---

In Haskell (and functional programming in general), the most important data structure are Lists. One of the reasons is that lists are inherently recursive.

> Read the other posts of this serie:

* [Part 1](/blog/2018/01/04/learning-haskell/)
* [Part 2 - Lambda functions](/blog/2018/01/22/learning-haskell-part-2/)
* [Part 3 - First-class functions](/blog/2018/01/27/learning-haskell-part-3/)

## Anatomy of a List

A list can be an element followed by another list or an empty list. The ability of taking apart and building lists are fundamental tools for many functional programming techniques.

The main pieces of a list are the `head`, the `tail` and its end represented by `[]`. As you can guess, the head is the first element of the list:

```haskell
head [10, 20, 100]
-- 10

head [[2, 4], [6, 8]]
-- [2, 4]
```

And the `tail`, is just the rest of the list:

```haskell
tail [10, 20, 100]
-- [20, 100]

tail [[2, 4], [6, 8]]
-- [6, 8]
```

The `tail` of lists with just one element is `[]` or the end of it. A empty list is different from other lists because it has nor `head` nor `tail`. If you try to call `head` or `tail` in an empty list you will receive an error.

```haskell
tail [10]
-- []

head []
-- *** Exception: Prelude.head: empty list

tail []
-- *** Exception: Prelude.head: empty list
```

## Creating lists

To create a list in Haskell, you need a function and the infix operator `:` which is called `cons`, which is a abbreviation for "construct". So, to create a list:

```haskell
1 : []
-- [1]

1 : [2, 3]
-- [1, 2, 3]

1 : 2 : [3, 4]
-- [1, 2, 3, 4]
```

> Please, note that in Haskell, every element in the list must be the same type.

```haskell
2 : 3 : ['a', 'b']
-- Error!
```

To combine lists, you can use the `++` operator, the same way you'd use to combine (concatenate) strings, which are lists as well.

```haskell
[2, 4] ++ [6, 8]
-- [2, 4, 6, 8]
```

## Ranges of data

In Haskell, we can generate ranges of data by using the `..` operator inside of a new list.

```haskell
[1 .. 10]
-- [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

[0, 2 .. 10]
-- [0, 2, 4, 6, 8, 10]
```

## Built-in functions

Given lists' importance, Haskell's standard library module (Prelude) provides us a wide range of useful functions to use with lists, let's look at some of the most common ones:

### ▪️ !! operator

The `!!` operator provides an easy way to access a particular element in a list by its index. It takes a list and a number and return the element at that location in the list.

```haskell
[2, 4, 6] !! 2
-- 6

"blackbriar" !! 4
-- k
```

> Any infix operator (an operator placed between two values such as `+`) can also be used as a prefix function by wrapping it in parenthesis

```haskell
(!!) [2, 4, 6] 2
-- 6
```

If you try to access some index that it doesn't exist in the list, you will receive an error:

```haskell
[2, 4, 6] !! 3
-- *** Exception: Prelude.!!: index too large
```

### ▪️ length

Well, needless to say, it returns the length of the given list:

```haskell
length [2, 4, 6, 8]
-- 4

length [1 .. 8]
-- 8
```

### ▪️ reverse

Again, as the title implies...

```haskell
reverse [2, 4, 6]
-- [6, 4, 2]
```

You can use `reverse` to create a [palindrome](https://en.wikipedia.org/wiki/Palindrome) function:

```haskell
isPalindrome x = x == reverse x

isPalindrome "spy"
-- False

isPalindrome "ana"
-- True

isPalindrome [1, 2, 1]
-- True
```

### ▪️ elem

The `elem` function takes a value and a list and checks if the given value is in the list or not:

```haskell
elem 10 [2, 3, 5, 9, 10]
-- True

elem 15 [2, 3, 5, 9, 10]
-- False

elem 'l' "lucas"
-- True
```

### ▪️ take

Returns the first `n` elements in the list, where `n` is the value provided to the function:

```haskell
take 10 [1 .. 100]
-- [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

take 2 "awesome"
-- aw
```

If you ask for a value higher than the value list has, it will return what i can with no errors.

```haskell
take 20 [0, 2]
-- [0, 2]
```

### ▪️ drop

The `drop` function removes the first `n` elements of the list:

```haskell
drop 3 [2, 4, 5, 6, 7, 9]
-- [6, 7, 9]

drop 6 "hello haskell"
-- "haskell"
```

### ▪️ zip

The `zip` function allows us to combine two lists into tuple pairs:

```haskell
zip [0, 2, 4] [6, 8, 10]
-- [(0,6), (2,8), (4,10)]

zip ['a' .. 'z'] [1 ..]
-- [('a',1), ('b',2), ('c',3), ('d',4), ('e',5), ('f',6), ('g',7), ('h',8), ('i',9), ('j',10), ('k',11), ('l',12), ('m',13), ('n',14), ('o',15), ('p',16), ('q',17), ('r',18), ('s',19), ('t',20), ('u',21), ('v',22), ('w',23), ('x',24), ('y',25), ('z',26)]
```

--

That's all!
