---
title: 'Codeforces Round #531 (Div. 3) 후기'
date: 2019-01-11 12:43:36
categories:
- 프로그래밍
- Codeforces
tags: 
- Codeforces
- 문제해결
comments: true
---
## 1. Integer Sequence Dividing
https://codeforces.com/contest/1102/problem/A

처음에 임의의 원소를 받아서 차가 최소가 되도록 나눈다는 줄 알고 이상한 방향으로 고민했었습니다. 만약 그런 문제였다면 어떻게 풀어야 할 지 아직도 모르겠네요.

문제에서는 연속된 n개의 수에 대해서만 풀면 됩니다. 연속된 4개의 수가 x, x+1, x+2, x+3 이렇게 주어졌다면 A에다가 x와 x+3을 넣고 B에다가 x+1과 x+2를 넣으면 없는 걸로 생각할 수 있습니다. 그런 식으로 큰 쪽부터 네 개씩 덜어내면서 문제를 1,2,3 최대 세 개의 연속한 원소가 있는 형태로 바꿀 수 있어요. 이 형태의 출력은 그냥 `resultArr`라는 배열로 저장했습니다.

이게 최적인 이유는 
$$
\sum _{i=1 } ^n i = \frac { n(n+1)} 2
$$
이기 때문이에요. n을 4로 나눈 나머지에 따라 저 값의 홀짝 여부를 판단해보면 다음과 같습니다.

| n (mod 4) | 1+2+...+n |
| :-------: | :-------: |
|     0     |   짝수    |
|     1     |   홀수    |
|     2     |   홀수    |
|     3     |   짝수    |

따라서 가장 잘 나눠봤자 [0,1,1,0]인데, 그 방법을 확인했으니까 맞겠죠! 통과된 코드는 다음과 같습니다.

```c++
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n, resultArr[4] = {0,1,1,0};
    cin >> n;
    cout << resultArr[n%4];
    return 0;
}
```

## 2. Array K-Coloring

https://codeforces.com/contest/1102/problem/B

구현 문제입니다. 지문을 독해하는 데에 시간이 많이 들었어요.

일단 처음에는 색깔을 '최소로' 사용하면서 칠했습니다. 원소가 '1 1 1 1'이렇게 있으면 색깔 1,2,3,4를 부여하는 식으로요.

그리고 나중에 색깔이 부족하면 '1 2 3 4'의 앞 부분부터 사용되지 않은 색깔로 바꿔넣었습니다.

```c++
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n, k; // length of array, number of colors
    cin >> n >> k;
    int A[n]; // array-element input
    // count the number of each element, output array, count the number of color used, max(elementSize)
    int elementSize[5001] = {0,}, resultColoring[n], colorCount[k+1] = {0,}, maxElementSize = 0;
    vector<int> colorMap[k+1]; // color-array location

    for (int i = 0; i < n; i++) {
        // get input
        cin >> A[i]; // <= 5000

        elementSize[A[i]] += 1;

        // element is used more than number of color
        if (elementSize[A[i]] > k) {
            cout << "NO";
            return 0;
        }

        // maxElementSize update
        if (maxElementSize < elementSize[A[i]]) maxElementSize = elementSize[A[i]];

        // color i th element of array
        int color = elementSize[A[i]];
        resultColoring[i] = color;
        colorCount[color] += 1;

        // update color-array location map
        colorMap[color].push_back(i);
    }

    cout << "YES" << endl;

    // what if less than k color is used?
    if (maxElementSize < k) {
        for (int c = 1; c <= k; c++) {
            while (colorCount[c] > 1) {
                maxElementSize += 1;
                colorCount[c]--;
                int location = colorMap[c].back();
                colorMap[c].pop_back();
                resultColoring[location] = maxElementSize;
                if (maxElementSize == k){
                    for (int i=0;i<n;i++){
                        cout << resultColoring[i];
                        if (i != n-1){
                            cout << ' ';
                        }

                    }
                    return 0;
                }
            }
        }
    }
    else{
        for (int i=0;i<n;i++){
            cout << resultColoring[i];
            if (i != n-1){
                cout << ' ';
            }

        }
        return 0;
    }
}
```

