---
layout: post
title:  "Learning Haskell - Pattern matching"
description: ""
date:   2018-02-17 09:00:00 +0100
categories: blog
---

In my [last post](/blog/2018/02/04/learning-haskell-part-5/) about Learning Haskell, I've explained a little bit about the rules for recursion, and as an example, a `factorial` recursive function. We can implement that `factorial` function in many ways, for instance, with `Pattern Matching`.

**Read the other posts of this serie:**

* [Part 1](/blog/2018/01/04/learning-haskell/)
* [Part 2 - Lambda functions](/blog/2018/01/22/learning-haskell-part-2/)
* [Part 3 - First-class functions](/blog/2018/01/27/learning-haskell-part-3/)
* [Part 4 - Lists](/blog/2018/01/29/learning-haskell-part-4/)
* [Part 5 - Rules for recursion](/blog/2018/02/04/learning-haskell-part-5/)

## What is Pattern matching?

Pattern matching is a way to take some value and match it against some pattern. In other words, Pattern matching give us the ability to recognize values and break these values into parts.

## Factorial revisited (with Pattern matching)

To rewrite the factorial function with Pattern matching, let's look to the `factorial` function from my last post:

```haskell
-- Factorial function - recursive version
factorial n =
  if n < 2
    then 1
    else n * factorial (n - 1)
```

The condition is that if the number (n) is smaller than `2`, we return `1`, (that's the factorial rule) otherwise, we return the number (n) times the factorial function.

By the rule above, we can start our factorial function using Pattern matching like this:

```haskell
-- Factorial function - Pattern matching version
-- Matching the first case
factorial 0 = 1
```

And then we repeat the process for all the other conditions, for the second case, where the number (n) is `1`:

```haskell
-- Factorial function - Pattern matching version
-- Matching the second case
factorial 0 = 1
factorial 1 = 1
```

Finally, for the last case where the number (n) is any number equal or greater than `2`:

```haskell
-- Factorial function - Pattern matching version
-- Matching the second case
factorial 0 = 1
factorial 1 = 1
factorial n = n * factorial (n - 1)
```

That's all!

Pattern matching forces you to declare all the scenario, making your code more readable. :)
