import { Button } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './SearchHead.css'
import JobContext from '../context/JobContext'


const SearchHead = () => {
  
  
  return (
    <div className='banner'>
        <div className='search_container' >
          <form 
          >
            <label className="material-icons">
                work_outline
            </label>
            <input 
              type="text" 
              id='search' 
              placeholder='Title, companies, expertise or benefits'
            />

            <Button className='button'>Search</Button>
          </form>
            
            
        </div>  
    </div>
    
  )
}

export default SearchHead
