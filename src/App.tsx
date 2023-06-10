import React from 'react';
import GlobalStyles from './GlobalStyles';
import AppStyled from './AppStyled';
import CardStep from './ui/CardStep/CardStep';

function App() {
  return (
    <AppStyled>
      <GlobalStyles />
      <CardStep>App</CardStep>
    </AppStyled>
  );
}

export default App;
