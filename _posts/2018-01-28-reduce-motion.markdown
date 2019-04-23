---
layout: post
title:  "Detect Reduce Motion on the Web and iOS"
description: "Making accessible applications for people with vestibular disorders"
date:   2018-01-28 20:00:00 +0100
categories: blog
---

Have you ever felt nauseous or dizzy while navigating through a website or using an app with too much aggressive animation, or parallax effects? Well, maybe you suffer from a vestibular disorder...

## What is a Vestibular Disorder?

Caused by disease or injury damages in the inner ear, vestibular disorders affects our balance and visual perception, making simple tasks like walking a very arduous one. in the United States, approximately 69 million Americans have experienced some form of vestibular dysfunction.

For more information about vestibular disorders, check [vestibular.org](http://vestibular.org/understanding-vestibular-disorder).

## Reduce motion

Since 2013, Apple allows users to disable and/or reduce animations and motions in both iOS and macOS. We, as developers, should respect our users preferences, we must detect those preferences and serve a different approach for that parallax or that animation effect, or even just disable that, because most of the time, those things aren't useful anyway.

So, if you are using iOS, you can enable `Reduce Motion` by going to Settings > General > Accessibility and tap the slider for Reduce Motion. [You can find more information on the Apple's website.](https://support.apple.com/en-us/HT202655)

On macOS, choose Apple menu > System Preferences, click Accessibility, click Display, then select “Reduce motion.”

## Detect Reduce Motion on iOS

On iOS, we can use `UIAccessibilityIsReduceMotionEnabled` function, which returns true if a user has the reduced motion enabled. You can find more information in the [UIKit documentation](https://developer.apple.com/documentation/uikit/1615133-uiaccessibilityisreducemotionena).

```swift
if UIAccessibilityIsReduceMotionEnabled() == true {
  // Your reduced motion code here
}
```

## Detect Reduce Motion on the Web

Since Safari 10.1, we can detect the Reduce Motion option by using the [Reduce Motion CSS media query](https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-motion). For a full explanation, check [this awesome post on WebKit's blog.](https://webkit.org/blog/7551/responsive-design-for-motion/).

```css
@media (prefers-reduced-motion: reduce) {
  /* Your reduced motion styles */
}

/* Or */
@media (prefers-reduced-motion) {
  /* Your reduced motion styles */
}
```

## Wrapping up

Animations and motions are cool and stuff, but please, do not exaggerate! Think about all the options and consider always the content first, the actual information that the user needs.

Some cool resources:

* [Designing Safer Web Animation For Motion Sensitivity](http://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity).
* [Balance Awareness Week: iOS8 & vestibular disorders](http://simplyaccessible.com/article/balance-awareness/).
