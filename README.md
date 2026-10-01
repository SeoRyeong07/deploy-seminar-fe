# 배포 인증 방명록

배포 세미나 실습용 프로젝트입니다.  
Vercel에 배포하면 방명록에 본인 이름이 자동으로 등록됩니다.

## 기술 스택

- React + Vite
- Vercel 프론트엔드 주소: (https://deploy-seminar-fe-psi.vercel.app/)
- 백엔드 서버: [deploy-seminar-server](https://github.com/suhyun113/deploy-seminar-server)

## 주요 기능

- 배포 성공 시 자동으로 방명록에 이름 등록
- 자유롭게 방명록 글 작성
- 10초마다 자동으로 목록 갱신

## 로컬 실행

```bash
git clone https://github.com/suhyun113/deploy-seminar-fe.git
cd deploy-seminar-fe
npm install
```

`.env.example`을 참고해서 `.env` 파일을 만들어주세요.

```bash
cp .env.example .env
```

```bash
npm run dev
```

## 환경변수

| 변수명 | 설명 | 필요 환경 |
|--------|------|-----------|
| `VITE_API_URL` | 백엔드 서버 주소 | 로컬 + Vercel |
| `VITE_DEPLOYER_NAME` | 배포자 이름 (방명록 자동 등록용) | Vercel만 |

## Vercel 배포

1. 이 레포를 Fork
2. Vercel에서 Fork한 레포 Import
3. 환경변수 추가
   - `VITE_API_URL` = `https://deploy-seminar-server.onrender.com`
   - `VITE_DEPLOYER_NAME` = 본인 이름
4. Deploy
