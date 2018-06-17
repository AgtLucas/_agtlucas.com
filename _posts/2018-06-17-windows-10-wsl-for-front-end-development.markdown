---
layout: post
title:  "Using Windows 10 + WSL for Front-End Development"
description: "Well, why not?"
date: 2018-06-17 09:00:00 +0100
categories: blog
comments: true
---

Since the past few weeks I've been using Windows 10 + [WSL (Windows Subsystem for Linux)](https://docs.microsoft.com/en-us/windows/wsl/about) for Front-End Development and so far the experience has been quite pleasant. It seems that more and more developers are migrating from macOS to Windows recently, mainly because tons of issues with the last version of MacBook Pro, if you are on Twitter, you will probably see someone complaining about something with their Mac. Well, lucky I'm not one of those people, I just want to try a different OS experience.

I've been a macOS user since earlier 2012, when I officially started my career as developer. I still own a MacBook Pro and I have nothing to complain, Apple OS ecosystem it is still the best for my use, I still use it everyday at work, but this year I bought a desktop and now I have Windows 10 and Ubuntu at home as well. The last Windows I've used was Windows 7 in the end of 2011, so for me Windows 10 it's quite an improvement in a lot of ways.

## WSL (Windows Subsystem for Linux)

A few days ago, I was at [JSConf EU](https://2018.jsconf.eu/) where there was a Microsoft booth with some Surface machines, it was the first time I saw WSL in practice.

So, what's exactly WSL?

> The Windows Subsystem for Linux lets developers run Linux environments -- including most command-line tools, utilities, and applications -- directly on Windows, unmodified, without the overhead of a virtual machine.

In a more practical example, we can install WSL and then install Git, NodeJS, Ruby, [insert-other-cool-thing-here] that usually would work better on a Linux environment.

## Installing WSL

This assume that you are using Windows 10 (I'm using Windows 10 Home, you don't need the Pro version).

The first thing we need to do is to enable WSL feature. Open **PowerShell** as admin and execute the following command:

```bash
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux
```

Then restart your computer.

Now, you need to go over Microsoft Store and download your Linux distro of choice. I'm using Ubuntu, but you can also try Debian, Kali, etc.

<figure>
  <picture>
    <img class="u-special-image" src="/img/microsoft-store-linux-showcase.png" alt="Microsoft Store search results for Linux" />
  </picture>
  <figcaption>
    I've never thought that I would see this in my life
  </figcaption>
</figure>

After installing your distro of choice, you will have access to an app with the same name of your distro, basically this app is a bash terminal where you can run all your commands and install all the things! :)

## Installing a better terminal, Hyper

Well, I'm not a Hyper user on macOS, but as Windows doesn't have iTerm 2, I also installed [Hyper terminal](https://hyper.is/), which is way better than the default bash terminal in my opinion.

After installing Hyper, you might want to set Hyper to automagically open in bash. To do so, open Hyper config file by pressing `CTRL + ,` search for the `shell` property and add this line to it: `C:\\Windows\\System32\\bash.exe`.

## Other things

Now you might want to install NodeJS, Git, etc. The process is basically the same as installing it on Linux, so if you are using Ubuntu, just `apt-get` or `curl`, check the current recommended way of installing these tools in their official documentation.

One important thing to note here, is the way WSL maps your files, when you open your bash and type `pwd` you will see something like: `/mnt/c/Users/<YourUsernameHere>`. This maps to `C:\Users\<YourUsernameHere>` on Windows side, that means if you create a directory in `Projects` in `/mnt/c/Users/<YourUsernameHere>` it will maps to `C:\Users\<YourUsernameHere>\Projects`. Knowing that, you can open the directory and files with Windows apps normally as you would do.

## Finishing up

So far, so good, I've been using WSL for almost 2 weeks now, coding a side project and I didn't face any problems whatsoever.

I do miss some things from macOS, such as better font rendering and of course, apps, lots of apps that I use on macOS they are simply not on Windows and their alternatives don't bring my attention. I miss other things from MacBook itself, like its Trackpad, retina display, but those are hardware details.

That's all!

PS: BTW, this post was created on Windows 10 + WSL

![](/img/cat-trex.gif)

## References:

* [Windows Subsystem for Linux Documentation](https://docs.microsoft.com/en-us/windows/wsl/about)
* [Lloyd Stubber WSL setup](https://github.com/lloydstubber/my-wsl-setup)
* [Webdev on Windows with WSL and VS Code](https://daverupert.com/2018/04/developing-on-windows-with-wsl-and-visual-studio-code/)