뒤에 코드가 반복되는 것은 이중반복문 탈출할 때 flag로 처리하기 번거로워서 그랬습니다. 시간이 더 남았다면 함수로 바꿔넣거나 이중반복문 처리를 정상적으로 해서 코드 직관력을 높였을거에요..!



## 3. Doors Breaking and Repairing

https://codeforces.com/contest/1102/problem/C

경우로 나누어서 생각해보면 됩니다. 만약에 부수는 속도가 고치는 속도보다 빠르면 결국에는 다 부서질 것이고, 아니라면 부수는 사람이 한 번에 부술 수 있는 문만 부술 수 있습니다. 한 번에 부수지 못하면 수리하는 쪽이 부수지 않는 문에 붙어서 막으면 부수는 사람은 그 문을 절대 못부수기 때문이에요.

```c++
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n,x,y;
    cin >> n >> x >> y;
    int durability, count = 0;
    for (int i=0;i<n;i++){
        cin >> durability;
        if (x >= durability) count++ ;
    }
    cout << (x>y ? n : (count+1)/2);
    return 0;
}
```



## 4. Balanced Ternary String

https://codeforces.com/contest/1102/problem/D

시간이 부족해서 이 문제는 풀지는 못했고, 대회 끝나고 10분정도 걸려서 practice submit에서 통과시켰습니다. 케이스를 잘 나눠서 구현하면 어려울 것 없는 문제라고 생각해요.

쉽게 관찰할 수 있는 사실은 0이 앞에, 2가 뒤에 갈수록 유리하다는 거에요! 만약에 주어진 input에서 0이 부족하다면 앞에서부터 훑어가면서 0이 아닌 수를 0으로 바꿔넣고, 2가 부족하다면 뒤에서부터 훑어가면서 2가 아닌 수를 2로 바꿔넣었습니다.

이후에는 1이 부족한 경우만 남습니다. 1이 부족하다는 것은 어디선가 0이나 2가 많이 쓰였다는 것이므로, 2가 넘칠 때 앞에서부터 2인 것은 1로 바꿔주고, 0이 넘칠 때 뒤에서부터 0인 것을 1로 바꿔주었습니다.

```c++
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n; // length of s, <= 3*10^5
    string s;
    cin >> n;
    cin >> s;
    int countChar[3] = {-n/3,-n/3,-n/3};

    for (int i=0;i<n;i++){
        countChar[int(s[i]) - int('0')] += 1;
    }

    if (countChar[0] < 0){
        for (int i=0;i<n;i++){
            int num = int(s[i])-int('0');
            if (num != 0 && countChar[num] > 0){
                countChar[num]--;
                countChar[0]++;
                s[i] = '0';
                if (countChar[0] == 0) break;
            }
        }
    }

    if (countChar[2] < 0 ){
        for (int i=n-1;i>=0;i--){
            int num = int(s[i])-int('0');
            if (num != 2 && countChar[num] > 0){
                countChar[num]--;
                countChar[2]++;
                s[i] = '2';
                if (countChar[2] == 0) break;
            }
        }
    }

    if (countChar[1] < 0){
        if ( countChar[2] > 0){
            for (int i=0;i<n;i++){
                if (s[i] == '2'){
                    s[i] = '1';
                    countChar[2]--;
                    countChar[1]++;
                    if (countChar[2] == 0) break;
                }
            }
        }

        for (int i=n-1;i>=0;i--){
            if (countChar[1] == 0) break;
            if (s[i] == '0') {
                s[i] = '1';
                countChar[0]--;
                countChar[1]++;
            }
            if (countChar[1] == 0) break;
        }
    }

    cout << s;

    return 0;
}
```

 

## 마치며

문제 독해력과 c++ 코드 구현력이 많이 부족함을 느꼈습니다. 둘 다 많이 풀다보면 나아질 부분으로 보입니다.