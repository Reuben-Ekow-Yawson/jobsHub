import { Button, Input, ModalHeader } from '@chakra-ui/react';
import React from 'react'
import './home.css';

const Home = () => {
  return (
    <div className='container'>
      <div className='header'>
        <h1>Jobs Hub</h1>
      </div>
      <div className='banner'>
          <Input  mt='90px' w='500px' placeholder='Title, companies, expertise or benefits'/>
          <Button>Search</Button>
      </div>
      <div className='content'>
        <div className='contentSideNavbar'>
            <div >
                <input type='checkbox' />
                Full time
            </div>
            <div>
                <div>Location</div>
                <Input />
            </div>
            <div className='location'>
                <div><input type='radio' />
                state of the company</div>
                <div><input type='radio' />
                state of the company</div>
                <div><input type='radio' />
                state of the company</div>
            </div>
        </div>
        <div className='contentJobsList'>
            list
        </div>
      </div>
    </div>
  )
}

export default Home
