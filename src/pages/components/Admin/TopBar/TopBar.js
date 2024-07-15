import React from 'react'
import './TopBar.css'
import order from '../../../../assets/image/order360.jpg'
import not2 from '../../../../assets/image/not2.png';

export default function TopBar() {
  return (
    <>
      <div className='topbar'>
            <img src={order} alt='order360' id='timg'/>
            <div className='end'>
                <div id='lag'>
                    <button id='btn'>English</button>
                </div>
                <div className='nimg'>
                        <img src={not2} id='nn' alt='img'/>
                </div>
            </div>
        </div>
    </>
  )
}
