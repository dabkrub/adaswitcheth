import React,{useState} from 'react'
import logo from '../images/logo.png'
import Game from '../components/games'
function Header(props) {
  return (
    <div className='header'>
      <div className='header-flex'>
        <div>
          <div className='header-flex2'>
            <h1>ADA</h1>
            <h2 className='graph-button' onClick={()=>props.switchToGaming(true)}>PLAY GAME!!</h2>
          </div>
          <h2>switch</h2>
          <div className='header-paragraph-flex'>
            <h3>ETH</h3>
            <p>
              Welcome to ADA SWITCH ETH is a hyped cryptocurrency with huge
              potential. As we know, many people expect the price of ADA to be
              150 USD in the near future, that’s 50 times of the current price.
              We saw ADA’s potential, so we would like to propose you an
              opportunity to hold our coin and get 12% of every transaction back
              in ADA.
            </p>
          </div>
        </div>
        <img src={logo} />
      </div>
      <div className='header-flex-mobile'>
        <img src={logo} />
        <div className='header-paragraph-flex-mobile'>
          <div>
            <h1>ADA</h1>
            <h2>switch</h2>
            <h3>ETH</h3>
          </div>
          <p>
            Welcome to ADA SWITCH ETH is two hyped cryptocurrency with huge
            potential. As we know, many people expect the price of ADA to be 150
            USD, ETH 10,000 USD in the near future, We saw ADA and ETH’s
            potential, so we would like to propose you an opportunity to hold
            our coin and earning 8% of every transaction back in ADA,ETH as the
            reward will switch between ADA and ETH day by day.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Header
