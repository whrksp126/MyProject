import React from "react";
import Box from '@material-ui/core/Box';
import ImageSlider from './ImageSlider'


export default function MainPageContent() {
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
            {/* Button */}
            <Box display="flex" fontWeight={600} fontSize={20} justifyContent="flex-start" pl={1} paddingY={5} >
              <Box display="flex" justifyContent="center" width="60px" paddingX={2.5} paddingY={1.8} borderRadius={25} mr={3} bgcolor="#e5e5e5" >신상</Box>
              <Box display="flex" justifyContent="center" width="60px" paddingX={2.5} paddingY={1.8} borderRadius={25} mr={3} bgcolor="#e5e5e5">인기</Box>
              <Box display="flex" justifyContent="center" width="60px" paddingX={2.5} paddingY={1.8} borderRadius={25} mr={3} bgcolor="#e5e5e5">상의</Box>
              <Box display="flex" justifyContent="center" width="60px" paddingX={2.5} paddingY={1.8} borderRadius={25} mr={3} bgcolor="#e5e5e5">팬츠</Box>
            </Box>
            {/* Recomend Item */}
            <Box display="flex" flexWrap="wrap" justifyContent="space-between">

              {/* item */}
              <Box pb={5}>
                <Box >
                  <Box
                    border={1} 
                    width="253px" 
                    height="253px" 
                    borderRadius={25}
                  >
                  </Box>  
                  <Box 
                    border={1} 
                    width="253px" 
                    marginTop="20px"
                    fontSize={17}
                  >슬림 골지 폴라니트2종(T)
                  </Box>  
                  <Box 
                    border={1}
                    marginTop="10px"
                    fontSize={23}
                  >38%''''10,000</Box>  
                  <Box 
                    border={1}
                    width="253px" 
                    text-overflow="ellipsis"
                  >주말특가♥ 딱 3일만 인기상품 세일! 13일 17:00 까지!</Box>  
                </Box>
              </Box>

              {/* item */}
              <Box pb={5}>
                <Box >
                  <Box 
                    border={1} 
                    width="253px" 
                    height="253px" 
                    borderRadius={25}
                  >
                  </Box>  
                  <Box 
                    border={1} 
                    width="253px" 
                    marginTop="20px"
                    fontSize={17}
                  >슬림 골지 폴라니트2종(T)
                  </Box>  
                  <Box 
                    border={1}
                    marginTop="10px"
                    fontSize={23}
                  >38%''''10,000</Box>  
                  <Box 
                    border={1}
                    width="253px" 
                    text-overflow="ellipsis"
                  >주말특가♥ 딱 3일만 인기상품 세일! 13일 17:00 까지!</Box>  
                </Box>
              </Box>

              {/* item */}
              <Box pb={5}>
                <Box >
                  <Box 
                    border={1} 
                    width="253px" 
                    height="253px" 
                    borderRadius={25}
                  >
                  </Box>  
                  <Box 
                    border={1} 
                    width="253px" 
                    marginTop="20px"
                    fontSize={17}
                  >슬림 골지 폴라니트2종(T)
                  </Box>  
                  <Box 
                    border={1}
                    marginTop="10px"
                    fontSize={23}
                  >38%''''10,000</Box>  
                  <Box 
                    border={1}
                    width="253px" 
                    text-overflow="ellipsis"
                  >주말특가♥ 딱 3일만 인기상품 세일! 13일 17:00 까지!</Box>  
                </Box>
              </Box>

              {/* item */}
              <Box pb={5}>
                <Box >
                  <Box 
                    border={1} 
                    width="253px" 
                    height="253px" 
                    borderRadius={25}
                  >
                  </Box>  
                  <Box 
                    border={1} 
                    width="253px" 
                    marginTop="20px"
                    fontSize={17}
                  >슬림 골지 폴라니트2종(T)
                  </Box>  
                  <Box 
                    border={1}
                    marginTop="10px"
                    fontSize={23}
                  >38%''''10,000</Box>  
                  <Box 
                    border={1}
                    width="253px" 
                    text-overflow="ellipsis"
                  >주말특가♥ 딱 3일만 인기상품 세일! 13일 17:00 까지!</Box>  
                </Box>
              </Box>
              

              
              {/* item */}
              <Box pb={5}>
                <Box >
                  <Box 
                    border={1} 
                    width="253px" 
                    height="253px" 
                    borderRadius={25}
                  >
                  </Box>  
                  <Box 
                    border={1} 
                    width="253px" 
                    marginTop="20px"
                    fontSize={17}
                  >슬림 골지 폴라니트2종(T)
                  </Box>  
                  <Box 
                    border={1}
                    marginTop="10px"
                    fontSize={23}
                  >38%''''10,000</Box>  
                  <Box 
                    border={1}
                    width="253px" 
                    text-overflow="ellipsis"
                  >주말특가♥ 딱 3일만 인기상품 세일! 13일 17:00 까지!</Box>  
                </Box>
              </Box>

              
              {/* item */}
              <Box pb={5}>
                <Box >
                  <Box 
                    border={1} 
                    width="253px" 
                    height="253px" 
                    borderRadius={25}
                  >
                  </Box>  
                  <Box 
                    border={1} 
                    width="253px" 
                    marginTop="20px"
                    fontSize={17}
                  >슬림 골지 폴라니트2종(T)
                  </Box>  
                  <Box 
                    border={1}
                    marginTop="10px"
                    fontSize={23}
                  >38%''''10,000</Box>  
                  <Box 
                    border={1}
                    width="253px" 
                    text-overflow="ellipsis"
                  >주말특가♥ 딱 3일만 인기상품 세일! 13일 17:00 까지!</Box>  
                </Box>
              </Box>

              
              {/* item */}
              <Box pb={5}>
                <Box >
                  <Box 
                    border={1} 
                    width="253px" 
                    height="253px" 
                    borderRadius={25}
                  >
                  </Box>  
                  <Box 
                    border={1} 
                    width="253px" 
                    marginTop="20px"
                    fontSize={17}
                  >슬림 골지 폴라니트2종(T)
                  </Box>  
                  <Box 
                    border={1}
                    marginTop="10px"
                    fontSize={23}
                  >38%''''10,000</Box>  
                  <Box 
                    border={1}
                    width="253px" 
                    text-overflow="ellipsis"
                  >주말특가♥ 딱 3일만 인기상품 세일! 13일 17:00 까지!</Box>  
                </Box>
              </Box>

              
              {/* item */}
              <Box pb={5}>
                <Box >
                  <Box 
                    border={1} 
                    width="253px" 
                    height="253px" 
                    borderRadius={25}
                  >
                  </Box>  
                  <Box 
                    border={1} 
                    width="253px" 
                    marginTop="20px"
                    fontSize={17}
                  >슬림 골지 폴라니트2종(T)
                  </Box>  
                  <Box 
                    border={1}
                    marginTop="10px"
                    fontSize={23}
                  >38%''''10,000</Box>  
                  <Box 
                    border={1}
                    width="253px" 
                    text-overflow="ellipsis"
                  >주말특가♥ 딱 3일만 인기상품 세일! 13일 17:00 까지!</Box>  
                </Box>
              </Box>

              {/* item */}
              <Box pb={5}>
                <Box >
                  <Box 
                    border={1} 
                    width="253px" 
                    height="253px" 
                    borderRadius={25}
                  >
                  </Box>  
                  <Box 
                    border={1} 
                    width="253px" 
                    marginTop="20px"
                    fontSize={17}
                  >슬림 골지 폴라니트2종(T)
                  </Box>  
                  <Box 
                    border={1}
                    marginTop="10px"
                    fontSize={23}
                  >38%''''10,000</Box>  
                  <Box 
                    border={1}
                    width="253px" 
                    text-overflow="ellipsis"
                  >주말특가♥ 딱 3일만 인기상품 세일! 13일 17:00 까지!</Box>  
                </Box>
              </Box>

              
              {/* item */}
              <Box pb={5}>
                <Box >
                  <Box 
                    border={1} 
                    width="253px" 
                    height="253px" 
                    borderRadius={25}
                  >
                  </Box>  
                  <Box 
                    border={1} 
                    width="253px" 
                    marginTop="20px"
                    fontSize={17}
                  >슬림 골지 폴라니트2종(T)
                  </Box>  
                  <Box 
                    border={1}
                    marginTop="10px"
                    fontSize={23}
                  >38%''''10,000</Box>  
                  <Box 
                    border={1}
                    width="253px" 
                    text-overflow="ellipsis"
                  >주말특가♥ 딱 3일만 인기상품 세일! 13일 17:00 까지!</Box>  
                </Box>
              </Box>


            </Box>

            
            
          </Box>
        </Box>
      </Box>
    </>
  )
}
