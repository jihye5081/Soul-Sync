# 🎵 Soul-Sync : K-pop Demon Hunters
넷플릭스 오리지널 애니메이션 영화 **케이팝 데몬 헌터스**를 바탕으로 질문에 답하면 나와 맞는 케데헌 캐릭터를 찾아주는 서비스입니다.

👉 [Soul-Sync](https://soul-sync-chi.vercel.app/)  
⏰ 개발 기간: &nbsp; 2025. 07. 28 ~ 2025. 08. (진행 중)

---

## ⚙️ Tech Stack

### Framework
![Next JS](https://img.shields.io/badge/Next.js-%23000000.svg?style=for-the-badge&logo=next.js&logoColor=white)
### Library
![React 19](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
### Styling
![Tailwind CSS 3](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
### Infra
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

---

## Structure
```
public
├── images(이미지 파일 관리 폴더)
src
├── app
│   ├── api(백엔드 api 폴더)
│   ├── page.tsx()
│   ├── layout.tsx()
│   ├── global.css()
│
├── components(재사용 컴포넌트들을 담은 폴더)
├── lib(폴더)
```

---

## 📝 Convention

- **상수**: `SNAKE_CASE`  
- **컴포넌트, Interface 타입**: `PascalCase`  
- **변수, 함수**: `camelCase`  
- **폴더명**: `kebab-case`  
- **파일명**
  - 페이지 및 API: `kebab-case`
  - 컴포넌트: `PascalCase`
  - 유틸리티: `camelCase`
<br />

- **Commit Type**
  - `feat` : 기능 추가  
  - `fix` : 버그 수정  
  - `docs` : 문서 수정  
  - `style` : 코드 스타일 변경 (세미콜론, 포맷팅 등)  
  - `design` : UI/디자인 변경  
  - `refactor` : 코드 리팩토링  
  - `test` : 테스트 코드 작성  
  - `build` : 빌드 파일 수정  
  - `ci` : CI 설정 변경  
  - `perf` : 성능 개선  
  - `chore` : 유지보수성 변경 (운영 코드 영향 없음)  
  - `rename` : 파일/폴더명 변경  
  - `remove` : 파일 삭제
<br />

- **Branch Naming**
  - `back/[type]/[camelCase]`  
  - `front/[type]/[camelCase]`  
  > 권장: **동사+목적** camelCase
<br />

- **Commit Message**
  - `type: 작업 내용`  
  > branch명과 연관된 작업 사항을 간단히 명시
<br />

- **Issue(Task) 작성**
  - [Back] init: DB Table 설계 및 연결  
  - [Back] 모델 생성  
  - [Back] 통계 API  
  - [Front] type: Content  
  - [Infra] 버셀 배포  
