import React, {useEffect} from 'react'
import './JobContainer.css'
// import axios from "axios";
import { Box, Button, Image } from '@chakra-ui/react'


const JobContainer = () => {

  const [jobs, setJobs] = React.useState([]);

 
  const fetchJobs = async () => {
    const response = await fetch("https://remotive.io/api/remote-jobs")
    const jsonResponse = await response.json()
    setJobs(jsonResponse.jobs);
    console.log(jsonResponse)
    console.log(jsonResponse['jobs'])
  }

  useEffect(() => {fetchJobs()}, [])
  

  return (
    <Box classsName="Container">
      {jobs.map((job) => {

      return  <Box display='flex' className='job_display'>
                <Image src={job.company_logo} alt='Company_logo' borderRadius='10' m='10'/>
                <Box className='job_name'>
                  <h2>{job.company_name}</h2>
                  <h1>{job.title}</h1>
                  <button>{job.job_type}</button>
                </Box>
                <h6>{job.candidate_required_location}</h6>
                <h6>{job.publication_date}</h6>
              </Box>
      })}
    </Box>
    // <Box className='Container'>
    //   {/* <Box display='flex' className='job_display'>
    //     <Image src={Fakelogo} alt='Company_logo' borderRadius='10' m='10'/>
    //     <Box className='job_name'>
    //       <h2>Kasisto</h2>
    //       <h1>Front-End Software Engineer</h1>
    //       <Button>Full time</Button>
    //     </Box>
    //     <h6>public logo + the state</h6>
    //     <h6>clock logo + days </h6>
    //   </Box> */}
      
      
      
    //   {/* <Box display='flex' className='job_display'>
    //     <Image src={Fakelogo} alt='Company_logo' borderRadius='10' m='10'/>
    //     <Box className='job_name'>
    //       <span>Kasisto</span>
    //       <h1>Front-End Software Engineer</h1>
    //       <Button>Full time</Button>
    //     </Box>
    //     <h6>public logo + the state</h6>
    //     <h6>clock logo + days </h6>
    //   </Box> */}
    // </Box>
  )
}

export default JobContainer
