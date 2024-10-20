import React, { useState, useEffect } from 'react';
import ListingCard from './ListingCard';
import ScrollView from '../ScrollView/ScrollView';
import Navbar from '../../Navbar/Navigation';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebase'; // Ensure this is the correct path
import Modal from 'react-modal'; // Install if you haven't: npm install react-modal
import venue from '../../Images/Venue.jpg'; // Correct import of the venue image

Modal.setAppElement('#root'); // Accessibility for the modal

const ListingPageVenue = () => {
  const [listings, setListings] = useState([]);
  const [selectedListing, setSelectedListing] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true); // Track loading state

  // Fetch listings from Firestore
  useEffect(() => {
    const fetchListings = async () => {
      try {
        const q = query(
          collection(db, 'listings'),
          where('propertyName', '==', 'Venue at North Campus') // Filter by property name
        );
        const querySnapshot = await getDocs(q);
        const fetchedListings = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setListings(fetchedListings);
      } catch (error) {
        console.error('Error fetching listings:', error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchListings();
  }, []);

  const listing = {
    image: venue, // Set the venue image
    title: 'Venue at North Campus',
    description: 'Stylish student living with amenities like a pool, gym, and study spaces.',
  };

  // Handle opening the modal with the selected listing
  const openModal = (listing) => {
    setSelectedListing(listing);
    setIsModalOpen(true);
  };

  // Handle closing the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedListing(null);
  };

  if (loading) {
    return <div className="text-center p-8 text-gray-500">Loading...</div>;
  }

  return (
    <div>
      <Navbar />

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between p-4 lg:p-8">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0 shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
          <img
            src={listing.image}
            alt={listing.title}
            className="w-full h-auto object-cover rounded-lg"
            style={{ maxHeight: '400px' }}
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 lg:pl-8 text-center lg:text-left">
          <h1 className="text-4xl font-bold mb-4">{listing.title}</h1>
          <p className="text-gray-600">{listing.description}</p>
        </div>
      </div>

      {/* Listings Scroll View */}
      <div className="mt-16">
        {listings.length > 0 ? (
          <ScrollView
            items={listings.map((listing) => ({
              listerName: listing.name,
              contactInfo: listing.email,
              unitSize: listing.unitSize,
              listingPrice: listing.listingPrice,
              onClick: () => openModal(listing), // Open modal on click
            }))}
          />
        ) : (
          <div className="text-center text-gray-500">No listings yet.</div>
        )}
      </div>

      {/* Modal for showing listing description */}
      {selectedListing && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Listing Description"
          className="modal-content w-full max-w-2xl p-8 bg-white rounded-lg shadow-xl"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        >
          <div className="relative">
            {/* Close button */}
            <button
              className="absolute top-2 right-2 text-3xl font-bold text-gray-500 hover:text-gray-700 transition duration-200"
              onClick={closeModal}
            >
              &times;
            </button>

            <div className="p-4">
              {/* Listing Details */}
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {selectedListing.name}
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                {selectedListing.description}
              </p>

              <div className="space-y-4">
                <p>
                  <strong className="font-semibold text-gray-800">
                    Contact Info:
                  </strong>{' '}
                  <span className="text-gray-700">{selectedListing.email}</span>
                </p>
                <p>
                  <strong className="font-semibold text-gray-800">Unit Size:</strong>{' '}
                  <span className="text-gray-700">{selectedListing.unitSize}</span>
                </p>
                <p>
                  <strong className="font-semibold text-gray-800">Price:</strong>{' '}
                  <span className="text-gray-700">{selectedListing.listingPrice}</span>
                </p>
              </div>

              {/* Optional Image */}
              {selectedListing.image && (
                <img
                  src={selectedListing.image}
                  alt={selectedListing.name}
                  className="mt-6 rounded-lg shadow-md"
                />
              )}
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ListingPageVenue;
