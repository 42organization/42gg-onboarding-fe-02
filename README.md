# 42gg 프론트엔드 온보딩 2단계

## 실행 방법

```
cd gg02
npm install
npm start
```

## 구현된 기능

### 유저 정보
(src/UserInfo.js) 에 저장
```
id: 'hyobicho',
pw: '1111',
auth: 'normal'
---
id: 'coffee',
pw: '1111',
auth: 'normal'
---
id: 'manager1',
pw: '1111',
auth: 'manager'
---
id: 'admin1',
pw: '1111',
auth: 'admin'
```

### 로그인
<img src="https://github.com/42organization/42gg-onboarding-fe-02/assets/105159293/4b5272a2-5023-49ba-9249-fd6a12ddc49f" width="200"/>
<img src="https://github.com/42organization/42gg-onboarding-fe-02/assets/105159293/8fb27c7f-b7bd-4bf3-ae28-2445874eec50" width="200"/>
<img src="https://github.com/42organization/42gg-onboarding-fe-02/assets/105159293/6411553f-e165-43d3-a7d4-2edee685d3b2" width="200"/>

- 아이디 / 비밀번호 둘 중 하나라도 입력하지 않으면 에러
- 유저 객체 리스트에서 찾지 못하면 에러
- 등록된 유저이면 localStorage에 id와 auth 저장

### 권한 별 Routing
<img src="https://github.com/42organization/42gg-onboarding-fe-02/assets/105159293/a7a70940-1291-4b64-b502-749568209217" width="200" />
<img src="https://github.com/42organization/42gg-onboarding-fe-02/assets/105159293/4ea53fe9-0d7f-47eb-9f71-444f5c0d8687" width="200" />
<img src="https://github.com/42organization/42gg-onboarding-fe-02/assets/105159293/28a689d0-70eb-45fc-a5c7-d53c4fe0efe9" width="200" />

- 상단 Navbar에서 메인 페이지 이동, 로그아웃 가능
- Sidebar에는 권한 별로 접근 가능한 페이지 아이콘만 조회 가능
- 로그인하지 않은 유저는 로그인 페이지만 조회 가능
- 이미 로그인된 유저가 로그인 페이지 접속 시 메인 페이지로 이동

### 에러 페이지
<img src="https://github.com/42organization/42gg-onboarding-fe-02/assets/105159293/0b722b2d-68a1-4d1a-8116-2a4c40cca1d2" width="200" />
<img src="https://github.com/42organization/42gg-onboarding-fe-02/assets/105159293/8299ca84-58b9-4747-8db1-73dba1d36045" width="200" />

- 접근 권한이 없는 페이지 URL로 직접 접근 시 에러
- 존재하지 않은 URL 접근 시 에러
