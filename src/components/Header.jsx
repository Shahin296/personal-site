import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Link from '@material-ui/core/Link';


function Header(){


    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
          backgroundColor: "#00040f",
          boxShadow:"0 4px 5px #000",
          fontSize:"20px"

        },
        TabStyle: {
          color:"#fff",
         
        },
        ScrollBottom:{
          zIndex:"3",
          position:"absolute",
          left:"50%",
          top:"88%"
         
          
        }


      }));


    const [value, setValue] = useState(1);

    function handleChange(event, newValue) {
         setValue(newValue)
    } 


    const classes = useStyles();
    
   return(
  
    <div id="Home">
        <AppBar position="static" className={classes.root}>

         <Tabs  value={value} onChange={handleChange} aria-label="Navbar">
          <Tab style={{marginRight:"auto", fontWeight:"600"}} label="SHAHIN"  />
          <Tab className={classes.TabStyle} label="Home" href='#Home' component={Link} />
          <Tab className={classes.TabStyle}  label="About" href='#About' component={Link} />
          <Tab className={classes.TabStyle}  label="Work" href='#Work' component={Link}/>
          <Tab className={classes.TabStyle}  label="Contact" href='#Contact' component={Link}/>
        </Tabs>
      </AppBar>
      <div className="content">
         <h1 className="nameIntro">Hi, I'm Shahin</h1>  
         <p className="contentIntro">A Web Programmer</p>
     </div>
      
    </div>

)


}


export default Header;