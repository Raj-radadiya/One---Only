import React from 'react'
import './meeting.scss'
import birthday from '../../../../assets/image/eventbirthday.webp';
import meeting from '../../../../assets/image/eventmeeting.webp';
export default function EventMeeting() {
  return (
    <div>
      <div className='eventMeetingMain'>
        <div className='container3'>
          <div className='eventFlex'>
            <div className='eventLeft'>
              <div className='eventLocation'>
                <img src={meeting} alt='time' />
              </div>
            </div>
            <div className='eventRight'>
              <div className='eventHead'>
                <h2>Meetings & incentives</h2>
              </div>
              <div className='eventDetail'>
                <p>Gather with those you hold dear as you mark another journey around the sun. Cherish time together, as our expert team helps plan treasured celebrations, spectacular culinary experiences, and bespoke adventures in the world’s most remarkable locations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='birthdayMain'>
        <div className='container3'>
          <div className='birthdayFlex'>
            <div className='birthdayLeft'>
              <div className='birthdayLocation'>
                <img src={birthday} alt='time' />
              </div>
            </div>
            <div className='birthdayRight'>
              <div className='birthdayHead'>
                <h2>Milestone birthdays</h2>
              </div>
              <div className='birthdayDetail'>
                <p>Gather with those you hold dear as you mark another journey around the sun. Cherish time together, as our expert team helps plan treasured celebrations, spectacular culinary experiences, and bespoke adventures in the world’s most remarkable locations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
