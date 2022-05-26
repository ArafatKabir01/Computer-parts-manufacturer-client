import { click } from '@testing-library/user-event/dist/click';
import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <form>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-bold">SignUp</h1>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input required type="text" placeholder="Name" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input required type="email" placeholder="email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input required type="password" placeholder="password" class="input input-bordered" />
                                <label class="label">
                                    <span class="label-text">Confirm Password</span>
                                </label>
                                <input required type="password" placeholder="Confirm Password" class="input input-bordered" />
                                <label class="label">
                                    <span class="label-text-alt">Already have an Account? <Link class="link link-hover" to='/login'>Login Please</Link></span>
                                </label>
                            </div>
                            <div class="form-control">
                                <label class="cursor-pointer label">
                                    <span class="label-text">Remember me</span>
                                    <input id='checked' type="checkbox" checked={window.click} class="checkbox checkbox-accent" />
                                </label>
                            </div>
                            <div class="form-control mt-6">
                                <button   class="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Signup;