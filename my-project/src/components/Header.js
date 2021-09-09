import React from 'react';
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import PersistentDrawerLeft from './PersistentDrawerLeft';
import IconButton from '@material-ui/core/IconButton';

function Header() {

  return (
    <>
      <div className="Header">

        <div className="Inner">

          <div className="Left">
            <div className="Menu">
            {/* <MenuIcon color="primary"/> */}
            <PersistentDrawerLeft />
            </div>
            <div className="Name">
              <a>빈전쇼</a>
              
            </div>
          </div>
          
          <div className="Right">
            <IconButton aria-label="Search" >
              <div className="Search"><SearchIcon/></div>
            </IconButton>
            <IconButton aria-label="Basket">
              <div className="Basket"><ShoppingCartIcon/></div>
            </IconButton>
            <IconButton aria-label="MyPage">
              <div className="MyPage"><PersonOutlineIcon/></div>
            </IconButton>
          </div>

        </div>
      </div>
    </>
  )
}

export default Header;
