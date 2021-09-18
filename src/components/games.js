import React, { useState, useEffect } from 'react'
import logo from '../images/logo.png'
import arrow from '../images/arrow.png'

function Games(props) {
  const [user, setUser] = useState(localStorage.getItem('user'))
  const [CA, setCA] = useState(localStorage.getItem('CA'))
  const [telegramID, setTelegramID] = useState(
    localStorage.getItem('telegramID')
  )
  const [isInformation, setIsInformation] = useState(false)
  const [userText, setUserText] = useState('')
  const [CAText, setCAText] = useState('')
  const [telegramIDText, setTelegramIDText] = useState('')
  const [point, setPoint] = useState(0)
  const [isStartGame,setIsStartGame] = useState(false)
  const [time,setTime] = useState(30)


  useEffect(() => {
    if (user == null || CA == null || telegramID == null) {
      setIsInformation(false)
    } else setIsInformation(true)
    console.log(isInformation)
  }, [])

  const getRandomWidth = () => {
    const width = Math.floor(Math.random() * ((window.innerWidth* 8) / 9))
    console.log('width:', width)
    return width
  }
  const getRandomHeight = () => {
    const height =
      Math.floor(Math.random() * ((window.innerHeight * 4) / 10)) +
      window.innerHeight / 5
    console.log('height:', height)
    return height
  }

  const getRandomSize = () => {
    const size = Math.floor(Math.random() * 150) + 70
    return size
  }
  
  const getTimeLeft = () => {
    while(time>0)
    {
      setTimeout(()=>{
        setTime(time-1)
      },1000)
    }
    return time
  }

  const setInformation = (e) => {
    e.preventDefault()
    console.log(userText, CAText, telegramIDText)
    localStorage.setItem('user', userText)
    localStorage.setItem('CA', CAText)
    localStorage.setItem('telegramID', telegramIDText)
    setUser(userText)
    setCA(CAText)
    setTelegramID(telegramID)
    setIsInformation(true)
  }

  return (
    <div className='game'>
      <img
        src={arrow}
        id='arrow'
        onClick={() => {
          props.backToHome()
        }}
      />
      <h1>WELCOME TO ASEPoP</h1>
      {isInformation ? (
        <div>
          <div>
            Welcome {user}!!!
            <button
              onClick={() => {
                setIsInformation(false)
                localStorage.clear()
              }}
            >
              logout
            </button>
          </div>
          {isStartGame ? (
            <div>
              <div>
                <h2>{()=>{
                  var temp = time
                  console.log(temp)
                  setInterval(setTime(temp-1),1000)
                  return time
                }} seconds left!!!</h2>
                <h1>
                  {user} clicked {point} times!!!
                </h1>
                <div className='game-click'>
                  <img
                    src={logo}
                    onClick={() => {
                      setPoint(point + 1)
                    }}
                    style={{
                      position: 'absolute',
                      top: getRandomHeight(),
                      left: getRandomWidth(),
                      width: getRandomSize(),
                    }}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div>
              <button
                onClick={() => {
                  setIsStartGame(true)
                  setTime(30)
                }}
              >
                Click to start Game
              </button>
            </div>
          )}
        </div>
      ) : (
        <div>
          <form>
            <label>Name : </label>
            <input type='text' onChange={(e) => setUserText(e.target.value)} />
            <label>Contract Address : </label>
            <input type='text' onChange={(e) => setCAText(e.target.value)} />
            <label>telegram ID : </label>
            <input
              type='text'
              onChange={(e) => setTelegramIDText(e.target.value)}
            />
            <button type='submit' onClick={setInformation}>
              START PLAYING!!!
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

export default Games
