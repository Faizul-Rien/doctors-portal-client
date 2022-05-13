import React from 'react';
import appointment from '../../assets/images/appointment.png';

const HomeForm = () => {
    return (
        <div style={{
            background: `url(${appointment})`
        }}
         className='mt-28 text-center py-20'>
            <h4 className='text-primary font-bold'>Contact Us</h4>
            <h2 className='text-3xl text-white'>Stay connected with us</h2>
           <div className='flex flex-col items-center'>
           <input type="email" placeholder="Email Address" className="input input-bordered input-primary w-full max-w-xs my-4" />
            <input type="text" placeholder="Subject" className="input input-bordered input-primary w-full max-w-xs" />
            <textarea className="textarea textarea-primary w-full max-w-xs my-4" placeholder="Your message"></textarea>
            <button className="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary">Submit</button>
           </div>
        </div>
    );
};

export default HomeForm;