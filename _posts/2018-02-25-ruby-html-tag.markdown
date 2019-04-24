---
layout: post
title:  "Ruby"
description: "Not that Ruby though"
date:   2018-02-25 09:00:00 +0100
categories: blog
---

I still remember the day I discovered the `<ruby />` HTML tag, I thought; "WTF, can we run Ruby code with that?" and I tried a simple hello world:

```html
<ruby>
puts 'Hello, World!'
</ruby>
```

Of course, it didn't worked, the HTML Ruby tag is not [for that Ruby](https://www.ruby-lang.org/en/), it is for Ruby annotations.

## Ruby annotation

Ruby annotations are used to provide a pronunciation guide for characters that could be unfamiliar to the reader, it's typically used in East Asian language such as Japanese and Chinese. "Ruby" is the term used for a run of text that is associated with another text, referred to as the base text.

[In 2001, W3C published a specification for the Ruby markup](https://www.w3.org/TR/2001/REC-ruby-20010531/Overview.html.utf-8) and even though the specification is finished, most browsers still has only partial support, [check Can I use? for more browser support information](https://caniuse.com/#search=ruby).

## Markup

Ruby markup consist in five HTML tags; `ruby`, `rt`, `rtc`, `rp` and `rb`.

* **ruby** represents a ruby annotation.
* **rt (ruby text)** specifies the ruby text component of a ruby annotation.
* **rtc (ruby text container)** embraces semantic annotations of characters presented in a ruby annotation.
* **rp (ruby parenthesis)** provides a fallback parentheses for browsers that do not support ruby annotation.
* **rb** can have both pronunciation (rt) and semantic (rtc) annotations

## Examples

The examples below provides a quick overview about the ruby markup, which is very straightforward.

This simple example shows the vowels in [Japanese Hiragana](https://en.wikipedia.org/wiki/Hiragana).

```html
<ruby>
  あ <rt>a</rt>
  い <rt>i</rt>
  う <rt>u</rt>
  え <rt>e</rt>
  お <rt>o</rt>
</ruby>
```

Here is the final result, if your browser support ruby annotations.

<ruby>
  あ <rt>a</rt>
  い <rt>i</rt>
  う <rt>u</rt>
  え <rt>e</rt>
  お <rt>o</rt>
</ruby>

In this example, we are also showing the vowels in Japanese Hiragana, but, we are also providing a fallback for browsers that don't support ruby annotations.

```html
<ruby>
  あ <rp>(</rp><rt>a</rt><rp>)</rp>
  い <rp>(</rp><rt>i</rt><rp>)</rp>
  う <rp>(</rp><rt>u</rt><rp>)</rp>
  え <rp>(</rp><rt>e</rt><rp>)</rp>
  お <rp>(</rp><rt>o</rt><rp>)</rp>
</ruby>
```

If your browser don't support ruby annotations, you would see something like this:

```
あ (a) い (i) う (u) え (e) お (o)
```

And here, we are using the `rtc` element.

```html
<ruby>
  <rb>日本</rb><rt></rt>
  <rtc>Japan</rtc>
</ruby>
```

<ruby>
  <rb>日本</rb><rt>Nippon</rt>
  <rtc>Japan</rtc>
</ruby>

You can also provide styles for each tags showed above, given the previous `rtc` example, you can pass any HTML attribute and use styles as well.

```html
<ruby class="some-ruby-sample" id="some-id">
  <rb>日本</rb><rt class="ruby-text">Nippon</rt>
  <rtc>Japan</rtc>
</ruby>

<style>
.some-ruby-sample {
  padding: 5px;
}

.ruby-text {
  background-color: #BC002D;
  color: #FFF;
}
</style>
```

<style>
.some-ruby-sample {
  padding: 5px;
}

.ruby-text {
  background-color: #BC002D;
  color: #FFF;
}
</style>

<ruby class="some-ruby-sample" id="some-id">
  <rb>日本</rb><rt class="ruby-text">Nippon</rt>
  <rtc>Japan</rtc>
</ruby>

The result will be as above.

## Wrapping up

And that's all, I really enjoy to explore not-so-used features of a language or system, it makes me appreciate even more all the hard work and effort that people put together to build something. :)
