import React from 'react';
import Main from './components/Main';
import { createGlobalStyle } from 'styled-components'; 
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}; 
`;



function App() {
  return (
    <> 
      <GlobalStyles /> 
      <Main />
    </>
  );
}

export default App;
