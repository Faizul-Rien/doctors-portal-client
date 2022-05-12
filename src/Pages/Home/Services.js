import React from 'react';
import Fluoride from '../../assets/images/fluoride.png';
import Cavity from '../../assets/images/cavity.png';
import Whitening from '../../assets/images/whitening.png';
import treatment from '../../assets/images/treatment.png';
import Service from './Service';

const Services = () => {
    const services =[
        {
            _id: 1,
            name:'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img:Fluoride
        },
        {
            _id: 2,
            name:'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img:Cavity
        },
        {
            _id: 3,
            name:'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img:Whitening
        }
    ]
    return (
        <div className='my-28'>
           <div className='text-center'>
           <h3 className='text-primary text-xl font-bold'>OUR SERVICES</h3>
            <h2 className='text-3xl'>Service We Provide</h2>
           </div>
           <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12'>
               {
                   services.map(service =><Service
                   key={service._id}
                   service={service}
                   ></Service>)
               }
           </div>
           <div className='mx-24'>
           <div className='my-24 px-12'>
           <div class="hero min-h-screen">
  <div class="hero-content flex-col lg:flex-row">
    <img src={treatment} class="max-w-sm rounded-lg shadow-2xl" alt=''/>
    <div className='mx-10'>
      <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
      <p class="py-6 w-4/6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
      <button class="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary">Get Started</button>
    </div>
  </div>
</div>
           </div>
           </div>
        </div>
    );
};

export default Services;