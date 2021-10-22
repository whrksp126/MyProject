import React, {useEffect, useState} from 'react'
import {Link, useLocation, useHistory} from 'react-router-dom'
import './Header.css'
import { useDispatch, useSelector} from 'react-redux';
import { logoutInitiate } from '../redux/actions';


const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleAuth = () => {
    if(currentUser) {
      dispatch(logoutInitiate());
    }
  }

  const [activeTab, setActiveTab] = useState("Home");
  const location = useLocation();
  const [search, setSearch] = useState("");

  const history = useHistory()

  useEffect(()=>{
    if(location.pathname === "/"){
      setActiveTab("Home")
    } else if (location.pathname === "/add") {
      setActiveTab("AddContact")
    } else if (location.pathname === "/about") {
      setActiveTab("About")
    }
  },[location])


  // 검색한 내용을 url에 저장함
  const handleSubmit = (e) => {
    e.preventDefault();

    history.push(`/search?name=${search}`)
    setSearch("");
  }

  return (
    <div className="header">
      <Link to="/">
        <p 
          className="logo" 
          onClick={() => 
            setActiveTab("Home")
          }
        >
          stock notepad
        </p>
      </Link>

      <div className="header-right">

        {/* 검색 input */}
        <form 
          onSubmit={handleSubmit} 
          style={{display: 'inline'}}
        >
          <input 
            type="text" 
            className="inputField" 
            placeholder="이름 검색..."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </form>
        
        <Link to="/">
          <p 
            className={`${ activeTab === "Home"  ? "active" : ""}`}
            onClick={() => setActiveTab("Home")}
          >
            메모장  
          </p>  
        </Link> 

        <Link to="/add">
          <p 
            className={`${ activeTab === "AddContact"  ? "active" : ""}`}
            onClick={() => setActiveTab("AddContact")}
          >
            신규 작성  
          </p>  
        </Link> 

        <Link to="/about">
          <p 
            className={`${ activeTab === "About"  ? "active" : ""}`}
            onClick={() => setActiveTab("About")}
          >
            About  
          </p>  
        </Link> 

        <button className="btn btn-danger" onClick={handleAuth}>로그 아웃</button>

      </div>
    </div>
  )
}

export default Header
