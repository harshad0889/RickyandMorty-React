import React from 'react';
import './home.css'

function HomePage() {
  return (
    <div className='home_container'>
      <div className='content_container'>

    
        <div className='search_box'>
          
            <p>search your ricky and morty here...</p>
            <div className='input_outer_div'>
              <input className='input' type='text' placeholder='serach your charecter '/>
              <button className='btn'>Search</button>
            </div>
          
        </div>

        <div className='card_div'>cards area</div>
        </div>
    </div>
  )
}

export default HomePage