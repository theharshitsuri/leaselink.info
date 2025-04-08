import React from 'react';
import flats from "../Images/Flatsat4200.jpg";
import venue from "../Images/Venue.jpg";
import lark from "../Images/Lark.jpg";
import avalon from "../Images/avalon.jpg";
import station42 from "../Images/station42.jpg";
import N42 from "../Images/42N.jpg";
import lofts4050 from "../Images/4050lofts.jpg";
import parkplace from "../Images/parkplace.jpg";
import standard from "../Images/standard.jpg";
import themet from "../Images/themet.jpg";
import hub from "../Images/hub.jpg";
import union from "../Images/union.jpg";
import province from "../Images/province.jpg";
import halo from "../Images/halo.jpg";
import on50 from "../Images/on50.jpg";
import iq from "../Images/iq.jpg";
import retreat from "../Images/retreat.jpg";
import ivy from "../Images/ivy.jpg";
import lakeview from "../Images/lakeview.jpg";
import oaks from "../Images/oaks.jpg";
import cambridge from "../Images/cambridge.jpg";
import oakramble from "../Images/oakramble.jpg";
import linx from "../Images/linx.jpg";
import WidgetCard from './WidgetCard';
import bellarmine from '../../Images/bellarmine.jpg';

const Widgets = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Welcome to Lease Link</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">

          {/* Flats at 4200 */}
          <WidgetCard
            title="The Flats at 4200"
            link={<a href="https://www.livetheflats.com/" target="_blank" rel="noopener noreferrer" >View Website</a>}
            subtitle="Amenities: Pool, Grill, Clubhouse, Movie Theatre, Gym, Study Room, Computer Lab"
            imageUrl={flats}
            linkTo="/listingpageflats4200"
          />

          {/* Venue at North Campus */}
          <WidgetCard
            title="Venue at North Campus"
            link={<a href="https://www.venueatnorthcampus.com/" target="_blank" rel="noopener noreferrer" >View Website</a>}
            subtitle="Amenities: Pool, Grill, Volleyball Court, Clubhouse, Gym, Zen Courtyard, Computer Lab, Dog Park"
            imageUrl={venue}
            linkTo="/listingpagevenue"
          />

          {/* Lark on 42nd */}
          <WidgetCard
            title="Lark on 42nd"
            link={<a href="https://larkon42nd.com/" target="_blank" rel="noopener noreferrer" >View Website</a>}
            subtitle="Pool, Grill, Gym, Lounge"
            imageUrl={lark}
            linkTo="/listingpagelark"
          />

          {/* 4050 Lofts */}
          <WidgetCard
            title="4050 Lofts"
            link={<a href="https://www.4050lofts.com/" target="_blank" rel="noopener noreferrer" >View Website</a>}
            subtitle="Amenities: Pool, Gym, Study Spaces"
            imageUrl={lofts4050}
            linkTo="/listingpage4050"
          />

          {/* Station 42 */}
          <WidgetCard
            title="Station 42"
            link={<a href="https://station42.us/" target="_blank" rel="noopener noreferrer" >View Website</a>}
            subtitle="Amenities: Pool, Grill, Gym, Cyber Cafe, Dog Park"
            imageUrl={station42}
            linkTo="/listingpagestation42"
          />

          {/* Park Place */}
          <WidgetCard
            title="Park Place"
            link={<a href="https://www.parkplaceattampa.com/" target="_blank" rel="noopener noreferrer" >View Website</a>}
            subtitle="Amenities: Pool, Grill, Basketball Court, Gym, Movie theatre, Study Spaces"
            imageUrl={parkplace}
            linkTo="/listingpageparkplace"
          />

          {/* 42N */}
          <WidgetCard
            title="42N"
            link={<a href="https://live42n.com/" target="_blank" rel="noopener noreferrer" >View Website</a>}
            subtitle="Amenities: Pool, Hot tub, Gym, Basketball Court, Study Lounge, Dog Park"
            imageUrl={N42}
            linkTo="/listingpage42N"
          />

          {/* Avalon Heights */}
          <WidgetCard
            title="Avalon Heights"
            link={<a href="https://www.americancampus.com/student-apartments/fl/tampa/avalon-heights" target="_blank" rel="noopener noreferrer" >View Website</a>}
            subtitle="Amenities: Pool, Hot Tub, Grill, Gym, Basketball Court, Volleyball Court, Clubroom, Tennis Court"
            imageUrl={avalon}
            linkTo="/listingpageavalon"
          />

          {/* The Standard */}
          <WidgetCard
            title="The Standard"
            link={<a href="https://thestandardtampa.landmark-properties.com/" target="_blank" rel="noopener noreferrer" >View Website</a>}
            subtitle="Amenities: Pool, Grill, Gym, Game Room"
            imageUrl={standard}
            linkTo="/listingpagestandard"
          />

          {/* The Metropolitan */}
          <WidgetCard
            title="The Metropolitan"
            link={<a href="https://www.themettampa.com/" target="_blank" rel="noopener noreferrer" >View Website</a>}
            subtitle="Amenities: Pool, Grill, Gym, Clubroom"
            imageUrl={themet}
            linkTo="/listingpagemetropolitan"
          />

          {/* Hub on Campus Tampa */}
          <WidgetCard
            title="Hub on Campus Tampa"
            link={<a href="https://huboncampus.com/tampa/" target="_blank" rel="noopener noreferrer" >View Website</a>}
            subtitle="Amenities: Pool, Hot Tub, Grill, Gym, Study Area, Dog Park"
            imageUrl={hub}
            linkTo="/listingpagehub"
          />

          {/* Union on Fletcher */}
          <WidgetCard
            title="Union on Fletcher"
            link={<a href="https://www.uniononfletcher.com/" target="_blank" rel="noopener noreferrer" >View Website</a>}
            subtitle="Amenities: Pool, Grill, Gym, Outdoor Patio, Firepit, Club House, Study Area, Dog Washing Station,"
            imageUrl={union}
            linkTo="/listingpageunion"
          />

          {/* The Province */}
          <WidgetCard
            title="The Province"
            link={<a href="" target="_blank" rel="noopener noreferrer" >View Website</a>}
            subtitle="Amenities: Pool, Grill, Gym, Sand Volleyball Court, Theatre Room"
            imageUrl={province}
            linkTo="/listingpageprovince"
          />

          {/* Halo 46 */}
          <WidgetCard
            title="Halo 46"
            link={<a href="https://huboncampus.com/tampa/" target="_blank" rel="noopener noreferrer" >View Website</a>}
            subtitle="Amenities: Pool, Hot Tub, Grill, Gym, Study Area, Dog Park"
            imageUrl={halo}
            linkTo="/listingpagehalo"
          />

          {/* On50 */}
          <WidgetCard
            title="On50"
            link={<a href="https://www.on50tampa.com/" target="_blank" rel="noopener noreferrer">View Website</a>}
            subtitle="Amenities: Pool, Hot Tub, Grill, Gym, Study Area, Dog Park"
            imageUrl={on50}
            linkTo="/listingpageon50"
          />

          {/* IQ Apartments */}
          <WidgetCard
            title="IQ Apartments"
            link={<a href="https://www.liveatiq.com/" target="_blank" rel="noopener noreferrer" >View Website</a>}
            subtitle="Amenities: Pool, Grill, Gym, Games Room, Study Area"
            imageUrl={iq}
            linkTo="/listingpageiq"
          />

          {/* The Retreat */}
          <WidgetCard
            title="The Retreat"
            link={<a href="https://www.retreatatusf.com/" target="_blank" rel="noopener noreferrer" >View Website</a>}
            subtitle="Amenities: Pool, Grill, Gym, Sand Volleyball Court, Lounge"
            imageUrl={retreat}
            linkTo="/listingpageretreat"
          />

          {/* The Ivy */}
          <WidgetCard
            title="The Ivy"
            link={<a href="https://www.livetheivy.com/" target="_blank" rel="noopener noreferrer" >View Website</a>}
            subtitle="Amenities: Pool, Grill, Gym, ClubHouse, Study Rooms, Lounge, Dog Park"
            imageUrl={ivy}
            linkTo="/listingpageivy"
          />

          {/* LakeView Oaks */}
          <WidgetCard
            title="Lakeview Oaks Apartments"
            link={<a href="https://www.lakeviewoaks.net/" target="_blank" rel="noopener noreferrer" >View Website</a>}
            subtitle="Amenities: Pool, Grill, Gym, ClubHouse, Clubhouse, Tennis Court, Basketball Court, Volleyball Court, Dog Park"
            imageUrl={lakeview}
            linkTo="/listingpagelakeview"
          />

          {/* Oaks Condominiums */}
          <WidgetCard
            title="Oaks Condominiums"
            link={<a href="https://maps.app.goo.gl/y43EiJjDhhDqWoWs6" target="_blank" rel="noopener noreferrer" >View Website</a>}
            subtitle="Amenities: Pool, Tennis Court"
            imageUrl={oaks}
            linkTo="/listingpageoaks"
          />

          {/* Cambridge Woords */}
          <WidgetCard
            title="Cambridge Woods"
            link={<a href="https://www.udr.com/tampa-apartments/university-center/cambridge-woods/" target="_blank" rel="noopener noreferrer" >View Website</a>}
            subtitle="Amenities: Pool, Gym, Fire Pit, ClubHouse, Game Room, Dog Park"
            imageUrl={cambridge}
            linkTo="/listingpagecambridge"
          />

          {/* Oak Ramble */}
          <WidgetCard
            title="Oak Ramble"
            link={<a href="https://rent.brookfieldproperties.com/property/oak-ramble/?utm_campaign=gmb&utm_medium=organic&utm_source=local" target="_blank" rel="noopener noreferrer" >View Website</a>}
            subtitle="Amenities: Pool, Gym"
            imageUrl={oakramble}
            linkTo="/listingpageoakramble"
          />

          {/* The Linx */}
          <WidgetCard
            title="The Linx"
            link={<a href="https://www.thelinxapartments.com/?gad_source=1&gclid=Cj0KCQjw99e4BhDiARIsAISE7P9_l3yO4y4ozxI_o_Z5cz79a-JqJ7uZl4M4DNCNK0583ra2XgpX8vcaAifLEALw_wcB" target="_blank" rel="noopener noreferrer" >View Website</a>}
            subtitle="Amenities: Pool, Gym"
            imageUrl={linx}
            linkTo="/listingpagelinx"
          />
          
          {/* Bellarmine Hall */}
          <WidgetCard
            title="Bellarmine Hall"
            link={<a href="https://www.bellarminehall.com" target="_blank" rel="noopener noreferrer" >View Website</a>}
            subtitle="Amenities: Outdoor Patio with BBQ, Study Lounge, Game Lounge, Coffee Bar,"
            imageUrl={bellarmine}
            linkTo="/listingpagebellarmine"
          />
        </div>
      </div>
    </div>
  );
}

export default Widgets;
