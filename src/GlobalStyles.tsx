import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    html {
      --color-primary: #5558fa;
      --color-text: #333333;
      --color-white: #ffffff;
      --color-bg: #e9e9e9;
      --color-text-secondary: rgba(0,0,0, 0.48);
      --color-link: --color-primary;
      --color-avatar-bg: #d5e4f7;
      
      --font-size: 0.875rem;
      --font-size-secondary: 0.75rem;
      
      --border-radius: 0.25rem;
      --border-color: rgba(0,0,0, 0.16);
      --border-color-secondary: rgba(0,0,0, 0.08);
    }

    html,
    body {
      height: 100%;
      box-sizing: border-box;
    }

    *,
    ::after,
    ::before {
      box-sizing: inherit;
    }

    body {
      font-family: Roboto, Arial, sans-serif;
      font-size: 16px;
    }

    
    h1, h2, h3, h4, ul, li, ol {
      margin: 0;
      padding: 0;
    }
    
    h3 {
      font-weight: 600;
      font-size: 1.25rem;
      line-height: 1.625rem;
    }

    ul {
      list-style: none;
    }
    
`;

export default GlobalStyles;
