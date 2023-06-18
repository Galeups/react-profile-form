import React from 'react';
import GlobalStyles from './GlobalStyles';
import AppStyled from './AppStyled';
import Card from './ui/Card/Card';
import Profile from './Profile/Profile';

function App() {
  return (
    <AppStyled>
      <GlobalStyles />
      <Card>
        <Profile />
      </Card>
    </AppStyled>
  );
}

export default App;
