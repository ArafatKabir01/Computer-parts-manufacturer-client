import React from 'react';
import Footer from '../shared/Footer/Footer';
import Banner from './Banner';
import Business from './Business';
import ContractUs from './ContractUs';
import Location from './Location';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Business></Business>
            <Reviews></Reviews>
            <ContractUs></ContractUs>
            <Location></Location>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;