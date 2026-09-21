# 한동대학교 멋쟁이사자처럼 웹 사이트

hgu-likelion-website는 한동대학교 멋쟁이사자처럼 동아리의 공식 웹사이트입니다. 이 프로젝트는 동아리 활동, 모집 정보, 연락처 등을 제공합니다.

## 기술 스택

- **Framework**: [React](https://reactjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Material-UI (MUI)](https://mui.com/)
- **State Management**: [Recoil](https://recoiljs.org/)
- **Data Fetching**: [React Query](https://react-query.tanstack.com/)
- **Backend & Deployment**: [Firebase](https://firebase.google.com/)

## 프로젝트 구조

```
/src
├── apis/         # API 호출 함수
├── assets/       # 이미지, SVG 등 정적 에셋
├── components/   # 재사용 가능한 UI 컴포넌트
├── pages/        # 라우팅되는 페이지 컴포넌트
├── service/      # Firebase 관련 서비스
├── store/        # Recoil 상태 관리 (atoms)
├── theme/        # Material-UI 테마 설정
├── utils/        # 유틸리티 함수
├── App.tsx       # 메인 애플리케이션 컴포넌트
├── index.tsx     # 애플리케이션 진입점
└── Router.tsx    # 라우팅 설정
```

## 시작하기

1. **저장소 복제**

   ```bash
   git clone https://github.com/HGU-LikeLion/hgu-likelion-website.git
   cd hgu-likelion-website
   ```

2. **의존성 설치**

   ```bash
   npm install
   ```

## 사용 가능한 스크립트

- **`npm start`**: 개발 모드로 애플리케이션을 실행합니다.
- **`npm run build`**: 프로덕션용으로 애플리케이션을 빌드합니다.
- **`npm test`**: 테스트를 실행합니다.
- **`npm run deploy`**: Firebase Hosting에 애플리케이션을 배포합니다. (사전 빌드 필요)

## UI 개발 규칙

- 기본 컴포넌트는 MUI `Box`, `Grid`, `Typography`, `Button`을 사용합니다.
- 글꼴·크기·굵기·행간은 `Typography variant`로 지정합니다. 기존 `h1`~`body2` 등은
  `src/theme/typography.js`, 새 사이트의 반응형 타이포는 `src/theme/siteTypography.js`에서 관리합니다.
- 제목의 의미는 `component="h1"`처럼 별도로 지정합니다. 시각적 크기와 문서 구조를 혼동하지 않습니다.
- 색상·폰트는 `src/theme/siteTokens.js`를 기준으로 사용합니다. `sx`에서는 `site.accent`,
  `site.muted` 등의 팔레트 경로를 사용하고, 기존 페이지의 `primary.main`은 변경하지 않습니다.
- 여백·정렬 등 소수 속성만 추가할 때는 `sx`를 사용하고, 이를 위한 `styled` 래퍼는 만들지 않습니다.
- 복잡한 반응형 배치, 상태별 선택자, 가상 요소, 애니메이션 등은 `*.styles.ts`에 남깁니다.
- `sx`의 숫자 여백은 테마 spacing 단위입니다. 디자인상 정확한 픽셀 값이 필요하면 `'15px'`처럼
  단위를 명시합니다. `styled`의 숫자 px 값을 그대로 `sx`로 옮기지 않습니다.

```tsx
<Typography component="h1" variant="pageTitle">PROJECTs.</Typography>
<Box sx={{ display: 'grid', gap: 2 }}>
  <Typography component="h2" variant="cardTitle">프로젝트 이름</Typography>
  <Typography component="p" variant="bodyLarge" sx={{ color: 'site.muted' }}>
    프로젝트 소개
  </Typography>
</Box>
```

## 배포

이 프로젝트는 Firebase Hosting을 통해 배포됩니다. `main` 브랜치에 코드가 푸시되면 GitHub Actions가 자동으로 빌드 및 배포를 수행합니다.

수동으로 배포하려면 다음 명령어를 사용할 수 있습니다.

```bash
npm run deploy
```
