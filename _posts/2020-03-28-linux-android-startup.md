---
layout: single
classes: wide
title: Linux Deploy에서 부팅 시 스크립트 자동 실행하기
categories:
- Linux
tags:
- Linux
- rc.local
---


모바일 안드로이드 기기에서 돌리고 있는 리눅스 서버에서 부팅할 때 돌릴 프로그램을 자동으로 실행하면 번거롭게 부팅할 때마다 SSH로 접속해서 프로그램을 실행하는 과정을 생략할 수 있다. 

## init 설정

<div style="text-align: center">
<img src= "{{site.url}}{{site.baseurl}}/assets/img/linux-init.png" width="50%">
</div>

Linux Deploy에서 속성에 들어가 init을 활성화한다.

## rc.local에서 돌릴 스크립트 추가

SSH로 접속한 서버 쉘을 열어서 다음을 입력한다:

```text
$ cd /etc
$ mkdir rc.local
$ cd rc.local
```

(만약 이미 rc.local이 있다면 그냥 `cd /etc/rc.local`)을 하면 된다.

이제 여기서 부팅할 때 실행할 쉘 스크립트 파일을 만든다. 파일 이름 startScript는 다른 이름으로 해도 무관하다.

```text
$ sudo vim startScript
```

이 다음은 나의 예시로, 각자 원하는 목적에 맞춰서 쉘 스크립트를 입력해야 한다. 주의해야 할 점은, startScript는 부팅할 때 루트 계정으로 실행된다는 것이다. 따라서 다른 계정의 `.bashrc`에 설정해놓은 환경 변수 등도 적용이 되지 않는다. 내가 원했던 것은 `~/workspace/discordbots/run.sh`를 루트 계정이 아닌, 필요한 환경 변수들이 설정된 `youngseok` 계정으로 실행하는 것이었고 이는 다음과 같이 작성된다:

```text
#!/bin/bash
su youngseok -c 'bash /home/youngseok/workspace/discordbots/run.sh'
```

이걸 저장하고 서버를 재시작하면 스크립트에 문제가 없다면 `startScript`가 실행되는 것을 확인할 수 있다.

```text
>>> start
Check file system ... done
Mounting the container:
/ ... done
/proc ... done
/sys ... done
(생략됨)
:: Starting services:
startScript ... done
<<< start
```

