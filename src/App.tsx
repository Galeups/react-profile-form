import React from 'react';
import GlobalStyles from './GlobalStyles';
import AppStyled from './AppStyled';
import Profile from './Profile/Profile';

function App() {
  return (
    <AppStyled>
      <GlobalStyles />
      <Profile />
    </AppStyled>
  );
}

export default App;
