import React from 'react';


const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://www.cgdirector.com/wp-content/uploads/media/2019/01/Parts_Needed_to_Build_a_PC_Twitter-1200x675-768x432.jpg" className="max-w-xxl rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Parts Needed to Build a PC</h1>
                        <p className="py-6">Building your own Computer from individual PC Components has so many benefits compared to just going out and buying a pre-built PC:</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Banner;