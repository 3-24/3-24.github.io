---
layout: single
title: Merkle-Damgard 해시 함수
classes: wide
categories:
- Cryptography
tags:
- hash function
- Merkle-Damgard
use_math: true
---

> collision-resistant한 해시 함수를 만드는 방법

MD5(!), SHA1, SHA2 등에 적용된다. (아쉽게도, MD5의 MD는 Message Digest의 약자라고 한다) 그림으로 표현하면 다음과 같다. IV에 메시지 블록1을 압축시키고, 그 출력에 메시지 블록2를 압축시키고 ... 이를 반복하여 마지막 메시지 블록을 통과시킨다.

<div align="center">
    <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Merkle-Damgard_hash_big.svg/1920px-Merkle-Damgard_hash_big.svg.png">
    <figcaption> Figure 1. MD construction의 구조 </figcaption>
</div>

## Compression Function

compression 함수 $f$를 가정한다. compression 함수라 함은 다음을 의미한다:

$$
f:\{0,1\}^m \times \{0,1\}^n \to \{0,1\}^m
$$

즉, m비트와 n비트의 입력을 받아 m비트로 대응시킨다.

단, 이 $f$는 출력으로부터 두 입력을 아는 것이 어려워야 하며(단방향, one-way) $f(m_1)=f(m_2)$인 서로 다른 $m_1, m_2$를 아는 것도 어려워야 한다(collision-resistant).

## Initialization Vector

처음 compression 함수에 들어가는 m비트는 IV이다.

## Merkle-Damgard Compliant Padding

메시지를 n비트 블록 단위로 쪼개어서 compression 함수에 넣기 때문에 메시지의 길이가 n비트의 단위가 아닐 경우 이를 n비트로 강제로 만드는 과정이 필요하다.

$$
Pad : \{0,1\}^* \to \{0,1\}^{n} \cup \{0,1\}^{2n} \cup \cdots
$$

MD construction의 안전성을 보장하기 위해 이 패딩함수 $Pad$에는 메시지 $M$에 대해 다음과 같은 충분조건이 존재한다:

- $Pad(M)$은 $M$으로 시작해야한다.
- $\lvert M_1\rvert = \lvert M_2 \rvert \implies \lvert Pad(M_1) \rvert = \lvert Pad(M_2) \rvert $
- $\lvert M_1\rvert  \ne \lvert M_2\rvert  \implies Pad(M_1) $의 마지막 블록 $\ne Pad(M_2)$의 마지막 블록

## MD5의 예시

Merkle-Damgard construction이라는 것을 확인하기 위해 알고리즘을 다소 생략했다. 전문([#](https://en.wikipedia.org/wiki/MD5#Pseudocode))

```text
// Note: All variables are unsigned 32 bit and wrap modulo 2^32 when calculating
var int s[64], K[64] // predefined arrays
var int i

// Initialize variables:
var int a0 := 0x67452301   // A
var int b0 := 0xefcdab89   // B
var int c0 := 0x98badcfe   // C
var int d0 := 0x10325476   // D

// Padding 추가
append "1" bit to message    
// Notice: the input bytes are considered as bits strings,
//  where the first bit is the most significant bit of the byte.[50]
append "0" bit until message length in bits ≡ 448 (mod 512)
append original length in bits mod 2^64 to message

// Process the message in successive 512-bit chunks:
for each 512-bit chunk of padded message do
    break chunk into sixteen 32-bit words M[j], 0 ≤ j ≤ 15
    // Initialize hash value for this chunk:
    var int A := a0
    var int B := b0
    var int C := c0
    var int D := d0
    // Main loop:
    for i from 0 to 63 do
        var int F, g
        if 0 ≤ i ≤ 15 then
            F := (B and C) or ((not B) and D)
            g := i
        else if 16 ≤ i ≤ 31 then
            F := (D and B) or ((not D) and C)
            g := (5×i + 1) mod 16
        else if 32 ≤ i ≤ 47 then
            F := B xor C xor D
            g := (3×i + 5) mod 16
        else if 48 ≤ i ≤ 63 then
            F := C xor (B or (not D))
            g := (7×i) mod 16
        // Be wary of the below definitions of a,b,c,d
        F := F + A + K[i] + M[g]  // M[g] must be a 32-bits block
        A := D
        D := C
        C := B
        B := B + leftrotate(F, s[i])
    end for
    // Add this chunk's hash to result so far:
    a0 := a0 + A
    b0 := b0 + B
    c0 := c0 + C
    d0 := d0 + D
end for

var char digest[16] := a0 append b0 append c0 append d0 // (Output is in little-endian)
```

따라서 MD5 Merkle-Damgard 해시 함수이다. 여기서 사용한 패딩은 다른 SHA1, SHA2와도 공유하는 방법으로, 과정은 다음과 같다:

1. 메시지 끝에 1을 붙인다.
2. 그 뒤에 비트 mod 512로 448이 될 때까지 0을 붙인다. 그러면 이제 채워야 할 64비트가 남는다.
3. $\lvert M \rvert $를 mod $2^{64}$한 값을 little-endian 64비트 정수가 되도록 채운다.

예를 들어, 메시지가 400비트였다면, 448비트가 될 때까지

```text
1000 0000 0000 0000 0000 0000 0000 0000
0000 0000 0000 0000
```

를 붙이고

400비트는 이진수로 110010000이기 때문에 little-endian은 하위 바이트가 낮은 주소로 들어와야 하므로,

```text
0000 1001 0001 0000 0000 0000 0000 0000
0000 0000 0000 0000 0000 0000 0000 0000
```

를 붙여야 한다. 즉, 4000비트 메시지의 패딩은

```text
1000 0000 0000 0000 0000 0000 0000 0000
0000 0000 0000 0000 0000 1001 0001 0000
0000 0000 0000 0000 0000 0000 0000 0000
0000 0000 0000 0000
```

를 byte-array로 바꾼 `\x80\x00\x00\x00\x00\x00\x09\x10\x00\x00\x00\x00\x00\x00`이다.