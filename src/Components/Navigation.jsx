import React from 'react'

function Navigation() {
  return (
    <>
    <div>
        <nav className='container'>
          <div className="logo">
             <img src="/images/watch-logo.jpg" alt="logo"
              height={80} width={120}
             />
          </div>
          <ul>
            <li href="#">Menu</li>
            <li href="#">Location</li>
            <li href="#">About</li>
            <li href="#">Contact</li>
          </ul>
          <button>login</button>
        </nav>
      </div>
    </>
  )
}

export default Navigation