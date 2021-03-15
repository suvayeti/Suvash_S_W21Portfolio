import React from 'react'
import Isc from '../images/Isc.jpg'
import Bach from '../images/Bach.jpg'
import Masters from '../images/masters.jpg'

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

function AcademicAwards() {
   
    return (
        <>
        <div id="AcademicAwards" style={{ paddingTop:"65px"}}>       
        <h1 style={{ height:"50px", backgroundColor:"blue", textAlign:"center", color:"white" }}>Academic Awards</h1>
         <img width = "90%" src= {Isc} align="center"></img>
        <img width = "90%" src= {Bach} align="center"></img>
        <img width = "90%" src= {Masters} align="center"></img>
       
        </div>
        </>
    )
}

export default AcademicAwards
