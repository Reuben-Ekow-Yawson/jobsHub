import React from 'react'
import './home.css'
import Sidebar from './sidebar/Sidebar'
import JobContainer from './jobsContainer/JobContainer'
import { Box } from '@chakra-ui/react'

const Home = () => {
  return (
    <Box className='home'>
      <Sidebar />
      <JobContainer />
    </Box>
  )
}

export default Home


