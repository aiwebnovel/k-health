import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import SelfTest from './pages/SelfTest/SelfTest';
import PostBoard from './pages/PostBoard/PostBoard';
import LinkBoard from './pages/LinkBoard/LinkBoard';

function App() {
  //* 페이지

  // 어드민 로그인은 모달로 (로컬로 JWT 이용해서)

  // 메인페이지 '/'

  // 사상체질 자가진단 '/self_test'

  // 사상체질 정보모음 '/info_link'

  // 사상체질별 성격 '/personality'

  // 사상체질별 신체 특징 '/physical_characteristics'

  // 사상체질별 건강 특징 '/health_features'

  // 세상체질별 음식 '/food'

  // 글쓰기 '/write'

  // chatbase 파일 넣기
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/admin_login" element={<></>} />
        <Route path="/self_test" element={<SelfTest />} />
        <Route path="/:linkBoard" element={<LinkBoard />} />
        {/* <Route path="/:postBoard" element={<PostBoard />} /> */}
        <Route path="/postBoard" element={<PostBoard />} />
      </Routes>
    </>
  );
}

export default App;
