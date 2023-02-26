import React from 'react';
import NavContainer from './src/navigation';
import { AppProvider } from './src/context/AppProviver';

function App() {
  return (
    <AppProvider>
      <NavContainer />
    </AppProvider>
  );
}

export default App;
