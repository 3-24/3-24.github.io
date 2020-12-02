---
layout: single
classes: wide
title: Jekyll - 올바른 RSS가 아닙니다 (네이버 서치어드바이저)
categories:
- Scribbles
tags:
---

블로그의 유입을 늘리려고 이 블로그를 네이버 서치어드바이저에 검색 등록을 하다가 [https://3-24.github.io/feed.xml](https://3-24.github.io/feed.xml)의 RSS 제출에서 올바르지 않은 RSS라고 거부당했는데 원인을 알려주지 않아서 꽤 당혹스러웠습니다.

<div align='center'>
    <img src="/assets/img/search_error.png">
    <figcaption> Figure 1. 오류 창 </figcaption>
</div>

조사해보니까 피드 파일을 생성하는 jekyll-feed 플러그인이 Atom 문법으로 feed.xml 파일을 생성하는데, 서치 어드바이저는 RSS를 요구해서 생기는 문제였습니다. Atom은 RSS보다 가지는 이점이 몇 개 존재하는 더 진보된 양식이고, 점점 Atom의 점유율이 높아지는 추세이긴 합니다만, 네이버에서 아직 지원을 하지 않는 것 같습니다. 그래서 [Jekyll Codex에 나온 RSS 피드를 수동으로 만든 방법](https://jekyllcodex.org/without-plugin/rss-feed/#)에서 feed.xml 파일 이름만 rss.xml로 살짝 바꿔서 두 가지 피드를 제공하기로 했습니다.



