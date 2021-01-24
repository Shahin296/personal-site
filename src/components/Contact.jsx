import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

function Contact(){


    const useStyles = makeStyles((theme) => ({
        
        paper:{
            textAlign: 'center',
            backgroundColor:"#00040f",
           
        },
        idiom:{
            marginBottom: "20px",
            color:"#64ffda"
        },
        title:{
            marginBottom:"10px"
        },
         contact:{
            fontSize:"18px",
            lineHeight: "1.7",
             letterSpacing:"0px",
             minWidth:"50%",
             margin:"0 auto",
        }
    
      }));
      
        const classes = useStyles();

return(
    <div id="Contact">
       <Container className={classes.paper}>
       <h3 className={classes.idiom}>What's next ?</h3>
        
       <h1 className={classes.title}>Get In Touch!</h1>
       <hr style={{width:"14%", margin:"10px auto 30px", border:"1px solid #64ffda"}}></hr>
       <p className={classes.contact}>Whether you have an idea for a project or just want to chat,<br></br> feel free to shoot me an email.</p>
        <div className="contactButton"> <Button style={{padding:"10px 20px" , color:"#fff", border:"1px solid #64ffda"}} variant="outlined"  href="Mailto:Shahinmiah3232@gmail.com">Say Hello</Button></div>
       
       </Container>
    </div>
)

}


export default Contact;


