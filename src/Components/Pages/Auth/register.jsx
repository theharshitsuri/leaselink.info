import React, { useState } from 'react';
import { Navigate, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/authContext';
import { doCreateUserWithEmailAndPassword } from '../../../firebase/auth';

const Register = () => {
    const navigate = useNavigate();
    const { userLoggedIn } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [redirectToListings, setRedirectToListings] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!isRegistering) {
            setIsRegistering(true);
            if (password !== confirmPassword) {
                setErrorMessage('Passwords do not match.');
                setIsRegistering(false);
                return;
            }
            try {
                await doCreateUserWithEmailAndPassword(email, password);
                setRedirectToListings(true);
            } catch (err) {
                setErrorMessage(err.message);
                setIsRegistering(false);
            }
        }
    };

    if (userLoggedIn || redirectToListings) {
        return <Navigate to="/landing" replace={true} />;
    }

    return (
        <div>
            <div className="flex h-screen bg-white text-gray-900">
                <img src="logo1.png" alt="Logo" className="w-1/2 hidden lg:block" />
                <div className="flex flex-col justify-center items-center w-full lg:w-1/2">
                    <div>
                        <div className="text-3xl text-center font-bold">
                            <h3>Lease Link</h3>
                        </div>
                        <form onSubmit={onSubmit} className="mt-8 w-[80%] lg:w-96 mx-auto space-y-4">
                            <h4 className="text-lg text-center font-semibold">Create a New Account</h4>
                            <input
                                type="email"
                                placeholder="Email"
                                className="bg-white border w-full py-2 rounded-lg text-gray-700"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                className="bg-white border w-full py-2 rounded-lg text-gray-700"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                className="bg-white border w-full py-2 rounded-lg text-gray-700"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                            {errorMessage && (
                                <span className="text-red-600 font-bold">{errorMessage}</span>
                            )}
                            <button
                                type="submit"
                                disabled={isRegistering}
                                className={`bg-blue-600 text-white w-full py-2 rounded-lg hover:bg-blue-500 ${isRegistering ? 'cursor-not-allowed bg-gray-300' : ''}`}
                            >
                                {isRegistering ? 'Signing Up...' : 'Sign Up'}
                            </button>

                            <div className="text-center">
                                Already have an account?
                                <Link to={'/login'} className="text-blue-600 hover:text-blue-400 font-semibold ml-1">
                                    Continue
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
