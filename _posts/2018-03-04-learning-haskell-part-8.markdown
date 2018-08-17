---
layout: post
title:  "Learning Haskell - Common types"
description: ""
date: 2018-03-04 09:00:00 +0100
categories: blog
---

In the previous post, we introduce Haskell types, now let's take a closer look at some common types Haskell provides us out of the box.

**Read the other posts of this serie:**

* [Part 1](/blog/2018/01/04/learning-haskell/)
* [Part 2 - Lambda functions](/blog/2018/01/22/learning-haskell-part-2/)
* [Part 3 - First-class functions](/blog/2018/01/27/learning-haskell-part-3/)
* [Part 4 - Lists](/blog/2018/01/29/learning-haskell-part-4/)
* [Part 5 - Rules for recursion](/blog/2018/02/04/learning-haskell-part-5/)
* [Part 6 - Pattern matching](/blog/2018/02/17/learning-haskell-part-6/)
* [Part 7 - Introducing types](/blog/2018/03/02/learning-haskell-part-7/)

## Common types

Before we jump in, just remember this first:

* In Haskell, we use `->` to separate arguments and return values.
* The last type (from left to right) is the **return** value type.
* All types in Haskell starts with a capital letter to distinguish them from functions which start with lowercase letter or `_` underscore.

--

### Int

In Haskell, the `Int` type is the more common 32 or 64 bit integer, it is guaranteed to be at least 30 bits.

```haskell
x :: Int
x = 2
```

### Integer

The `Integer` type in Haskell is an arbitrary precision type, meaning that it can hold any integer number no matter how big, the limit is the limit of your machine's memory.

```haskell
x :: Integer
x = 2
```

### String

No mystery here, just pay attention that strings in Haskell must use double quotes...

```haskell
name :: String
name = "Lucas"
```

### Char

While `Char` must use single quotes.

```haskell
letter :: Char
letter = 'x'
```

### Double

Just a `Double` type.

```haskell
price :: Double
price = 10.25
```

### Bool

The `Bool` type, whatever if it's true or false, it must start with a uppercase letter, so it's **True** and **False**.

```haskell
isRaining :: Bool
isRaining = False
```

### Lists

As we saw in the Lists post, all the elements inside a list must be the same type.

```haskell
scores :: [Int]
scores = [8, 6, 11]

prices :: [Double]
prices = [2.10, 1.05, 0.89]

letters :: [Char]
letters = ['a', 'b', 'c']
```

A list of characters is the same as a string:

```haskell
letters == "abc"
True
```

To make things easier, Haskell allows us to use `String` as a type synonym for `[Char]`, both of the types signatures below means exactly the same thing.

```haskell
animal = [Char]
animal = "cat"

anotherAnimal :: String
anotherAnimal = "lion"
```

### Tuples

The two main differences between `Tuples` and `Lists` is that a Tuple can hold different types and each Tuple is of a specific length.

```haskell
streetAddress :: (String, Int)
streetAddress = ("Alexanderplatz", 100)

dayMonthYear :: (Int, Int, Int)
dayMonthYear = (04, 03, 2018)
```

### Functions types

As we saw in the last post, we use **->** to separate arguments and return values. The last type from left to right is always the return value type.

```haskell
double :: Int -> Int
double n = n * 2

half :: Int -> Double
half n = (fromIntegral n) / 2
```

Functions with multiple arguments should have their type signature as follow.

```haskell
makeAddress :: String -> Int -> String -> (String, Int, String)
makeAddress street number town = (street, number, town)
```

Is important to note though, behind the scenes in Haskell, all functions take only one argument. We can rewrite the `makeAddress` function by using lambda functions, so we can see a multi-argument function the way Haskell does:

```haskell
makeAddress :: String -> Int -> String -> (String, Int, String)
makeAddress = (\street -> (\number -> (\town -> (street, number, town))))
```

### First-class functions types

Functions can take functions as arguments and return functions as values as well, in that case, to write type signatures, you write the individual function values in parenthesis, like the `ifEven` function below.

```haskell
ifEven :: (Int -> Int) -> Int -> Int
ifEven f n = if even n
  then f n
  else n
```

### Type variables

Great, so all those types are neat, but what if we want a function to return any type we need, do we need to create a function for each type, like so:?

```haskell
simpleInt :: Int -> Int
simpleInt n = 2

simpleChar :: Char -> Char
simpleChar x = x

-- other types...
```

Yes, you can do that, but a better way is to use `type variables`, which allows us to use any type we want, for instance:

```haskell
simple :: a -> a
simple x = x
```

The `simple` function above can return any value we pass to it, doesn't matter its type. Note that lowercase `a` as type signature, any lowercase letter in a type signature indicates that any type can be used in that place.

Type variables are literally variable for types and it works exactly like a regular variable, but instead of representing a value, they represent a type.

--

And that's all for today! :)
