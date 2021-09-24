import React, {useState} from 'react'
import Button from '@mui/material/Button';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

const Client = () => {

  const handleOpen = () => {

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

export default Client
