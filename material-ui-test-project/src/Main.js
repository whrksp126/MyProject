import React, {useState} from 'react'
import { createGlobalStyle } from 'styled-components'; 
import reset from 'styled-reset';
import AppRouter from './components/AppRouter'


export default function Main() {
  const GlobalStyles = createGlobalStyle` 
    ${reset}; 
  `;
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
      {/* Reset.css설정 */}
      <GlobalStyles />
      <AppRouter isLoggedIn={isLoggedIn} />

    </>
  )
}
