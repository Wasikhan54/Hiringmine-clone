import React from 'react'
import './header.css'
function Header() {
  return (
    <header className='header'>
        <div className='logo'>
            <img src='/images/Hiring Mine.png'/>
        </div>
        <div className='menu'>
            <p>About us</p>
            <p>People</p>
            <p>Jobs</p>
            <p>Login</p>
            <p>Join us</p>
            <p style={{color:'#6851FF'}}>Employe/Post job</p>
        </div>

        <div>
            <button></button>
        </div>
        <div className='MenuBurger'>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </div>
    </header>
  )
}

export default Header