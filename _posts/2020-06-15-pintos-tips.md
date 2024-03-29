---
title: PintOS를 짜면서 정리해본 팁과 설정들
categories:
- Scribbles
---


이번 학기에 운영체제 과목의 교육용 운영체제인 PintOS를 짜면서 느낀 점들과 초반 삽질을 줄일만한 팁들을 정리해보았다.

반드시 꼭 설정해야 할 중요한 알맹이들만 있지는 않고, 프로그래밍을 하다가 지쳤을 때 재미로 설정한 것들도 다수 있다.

## 1. Git

PintOS는 KAIST에서는 2인 1조로 작업하였고, 협업을 하기 위해서는 버전 관리 시스템인 **Git을 사용을 안할 수가 없었다**. 잘 안되서 예전에 짰던 코드로 돌려놓고 싶을 때도 수도 없이 많고, 병렬적으로 팀원과 다른 부분을 구현하여 나중에 합쳐야 하는 경우도 있는데 Git을 사용하면 이 작업들이 쉽게 이루어질 수 있다.

* 가장 많이 쓰는 명렁어: git commit, git push, git pull, git status
* branch 관리 : git checkout, git branch, git merge
* 기타 커밋로그 관리 : git rebase, git reset

Git 저장소로는 대중적인 Github에 비공개 레퍼지토리를 만들어서 관리하였다.

<div align="center">
<img src = "/assets/img/pintos_tips/04.png" width="100%">
    <figcaption>Figure 1. 정말로 화난다면 이런 커밋을 할 수도 있겠지만..</figcaption>
</div>

