import { Outlet } from 'react-router-dom';
import AppHeader from './AppHeader';

const AppLayout = () => {
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
        }}
      >
        <Outlet />
      </section>
    </div>
  );
};

export default AppLayout;
