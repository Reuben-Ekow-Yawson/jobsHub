import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import './jobDetail.css'
import jobs from '../jobsContainer/JobContainer'

const JobDetail = () => {
  return (
    <Flex>
        <Box mr='10' className='sidebox'>
            <h4>Back to Search</h4>
            <h3>HOW TO APPLY</h3>
            <p>This is where the link to apply will be.</p>
        </Box>
        <Box bg='blue' className='jobDetail_box'>
            <Flex>
                <h1>Title</h1>
                <button>full time</button>
            </Flex>
            <p>days</p>
            <Flex>
                <Image src='' alt='company logo' />
                <h5>Company name</h5>
                <h5>Location</h5>
            </Flex>
            <Text>Description...</Text>
        </Box>



        {/* {jobs.map((job) =>{
            return <Flex>
                <h1>{job.title}</h1>
                <button>{job.job_type}</button>
            </Flex>
        })} */}
    </Flex>
  )
}

export default JobDetail
