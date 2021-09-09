import React, {useEffect, useState} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

export default function PersistentDrawerLeft() {

  // 브라우저 가로길이 자동 입력
  const getWidth = () => window.innerWidth 
  || document.documentElement.clientWidth 
  || document.body.clientWidth;

  function useCurrentWidth() {
  // save current window width in the state object
  let [width, setWidth] = useState(getWidth());

  // in this case useEffect will execute only once because
  // it does not have any dependencies.
  useEffect(() => {
    // timeoutId for debounce mechanism
    let timeoutId = null;
    const resizeListener = () => {
      // prevent execution of previous setTimeout
      clearTimeout(timeoutId);
      // change width from the state object after 150 milliseconds
      timeoutId = setTimeout(() => setWidth(getWidth()), 25);
    };
    // set resize listener
    window.addEventListener('resize', resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener('resize', resizeListener);
    }
  }, [])

  return width;
  }

  let width = useCurrentWidth();
  const drawerWidth = width
  // 브라우저 가로 실제 길이 자동 입력
  
  const useStyles = makeStyles((theme) => ({
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // < 아이콘이 왼쪽으로 살짝 옴겨짐
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      // < 아이콘의 위 아래 여백이 생김
      justifyContent: 'flex-end',
    },
  }));

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton>
        <MenuIcon onClick={handleDrawerOpen}/>
      </IconButton>


{/* 버튼 누른 후 설정 하는 곳 */}

{/* < ico 줄 설정하는 곳 */}
      <Drawer
        open={open}
        classes={{
          paper: classes.drawerPaper,
          // 페이퍼 길이 조절
        }}
      >
        <div className={classes.drawerHeader}>
          {/* < 아이콘이 표시 되는 부분 스타일 설정 */}
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        {/* 밑줄 표시 */}


{/* Settings contents inside Drawer page */}
        {/* <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider /> */}
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
