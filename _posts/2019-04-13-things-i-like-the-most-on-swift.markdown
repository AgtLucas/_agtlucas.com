---
layout: post
title:  "On learning Swift; things I like the most about it"
description: "Spoiler alert: functions parameters flexibility"
date: 2019-04-13 09:00:00 -0300
categories: blog
---

So, lately I've been learning [Swift](https://swift.org), it's such a joy to use this language that I decided to write this short post about a simple thing (or things) in the language, that it makes a huge difference (at least for me) when you are reading code. This thing is functions parameters.

Yeah, I told you, it's simple, but here's the deal, in Swift, functions parameters are labeled by default, meaning when you call a function, you need to provide the name of the parameter and then the value of it, like so:

```swift
func greet(name: String) {
  print("Hello, \(name)!")
}

greet(name: "Scarlet Witch")
// Hello, Scarlet Witch!
```

Coming from a The Web spectrum, with JavaScript, if you wanted something like that you would have to pass an object with a key `name` on it I really like this small detail of Swift.

But that's not all!

Sometimes there's no meaning or need to pass the parameter label and the value when you call the function, or you just don't wanna do that, you could rewrite your function and use an underscore `_` before your parameter name, like this:

```swift
func greet(_ name: String) {
  print("Hello, \(name)!")
}

greet("Scarlet Witch")
// Hello, Scarlet Witch!
```

This way, you don't need to use the parameter label when you call your function, just the desired value.

## External and internal names

And yet one last thing, sometimes your parameter name makes sense inside your function, but when you need to use it, that name doesn't feel right, it looks weird, well, fortunately Swift lets you define different parameter names for you use externally (when you call your function) and internally (inside the function).

Our greet function is not that complex to use this feature (but you can if you want), but for the sake of explanation, imagine you have a function to count the amount of letters in a word, you could do something like this:

```swift
func countLettersInWord(word: String) {
  print("\(word) has \(word.count) letters.")
}

countLettersInWord(word: "Swift")
// Swift has 5 letters.
```

While the above is perfectly fine, note that when read that function, it feels weird; "count letter in word, word: Swift", right?

We can do better using external and internal names:

```swift
func countLetters(in word: String) {
  print("\(word) has \(word.count) letters.")
}

countLetters(in: "Swift")
// Swift has 5 letters.
```

Now when you read that function; "count letters in: Swift", it feels natural, it is just like reading a quote.

And that's it, so far my learning experience has been really pleasant, it's nice when we have tools that give us enough flexibility without compromise*. 😅

See ya!
