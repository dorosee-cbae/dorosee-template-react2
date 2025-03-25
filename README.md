# React Template App

이 프로젝트는 React와 TypeScript를 기반으로 한 모던 웹 애플리케이션 템플릿입니다.

## 기술 스택

- **프레임워크**: React 18
- **언어**: TypeScript
- **빌드 도구**: Vite
- **스타일링**: Styled Components
- **상태 관리**: Zustand
- **라우팅**: React Router DOM
- **폼 관리**: React Hook Form
- **HTTP 클라이언트**: Axios
- **날짜 처리**: Day.js

## 프로젝트 구조

```
react-template-app/
├── src/
│   ├── assets/         # 이미지, 폰트 등 정적 리소스
│   ├── modules/        # 기능별 모듈
│   ├── pages/          # 페이지 컴포넌트
│   ├── shared/         # 공통 컴포넌트 및 유틸리티
│   ├── App.tsx         # 메인 애플리케이션 컴포넌트
│   └── main.tsx        # 애플리케이션 진입점
├── public/             # 정적 파일
├── .env.local         # 환경 변수
├── package.json       # 프로젝트 설정 및 의존성
├── tsconfig.json      # TypeScript 설정
├── vite.config.ts     # Vite 설정
└── eslint.config.js   # ESLint 설정
```

## 시작하기

### 필수 조건

- Node.js (버전은 .nvmrc 파일 참조)
- npm 또는 yarn

### 설치

```bash
# 의존성 설치
npm install
# 또는
yarn install
```

### 개발 서버 실행

```bash
# 개발 서버 실행
npm run dev
# 또는
yarn dev
```

### 빌드

```bash
# 프로덕션 빌드
npm run build
# 또는
yarn build
```

## 스크립트

- `npm run dev`: 개발 서버 실행
- `npm run build`: 프로덕션 빌드
- `npm run preview`: 빌드된 버전 미리보기
- `npm run lint`: ESLint를 통한 코드 검사

## 코드 스타일

이 프로젝트는 ESLint와 Prettier를 사용하여 코드 스타일을 유지합니다.

- ESLint: 코드 품질 검사
- Prettier: 코드 포맷팅

## 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다.
