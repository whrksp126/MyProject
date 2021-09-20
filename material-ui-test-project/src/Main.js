import React from 'react'
import { createGlobalStyle } from 'styled-components'; 
import reset from 'styled-reset';
import firebase from './firebase'
import AppRouter from './components/AppRouter'


export default function Main() {
  const GlobalStyles = createGlobalStyle` 
    ${reset}; 
  `;

  return (
    <>
      {/* Reset.css설정 */}
      <GlobalStyles />
      <AppRouter />

    </>
  )
}
