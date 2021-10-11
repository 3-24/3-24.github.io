---
title: x86-64 시스템의 i386 아키텍처 호환에 관한 고찰
categories:
- System
tags:
- Architecture
- x86_64
- i386
---

> 이 글은 리눅스에서 바이너리와 호환 아키텍처에 관해 찾아보면서 알게 된 것들을 정리한 글입니다. 오류가 있을 수도 있으니 만약에 있다면 너그럽게 알려주시길 바랍니다.

가끔 오래된 바이너리를 보면 별도의 설정 없이 실행을 할 때 다음과 같이 오류를 출력한다. 분명 존재하는 파일인데 왜 없다고 뜨는걸까.

```text
$ ./bof
bash: ./bof: No such file or directory
$ file ./bof
bof: ELF 32-bit LSB shared object, Intel 80386, version 1 (SYSV), dynamically linked, interpreter /lib/ld-linux.so.2, for GNU/Linux 2.6.24, BuildID[sha1]=ed643dfe8d026b7238d3033b0d0bcc499504f273, not stripped
```

그래서 file 명령어로 확인해보면 32비트 바이너리라고 하는데, 왜 실행이 안되나 하고 찾아봤더니 [해당 답변](https://askubuntu.com/questions/454253/how-to-run-32-bit-app-in-ubuntu-64-bit)에서는 i386 아키텍처와 관련된 libc 라이브러리를 설치하라고 한다:

```bash
sudo dpkg --add-architecture i386
sudo apt-get update
sudo apt-get install libc6:i386 libncurses5:i386 libstdc++6:i386
```

물론 문제는 해결이 되지만, 아키텍처의 개념과, i386의 의미, 그리고 바이너리가 왜 실행이 안되었는지에 관해 의문이 남아서 열심히 공부하면서 찾아보았다.

'컴퓨터 아키텍처'란 흔히 기계어라고 불리는 명령어 집합(Itruction Set Assembly)에 이를 회로로 구현하는데 사용하는 마이크로아키텍처와 하드웨어 구성을 의미한다. 그리고 x86은 인텔이 개발한 CPU 시리즈와 명령어 집합을 통칭하는 말로, 이름이 x86인 이유는 초기 프로세서들 이름이 8086, 80186, 80286 등 다 86으로 끝나서였다고 한다. 그 중에서도 처음으로 32비트를 지원하는 CPU가 인텔 i386인데, 후에 인텔의 32비트 CPU 컴퓨터 아키텍처 IA-32는 다 이 i386을 기준으로 만들어졌기 때문에 i386 아키텍처는 IA-32를 통칭한다고 볼 수도 있는 것 같다.

하지만 32비트는 메모리 주소를 32비트밖에 사용할 수 없으므로, $2^{32}$바이트, 즉 4기가바이트의 메모리까지만 접근이 가능하다는 한계가 있었고, 더 나아가기 위해 64비트 CPU를 개발하기 위해 IA-32의 확장이 여러 개 제안되었다. 이 중 인텔이 완전히 새롭게 설계하여 IA-32와 호환되지 않는 IA-64와, IA-32와 호환되면서 64비트 명령을 추가한 AMD의 x86-64(또는 AMD64)가 있었다. x86-64가 시장의 선택을 받았고, 이후 인텔도 x86-64를 AMD로부터 라이선스를 받아 구현하면서 IA-64는 사실상 사장되고 x86-64가 표준이 되었다고 한다.

일단 내가 사용하는 리눅스 시스템의 아키텍처는 다음과 같이 x86-64로 확인되었다.

```text
$ uname -p
x86_64
```

x86-64 CPU로 i386 프로그램을 실행할 수 있는데 왜 실행이 되지 않는가.. 좀 더 찾아보니 elf 헤더를 읽어보면 다음과 같은 정보가 있다고 한다.

```text
$ readelf -a ./bof
ELF Header:
  Magic:   7f 45 4c 46 01 01 01 00 00 00 00 00 00 00 00 00
  Class:                             ELF32
  Data:                              2's complement, little endian
  Version:                           1 (current)
  OS/ABI:                            UNIX - System V
  ABI Version:                       0
  Type:                              DYN (Shared object file)
  Machine:                           Intel 80386
  Version:                           0x1
  Entry point address:               0x530
  Start of program headers:          52 (bytes into file)
  Start of section headers:          4428 (bytes into file)
  Flags:                             0x0
  Size of this header:               52 (bytes)
  Size of program headers:           32 (bytes)
  Number of program headers:         9
  Size of section headers:           40 (bytes)
  Number of section headers:         30
  Section header string table index: 27
 ...
```

즉 Machine이 Intel 80386, 즉 i386을 가리키고, 또한 해당 프로그램이 요구하는 라이브러리를 살펴보면,

```text
$ ldd ./bof
linux-gate.so.1 (0xf7f65000)
libc.so.6 => /lib/i386-linux-gnu/libc.so.6 (0xf7d60000)
/lib/ld-linux.so.2 (0xf7f67000)
```

역시 i386-linux-gnu 하위의 libc 라이브러리가 필요하다. 따라서 저 라이브러리를 dpkg로 설치하기 위해서 apt 패키지 저장소에서 libc를 설치해줘야 했던 것이다.

```bash
sudo apt-get install libc6:i386
```

를 실행해줘야 한다. 하지만 이를 하기 위해서는 패키지 저장소에 있는 i386 패키지 목록을 받아와야 하므로, 사용하는 아키텍처에 i386을 추가한 다음 apt update를 해줘야 한다. 그리고 이가 가능한 이유는 x86-64가 i386의 명령어 집합을 처리하기 때문이다. 만약 ARM 아키텍처가 요구되는 프로그램이었다면 별도의 에뮬레이터 없이는 실행이 불가능했을 것이다.

정리하자면, 해당 바이너리는 i386 CPU를 요구하는데, x86-64 아키텍처는 커널과 라이브러리의 도움을 받아 i386 바이너리를 실행할 수도 있다. 이를 가능하게 해주는 것이 dpkg을 i386 아키텍처를 추가하여 libc 라이브러리를 설치하게 해주는 것이다. 아직 ELF 프로그램이 실행되는 구체적인 과정 등 완전히 의문이 해소된 것은 아니지만, 이 정도면 그럭저럭 만족할만한 설명을 얻은 것 같다.

## 참고 문서

[1] [IA-32, Wikipedia](https://ko.wikipedia.org/wiki/%EB%AA%85%EB%A0%B9%EC%96%B4_%EC%A7%91%ED%95%A9)

[2] [명령어 집합, Wikipedia](https://ko.wikipedia.org/wiki/%EB%AA%85%EB%A0%B9%EC%96%B4%EC%A7%91%ED%95%A9)

[3] [x86, Wikipedia](https://ko.wikipedia.org/wiki/X86)

[4] [x86-64, Wikipedia](https://ko.wikipedia.org/wiki/X86-64)

[5] [Multiarch, HOWTO - Debian Wiki](https://wiki.debian.org/Multiarch/HOWTO)
