import React from 'react';

import icon_calendar from '../../resources/images/icons/calendar.png';
import icon_location from '../../resources/images/icons/location.png';

import Zoom from 'react-reveal/Zoom';
import './venue.styles.css';

const VenueInfo = () => {
  return (
    <div className='bck_black'>
      <div className="vn_wrapper">
        <div className="vn_item">             
          <Zoom duration={500}>  
            <div className="vn_outer">
              <div className="vn_inner">
                <div className="vn_icon_square bck_red">
                </div>
                <div 
                  className="vn_icon"
                  style={{
                    background: `url(${icon_calendar})`
                  }}
                >      
                </div>
                <div className="vn_title">Event Date & Time</div>
                <div className="vn_desc">12 December 2020 @10.00 pm</div>
              </div>
            </div>
          </Zoom>
        </div>
        <div className="vn_item">      
          <Zoom duration={500} delay={500}>
            <div className="vn_outer">
              <div className="vn_inner">
                <div className="vn_icon_square bck_yellow">
                </div>
                <div 
                    className="vn_icon"
                    style={{
                      background: `url(${icon_location})`
                    }}
                  >
                </div>
                <div className="vn_title">Event Location</div>
                <div className="vn_desc">M G Rd, New Delhi, Cantonment 1100</div>
              </div>
            </div>
          </Zoom>
          
        </div>
      </div>    
    </div>
  );
};

export default VenueInfo;