import React from 'react'
import { Container, Paper, Box, Typography, Grid, CardContent,CardMedia,GridList } from "@material-ui/core";

function ProfessionalWork() {
    return (
        <div id="professionalWork" style={{ paddingTop:"65px"}}>
        <h1 style={{height:"50px", backgroundColor:"blue", textAlign:"center", color:"white", }}>Professional Work</h1>
        <h1></h1>
        <Grid container spacing ={4}  >
            <Grid item sm={10}>
                <card >
                <Paper style={{height:"80vh", display: "block"}}>
                
                    <CardContent >
                        <Typography> 
                         <h4>All of these projects were developed while I was a government Employee in Nepal.</h4>
                         <hr/>
                         <li>
            <ul>
                <h4>I had developed and upgraded document archival software for digitally storing
                decisions made in the cabinet. It was developed in Microsoft .Net (C#), used Microsoft Sql server
                for the data storage and was interfaced with
                a scanner for scanning the documents</h4>
            </ul>
            <ul>
                <h4> I had developed and upgraded employee attendance system with PHP and MySql, the web app was
                interfaced with biometric device to read the thumb marks and mark the attendance.
                </h4>
            </ul>
            <ul>
                I had developed a parking monitoring system, the app was developed using PHP and could track
                the entry and exit of vehicles according to the RFID card swipped for the entry and exit from 
                parking lot.
            </ul>
            <ul>
                I had developed a Marks processing system to be used in Schools in Nepal. It used VB.Net and Microsoft
                SQL Server. The desktop app was used to process the results and print Mark sheets.
            </ul>
            </li>
                         <hr/>
                        
                        

                        </Typography>
                        
                    </CardContent>
                </Paper>
                </card>
            </Grid>
            </Grid>







        
        </div>
    )
}

export default ProfessionalWork
