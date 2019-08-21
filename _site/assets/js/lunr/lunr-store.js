var store = [{
        "title": "이분그래프",
        "excerpt":"1. 정의 그래프 $G = (V,E)$에 대해 다음 조건을 만족하면 이분그래프bipartite graph 라고 합니다. 공집합이 아닌 $V$의 분할partition ${V_1 ,V_2}$가 있어서 이와 같은 이분그래프에 대해 추가적인 표기법으로 $G = (V_1, V_2, E)$를 사용하기도 합니다. Figure 1과 같은 형태입니다. Figure 1. 이분그래프의 예 2. 판별 따라서 어떤 그래프가 이분그래프인지 아닌지 판별할...","categories": [],
        "tags": [],
        "url": "https://3-24.github.io/%EC%9D%B4%EB%B6%84%EA%B7%B8%EB%9E%98%ED%94%84/",
        "teaser":null},{
        "title": "번사이드 보조정리",
        "excerpt":"이 번사이드 보조정리는 유한 대칭군 위에서 기술되어 있습니다. 0. 유한군 용어 유한 집합 $X$에 대해 $X$의 대칭군symmetric group = $S_X = { \\sigma \\in X \\times X : \\sigma \\text{ is bijective function}}$ $X$의 순열군permutation group은 대칭군의 부분군 이다. 1. 정의 $(G,\\circ,id)$를 유한 집합 $X$의 순열군으로 놓자. 그러면 다음이 성립한다:...","categories": [],
        "tags": [],
        "url": "https://3-24.github.io/%EB%B2%88%EC%82%AC%EC%9D%B4%EB%93%9C/",
        "teaser":null},{
        "title": "카탈란 수-대각선을 넘지 않는 경우의 수",
        "excerpt":"문제 $n \\times n$ 격자에서 왼쪽 아래에서 오른쪽 위 모서리로 가는 오른쪽이나 위로 가는 이동만으로 이루어진 경로를 생각하자. 이 때 왼쪽 아래와 오른쪽 위 모서리를 연결한 대각선 위로 올라가지 않는 경로는 몇 개나 있을까? Figure 1. 대각선을 넘지 않는 경로의 예 이 조건을 만족하는 경우의 수를 카탈란 수라고 하고, $C_n$으로...","categories": [],
        "tags": [],
        "url": "https://3-24.github.io/%EC%B9%B4%ED%83%88%EB%9E%80%EC%88%98/",
        "teaser":null},{
        "title": "Codeforces Round #531 (Div. 3) 후기",
        "excerpt":"1. Integer Sequence Dividing https://codeforces.com/contest/1102/problem/A 처음에 임의의 원소를 받아서 차가 최소가 되도록 나눈다는 줄 알고 이상한 방향으로 고민했었습니다. 만약 그런 문제였다면 어떻게 풀어야 할 지 아직도 모르겠네요. 문제에서는 연속된 n개의 수에 대해서만 풀면 됩니다. 연속된 4개의 수가 x, x+1, x+2, x+3 이렇게 주어졌다면 A에다가 x와 x+3을 넣고 B에다가 x+1과 x+2를...","categories": [],
        "tags": [],
        "url": "https://3-24.github.io/CF-Round-531-DIv-3/",
        "teaser":null},{
        "title": "Codeforces Round #532 (Div. 2) 후기",
        "excerpt":"1. Roman and Browser https://codeforces.com/contest/1100/problem/A b를 0부터 k-1까지 바꿔가면서 비교를 통해 최대 절대값을 찾아내면 됩니다. 직접 b+ik만 제외하면서 더하는 것이 쉽지 않기 때문에 전체 합을 구해놓고 b+ik의 원소를 빼는 형태로 구현했습니다. #include &lt;bits/stdc++.h&gt; using namespace std; int main() { ios_base::sync_with_stdio(false); cin.tie(NULL); int n,k; cin &gt;&gt; n &gt;&gt; k; int Data[n]={0,},...","categories": [],
        "tags": [],
        "url": "https://3-24.github.io/CF-Round-532-DIv-2/",
        "teaser":null},{
        "title": "Knuth Optimization",
        "excerpt":"주어진 실수 $a_{i,j}(1 \\le i \\le j \\le N)$에 대해 다음과 같이 정의된 $d_{i,j}$를 고려합니다. 이는 다음과 같은 $O(N^3)$짜리 동적계획법으로 해결할 수 있습니다. for (int i=1;i&lt;=N;i++){ D[i][i] = a[i][i]; } for (int l=1;i&lt;N;i++){ // l: length of interval for (int i=1;i&lt;=N-l;i++){ int j = i+l; D[i][j] = INT_MAX; for (int...","categories": [],
        "tags": [],
        "url": "https://3-24.github.io/Knuth/",
        "teaser":null},{
        "title": "Python을 이용한 백준 소스 제출 봇 제작기",
        "excerpt":"Requirements 제작 언어는 Python 3를 기본으로 합니다. Python을 이용해 웹에 로그인이나 소스를 제출하기 위해서 requests 패키지가, 페이지 내용을 효율적으로 읽기 위한 BeautifulSoup4 패키지가 필요합니다. 해당 패키지가 없다면 (Windows 기준) cmd에서 다음을 입력하여 설치할 수 있습니다. pip install requests pip install bs4 개발에 이해를 돕는 용도로 웹 디버깅 소프트웨어인 Fiddler를 사용하면...","categories": [],
        "tags": [],
        "url": "https://3-24.github.io/BOJ-submit-bot/",
        "teaser":null},{
        "title": "유리수의 조밀성",
        "excerpt":"임의의 서로 다른 두 실수 사이에 유리수가 존재합니다. 이를 유리수의 조밀성이라고 하고 본 글에서는 이것의 해석학적 접근을 소개하려 합니다. 실수와 cut 실수는 cut의 집합으로 정의할 수 있습니다. 그리고 이 cut은 사실 어떤 유리수의 집합인데, 다음 성질들을 만족해야 해요: $\\alpha \\subset \\mathbb{Q}$가 cut이려면 $\\alpha \\ne \\mathbb{Q}$이고 $ \\alpha \\ne \\emptyset $이다....","categories": [],
        "tags": [],
        "url": "https://3-24.github.io/%EC%9C%A0%EB%A6%AC%EC%88%98%EC%9D%98-%EC%A1%B0%EB%B0%80%EC%84%B1/",
        "teaser":null},{
        "title": "크기 4인 군의 분류",
        "excerpt":"모든 크기 4인 군은 순환군 $Z_4$나 Klein-4군 $V_4$와 동형isomorphic다. Order 4인 원소가 있는 경우 그 원소를 $x$로 놓았을 때 $ \\vert \\langle x \\rangle \\vert $은 이미 크기가 4이기 때문에 $x$로만 생성되는 군이 이미 모든 공간을 채워버린다. 따라서 $Z_4$. 그렇지 않은 경우 그렇다면 1을 제외한 모든 원소의 order가 2일 것이다(Order...","categories": [],
        "tags": [],
        "url": "https://3-24.github.io/order4_subgp/",
        "teaser":null},{
        "title": "Oracle Padding Attack",
        "excerpt":"환경 CBC 이 글에서 집중할 부분은 CBC의 복호화 과정이다. Figure 1. CBC 암호의 복호화 과정 CBC 암호는 블록 단위로 암호화를 하듯, 복호화 과정에서도 블록 단위로 다음의 XOR 연산을 수행한다: 즉 $i$번째 블록의 복호화은 $i$번째 블록을 풀어내는 복잡한 연산의 결과에 $C_{i-1}$을 XOR한다. Decryption Oracle Oracle Padding Attack은 CBC 암호의 decryption oracle이...","categories": [],
        "tags": [],
        "url": "https://3-24.github.io/opa/",
        "teaser":null},{
        "title": "RSA",
        "excerpt":"RSA는 어떤 수의 소인수분해는 아주 어렵지만, 반대로 소인수를 곱해서 원래 수를 만드는 것은 쉽다는 성질을 이용한 암호 체계이다. 암호명은 이 암호를 개발한 세 암호학자 Rivest-Shamir-Adelman에서 유래한다. 키 형성 두 소수 $p,q$를 골라서 $n=pq$로 놓는다. $e$를 $\\gcd ( \\phi (n), e) = 1$이 되도록 뽑는다. $\\phi$는 오일러 totient 함수이다. $d =...","categories": [],
        "tags": [],
        "url": "https://3-24.github.io/RSA/",
        "teaser":null},{
        "title": "Test for New Engine!",
        "excerpt":"Hello World! 안녕하세요!   수식   $ 10 \\oplus 01 = 00 $    ","categories": [],
        "tags": [],
        "url": "https://3-24.github.io/test/",
        "teaser":null}]
