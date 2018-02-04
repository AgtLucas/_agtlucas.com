---
layout: post
title:  "Learning Haskell - Rules for recursion"
description: "Don't be afraid of something recursive"
date:   2018-02-04 09:00:00 +0100
categories: blog
comments: true
---

In functional programming, our data is immutable (we don't have state changes). We also don't have common looping functions that rely on state changes, like `for`, `while`. To solve iteration problems, we need to use recursive approaches.

At first, this may be sounds terrifying but, using a set of rules to understand better recursion can make our lives easier.

**Read the other posts of this serie:**

* [Part 1](/blog/2018/01/04/learning-haskell/)
* [Part 2 - Lambda functions](/blog/2018/01/22/learning-haskell-part-2/)
* [Part 3 - First-class functions](/blog/2018/01/27/learning-haskell-part-3/)
* [Part 4 - Lists](/blog/2018/01/29/learning-haskell-part-4/)

> In general, something is *recursive* if it's defined in terms of itself.

Recursion is often a lot more natural process than other forms of iteration in programming. In fact, nearly all human activities are a recursive process (cooking, washing the dishes, reading a book).

[Lists](/blog/2018/01/29/learning-haskell-part-4/) are a recursive data structure defined either as an empty list or an element and another list. Recursive functions in the other hand, are functions that use themselves in their own definition.

## Rules for recursion

The key to write recursive functions is to not think about recursion. Thinking about recursion too much while trying to write something recursive leads to headaches.

We can use a set of rules to helps us to solve recursive functions.

* 1 - Identify the end goal(s)
* 2 - Determine what happens when a goal is reached
* 3 - List all alternate possibilities
* 4 - Determine your "rinse and repeat" process
* 5 - Ensure that each alternative moves you toward your goal

Let's take a briefly look in each of these rules.

## Identify the end goal(s)

Think about a recursive task, let's say reading a book. Basically, you read one page, and then another one, and then turn the page, you repeat this until the book reaches its end, so your goal is to finish the book.

After you spot that something is a recursive process, the first step to solving it is to figure out when you know you're finished. Keep in mind that some recursive process can have more than one goal.

## Determine what happens when a goal is reached

For every goal you establish in the first rule, you need to figure out what the result will be. In the case of reading a book, the result is that you finished reading that book. In Haskell, functions must return a value, so you have to determine what value should be returned at the end state. For example, the end state of the Fibonacci is to arrive at 1; so by definition, `fib 1 = 1`.

## List all alternate possibilities

Most of the time you have only one or two alternatives to being in the goal state. If you don't have an empty list, you have a list with some value. If you didn't finished reading the book, you have a book to read.

## Determine your "rinse and repeat" process

Similar to rule [#2](#determine-what-happens-when-a-goal-is-reached), the difference is that you need to repeat your process. For a list, you might take the element and look at the tail. For reading a book, you read a page and look if if there are more pages left.

## Ensure that each alternative moves you toward your goal

For every process you list in the rule [#4](#determine-your-rinse-and-repeat-process) you need to ask yourself; "Does this move me closer to the goal?". If you keeping taking the tail of a list, you'll get the empty list. If you keep reading the book's pages, you will finish reading the book.

## Example

Let's put in practice the rules above by creating a recursive [factorial](https://en.wikipedia.org/wiki/Factorial) function.

* 1 - You start with one number, **n**
* 2 - If **n** is smaller than 2, then return **1** (as **0!** and **1!** are equal to 1)
* 3 - Otherwise, returns **n** times factorial of **n** minus 1
* 4 - Repeat until you get the product of all the positive integers less than or equal to **n**

To solve this in Haskell we can do:

```haskell
factorial n =
  if n < 2
    then 1
    else n * factorial (n - 1)
```

Or even inline:

```haskell
factorial n = if n < 2 then 1 else n * factorial (n - 1)
```
