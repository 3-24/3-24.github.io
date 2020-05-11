---
layout: single
classes: wide
title: Length Extension Attack
categories:
- Cryptography
tags:
- hash function
- Merkle-Damgard
- MD5
---

Merkle-Damgard 방식의 해시 함수에 대해 적용할 수 있는 공격법이다.

> 공격자가 모르는 메시지 m1의 해시값과 길이를 알고 있을 때, 공격자가 원하는 임의의 m2를 붙인 메시지 m1 + pad(m1) + m2의 해시값을 알 수 있다.

## 어떻게?

비밀 메시지 $m_1$이 패딩을 포함해서 단일 블럭으로 이루어져 있다면,


$$
hash(m_1) = compress(IV, m_1 \vert\vert pad_1 )
$$



이 때, 패딩을 포함한 단일 블럭의 메시지 $m_2$에 대하여, $m_3 = m_1 \vert\vert pad_1 \vert\vert m_2$를 고려하고, $Pad(m_3) = m_1 \vert\vert pad_1 \vert\vert m_2 \vert\vert pad_3$로 놓자.


$$
hash(m_3) = compress(compress(IV,m_1 \vert\vert pad_1 ), m_2 \vert\vert pad_3)
\\= compress(hash(m_1),m_2\vert\vert pad_3)
$$


이런 식으로 $m_1, m_2$가 단일 블럭이 아니어도, Merkle-Damgard 해시 함수의 특성 상 $hash(m_3)$를 계산할 수 있다.



## 예시

예를 들어, 메시지의 인증을 확인하기 위해 MAC(Message Authentication Code)로 다음과 같은 함수를 사용한다고 하자:

```python
secret = "SECRET!"
# message의 해시 값을 계산
def create_mac(message):
	return hashlib.md5((secret+message).encode()).hexdigest()

# 유저가 보낸 message의 mac 시그니처가 해시값과 일치하는지 확인
def check_auth(message, usermac):
    return (create_mac(message) == usermac)
```



어떤 웹사이트에 PHP 리퀘스트를 GET 방식으로 데이터와 시그니처를 다음과 같이 보낼 수 있다고 하자:

```
user_id=1323&size=large&count=1&flavor=choco
```

```
sign=8ccb1040d76a517033265be77f7b8506
```

이 때 시그니처의 길이가 32이기 때문에, 16진수 하나당 4비트이므로 128비트이고, 128비트의 출력을 하는 자주 쓰이는 암호학적 해시 함수는 MD5 정도라고 추측할 수 있다.

이제 공격자가 하고 싶은 것은 flavor를 `mintchoco`로 덮는것이라고 하자.

length extension attack을 적용할 때 문제는 secret의 길이를 모른다는 부분인다. 그냥 짧을 것이라고 추측해서 직접 패딩을 일일이 만들어서 직접 MD5 해시를 계산해서 인증을 시도해보고, 맞으면 secret의 길이가 7임을 알 수 있다.

따라서 m1의 길이는 51이고 한 글자는 1바이트=8비트이므로, 총 408비트이고, MD5에서 패딩을 만드는 방식에 의하면 pad1은 다음과 같이 형성된다:
```
1000 0000 0000 0000 0000 0000 0000 0000
0000 0000
```

`10...0`을 448비트가 될 때까지 채우고

```
1000 1001 0001 0000 0000 0000 0000 0000
0000 0000 0000 0000 0000 0000 0000 0000 
```
2. 408비트는 이진수로 110011000이므로 little-endian으로 채웠을 때 (총 64비트)

이걸 다 붙여서

```
user_id=1323&size=large&count=1&flavor=choco\x80\x00\x00\x00\x00\x98\x01\x00\x00\x00\x00\x00\x00&flavor=mintchoco
```

로 덮는다. 이 때 인증키 sign은

```
compress(8ccb1040d76a517033265be77f7b8506, "&flavor=mintchoco" + pad3)
```

를 계산해서 얻을 수 있다. 이제 pad3를 계산하고 compress를 md5 algorithm에서 가져와야 하는데..

> 그냥 다른 사람이 만들어놓은 툴을 쓰자([hash_extender](https://github.com/iagox86/hash_extender)). 

직접 하길 원한다면 hash_extender의 README를 읽어보는 것도 괜찮다.

```
$ ./hash_extender -d "user_id=1323&size=large&count=1&flavor=choco" -l 7 -a "&flavor=mintchoco" -s 8ccb1040d76a517033265be77f7b8506 -f md5
Type: md5
Secret length: 7
New signature: aed5d57ec6cb8c79b245d864665b3193
New string: 757365725f69643d313332332673697a653d6c6172676526636f756e743d3126666c61766f723d63686f636f8000000000980100000000000026666c61766f723d6d696e7463686f636f

```

새로 얻은 `sign=aed5d57ec6cb8c79b245d864665b3193`이 이제 있다.

New string을 bytearray로 바꿔서 출력해보면 다음과 같다:

```python
# s는 아까 얻은 New String
>>> barr = bytearray.fromhex(s)
>>> barr
bytearray(b'user_id=1323&size=large&count=1&flavor=choco\x80\x00\x00\x00\x00\x98\x01\x00\x00\x00\x00\x00\x00&flavor=mintchoco')
```

(위에서 직접 손으로 패딩을 계산했던 것이 일치함을 확인할 수 있다!) 어쩄든 결과로 인증을 시도해보자.

직접 secret을 붙여서 인증 서버 쪽에서 md5를 계산하면 다음과 같을 것이다:

```python
>>> import hashlib
>>> hashlib.md5(b'SECRET!'+barr).hexdigest()
'aed5d57ec6cb8c79b245d864665b3193'
```

해시 값이 위에서 얻은 `sign`과 동일하다!