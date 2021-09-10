import React from 'react'
import { createGlobalStyle } from 'styled-components'; 
import reset from 'styled-reset';
import Header from './components/Header'
import MainPageContent from './components/MainPageContent'

export default function Main() {
  const GlobalStyles = createGlobalStyle` 
    ${reset}; 
  `;

  return (
    <>
      {/* Reset.css설정 */}
      <GlobalStyles />
      
      <Header />
      <MainPageContent />
    </>
  )
}
