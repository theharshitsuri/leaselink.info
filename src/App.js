import './App.css';
import ListingPageFlats4200 from './Components/ListingPage/ListingPageFlats4200.jsx';
import ListingPageVenue from './Components/ListingPage/ListinPageVenue.jsx';
import ListingPageLark from './Components/ListingPage/ListingPagelark.jsx';
import ListingPage4050 from './Components/ListingPage/ListinPage4050.jsx';
import ListingPageStation42 from './Components/ListingPage/ListingPageStation.jsx';
import ListingPageParkPlace from './Components/ListingPage/ListingPageParkparkplace.jsx';
import ListingPage42N from './Components/ListingPage/ListingPage42N.jsx';
import ListingPageAvalon from './Components/ListingPage/ListingPageAvalon.jsx';
import ListingPageStandard from './Components/ListingPage/ListingPageStandard.jsx';
import ListingPageMetropolitan from './Components/ListingPage/ListingPageMetropolitan.jsx';
import ListingPageHub from './Components/ListingPage/ListingPageHub.jsx';
import ListingPageProvince from './Components/ListingPage/ListingPageProvince.jsx';
import ListingPageHalo from './Components/ListingPage/ListingPageHalo.jsx';
import ListingPageOn50 from './Components/ListingPage/ListingPageon50.jsx';
import ListingPageIq from './Components/ListingPage/ListingPageIq.jsx';
import ListingPageRetreat from './Components/ListingPage/ListingPageRetreat.jsx';
import ListingPageTheIvy from './Components/ListingPage/ListingPageIvy.jsx';
import ListingPageUnion from './Components/ListingPage/ListingPageUnion.jsx';
import ListingPageCambridge from './Components/ListingPage/ListingPageCambridge.jsx';
import Login from "./Components/Pages/Auth/login.jsx";
import Register from "./Components/Pages/Auth/register.jsx";
import { AuthProvider } from "./contexts/authContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './Components/Landing/Landing.jsx';
import Aboutus from './Components/Aboutus/Aboutuspage.jsx';
import AddListing from './Components/Pages/AddListing.jsx';
import ManageListings from './Components/Pages/ManageListings.jsx';
import ProtectedRoutes from './utils/ProtectedRoutes.jsx';
import ListingPageLakeviewOaks from './Components/ListingPage/ListingPageLakeviewOaks.jsx';
import ListingPageOaks from './Components/ListingPage/ListingPageOaks.jsx';
import ListingPageOakRamble from './Components/ListingPage/ListingPageOakRamble.jsx';
import ListingPageLinx from './Components/ListingPage/ListingPageLinx.jsx';
import ListingPageBellarmine from './Components/ListingPage/ListingPageBellarmine.jsx';


function App() {
  return (
    <Router>

      <AuthProvider>
        <div className="App">
          {/* <Navbar></Navbar> */}
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Login />} />
            <Route element={<ProtectedRoutes />} >
              <Route path="/landing" element={<Landing />} />
              <Route path="/aboutus" element={<Aboutus />} />
              <Route path="/addlisting" element={<AddListing />} />
              <Route path="/managelistings" element={<ManageListings />} />
              <Route path="/listingpageunion" element={<ListingPageUnion />} />
              <Route path="/listingpageprovince" element={<ListingPageProvince />} />
              <Route path="/listingpagehalo" element={<ListingPageHalo />} />
              <Route path="/listingpageon50" element={<ListingPageOn50 />} />
              <Route path="/listingpageiq" element={<ListingPageIq />} />
              <Route path="/listingpageivy" element={<ListingPageTheIvy />} />
              <Route path="/listingpageretreat" element={<ListingPageRetreat />} />
              <Route path="/listingpagelakeview" element={<ListingPageLakeviewOaks />} />
              <Route path="/listingpageoaks" element={<ListingPageOaks />} />
              <Route path="/listingpagecambridge" element={<ListingPageCambridge />} />
              <Route path="/listingpageflats4200" element={<ListingPageFlats4200 />} />
              <Route path="/listingpagevenue" element={<ListingPageVenue />} />
              <Route path="/listingpagelark" element={<ListingPageLark />} />
              <Route path="/listingpage4050" element={<ListingPage4050 />} />
              <Route path="/listingpagestation42" element={<ListingPageStation42 />} />
              <Route path="/listingpageparkplace" element={<ListingPageParkPlace />} />
              <Route path="/listingpage42N" element={<ListingPage42N />} />
              <Route path="/listingpageavalon" element={<ListingPageAvalon />} />
              <Route path="/listingpagestandard" element={<ListingPageStandard />} />
              <Route path="/listingpagemetropolitan" element={<ListingPageMetropolitan />} />
              <Route path="/listingpagehub" element={<ListingPageHub />} />
              <Route path="/listingpageoakramble" element={<ListingPageOakRamble />} />
              <Route path="/listingpagelinx" element={<ListingPageLinx />} />
              <Route path="/listingpagebellarmine" element={<ListingPageBellarmine />} />
            </Route>

          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;