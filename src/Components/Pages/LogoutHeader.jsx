import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext';
import { doSignOut } from '../../firebase/auth';

const Header = () => {
    const navigate = useNavigate();
    const { userLoggedIn } = useAuth();

    if (!userLoggedIn) return null; // Hide the header if the user is not logged in

    const handleLogout = async () => {
        try {
            await doSignOut();
            navigate('/login');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    return (
        <nav className='flex flex-row gap-x-2 w-full z-20 fixed bottom-0 left-0 h-12 border-b place-content-center items-center bg-gray-200'>
            <button
                onClick={handleLogout}
                className='text-sm text-blue-600 underline'
            >
                Logout
            </button>
        </nav>
    );
};

export default Header;
