import React from 'react';
import { scroller } from "react-scroll";

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = ({open, onClose}) => {

  const scrolltoSection = (element) => {
    scroller.scrollTo(element, {
        duration : 1400,
        delay: 100,
        smooth: true,
        offset: -140
    });
    onClose(false);
  }

  return (
    <Drawer 
      anchor="right"
      open={open}
      onClose={()=> onClose(false)}
    >
      <List component="nav" >
        <ListItem button onClick={() => scrolltoSection('featured')} >
          Featured
        </ListItem>
        <ListItem button onClick={() => scrolltoSection('venueInfo')} >
          Venue Info
        </ListItem>
        <ListItem button onClick={() => scrolltoSection('highlights')} >
          Highlights
        </ListItem>
        <ListItem button onClick={() => scrolltoSection('pricing')} >
          Pricing
        </ListItem>
        <ListItem button onClick={() => scrolltoSection('location')} >
          Location
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;