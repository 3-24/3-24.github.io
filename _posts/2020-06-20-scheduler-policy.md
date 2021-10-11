---
title: 단일프로세서 스케줄링
categories:
- System
tags:
- scheduler
- FIFO
- SJF
- round robin
- MFQ
---

사용할 수 있는 CPU는 유한하지만 운영체제는 여러 개의 일task를 한꺼번에 작동시켜야 한다. 그래서 운영체제에서 일이 CPU를 점유하는 시간을 관리해주는 부분이 필요한데, 이를 스케줄러scheduler라고 한다.

## Performace Metric

어떤 방식의 스케줄링을 사용하는 것을 고민하기 전에, 그 스케줄링이 얼마나 효율적인지를 나타내는 지표들을 정리해보았다.

1. throughput: 시간당 처리가 끝나는 일의 수
2. turnaround time: 일이 완전히 처리될 때까지 걸리는 시간 ($T_{fin} - T_{arrival}$)
3. response time: 일이 처음 반응하기까지 걸리는 시간 ($T_{response} - T_{arrival}$)
4. waiting time: ready, wait상태에서 일이 기다린 시간의 합

특정 스케줄러로 여러 일을 처리했을 때 위 네 지표가 낮다면 그것은 효율적인 스케줄러이다.

문제의 단순화를 위해 프로세서가 하나만 있는 경우에 대해서만 다룬다.

## 1. FIFO

> 먼저 오는 일을 먼저 처리한다.

가장 먼저 생각해볼만한 방법이다. 먼저 오는 일을 먼저 처리한다. (First-In-First-Out)

<div align="center">
<img src = "/assets/img/scheduler/scheduler01.png" width="90%" style="background-color:white;"/>
    <p>
        Figure 1. FIFO Scheduling
    </p>
</div>

하지만 시간이 오래 걸리는 일이 먼저 처리되고, 시간이 적게 걸리는 일에 나중에 처리되면 성능이 급격히 하락한다. 예를 들면 P1, P2, P3, P4가 시간이 각각 20, 4, 3, 3만큼 거리는 일이라고 하고, 이들이 시간 0에 P1, P2, P3, P4 순서대로 FIFO 스케줄러에 도달했다고 하자. 그러면 Figure 1과 같이 스케줄링될 것이다. 그러면 총 turnaround time=20+24+27+30=91, 총 response time=0+20+24+27=71, 총 waiting time=0+20+24+27=71이다.

<div align="center">
<img src = "/assets/img/scheduler/scheduler02.png" width="90%" style="background-color:white;"/>
    <p>
        Figure 2. Optimal Scheduling
    </p>
</div>

만약에 Figure 2와 같이 스케줄링되었다면 총 turnaround time=3+6+10+30=49, 총 response time=0+3+6+10=19, 총 waiting time=0+3+6+10=19가 된다. 이와 같이 FIFO 방식으로 스케줄링 했을 때 오래 걸리는 일이 나머지 일의 처리를 지연시키는 상황을 convoy effect라고 한다.

**장점**

* 스케줄러의 계산량이 적다. 이전 일의 처리가 끝날 때마다 ready queue에서 첫 번째 일을 running state로 보내버리면 된다.
* 같은 이유로 구현이 간단하다.

**단점**

* 성능이 나쁘다. convoy effect에 의해 평균 response time, 평균 turnaround time, 평균 waiting time 모두 높다.

## 2. Shortest Job First (SJF)

> 남은 시간이 가장 짧은 일을 먼저 처리한다.

<div align="center">
<img src = "/assets/img/scheduler/scheduler02.png" width="90%" style="background-color:white;"/>
    <p>
        Figure 2. SJF Scheduling (Recall)
    </p>
</div>


Figure 2와 같이, **남은 시간이 가장 짧은 일을 먼저 처리하는 방식**이다. 가능한 스케줄링 방식 중에 평균 waiting time이 가장 낮다. 하지만 언제나 시간이 적게 걸리는 일을 시간이 많이 걸리는 일보다 먼저 처리하기 때문에, 시간이 적게 걸리는 일이 계속 쿼리될 경우 시간이 많이 걸리는 일이 먼저 쿼리되었음에도 불구하고 계속 처리가 지연된다. 이런 현상을 **starvation**이라고 한다.

**장점**

* 지표 상 성능이 좋다. 최소의 평균 waiting time을 보장하고, 평균 response time, 평균 turnaround time 모두 빠른 편에 속한다.

**단점**

* starvation이 발생한다.
* 완벽한 구현이 불가능하다. 일반적으로 스케줄러가 특정 일을 처리하기 전에 그 일이 얼마나 걸리는 지 확인할 방법이 없다. 그래서 그 일이 얼마나 걸릴지 이전 일들이 걸린 시간을 통해 유추하는 방법을 사용한다. 스케줄링은 운영체제에서 자주 일어나는 일이기 때문에 높은 계산량을 요구하는 유추 알고리즘은 사용할 수 없고, 이전 일들이 걸린 시간들의 단순한 선형 관계 정도의 유추 전략이 사용된다.

### Starvation을 해결하는 방법

SJF 스케줄링은 남은 시간을 priority(우선도)로 적용한 스케줄링 방식이다. 일반적으로 priority scheduling에서는 priority가 낮은 일이 priority가 높은 일에 비해 우선순위가 밀려서 처리되지 않는 starvation이 발생하는 것이 문제가 된다. 그래서 starvation을 해결하기 위해 다음 기법을 사용한다.

