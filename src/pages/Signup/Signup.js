import { click } from '@testing-library/user-event/dist/click';
import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <form>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">SignUp</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input required type="text" placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input required type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input required type="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input required type="password" placeholder="Confirm Password" className="input input-bordered" />
                                <label className="label">
                                    <span className="label-text-alt">Already have an Account? <Link className="link link-hover" to='/login'>Login Please</Link></span>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="cursor-pointer label">
                                    <span className="label-text">Remember me</span>
                                    <input  type="checkbox" className="checkbox checkbox-accent" />
                                </label>
                            </div>
                            <div className="flex flex-col w-full border-opacity-50">
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                                <div className="divider">OR</div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-outline btn-warning">Google Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Signup;