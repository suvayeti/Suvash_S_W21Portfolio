import React from 'react';
// import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import img from '../images/mypic.jpg'

import FileSaver from "file-saver"

const saveFile = () => {
  FileSaver.saveAs(
     process.env.PUBLIC_URL + "/Suvash_resume.pdf",
     "Suvash_resume.pdf"
  );
  }
  
  const saveCertification = () => {
    FileSaver.saveAs(
       process.env.PUBLIC_URL + "/recent.pdf",
       "Suvash_recent_certifications.pdf"
    );
    }

const useStyles = makeStyles({
    root: {
      minWidth:"50%",
      flexGrow:1

    },
    media: {
     height: "50vh",
      minWidth: "5vw",
      minHeight:"10vw",
      
      
    },
  });


export default function Flashcard() {
    const classes = useStyles();

  return (
    <Card minWidth="50vh">
        <img src={img} width="100%"/>
      <CardActions>
      
        <Button size="medium" variant="contained"  color="primary" onClick={saveCertification}>
          Recent Certifications
        </Button>
        
        <Button size="medium" variant="contained" color="primary" onClick={saveFile}>
          Download CV
        </Button>
      </CardActions>
    
    </Card>
  );
}
