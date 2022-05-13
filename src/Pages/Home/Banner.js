import React from 'react';
import chair from '../../assets/images/chair.png';

const Banner = () => {
    return (
        
            <div className="hero min-h-screen px-12">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} className="max-w-sm rounded-lg shadow-2xl"  alt=''/>
    <div>
      <h1 className="text-5xl font-bold " >Your New Smile Starts Here</h1>
      <p className=" w-4/6 py-5" >Welcome to Doctor's Health Care Center's website! Our site holds a wealth of information about the services and programs we offer for our regional community as well as general health news, a provider listing and career opportunities.</p>
      <button className="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary">Get Started</button>
    </div>
  </div>
</div>
        
    );
};

export default Banner;