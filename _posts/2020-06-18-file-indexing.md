---
layout: single
classes: wide
title: 파일시스템 - File Indexing Structure
categories:
- Stystem
tags:
- file system
---

운영체제에서 파일시스템은 유저가 파일 이름을 통해서 디스크의 물리적 주소에 저장된 데이터에 접근하는 것을 가능하게 해준다.

1. 파일 이름은 각 디렉토리에서 접근하려는 파일의 여러가지 정보를 담고 있는 메타데이터(inode)로 변환되고
2. 메타데이터를 통해 필요한 데이터가 저장된 디스크의 블럭을 찾아내어 물리적 주소를 통해 접근한다.

이 글에서는 2번에서 어떤 indexing structure을 통해 어떤 방식으로 메타데이터에 디스크의 블럭 주소들이 저장되는지를 알아볼 것이다. 유저가 사용하는 파일과 디스크에 저장된 데이터에 대해 다음과 같은 특징이 존재한다는 것을 기억하자.

* 디스크에 있는 데이터는 블럭 단위로 관리된다.
* 한 파일이 반드시 디스크에서 연속적으로 저장된다는 보장이 없다. fragmentation을 방지하기 위해 높은 확률로 이곳저곳에 쪼개져 있을 것이다.
* 유저가 파일에 접근할 때 파일의 데이터를 연속적으로 읽기도 하고, 랜덤하게 읽기도 한다.
* 파일의 크기는 변할 수 있다.

## Linked List

<div align="center">
	<img src = "https://media.geeksforgeeks.org/wp-content/uploads/linkedListAllocation.jpg" width="40%" style="background-color:white;"/>
    <p>
        Figure 1. Linked List File Allocation [1]
    </p>
</div>

디스크에 있는 각 블럭이 다음 블럭의 포인터를 저장하고 있다. 파일의 메타데이터는 첫 번째 블럭을 가리킨다.

**장점**

- 순차적 접근이 빠르다.
- 구현이 간단하다.
- 쉽게 블럭을 추가하고 삭제한다.

**단점**

* 무작위 접근이 느리다. (크기가 작은 파일의 경우 캐시를 통해 해결 가능하다)

메타데이터에는 파일의 첫 번째 블럭 포인터만 저장되기 때문에 임의의 n번째 블럭에 도달하기 위해서 n개의 블럭을 직접 지나야 한다. 따라서 무작위 접근을 할 때 속도가 캐시 메모리에 의존도가 높기 때문에 크기가 작은 파일들을 주로 관리할 때 적합한 파일시스템이다. 실제로 FAT 파일시스템은 파일을 linked list로 관리하는데, USB와 같은 작은 디스크에서 자주 사용된다.



## Array

각 파일의 메타데이터가 모든 블럭 주소를 적어놓은 배열을 가진다. 배열이라는 자료구조의 장점과 단점을 그대로 답습한다.

장점

* 구현이 간단하다.
* 순차적 접근, 무작위 접근 모두 빠르다.
* 쉽게 블럭을 추가하고 삭제한다.

단점

* **배열의 크기로 파일의 최대 크기가 고정된다**. 즉, 유동적인 파일 크기 변화가 불가능하다.

파일의 최대 크기를 늘리자고 배열의 크기를 모든 파일에 대해서 크게 설정할 수도 없는 노릇이다. 파일시스템으로 사용할 수 없다.



## Multi-level Indexing

배열의 단점을 보완한 방법이다. 해당 방법을 이용하는 파일 시스템으로는 Berkeley UNIX FFS가 있는데, inode에 15개의 블럭 포인터가 저장되어 있다. 이 블럭 포인터들은 디스크에 저장된 다른 블럭 포인터의 주소를 저장할 수도 있고, 바로 물리적 디스크 주소를 저장할 수도 있다.

<div align="center">
	<img src = "https://media.geeksforgeeks.org/wp-content/uploads/Combined-Scheme.jpg" width="40%" style="background-color:white;"/>
    <p>
        Figure 2. Multi-level indexing [1]
    </p>
</div>

FFS를 기준으로, 첫 번째 12개의 포인터들은 바로 데이터가 담긴 블럭을 가리킨다. 각 블럭이 4KB일 때,  최대 48KB까지 수용할 수 있다.

13번째 포인터는 indirect 블럭 포인터인다. 이 포인터는 데이터 포인터들을 담고 있는 디스크의 블럭을 가리킨다. 즉, 가리키고 있는 블럭의 크기는 4KB이고, 물리적 주소가 32비트라고 했을 때 이는 4바이트이므로 가리키고 있는 블럭에 최대 1K개의 포인터를 수용할 수 있다. 이 1K개의 포인터는 각각 다른 4KB 짜리 데이터가 저장된 블럭을 가리키므로, 1K와 4KB를 곱해서 최대 4MB의 데이터가 수용 가능하다.

14번째 포인터는 doubly indirect 블럭 포인터이다. 이 포인터가 가리키고 있는 블럭은 1K의 indirect 블럭을 가리키는데, 각각의 indirect 블럭은 최대 4MB의 데이터가 수용 가능하므로 1K와 4MB를 곱한 4GB의 데이터가 수용 가능하다.

마지막인 15번째 포인터는 triply indirect 블럭 포인터로, 같은 방식으로 4TB의 데이터가 수용 가능하다.

이렇게 총 4KB+4MB+4GB+4TB의 데이터를 저장하고 접근할 수 있다.

장점

- 무작위 접근, 순차적 접근 모두 좋다.
- 용량의 제한이 거의 느껴지지 않는다.

단점

- 구현이 복잡하다.
- 파일에 접근할 때 디스크에서 여러 번의 indirection을 반복하면 느려진다. (캐시로 보완 가능)



## 출처

[1] [GeeksforGeeks - File Allocation Methods](https://www.geeksforgeeks.org/file-allocation-methods/)

[2] 2020 Spring CS330 Operating System Lecture of KAIST