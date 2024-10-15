import { Button, Menu } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { Link, NavLink } from 'react-router-dom';
import shortid from 'shortid';
import { myProfileStore } from '../store/index';
import { useToast } from '@chakra-ui/react';
import { authService } from '../config/firebase';

const AppHeader = () => {
  const toast = useToast();
  const { myProfile, updateMyProfile } = myProfileStore((state) => state);

  const logout = async () => {
    try {
      await authService.signOut();

      updateMyProfile(null);
      localStorage.removeItem('login');

      toast({
        position: 'top-right',
        title: '로그아웃',
        description: `로그아웃 되었습니다.`,
        status: 'info',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const navigationItems = [
    { key: shortid.generate(), label: <Link to="/self_test">체질 진단</Link> },
    {
      key: shortid.generate(),
      label: <Link to="/link/information">체질 정보</Link>,
    },
    {
      key: shortid.generate(),
      label: myProfile && <Button onClick={logout}>로그아웃</Button>,
    },
  ];

  return (
    <Header
      style={{
        backgroundColor: 'white',
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: '100%',
        height: '70px',
        borderBottom: '1px solid rgba(5, 5, 5, 0.06)',
        padding: 0,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          maxWidth: '860px',
          margin: '0 auto',
        }}
      >
        <NavLink to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="/images/logo.png"
            alt="demo-logo"
            style={{ height: '64px' }}
          />
        </NavLink>

        <Menu
          theme="light"
          mode="horizontal"
          items={navigationItems}
          style={{ flex: 1, minWidth: 0, border: 'none', fontSize: '15px' }}
        />
      </div>
    </Header>
  );
};

export default AppHeader;
