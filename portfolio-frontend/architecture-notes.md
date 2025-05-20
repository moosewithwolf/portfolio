render order flow
: main.tsx → App.tsx → DefaultLayout → AppRouter → each Page → combination of components

code writing order

1. components     // smallest unit of UI
2. layout         // shared structural wrapper
3. pages          // per-route page content
4. routes         // URL-to-page mapping
5. App.tsx        // global composition
6. main.tsx       // mount to root DOM element

| Export 방식               | Import 방식                      |
| ------------------------- | -------------------------------- |
| `export default Footer` | `import Footer from '...'`     |
| `export const Footer`   | `import { Footer } from '...'` |

###### components/ 공통 components

* 여러 페이지에서 재사용 가능: for reuse
* UI 단위로 설계 (ex: Button, Card, SectionTitle)
* 작고 독립적인 단위: small and independent feature

pages/Home/ features only for the page of home

* 오직 홈에서만 쓰는 UI : home only
* 재사용 고려하지 않음: no need to consider reusing
* 도메인 단위로 설계 (ex: Hero, About, Skills 등): based on domain such as each section in Home

src/pages/Home/
├── Home.tsx        ← 페이지 진입점
├── Hero.tsx        ← 이름, 한줄소개, CTA
├── About.tsx       ← 학력, 자기소개 요약
├── Skills.tsx      ← 사용 기술 아이콘
├── ProjectsPreview.tsx ← 대표 프로젝트 1~2개 요약
├── Activities.tsx  ← 동아리, 리더십 활동
└── index.ts        ← export { default } from './Home'
