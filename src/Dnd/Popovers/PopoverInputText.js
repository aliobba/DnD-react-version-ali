import React from 'react';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {PostAdd} from "@material-ui/icons";
//import DragItemOnclick from "../Items/DragItemOnclick";
//import Draggable from "../Draggable";
const useStyles = makeStyles((theme) => ({
    popover: {
        pointerEvents: 'none',
    },
    paper: {
        padding: theme.spacing(1),
    },
}));


export default function MouseOverPopover() {
   /*  const Item =  {
        color: '#55',
        backgroundColor: 'white',
        borderRadius: '3px',
        height: '100%'
      } */
      
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    
   
    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
   
    return (
        
   

        <div   >
            <Typography
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
               // onClick={onSave}
               

            >
        
                <PostAdd > </PostAdd>
            </Typography>
            <Popover
         
                id="mouse-over-popover"
                className={classes.popover}
                classes={{
                    paper: classes.paper,
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                <Typography>Input text.  </Typography>
            </Popover>
        </div>
    );
}
