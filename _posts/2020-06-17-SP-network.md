---
layout: single
classes: wide
title: Substitution-Permuation Network
categories:
- Cryptography
tags:
- SP network
- block cipher
---

DES가 대표적인 Feistel cipher 형태의 블록 암호 알고리즘이었지만 취약한 것으로 알려지면서 미국이 공모전을 통해 새로 제정한 블록 암호 알고리즘이 있는데, 바로 SP-network 형태의 AES이다. (사실 DES도 유사 SP 과정을 Feristel 암호의 round function으로 사용한다)

<div align="center">
	<img src = "https://upload.wikimedia.org/wikipedia/commons/c/cd/SubstitutionPermutationNetwork2.png" width="40%" style="background-color:white;"/>
    <p>
        Figure 1. 3단계 SP Network 암호 [1]
    </p>
</div>



## 암호화

### S-box

S가 치환substitution의 약자인만큼, 입력 비트를 일정한 길이로 쪼개서 그 각각을 **같은 길이**의 비트로 치환시킨다. 복호화도 가능하게 하기 위해서 **one-to-one** 관계를 유지해야 한다. Figure 1에서 16비트 평문을 4비트씩 쪼개서 치환시키는 것이 이에 해당한다. S-box는 비선형성이 보장된다.



### P-box

P는 비트를 섞는 과정이다. permutation의 약자로, Figure 1에서 P 상자를 자세히 보면 세 번째 비트가 첫 번째 비트가 되고, 14번째 비트가 16번째 비트가 되는 것들을 볼 수 있을 것이다. 이는 입력 비트를 x 벡터, 출력 비트를 y 벡터로 표현했을 때 y=Ax가 되는 행렬 A가 간단하게 존재하므로 선형이다. 또한, 이 비트를 섞는 과정을 역으로 언제나 수행할 수 있고 이는 복호화해서 사용된다.



### Key

매 라운드마다 비밀 키와 XOR시킨다.



## 복호화

앞에서 서술했듯 S-box와 P-box에 역함수의 존재성이 보장되므로 암호화하는 과정을 역함수를 이용해서 거꾸로 진행하면 된다.



## 출처

[1] Wikipedia - Substitution-permutation network