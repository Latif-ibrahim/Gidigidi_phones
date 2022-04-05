import React from 'react'
import phone1 from "../pictures/phone1.jpg"
import phone3 from "../pictures/phone3.jpg"
import phone4 from "../pictures/phone4.jpg"
import headphones1 from "../pictures/headphones1.jpg"
import headphones2 from "../pictures/headphones2.jpg"
import case1 from "../pictures/case1.jpg"
import case2 from "../pictures/case2.jpg"
import case3 from "../pictures/case3.jpg"
import drive1 from "../pictures/drive1.jpg"
import drive2 from "../pictures/drive2.jpg"
import drive3 from "../pictures/drive3.jpg"

function Products() {
  return (
    <div>
    <div className='firstrow'>

    <div className='card'>
    <h2>Samsung</h2>
    <img src={phone1} alt=""/>
    <p>Ghc 1300.00</p>
    <button>Buy Me</button>
    </div>
    
    <div className='card'>
    <h2>IPhone</h2>
    <img src={phone3} alt=""/>
    <p>ghc 1600.00</p>
    <button>Buy Me</button>
    </div>

    <div className='card'>
    <h2>Techno</h2>
    <img src={phone4} alt=""/>
    <p>Ghc1800.00</p>
    <button>Buy Me</button>
    </div>

    </div>

    <div className='firstrow'>
    <div className='card'>
    <h2>HeadPhones</h2>
    <img src={headphones1} alt=""/>
    <p>we sell quality Head Phone at affordable prices</p>
    <button>Buy Me</button>
    </div>

    <div className='card'>
    <h2>HeadPhones</h2>
    <img src={headphones2} alt=""/>
    <p>we sell quality Head Phone at affordable prices</p>
    <button>Buy Me</button>
    </div>
    </div>

    <div className='firstrow'>
    <div className='card'>
    <h2>PenDrives</h2>
    <img src={drive1} alt=""/>
    <p>we sell quality  PenDrives at affordable prices</p>
    <button>Buy Me</button>
    </div>

    <div className='card'>
    <h2>PenDrives</h2>
    <img src={drive2} alt=""/>
    <p>we sell quality  PenDrives at affordable prices</p>
    <button>Buy Me</button>
    </div>

    <div className='card'>
    <h2>PenDrives</h2>
    <img src={drive3} alt=""/>
    <p>we sell quality  PenDrives at affordable prices</p>
    <button>Buy Me</button>
    </div>
    </div>

    <div className='firstrow'>
    <div className='card'>
    <h2>PhoneCases</h2>
    <img src={case1} alt=""/>
    <p>we sell quality  Phone cases at affordable prices</p>
    <button>Buy Me</button>
    </div>

    <div className='card'>
    <h2>PhoneCases</h2>
    <img src={case2} alt=""/>
    <p>we sell quality  Phone cases at affordable prices</p>
    <button>Buy Me</button>
    </div>

    <div className='card'>
    <h2>PhoneCases</h2>
    <img src={case3} alt=""/>
    <p>we sell quality  Phone cases at affordable prices</p>
    <button>Buy Me</button>
    </div>
    
    </div>
    
    
    </div>
    
    
  )
}

export default Products