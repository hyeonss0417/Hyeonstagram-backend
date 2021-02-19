<p align="center" >
<a href="#" align="center"> <img src="https://user-images.githubusercontent.com/13609011/84232431-3affaf80-ab2b-11ea-8ee7-7bbb77240e8c.jpeg" width="250" height="250" align="center"/></a>
</p>
<h1 align="center">
  Hyeonstagram API Server </br>  <img alt="Swift" src="https://img.shields.io/badge/API-GraphQL-red.svg"> <img alt="Database" src="https://img.shields.io/badge/Database-Prisma_MySQL-blue.svg"> <img alt="deploy" src="https://img.shields.io/badge/deploy-Heroku-purple.svg"> <img alt="Storage" src="https://img.shields.io/badge/storage-AWS S3-orange.svg">
</h1>

### 🔥 Motivation

> 인스타그램을 클론코딩하면서 React와 Hooks을 깊이 있게 이해하고 GraphQL과 Prisma을 공부하여 풀스택 개발을 하기 위해 프로젝트를 시작하였습니다.



## 서비스 소개

### [Instagram](https://www.instagram.com/) 풀스택 클론코딩 프로젝트
- 온라인 사진 공유 및 소셜 네트워킹 서비스
- 인스타그램의 프론트엔드, 백엔드 모두 클론 코딩하여 사진 업로드, 피드, Infinite Scroll, 포스팅/유저 검색, 댓글, 좋아요, 팔로잉, Skeleton loading 등 인스타그램의 주요 기능들을 구현하였습니다.


## UI

### 1) 메인 피드

![Feed mov](https://user-images.githubusercontent.com/13609011/84231891-21119d00-ab2a-11ea-86df-9fd15f30eb93.gif)

- 좋아요 / 좋아요 취소
    - 좋아요 쿼리 요청을 보내기 전 Frontend에서 먼저 좋아요 처리 ⇒ 반응속도 Up
- 댓글 작성
- 이미지 슬라이딩
    - CSS translateX + transition 를 이용하여 슬라이딩 구현

### 2) 무한 스크롤 (Infinite scroll)

![Infinity Scroll mov](https://user-images.githubusercontent.com/13609011/84231909-2969d800-ab2a-11ea-8735-28393d38c753.gif)

- Infinity Scroll
    - Observer 를 이용해 맨 아래 게시물 감지
    - ⇒ 서버에 offset과 limit 를 parameter로 전달하여 추가 피드 데이터 가져옴
- 마지막 게시물 게시물 도달 시 안내 메세지
    - Toastify 사용

### 3) 회원가입 & 로그인
<table>
   <tr>
     <th align="center">
       <img width="400" alt="1" src="https://user-images.githubusercontent.com/13609011/84231919-2e2e8c00-ab2a-11ea-9b4f-8c2f99061132.gif"/>
       <br><br>[회원가입]
     </th>
     <th align="center">
       <img width="400" alt="2" src="https://user-images.githubusercontent.com/13609011/84231912-2bcc3200-ab2a-11ea-9542-711d59f6cad8.gif"/>
       <br><br>[로그인] 
    </th>
  </tr>
</table>

- 이메일 인증 코드 방식 로그인
- 회원가입
    - Nodemailer 사용

### 4) Skeleton loading

<table>
   <tr>
     <th align="center">
       <img width="400" alt="1" src="https://user-images.githubusercontent.com/13609011/84231912-2bcc3200-ab2a-11ea-9542-711d59f6cad8.gif"/>
       <br><br>[피드]
     </th>
     <th align="center">
       <img width="400" alt="2" src="https://user-images.githubusercontent.com/13609011/84231936-34bd0380-ab2a-11ea-9949-9cae4adf19c6.gif"/>
       <br><br>[유저 홈] 
    </th>
  </tr>
</table>

- 쿼리 데이터 로딩
- 이미지 리소스 로딩

### 5) 유저 홈

<table>
   <tr>
     <th align="center">
       <img width="400" alt="1" src="https://user-images.githubusercontent.com/13609011/84231933-338bd680-ab2a-11ea-9506-b359cbb1faba.gif"/>
       <br><br>[유저 홈]
     </th>
     <th align="center">
       <img width="400" alt="2" src="https://user-images.githubusercontent.com/13609011/84231936-34bd0380-ab2a-11ea-9949-9cae4adf19c6.gif"/>
       <br><br>[반응형] 
    </th>
  </tr>
</table>


- 게시글 마우스 hover시 좋아요, 댓글 오버레이
- 부분 반응형 디자인 (게시글 사이 gap)
    - 미디어 쿼리 이용

### 6) Following & Unfollowing
<table>
   <tr>
     <th align="center">
       <img width="400" alt="1" src="https://user-images.githubusercontent.com/13609011/84231904-27077e00-ab2a-11ea-92f8-905738e872f8.gif"/>
       <br><br>[Following]
     </th>
     <th align="center">
       <img width="400" alt="2" src="https://user-images.githubusercontent.com/13609011/84231927-31c21300-ab2a-11ea-8602-14d9c73283c7.gif"/>
       <br><br>[Unfollowing] 
    </th>
  </tr>
</table>


- 피드에 Following 한 사람들의 게시물만 보여짐
- Unfollow 하면 피드에 해당 사람의 게시물이 사라짐

## 활용기술
- **[GraphQL]()**: 웹 클라이언트가 데이터를 서버로 부터 효율적으로 가져오는 것을 목적으로 만들어진 쿼리 언어로서 하나의 엔드 포인트를 통해 원하는 데이터를 한번에 가져올 수 있는 장점이 있습니다.
- **[heroku]()**: GraphQL API 서버와 Prisma-MySQL Database 배포하기 위해 사용.
- **[Amazon S3]()**: 온라인 스토리지 웹 서비스. 게시물의 이미지를 저장하기 위해 사용.
- **[multer]()**: Node.js 미들웨어로 파일 업로드 핸들링을 도와주는 모듈. 게시물의 이미지를 업로드 하기 위해 사용.
- **[babel]()**: 자바스크립트 컴파일러로 ES8으로 작성한 코드를 호환성을 위해 하위 버전 코드로 변환해주는 모듈.
- **[nodemailer]()**: Node.js 에서 e-mail 을 쉽게 보낼 수 있게 도와주는 모듈. 회원가입 시 이메일 인증을 위해 사용.
- **[passport]()**: 토큰인증방식을 위해 사용.
- **[morgan]()**: 서버 요청에 대한 기록을 콘솔에 저장하기 위해 사용.
