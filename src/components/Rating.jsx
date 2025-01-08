import React from 'react'
import iconStar from '../images/icon-star.svg'
import RatingButton from './RatingButton'

const Rating = ({ rating, handleClick, handleSubmit }) => (
    <div className='rating-component'>
        <div className="circle">
            <img src={iconStar} alt="Icon Star" className="icon-star" />
        </div>
        <div className='title'>
            How did we do?
        </div>
        <div className='content'>
            Please let us know how we did with your support request. All feedback is appreciated
            to help us improve our offering!
        </div>
        <div className='rating'>
            <RatingButton label={1} rating={rating} handleClick={handleClick} />
            <RatingButton label={2} rating={rating} handleClick={handleClick} />
            <RatingButton label={3} rating={rating} handleClick={handleClick} />
            <RatingButton label={4} rating={rating} handleClick={handleClick} />
            <RatingButton label={5} rating={rating} handleClick={handleClick} />
        </div>
        <button className='submit-button' onClick={handleSubmit}>
            SUBMIT
        </button>


    </div>
)

export default Rating