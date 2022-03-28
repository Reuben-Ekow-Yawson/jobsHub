import React from 'react'
import './JobContainer.css'
// import axios from "axios";
import { Box, Button, Image, Text } from '@chakra-ui/react'

const JobContainer = () => {

  const [jobs, setJobs] = React.useState([]);

 
  const fetchJobs = async () => {
    const response = await fetch("https://remotive.io/api/remote-jobs")
    const jsonResponse = await response.json()
    setJobs(jsonResponse);
    console.log(jobs)
  }
  fetchJobs()

  return (
    <div>
      
    </div>
  )
}

export default JobContainer
