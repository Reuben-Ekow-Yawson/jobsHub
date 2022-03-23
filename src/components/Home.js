import { Button, Input } from '@chakra-ui/react';
import React from 'react'
import './home.css';

const Home = () => {
  return (
    <div className='container'>
      <div className='header'>
        Jobs Hub
      </div>
      <div className='banner'>
          <Input />
          <Button>Search</Button>
      </div>
      <div className='content'>
        <div className='contentSideNavbar'>
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </div>
        <div className='contentJobsList'>
            list
        </div>
      </div>
    </div>
  )
}

export default Home
