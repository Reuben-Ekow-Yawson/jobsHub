import { Button } from '@chakra-ui/react'
import React from 'react'
import './Search.css'


const SearchHead = () => {
  
  
  return (
    <div className='banner'>
        <div className='search_container' >
          <div className='search' 
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
          </div>
            
            
        </div>  
    </div>
    
  )
}

export default SearchHead
