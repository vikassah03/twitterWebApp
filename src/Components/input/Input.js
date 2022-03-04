import React, { useState } from 'react'
import './Input.css'
function Input() {
    const [first, setfirst] = useState();
    return (
        <div className='search-input_main2'>
          <div className="setfirst_input">
              
          </div>
            <div className="search-input">
                <img src="https://cdn-icons.flaticon.com/png/512/2811/premium/2811806.png?token=exp=1642600556~hmac=3011a30d009b0865245884bd96eeb2c3" alt="" width="20px" height="20px" />
                <input type="text" placeholder='Search Twitter' className='input_right' />
            </div>
         </div>
    )
}

export default Input
