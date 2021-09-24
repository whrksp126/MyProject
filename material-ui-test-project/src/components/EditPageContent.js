import React, {useState, useEffect} from "react";
import Box from '@material-ui/core/Box';
import ImageSlider from './ImageSlider';
import ItemList from './ItemList';
import AddButton from './AddButton'
import DeleteButton from './DeleteButton'
import Client from "./Client";

export default function EidtPageContent() {

  const [data, setData] = useState()

  const getData = data
  return (
    <>
      <Box>
        {/* 이미지 슬라이더 나와야 하는 곳 */}
        <Box>    
          <ImageSlider/>
        </Box>

        <Box width="100%" >
          {/* Inner */}
          <Box margin="auto" height="85%" paddingTop={9} bgcolor="background.paper" width="1442px">
            {/* Title */}
            <Box display="flex" width="1342px" fontWeight={900} fontSize={35} pl={1} >VTGS고객님을 위한 추천상품</Box>

          {/* 관리자 모드 버튼 */}
          <Client />
          
          {/* 아이템 추가 버튼 */}
          <AddButton/>

          {/* 아이템 삭제 버튼 */}
          <DeleteButton />

            {/* Button */}
            <Box display="flex" fontWeight={600} fontSize={20} justifyContent="flex-start" pl={1} paddingY={5} >
              <Box display="flex" justifyContent="center" width="60px" paddingX={2.5} paddingY={1.8} borderRadius={25} mr={3} bgcolor="#e5e5e5">신상</Box>
              <Box display="flex" justifyContent="center" width="60px" paddingX={2.5} paddingY={1.8} borderRadius={25} mr={3} bgcolor="#e5e5e5">인기</Box>
              <Box display="flex" justifyContent="center" width="60px" paddingX={2.5} paddingY={1.8} borderRadius={25} mr={3} bgcolor="#e5e5e5">상의</Box>
              <Box display="flex" justifyContent="center" width="60px" paddingX={2.5} paddingY={1.8} borderRadius={25} mr={3} bgcolor="#e5e5e5">팬츠</Box>
            </Box>
            {/* 추선상품 */}
            <ItemList getData={getData} setData={setData}/>
          </Box>

        </Box>
      </Box>
    </>
  )
}
