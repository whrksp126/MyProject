import React, {useState, useEffect} from 'react'
import Button from '@mui/material/Button';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function DeleteButton(props) {

  const trueFalse = false

  const handleOpen = () => {
    props.setData(!trueFalse)
  }

  return (
    <>
      <div className="addButton" style={{width: '100%', position: 'relative',}}>
        <Button 
          variant="contained" 
          onClick={handleOpen}
          endIcon={<DeleteForeverIcon />} 
          sx={{ 
            bgcolor: '#ff485a', 
            color: 'white', 
            p: 2, 
            position: 'absolute', 
            top: 0, 
            right: '15%', 
            zIndex: '1',
          }}
        >
        상품 삭제
        </Button>
      </div>
    </>
  )
}

export default DeleteButton;
