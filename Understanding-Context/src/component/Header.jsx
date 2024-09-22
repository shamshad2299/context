import React from 'react'
//import { Link } from 'react-router-dom'


export default function Header() {
  return (
  <>
    {/* <h1 className="read-the-docs m1 p1  flex item-align justify font">My own utilities Page</h1> */}
    <div className='p1 m1 border radius color'>
       <ul className="read-the-docs m1 p1  flex  font">
          <li className='list m3 p3 cursor  '><a className = "decoration color hover" href="#">Home</a>
          </li>
          <li className='list m3 p3 cursor '><a className = "decoration color hover" href="#">About</a></li>
        </ul>
    </div>
  </>
  )
}
