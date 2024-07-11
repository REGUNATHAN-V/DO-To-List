import React from 'react'
import './Header.css'
const Header = () =>{
    function quoteChange(){ 
        const quotes = ["Consistency is key🗝️.","Start a day with smile🙂.","The world🌍is yours."];
        const changes=Math.floor(Math.random()*3);
        return quotes[changes];
    }




    return(
       <header className="head">
        <h3>Hello user123,Welcome back!!</h3>
        <p className='quotes'>Today quote:<strong>{quoteChange()}</strong></p>
       </header>
    )
}

export default Header