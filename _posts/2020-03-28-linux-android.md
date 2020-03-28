---
layout: single
classes: wide
title: 루팅된 안드로이드 기기를 리눅스 서버로 사용하기
categories:
- Linux
tags:
- Linux
---

모바일 기기는 전력 소모가 적고 성능도 무난하기 때문에 소형 프로젝트를 돌릴 만한 서버로 적합하다. 루팅된 개인 모바일 안드로이드 기기를 개인 리눅스 서버로 탈바꿈하는 과정을 정리해보았다.

## Requirements

* **안드로이드 기기의 루트 권한**
* Busybox 앱 설치([#](https://play.google.com/store/apps/details?id=ru.meefik.busybox&hl=en))
* Linux Deploy 앱 설치([#](https://play.google.com/store/apps/details?id=ru.meefik.linuxdeploy&hl=en))

## Busybox 설치

<div style="text-align: center">
<img src= "{{site.url}}{{site.baseurl}}/assets/img/linux_deploy/busybox.png" width="50%">
<figcaption> <br>Figure 1. Busybox 설치</figcaption>
</div>

busybox는 리눅스에서 ls, cp 등 자주 사용하는 명령어들만 모아놓은 상자라고 볼 수 있다. 안드로이드 기본 커널에서 제공하는 명령어가 제한적이기 때문에 서버로 사용할 배포판 리눅스를 설치하기 앞서 busybox를 설치해주어야 한다. 해당 앱을 열고 설치를 누르고 루트 권한을 허용해주면 알아서 설치해준다.



## Linux Deploy 설정

deploy 앱을 열어 리눅스를 설치하기 전에 기본적인 설정들을 하자.

<div style="text-align: center">
<img src= "{{site.url}}{{site.baseurl}}/assets/img/linux_deploy/linux_deploy_with_number.png" width="50%">
<br><br><figcaption> Figure 2. Linux Deploy 설정</figcaption>
</div>

왼쪽 메뉴(1)를 열어 설정에서

* Wakelock 체크 : 기기를 잠금시켰을 때 안드로이드에서 전력 소모를 막기 위해 앱을 종료하거나 느려지게 만드는 기능을 해제한다. 서버로 사용할 목적이기 때문에 필수.
* 자동시작 체크 : 안정정인 기기면 상관없겠지만, 필자의 기기는 가끔씩 아무 이유없이 재부팅된다. 부팅하고 알아서 리눅스 서버가 켜지도록 하는 설정이다.

오른쪽 아래에 속성 아이콘(2)을 눌러서

* 배포에서 리눅스 배포판 선택 : Ubuntu
* 사용자 이름, 비밀번호 설정 : 앞으로 이 글에서 `{id}`, `{passwd}`로 대체할 것이다.
* 지역화 : en_US.UTF-8
* SSH 활성화 : 포트도 설정하고 싶다면 바꿔주자. 이 글에서 `{port}`로 대체한다. 기본적으로는 22를 사용한다.

이제 다시 처음 화면으로 돌아가서 오른쪽 위에 메뉴(3)를 열어 설치를 누르면 된다. 꽤 오래 걸리니 조급해하지 말고 밖에 나가서 밀린 설거지나 하고 돌아오자.

```
<<<deploy
```

이렇게 끝나면 설치가 완료되었다는 뜻이다.



## SSH 연결

이제 START 버튼을 눌러 서버를 가동해주자. 화면 위쪽에 있는 아이피를 확인하고 이를 `{ip}`로 부르겠다. `192.168.0.4` 이런 형태일 것이다. 위에서 설정한 `{id}`, `{passwd}`도 여기서 사용된다.

Mac이나 Linux같이 shell이 제공된다면 `ssh {id}@{ip}`를, ssh 포트를 따로 설정했다면 `ssh {id}@{ip} -p {port}`를 shell에서 입력하면 연결이 된다.

Windows라면 ssh에 접속하는 클라이언트를 사용한다. 필자는 [iPutty](https://github.com/iPuTTY/iPuTTY/releases)를 사용중이다. 호스트 이름에 `{id}@{ip}`를 입력하고 포트도 바꿔놨다면 그 옆에 입력한다. 이제 "열기"를 누르면 쉘이 켜진다.

(별다른 설정을 안해놨다면 같은 네트워크에 접속되어있을 때만 연결이 가능하다)

```
Using username "{id}",
{id}@{ip}'s password:
```

이제 {passwd}를 입력하면 로그인이 되면서 서버 쉘을 사용할 수 있다.

```
Welcome to Ubuntu 18.04 LTS (GNU/Linux 3.10.49-g5ae7f00 aarch64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage

Ubuntu 18.04 LTS [running via Linux Deploy]
```

