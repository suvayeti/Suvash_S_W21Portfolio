import React from "react";
// import "./styles/App.css";
import { Container, Paper, Box, Typography, Grid, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    // width: "100vw",
    // height: "100vh",
    // minWidth: "50vw",
    // // backgroundColor: theme.palette.grey[300],
    // paddingTop: theme.spacing(5),
    flexGrow: 1
  },
}));

function Profile() {
    const classes = useStyles();
    return (
      <Container className={classes.root} id="Profile">
        <Grid container spacing ={4} direction="row" justify="center" alignItems="center" >
            <Grid item sm={4} float="none">
                <card >
                <Paper style={{height:"100vh", display: "block",  }}>
                    <CardContent >
                        <Typography> 
                         <h1>Bio/ About Me</h1>
                         <hr/>
                        I am a Self-motivated Web, mobile, desktop application Developer from Toronto, Ontario. 
                        
                        <br/>
                        <br/>
                        
                        I have acquired hands-on 
                        experience in all aspects of computer programming including, professional 
                        communications, administrative duties and computer hardware and networking 
                        through my studies as well as work experiences. I have developed, revised and updated
                        software that are interfaced with biometric and surveillance devices. Apart from them
                        I have developed different web, mobile and desktop apps during my studies at George Brown college.
                        I have consistently displayed 
                        both an aptitude and an enthusiasm for the task at hand throughout practical 
                        and academic courses. Effective at combining creativity and problem solving to 
                        develop user-friendly applications. Known among team members for strong wit and 
                        attention to detail no matter the complexity of the project.

                        </Typography>
                    </CardContent>
                </Paper>
                </card>
            </Grid>
            <Grid item sm={4}>
            <card >
                <Paper style={{height:"100vh", display: "block", }}>
                    <CardContent>
                        <Typography> 
                        <h1>My Philosophy</h1>
                         <hr/>
                            To me, computer programming is a life long process.
                            Therefore as a software developer we should always be in a study loop.
                            Technologies come and go very fast, we need to keep ourself updated and 
                            ready with changing technologies. 
                            
                                                        
                            I will 
                            keep myself updated with the latest versions of the programming 
                            languages and other emerging technologies. I will accomplish this 
                            by following reliable blog posts, news sources, online courses and self study.
                        </Typography>
                    </CardContent>
                </Paper>
                </card>
            </Grid>
            <Grid item sm={4}>
            <card>
                <Paper style={{height:"100vh", display: "block"}}>
                    <CardContent>
                        <Typography> 
                        <h1>Technical Skills</h1>
                         <hr/>
                        
                                Languages (HTML5, CSS3, JavaScript, C#, Java, Python, GraphQl)
                                <hr/>
                                Database Management (SQL, Oracle, MySQL, MongoDB, Firebase)
                                <hr/>
                                Libraries and Framework (ReactJS, .Net, Angular, Express.js, Spring Boot)
                                <hr/>
                                Server Environment (Node.js)
                                <hr/>
                                <hr/>
                                Machine/ Deep Learning (Python, numpy, pandas, scikit-learn, NLTK, tensorflow, keras)
                                <hr/>
                                Collaborative Tools (GitHub, Agile Methods, Travis Ci, Jira)
                                <hr/>
                        </Typography>
                    </CardContent>
                </Paper>
                </card>
            </Grid>
        </Grid>



      </Container>
    );
}

export default Profile
