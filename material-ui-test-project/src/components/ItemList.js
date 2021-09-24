import React, {useState, useEffect} from 'react'
import Box from '@material-ui/core/Box';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import fireDb from '../firebase'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import IconButton from '@mui/material/IconButton'
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

function ItemList(props) {
  
  // 관리자 모드가 활성화 되면 onDelete를 true로 만들어 주는 기능
  const [onDelete, setOnDelete] = useState();

  useEffect(()=>{
    setOnDelete(props.getData)
  },[props])

  const Lovelabel = { inputProps: { 'aria-label': 'delete' } };
  const Deletelabel = { inputProps: { 'aria-label': 'delete' } };
  const [ data, setData] = useState({});

  // 숫자 콤마 넣기
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  useEffect(()=> {
    fireDb.child('item').on('value', (snapshout) => {
      if (snapshout.val() !== null) {
        setData({...snapshout.val()});
      } else {
        setData({});
      }
    })

    return () => {
      setData({});
    }
  }, [])

  return (
    <>
      {/* Recomend Item */}
      <Box display="flex" flexWrap="wrap" >

        {/* item */}
        {Object.keys(data).map((id) => {
          return(
          <Box pb={5} key={id} marginRight={4.42}>


            <Box style={{ position: "relative" }}>

              {/* 사진 */}
              <Box 
                width="253px" 
                height="253px" 
                borderRadius={25}
                style={{ 
                  backgroundImage: `url("${data[id].link}")`,
                  backgroundSize: '100% 100%',
                  backgroundRepeat: 'no-repeat',
                }}
              >
              
              {/* 체크 박스 */}
              {onDelete ?  
                // 삭제 버튼           
                <Checkbox 
                  style={{ fontSize: 40, position: "absolute",   top:"10px",  left:"20px", color:"#757de8"}}
                  {...Deletelabel} 
                  icon={<RadioButtonUncheckedIcon style={{ fontSize: 40, color:"#757de8"}} />} 
                  checkedIcon={<CheckCircleOutlineIcon style={{ fontSize: 40, color:"#002984"}}/>} 
                />
                 : 
                // 관심 버튼
                <Checkbox 
                style={{ position: "absolute",   top:"10px",  left:"20px",  fontSize: 40, }}
                {...Lovelabel} 
                icon={<FavoriteBorder style={{ fontSize: 40, color:"#FF7D9E"}} />} 
                checkedIcon={<Favorite style={{ fontSize: 40, color:"#FF7D9E"}}/>} 
                /> 
              }
            </Box>

            {/* 상품 이름 */}
            <Box 
              width="253px" 
              marginTop="20px"
              fontSize={17}
            >
              {data[id].name}
            </Box>  

            {/* 상품 가격, 할인률 */}
            <Box  marginTop="10px" fontSize={23} mb={1}>
              <Box color="#ff485a" display="inline">{data[id].sale}%</Box>
              <Box display="inline" marginLeft={1.2}>{numberWithCommas(`${data[id].price}`)}</Box>
            </Box>  

            {/* 상품 이벤트 */}
            <Box 
              width="253px" 
              textOverflow="ellipsis"
              overflow="hidden"
              whiteSpace="nowrap"
              color="#ff485a"
            >
              {data[id].event}
            </Box>  
            </Box>
          </Box>
          )
        })}


      </Box>
    </>
  )
}

export default ItemList
