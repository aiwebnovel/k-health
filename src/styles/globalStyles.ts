import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
 :root {
        --primary-red-color: #F64747;
        --secondary-red-color: #ed1d24;

        --white-color-100: #fff;
        --white-color-200: #f4f4f4;
        --white-color-300: #f7f7f7;
        --white-color-400: #ddd;
        --white-color-500: #C0C0C0;
        --white-color-600: #b5b5b5;
        
        --font-size-title: 4rem;
        --font-size-large: 2.8rem;
        --font-size-medium: 2.2rem;
        --font-size-small: 2rem;
        --font-size-primary: 1.6rem;
    }

    body{
      background-color: var(--white-color-100);
      line-height: 1.3;
    }
`;
