import {  Input, RadioGroup } from '@chakra-ui/react'
import { useState } from 'react'
import './Sidebar.css'

const Sidebar = () => {
    const [value, setValue] = useState('1')
    const cities =[
        {
            checked: false,
            name: 'London'
        },
        {
            checked: false,
            name: 'Amsterdam'
        },
        {
            checked: false,
            name: 'New York'
        },
        {
            checked: false,
            name: 'Berlin'
        },
    ]

  return (
    <div className='sidebar'>
        <div className='check'>
            <input type='checkbox'/>
            Full time
        </div>
    
        <h3>LOCATION</h3>

        {/* Search for the cities */}
        
        <div className='city_container' >
          <form 
          >
            <label className="material-icons">
                public
            </label>
            <input 
              type="text" 
              id='search' 
              placeholder="City, state, zip code or country"
            />
          </form>
        </div>
        <div>
            <RadioGroup fontSize='18px' onChange={setValue} value={value}>
            {cities.map(city =>{
                return (
                    <div>
                        <input type='radio' value={city.name} id={city.name} name='lacotion'/>
                        <label for={city.name}>{city.name}</label><br/>
                    </div>
                )
                } 
            )}
          </RadioGroup>
        </div>
    </div>
  )
}

export default Sidebar
