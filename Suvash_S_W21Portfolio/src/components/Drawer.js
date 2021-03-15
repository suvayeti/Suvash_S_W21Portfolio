import React, {useState} from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Person from '@material-ui/icons/Person';
import Avatar from '@material-ui/core/Avatar';
import HomeIcon from '@material-ui/icons/Home';
import EmojiEventsOutlined from '@material-ui/icons/EmojiEventsOutlined'
import img from '../images/mypic.jpg'
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import { HashLink as Link} from 'react-router-hash-link'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: -drawerWidth,
  },
  sizeAvatar: {
    height: theme.spacing(10),
    width: theme.spacing(10),
    align: 'center',
  },
  backColor:{
      backgroundColor:"black"
  }
}));

export default function ModifiedDrawer({showProfile}) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const [pData, setPData]= useState("none")
  const [aCredential, setACredential]= useState("none") //display or hide academic credentials
  const [aWorkExp, setAWorkExp]= useState("none") //display or hide academic work Experience
  const [proffSummary, setProffSummary]= useState("none") //display or hide professional summary
  const [home, setHome]=useState("none") 
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleDisplay = (e) => {
    showProfile()
    // alert("Clicked me")
  }
  const displayPData=()=>{
  // setPData("none")
  setACredential("none")
  setAWorkExp("none")
  setProffSummary("none")
  setHome("none")
    if(pData=="none"){
    setPData("block")
    }else{
      setPData("none")
    }
  }
const displayAcademicCredentials=()=>{
  setPData("none")
  // setACredential("none")
  setAWorkExp("none")
  setProffSummary("none")
  setHome("none")
  if(aCredential=="none"){
    setACredential("block")
    }else{
      setACredential("none")
    }
}
const displayAcademicWorkExp=()=>{
  setPData("none")
  setACredential("none")
  // setAWorkExp("none")
  setProffSummary("none")
  setHome("none")
  if(aWorkExp=="none"){
    setAWorkExp("block")
    }else{
      setAWorkExp("none")
    }
}

const displayProffessionalSummary=()=>{
  setPData("none")
  setACredential("none")
  setAWorkExp("none")
  // setProffSummary("none")
  setHome("none")
  if(proffSummary=="none"){
    setProffSummary("block")
    }else{
      setProffSummary("none")
    }
}
const displayHome=()=>{
  setPData("none")
  setACredential("none")
  setAWorkExp("none")
  setProffSummary("none")
  if(home=="none"){
    setHome("block")
    }else{
      setHome("none")
    }
}

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
            Suvash Sharma
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <Typography variant="body1" noWrap className={classes.title}>
            More on me
          </Typography>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
     
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        
        <Avatar alt="Remy Sharp" src={img} sizes='100px'  className={classes.sizeAvatar} />
        <Divider/>
        <List>
        <ListItem
        onClick={displayPData} >                   
            <Typography>Personal Data </Typography>           
        </ListItem>
        <Divider/>
        <div style={{display:`${pData}`}} >
          <List>
          <ListItem               
          >
              <Button fullWidth="true" style={{justifyContent: "flex-start"}} onClick={handleDrawerClose}>        
              <Person /> <Link smooth to ="#Profile">Bio</Link>
              </Button>
          </ListItem>
        
          <ListItem>
              <Button fullWidth="true" style={{justifyContent: "flex-start"}} onClick={handleDrawerClose}>        
              <Person /> <Link smooth to ="#Resume">Resume</Link>
              </Button>
          </ListItem>
          <ListItem>
              <Button fullWidth="true" style={{justifyContent: "flex-start"}} onClick={handleDrawerClose}>        
              <Person /> <Link smooth to ="#Cover">Cover Letter</Link> 
              </Button>
          </ListItem>
          <ListItem>
              <Button fullWidth="true" style={{justifyContent: "flex-start"}} onClick={handleDrawerClose}>        
              <Person /> <Link smooth to ="#Profile">Philosophy</Link>
              </Button>
          </ListItem>
          </List>
        </div>
        <ListItem
        onClick={displayAcademicCredentials}
        >                   
            <Typography>Academic Credentials </Typography>           
        </ListItem>
        <Divider/>
        <div style={{display:`${aCredential}`}} >
        <List>
        <ListItem>
            <Button fullWidth="true" style={{justifyContent: "flex-start"}} onClick={handleDrawerClose}>        
            <EmojiEventsOutlined /> <Link smooth to ="#AcademicAwards">Academic Awards</Link> 
            </Button>
        </ListItem>
        <ListItem>
            <Button fullWidth="true" style={{justifyContent: "flex-start"}} onClick={handleDrawerClose}>        
            <EmojiEventsOutlined /> <Link smooth to ="#AcademicRecord">Academic Records</Link> 
            </Button>
        </ListItem>

        </List>
        </div>
        <ListItem
        onClick={displayAcademicWorkExp}
        >                   
            <Typography>Academic Work Exp. </Typography>           
        </ListItem>
        <Divider/>
        <div style={{display:`${aWorkExp}`}} >
        <List>
        <ListItem>
            <Button fullWidth="true" style={{justifyContent: "flex-start"}} onClick={handleDrawerClose}>        
            <WorkOutlineOutlinedIcon /> <Link smooth to ="#AcademicWork">Academic Works</Link>
            </Button>
        </ListItem>
        <ListItem>
            <Button fullWidth="true" style={{justifyContent: "flex-start"}} onClick={handleDrawerClose}>        
            <WorkOutlineOutlinedIcon /> <Link smooth to ="#capstone">Capstone Project</Link>  
            </Button>
        </ListItem>

        </List>
        </div>
        
        <ListItem
        onClick={displayProffessionalSummary}
        >                   
            <Typography>Proff. Summary </Typography>           
        </ListItem>
        <Divider/>
        <div style={{display:`${proffSummary}`}} >
        <List>
        <ListItem>
            <Button fullWidth="true" style={{justifyContent: "flex-start"}} onClick={handleDrawerClose}>        
            <AssignmentTurnedInOutlinedIcon />  <Link smooth to ="#professionalWork">Professional Work Samples</Link> 
            </Button>
        </ListItem>
        <ListItem>
            <Button fullWidth="true" style={{justifyContent: "flex-start"}} onClick={handleDrawerClose}>        
            <AssignmentTurnedInOutlinedIcon /> <Link smooth to ="#communityService">Community Services</Link>
            </Button>
        </ListItem>
        <ListItem>
            <Button fullWidth="true" style={{justifyContent: "flex-start"}} onClick={handleDrawerClose}>        
            <AssignmentTurnedInOutlinedIcon /> <Link smooth to ="#recommendation">Recommendation</Link>
            </Button>
        </ListItem>
        <ListItem>
            <Button fullWidth="true" style={{justifyContent: "flex-start"}} onClick={handleDrawerClose}>        
            <AssignmentTurnedInOutlinedIcon /> <Link smooth to ="#awardsNRecognition">Awards and Recognition</Link>
            </Button>
        </ListItem>
        </List>
        </div>
        <ListItem onClick={displayHome}>
            <Button fullWidth="true" style={{justifyContent: "flex-start"}} onClick={handleDrawerClose}>        
            <HomeIcon /> <Link smooth to ="#Dashboard">Home</Link>
            </Button>
        </ListItem>
        </List>
        
      </Drawer>
      
    </div>
  );
}
