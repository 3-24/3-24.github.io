---
title: 블로그 구현 로그
date: 2019-03-25 19:20:30
categories:
- 공지사항
tags:
- 블로그
- 개발
---

#### 190115

* Hexo 기반의 블로그입니다. 현재 적용하고 있는 테마는 [Tranquilpeak](https://github.com/LouisBarranqueiro/hexo-theme-tranquilpeak)입니다.

* Mathjax 기능을 지원하기 위해 https://hyeshinoh.github.io/2018/10/24/hexo_mathjax_00/ 를 참고해서 설정했습니다.

* 기본 폰트를 변경하기 위해

  http://blog.lattecom.xyz/2016/05/08/tranquilpeak-theme-web-font/

  https://taetaetae.github.io/2017/08/27/hexo-themes-tranquilpeak/

  를 따라갔습니다. (두 글 다 필요합니다)

* 프로필과 사이드바를 개인화customization했습니다.

* Disqus로 댓글이 가능하게 만들었습니다.

#### 190117

* https://futurecreator.github.io/2016/06/23/search-engine-optimization-hexo-plugins/ 를 참고하여 검색 최적화 설정을 했습니다. 사이트맵도 자동으로 만들어주고 좋은 기능이 많네요!

#### 190325

* Algolia Search를 적용했습니다. 별로 만족스럽지는 않아서 파싱 npm 패키지를 손봐야할 것 같습니다.
* 도메인을 하나 추가했습니다. 이제 [youngseok.me](www.youngseok.me)로도 들어올 수 있습니다.

#### Plan

* Algolia 패키지 수정하기
* MathJax 가로줄이 잘리는 문제 해결하기: 모바일에서 보면 간혹 긴 수식이 잘리는 문제가 있습니다.