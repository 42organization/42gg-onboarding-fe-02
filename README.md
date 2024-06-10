# 42gg 프론트엔드 온보딩 2단계

# Figma design
https://www.figma.com/design/rk3Y72nAUvgWftEjkm9No4/42gg-onboarding-fe-02?m=dev&node-id=0-1&t=NEq0QwipRMChSLvz-1



















## 공통 조건

- 온보딩 프로젝트는 개인 계정으로 fork하여 진행하고 PR로 제출합니다.
- git / github / code 컨벤션은 42gg notion에 있는 자료를 적극 반영합니다.
- 최종 제출품에는 README 작성이 되있어야 합니다.([예시](https://github.com/42organization/42gg.client/blob/main/README.md))

## EX01. 가짜 데이터로 Party 방 클론 코딩

- (필수) [유저 권한별 페이지](https://zrr.kr/K2Xh)가 보이는 형식이 달라야 합니다.
  - (필수) 방장, 팀원, 유저 3개의 권한을 가진 유저별 정보 제공
- (필수) 함수 컴포넌트로 제작
- (필수) custom hook 1개 이상 사용
- (필수) any 타입 금지 [DON'T USE ANYSCRIPT](https://velog.io/@loopback_log/TS-any%ED%83%80%EC%9E%85%EC%9D%84-%EC%A7%80%EC%96%91%ED%95%B4%EC%95%BC%ED%95%98%EB%8A%94-%EC%9D%B4%EC%9C%A0)

|   필수   |     선택     |
| :------: | :----------: |
| Next.js  | react-query  |
| React.js | Tailwind CSS |
|  Recoil  |  msw (권장)  |
| Webpack  |     vite     |
|  eslint  |    Figma     |
| prettier |  MUI (권장)  |
|   SCSS   |              |
|  axios   |              |

---

## EX02. 실제 API로 연결해보기

- [Party API](https://www.notion.so/7bc89a47a7ea445b98dbe39ebe2b8e7d?v=b07892f030a34252baf75694fbb3e8bf&pvs=4)를 참고하시고 권한이 없다면 슬랙으로 알려주세요.

---

## EX02. [GG의 API](https://www.notion.so/083165bb58c949b09cf4f3912bfc57ab?v=d8eab92c27bf40569e1487c9071501e8&pvs=4)를 사용하여 내가 만들고 싶은 기능 하나 만들어보기

---

## 참고

- 유저 정보는 json-server or js 파일 내 객체를 이용하여 관리합니다.
- 궁금한 사항은 issue에 등록해주세요.
