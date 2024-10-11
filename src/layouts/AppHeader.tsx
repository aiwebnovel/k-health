import { Button, Menu } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { Link, NavLink } from 'react-router-dom';
import shortid from 'shortid';

// const items = new Array(3).fill(null).map((_, index) => ({
//   key: String(index + 1),
//   label: `nav ${index + 1}`,
// }));

const navigationItems = [
  { key: shortid.generate(), label: <Link to="/self_test">체질 진단</Link> },
  { key: shortid.generate(), label: <Link to="/linkBoard">체질 정보</Link> },
  {
    key: shortid.generate(),
    label: (
      <Button
        onClick={() => {
          // 로그아웃
        }}
      >
        로그아웃
      </Button>
    ),
  },
];

const AppHeader = () => {
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
