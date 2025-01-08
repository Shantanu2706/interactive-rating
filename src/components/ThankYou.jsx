import React from 'react'
import illustrationThankYou from '../images/illustration-thank-you.svg'

const ThankYou = ({ rating }) => {
  return (
    <div className='thank-you'>
      <img src={illustrationThankYou} alt="Illustration Thank You" className="illustration-thank-you" />
      <div className='message'>
        You selected {rating} out of 5
      </div>
      <div className="title">
        Thank you!
      </div>
      <div className='content'>
        We appreciate you taking the time to give a rating. If you ever need more support,
        don’t hesitate to get in touch!
      </div>
    </div>
  )
}

export default ThankYou;