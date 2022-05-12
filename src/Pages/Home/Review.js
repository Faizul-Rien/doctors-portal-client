import React from 'react';

const Review = ({review}) => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <p className='mb-4'>{review.review}</p>
    <div class="flex  items-center">
    <div class="avatar">
  <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={review.img} alt=''/>
  </div>
</div>
        <div>
            <h4 className='ml-4'>{review.name}</h4>
            <p className='ml-4'>{review.location}</p>
        </div>
    </div>
  </div>
</div>
    );
};

export default Review;