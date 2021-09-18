import React from 'react'
import roadmapArrow from '../images/roadmap-arrow.png'
import mobileRoadmapArrow from '../images/mobile-roadmap-arrow.png'

function roadmap(props) {
  return (
    <div className='roadmap' ref={props.RoadmapRef}>
      <h1>ROADMAP</h1>
      <div className='roadmap-line'></div>
      <div className='roadmap-flex'>
        <div className='roadmap-box'>
          <div className='roadmap-arrow'>
            <img src={roadmapArrow} />
            <h1 className='roadmap-phase'>Phase 1</h1>
          </div>
          <div className='roadmap-arrow-mobile'>
            <img src={mobileRoadmapArrow} />
          </div>
          <h1>
            2021<span> 4Q</span>
          </h1>
          <div className='roadmap-detail'>
            <h2>
              Launch and
              <br />
              Awareness
            </h2>
            <h3>10k Telegram Members</h3>
            <h3>5k Holders</h3>
            <ul>
              <li>Stealth Launch (10 September)</li>
              <li>Influencer Marketing</li>
              <li>CMS upvote trending top 3</li>
              <li>Publish whitepaper</li>
              <li>List CMC</li>
              <li>List Coingecko</li>
            </ul>
          </div>
        </div>

        <div className='roadmap-box'>
          <div className='roadmap-arrow'>
            <img src={roadmapArrow} />
            <h1 className='roadmap-phase'>Phase 2</h1>
          </div>
          <div className='roadmap-arrow-mobile'>
            <img src={mobileRoadmapArrow} />
          </div>
          <h1>
            2022<span> 1Q</span>
          </h1>
          <div className='roadmap-detail'>
            <h2>
              Building strong
              <br />
              ecosystem and
              <br />
              Community
            </h2>
            <h3>20k Telegram Members</h3>
            <h3>15k Holders</h3>
            <ul>
              <li>Website Improvement</li>
              <li>List more CEX</li>
              <li>Announce our ambassador</li>
            </ul>
          </div>
        </div>

        <div className='roadmap-box'>
          <div className='roadmap-arrow'>
            <img src={roadmapArrow} />
            <h1 className='roadmap-phase'>Phase 3</h1>
          </div>
          <div className='roadmap-arrow-mobile'>
            <img src={mobileRoadmapArrow} />
          </div>
          <h1 className='roadmap-no-line'>
            2022<span> 2Q</span>
          </h1>
          <div className='roadmap-detail'>
            <h2>
              Establishment
              <br />
              as top token in
              <br />
              cryptoverse
            </h2>
            <h3>50k Telegram Members</h3>
            <h3>30k Holders</h3>
            <ul>
              <li>Announce NFT</li>
              <li>Get Elon Musk to tweet about us</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default roadmap
