---
title: Feistel Cipher
categories:
- Cryptography
tags:
- Feistel
- block cipher
---

Feistel 암호는 블록 암호의 일종이다. DES가 대표적이다.

<div align="center">
	<img src = "https://upload.wikimedia.org/wikipedia/commons/f/fa/Feistel_cipher_diagram_en.svg" width="40%" style="background-color:white;"/>
    <p>
        Figure 1. Feistel 암호의 암호화와 복호화 [1]
    </p>
</div>

후술할 암호화와 복호화 과정은 위 그림 하나로 다 설명된다. 암호화할 때 $f$라는 라운드 함수를 사용하는데, 암호화할 때나 복호화할 때나 공통적으로 $f^{-1}$도 아닌 $f$를 그대로 사용한다! 즉, 어떤 형태의 $f$를 제안해도 그것으로 블록 암호를 만들 수 있다는 자유도가 있다. 그리고 암호화하는 과정과 복호화하는 과정이 닮아있기 때문에 시간도 같게 걸린다.

## 암호화

- 입력: 암호화할 $L_0 \vert\vert R_0$ 블록, 공통적으로 사용할 비밀키 $k_0, \cdots , k_{r-1} $
- 출력: r번의 라운드 함수를 거쳐서 만들어진 $L_r \vert\vert R_r $ 블록

기본적이므로 블록 암호이므로 고정된 길이의 입력 $L_0 \vert\vert R_0$을 암호화하는 과정을 살펴볼 것이다. $L_0$와 $R_0$의 길이는 같다.

r-round Feistel 암호는 이 블록을 매 단계마다 다음과 같이 암호화한다:

$$
(L_{i+1}, R_{i+1}) = (R_i, L_i \oplus f(R_i, k_i)) \quad \text{for } i=0,2,\cdots,r-1
$$

여기서 $f$를 라운드 함수round function이라고 부르고, 이 라운드 함수에 사용되는 $k_i$는 i번째 비밀 키이다.

이렇게 r개의 라운드를 거쳐서 나오는 $R_r \vert\vert L_r$이 암호화된 블록이다.

## 복호화

- 입력: 복호화할 $L_r \vert\vert R_r$ 블록, 공통적으로 사용할 비밀키  $k_0, \cdots , k_{r-1} $
- 출력: $L_0 \vert\vert R_0$ 평문 블록

암호화와 똑같은 과정을 뒤집어서 수행한다.

$$
(R_i, L_i) = (L_{i+1},R_{i+1}\oplus f(L_{i+1},k_i)) \quad \text{for } k=0,1,\cdots,r-1
$$

## 검증

r-round Feistel의 복호화 과정이 정확한 지 확인하고 싶다면, 다음을 확인하면 된다. E와 D는 각각 암호화encrypt와 복호화decrypt를 의미한다.

1. $(L_{i+1}, R_{i+1}) = E(L_i, R_i) = (R_i, L_i \oplus f(R_i, k_i))$
2. $(L_i', R_i') = D(L_{i+1}, R_{i+1})=(R_{i+1} \oplus f(L_{i+1}, k_i)), L_{i+1} )$
3. $(L_i',R_i ') = (L_i, R_i)$인가?

먼저, $R_i' = L_{i+1} = R_i$임은 쉽게 확인된다.

$$
L_i' = R_{i+1} \oplus f(L_{i+1}, k_i) = (L_i \oplus f(R_i,k_i)) \oplus f(L_{i+1}, k_i) = L_i \oplus (f(R_i, k_i) \oplus f(L_{R_i, k_i})) = L_i
$$

따라서 각 단계마다 복호화가 유효하다는 것이 확인되었고, 이 단계들로 구성된 r-round Fesistel 암호의 전체 복호화 과정도 정확하다.

## 출처

[1] Wikipedia - Feistel Cipher
