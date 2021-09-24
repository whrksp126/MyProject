import React, {useState} from 'react'
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import BuildIcon from '@mui/icons-material/Build';
import Home from '../routers/Home';

const ManagerButton = () => {

  const handleOpen = () => {
    // Home.js와 연결하여 버튼을 누르면 관리자 화면으로 변경하게 함
  }

  return (
    <>
      <div className="addButton" style={{width: '100%', position: 'relative',}}>
        <Button variant="contained" endIcon={<BuildIcon />} onClick={handleOpen}
          sx={{ bgcolor: '#ff485a', color: 'white', p: 2, position: 'absolute', top: 0, right: '3%', zIndex: '1',}}>
          관리자 모드
        </Button>
      </div>
    </>
  )
}

export default ManagerButton
