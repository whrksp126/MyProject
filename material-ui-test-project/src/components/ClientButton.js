import React, {useState} from 'react'
import Button from '@mui/material/Button';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

const ClientButton = () => {

  const handleOpen = () => {
    // (상품 추가, 상품 삭제) 버튼을 안보이게 하고, 아이템의 상단에 하트 아이콘이 보이게 한다.
    
  }

  return (
    <>
      <div className="addButton" style={{width: '100%', position: 'relative',}}>
        <Button variant="contained" endIcon={<VolunteerActivismIcon />} onClick={handleOpen}
          sx={{ bgcolor: '#ff485a', color: 'white', p: 2, position: 'absolute', top: 0, right: '3%', zIndex: '1',}}>
          고객 모드
        </Button>
      </div>
    </>
  )
}

export default ClientButton
