import React from 'react'
import { Link } from'react-router-dom'

function Navbar() {
  return (
    <div className='nav-container' style={{backgroundColor:'pink', justifyContent:'space-between', textAlign:'right'}}>
       
        <Link to={'/kazi'} style={{border:"", margin:'20px', padding:'20px',}}>JOBS</Link>
        <Link to={'/addjob'}style={{border:"solid pink ", margin:'10px', padding:'0px',}}>AddJob</Link>
    </div>
  )
}

export default Navbar