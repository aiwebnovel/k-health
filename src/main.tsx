import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import 'reset-css';
import { GlobalStyles } from './styles/globalStyles.ts';
import { ConfigProvider } from 'antd';
import { ChakraProvider } from '@chakra-ui/react';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ChakraProvider>
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
    </ChakraProvider>
  </BrowserRouter>,
);
