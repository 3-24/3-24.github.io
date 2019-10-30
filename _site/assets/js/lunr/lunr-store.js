var store = [{
        "title": "이분그래프",
        "excerpt":"1. 정의 그래프 $G = (V,E)$에 대해 다음 조건을 만족하면 이분그래프bipartite graph 라고 합니다. 공집합이 아닌 $V$의 분할partition ${V_1 ,V_2}$가 있어서 이와 같은 이분그래프에 대해 추가적인 표기법으로 $G = (V_1, V_2, E)$를 사용하기도 합니다. Figure 1과 같은 형태입니다. Figure 1. 이분그래프의 예 2. 판별 따라서 어떤 그래프가 이분그래프인지 아닌지 판별할...","categories": ["수학","그래프이론"],
        "tags": ["이분그래프"],
        "url": "http://localhost:4000/%EC%88%98%ED%95%99/%EA%B7%B8%EB%9E%98%ED%94%84%EC%9D%B4%EB%A1%A0/%EC%9D%B4%EB%B6%84%EA%B7%B8%EB%9E%98%ED%94%84/",
        "teaser":null},{
        "title": "번사이드 보조정리",
        "excerpt":"이 번사이드 보조정리는 유한 대칭군 위에서 기술되어 있습니다. 0. 유한군 용어 유한 집합 $X$에 대해 $X$의 대칭군symmetric group = $S_X = { \\sigma \\in X \\times X : \\sigma \\text{ is bijective function}}$ $X$의 순열군permutation group은 대칭군의 부분군 이다. 1. 정의 $(G,\\circ,id)$를 유한 집합 $X$의 순열군으로 놓자. 그러면 다음이 성립한다:...","categories": ["수학"],
        "tags": ["번사이드","유한군"],
        "url": "http://localhost:4000/%EC%88%98%ED%95%99/%EB%B2%88%EC%82%AC%EC%9D%B4%EB%93%9C/",
        "teaser":null},{
        "title": "카탈란 수-대각선을 넘지 않는 경우의 수",
        "excerpt":"문제 $n \\times n$ 격자에서 왼쪽 아래에서 오른쪽 위 모서리로 가는 오른쪽이나 위로 가는 이동만으로 이루어진 경로를 생각하자. 이 때 왼쪽 아래와 오른쪽 위 모서리를 연결한 대각선 위로 올라가지 않는 경로는 몇 개나 있을까? Figure 1. 대각선을 넘지 않는 경로의 예 이 조건을 만족하는 경우의 수를 카탈란 수라고 하고, $C_n$으로...","categories": ["수학","조합론"],
        "tags": ["카탈란"],
        "url": "http://localhost:4000/%EC%88%98%ED%95%99/%EC%A1%B0%ED%95%A9%EB%A1%A0/%EC%B9%B4%ED%83%88%EB%9E%80%EC%88%98/",
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
        "excerpt":"주어진 실수 $a_{i,j}(1 \\le i \\le j \\le N)$에 대해 다음과 같이 정의된 $d_{i,j}$를 고려합니다. 이는 다음과 같은 $O(N^3)$짜리 동적계획법으로 해결할 수 있습니다. for (int i=1;i&lt;=N;i++){ D[i][i] = a[i][i]; } for (int l=1;i&lt;N;i++){ // l: length of interval for (int i=1;i&lt;=N-l;i++){ int j = i+l; D[i][j] = INT_MAX; for (int...","categories": ["전산이론"],
        "tags": ["Knuth"],
        "url": "http://localhost:4000/%EC%A0%84%EC%82%B0%EC%9D%B4%EB%A1%A0/Knuth/",
        "teaser":null},{
        "title": "Python을 이용한 백준 소스 제출 봇 제작기",
        "excerpt":"Requirements 제작 언어는 Python 3를 기본으로 합니다. Python을 이용해 웹에 로그인이나 소스를 제출하기 위해서 requests 패키지가, 페이지 내용을 효율적으로 읽기 위한 BeautifulSoup4 패키지가 필요합니다. 해당 패키지가 없다면 (Windows 기준) cmd에서 다음을 입력하여 설치할 수 있습니다. pip install requests pip install bs4 개발에 이해를 돕는 용도로 웹 디버깅 소프트웨어인 Fiddler를 사용하면...","categories": [],
        "tags": ["웹","requests"],
        "url": "http://localhost:4000/BOJ-submit-bot/",
        "teaser":null},{
        "title": "유리수의 조밀성",
        "excerpt":"임의의 서로 다른 두 실수 사이에 유리수가 존재합니다. 이를 유리수의 조밀성이라고 하고 본 글에서는 이것의 해석학적 접근을 소개하려 합니다. 실수와 cut 실수는 cut의 집합으로 정의할 수 있습니다. 그리고 이 cut은 사실 어떤 유리수의 집합인데, 다음 성질들을 만족해야 해요: $\\alpha \\subset \\mathbb{Q}$가 cut이려면 $\\alpha \\ne \\mathbb{Q}$이고 $ \\alpha \\ne \\emptyset $이다....","categories": ["수학"],
        "tags": ["유리수","실수","해석학"],
        "url": "http://localhost:4000/%EC%88%98%ED%95%99/%EC%9C%A0%EB%A6%AC%EC%88%98%EC%9D%98-%EC%A1%B0%EB%B0%80%EC%84%B1/",
        "teaser":null},{
        "title": "크기 4인 군의 분류",
        "excerpt":"모든 크기 4인 군은 순환군 $Z_4$나 Klein-4군 $V_4$와 동형isomorphic다. Order 4인 원소가 있는 경우 그 원소를 $x$로 놓았을 때 $ \\vert \\langle x \\rangle \\vert $은 이미 크기가 4이기 때문에 $x$로만 생성되는 군이 이미 모든 공간을 채워버린다. 따라서 $Z_4$. 그렇지 않은 경우 그렇다면 1을 제외한 모든 원소의 order가 2일 것이다(Order...","categories": ["수학"],
        "tags": ["군"],
        "url": "http://localhost:4000/%EC%88%98%ED%95%99/order4_subgp/",
        "teaser":null},{
        "title": "Oracle Padding Attack",
        "excerpt":"환경 CBC 이 글에서 집중할 부분은 CBC의 복호화 과정이다. Figure 1. CBC 암호의 복호화 과정 CBC 암호는 블록 단위로 암호화를 하듯, 복호화 과정에서도 블록 단위로 다음의 XOR 연산을 수행한다: 즉 $i$번째 블록의 복호화은 $i$번째 블록을 풀어내는 복잡한 연산의 결과에 $C_{i-1}$을 XOR한다. Decryption Oracle Oracle Padding Attack은 CBC 암호의 decryption oracle이...","categories": ["정보보안","암호학"],
        "tags": ["블록 암호","패딩"],
        "url": "http://localhost:4000/%EC%A0%95%EB%B3%B4%EB%B3%B4%EC%95%88/%EC%95%94%ED%98%B8%ED%95%99/opa/",
        "teaser":null},{
        "title": "RSA",
        "excerpt":"RSA는 어떤 수의 소인수분해는 아주 어렵지만, 반대로 소인수를 곱해서 원래 수를 만드는 것은 쉽다는 성질을 이용한 암호 체계이다. 암호명은 이 암호를 개발한 세 암호학자 Rivest-Shamir-Adelman에서 유래한다. 키 형성 두 소수 $p,q$를 골라서 $n=pq$로 놓는다. $e$를 $\\gcd ( \\phi (n), e) = 1$이 되도록 뽑는다. $\\phi$는 오일러 totient 함수이다. $d =...","categories": ["정보보안","암호학"],
        "tags": ["RSA"],
        "url": "http://localhost:4000/%EC%A0%95%EB%B3%B4%EB%B3%B4%EC%95%88/%EC%95%94%ED%98%B8%ED%95%99/RSA/",
        "teaser":null},{
        "title": "타원 곡선 암호 읽을거리",
        "excerpt":"https://andrea.corbellini.name/2015/05/17/elliptic-curve-cryptography-a-gentle-introduction/   타원 곡선 암호Elliptic Curve Cryptography를 처음 배우는 입장에서 수학적 배경부터 암호의 형성까지 모두 설명이 그야말로 gentle해서 좋았던 글입니다!  ","categories": ["암호학","정보보안"],
        "tags": ["ECC","타원 곡선","공유"],
        "url": "http://localhost:4000/%EC%95%94%ED%98%B8%ED%95%99/%EC%A0%95%EB%B3%B4%EB%B3%B4%EC%95%88/ECC/",
        "teaser":null},{
        "title": "무제",
        "excerpt":"1. Workaholic 나는 워커홀릭 기질이 있어 보인다. 개강과 함께 사람들을 만나고 중단했던 동아리 활동을 다시 시작하면서 할 일이 많아져서 아직은(?) 하루를 활기차게 보내고 있다. 그러고도 할 일을 더 찾아내서 얹으면서 희열을 느낀다. 특히 올해 해킹 공부를 시작하면서 알고리즘적 문제해결이나 작은 개발 프로젝트만 하던 때와는 새삼 다르게 컴퓨터를 바라보는 시야가 넓어져가는...","categories": ["일상"],
        "tags": [],
        "url": "http://localhost:4000/%EC%9D%BC%EC%83%81/190903/",
        "teaser":null},{
        "title": "내가 확률을 싫어하는 이유",
        "excerpt":"제가 수학을 좋아하는 이유는 공리 위에서 만들어진 학문이기 때문이에요. 약 100~200년 전 칸토어가 세운 집합론의 기초를 시작으로 모든 수학이 공리 위에 놓이게 되었고, 정리의 참/거짓/나머지 무언가(판별 불가능)가 명확하게 결정되었죠. 확률도 물론 잘 정의됩니다. 유한 또는 가산의 표본 공간 $S$에서 확률 함수 $P:\\varphi(S) \\to [0,1]$는 다음과 같은 성질을 만족해야 해요: $P(A\\cup...","categories": ["수학","생각"],
        "tags": ["확률"],
        "url": "http://localhost:4000/%EC%88%98%ED%95%99/%EC%83%9D%EA%B0%81/WhyHateProb/",
        "teaser":null},{
        "title": "poka2019 writeup 1 - Lenstra-Lenstra-Lovász",
        "excerpt":"I am not good at Linear Algebra : ( Can you tell me about Lenstra-Lenstra-Lovász lattice basis reduction algorithm? Add) e=151. This is for make challenge easy. enc.txt Lenstra-Lenstra-Lovász.sage Notations Before start, let’s make the notations clear. n : RSA modulus p,q : two distinct prime factor of n. e...","categories": ["CTF","write-up"],
        "tags": ["CTF","write-up","LLL","Coppersmith","RSA","CRT"],
        "url": "http://localhost:4000/ctf/write-up/LLL/",
        "teaser":null},{
        "title": "poka2019 writeup 2 - 강한가 약한가",
        "excerpt":"You have two choice- “Weak” and “Strong”. What do you want? Caution! Maybe “Strong” one will took 2 hours to get your treasure. enc.txt weak-strong.py Motivation Me and diff worked on this problem. At first, we tried some simple number-theoritic calcuations but failed to make a meaningful result. However the...","categories": ["CTF","write-up"],
        "tags": ["CTF","write-up","ROCA","RSA"],
        "url": "http://localhost:4000/ctf/write-up/ROCA/",
        "teaser":null},{
        "title": "norae",
        "excerpt":"Github repository   구현된 웹 페이지   예전에 재미로 만들어봤던 노래방 번호 페이지를 훨씬 멋있게 만들어보았습니다. 오늘 하루종일 시간 가는 걸 모르고 개발해봤네요! 얄팍하던 웹 개발 지식이 어느정도 두터워진 것 같습니다.  ","categories": ["일상"],
        "tags": ["개발"],
        "url": "http://localhost:4000/%EC%9D%BC%EC%83%81/norae/",
        "teaser":null},{
        "title": "감기에 걸렸습니다",
        "excerpt":"일교차가 갑자기 커진 한글날 때 멀리 있던 친구가 학교에 찾아와서 밤새 놀다가 감기에 옳다구나 하고 걸려버렸습니다. 다음 주에 퀴즈랑 과제가 많고 다다음 주는 시험기간인데 큰일이네요(언제나 잃고서 건강의 소중함을 깨닫는다는).. 모두 조심하세요!  ","categories": ["일상"],
        "tags": [],
        "url": "http://localhost:4000/%EC%9D%BC%EC%83%81/%EA%B0%90%EA%B8%B0/",
        "teaser":null},{
        "title": "시스템 프로그래밍 노트",
        "excerpt":"KAIST CS230 fall 2019 수업을 들으면서 내용을 요약한 노트입니다.      기본 표현 단위와 정수 표현   실수   어셈블리의 기본   상태 코드   함수와 스택 메모리   배열과 구조체, 그리고 실수   출처     KAIST CS230 fall 2019 Syststem Programming slides   Computer Systems: A Programmer’s Perspective 3rd edition  ","categories": ["lecturenotes","시스템프로그래밍"],
        "tags": [],
        "url": "http://localhost:4000/lecturenotes/%EC%8B%9C%EC%8A%A4%ED%85%9C%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D/cover/",
        "teaser":null},{
        "title": "시스템 프로그래밍 노트 1 - 기본 표현 단위와 정수 표현",
        "excerpt":"1. 기본 표현 단위 모든 정보의 최소 표현 단위는 비트이다. bit : 0,1 byte: 여덟 개의 bit를 묶어서 부른다. 이진수로는 00000000~11111111, 십진수로는 0~255, 십육진수로는 00~ff로 표현된다. 1.1. 비트 연산자 &amp;, |, ~, ^ C에서 사용하는 &amp;&amp;, ||, !는 논리 연산자로, 0을 거짓, 나머지를 모두 참으로 대응한다는 점에서 큰 차이가 있다....","categories": ["lecturenotes","시스템프로그래밍"],
        "tags": ["정수","byte ordering"],
        "url": "http://localhost:4000/lecturenotes/%EC%8B%9C%EC%8A%A4%ED%85%9C%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D/note1/",
        "teaser":null},{
        "title": "시스템 프로그래밍 노트 2 - 실수",
        "excerpt":"1. IEEE 실수 표현 1.1. 표현 방법 $(-1)^s M \\;2^E $ sign bit는 수의 부호를 결정한다. significand는 [1.0,2.0) 사이의 값을 결정한다.(물론 예외가 딱 하나 있음) exponent는 값에 2의 지수의 형태로 가중치를 준다. 이걸 인코딩할 때는 sign bit - exponent - significand 순으로 놓는다. 1.1.1. Normalized Values exp가 00…0이나 11…1이 아닐...","categories": ["lecturenotes","시스템프로그래밍"],
        "tags": [],
        "url": "http://localhost:4000/lecturenotes/%EC%8B%9C%EC%8A%A4%ED%85%9C%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D/note2/",
        "teaser":null},{
        "title": "시스템 프로그래밍 노트 3 - 어셈블리의 기본",
        "excerpt":"이 강의에서는 64비트 아키텍쳐만 커버한다. 1. 기본 용어 아키텍쳐 : 어셈블리/기계어를 읽거나 쓸 때 필요한 프로세서 디자인의 일부 마이크로 아키텍쳐 : 하드웨어의 운영에 대한 기술 기계 코드 : 프로세서가 실행하는 프로그램 그 자체 어셈블리 코드 : 기계어의 글자 표현text representation 2. C 코드의 변환 과정 C 프로그램은 컴파일러에 의해 어셈블리...","categories": ["lecturenotes","시스템프로그래밍"],
        "tags": ["어셈블리","레지스터"],
        "url": "http://localhost:4000/lecturenotes/%EC%8B%9C%EC%8A%A4%ED%85%9C%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D/note3/",
        "teaser":null},{
        "title": "시스템 프로그래밍 노트 4 - 상태 코드",
        "excerpt":"상태 코드와 관련된 어셈블리 Instructions과 c에서 루프가 어셈블리어로 어떻게 구현되는지 살펴본다. 1. 프로세서 상태 %rsp는 stack의 위치이다. 이와 관련해서는 다음 노트에서 다룬다. %rip는 프로그램 카운터, 즉 현재 실행되고 있는 코드의 위치를 가리키는 레지스터이다. CF, ZF, SF, OF의 Condition Codes가 존재한다. 1.1. Condition Codes 단일 비트 레지스터이다. CF는 Carry Flag로, unsigned...","categories": ["lecturenotes","시스템프로그래밍"],
        "tags": [],
        "url": "http://localhost:4000/lecturenotes/%EC%8B%9C%EC%8A%A4%ED%85%9C%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D/note4/",
        "teaser":null},{
        "title": "시스템 프로그래밍 노트 5 - 함수와 스택 메모리",
        "excerpt":"어떻게 함수가 호출되고 인자가 전달될 것인지에 대해 살펴본다. - x64 Calling Convention 1. 스택 기본적으로 서브루틴은 스택을 통해 관리된다. 스택은 메모리에 있다. 높은 주소에서 낮은 주소로 자란다. %rsp는 가장 낮은 스택 주소를 가리킨다. %rbp는 선택적으로 가장 높은 스택 프레임 주소로 사용된다. 대충 형태는 다음과 같다: %rbp -&gt; 0x7fffffffdd08 0x7fffffffdd00 0x7fffffffdcf8...","categories": ["lecturenotes","시스템프로그래밍"],
        "tags": ["stack"],
        "url": "http://localhost:4000/lecturenotes/%EC%8B%9C%EC%8A%A4%ED%85%9C%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D/note5/",
        "teaser":null},{
        "title": "시스템 프로그래밍 노트 6 - 배열과 구조체, 그리고 실수",
        "excerpt":"복잡한 구조의 데이터 관리, 접근을 낮은 레벨에서는 어떻게 하는가? 실수는 어떤 레지스터를 사용하는가? 1. 배열 변수 여러 개를 한꺼번에 관리할 때 사용하는 구조이다. 1.1. 1차원 배열 c에서는 1차원 배열을 다음과 같이 만들 수 있다: T A[L]; T는 타입, L은 배열의 길이이다. A는 0번째 element의 포인터로 사용된다. 타입은 따라서 T*. 1.1.1....","categories": ["lecturenotes","시스템프로그래밍"],
        "tags": ["배열","구조체","실수"],
        "url": "http://localhost:4000/lecturenotes/%EC%8B%9C%EC%8A%A4%ED%85%9C%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D/note6/",
        "teaser":null},{
        "title": "Ubuntu 18.04 한글 입력 설정",
        "excerpt":"항상 우분투를 설치할 때마다 한글 설정을 하는 문서를 찾기가 번거롭다. 그동안 내가 찾은 설정 방법을 정리하면서 관련 설정을 하는 많은 사람들에게 도움이 되었으면 좋겠다. uim 패키지 설정 Ubuntu 18.04에서 기본으로 지원하는 입력기는 iBus인데, 한글 입력이 잘 되지 않아서 여러 다른 입력기를 시도해본 결과 uim이 가장 안정적이다. sudo apt install uim...","categories": [],
        "tags": ["uim"],
        "url": "http://localhost:4000/%EC%9A%B0%EB%B6%84%ED%88%AC-%ED%95%9C%EA%B8%80/",
        "teaser":null},{
        "title": "출결 제도에 관한 생각",
        "excerpt":"대학에 다니면서 아침잠이 급격하게 늘어나면서 오전 강의에 늦거나 안 가는 일이 많다. 그런데 늦게 일어나더라도 출석체크가 있는 수업에는 가지 않고 없는 수업에는 가게 된다. 생각의 흐름을 정리해보면 다음과 같다. 출석을 부르는 강의 출결 제도는 학생들의 수업 참여율을 강제하기 위해서 도입한 시스템이다. 그러나 이미 결석이 확실시되면 그 행위를 설명하기 위해 수업을...","categories": ["일상"],
        "tags": [],
        "url": "http://localhost:4000/%EC%9D%BC%EC%83%81/%EC%B6%9C%EC%84%9D/",
        "teaser":null}]
