import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext';
import { doSignOut } from '../../firebase/auth';
import { FiMenu, FiPlusCircle, FiEdit, FiLogOut, FiHome, FiInfo } from 'react-icons/fi'; // Icons for buttons

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const { userLoggedIn } = useAuth();

    if (!userLoggedIn) return null;
      
    const handleLogout = async () => {
        try {
            await doSignOut();
            navigate('/login');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    const handleAddListing = () => {
        navigate('/addlisting');
    };

    const handleManageListings = () => {
        navigate('/managelistings');
    };

    const handleApartments = () => {
        navigate('/landing');
    };

    const handleAboutUs = () => {
        navigate('/aboutus');
    };

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Modern Hamburger Icon for opening the sidebar */}
            <button
                className="fixed top-4 right-4 z-50 text-3xl text-gray-800 bg-white p-3 rounded-full shadow-lg hover:bg-gray-300 transition-all duration-300"
                onClick={toggleSidebar}
            >
                <FiMenu />
            </button>

            {/* Sidebar (opens from the right side) */}
            <div
                className={`fixed top-0 right-0 h-screen w-64 bg-gray-800 text-white shadow-xl transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500 ease-in-out rounded-l-lg p-6 z-40 flex flex-col justify-between`}
            >
                {/* Sidebar Header */}
                <div>
                    <h2 className="text-3xl font-bold mb-12">LeaseLink</h2>

                    {/* Buttons with modern styling and icons */}
                    <div className="space-y-6">
                        {/* Apartments Button */}
                        <button
                            onClick={handleApartments}
                            className="w-full flex items-center justify-start bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-full shadow-md transition-all duration-300"
                        >
                            <FiHome className="mr-3" />
                            Apartments
                        </button>

                        {/* About Us Button */}
                        <button
                            onClick={handleAboutUs}
                            className="w-full flex items-center justify-start bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-full shadow-md transition-all duration-300"
                        >
                            <FiInfo className="mr-3" />
                            About Us
                        </button>

                        {/* Add Listing Button */}
                        <button
                            onClick={handleAddListing}
                            className="w-full flex items-center justify-start bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-full shadow-md transition-all duration-300"
                        >
                            <FiPlusCircle className="mr-3" />
                            Add Listing
                        </button>

                        {/* Manage Listings Button */}
                        <button
                            onClick={handleManageListings}
                            className="w-full flex items-center justify-start bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-full shadow-md transition-all duration-300"
                        >
                            <FiEdit className="mr-3" />
                            Manage Listings
                        </button>

                        {/* Repositioned Logout Button directly under Manage Listings */}
                        <button
                            onClick={handleLogout}
                            className="w-full flex items-center justify-start bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-full shadow-md transition-all duration-300"
                        >
                            <FiLogOut className="mr-3" />
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
