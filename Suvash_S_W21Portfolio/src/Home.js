import React, {useState} from 'react'
import ParticlesBg from 'particles-bg'
import ModifiedDrawer from './components/Drawer'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile.js'
import Resume from './components/Resume.js'
import Cover from './components/Cover.js'
import AcademicAwards from './components/AcademicAwards.js'
import AcademicWork from './components/AcademicWork.js'
import AcademicRecords from './components/AcademicRecords.js'
import Capstone from './components/Capstone.js'
import ProfessionalWork from './components/ProfessionalWork.js'
import CommunityService from './components/CommunityService.js'
import Recommendation from './components/Recommendation.js'
import AwardsNRecognition from './components/AwardsNRecognition.js'

function Home() {
    const [display, setDisplay]=useState()
    function showProfile(){
    setDisplay('none') 
    }
    return (
        <div>
            <ParticlesBg color={"#00FF00", "#0276FD"} type="cobweb" bg={true}/>
            <ModifiedDrawer showProfile={showProfile}></ModifiedDrawer> 
            <Dashboard/>
            <Profile/>
            <Resume/>
            <Cover/>
            <AcademicWork/>
            <AcademicAwards/>
            <AcademicRecords/>
            <Capstone/>
            <ProfessionalWork/>
            <CommunityService/>
            <Recommendation/>
            <AwardsNRecognition/>
            
        </div>
    )
}

export default Home
