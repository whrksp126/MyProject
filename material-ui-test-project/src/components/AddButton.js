import React, {useState} from 'react'
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import fireDb from '../firebase'
import {useHistory, useParams} from 'react-router-dom'

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


const initialState = {
  name: "",
  link: "",
  price: "",
  sale: "",
  event: "",
  tag: "",
}

function AddButton() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [state, setState] = useState(initialState);
  const [data, setData] = useState();

  const { name, link, price, sale, event, tag } = state

  const history = useHistory();
  const {id} = useParams();

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setState({...state, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if( !name || !link || !price || !sale || !event || !tag ) {
      alert('내용을 다 입력해주세요')
    } else {
      if(!id) {
        fireDb.child('item').push(state, (err) => {
          if(err) {
            alert("err", err);
          } 
        })
      }
      setTimeout(()=>setOpen(false), 500)
    }
  }

  return (
    <>
      <div className="addButton" style={{width: '100%', position: 'relative',}}>
        <Button variant="contained" endIcon={<AddCircleIcon />} onClick={handleOpen}
          sx={{ bgcolor: '#ff485a', color: 'white', p: 2, position: 'absolute', top: 0, right: '3%', zIndex: '1',}}>
          상품 추가
        </Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            추가할 상품을 설정해 주세요
          </Typography>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 0.6, width: '300px' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField 
              id="name" 
              type="text" 
              name="name" 
              value={state.name} 
              onChange={handleInputChange} 
              label="상품 이름" 
              variant="outlined" 
            />
            <TextField 
              id="link" 
              type="url" 
              name="link" 
              value={state.link} 
              onChange={handleInputChange} 
              label="상품 이미지 링크" 
              variant="outlined" 
            />
            <TextField 
              id="price" 
              type="number" 
              name="price" 
              value={state.price} 
              onChange={handleInputChange} 
              label="상품 가격" 
              variant="outlined" 
            />
            <TextField 
              id="sale" 
              type="number" 
              name="sale" 
              value={state.sale} 
              onChange={handleInputChange} 
              label="상품 할인률" 
              variant="outlined" 
            />
            <TextField 
              id="event" 
              type="text" 
              name="event" 
              value={state.event} 
              onChange={handleInputChange} 
              label="상품 이벤트 내역" 
              variant="outlined" 
            />
            <TextField 
              id="tag" 
              type="text" 
              name="tag" 
              value={state.tag} 
              onChange={handleInputChange} 
              label="상품 태그" 
              variant="outlined" 
            />

          </Box>

          {/* 상품 등록 버튼 */}
          <Button 
            type="submit" 
            value="Save" 
            variant="contained" 
            onClick={handleSubmit}
            open={open}
            onClose={handleOpen}
            sx={{ 
              bgcolor: '#ff485a', 
              color: 'white', 
              p: 2, margin:1
            }}
          >
          상품 등록
        </Button>
        </Box>
      </Modal>
    </>
  )
}

export default AddButton
