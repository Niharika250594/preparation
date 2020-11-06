import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const useStyles=makeStyles({
    root:{
        backgroundColor:'white',
        textTransform:'none',
        fontWeight:'bold',
        
        
        
    }
})

function Header(){
    const classes=useStyles();
    
    return(
        <div>
        <AppBar className={classes.root} >
        
        <Tabs style={{marginLeft:'auto'}}>
        <Typography  className={classes.root} >
        <Tab label="Home" style={{fontSize:18,color:'darkBlue'}}/>
        </Typography>
        <Typography  className={classes.root}>
        <Tab label="About" style={{fontSize:18,color:'darkBlue'}}/>
        </Typography>
        <Typography  className={classes.root}>
        <Tab label="Services" style={{fontSize:18,color:'darkBlue'}}/>
        </Typography>
        <Typography  className={classes.root}>
        <Tab label="Contact Us" style={{fontSize:18,color:'darkBlue'}}/>
        </Typography>
        
        </Tabs>
        </AppBar>
        
        
  


     </div>   
       
    )
}
export default Header