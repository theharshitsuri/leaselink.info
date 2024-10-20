import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import { collection, query, where, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db, auth } from '../../firebase/firebase'; // Import Firestore and Firebase Auth instances
import Navbar from '../../Navbar/Navigation'; // Import Navbar component

const ManageListings = () => {
    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate hook

    useEffect(() => {
        const fetchUserListings = async () => {
            const user = auth.currentUser; // Get the current authenticated user

            if (!user) {
                setError('You need to log in to view your listings.');
                return;
            }

            const uid = user.uid; // Get the user's UID

            try {
                const q = query(collection(db, 'listings'), where('uid', '==', uid));
                const querySnapshot = await getDocs(q);

                const userListings = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setListings(userListings);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching user listings:', error);
                setError('Failed to load your listings. Please try again.');
                setLoading(false);
            }
        };

        fetchUserListings();
    }, []);

    const handleDelete = async (listingId) => {
        try {
            await deleteDoc(doc(db, 'listings', listingId)); // Delete the document by ID
            setListings((prevListings) => prevListings.filter((listing) => listing.id !== listingId)); // Remove the deleted listing from the state
            console.log(`Listing with ID ${listingId} has been deleted`);
        } catch (error) {
            console.error('Error deleting listing:', error);
            setError('Failed to delete listing. Please try again.');
        }
    };

    const handleAddListing = () => {
        navigate('/addlisting'); // Navigate to the add listing page
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Navbar />

            <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg mt-8">
                <h1 className="text-4xl font-bold text-center mb-8">Manage Your Listings</h1>

                {error && <p className="text-red-500 text-center mb-4">{error}</p>}

                {/* Add Listing Button */}
                <div className="text-right mb-4">
                    <button
                        onClick={handleAddListing}
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                    >
                        Add Listing
                    </button>
                </div>

                {listings.length > 0 ? (
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b">Property Name</th>
                                <th className="py-2 px-4 border-b">Unit Size</th>
                                <th className="py-2 px-4 border-b">Price</th>
                                <th className="py-2 px-4 border-b">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listings.map((listing) => (
                                <tr key={listing.id}>
                                    <td className="py-2 px-4 border-b">{listing.propertyName}</td>
                                    <td className="py-2 px-4 border-b">{listing.unitSize}</td>
                                    <td className="py-2 px-4 border-b">${listing.listingPrice}</td>
                                    <td className="py-2 px-4 border-b">
                                        <button
                                            onClick={() => handleDelete(listing.id)}
                                            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="text-center text-gray-500">You have no listings.</p>
                )}
            </div>
        </div>
    );
};

export default ManageListings;
