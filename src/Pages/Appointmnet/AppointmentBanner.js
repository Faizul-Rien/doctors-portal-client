import React from 'react';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import background from '../../assets/images/bg.png';

const AppointmentBanner = ({date,setDate}) => {
    return (
        <div style={{
          background : `url(${background})`
        }} class="hero min-h-screen mb-20">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} class="max-w-sm rounded-lg shadow-2xl" alt=''/>
    <div className='rounded-lg mr-28 shadow-2xl'>
     <DayPicker
      mode="single"
      selected={date}
      onSelect={setDate}
     />
    </div>
  </div>
</div>
    );
};

export default AppointmentBanner;