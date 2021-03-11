import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import './App.css';
import { Grid, Row, Col, Navbar, Nav, NavItem, NavDropdown, MenuItem, Modal, Button } from 'react-bootstrap';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import peliatan from './audio/peliatan.mp3';


function Peliatan() {
    return(
        <div>
        <Marker
          onClick={this.onMarkerClick}
          name={'Peliatan Bali, Indonesia'}
          position={{ lat: -8.446920421129173, lng: 115.2801149236677 }}        
          
        >
        </Marker>


        </div>
    )
}





export default Peliatan;