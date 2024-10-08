import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import 'reset-css';
import { GlobalStyles } from './styles/globalStyles.ts';
import { ConfigProvider } from 'antd';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <GlobalStyles />
    <ConfigProvider
      theme={{
        components: {
          Radio: {
            /* here is your component tokens */
            radioSize: 20,
          },
        },
      }}
    >
      <App />
    </ConfigProvider>
  </BrowserRouter>,
);
