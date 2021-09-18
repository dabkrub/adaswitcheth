import React from 'react'
import twitter from '../images/twitter.png'
import telegram from '../images/telegram.png'

function contact() {
  return (
    <div className='contact'>
      <div className='contact-flex'>
        <h1>CONTACT</h1>
        <a href='https://twitter.com/SwitchAdaEth' target='_blank'>
          <span>
            <img src={twitter} />
          </span>{' '}
          ADAswitchETH
        </a>
        <a href='https://t.me/adaswitcheth' target='_blank'>
          <span>
            <img src={telegram} />
          </span>{' '}
          ADAswitchETH
        </a>
      </div>
    </div>
  )
}

export default contact
