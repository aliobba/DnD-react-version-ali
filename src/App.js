import React from 'react';

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ModalInputText from "./Dnd/Modal/ModalInputText";
import Button from 'react-bootstrap/Button'
import ShowcaseLayout from "./Dnd/ShowcaseLayout";
import Droppable from "./Dnd/Droppable";
import Draggable from "./Dnd/Draggable";
import ListItemIcon from "@material-ui/core/ListItemIcon";

import MouseOverPopover from "./Dnd/Popovers/PopoverInputText";
import ListeMoney from "./Dnd/Items/listeMoney";


const drawerWidth = 240;


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));


const Item =  {
  color: '#55',
  backgroundColor: 'white',
  borderRadius: '3px',
  height: '100%',
  style :'width:auto'
}

const stylebutton ={
  height: 48,
  padding: '0 30px',
  margin: 8,
}
/* 
const spanStyles = {
  color: "#fff",
  borderColor: "#00f"
}; */
/* 
const Button1 = props => (
  
  <button style={{
    color: "#fff",
    borderColor: "#00f"
    
  }}>
  
    <span style={spanStyles}>Button Name</span>
  </button>
  
); */

class TestShow extends React.Component {
  state = { layout: [] };
  constructor(props) {
    super(props);
    this.state = { layout: [] };
        
    this.onLayoutChange = this.onLayoutChange.bind(this)

  }
  
  onLayoutChange(layout) {
    this.setState({ layout: layout });
    
  }


  

  stringifyLayout() {

    return this.state.layout.map(function(l) {
      const name = l.i === "__dropping-elem__" ? "drop" : l.i;
  
      return (

        <div className="layoutItem" key={l.i}>
          <b>{name}</b>
          {`: [${l.x}, ${l.y}, ${l.w}, ${l.h}]`}
        </div>
      );

     
    });
    
  }
 /*  onSave() {

    }


  onOpen() {

  }
  onPrint() {}
      
  


  getData (){
    let data =  localStorage.getItem('myData');
    let data2 =  localStorage.getItem('myData2');
    data =JSON.parse(data);

    console.log(data.name);
    console.log('jj '+data2);

  }
 *//* 
  render() {
  
    return (

        <div>
          <div>

            /* <Button onClick={this.onSave} style ={stylebutton}>save pdf </Button>
            <Button onClick={this.onOpen} style ={stylebutton} >open pdf </Button>
            <Button onClick={this.onPrint} style ={stylebutton}>print pdf </Button>



            <Button onClick={()=> this.getData()}style ={stylebutton} >save local storage</Button>
 */

        /*   </div>
          <div>

            <br></br>
          </div>
          <div >  <ShowcaseLayout onLayoutChange={this.onLayoutChange}  /></div>

        </div>
    );
  }
}
 */
 
render() {
  
 
  return (
    
    <div>
      <div className="layoutJSON">
        Displayed as <code>[x, y, w, h]</code>:
        <div className="columns">{this.stringifyLayout()}</div>
      </div>
      <ShowcaseLayout onLayoutChange={this.onLayoutChange} />
    </div>
  );
}
}
export default function MiniDrawer() {


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
    
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open,
            })}
        >
          <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, {
                  [classes.hide]: open,
                })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
             Create and Export pdf bills
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            })}
            classes={{
              paper: clsx({
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
              }),
            }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>

            <ListItem button>

              <ModalInputText />
            </ListItem>
          </List>
          <Divider />
          <List>


            <ListItem >
              <ListItemIcon>

                <MouseOverPopover/>
              </ListItemIcon>
      
              <Droppable id="dr1"  color="inherit"
                         aria-label="open drawer"
                         onClick={handleDrawerOpen}
                         edge="start"
                         className={clsx(classes.menuButton, {
                           [classes.hide]: open,
                         })}>


                <Draggable id="item3" style={ {margin:  '8px'}}><div style={Item}> <input type="text" name="name"  /> </div></Draggable>
                <Draggable id="item4" style={ {margin:  '8px'}}><div style={Item}> <ListeMoney/></div></Draggable>


              </Droppable>

            </ListItem>
          </List>

        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />


          <div>

<TestShow/>
          </div>
        </main>
      </div>
  );
}