> **Aging**: 프로세스가 오랫동안 기다릴수록 priority를 높인다.

이렇게 starvation 문제를 해결하더라도 SJF는 어디까지나 '이론적인 스케줄러'일 뿐이다.

## 3. Round Robin

> 각 일이 정해진 시간 동안만 실행되는 FIFO

**FIFO지만, 각 일이 특정 시간 동안만 CPU를 점유할 수 있는** 스케줄링 방식이다. 

<div align="center">
<img src = "/assets/img/scheduler/scheduler03.png" width="90%" style="background-color:white;"/>
    <p>
        Figure 3. Round Robin Scheduling
    </p>
</div>

Figure 3는 time slice가 2로 설정되었을 때 스케줄링이 어떤 방식으로 이루어지는지를 보여준다. SJF와 달리 starvation도 발생하지 않고, FIFO에서 발생하는 convoy effect도 발생하지 않는다. 이렇게 보기에는 쓸만한 스케줄러 같지만, time slice의 크기에 따라 문제가 발생한다.

<div align="center">
    <img src = "/assets/img/scheduler/scheduler04.png" width="90%" style="background-color:white;"/>
    <p>
        Figure 4. Too Short Time Slice
    </p>
</div>

time slice가 너무 짧아서 FIFO에 비해 response time은 짧지만 나머지 지표가 좋지 않다. Figure 4에서 Round Robin의 모든 프로세스가 FIFO의 모든 프로세스보다 늦거나 같게 끝난다는 것을 확인할 수 있다.

<div align="center">
    <img src = "/assets/img/scheduler/scheduler05.png" width="80%" style="background-color:white;"/>
    <p>
        Figure 5. Too Long Time Slice
    </p>
</div>

한편, time slice가 너무 길면 Figure 5와 같이 I/O에 늦게 반응하게 된다. 정리해보면 다음과 같다.

* task가 대부분 CPU의 처리로 이루어진 CPU-bound task라면 time slice가 길어질수록 효율이 좋다. Figure 4에서 논한 문제는 time slice가 짧아서 발생하였다.
* task가 대부분 I/O를 기다리는 I/O-bound task라면 time-slice가 짧아야 한다. 만약 time slice가 길다면 입력과 출력에 반응하는 시간이 오래 걸린다. (response time 중시)

**장점**

* 기본적으로 FIFO이기 때문에 starvation이 발생하지 않는다.

**단점**

* time slice의 설정 방법에 따라, 그리고 스케줄링되는 task의 속성에 따라 성능이 달라진다. 

## 돌아보기

지금까지 FIFO, SJF, Round Robin 스케줄링을 알아보았다. 그 과정에서 각자 발생하는 장점과 단점이 있었는데 이들을 모아서 이상적인 스케줄러의 특성을 나열하면 다음과 같다.

* SJF처럼 짧게 걸리는 일을 빨리 처리해야한다.
* 특정 task가 오랫동안 실행되지 않는 starvation이 발생해서는 안된다.
* 스케줄링을 하는데 걸리는 시간이 오래걸려서는 안된다.
* CPU-bound task에 대해서 turnaround time을 줄여야 하고, I/O-bound task에 대해서 response time을 줄여야 한다.

## 4. Multi-Level Feedback Queue (MFQ)

최종적으로 이 글에서 소개할, 가장 발전된 형태의 uniprocessor 스케줄링 방식이다.

<div align="center">
<img src = "/assets/img/scheduler/scheduler06.png" width="60%" style="background-color:white;"/>
<p>
Figure 6. MFQ Scheduling
</p>
</div>

각자 독립된 priority를 가진 round robin 큐를 만든다. 높은 priority를 가진 큐를 rounb robin 방식으로 스케줄링하고, 종료되지 않은 프로세스를 한 단계 낮은 priority를 가진 큐에 넣는다.

* SJF 처럼 짧게 걸리는 일이 빨리 처리되는가? 예

  오래 걸리는 일은 round robin 큐를 여러 개 거치면서 priority가 낮아지기 때문에 짧게 걸리는 일이 우선적으로 처리된다.

* starvation이 발생하지 않는가? 아니오 -> 예(해결 가능)

  스케줄러가 높은 priority의 큐를 우선적으로 처리하기 때문에 낮은 priority의 큐에 있는 일이 오랫동안 처리되지 않는 starvation이 발생할 우려가 있다. 이 문제는 aging을 이용하면 해결된다. 매번 기다리는 상태에 있는 task를 한 단계 더 높은 priority를 가지는 큐에 넣어주면 된다.

* 스케줄링을 하는데 많은 양의 계산을 요구하지 않는가? 예

* CPU-bound task의 turnaround time이 적은가? 아니요->예(해결 가능)

  priority가 낮아질수록 round robin의 time slice를 높이면 된다.

* I/O-bound task의 reponse가 빠른가? 예

  만약 많은 양의 CPU의 처리가 요구되는 CPU-bound task가 들어온다면, 여러 큐를 거쳐가면서 priority가 낮아지는 반면, I/O-bound task의 경우 프로세서에서 처리하는 시간이 적어 priority가 잘 낮아지지 않기 때문에 높은 priority에 머무른다.
