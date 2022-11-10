import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const Register = () => {
    useTitle('Register | Dature')
    const {createUser, googleLogin} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
        .then( (result) => {
            const user = result.user;
            navigate(from, {replace: true})
        })
        .catch(e => console.error(e))
    }

    const handleGoogleLogin = () => {
        googleLogin()
        .then( result => {
            const user = result.user;
            navigate(from, {replace: true})
        })
        .catch( e => {
            console.error(e);
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content w-2/5">
                <div className="card w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" />
                                <label className="label">
                                    Already have an account?<Link to="/login" className="label-text-alt btn-link link link-hover">Login</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Login</button>
                            </div>
                            <div className="rounded-full text-center mt-5">
                                <button onClick={handleGoogleLogin} className='btn btn-circle btn-outline btn-info shadow-xl'><img src="./google.png" alt='google icon' width="30"/></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;