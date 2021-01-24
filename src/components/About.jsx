import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';


function About(){

    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        paper: {
           
            textAlign: 'center',
            backgroundColor:"#00040f",
            margin:"0 auto",
           
           
          },
          bottomPadd:{
              paddingBottom:"10px"
          },
          content:{
            fontSize:"18px",
            lineHeight: "1.7",
            letterSpacing:"0px",
          },
         listMargin:{
              margin:"5px"
         },

       
      }));
      
     
        const classes = useStyles();
      
        return (
          <div id="About">
            <Container className={classes.paper}>
             <Grid container spacing={1}>
              <Grid item xs={12}>
                 <h1 className={classes.bottomPadd}>About Me</h1>
                 <hr style={{width:"12%", margin:"0px auto 30px", border:"1px solid #64ffda"}}></hr>
              </Grid>
              <Grid item md={6} xs={12}>
              <div className={classes.content}>
              <p style={{marginBottom:"15px"}}> Hello! I'm Shahin, a full stack web developer.</p>
              <p style={{marginBottom:"15px"}}> With a passion for front end and back end development. I'm always eager to learn more in this fast paced industry. When I'm Not on the computer I love walking and hanging out with friends. </p>
              <p>Here are a few technologies I've been working with recently:</p> 
              </div>
             
              <div>
              <ul className="skillset">
                  <li className={classes.listMargin}>HTML</li>
                  <li className={classes.listMargin}>CSS</li>
                  <li className={classes.listMargin}>Javacsript</li>
                  <li className={classes.listMargin}>ReactJs</li>
                  <li className={classes.listMargin}>Material Ui</li>
                  <li className={classes.listMargin}>NodeJs</li>
                  <li className={classes.listMargin}>MongoDB</li>
                  <li className={classes.listMargin}>Git</li>
              </ul>
              </div>           
              </Grid>
              <Grid item xs={12} md={6} >
                <div >
                    <img src="./image/Shahin.jpeg" className="image"></img>     
                </div> 
              </Grid>
            </Grid>
            </Container>
          </div>
        )
}


export default About;