---
layout: single
classes: wide
title: RSA LSB Oracle Attack
categories:
- Cryptography
tags:
- RSA
- LSB
---

암호문을 복호화해서 맨 마지막 비트(least significant bit)를 알려주는 RSA Oracle이 주어졌을 때 적용할 수 있는 공격법이다.

## 어떻게?

RSA의 평문(plaintext)을 $p$, 암호문(ciphertext)을 $c$라고 놓았을 때, 복호화는 다음과 같이 진행된다:

$$
p \equiv c^d \mod n
$$

$c\cdot 2^e$를 같은 방식으로 복호화시켜보자.

$$
(c \cdot 2^e)^d = c^d \cdot 2^{ed} = c^d \cdot 2^{k\phi(n)+1} \equiv 2 c^d \equiv 2p \mod n
$$

($2^{k\phi(n)+1} \equiv 2 \mod n$이 되는 부분은 편의를 위해 생략했다. [RSA를 설명한 글](https://3-24.github.io/cryptography/RSA/)의 복호화 증명과 완전히 동일하다.)

즉, RSA Oracle에 $c \cdot 2^e$를 입력하면 $2p$를 $n$으로 나눈 나머지를 계산하고 맨 마지막 비트를 알려준다. 평문은 $n$보다 작다고 가정되므로 두 가지 경우를 고려할 수 있다.

1. $n < 2p < 2n$ <br>
$2p$를 $n$으로 나눈 나머지는 $2p-n$으로, n은 언제나 홀수이기 때문에(짝수이면 n의 두 소수 인수 중 하나는 2로 고정되기 때문에 매우 위험한 RSA이므로 사용되지 않는다!) $2p-n$은 홀수이고, LSB는 1이다.
2. $0 < 2p < n$<br>
$2p$를 $n$으로 나눈 나머지가 $2p$이기 떄문에 짝수이므로 LSB가 0이다.

똑같은 방식으로 $c \cdot 4^e$를 입력하면 $4p$를 $n$으로 나눈 나머지를 계산하고 맨 마지막 비트를 알려준다. 이전 결과에 이어서 총 네 가지 경우로 나눌 수 있다.

1. $n < 2p < 2n$<br>
1-1. $3n < 4p < 4n$ : $4p$를 $n$으로 나눈 나머지는 $4p-3n$으로, LSB가 1이다.<br>
1-2. $2n < 4p < 3n$ : $4p$를 $n$으로 나눈 나머지는 $4p-2n$으로, LSB가 0이다.

2. $0 < 2p < n$<br>
2-1. $n < 4p < 2n$ : $4p$를 n으로 나눈 나머지는 $4p-n$으로, LSB가 1이다.<br>
2-2. $0 < 4p < n$ : $4p$를 $n$으로 나눈 나머지는 $4p$로, LSB가 0이다.

이렇게 두 번의 입력으로 가능한 $p$의 범위를 1/4로 줄여놓았다. 이런 식으로 계속 반복하여 가능한 $p$의 범위를 반씩 좁혀나가면 평문을 얻을 수 있다.

공격 예는 [https://github.com/ashutosh1206/Crypton/blob/master/RSA-encryption/Attack-LSBit-Oracle/README.md](https://github.com/ashutosh1206/Crypton/blob/master/RSA-encryption/Attack-LSBit-Oracle/README.md) 에 잘 정리되어 있다.
