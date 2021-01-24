import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';


function Project(){


  
    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        paper:{
            textAlign: 'center',
            backgroundColor:"#00040f",
            margin:"0 auto",
        }
    
      }));
      
        const classes = useStyles();



    return(
        <div id="Work" className={classes.root}>
        <Container className={classes.paper}>
         <Grid container spacing={3} >
        <Grid item xs={12}>
          <h1>Work</h1>
          <p style={{padding:"10px"}}>(more are coming soon)</p>
          <hr style={{width:"10%", margin:"10px auto 30px", border:"1px solid #64ffda"}}></hr>
        </Grid>
        <Grid item  xs={12}>
          <div className="project">
              <img src="./image/Keeper.png" width="100%" className="project-image"></img>
              <div className="overly">
              <div className="project-link"><Button style={{padding:"10px 20px" , color:"#fff", border:"2px solid #64ffda"}} variant="outlined" href="https://github.com/Shahin296/Keeper-App">View Page</Button></div>
          </div>
          </div>
        </Grid>
        <Grid item  xs={12} >
          <div className="project">
          <img src="./image/Authentication.png" width="100%" className="project-image"></img>
          <div className="overly">
              <div className="project-link"><Button style={{padding:"10px 20px" , color:"#fff", border:"2px solid #64ffda"}} variant="outlined"  href="https://github.com/Shahin296/Authentication">View Page</Button></div>
          </div>
          </div>
        </Grid>
        <Grid item xs={12} >
          <div  className="project">
          <img src="./image/ToDoList-img.png" width="100%" className="project-image"></img>
          <div className="overly">
    <div className="project-link"> <Button style={{padding:"10px 20px", color:"#fff", border:"2px solid #64ffda"}} variant="outlined"  href="https://github.com/Shahin296/ToDoList">View Page</Button></div>
          </div>
          </div>
        </Grid>
      </Grid>
      </Container>
        </div>
    )


}


export default Project;