import React from 'react';

const Service = ({service}) => {
    const {name,slots} = service;
    return (
        <div class="card lg:max-w-lg bg-base-100 text-center shadow-xl">
        <div class="card-body">
          <h2 class="card-title justify-center text-primary">{name}</h2>
          <p className='text-sm'>{
              slots.length > 0 
              ? <span>{slots[0]}</span>
              : <span className='text-red-600'>No Slot Available</span>
              }</p>
          <p className='text-sm'>{slots.length} {slots.length > 1 ? 'SPACES' : 'SPACE'} AVAILABLE</p>
          <div class="card-actions justify-center">
            <button disabled={slots.length === 0} class="btn btn-wide btn-primary bg-gradient-to-r from-secondary to-primary text-white">BOOK APPOINTMENT</button>
          </div>
        </div>
      </div>
    );
};

export default Service;