import React from 'react'
import Resume1 from '../images/Resume_1.jpg'
import Resume2 from '../images/Resume_2.jpg'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      width: "100vw",
      height: "100vh",
      // backgroundColor: theme.palette.grey[300],
      paddingTop: "25px",
    },
  }));

function Resume() {
    // const classes = useStyles();
    return (
        <>
        <div id="Resume" style={{ paddingTop:"65px"}}>       
        <h1 style={{ height:"50px", backgroundColor:"blue", textAlign:"center", color:"white" }}>Resume</h1>
               
        
        <img width = "90%" src= {Resume1} align="center"></img>
        <img width = "90%" src= {Resume2} align="center"></img>
        
        </div>
        </>
    )
}

export default Resume
