import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    html {
      --color-primary: #5558fa;
      --color-text: #333333;
      --color-white: #ffffff;
      --color-bg: #e9e9e9;
      --color-text-secondary: rgba(0,0,0, 0.48);
      --color-link: --color-primary;
      
      --font-size: 0.875rem;
      --font-size-secondary: 0.75rem;
      
      --border-radius: 0.25rem;
      --border-color: rgba(0,0,0, 0.16);
    }
`;

export default GlobalStyles;
