import React from 'react';

const Business = () => {
    return (
        <div className="hero min-h-screen  " style={{ backgroundImage: `url("https://wallpaperaccess.com/full/1325090.jpg")` }} >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-xxl ">
                    <h1 className="mb-5 text-5xl font-bold text-amber-300">OUR BUSINESS</h1>
                    <p className="mb-5 text-white">Computer Builder has been founded on 1 March 2007. From then to now, Computer Builder has won the heart of many people and now is a country-wide renowned brand. That has been possible due to the hard work Computer Builder has done to satisfy its customers. Having the aim to satisfy customers, providing customers with their required products, and being true to their motto, “Customers Come First,” has brought Computer Builder to the top of the E-Commerce Site and also is one of the largest Computer and Technology product retailers. Computer Builder has over 700 employees and is growing more and more, working diligently to fulfill the Main Criteria of Computer Builder’s Motto or Vision. Computer Builder is located in 5 Central territories in Dhaka, Gazipur, Chittagong, Khulna, and Rangpur. Computer Builder has a total of 16 Physical outlets all over the country; selling genuine Tech products. Among them, 9 outlets are in Dhaka as it’s the capital city. Computer Builder also has two branches in Chittagong; the commercial capital of Bangladesh. There is one Branch in Gazipur, one in Khulna, and one Branch is in Rangpur. Apart from the Physical Branches, We also have our successful website.</p>
                    <div className="stats stats-vertical lg:stats-horizontal shadow">

                        <div className="stat">
                            <div className="stat-figure text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>  
                            </div>
                            <div className="stat-title">Revenue</div>
                            <div className="stat-value text-primary">120M+</div>
                            <div className="stat-desc">21% more than last month</div>
                        </div>

                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                            </div>
                            <div className="stat-title">Customers</div>
                            <div className="stat-value text-secondary">100+</div>
                            <div className="stat-desc">We served</div>
                        </div>
                        <div className="stat">
                            <div className="stat-figure text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            </div>
                            <div className="stat-title">Reviews</div>
                            <div className="stat-value text-primary">33K+</div>
                            <div className="stat-desc">12% more than last month</div>
                        </div>
                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            </div>
                            <div className="stat-title">Tools</div>
                            <div className="stat-value text-secondary">50+</div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Business;