import React from 'react'

const RatingButton = ({rating, handleClick, label}) => {
    return (
        <button className={`circle ${rating === label && 'selected'}`} onClick={handleClick} >
            {label}
        </button>
    )
}

export default RatingButton