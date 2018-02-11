---
layout: post
title:  "Can you buy a mouse without a mouse?"
description: "Because temporary disabilities is real"
date:   2018-02-10 09:00:00 +0100
categories: blog
comments: true
---

Picture this, you are at home, “surfing the Web” and for no reason, your mouse stops working…

What can I do? Well, I can buy a mouse on Amazon for instance. But, can I buy a mouse without a mouse on Amazon? Well, let's find out, but first, let's talk a little about disability and Inclusive Design.

## Disability

It's wrong to conclude that all disabilities are a permanent. If your arm is broke, you have a temporary disability. If you are at the center of a loud crowd, you have a situational disability.

> "Disability is not just a health problem. It is a complex phenomenon, reflecting the interaction between features of a person’s body and features of the society in which he or she lives." - World Health organization

<figure>
  <picture>
    <img src="/img/disabilities.jpg" alt="Image contains a table showing the differences between disabilities (permanent, temporary, situational)" />
  </picture>
  <figcaption>
    The Persona Spectrum, by <a href="https://www.microsoft.com/en-us/design/inclusive">Microsoft Inclusive Toolkit</a>.
  </figcaption>
</figure>

## Inclusive Design

> "Inclusive design works across a spectrum of related abilities, connecting different people in similar circumstances." - Microsoft Inclusive Toolkit

If we design things for people with permanent disability, people with temporary and situational disabilities can also benefit.

For instance, high-contrast screens were designed for people with visual impairments, today many people benefit from high-contrast screens when they use a device in bright sunlight.

## The test

Now that we have this context, let's find out if is possible to buy a mouse without a mouse on Amazon.

Our goal is simple; search for a mouse on Amazon's website, choose one and buy it.. We must be able to complete this task using the keyboard only, remember, our mouse is not working anymore. We will be using the `tab` key and the `arrows` keys to navigate and the `enter/return` to trigger an action.

## Step 1 - Searching for a mouse

It was possible to reach the search bar using `tab`, which is good.

<figure>
  <picture>
    <img class="u-special-image u-bordered-image" src="/img/gifs-post-mouse/01-search.gif" alt="Animated gif showing Amazon's search bar being accessed via keyboard and typing the word mouse on it." />
  </picture>
  <figcaption>
  </figcaption>
</figure>

I'm using Firefox, and seems like Amazon is relying on the default browser focus style, which is not that good.

## Step 2 - Choosing the mouse

After searching for `mouse`, I was redirected to the results page, which I was also able to navigate using the keyboard, both `tab` and `arrows` keys works as expected. So far, so good.

<figure>
  <picture>
    <img class="u-special-image u-bordered-image" src="/img/gifs-post-mouse/02-search-result.gif" alt="Image contains animated gif of a mouse search's result on Amazon." />
  </picture>
  <figcaption>
    Over 200.000 results, not bad.
  </figcaption>
</figure>

I chose the **Logitech B100**, it's cheap and seems like a good choice (I hope so!).

## Step 3 - Product page

The product page contains all the product details and a lot of options, it was so pleasant to be able to access all of the options using my only working tool at the moment, the mighty keyboard.

All the links has focus (even if the browsers' default) except the share options, so if you intend to share that product, you'll need to guess which option is selected. Good luck, I guess.

<figure>
  <picture>
    <img class="u-special-image u-bordered-image" src="/img/gifs-post-mouse/03-product-page.gif" alt="Animated gif showing the product's page on Amazon" />
  </picture>
  <figcaption>
    € 6.99 for a Logitech mouse... looks good.
  </figcaption>
</figure>

Here one thing though. To access the `Add to Basket` button, I had to navigate through all the navigation links, on this page something like a [skip to content](https://webaim.org/techniques/skipnav/) would be very appreciated.

## Step 4 - Mouse added to the basket

Order placed, now it's time to go to the checkout page.

<figure>
  <picture>
    <img class="u-special-image u-bordered-image" src="/img/gifs-post-mouse/04-added-to-basket.gif" alt="" />
  </picture>
  <figcaption>
  </figcaption>
</figure>

We are almost there!

## Step 5 - Choosing the delivery address

Everything is going well so far, in this step I was able to select between two address that I already have in my Amazon's account using the `arrows` keys. It's nice to see that Amazon isn't reinventing the wheel and is using HTML semantic elements, like the the input radio.

<figure>
  <picture>
    <img class="u-special-image u-bordered-image" src="/img/gifs-post-mouse/05-delivery-address.gif" alt="An animated gif showing the delivery address page on Amazon checkout" />
  </picture>
  <figcaption>
  </figcaption>
</figure>

It was possible as well to add a new address.

## Step 6 - Selecting the payment method

Similar to the previous step, here we can easily select an existing payment method or add a new one. Everything is accessible via keyboard. :)

<figure>
  <picture>
    <img class="u-special-image u-bordered-image" src="/img/gifs-post-mouse/06-payment.gif" alt="An animated gif showing the payments page on Amazon's checkout" />
  </picture>
  <figcaption>
  </figcaption>
</figure>

## Step 7 - Review and buy!

And, after a lot of `tab`'s hits, we finally arrive in the last page of the checkout, using only the keyboard. In this step we could select the quantity, the select component was operable via keyboard too.

<figure>
  <picture>
    <img class="u-special-image u-bordered-image" src="/img/gifs-post-mouse/07-review-order.gif" alt="Animated gif showing the last step of Amazon's checkout" />
  </picture>
  <figcaption>
  </figcaption>
</figure>

## Mission accomplished

Ok, answering the post's title; **Can you buy a mouse without a mouse?** The answer is **YES**, you can!

<figure>
  <picture>
    <img class="u-special-image u-bordered-image" src="/img/gifs-post-mouse/08-success.gif" alt="" />
  </picture>
  <figcaption>
    We did it!
  </figcaption>
</figure>

The Amazon's website respect the [operable principle](https://webaim.org/articles/pour/operable), which is one of the four Web Accessibility principles, I strongly encourage everyone to learn more about the four principles, [POUR (Perceivable, Operable, Understandable, Robust)](https://webaim.org/articles/pour/).

As I said in the beginning of this post, not all disabilities are permanent, in my case, I had a situational disability, my mouse weren't working.

Of course we are talking about Amazon, a huge company with infinity money, but that's not an excuse, there are a lot of other huge and small companies out there that aren't paying attention to Web Accessibility. It's our duty as developers, designers, (everyone really) to [report issues](https://issues.a11y.rocks/) and to spread the importance of a inclusive Web.

## Cancelling the order

Speaking of not working, you not gonna believe, but my mouse is working normally now, how come? Well, I have no clue, but let's repeat the process and try to cancel my order.

<figure>
  <picture>
    <img class="u-special-image u-bordered-image" src="/img/gifs-post-mouse/09-cancel.gif" alt="" />
  </picture>
  <figcaption>
  </figcaption>
</figure>

Unsurprisingly, it was possible. :)

> Disclaimer: This post is not endorsed by Amazon, Logitech or any other brand that may appear in the images above.
