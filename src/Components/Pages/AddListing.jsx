import React, { useState } from 'react';
import { db, auth } from '../../firebase/firebase'; // Import Firestore and Firebase Auth instances
import { collection, addDoc } from 'firebase/firestore';
import Navbar from '../../Navbar/Navigation'; // Import Navbar component

const AddListing = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        propertyName: '',
        contactInfo: '',
        unitSize: '',
        listingPrice: '',
        description: '',
    });

    const [error, setError] = useState(''); // State for storing email validation error

    const propertyOptions = ['The Flats at 4200', 'Venue at North Campus', 'Lark on 42nd', '4050 Lofts', 'Station 42', 'Park Place', '42N', 'Avalon Heights', 'The Standard', 'The Metropolitan', 'Hub on Campus Tampa', 'Union on Fletcher', 'Halo 46', 'Station 42', 'The Province', 'IQ Apartments', 'The Retreat', 'On50', 'The Ivy', 'Lakeview Oaks', 'Oaks', 'Cambridge Woods', 'Oak Ramble', 'The Linx','Bellarmine Hall'];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateEmail = (email) => {
        // Check if the email ends with 'usf.edu'
        return email.endsWith('@usf.edu');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate email before submitting
        if (!validateEmail(formData.email)) {
            setError('Email must end with @usf.edu');
            return;
        }

        setError(''); // Clear error if validation passes

        try {
            const user = auth.currentUser; // Get the current authenticated user

            if (!user) {
                console.error('No authenticated user found.');
                return;
            }

            const uid = user.uid; // Get the user's UID

            const docRef = await addDoc(collection(db, 'listings'), {
                ...formData,
                createdAt: new Date(),
                uid, // Store the UID of the authenticated user
            });

            console.log('Listing added with ID: ', docRef.id);
        } catch (error) {
            console.error('Error adding listing: ', error);
        }

        // Reset the form
        setFormData({
            name: '',
            email: '',
            propertyName: '',
            contactInfo: '',
            unitSize: '',
            listingPrice: '',
            description: '',
        });
    };

    return (
        <div>
            {/* Navbar */}
            <Navbar />

            {/* Main Add Listing Form */}
            <div className="max-w-2xl mx-auto p-8 bg-white shadow-md rounded-lg mt-8">
                <h1 className="text-4xl font-bold text-center mb-8">Add a New Listing</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* User Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Your Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full p-3 border border-gray-300 rounded-md"
                            placeholder="Enter your name"
                        />
                    </div>

                    {/* User Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Contact Email (must be a USF email)
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full p-3 border border-gray-300 rounded-md"
                            placeholder="Enter your email"
                        />
                        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                    </div>

                    {/* Property Name Dropdown */}
                    <div>
                        <label htmlFor="propertyName" className="block text-sm font-medium text-gray-700">
                            Property Name
                        </label>
                        <select
                            name="propertyName"
                            value={formData.propertyName}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full p-3 border border-gray-300 rounded-md"
                        >
                            <option value="">Select a property</option>
                            {propertyOptions.map((property, index) => (
                                <option key={index} value={property}>
                                    {property}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Unit Size */}
                    <div>
                        <label htmlFor="unitSize" className="block text-sm font-medium text-gray-700">
                            Unit Type
                        </label>
                        <input
                            type="text"
                            name="unitSize"
                            value={formData.unitSize}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full p-3 border border-gray-300 rounded-md"
                            placeholder="Enter unit size"
                        />
                    </div>

                    {/* Listing Price */}
                    <div>
                        <label htmlFor="listingPrice" className="block text-sm font-medium text-gray-700">
                            Listing Price ($/month)
                        </label>
                        <input
                            type="number"
                            name="listingPrice"
                            value={formData.listingPrice}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full p-3 border border-gray-300 rounded-md"
                            placeholder="Enter listing price"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                            Description
                        </label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full p-3 border border-gray-300 rounded-md"
                            rows="4"
                            placeholder="Enter a description"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md text-lg"
                    >
                        Add Listing
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddListing;
