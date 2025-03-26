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
public/
src/
├── assets/
│   ├── fonts/
│   ├── icons/
│   └── images/
│
├── modules/            # 도메인별 기능 모듈
│   └── user/           # 사용자 관련 기능
│       ├── api/        # 사용자 관련 API 호출
│       ├── config/     # 사용자 관련 환경 설정 및 상수수
│       ├── hooks/      # 사용자 관련 커스텀 훅
│       ├── styles/     # 사용자 관련 스타일 관리
│       ├── types/      # 사용자 관련 타입 정의
│       ├── ui/         # 사용자 관련 UI 관리
│       └── utils/      # 사용자 관련 유틸리티 함수

├── shared/             # 공통으로 사용되는 코드들
│   ├── api/            # API 관련 설정 및 인터셉터
│   ├── components/     # 재사용 가능한 공통 컴포넌트
│   ├── config/         # 환경 설정 및 상수
│   ├── hooks/          # 커스텀 훅
│   ├── layout/         # 레이아웃 관련 컴포넌트
│   ├── store/          # 전역 상태 관리 (Zustand)
│   ├── types/          # 타입 정의
│   └── utils/          # 유틸리티 함수
│
├── .env.local          # 환경 변수
├── .gitignore          # git 업로드 시 배제할 파일 설정
├── .nvmrc              # node version
├── package.json        # 프로젝트 설정 및 의존성
├── tsconfig.json       # TypeScript 설정
├── vite.config.ts      # Vite 설정
└── eslint.config.js    # ESLint 설정
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
