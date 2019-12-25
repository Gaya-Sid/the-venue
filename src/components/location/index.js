import React from 'react';

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe 
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17552.545483678547!2d77.15037488324745!3d28.598506069678063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d215bb6f06b%3A0x3232c4261f27652!2sM%20G%20Rd%2C%20Azad%20Nagar%2C%20Keren%20Lines%2C%20Delhi%20Cantonment%2C%20New%20Delhi%2C%20Delhi%20110010!5e0!3m2!1sen!2sin!4v1577274569793!5m2!1sen!2sin" 
        width="100%" 
        height="500px" 
        frameBorder="0"  
        allowFullScreen
      ></iframe>

      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;