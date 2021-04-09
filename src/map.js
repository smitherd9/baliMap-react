import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import './App.css';
import { Grid, Row, Col, Navbar, Nav, NavItem, NavDropdown, MenuItem, Modal, Button } from 'react-bootstrap';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import peliatan from './audio/peliatan.mp3';
import * as banjarData from './data/banjar.json';




const mapStyles = {
  width: '100%',
  height: '100%'
};

const key = process.env.REACT_APP_GOOGLE_KEY;


export class MapContainer extends Component {
  
  state = {
    showingInfoWindow: false,  // Hides or shows the InfoWindow
    activeMarker: {},          // Shows the active marker upon click
    selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker

  };

  onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
  
    onClose = props => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        });
      }
    };

  render() {
    return (
      <>
      <AudioPlayer
    autoPlay
    src={peliatan}
    onPlay={e => console.log("onPlay")}
    // other props here
  />      
      <Map
        google={this.props.google}
        zoom={10}
        style={mapStyles}
        initialCenter={
          {
            lat: -8.403449367266102,
            lng: 115.1592653203491
          }
        }
      >

        {/* {banjarData.type.banjar.map((ensemble) => (
          <Marker key={ensemble.properties.ENSEMBLE_ID} 
          position={{ lat: ensemble.properties.coordinates[1], 
            lng: ensemble.properties.coordinates[0] }} />
        ))}, */}

     
      <Marker
          onClick={this.onMarkerClick}
          name={'Bali, Indonesia'}
        >
        </Marker>
        

        {/* <Marker
          onClick={this.onMarkerClick}
          name={'Peliatan Bali, Indonesia'}
          position={{ lat: -8.446920421129173, lng: 115.2801149236677 }}
          
          
        >
        </Marker> */}

        <Marker
          onClick={this.onMarkerClick}
          name={'Banjar Geladag, Pedungan'}
          position={{ lat: -8.687686367992407, lng: 115.20591205890749 }}
        >
        </Marker>

        {/* make array of maker lat and long points, pull data from array
        find way to put clickable information in InfoWindow */}
         
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
          <div>
            <AudioPlayer
    autoPlay
    src={peliatan}
    onPlay={e => console.log("onPlay")}
    // other props here
  />   </div>
        </InfoWindow>
        
      </Map>
    </>
    );
    
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDGN7BSfrfmmy-o5uoiXuLspyBQJbrtkVQ"
})(MapContainer)


// 'process.env.REACT_APP_BALI_MAP_GOOGLE_KEY'
// "AIzaSyDGN7BSfrfmmy-o5uoiXuLspyBQJbrtkVQ" 

