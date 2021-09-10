import React from 'react'
import { createGlobalStyle } from 'styled-components'; 
import reset from 'styled-reset';
import Header from './components/Header'

export default function Main() {
  const GlobalStyles = createGlobalStyle` 
    ${reset}; 
  `;

  return (
    <>
      {/* Reset.css설정 */}
      <GlobalStyles />
      
      <Header />
      maincomponent입니다.
    </>
  )
}
