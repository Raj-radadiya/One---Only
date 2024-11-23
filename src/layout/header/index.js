import React from 'react'
import './header.scss'
import call from '../../assets/icon/icons8-call-14.png';
import mail from '../../assets/icon/icons8-mail-14.png';
import logo from '../../assets/logo/logo.webp';
import line from '../../assets/icon/3line.png';
export default function MainHeader() {
  return (
    <div>
      <div className='headerMain'>
        <div className='headerBg'>
          <div className='headerLeft'>
            <div className='language'>
              <select>
                <option>english</option>
                <option>english</option>
                <option>english</option>
                <option>english</option>
              </select>
            </div>
            <div className='call'>
              <img src={call} />
            </div>
            <div className='mail'>
              <img src={mail} />
            </div>
            <div className='headerMenu'>
              <a href='#'>Newsletter</a>
            </div>
            <div className='headerMenu'>
              <a href='#'>resorts</a>
            </div>
          </div>
          <div className='menuIcon'>
            <img src={line} />
          </div>
          <div className='headerCenter'>
            <div className='headerLogo'>
              <img src={logo} alt='logo' />
            </div>
          </div>
          <div className='headerRight'>
            <button>BOOK NOW</button>
          </div>
        </div>
      </div>

      <div className='navSection'>
        <div className='navLink'>
          <a href='#'>resorts</a>
        </div>
        <div className='navLink'>
          <li>
            <a href='#'>experiences</a>
          </li>
        </div>
        <div className='navLink'>
          <li>
            <a href='#'>private homes</a>
          </li>
        </div>
        <div className='navLink'>
          <li>
            <a href='#'>stories</a>
          </li>
        </div>
        <div className='navLink'>
          <li>
            <a href='#'>offers</a>
          </li>
        </div>
      </div>
    </div>
  )
}