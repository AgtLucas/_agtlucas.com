---
layout: post
title:  "CSS - The initial value"
description: "Reset all the things!"
date:   2017-01-19 10:00:00 -0300
categories: blog
comments: true
---

Every once and awhile, you're reading the CSS spec and then you encounter some not so known features or other interesting things, right? Have you heard about `initial` value?

The `initial` value, as the name implies, **represents the value specified as the property’s initial value.** It's important to note that it doesn't mean the browser default value for given property!

## Quick example

Let's say we have an anchor tag with some fancy color, like this:

```css
a {
  color: #08C;
}
```

If, by whatever crazy reason I need to reset the color value to its initial value, which will be `#000`, I can use the `initial` keyword, like so:

```css
a {
  color: initial; /* = color: #000; */
}
```

That's cool, but what if instead I want to reset all CSS properties for given element to its initial value, how can I do that? Well, there's a shorthand property called `all` that does exactly that (except for `direction` and `unicode-bidi`)!

So if I want to reset all the anchor's properties value, I can simply do this:

```css
a {
  all: initial;
}
```

And that's it!

Check out Can I Use page for more information about browser support for [initial value](http://caniuse.com/#feat=css-initial-value) and [all property](http://caniuse.com/#search=all).
