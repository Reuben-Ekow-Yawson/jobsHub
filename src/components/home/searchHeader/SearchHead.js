import { Button } from '@chakra-ui/react'
import React from 'react'
import './styles.css'


const SearchHead = () => {
  return (
    <div className='banner'>
        <div className='search_container' >
            <span className="material-icons">
                work_outline
            </span>

            <input type="search" placeholder='Title, companies, expertise or benefits'/>

            {/* <Input type="search" mt='90px' w='500px' placeholder='Title, companies, expertise or benefits'/> */}

            <div className='button_container'>
            <Button className='button'>Search</Button>
                {/* <button>Search</button> */}
            </div>
        </div>  
    </div>
    
  )
}

export default SearchHead
