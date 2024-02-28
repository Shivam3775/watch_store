import React from 'react'

function Hero() {
  return (
    <main className='hero container'>
        <div className='hero-content'>
          <h1>YOUR HAND DESERVE THE BEST</h1>
          &nbsp;
          <p>
            YOUR HAND DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
            WATCHES.YOUR HAND DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
            WATCHES.
          </p>
           &nbsp;
          <div className='hero-btn'>
             <button>Shop Now</button>
             <button className='secondary-btn'>Category</button>
          </div>
         
          <div className='shopping'>
            <p>Also Available On</p>
          </div>

          <div className='brand-icon'>
            <img src='/images/amazon_logo.jpg' alt='amazon-logo' height={50} width={50}/>
            <img src='/images/Flipkart-Logooo.png' alt='flipkart-logo' height={35} width={35}/>
          </div>
        </div>
        <div className='watch-image'>
          <img src='/images/watch.jpg' alt='watch' height={650} width={300}/>
        </div>
    </main>
  )
}

export default Hero;