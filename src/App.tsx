import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import SelfTest from './pages/SelfTest/SelfTest';
import PostBoard from './pages/PostBoard/PostBoard';
import LinkBoard from './pages/LinkBoard/LinkBoard';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AppLayout from './layouts/AppLayout';
import PostBoardWrite from './pages/PostBoardWrite/PostBoardWrite';
import LinkBoardWrite from './pages/LinkBoardWrite/LinkBoardWrite';
import NotFound from './pages/NotFound/NotFound';

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

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="" element={<Main />} />
          <Route path="admin_login" element={<></>} />
          <Route path="self_test" element={<SelfTest />} />
          {/* <Route path="/:linkBoard" element={<LinkBoard />} /> */}
          <Route path="linkBoard" element={<LinkBoard />} />
          {/* <Route path="/:postBoard" element={<PostBoard />} /> */}
          <Route path="postBoard" element={<PostBoard />} />
          <Route path="linkBoardWrite" element={<LinkBoardWrite />} />
          <Route path="postBoardWrite" element={<PostBoardWrite />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
