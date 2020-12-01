var store = [{
        "title": "이분그래프",
        "excerpt":"1. 정의 그래프 $G = (V,E)$에 대해 다음 조건을 만족하면 이분그래프bipartite graph 라고 합니다. 공집합이 아닌 $V$의 분할partition ${V_1 ,V_2}$가 있어서 \\[E \\subseteq \\{ \\{v_1, v_2\\} : v_1 \\in V_1, v_2 \\in V_2 \\}\\\\] 이와 같은 이분그래프에 대해 추가적인 표기법으로 $G = (V_1, V_2, E)$를 사용하기도 합니다. Figure 1과 같은...","categories": ["Mathematics","Graph Theory"],
        "tags": ["이분그래프"],
        "url": "http://localhost:4000/mathematics/graph%20theory/%EC%9D%B4%EB%B6%84%EA%B7%B8%EB%9E%98%ED%94%84/",
        "teaser":null},{
        "title": "번사이드 보조정리",
        "excerpt":"이 번사이드 보조정리는 유한 대칭군 위에서 기술되어 있습니다. 0. 유한군 용어 유한 집합 $X$에 대해 $X$의 대칭군symmetric group = $S_X = { \\sigma \\in X \\times X : \\sigma \\text{ is bijective function}}$ $X$의 순열군permutation group은 대칭군의 부분군 이다. 1. 정의 $(G,\\circ,id)$를 유한 집합 $X$의 순열군으로 놓자. 그러면 다음이 성립한다:...","categories": ["Mathematics"],
        "tags": ["번사이드","유한군"],
        "url": "http://localhost:4000/mathematics/%EB%B2%88%EC%82%AC%EC%9D%B4%EB%93%9C/",
        "teaser":null},{
        "title": "카탈란 수-대각선을 넘지 않는 경우의 수",
        "excerpt":"문제 $n \\times n$ 격자에서 왼쪽 아래에서 오른쪽 위 모서리로 가는 오른쪽이나 위로 가는 이동만으로 이루어진 경로를 생각하자. 이 때 왼쪽 아래와 오른쪽 위 모서리를 연결한 대각선 위로 올라가지 않는 경로는 몇 개나 있을까? Figure 1. 대각선을 넘지 않는 경로의 예 이 조건을 만족하는 경우의 수를 카탈란 수라고 하고, $C_n$으로...","categories": ["Mathematics","Combinatorics"],
        "tags": ["카탈란"],
        "url": "http://localhost:4000/mathematics/combinatorics/%EC%B9%B4%ED%83%88%EB%9E%80%EC%88%98/",
        "teaser":null},{
        "title": "Codeforces Round #531 (Div. 3) 후기",
        "excerpt":"1. Integer Sequence Dividing https://codeforces.com/contest/1102/problem/A 처음에 임의의 원소를 받아서 차가 최소가 되도록 나눈다는 줄 알고 이상한 방향으로 고민했었습니다. 만약 그런 문제였다면 어떻게 풀어야 할 지 아직도 모르겠네요. 문제에서는 연속된 n개의 수에 대해서만 풀면 됩니다. 연속된 4개의 수가 x, x+1, x+2, x+3 이렇게 주어졌다면 A에다가 x와 x+3을 넣고 B에다가 x+1과 x+2를...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/CF-Round-531-Div-3/",
        "teaser":null},{
        "title": "Codeforces Round #532 (Div. 2) 후기",
        "excerpt":"1. Roman and Browser https://codeforces.com/contest/1100/problem/A b를 0부터 k-1까지 바꿔가면서 비교를 통해 최대 절대값을 찾아내면 됩니다. 직접 b+ik만 제외하면서 더하는 것이 쉽지 않기 때문에 전체 합을 구해놓고 b+ik의 원소를 빼는 형태로 구현했습니다. #include &lt;bits/stdc++.h&gt; using namespace std; int main() { ios_base::sync_with_stdio(false); cin.tie(NULL); int n,k; cin &gt;&gt; n &gt;&gt; k; int Data[n]={0,},...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/CF-Round-532-DIv-2/",
        "teaser":null},{
        "title": "Knuth Optimization",
        "excerpt":"주어진 실수 $a_{i,j}(1 \\le i \\le j \\le N)$에 대해 다음과 같이 정의된 $d_{i,j}$를 고려합니다. \\[d_{i,j} = \\begin{cases} a_{i.j} &amp; \\text{if } i=j \\\\ \\min \\left\\{ k \\in \\{ i , i+1, \\cdots , j-1 \\} : d_{i,k} + d_{k+1,j} + a_{i,j}\\right\\} &amp; \\text{if } i&lt;j\\end{cases}\\] 이는 다음과 같은 $O(N^3)$짜리...","categories": ["Algorithm"],
        "tags": ["Knuth"],
        "url": "http://localhost:4000/algorithm/Knuth/",
        "teaser":null},{
        "title": "Python을 이용한 백준 소스 제출 봇 제작기",
        "excerpt":"Requirements 제작 언어는 Python 3를 기본으로 합니다. Python을 이용해 웹에 로그인이나 소스를 제출하기 위해서 requests 패키지가, 페이지 내용을 효율적으로 읽기 위한 BeautifulSoup4 패키지가 필요합니다. 해당 패키지가 없다면 (Windows 기준) cmd에서 다음을 입력하여 설치할 수 있습니다. pip install requests pip install bs4 개발에 이해를 돕는 용도로 웹 디버깅 소프트웨어인 Fiddler를 사용하면...","categories": [],
        "tags": ["웹","requests"],
        "url": "http://localhost:4000/BOJ-submit-bot/",
        "teaser":null},{
        "title": "유리수의 조밀성",
        "excerpt":"임의의 서로 다른 두 실수 사이에 유리수가 존재합니다. 이를 유리수의 조밀성이라고 하고 본 글에서는 이것의 해석학적 접근을 소개하려 합니다. 실수와 cut 실수는 cut의 집합으로 정의할 수 있습니다. 그리고 이 cut은 사실 어떤 유리수의 집합인데, 다음 성질들을 만족해야 해요: $\\alpha \\subset \\mathbb{Q}$가 cut이려면 $\\alpha \\ne \\mathbb{Q}$이고 $ \\alpha \\ne \\emptyset $이다....","categories": ["Mathematics"],
        "tags": ["유리수","실수","해석학"],
        "url": "http://localhost:4000/mathematics/%EC%9C%A0%EB%A6%AC%EC%88%98%EC%9D%98-%EC%A1%B0%EB%B0%80%EC%84%B1/",
        "teaser":null},{
        "title": "크기 4인 군의 분류",
        "excerpt":"모든 크기 4인 군은 순환군 $Z_4$나 Klein-4군 $V_4$와 동형isomorphic다. Order 4인 원소가 있는 경우 그 원소를 $x$로 놓았을 때 $ \\vert \\langle x \\rangle \\vert $은 이미 크기가 4이기 때문에 $x$로만 생성되는 군이 이미 모든 공간을 채워버린다. 따라서 $Z_4$. 그렇지 않은 경우 그렇다면 1을 제외한 모든 원소의 order가 2일 것이다(Order...","categories": ["Mathematics"],
        "tags": ["군"],
        "url": "http://localhost:4000/mathematics/order4_subgp/",
        "teaser":null},{
        "title": "Oracle Padding Attack",
        "excerpt":"환경 CBC 이 글에서 집중할 부분은 CBC의 복호화 과정이다. Figure 1. CBC 암호의 복호화 과정 CBC 암호는 블록 단위로 암호화를 하듯, 복호화 과정에서도 블록 단위로 다음의 XOR 연산을 수행한다: \\[P_i = D_k (C_i) \\oplus C_{i-1} \\\\ C_0 = IV\\] 즉 $i$번째 블록의 복호화은 $i$번째 블록을 풀어내는 복잡한 연산의 결과에 $C_{i-1}$을...","categories": ["Cryptography"],
        "tags": ["block cipher","padding","CBC"],
        "url": "http://localhost:4000/cryptography/opa/",
        "teaser":null},{
        "title": "RSA",
        "excerpt":"RSA는 어떤 수의 소인수분해는 아주 어렵지만, 반대로 소인수를 곱해서 원래 수를 만드는 것은 쉽다는 성질을 이용한 암호 체계이다. 암호명은 이 암호를 개발한 세 암호학자 Rivest-Shamir-Adelman에서 유래한다. 키 형성 두 소수 $p,q$를 골라서 $n=pq$로 놓는다. $e$를 $\\gcd ( \\phi (n), e) = 1$이 되도록 뽑는다. $\\phi$는 오일러 totient 함수이다. $d =...","categories": ["Cryptography"],
        "tags": ["RSA"],
        "url": "http://localhost:4000/cryptography/RSA/",
        "teaser":null},{
        "title": "타원 곡선 암호 읽을거리",
        "excerpt":"https://andrea.corbellini.name/2015/05/17/elliptic-curve-cryptography-a-gentle-introduction/   타원 곡선 암호Elliptic Curve Cryptography를 처음 배우는 입장에서 수학적 배경부터 암호의 형성까지 모두 설명이 그야말로 gentle해서 좋았던 글입니다!  ","categories": ["Cryptography"],
        "tags": ["ECC","타원 곡선","공유"],
        "url": "http://localhost:4000/cryptography/ECC/",
        "teaser":null},{
        "title": "내가 확률을 싫어하는 이유",
        "excerpt":"제가 수학을 좋아하는 이유는 공리 위에서 만들어진 학문이기 때문이에요. 약 100~200년 전 칸토어가 세운 집합론의 기초를 시작으로 모든 수학이 공리 위에 놓이게 되었고, 정리의 참/거짓/나머지 무언가(판별 불가능)가 명확하게 결정되었죠. 확률도 물론 잘 정의됩니다. 유한 또는 가산의 표본 공간 $S$에서 확률 함수 $P:\\varphi(S) \\to [0,1]$는 다음과 같은 성질을 만족해야 해요: $P(A\\cup...","categories": ["Scribbles","Mathematics"],
        "tags": ["확률"],
        "url": "http://localhost:4000/scribbles/mathematics/WhyHateProb/",
        "teaser":null},{
        "title": "poka2019 writeup 1 - Lenstra-Lenstra-Lovász",
        "excerpt":"I am not good at Linear Algebra : ( Can you tell me about Lenstra-Lenstra-Lovász lattice basis reduction algorithm? Add) e=151. This is for make challenge easy. enc.txt Lenstra-Lenstra-Lovász.sage Notations Before start, let’s make the notations clear. n : RSA modulus p,q : two distinct prime factor of n. e...","categories": ["write-up","Cryptography"],
        "tags": ["CTF","write-up","LLL","Coppersmith","RSA","CRT"],
        "url": "http://localhost:4000/write-up/cryptography/LLL/",
        "teaser":null},{
        "title": "poka2019 writeup 2 - 강한가 약한가",
        "excerpt":"You have two choice- “Weak” and “Strong”. What do you want? Caution! Maybe “Strong” one will took 2 hours to get your treasure. enc.txt weak-strong.py Motivation Me and diff worked on this problem. At first, we tried some simple number-theoritic calcuations but failed to make a meaningful result. However the...","categories": ["write-up","Cryptography"],
        "tags": ["CTF","write-up","ROCA","RSA"],
        "url": "http://localhost:4000/write-up/cryptography/ROCA/",
        "teaser":null},{
        "title": "norae",
        "excerpt":"Github repository   구현된 웹 페이지   예전에 재미로 만들어봤던 노래방 번호 페이지를 훨씬 멋있게 만들어보았습니다. 하루종일 시간 가는 걸 모르고 개발해봤네요! 정적 사이트지만 다음에는 부트스트랩을 써보는걸 목표로..!   ","categories": ["Scribbles"],
        "tags": ["개발"],
        "url": "http://localhost:4000/scribbles/norae/",
        "teaser":null},{
        "title": "감기에 걸렸습니다",
        "excerpt":"일교차가 갑자기 커진 한글날 때 멀리 있던 친구가 학교에 찾아와서 밤새 놀다가 감기에 옳다구나 하고 걸려버렸습니다. 다음 주에 퀴즈랑 과제가 많고 다다음 주는 시험기간인데 큰일이네요(언제나 잃고서 건강의 소중함을 깨닫는다는).. 모두 조심하세요!  ","categories": ["Scribbles"],
        "tags": [],
        "url": "http://localhost:4000/scribbles/%EA%B0%90%EA%B8%B0/",
        "teaser":null},{
        "title": "시스템 프로그래밍 노트",
        "excerpt":"KAIST CS230 fall 2019 수업을 들으면서 내용을 요약한 노트입니다.      기본 표현 단위와 정수 표현   실수   어셈블리의 기본   상태 코드   함수와 스택 메모리   배열과 구조체, 그리고 실수   출처     KAIST CS230 fall 2019 Syststem Programming slides   Computer Systems: A Programmer’s Perspective 3rd edition  ","categories": ["Lecture Notes"],
        "tags": [],
        "url": "http://localhost:4000/lecture%20notes/cover/",
        "teaser":null},{
        "title": "시스템 프로그래밍 노트 1 - 기본 표현 단위와 정수 표현",
        "excerpt":"1. 기본 표현 단위 모든 정보의 최소 표현 단위는 비트이다. bit : 0,1 byte: 여덟 개의 bit를 묶어서 부른다. 이진수로는 00000000~11111111, 십진수로는 0~255, 십육진수로는 00~ff로 표현된다. 1.1. 비트 연산자 &amp;, |, ~, ^ C에서 사용하는 &amp;&amp;, ||, !는 논리 연산자로, 0을 거짓, 나머지를 모두 참으로 대응한다는 점에서 큰 차이가 있다....","categories": ["Lecture Notes"],
        "tags": ["정수","byte ordering"],
        "url": "http://localhost:4000/lecture%20notes/note1/",
        "teaser":null},{
        "title": "시스템 프로그래밍 노트 2 - 실수",
        "excerpt":"1. IEEE 실수 표현 1.1. 표현 방법 $(-1)^s M \\;2^E $ sign bit는 수의 부호를 결정한다. significand는 [1.0,2.0) 사이의 값을 결정한다.(물론 예외가 딱 하나 있음) exponent는 값에 2의 지수의 형태로 가중치를 준다. 이걸 인코딩할 때는 sign bit - exponent - significand 순으로 놓는다. 1.1.1. Normalized Values exp가 00…0이나 11…1이 아닐...","categories": ["Lecture Notes"],
        "tags": [],
        "url": "http://localhost:4000/lecture%20notes/note2/",
        "teaser":null},{
        "title": "시스템 프로그래밍 노트 3 - 어셈블리의 기본",
        "excerpt":"이 강의에서는 64비트 아키텍쳐만 커버한다. 1. 기본 용어 아키텍쳐 : 어셈블리/기계어를 읽거나 쓸 때 필요한 프로세서 디자인의 일부 마이크로 아키텍쳐 : 하드웨어의 운영에 대한 기술 기계 코드 : 프로세서가 실행하는 프로그램 그 자체 어셈블리 코드 : 기계어의 글자 표현text representation 2. C 코드의 변환 과정 C 프로그램은 컴파일러에 의해 어셈블리...","categories": ["Lecture Notes"],
        "tags": ["어셈블리","레지스터"],
        "url": "http://localhost:4000/lecture%20notes/note3/",
        "teaser":null},{
        "title": "시스템 프로그래밍 노트 4 - 상태 코드",
        "excerpt":"상태 코드와 관련된 어셈블리 Instructions과 c에서 루프가 어셈블리어로 어떻게 구현되는지 살펴본다. 1. 프로세서 상태 %rsp는 stack의 위치이다. 이와 관련해서는 다음 노트에서 다룬다. %rip는 프로그램 카운터, 즉 현재 실행되고 있는 코드의 위치를 가리키는 레지스터이다. CF, ZF, SF, OF의 Condition Codes가 존재한다. 1.1. Condition Codes 단일 비트 레지스터이다. CF는 Carry Flag로, unsigned...","categories": ["Lecture Notes"],
        "tags": [],
        "url": "http://localhost:4000/lecture%20notes/note4/",
        "teaser":null},{
        "title": "시스템 프로그래밍 노트 5 - 함수와 스택 메모리",
        "excerpt":"어떻게 함수가 호출되고 인자가 전달될 것인지에 대해 살펴본다. - x64 Calling Convention 1. 스택 기본적으로 서브루틴은 스택을 통해 관리된다. 스택은 메모리에 있다. 높은 주소에서 낮은 주소로 자란다. %rsp는 가장 낮은 스택 주소를 가리킨다. %rbp는 선택적으로 가장 높은 스택 프레임 주소로 사용된다. 대충 형태는 다음과 같다: %rbp -&gt; 0x7fffffffdd08 0x7fffffffdd00 0x7fffffffdcf8...","categories": ["Lecture Notes"],
        "tags": ["stack"],
        "url": "http://localhost:4000/lecture%20notes/note5/",
        "teaser":null},{
        "title": "시스템 프로그래밍 노트 6 - 배열과 구조체, 그리고 실수",
        "excerpt":"복잡한 구조의 데이터 관리, 접근을 낮은 레벨에서는 어떻게 하는가? 실수는 어떤 레지스터를 사용하는가? 1. 배열 변수 여러 개를 한꺼번에 관리할 때 사용하는 구조이다. 1.1. 1차원 배열 c에서는 1차원 배열을 다음과 같이 만들 수 있다: T A[L]; T는 타입, L은 배열의 길이이다. A는 0번째 element의 포인터로 사용된다. 타입은 따라서 T*. 1.1.1....","categories": ["Lecture Notes"],
        "tags": ["배열","구조체","실수"],
        "url": "http://localhost:4000/lecture%20notes/note6/",
        "teaser":null},{
        "title": "Ubuntu 18.04 한글 입력 설정",
        "excerpt":"항상 우분투 데스크탑을 설치할 때마다 한글 설정을 하는 문서를 찾기가 번거롭다. 그동안 내가 찾은 설정 방법을 정리하면서 관련 설정을 하는 많은 사람들에게 도움이 되었으면 좋겠다. uim 패키지 설정 Ubuntu 18.04에서 기본으로 지원하는 입력기는 iBus인데, 한글 입력이 잘 되지 않아서 여러 다른 입력기를 시도해본 결과 uim이 가장 안정적이다. sudo apt install...","categories": ["Linux"],
        "tags": ["uim","keymap"],
        "url": "http://localhost:4000/linux/%EC%9A%B0%EB%B6%84%ED%88%AC-%ED%95%9C%EA%B8%80/",
        "teaser":null},{
        "title": "리눅스 x86 호출규약",
        "excerpt":"32비트 리눅스의 호출 규약Calling Convention에 대해서 알아보자. 스택 메모리에서 서브루틴은 호출자의 아래쪽으로 생성된다. eax 레지스터로 리턴값을 전달한다. ebp 레지스터 위에 함수의 return address가 있고, 그 위에 인자argument가 쌓여있다. 예 int add(int a, int b){ return a+b; } int main(){ int a,b,c; a = 3; b = 7; c = add(a,...","categories": ["System"],
        "tags": [],
        "url": "http://localhost:4000/system/x86callconv/",
        "teaser":null},{
        "title": "출결 제도에 관한 생각",
        "excerpt":"대학에 다니면서 아침잠이 급격하게 늘어나면서 오전 강의에 늦거나 안 가는 일이 많다. 그런데 늦게 일어나더라도 출석체크가 있는 수업에는 가지 않고 없는 수업에는 가게 된다. 이 생각의 흐름이 신기해서 쪼개서 정리해보았다! 출석을 부르는 강의 출결 제도는 학생들의 수업 참여율을 강제하기 위해서 도입한 시스템이다. 그러나 이미 결석이 확실시되면 그 행위를 설명하기 위해...","categories": ["Scribbles"],
        "tags": [],
        "url": "http://localhost:4000/scribbles/%EC%B6%9C%EC%84%9D/",
        "teaser":null},{
        "title": "리눅스 x64 호출규약",
        "excerpt":"x64 Linux Calling Convention 스택 메모리에서 서브루틴은 호출자의 아래쪽으로 생성된다. 인자는 순서대로 rdi, rsi, rdx, r8, r9, r10 레지스터를 통해 전달된다. 6번째 이후의 인자는 32비트 호출 규약과 동일하게 rbp 위 함수의 return address 위에 쌓인다. rax 레지스터는 서브루틴의 리턴값을 전달한다. 예를 통해 직접 과정을 따라가보는 것이 가장 이해하기 좋다. 예...","categories": ["System"],
        "tags": [],
        "url": "http://localhost:4000/system/x64callconv/",
        "teaser":null},{
        "title": "Linux Deploy에서 부팅 시 스크립트 자동 실행하기",
        "excerpt":"모바일 안드로이드 기기에서 돌리고 있는 리눅스 서버에서 부팅할 때 돌릴 프로그램을 자동으로 실행하면 번거롭게 부팅할 때마다 SSH로 접속해서 프로그램을 실행하는 과정을 생략할 수 있다. init 설정 Linux Deploy에서 속성에 들어가 init을 활성화한다. rc.local에서 돌릴 스크립트 추가 SSH로 접속한 서버 쉘을 열어서 다음을 입력한다: $ cd /etc $ mkdir rc.local $...","categories": ["Linux"],
        "tags": ["Linux","rc.local"],
        "url": "http://localhost:4000/linux/linux-android-startup/",
        "teaser":null},{
        "title": "루팅된 안드로이드 기기를 리눅스 서버로 사용하기",
        "excerpt":"모바일 기기는 전력 소모가 적고 성능도 무난하기 때문에 소형 프로젝트를 돌릴 만한 서버로 적합하다. 루팅된 개인 모바일 안드로이드 기기를 개인 리눅스 서버로 탈바꿈하는 과정을 정리해보았다. Requirements 안드로이드 기기의 루트 권한 Busybox 앱 설치(#) Linux Deploy 앱 설치(#) Busybox 설치 Figure 1. Busybox 설치 busybox는 리눅스에서 ls, cp 등 자주 사용하는...","categories": ["Linux"],
        "tags": ["Linux"],
        "url": "http://localhost:4000/linux/linux-android/",
        "teaser":null},{
        "title": "\\[픽셀 아트\\] 자화상",
        "excerpt":"        나를 그려보았다. 손을 흔들고 있는 왼손은 뭔가 애매하지만 커피잔을 들고 있는 오른손이 잘 전달된다.   ","categories": ["Pixel Art"],
        "tags": ["pixel art"],
        "url": "http://localhost:4000/pixel%20art/pixelart/",
        "teaser":null},{
        "title": "리눅스 업타임",
        "excerpt":"리눅스 서버의 업타임을 확인할 때 기본적으로는 $ uptime (-p) 하면 서버가 부팅된 후 유지된 시간을 쉘에 출력한다. 나는 Python으로 이를 확인해야 했기에, subprocss 모듈을 사용하여 저 명령어를 쉘에 직접 입력해서 결과를 얻으려고 했었는데, 구글링하다가 더 쉬운 방법을 찾아냈다. from datetime import timedelta def get_uptime(): with open(\"/proc/uptime\", 'r') as f: uptime_seconds...","categories": ["Linux","System"],
        "tags": ["uptime","proc"],
        "url": "http://localhost:4000/linux/system/uptime/",
        "teaser":null},{
        "title": "Merkle-Damgard 해시 함수",
        "excerpt":"collision-resistant한 해시 함수를 만드는 방법 MD5(!), SHA1, SHA2 등에 적용된다. (아쉽게도, MD5의 MD는 Message Digest의 약자라고 한다) 그림으로 표현하면 다음과 같다. IV에 메시지 블록1을 압축시키고, 그 출력에 메시지 블록2를 압축시키고 … 이를 반복하여 마지막 메시지 블록을 통과시킨다. Figure 1. MD construction의 구조 Compression Function compression 함수 $f$를 가정한다. compression 함수라...","categories": ["Cryptography"],
        "tags": ["hash function","Merkle-Damgard"],
        "url": "http://localhost:4000/cryptography/Merkle-Damgard/",
        "teaser":null},{
        "title": "Length Extension Attack",
        "excerpt":"Merkle-Damgard 방식의 해시 함수에 대해 적용할 수 있는 공격법이다. 공격자가 모르는 메시지 m1의 해시값과 길이를 알고 있을 때, 공격자가 원하는 임의의 m2를 붙인 메시지 m1 + pad(m1) + m2의 해시값을 알 수 있다. 어떻게? 비밀 메시지 $m_1$이 패딩을 포함해서 단일 블럭으로 이루어져 있다면, \\[hash(m_1) = compress(IV, m_1 \\vert\\vert pad_1 )\\]...","categories": ["Cryptography"],
        "tags": ["hash function","Merkle-Damgard","MD5"],
        "url": "http://localhost:4000/cryptography/length-extension-attack-%EB%B3%B5%EC%82%AC%EB%B3%B8/",
        "teaser":null},{
        "title": "RSA LSB Oracle Attack",
        "excerpt":"암호문을 복호화해서 맨 마지막 비트(least significant bit)를 알려주는 RSA Oracle이 주어졌을 때 적용할 수 있는 공격법이다. 어떻게? RSA의 평문(plaintext)을 p, 암호문(ciphertext)을 c라고 놓았을 때, 복호화는 다음과 같이 진행된다: \\[p \\equiv c^d \\mod n\\] $c\\cdot 2^e$를 같은 방식으로 복호화시켜보자. \\[(c \\cdot 2^e)^d = c^d \\cdot 2^{ed} = c^d \\cdot 2^{k\\phi(n)+1} \\equiv...","categories": ["Cryptography"],
        "tags": ["RSA","LSB"],
        "url": "http://localhost:4000/cryptography/RSA-lsb-oracle-attack/",
        "teaser":null},{
        "title": "Feistel Cipher",
        "excerpt":"Feistel 암호는 블록 암호의 일종이다. DES가 대표적이다. Figure 1. Feistel 암호의 암호화와 복호화 [1] 후술할 암호화와 복호화 과정은 위 그림 하나로 다 설명된다. 암호화할 때 $f$라는 라운드 함수를 사용하는데, 암호화할 때나 복호화할 때나 공통적으로 $f^{-1}$도 아닌 $f$를 그대로 사용한다! 즉, 어떤 형태의 $f$를 제안해도 그것으로 블록 암호를 만들 수 있다는...","categories": ["Cryptography"],
        "tags": ["Feistel","block cipher"],
        "url": "http://localhost:4000/cryptography/Feistel-cipher/",
        "teaser":null},{
        "title": "PintOS를 짜면서 정리해본 팁과 설정들",
        "excerpt":"이번 학기에 운영체제 과목의 교육용 운영체제인 PintOS를 짜면서 느낀 점들과 초반 삽질을 줄일만한 팁들을 정리해보았다. 반드시 꼭 설정해야 할 중요한 알맹이들만 있지는 않고, 프로그래밍을 하다가 지쳤을 때 재미로 설정한 것들도 다수 있다. 1. Git PintOS는 KAIST에서는 2인 1조로 작업하였고, 협업을 하기 위해서는 Git을 사용을 안할 수가 없었다. 잘 안되서 예전에...","categories": ["Scribbles"],
        "tags": [],
        "url": "http://localhost:4000/scribbles/pintos-tips/",
        "teaser":null},{
        "title": "Substitution-Permuation Network",
        "excerpt":"DES가 대표적인 Feistel cipher 형태의 블록 암호 알고리즘이었지만 취약한 것으로 알려지면서 미국이 공모전을 통해 새로 제정한 블록 암호 알고리즘이 있는데, 바로 SP-network 형태의 AES이다. (사실 DES도 유사 SP 과정을 Feristel 암호의 round function으로 사용한다) Figure 1. 3단계 SP Network 암호 [1] 암호화 S-box S가 치환substitution의 약자인만큼, 입력 비트를 일정한 길이로...","categories": ["Cryptography"],
        "tags": ["SP network","block cipher"],
        "url": "http://localhost:4000/cryptography/SP-network/",
        "teaser":null},{
        "title": "디렉토리의 구조",
        "excerpt":"파일시스템에서 유저가 특정 파일명에서 오프셋 위치에 있는 데이터에 접근하려고 할 때 실제 디스크에 접근하기 위해 일어나는 일은 두 단계로 나뉜다. 파일명으로부터 디스크에 저장되어있는 inode를 찾아서 읽는다. inode와 오프셋으로부터 해당 파일에서 오프셋 위치에 있는 블럭의 디스크상의 물리 주소를 구한다. Figure 1. inode and inode Array 여기서 inode(information node)는 실제 데이터의 포인터와...","categories": ["System"],
        "tags": ["file system","directory"],
        "url": "http://localhost:4000/system/directory/",
        "teaser":null},{
        "title": "파일 인덱싱 구조",
        "excerpt":"운영체제에서 파일시스템은 유저가 파일 이름을 통해서 디스크의 물리적 주소에 저장된 데이터에 접근하는 것을 가능하게 해준다. 파일 이름은 각 디렉토리에서 접근하려는 파일의 여러가지 정보를 담고 있는 메타데이터(inode)로 변환되고 메타데이터를 통해 필요한 데이터가 저장된 디스크의 블럭을 찾아내어 물리적 주소를 통해 접근한다. 이 글에서는 2번에서 어떤 indexing structure을 통해 어떤 방식으로 메타데이터에 디스크의...","categories": ["System"],
        "tags": ["file system"],
        "url": "http://localhost:4000/system/file-indexing/",
        "teaser":null},{
        "title": "단일프로세서 스케줄링",
        "excerpt":"사용할 수 있는 CPU는 유한하지만 운영체제는 여러 개의 일task를 한꺼번에 작동시켜야 한다. 그래서 운영체제에서 일이 CPU를 점유하는 시간을 관리해주는 부분이 필요한데, 이를 스케줄러scheduler라고 한다. Performace Metric 어떤 방식의 스케줄링을 사용하는 것을 고민하기 전에, 그 스케줄링이 얼마나 효율적인지를 나타내는 지표들을 정리해보았다. throughput: 시간당 처리가 끝나는 일의 수 turnaround time: 일이 완전히...","categories": ["System"],
        "tags": ["scheduler","FIFO","SJF","round robin","MFQ"],
        "url": "http://localhost:4000/system/scheduler-policy/",
        "teaser":null},{
        "title": "2020년 여름학기 몰입캠프 후기",
        "excerpt":"봄학기 종강을 하자마자 카이스트에서 여름학기로 열리는 몰입캠프에 참여했기 때문에 한동안 정말 바빴다. 어제 몰입캠프 종강을 한 지금, 이 캠프에 참여하면서 얻은 것들을 정리해보고자 한다. 이 후기를 쓰고 있는 나는 카이스트 전산학부지만, 타대생과 컴공이 아닌 다른 전공을 하고 있는 수강생도 많이 볼 수 있었다. 개요 몰입캠프 메인페이지 2020년 여름학기 몰입캠프 강의계획서...","categories": ["Scribbles"],
        "tags": ["madcamp"],
        "url": "http://localhost:4000/scribbles/madcamp-review/",
        "teaser":null},{
        "title": "x86-64 시스템의 i386 아키텍처 호환에 관한 고찰",
        "excerpt":"이 글은 리눅스에서 바이너리와 호환 아키텍처에 관해 찾아보면서 알게 된 것들을 정리한 글입니다. 오류가 있을 수도 있으니 만약에 있다면 너그럽게 알려주시길 바랍니다. 가끔 오래된 바이너리를 보면 별도의 설정 없이 실행을 할 때 다음과 같이 오류를 출력한다. 분명 존재하는 파일인데 왜 없다고 뜨는걸까. $ ./bof bash: ./bof: No such file or...","categories": ["System"],
        "tags": ["Architecture","x86_64","i386"],
        "url": "http://localhost:4000/system/arch-elf-study/",
        "teaser":null}]
