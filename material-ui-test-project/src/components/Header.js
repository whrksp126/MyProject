import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import RedeemIcon from '@material-ui/icons/Redeem';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const useStyles = makeStyles((theme) => ({
  input: {
    marginLeft: theme.spacing(3),
    flex: 1,
  },
  iconButton: {
    padding: 20,
    color: "black",
  },
}));

export default function Header() {
  const classes = useStyles();


  const defaultProps = {
    // bgcolor: 'background.paper',
    borderColor: 'cdcdcd'
  }
  

  return (
    

    <>

      {/* headerTop */}
      <Box bgcolor="warning.main" color="warning.contrastText"  height="40px" width="100%" borderBottom={1} {...defaultProps} >

        {/* headerTopInner */}
        <Box display="flex" justifyContent="flex-end" margin="0 auto" height="85%" paddingTop={0.8} bgcolor="background.paper" width="1442px"  >
          {/* headerTopInnerItem */}
          <Box display="flex" justifyContent="flex" alignItems="center" paddingRight="150px" fontSize={12}>
            <Box href="#" pr={4}>회원가입(+2만원)</Box>
            <Box href="#" pr={4}>고객센터</Box>
            <Box href="#" fontSize={11} border={1.2} pt={0.7} pb={0.7} pl={1.3} pr={1.3} borderRadius={6} >로그인</Box>
          </Box>

        </Box>

      </Box>

      {/* headerCenter */}
      <Box width="100%" height="135px" bgcolor="red" color="warning.contrastText">

        {/* headerCenterInner */}
        <Box display="flex" justifyContent="center" margin="auto" height="100%" bgcolor='background.paper' width="1442px">

          {/* headerCenterInnerItem */}
          <Box fixed display="flex" alignItems="center">
            {/* Logo */}
            <Box pr={3} fontWeight={900} fontSize={50} letterSpacing={2}>VTGS</Box>

            {/* inputSeach/ */}
            <Box mr={5} component="form" display='flex' width='350px' height='40px' borderRadius={22} borderColor='cdcdcd' border={3.5}>
              <InputBase 
                className={classes.input}
                inputProps={{ 'aria-label': 'search google maps' }}
              />
              <IconButton display="flex" type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon style={{ fontSize: 40 }}/>
              </IconButton >
            </Box>

            <Box pr={3} display="flex">
              <Box pr={3} width='40px' flexWrap="wrap" >
                <Box ><CheckCircleOutlineIcon style={{ fontSize: 40 }}/></Box>
                <Box fontSize={13}>출첵</Box>
              </Box>
              <Box pr={3}>
                <Box><FavoriteBorderIcon style={{ fontSize: 40 }}/></Box>
                <Box fontSize={13}>좋아요</Box>
              </Box>
              <Box pr={3}>
                <Box ><AddShoppingCartIcon style={{ fontSize: 40 }}/></Box>
                <Box fontSize={13}>장바구니</Box>
              </Box>
              <Box pr={3}>
                <Box><RedeemIcon style={{ fontSize: 40 }}/></Box>
                <Box fontSize={13}>기획전</Box>
              </Box>
            </Box>
            
            <Box display='flex' alignItems="center" borderBottom={1} width={180} >
              <Box pr={2.5} fontSize={13}>1. 실시간 인기 검색어</Box> 
              <ArrowDropDownIcon style={{ fontSize: 30 }}/>
            </Box>


          </Box>
        </Box>
      </Box>




      {/* headerBottom */}
      <Box bgcolor="warning.main" height="65px" borderBottom={1} {...defaultProps}>
        headerBottom
      </Box>

    </>
  );
}
