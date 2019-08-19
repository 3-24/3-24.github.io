---
title: 'Codeforces Round #532 (Div. 2) 후기'
date: 2019-01-14 13:08:49
categories:
- 프로그래밍
- Codeforces
tags: 
- Codeforces
- 문제해결

---

## 1. Roman and Browser

https://codeforces.com/contest/1100/problem/A

b를 0부터 k-1까지 바꿔가면서 비교를 통해 최대 절대값을 찾아내면 됩니다. 직접 b+ik만 제외하면서 더하는 것이 쉽지 않기 때문에 전체 합을 구해놓고 b+ik의 원소를 빼는 형태로 구현했습니다.

```c++
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n,k;
    cin >> n >> k;
    int Data[n]={0,}, initSum = 0;
    for (int i=0;i<n;i++){
        cin >> Data[i];
        initSum += Data[i];
    }

    int output = 0;
    for (int b=0;b<k;b++){
        int sum = initSum, i=0;
        while(b+i*k <n){
            sum -= Data[b+i*k];
            i++;
        }
        sum = abs(sum);
        if (output < sum) output = sum;
    }
    cout << output;
    return 0;
}
```



## 2. Build a Contest

https://codeforces.com/contest/1100/problem/B

문제를 잘못 이해해서 풀지 못한 문제입니다. 제가 구현했던 것은 모든 난이도의 문제가 모인 순간 앞에 있는 모든 문제를 고려 대상에서 제외하는 것인데, 오늘 제출 체크를 해보니까 그러면 안된다는 것을 확인할 수 있었어요. 다음은 이를 반영하여 수정한 코드입니다.

```c++
#include <bits/stdc++.h>
using namespace std;
int checkDiff[100001]={0,};

// initialize checkDiff
int initDiff(int x){
    int count = 0;
    for (int i=1;i<=x;i++){
        checkDiff[i] -= 1;
        if (checkDiff[i] != 0) count++;
    }
    return count;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n,m; // number of difficulty levels, number of problems, <= 100000
    cin >> n >> m;

    int diff; // new-designed difficulty
    int count = 0;

    for (int r=1;r<=m;r++){
        cin >> diff;

        if (checkDiff[diff] == 0){
            count++;
        }

        checkDiff[diff]++;

        // if all difficulty is ready
        if (count == n){
            count = initDiff(n);
            cout << 1;
        }

        // if not ready
        else cout << 0;
    }
    return 0;
}
```

문제를 풀 때는 큰 수 배열 등에서 문제가 생길 것 같아 조심해서 짰는데, 너무 그 안에 갇혀있었다는 느낌이 들어요. 정작 문제는 다른 곳에서 나타났으니 말입니다.



## 3. NN and Optical Illusion

간단한 식 유도 문제입니다. 그림을 잘 그리면 빗변이 R+r, 높이가 R인 직각삼각형이 만들어지고 밑변과 빗변 사이의 각이 $ \pi / n $이 됩니다. 따라서
$$
\frac R {R+r} = \sin \frac {\pi} n
$$
의 관계식을 R을 중심으로 풀어서 계산하면 됩니다. 저는 cout의 실수 자릿수출력이 6까지밖에 안되는 것을 이때 처음 알아서 헤맸습니다. 

```c++
#include <bits/stdc++.h>
using namespace std;
#define PI 3.14159265
typedef long double ld;

int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout << setprecision(10);
    int n,r;
    cin >> n >> r;

    ld calc = sin(PI/ld(n));
    cout << (ld(r)*calc) / (1-calc);
    return 0;
}
```

자릿수 출력은 10으로 넉넉하게~



식을 내고 나서 Python으로 해결하려고 했는데 어떻게 짜는지 기억이 안나서 결국 c++로 해결했습니다. Python도 분명 일부 PS문제에서 강점이 있을 것 같은데 아쉽네요 ㅠ



## 마무리

2번에서 너무 오래 걸리고 감점도 받아서 레이팅 -26당했습니다. 분발해야겠네요!