import React from 'react';
import Banner from './Banner';
import Footer from '../Shared/Footer';
import HomeForm from './HomeForm';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <HomeForm></HomeForm>
            <Footer></Footer>
        </div>
    );
};

export default Home;