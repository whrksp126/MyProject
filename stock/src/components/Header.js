import React, {useEffect, useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const location = useLocation();

  // 주소창의 변경에 따라 active를 설정함
  useEffect(()=> {
    if(location.pathname === '/'){
      setActiveTab('Home')
    } else if (location.pathname === '/add'){
      setActiveTab('AddContact');
    } else if (location.pathname === '/about'){
      setActiveTab('About');
    }
  }, [location])

  return (
    <div className="header">
      <p className='logo'>주식 투자 연습</p>
      <div className="header-right">
        <Link to='/'>
          <p 
            className={`${activeTab === 'Home' ? 'active' : ""}`}
            onClick={() => setActiveTab('Home')}
          >
            목록
          </p>
        </Link>
        <Link to='/add'>
          <p 
            className={`${activeTab === 'AddContact' ? 'active' : ""}`}
            onClick={() => setActiveTab('AddContact')}
          >
            추가
          </p>
        </Link>
        <Link to='/about'>
          <p 
            className={`${activeTab === 'About' ? 'active' : ""}`}
            onClick={() => setActiveTab('About')}
          >
            기타
          </p>
        </Link>
      </div>
      
    </div>
  )
}

export default Header