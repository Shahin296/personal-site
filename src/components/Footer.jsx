import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

function Footer(){

    const useStyles = makeStyles((theme) => ({
        
        paper:{
            textAlign: 'center',
            backgroundColor:"#00040f",
            zIndex:0,
            
           
        },
        mediaIcon:{
             
            marginRight:"10px",
        }

    
      }));
      
        const classes = useStyles();


  return(
       <div id="Footer">
        <Button style={{marginBottom:"30px", position:"absolute" ,right:"3%"}} href="#top" color="primary"><ArrowUpwardIcon /></Button>
        <Container className={classes.paper}>
      <Button className={classes.mediaIcon} href="https://web.facebook.com/profile.php?id=100014597521832" color="primary"><FacebookIcon className="iconF"/></Button>
      <Button className={classes.mediaIcon} href="https://twitter.com/Mohamma73423080" color="primary"> <TwitterIcon className="iconF"/> </Button>
      <Button className={classes.mediaIcon} href="https://github.com/Shahin296" color="primary"> <GitHubIcon className="iconF"/> </Button>
      <Button className={classes.mediaIcon} href="https://www.linkedin.com/in/mohammad-shahin-miah-31327b204/" color="primary"><LinkedInIcon className="iconF"/></Button>
        </Container>
      </div>
  )

}

export default Footer;