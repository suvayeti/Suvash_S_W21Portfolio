import React from "react";
// import "./styles/App.css";
import { Container, Paper, Box, Typography, Grid, CardContent,CardMedia,GridList } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from '@material-ui/core/CardActionArea';
import UserMgmt from "../images/UserMgmt.PNG"
import GymApp from "../images/GymApp.jpg"
import Cover from '../images/cover.jpg'
import GameShop from '../images/GameShop.PNG'
import Swift from '../images/swift.jpg'
import ChatApp from '../images/chatapp.PNG'
import Divider from '@material-ui/core/Divider';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: "80vw",
//     height: "100vh",
//     // backgroundColor: theme.palette.grey[300],
//     paddingTop: "65px",
//   },
// }));

const useStyles = makeStyles({
    root: {
        // width: "80vw",
        // height: "100vh",
        // // backgroundColor: theme.palette.grey[300],
        // paddingTop: "65px",
        flexGrow:1
    },
    media: {
    height: "100",
    // paddingTop: '56.25%', 
    // width:"100%",
    },
  });


function AcademicWork() {
     const classes = useStyles();
    return (  
        <>    
            <Container className={classes.root} id="AcademicWork">
             {/* <div id="AcademicWork" style={{ paddingTop:"65px"}}>             */}
                <h1 style={{height:"50px", backgroundColor:"blue", textAlign:"center", color:"white", }}>Academic Work</h1>
            <Grid container spacing ={4}  >
            <Grid item sm={4}>
                <card >
                <Paper style={{height:"80vh", display: "block"}}>
                
                    <CardContent >
                        <Typography> 
                         <h4>Client Management System</h4>
                         <hr/>
                         <p>
                             Client Management system was developed to track the
                             the number of clients working in a company. The client could 
                             login to their system after password and captcha verification.
                             They could store and modify their details, send notifications to
                              the admin, store and update user as well as shipping address as well 
                              as their credit card info. <br/>
                              The app was developed using Spring Boot, ThymeLeaf and H2 Database.
                         </p>
                         <hr/>
                        
                         <img width = "90%" src= {UserMgmt} align="center"></img>
                         

                        </Typography>
                        
                    </CardContent>
                </Paper>
                </card>
            </Grid>
            <Grid item sm={4}>
            <card >
                <Paper style={{height:"80vh", display: "block"}}>
                    <CardContent>
                        <Typography> 
                        <h4>Gym App</h4>
                         <hr/>
                            Gym App is an android application that can be used
                            to store information about a gym center. The application
                            can find out the nearby gym center along with the distance 
                            and the map. An admin can store the information of the gym center in
                            the app database. Admin can perform CRUD operations upon the User and
                            GYM data. A user can view the gym, see its location and the distance from him.
                            They can rate the gym center, view user rating as well as email
                            of gym center. The app uses Google API for location and distance calculation purpose.
                        </Typography>
                        <hr/>
                        <img height = "10%" width = "30%" src= {GymApp} align="center"></img>
                    </CardContent>
                </Paper>
                </card>
            </Grid>
            <Grid item sm={4}>
            <card>
                <Paper style={{height:"80vh", display: "block"}}>
                    <CardContent>
                        <Typography> 
                        <h4>Game Shop</h4>
                         <hr/>
                         It is a small console based JAVA application. The application was developed to use OOP & DSA. 
                         The application is a small inventory management system of a game shop where customers can log 
                         into the system, check available games and buy games of their choice with the money they have. The
                         application used Binary Trees, Linked list along with OOP concepts.
                        
                                
                        </Typography>
                        <hr/>
                        <img height = "30%" width = "90%" src= {GameShop} align="center"></img>
                    </CardContent>
                </Paper>
                </card>
            </Grid>


            
        </Grid>         
             {/* </div> */}

             
            </Container>

            <Container >
             <Grid container spacing ={4}  >
            <Grid item sm={6}>
                <card >
                <Paper style={{height:"80vh", display: "block",marginTop: "65px"}}>
                    <CardContent >
                        <Typography> 
                         <h4>Chat Application</h4>
                         <hr/>
                         <p>
                             
                            This is a react application using Socket.io library.
                            The application can be used to text chat between the 
                            members in groups. The application uses MongoDB for user, rooms and 
                            message management. The application uses Node, axios and Express.

                            <br/>
                              
                         </p>
                         <hr/>
                        
                         <img width = "90%" src= {ChatApp} align="center"></img>
                         

                        </Typography>
                    </CardContent>
                </Paper>
                </card>
            </Grid>
            <Grid item sm={6}>
            <card >
                <Paper style={{height:"80vh", display: "block", marginTop: "65px"}}>
                    <CardContent>
                        <Typography> 
                        <h4>Gym app in IOS</h4>
                         <hr/>
                            This is a small ios app developed to store and view gym centers. 
                            The app is a clone of gym app that was developed in android.
                            The application was developed using Swift language.
                        </Typography>
                        <hr/>
                        <img height = "10%" width = "30%" src= {Swift} align="center"></img>
                    </CardContent>
                </Paper>
                </card>
            </Grid>
        </Grid> 
            </Container>
            </>
        
       
    )
    
}

export default AcademicWork
