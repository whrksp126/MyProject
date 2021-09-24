import React, {useState} from 'react'
import Header from '../components/Header'
import MainPageContent from '../components/MainPageContent'
import EditPageContent from '../components/EditPageContent'

export default function Home() {
  const [isClient, setIsClient] = useState(false)
  return (
    <>
      <Header />
      { isClient ?       
        <MainPageContent />
          : 
        <EditPageContent /> 
      }
    </>
  )
}
