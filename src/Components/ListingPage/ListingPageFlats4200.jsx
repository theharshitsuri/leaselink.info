import React, { useState, useEffect } from 'react';
import ScrollView from '../ScrollView/ScrollView';
import Navbar from '../../Navbar/Navigation';
import flats from "../../Images/Flatsat4200.jpg";
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebase'; // Ensure this is the correct path
import Modal from 'react-modal'; // Install if you haven't: npm install react-modal

// Apply global modal styling for react-modal
Modal.setAppElement('#root'); // Ensure the app element is set for accessibility

const ListingPageFlats4200 = () => {
  const [listings, setListings] = useState([]);
  const [selectedListing, setSelectedListing] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state to handle fetch delays

  // Fetch listings from Firestore
  useEffect(() => {
    const fetchListings = async () => {
      try {
        const q = query(
          collection(db, 'listings'), // 'listings' is your Firestore collection
          where('propertyName', '==', 'The Flats at 4200') // Filter by property name
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
        setLoading(false); // Set loading to false after fetch is complete
      }
    };

    fetchListings();
  }, []);

  const listing = {
    image: flats,
    title: 'The Flats at 4200',
    description: 'This is a beautiful house located in a serene environment with modern amenities.',
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

  return (
    <div>
      <Navbar />

      {/* Main container for the image, text, and scroll view */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between p-4 lg:p-8">

        {/* Full-width image for mobile screens, half for large screens, with shadow and hover effect */}
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0 shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
          <img
            src={listing.image}
            alt={listing.title}
            className="w-full h-auto object-cover rounded-lg"
            style={{ maxHeight: '400px' }} // Limit image height for desktop
          />
        </div>

        {/* Text section - Keep centered on all devices */}
        <div className="w-full lg:w-1/2 lg:pl-8 text-center lg:text-center">
          <h1 className="text-4xl font-bold mb-4">{listing.title}</h1>
          <p className="text-gray-600">{listing.description}</p>
        </div>
      </div>

      {/* Scrollable view */}
      <div className="w-full mt-6 p-4">
        {loading ? (
          <p className="text-center text-gray-500">Loading listings...</p>
        ) : listings.length > 0 ? (
          <div
            className="overflow-x-auto lg:overflow-x-hidden overflow-y-auto whitespace-nowrap"
            style={{ maxHeight: '400px', maxWidth: '100%' }}
          >
            {/* Set width to 300% on mobile screens to avoid squished content */}
            <div className="lg:w-full">
              <ScrollView
                items={listings.map((listing) => ({
                  listerName: listing.name,
                  contactInfo: listing.email,
                  unitSize: listing.unitSize,
                  listingPrice: listing.listingPrice,
                  onClick: () => openModal(listing),
                }))}
              />
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500">No listings yet.</p>
        )}
      </div>

      {/* Modal for showing listing details */}
      {selectedListing && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Listing Description"
          className="w-full lg:w-2/3 max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {selectedListing.name}
              </h2>
              <p className="text-lg text-gray-700 mb-6">{selectedListing.description}</p>
              <div className="space-y-4">
                <p>
                  <strong className="font-semibold text-gray-800">Contact Info:</strong>{' '}
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

export default ListingPageFlats4200;
