import React from 'react';
import Menu from '@material-ui/core/Menu';
import {useState} from 'react';
import Button from "@material-ui/core/Button"

import MenuItem from '@material-ui/core/MenuItem';
function MenuComponent(){
    const [anchorEl,setAnchorEl]=useState(null);
    const [open,setOpen]=useState(false);
   const handleClick=(e)=>{
        setAnchorEl(e.currentTarget);
        setOpen(true)
    }
    const handleclose=(e)=>{
        setAnchorEl(null);
        setOpen(false)
    }
    return(
        <div>
        <Button onClick={(e)=>{handleClick(e)}} variant="contained" color="secondary" style={{marginTop:60,float:'left'}} aria-owns={anchorEl?"simple-menu":undefined} aria-haspopup={anchorEl?"true":undefined}>openmenu</Button>
        <Menu id="simple-menu" anchorEl={anchorEl} open={open} onClose={handleclose}>
        <MenuItem onClick={handleclose} >SCHOOL</MenuItem>
        <MenuItem onClick={handleclose}>COLLEGE</MenuItem>
        <MenuItem onClick={handleclose}>TUTORIAL</MenuItem>
        </Menu>
        </div>
    )

}
export default MenuComponent