나중에 커밋로그를 읽고 팀원이 리뷰를 할 때 힘들어하지 않도록 [좋은 git 커밋 메시지를 작성하기 위한 7가지 약속](https://meetup.toast.com/posts/106)을 읽어보고 지키는 것을 추천한다. 내가 요구했던 것은 세 가지였다:

* 기본적인 커밋 메시지 convention을 지키자. 어떤 변화가 있었는지 요약을 담고, 필요에 따라 추가적인 설명을 작성해야 좋은 커밋 메시지이다.
* 커밋을 하기 전에 **최소한 컴파일은 제대로 되는지, 통과했던 테스트케이스가 실패했는지**를 반드시 확인해주자.
* 디버깅을 위해 넣은 printf, ASSERT는 미래에 사용될 일이 없다면 삭제해주자.

브랜치는 큰 변경점이 있거나 새로운 프로젝트를 시작할 때마다 만들어두면 좋다.

## 2. 에디터

<div align="center">
<img src = "/assets/img/pintos_tips/01.png" width="100%">
    <figcaption>Figure 2. Vim은 정말 좋은 에디터입니다</figcaption>
</div>

처음에는 습관대로 리눅스 쉘에서 vim을 통해 코드를 관리했지만, 운영체제와 같은 대형 프로젝트를 CLI를 고집하면서 달랑 vim을 통해 관리하는 것에는 현실적인 어려움이 있었다. 소스 파일들, 헤더 파일들, 테스트 코드, 테스트 출력, 컴파일하고 실행시킬 쉘, 디버깅을 할 쉘 등 여러 창을 띄어놓고 해야 하는 만큼 GUI의 직관성과 효율성을 무사하기 힘들다.

<div align="center">
<img src = "/assets/img/pintos_tips/02.jfif" width="100%">
    <figcaption>Figure 3. vscode로 관리할 때</figcaption>
</div>

그래서 Visual Studio Code를 제공된 개발 서버에 원격으로 연결하여 작업했는데 정말 혁명적이었다. 설정은 [Visual Studio Code - Remote Development using SSH](https://code.visualstudio.com/docs/remote/ssh)를 참고하였다. `Ctrl+P`와 같은 몇몇 자주 사용하는 단축키들을 익혀놓으면 효율이 더 올라갈 것이다.

## 3. 커뮤니케이션

온라인으로 프로젝트에 대해 이슈를 나누고 서로 피드백해줄 수단이 필요하다. 나는 COVID-19의 영향으로 모든 협업이 온라인으로 진행되었기 때문에 더 의존했던 것 같다. 내 팀은 화면 공유까지 지원하는 Discord를 사용하였다. Slack은 메시지 수 제한도 있고, 화면 공유를 지원하지 않는 것 같아서 선택하지 않았던 것 같다(사실 잘 안써봐서 모른다).

<div align="center">
<img src = "/assets/img/pintos_tips/03.png" width="100%">
    <figcaption>Figure 4. Github-Discord webhook</figcaption>
</div>

또한 Github를 사용한다면 Discord에서 웹훅을 걸 수 있다. 이 작업을 한다면 git push를 할 때마다 디스코드 채널에 자동으로 알림이 가게 된다. 같은 브랜치에서 두 팀원이 작업을 하고 있을 때 git pull을 하지 않아 충돌이 잦았는데, 이렇게 알림을 설정하면 그런 문제를 최소화할 수 있다. 각자 커밋을 할때마다 바로 리뷰를 해줄 수도 있었다. 웹훅을 설정하는 방법은 [Github Gist - Github to Discord Webhook Tutorial](https://gist.github.com/eslachance/40ac1c8232a5a019b43ee3f588d637ad)를 참고하자. Slack에도 비슷한 기능이 있던 것으로 기억한다.

## 4. 디버깅, 디버깅, 디버깅!!

사실 PintOS는 각 부분을 구현하는 데에는 그렇게 오랜 시간이 걸리지 않는다. **이 과제에서 로드의 최소 90%는 디버깅에서 나온다고 생각하면 된다.** 운영체제는 low-level이기도 하고, 많은 기능이 집약적으로 구현된 아주 복잡한 프로그램이기 때문에 특정 테스트케이스가 실패하는 이유가 어느 부분을 잘못 짜서인지 정확히 판별햐는 데에 엄청난 노력이 든다.

그래서 사용할 수 있는 디버깅 기법들을 최대한 활용할 줄 알아야 한다. 나는 처음에는 gdb를 사용하지 않고 printf와 ASSERT만을 이용하여 짰는데, 뒤로 갈수록 gdb를 사용하는 것이 필수적이었으며, 앞에서도 gdb를 쓸 줄 알았다면 얼마나 좋았을까 하는 생각이 들었다. 심지어 일부 과정에서는 printf가 프로그램의 흐름을 방해하여 정상적으로 디버깅할 수 없는 경우도 있었다.

* 디버깅의 안정성 gdb > ASSERT > printf
* 난이도: gdb << ASSRET = printf

<div align="center">
<img src = "/assets/img/pintos_tips/gdb.png" width="100%">
    <figcaption>Figure 5. gdb</figcaption>
</div>

PintOS를 gdb에 연결하는 작업은 아마 각 프로젝트 메뉴얼에 안내가 되어 있을 것이고, 이 글에서는 자주 사용하는 gdb 명령어만 간략하게 정리해보았다. 더 자세한 내용은 검색을 통해 알아보자.

* `next` : 소스 코드의 다음 줄을 실행시킨다.
* `step` : 소스 코드의 다음 명령을 실행시킨다. `next`는 함수를 한 줄로 간주하여 실행하는데, `step`은 함수 안에 있는 한 줄을 실행시킨다.
* `p (대상)`, `x (대상)` : `(대상)`은 주소 또는 변수명이 될 수 있다. 그 대상이 갖고 있는 정보를 확인할 때 사용한다. x보다는 p를 자주 사용하는 편. 어떤 방식으로, 어느 만큼 출력할지도 결정할 수 있다. 예를 들어, `x/30x 주소`는 메모리의 주소~주소+30 까지 정보를 16진수(x)로 출력할 수 있다.
* `b thread.c:170` : 이것은 한 예로, thread.c의 170번째 줄에 breakpoint를 건다는 뜻이다. `b 함수명`도 가능하다.
* `d (숫자)` : 숫자에 해당하는 breakpoint를 삭제한다.
* `c`: 계속 진행시킨다. 다음 breakpoint에 걸리거나 프로그램이 끝날 때까지 실행된다.

## 5. 어떤 자세로 임해야 하는가

1. 내가 수강한 강좌에서는 Q&A를 하기 위한 piazza가 개설되어 있었는데, 여기서 필요한 정보들을 질문하거나 찾는 것이 매우 도움이 되었다. 막히는 부분이 있으면 완전한 문장의 형태로 질문을 정리하는 과정 자체가 좋은 답변과 관계없이 중요하다고 느껴졌다.
2. 주어진 메뉴얼을 직접 이해할 때 가장 효율적이고 얻는 것도 많았다. 세세하게 짜는 과정이 묘사되고 코드까지 알려주는 자료를 구글링을 해보면 쉽게 나오지만 별로 추천하지 않는다. 표절의 우려는 물론이거니와, 능동적인 생각이 멈추고 수동적으로 자료에 끌려다니게 되기 때문이다.
3. 필요할 때마다 그림으로 코드의 흐름을 정리해보는 것이 큰 도움이 되었다. 전체적으로 어떤 과정이 어떻게 돌아가는지를 시각화하여 이해할 수 있고, 불필요한 과정을 잡아내기에도 좋았다. 좀 더 잘 전달하고 싶다면 UML 형식을 대충이라도 적용해봐도 좋다.
4. 최대한 깨끗하고 완전한, 효율적인 구현을 목표로 하자. 설계를 제대로 하지 않고 무작정 코드를 짜다가 디버깅하면 몸만 고생한다. 코드를 작성하는 시간을 최소화하고, 설계하고 구상하는 시간을 최대화하자.
5. 여럿이서 프로젝트를 진행할 때 협업과 분업이라는 두 가지 선택지가 있다. 즉, 두 명이서 각자 독립된 부분을 완성할지, 힘을 합쳐서 한 부분을 진행할지로 나뉘어진다. 전자는 짧게 보면 고효율을 보이지만 낮은 안정성으로 디버깅에 고생할 것이고, 후자는 저효율을 보이지만 코드를 짤 때마다 즉각적으로 피드백을 받기 때문에 높은 안정성으로 디버깅에 덜 허덕인다. 나는 경험적으로 후자가 더 좋은 선택이라고 본다. 내가 미처 고려하지 못한 부분을 관통하는 반짝이는 그런 아이디어가 하나라도 절실하기 때문이다.

## 마치며

PintOS는 로드가 많고 협업도 중요하기 때문에 아주 어려운 과제이다. 나도 운영체제를 들을 때 그 학기 내내 시험기간을 제외하면 대부분의 시간을 OS에 때려박았고, 밖에서도 휴대폰으로 OS 메뉴얼이나 piazza를 읽고 다녔던 것 같다. 하지만 수업에서 배운 내용을 적용했을 때 뚝딱뚝딱 돌아가는걸 보면 정말 뿌듯하기도 하고, 시스템 레벨의 이런 대형 프로젝트를 짜볼 기회가 흔하지도 않다. 지금도 주변에 OS를 짜는 지인들이 디버깅을 하는 과정을 지켜보면 PTSD가 올 것 같지만, 그만큼 배우고 얻는 것도 내가 들었던 모든 과목을 통틀어 가장 많았다고 생각한다. 운영체제를 듣는 모든 전산러들 화이팅!