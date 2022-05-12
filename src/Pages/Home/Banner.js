import React from 'react';
import chair from '../../assets/images/chair.png';

const Banner = () => {
    return (
        
            <div class="hero min-h-screen px-12">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} class="max-w-sm rounded-lg shadow-2xl"  alt=''/>
    <div>
      <h1 class="text-5xl font-bold " >Your New Smile Starts Here</h1>
      <p class=" w-4/6 py-5" >Welcome to Doctor's Health Care Center's website! Our site holds a wealth of information about the services and programs we offer for our regional community as well as general health news, a provider listing and career opportunities.</p>
      <button class="btn  text-white bg-gradient-to-r from-cyan-500 to-blue-500">Get Started</button>
    </div>
  </div>
</div>
        
    );
};

export default Banner;