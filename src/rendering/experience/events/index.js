import React from 'react'
import EventHeroBanner from './eventHerobanner'
import Celebrate from './eventCelebrate'
import EventLocation from './eventLocation'
import DiningLocation from './eventDiningLocation'
import EventMeeting from './eventmeeting'
import EventForm from './eventDetailsForm'

export default function Events() {
  return (
    <div>
      <EventHeroBanner />
      <Celebrate />
      <EventLocation />
      <DiningLocation />
      <EventMeeting />
      <EventForm />
    </div>
  )
}
