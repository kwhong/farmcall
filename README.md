# FarmCall - 농장 전화 주문 관리 시스템

농산물 판매 농장 사무장을 위한 전화 주문 관리 솔루션

## 📌 프로젝트 개요

전화로 주문받는 농산물 판매 농장에서 **전화가 오는 순간 고객 정보와 주문 이력을 자동으로 표시**하여, 빠르고 정확한 고객 응대를 지원하는 시스템입니다.

### 핵심 가치
- 전화벨이 울리면 즉시 고객 정보 확인
- 이전 주문 이력으로 빠른 재주문 처리
- 통화 후 간편한 주문 등록 및 관리

---

## 🛠️ 기술 스택

| 구분 | 기술 |
|------|------|
| **웹 프론트엔드** | Next.js 14, React 18, Tailwind CSS |
| **모바일 앱** | Expo (React Native) |
| **백엔드** | Next.js API Routes (Vercel Serverless) |
| **데이터베이스** | Supabase (PostgreSQL) |
| **실시간 통신** | Supabase Realtime |
| **인증** | Supabase Auth |
| **호스팅** | Vercel (웹), EAS (앱) |

---

## 📁 프로젝트 구조

```
farmcall/
├── apps/
│   ├── web/                 # Next.js 웹 관리 시스템
│   │   ├── app/             # App Router
│   │   ├── components/      # React 컴포넌트
│   │   └── lib/             # 유틸리티
│   └── mobile/              # Expo 모바일 앱
│       ├── app/             # Expo Router
│       ├── components/      # React Native 컴포넌트
│       └── services/        # 전화 감지 등 서비스
├── packages/
│   └── shared/              # 공유 타입, 유틸리티
│       ├── types/           # TypeScript 타입 정의
│       └── utils/           # 공통 유틸리티
├── supabase/
│   └── migrations/          # DB 마이그레이션
└── docs/                    # 문서
```

---

## 🚀 시작하기

### 사전 요구사항
- Node.js 18+
- pnpm 8+
- Supabase 계정
- Vercel 계정 (배포용)

### 설치

```bash
# 저장소 클론
git clone https://github.com/kwhong/farmcall.git
cd farmcall

# 의존성 설치
pnpm install

# 환경 변수 설정
cp apps/web/.env.example apps/web/.env.local
cp apps/mobile/.env.example apps/mobile/.env

# 개발 서버 실행
pnpm dev
```

### 개발 명령어

```bash
# 전체 개발 서버 실행
pnpm dev

# 웹만 실행
pnpm dev:web

# 모바일만 실행
pnpm dev:mobile

# 타입 체크
pnpm typecheck

# 린트
pnpm lint
```

---

## 🎯 주요 기능

### 📱 모바일 앱 (Android/iOS)
- 전화 수신 자동 감지
- 발신자 번호 서버 전송
- 백그라운드 동작

### 💻 웹 관리 시스템
- 실시간 전화 알림 팝업
- 고객 관리 (CRM)
- 주문 관리
- 상품 관리
- 대시보드 및 통계

---

## 📄 라이선스

MIT License

---

**Made with ❤️ for 농업인**
