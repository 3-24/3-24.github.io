---
layout: single
title: Python을 이용한 백준 소스 제출 봇 제작기
classes: wide
use_math: true
cataegories:
- 개발
tags:
- 웹
- requests
toc: true
---



## Requirements

제작 언어는 Python 3를 기본으로 합니다.

Python을 이용해 웹에 로그인이나 소스를 제출하기 위해서 requests 패키지가, 페이지 내용을 효율적으로 읽기 위한 BeautifulSoup4 패키지가 필요합니다. 해당 패키지가 없다면 (Windows 기준) cmd에서 다음을 입력하여 설치할 수 있습니다.

```text
pip install requests
pip install bs4
```

개발에 이해를 돕는 용도로 웹 디버깅 소프트웨어인 [Fiddler](https://www.google.com/search?q=Fiddler&oq=Fiddler&aqs=chrome..69i57j69i60l3.2554j0j7&sourceid=chrome&ie=UTF-8)를 사용하면 더 좋습니다. 필수사항은 아닙니다.



## 로그인

### 로그인하기

백준의 로그인은 가장 기본적인 형태입니다. Fiddler를 띄우고 백준 로그인을 해보면 다음과 같은 정보를 확인할 수 있습니다.

<div style="text-align: center">
<img src= "{{site.url}}{{site.baseurl}}/assets/img/fiddler01.png" width="100%">
<figcaption> Figure 1. 로그인 리퀘스트</figcaption>
</div>

`login_user_id`에 아이디를, `login_password`에 비밀번호를 입력하고 <https://acmicpc.net/signin>으로 전송하는군요. 이 과정을 Python으로 작성해보면 다음과 같습니다:

```python
import requests

LOGIN_INFO = {"login_user_id":"(아이디)", "login_password":"(비밀번호)"}
boj_url = "https://www.acmicpc.net/"

with requests.Session() as sess:
    sess.post(boj_url+'signin',data=LOGIN_INFO)
```

requests 세션을 하나 만들어놓고 로그인할 때 정보를 보내는 주소에 로그인 정보를 보내면 됩니다.

### 로그인 확인하기(optional)

로그인이 제대로 되었는지를 확인하려면 로그인하기 전과 후에 생기는 차이를 검사해야겠죠? 백준의 경우 쿠키에 로그인 정보가 기록이 되지 않기 때문에 사이트에서 직접 찾아야 합니다.

<div style="text-align: center">
<img src= "{{site.url}}{{site.baseurl}}/assets/img/chrome01.png" width="100%">
<figcaption> Figure 2. 로그인 후 페이지 소스</figcaption>
</div>

개발자도구로 확인해보니 a태그의 username class에 제 아이디가 입력되어있네요. 이걸 활용해봅시다. 크롬 콘솔에서 해당 객체 이름을 검색해보면 로그인한 후는

```javascript
> var d = $('a.username')[0]
undefined
> d
<a href="/user/uncertainty" class="username">uncertainty</a>
```

인데 로그인하기 전으로 돌아가서 확인하면

```javascript
> d
undefined
```

이므로 username은 좋은 로그인 식별자가 된다는 것을 알 수 있습니다! `a.username`을 Python으로 읽어서 None인지 아닌지만 확인하면 됩니다.

```python
import requests
from bs4 import BeautifulSoup as bs

LOGIN_INFO = {"login_user_id":"(아이디)", "login_password":"(비밀번호)"}
boj_url = "https://www.acmicpc.net/"

with requests.Session() as sess:
    sess.post(boj_url+'signin',data=LOGIN_INFO)
    soup = bs(sess.get(boj_url).text, 'html.parser')
    if soup.find('a', {'class': 'username'}) is None:
        print("Invalid login info")
        exit(1)
```

백준 메인주소인 acmicpc.net을 읽은 후 BeautifulSoup의 html 파서로 이렇게 확인할 수 있습니다. 로그인은 여기까지 하면 되겠군요.

## 소스 제출

### 테스트 소스 준비하기

```c++
#include <stdio.h>

int main(){
  int a,b;
  scanf("%d %d",&a,&b);
  printf("%d",a-b);
}
```

↑ 예전에 짜놓은 1001번 C++ (C) 소스

먼저 자동으로 제출할 소스를 준비해놓아야 합니다. 테스트용으로 저는 [1001번](https://www.acmicpc.net/problem/1001) 소스를 Python 소스와 같은 경로에 저장해놓았습니다.

```
BOJ_bot
└─1001.cpp
└─main.py
```

그리고 Python main.py에서 문제 번호를 저장하고 소스도 미리 읽어놓는 코드를 로그인 전에 넣어놓습니다.

```python
import requests
from bs4 import BeautifulSoup as bs

LOGIN_INFO = {"login_user_id":"(아이디)", "login_password":"(비밀번호)"}
boj_url = "https://www.acmicpc.net/"

problem_id = 1001
language = "C++14"
with open("1001.cpp", 'r') as f:
    code = f.read()

with requests.Session() as sess:
    sess.post(boj_url+'signin',data=LOGIN_INFO)
    soup = bs(sess.get(boj_url).text, 'html.parser')
    if soup.find('a', {'class': 'username'}) is None:
        print("Invalid login info")
        exit(1)
```

### 테스트 소스 제출해보기

소스를 제출할 때 패킷을 확인해볼까요?

<div style="text-align: center">
<img src= "{{site.url}}{{site.baseurl}}/assets/img/chrome03.png" width="100%">
<figcaption> Figure 3. 소스 제출 화면</figcaption>
</div>

<div style="text-align: center">
<img src= "{{site.url}}{{site.baseurl}}/assets/img/fiddler02.png" width="100%">
<figcaption> Figure 4. 소스 제출 리퀘스트</figcaption>
</div>

눈에 띄는 것은 `problem_id`는 문제번호, `language`는 제가 선택한 언어인 C++14에 해당하는 번호, `code_open`은 코드 공개여부(저는 공개가 기본 설정입니다), `source`는 소스 전문인건 알겠는데, `csrf_key`는 또 뭐람.. 킁 보안토큰같은데..

[https://stackoverflow.com/questions/5207160/what-is-a-csrf-token-what-is-its-importance-and-how-does-it-work](https://stackoverflow.com/questions/5207160/what-is-a-csrf-token-what-is-its-importance-and-how-does-it-work)

여기 좋은 설명이 있는 것 같아서 대체합니다. 소스 제출의 부정사용 방지로 보이네요. 그러니까 이 글의 링크 중 하나에 백준에 틀린 소스를 제출하는 것을 심어놓으면 여러분의 백준 정답률을 떨구는 효과를 기대할 수 있습니다(!!). 그런거 막아주는 거에요.

<div style="text-align: center">
<img src= "{{site.url}}{{site.baseurl}}/assets/img/chrome02.png" width="100%">
<figcaption> Figure 5. csrf_key의 발견</figcaption>
</div>

`csrf_key`는 제출 사이트의 html을 확인해보니까 hidden으로 감춰져있던 것이 모습을 드러내줍니다. 이걸 받아서 쓰면 되겠군요! input 태그 안에서 name으로 찾아주면 됩니다. 

```python
	try:
		key = soup.find('input', {'name': 'csrf_key'})['value']
	except TypeError:
		print("Wrong problem number")
		exit(1)
```

`language`의 번호도 언어 선택창을 html로 읽어보면 확인할 수 있습니다.

```html
<select id="language" name="language" data-placeholder="언어를 선택해 주세요." class="language-select col-md-2 chosen-select" data-no_results_text="없는 언어 입니다." style="display: none;">
	<option value="88" data-mime="text/x-c++src">C++14</option>
	<option value="3" data-mime="text/x-java">Java</option>
	<option value="28" data-mime="text/x-python" selected="">Python 3</option>
	<option value="75" data-mime="text/x-csrc">C11</option>
	<option value="73" data-mime="text/x-python">PyPy3</option>
	<option value="0" data-mime="text/x-csrc">C</option>
	<option value="1" data-mime="text/x-c++src">C++</option>
	<option value="49" data-mime="text/x-c++src">C++11</option>
	<option value="84" data-mime="text/x-c++src">C++17</option>
	<option value="91" data-mime="text/x-java">Java (OpenJDK)</option>
	<option value="93" data-mime="text/x-java">Java 11</option>
	<option value="6" data-mime="text/x-python">Python 2</option>
	<option value="32" data-mime="text/x-python">PyPy2</option>
	<option value="68" data-mime="text/x-ruby">Ruby 2.5</option>
	<option value="69" data-mime="text/x-kotlin">Kotlin (JVM)</option>
	<option value="92" data-mime="text/x-kotlin">Kotlin (Native)</option>
	<option value="74" data-mime="text/x-swift">Swift</option>
	<option value="58" data-mime="text/plain">Text</option>
	<option value="62" data-mime="text/x-csharp">C# 6.0</option>
	<option value="17" data-mime="text/javascript">node.js</option>
	<option value="12" data-mime="text/x-go">Go</option>
	<option value="29" data-mime="text/x-d">D</option>
	<option value="37" data-mime="text/x-fsharp">F#</option>
	<option value="7" data-mime="text/x-php">PHP</option>
	<option value="44" data-mime="text/plain">Rust</option>
	<option value="2" data-mime="text/x-pascal">Pascal</option>
	<option value="16" data-mime="text/x-lua">Lua</option>
	<option value="8" data-mime="text/x-perl">Perl</option>
	<option value="72" data-mime="text/x-rsrc">R</option>
	<option value="10" data-mime="text/x-objectivec">Objective-C</option>
	<option value="64" data-mime="text/x-objectivec">Objective-C++</option>
	<option value="59" data-mime="text/x-csrc">C (Clang)</option>
	<option value="60" data-mime="text/x-c++src">C++ (Clang)</option>
	<option value="66" data-mime="text/x-c++src">C++11 (Clang)</option>
	<option value="67" data-mime="text/x-c++src">C++14 (Clang)</option>
	<option value="77" data-mime="text/x-csrc">C11 (Clang)</option>
	<option value="85" data-mime="text/x-c++src">C++17 (Clang)</option>
	<option value="79" data-mime="text/plain">Golfscript</option>
	<option value="27" data-mime="text/plain">Assembly (32bit)</option>
	<option value="87" data-mime="text/plain">Assembly (64bit)</option>
	<option value="63" data-mime="text/x-vb">VB.NET 4.0</option>
	<option value="5" data-mime="text/x-sh">Bash</option>
	<option value="13" data-mime="text/x-fortran">Fortran</option>
	<option value="14" data-mime="text/x-scheme">Scheme</option>
	<option value="19" data-mime="text/plain">Ada</option>
	<option value="21" data-mime="text/plain">awk</option>
	<option value="22" data-mime="text/x-ocaml">OCaml</option>
	<option value="23" data-mime="text/x-brainfuck">Brainfuck</option>
	<option value="24" data-mime="text/plain">Whitespace</option>
	<option value="26" data-mime="text/x-tcl">Tcl</option>
	<option value="34" data-mime="text/javascript">Rhino</option>
	<option value="35" data-mime="text/x-cobol">Cobol</option>
	<option value="41" data-mime="text/x-c++src">Pike</option>
	<option value="43" data-mime="text/plain">sed</option>
	<option value="46" data-mime="text/plain">Boo</option>
	<option value="47" data-mime="text/plain">Intercal</option>
	<option value="48" data-mime="text/plain">bc</option>
	<option value="53" data-mime="text/plain">Nemerle</option>
	<option value="54" data-mime="text/plain">Cobra</option>
	<option value="70" data-mime="text/plain">Algol 68</option>
	<option value="71" data-mime="text/plain">Befunge</option>
	<option value="81" data-mime="text/x-haxe">Haxe</option>
	<option value="82" data-mime="text/plain">LOLCODE</option>
	<option value="83" data-mime="text/plain">아희</option>
</select>
```

여기서 필요한 것으로 dictionary를 만들어 관리하면 되겠습니다. 저는 C++14와 Python 3만 사용하니 그 두 개만 만들었습니다.

```python
LANG = {"C++14":88, "Python 3":28}
```

지금까지 모은 제출 정보들을 dictionary로 모아서 제출하면 됩니다. `code_open`의 onlyaccepted는 '맞았을 때만 공개' 옵션입니다. 위 패킷에서 읽은 주소 형태가 /submit/1001 이었죠? 그 주소 그대로 세션의 post에 사용하면 됩니다.

```python
    if language not in LANG:
        print("Invalid language")
        exit(1)

    data = {
        'problem_id': problem_id,
        'source': code,
        'language': LANG[language],
        'code_open': 'onlyaccepted',
        'csrf_key': key
    }

    sess.post(boj_url + '/submit/' + str(problem_id), data=data)
```

지금까지 작성한 Python 소스를 정리하면 다음과 같습니다.

```python
import requests
from bs4 import BeautifulSoup as bs

LOGIN_INFO = {"login_user_id":"(아이디)", "login_password":"(비밀번호)"}
boj_url = "https://www.acmicpc.net/"
LANG = {"C++14":88, "Python 3":28}

problem_id = 1001
language = "C++14"
with open("1001.cpp", 'r') as f:
    code = f.read()

with requests.Session() as sess:
    sess.post(boj_url+'signin',data=LOGIN_INFO)

    soup = bs(sess.get(boj_url).text, 'html.parser')
    if soup.find('a', {'class': 'username'}) is None:
        print("invalid login info")
        exit(1)

    soup = bs(sess.get(boj_url + 'submit/' + str(problem_id)).text, 'html.parser')

    try:
        key = soup.find('input', {'name': 'csrf_key'})['value']
    except TypeError:
        print("Wrong problem number")
        exit(1)

    if language not in LANG:
        print("Invalid language")
        exit(1)

    data = {
        'problem_id': problem_id,
        'source': code,
        'language': LANG[language],
        'code_open': 'onlyaccepted',
        'csrf_key': key
    }

    sess.post(boj_url + '/submit/' + str(problem_id), data=data)
```

## 결과 확인

이제 막바지입니다. 제출할 일도 없어서 쉬운 것만 남았네요. 어떻게 '채점이 종료되었다'는 것을 확인할 것인지를 생각해보아야 합니다. 관찰이 필요한 부분이죠.

먼저 제출하고 채점을 기다릴 때를 확인해보았습니다.

<div style="text-align: center">
<img src= "{{site.url}}{{site.baseurl}}/assets/img/chrome04.png" width="80%">
<figcaption> Figure 6. 채점을 기다리는 중</figcaption>
</div>

저 '기다리는 중'이라는 상태 메시지의 html은 다음과 같습니다:

```html
<span class="result-text">
    <span class="result-wait">기다리는 중</span>
</span>
```

채점 중일 때는 다음과 같습니다:

<div style="text-align: center">
<img src= "{{site.url}}{{site.baseurl}}/assets/img/chrome06.png" width="80%">
<figcaption> Figure 7. 채점 중</figcaption>
</div>

```html
<span class="result-text">
    <span class="result-judging">채점 중 (6%, 11초)</span>
</span>
```

채점이 완료되었을 때는 어떨까요?

<div style="text-align: center">
<img src= "{{site.url}}{{site.baseurl}}/assets/img/chrome05.png" width="80%">
<figcaption> Figure 8. 채점 완료!</figcaption>
</div>

```html
<span class="result-text">
    <span class="result-ac">맞았습니다!!</span>
</span>
```
class의 이름이 바뀌면서 채점 결과가 들어갑니다. 즉, "result-ac"가 None이면 아직 채점이 중이라는 뜻이에요. 이를 이용해 채점이 완료되었는지를 식별할 수 있습니다. 이를 이용해 while문을 탈출해주면 되겠습니다. 콘솔에 한 줄로 출력하기 위해 `\r`을 적극적으로 사용했습니다.

```python
    while True:
        url = boj_url + '/status?from_mine=1&problem_id=' + str(problem_id) + '&user_id' + LOGIN_INFO["login_user_id"]
        soup = bs(sess.get(url).text, 'html.parser')
        status = soup.find('span', {'class': 'result-text'}).find('span').string.strip()
        result = soup.find('span', {'class': 'result-ac'})
        if result is not None:
            break
        print('\r                      ',end='')
        print('\r%s' % status, end='')
    
    print()
```

## 마무리

```python
import requests
from bs4 import BeautifulSoup as bs

LOGIN_INFO = {"login_user_id":"(아이디)", "login_password":"(비밀번호)"}
boj_url = "https://www.acmicpc.net/"
LANG = {"C++14":88, "Python 3":28}

problem_id = 1001
language = "C++14"
with open("1001.cpp", 'r') as f:
    code = f.read()

with requests.Session() as sess:
    sess.post(boj_url+'signin',data=LOGIN_INFO)

    soup = bs(sess.get(boj_url).text, 'html.parser')
    if soup.find('a', {'class': 'username'}) is None:
        print("invalid login info")
        exit(1)

    soup = bs(sess.get(boj_url + 'submit/' + str(problem_id)).text, 'html.parser')

    try:
        key = soup.find('input', {'name': 'csrf_key'})['value']
    except TypeError:
        print("Wrong problem number")
        exit(1)

    if language not in LANG:
        print("Invalid language")
        exit(1)

    data = {
        'problem_id': problem_id,
        'source': code,
        'language': LANG[language],
        'code_open': 'onlyaccepted',
        'csrf_key': key
    }

    sess.post(boj_url + '/submit/' + str(problem_id), data=data)

    while True:
        url = boj_url + '/status?from_mine=1&problem_id=' + str(problem_id) + '&user_id' + LOGIN_INFO["login_user_id"]
        soup = bs(sess.get(url).text, 'html.parser')
        status = soup.find('span', {'class': 'result-text'}).find('span').string.strip()
        result = soup.find('span', {'class': 'result-ac'})
        print('\r                      ',end='')
        print('\r%s' % status, end='')
        if result is not None:
            break
    
    print()

```

지금까지 작성한 코드 전문입니다. 저는 이를 이용해 github 자동 저장이나, 운에 의지해야 하는 일부 문제들에 접근하려고 합니다. 많은 분에게 도움이 되었으면 좋겠네요.