import { Button } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './SearchHead.css'
import JobContext from '../context/JobContext'


const SearchHead = () => {
  // const navigate = useNavigate();
  // const [searchValue, setSearchValue] = useState("");
  // const jobCtx = useContext(JobContext);
  // const { searchJobData } = jobCtx;

  // function searchjobDataHandler(e) {
  //   e.preventDefault();
  //   if (searchValue) {
  //     navigate('/');
  //     searchJobData(searchValue);
  //     setSearchValue("");
  //   }
  // }
  
  return (
    <div className='banner'>
        <div className='search_container' >
          <form 
          // onSubmit={searchjobDataHandler}
          >
            <label className="material-icons">
                work_outline
            </label>
            <input 
              type="text" 
              id='search' 
              placeholder='Title, companies, expertise or benefits'
              // onChange={(e) => setSearchValue(e.target.value)}
            />

            <Button className='button'>Search</Button>
          </form>
            
            
        </div>  
    </div>
    
  )
}

export default SearchHead
