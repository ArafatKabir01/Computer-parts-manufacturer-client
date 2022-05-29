import React from 'react';
import Footer from '../shared/Footer/Footer';
import Banner from './Banner';
import Business from './Business';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Business></Business>
            <Reviews></Reviews>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;