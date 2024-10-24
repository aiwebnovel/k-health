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
import PostDetail from './pages/PostDetail/PostDetail';
import AdminLogin from './pages/AdminLogin/AdminLogin';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import './language/i18n';

function App() {
  useEffect(() => {
    AOS.init();

    dayjs.locale('ko');
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="" element={<Main />} />
          <Route path="admin_login" element={<AdminLogin />} />
          <Route path="self_test" element={<SelfTest />} />
          <Route path="/link/:linkPath" element={<LinkBoard />} />
          <Route path="/post/:postPath" element={<PostBoard />} />
          <Route path="/post/:postPath/:id" element={<PostDetail />} />
          <Route path="/link/:linkPath/write" element={<LinkBoardWrite />} />
          <Route path="/post/:postPath/write" element={<PostBoardWrite />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
