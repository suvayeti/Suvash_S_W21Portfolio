import React from 'react'
import Cover from '../images/cover.jpg'
import Grid from '@material-ui/core/Grid'
import { Container, Paper, Box, Typography,  CardContent,  } from "@material-ui/core";

function CoverLtr() {
    return (                
        <div id="Cover" style={{ paddingTop:"65px"}}>           
            <h1 style={{height:"50px", backgroundColor:"blue", textAlign:"center", color:"white", }}>Cover letter</h1>
            <img width = "90%" src= {Cover} align="center" ></img>           
        </div>
    )
}

export default CoverLtr
