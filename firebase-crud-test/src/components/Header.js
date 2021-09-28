import React, {useEffect, useState} from 'react'
import {Link, useLocation, useHistory} from 'react-router-dom'
import './Header.css'

const Header = () => {
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
          Contact App
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
            Home  
          </p>  
        </Link> 

        <Link to="/add">
          <p 
            className={`${ activeTab === "AddContact"  ? "active" : ""}`}
            onClick={() => setActiveTab("AddContact")}
          >
            Add Contact  
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

      </div>
    </div>
  )
}

export default Header
