import React from 'react';
import './resources/styles.css';
import './App.css'
import { Element } from 'react-scroll';

import Header from './components/header_footer/header.component';
import Featured from './components/featured';
import VenueInfo from './components/venue-info';
import Highlights from './components/highlights';
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/header_footer/footer.component';

function App() {
  return (
    <div className="App">
      <Header className="appHeader" />
      <Element className="appFeatured" name="featured"><Featured /></Element>
      <Element className="appVenueInfo" name="venueInfo"><VenueInfo /></Element>
      <Element className="appHighlights" name="highlights" ><Highlights /></Element>
      <Element className="appPricing" name="pricing"><Pricing /></Element>
      <Element className="appLocation" name="location"><Location /></Element>
      <Footer className="appFooter"/>
    </div>
  );
}

export default App;
