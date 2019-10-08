---
layout: default
title: Brian Yeung
things:
  - size: normal
    title: Zhed Solver
    desc: Visual memoized solver for zhed puzzle game
    img: images/zhed.jpg
  - size: large
    title: Auth CRUD Website
    desc: Visual memoized solver for zhed puzzle game
    img: images/profile.png
  - size: normal
    title: Zhed Solver
    desc: Visual memoized solver for zhed puzzle game
    img: images/profile.png
  - size: small
    title: Date Selector
    desc: Chrome extension
    img: images/profile.png
  - size: small
    title: Zhed Solver
    desc: Visual memoized solver for zhed puzzle game
    img: images/profile.png
  - size: large
    title: Mobile Game
    desc: Visual memoized solver for zhed puzzle game
    img: images/profile.png
  - size: normal
    title: Zhed Solver
    desc: Visual memoized solver for zhed puzzle game
    img: images/profile.png
  - size: small
    title: Zhed Solver
    desc: Visual memoized solver for zhed puzzle game
    img: images/profile.png
  - size: normal
    title: Zhed Solver
    desc: Visual memoized solver for zhed puzzle game
    img: images/profile.png
  - size: small
    title: Zhed Solver
    desc: Visual memoized solver for zhed puzzle game
    img: images/profile.png
  - size: small
    title: Zhed Solver
    desc: Visual memoized solver for zhed puzzle game
    img: images/profile.png
  - size: normal
    title: Zhed Solver
    desc: Visual memoized solver for zhed puzzle game
    img: images/profile.png
  - size: small
    title: Zhed Solver
    desc: Visual memoized solver for zhed puzzle game
    img: images/profile.png
  - size: small
    title: Zhed Solver
    desc: Visual memoized solver for zhed puzzle game
    img: images/profile.png
  - size: small
    title: Zhed Solver
    desc: Visual memoized solver for zhed puzzle game
    img: images/profile.png
  - size: small
    title: Zhed Solver
    desc: Visual memoized solver for zhed puzzle game
    img: images/profile.png
  - size: small
    title: Zhed Solver
    desc: Visual memoized solver for zhed puzzle game
    img: images/profile.png
  - size: small
    title: Zhed Solver
    desc: Visual memoized solver for zhed puzzle game
    img: images/profile.png
---
<div style="max-width: 1000px;
  margin: auto;
  padding: 10px;">

{% include header.html %}

<!-- things -->
<div style="padding-top: 20px">
  <div class="thing-container">
    {% for thing in page.things %}
    <div class="item {{thing.size}}">
      <div class="thing-text">
        <div class="thing-title">{{thing.title}}</div>
        <br />
        <div class="thing-desc">{{thing.desc}}</div>
      </div>
      <img class="thing-img" src="{{thing.img}}">
    </div>
    {% endfor %}
  </div>
</div>

<!-- socials on the side like bc -->

</div>
