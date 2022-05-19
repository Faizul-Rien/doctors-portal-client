import React from 'react';

const Service = ({service,setTreatment}) => {
    const {name,slots} = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 text-center shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center text-primary">{name}</h2>
          <p className='text-sm'>{
              slots.length > 0 
              ? <span>{slots[0]}</span>
              : <span className='text-red-600'>No Slot Available</span>
              }</p>
          <p className='text-sm'>{slots.length} {slots.length > 1 ? 'SPACES' : 'SPACE'} AVAILABLE</p>
          <div className="card-actions justify-center">
            <label
            onClick={()=> setTreatment(service)}
            disabled={slots.length === 0}
            for="booking-modal" className="btn modal-button btn-wide btn-primary bg-gradient-to-r from-secondary to-primary text-white">BOOK APPOINTMENT
            </label>
          </div>
        </div>
      </div>
    );
};

export default Service;