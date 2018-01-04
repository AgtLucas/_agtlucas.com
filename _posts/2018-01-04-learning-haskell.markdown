---
layout: post
title:  "Learning Haskell"
description: "λ"
date:   2018-01-04 07:00:00 -0300
categories: blog
comments: true
---

Lately I’ve been studying [Haskell](https://www.haskell.org/), because, well, why not?

## Why Haskell?

I want to understand better about [Functional programming](https://en.wikipedia.org/wiki/Functional_programming) and everything related to it, its patterns, best practices, advantages, disadvantages... Haskell is a pure functional language and has a lot of cool features, such as strong and static typings, etc.

Right now I'm reading this book: [Get Programming with Haskell](https://www.manning.com/books/get-programming-with-haskell), which I believe it's a good book (at least so far). There's also a really famous book about Haskell; [Learn You a Haskell for Great Good](http://learnyouahaskell.com/) which is free to read online. :)

**I didn't started learning about the Haskell typing system yet!**

So far, I've learned the very basics of Haskell and this post is for me to keep tracking my learnings.

## Installing Haskell

Haskell is pretty easy to install, just go to [Haskell Downloads page](https://www.haskell.org/downloads) and follow the instructions for your OS of choice.

Once the installation is finished, you'll have access to the following tools:

* Cabal package manager
* GHC (Glasgow Haskell Compiler)
* GHCi (interactive interpreter)

## Using GHCi

To start playing with Haskell, you can use the GHCi, just type `ghci` in your terminal after you finished the installation.

You can try almost everything in `ghci`, like, creating functions, variables, etc:

```haskell
name = "Lucas"

print name

myFunction x = x
```

You can also load your code from a Haskell file, just create a Haskell file (`filename.hs`) and load it up with `ghci` by typing: `:l filename.hs` in the `ghci`.

After that you have full access to all the code in that file.

## Haskell syntax and our first function

At first, if you are familiar with JavaScript or other C based language, you can find Haskell syntax very weird.

Consider this simple function in JavaScript:

```javascript
const printSomething = function(something) {
  console.log(something)
}

printSomething('Hello, JavaScript!')

// Hello, JavaScript!
```

Now, take a look at the same thing but in Haskell:

```haskell
printSomething something = something

-- Usage:
printSomething "Hello, Haskell!"

-- Hello, Haskell
```

No `const`/`let`/`var` declaration, no return, no nothing, just the name of the function and its arguments, based on that, you can guess that `printSomething` is the name of the function, `something` is the argument and everything after the `=` signal is the function logic, the return is implied.

**All functions in Haskell must take at least one (1) argument and they must return a value. Also, if a function is called with the same argument, it must return the same value.**

## "Variables"

Do declare a variable in Haskell, you just need the name and a value, like so:

```haskell
x = 2
```

But variables in Haskell aren't actually variables, they are more like `constants`  so you can't reassign a "variable" in Haskell:

```haskell
x = 2
-- 2

x = 3
-- error
```

**Note:** *You can reassign a variable in Haskell only in the Haskell REPL (GHCi).*

## where keyword ("variables" inside functions?)

In Haskell, we can use the `where` keyword inside a function, to create a "variable" like...

Consider this function:

```haskell
calcChange owed given =
  if given - owed > 0
  then given - owed
  else 0
```

Let's use `where` to make the function cleaner and avoid repetition:

```haskell
calcChange owed given =
  if change > 0
  then change
  else 0
  where change = given - owed
```

Better, right?

Did you noticed that we declared the `where` keyword in the end of the function, instead of the beginning like almost all the other languages? In non-functional languages where we can reassign our variables, the order of the declaration matters because you can reassign the value of something after you assigned it. As we cannot do that in Haskell, we declare our `where` keyword in the end of the function.

--

And that's all for now! I'll publish more about my learning in Haskell soon. :)
