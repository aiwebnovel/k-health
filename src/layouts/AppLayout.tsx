import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import AppHeader from './AppHeader';
import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { app } from '../config/firebase';
import { myProfileStore } from '../store/index';

const AppLayout = () => {
  const { updateMyProfile } = myProfileStore((state) => state);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth(app);
    const authListener = onAuthStateChanged(auth, async (user) => {
      try {
        if (user) {
          // 유저가 로그인된 상태일 때 유저 정보를 가져옴
          updateMyProfile(user);

          // accessToken을 얻음
          const accessToken = await user.getIdToken();
          localStorage.setItem('login', accessToken);
        } else {
          // 유저가 로그인되지 않았을 때
          updateMyProfile(null);
          localStorage.removeItem('login');

          const regex = /^\/(link|post)\/[^\/]+\/write$/;
          if (regex.test(location.pathname)) {
            navigate('/');
          }
        }
      } catch (error) {
        console.error(error);
      }
    });

    return () => authListener();
  }, [location]);

  return (
    <div>
      <AppHeader />
      <section
        style={{
          maxWidth: '820px',
          margin: '0 auto',
          borderLeft: '1px solid rgba(5, 5, 5, 0.06)',
          borderRight: '1px solid rgba(5, 5, 5, 0.06)',
          padding: '0 30px',
          height: '100dvh',
        }}
      >
        <Outlet />
      </section>
    </div>
  );
};

export default AppLayout;
