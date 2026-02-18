---
slug: docker-magic
title: "docker isn't magic: it isn't a virtual machine either"
authors: ryan
date: 2021-03-22
---

Docker is the most popular engine for running Linux containers which are an increasingly popular way to deploy applications. Many people use containers but fewer people know what a container actually does. I hope you enjoy this short talk I gave to the [Linux and Unix Users Group at Virginia Tech](https://vtluug.org) where I overview what actually happens when you type `docker run`.

<!-- truncate -->

[Click here to watch the talk](https://www.youtube.com/watch?v=a6Hb8mWKLZY)

[![](https://img.youtube.com/vi/a6Hb8mWKLZY/0.jpg)](https://www.youtube.com/watch?v=a6Hb8mWKLZY)

**A few key points from the talk:**

- Docker is **NOT** a hypervisor
  - Rather, Docker allows you to isolate a process at multiple levels through namespaces
    - **mnt**: filesystem
    - **pid**: process
    - **network**: isolated network stack
    - **user**: allows non-root on host to be mapped to root in container
    - **uts**: dedicated hostname
    - **ipc**: dedicated memory

