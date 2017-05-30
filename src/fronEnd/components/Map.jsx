import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import drop_ins from '../../../public/drop_ins.js';
import shelters from '../../../public/shelters.js';
import water from '../../../public/water.js';
import youth from '../../../public/youth.js';

class Map extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div style={{width:'80%', height:'400px', margin:'0 auto', marginTop:'20px'}}>
        <GoogleMapReact bootstrapURLKeys={{key: 'AIzaSyDFeKjIbY0DFXhuE_iRx0rAGTOTUPjcXFs'}} onGoogleApiLoaded={({map, maps}) =>  {
            drop_ins.features.map((data) => {
            const infowindow = new maps.InfoWindow({
                content: '<div>'+data.properties.Address+'<br />'+data.properties.NAME+'</div>'
                });
           const marker = new maps.Marker({
              map: map,
              draggable: true,
              animation: maps.Animation.DROP,
              position: {lat: data.geometry.coordinates[1], lng:data.geometry.coordinates[0]}
            });
            marker.addListener('click', function() {
            infowindow.open(map, marker);
          });
          });

            water.features.map((data) => {
            const infowindow = new maps.InfoWindow({
                content: '<div>'+data.properties.Address+'<br />'+data.properties.NAME+'</div>'
                });
           const marker = new maps.Marker({
              map: map,
              draggable: true,
              animation: maps.Animation.DROP,
              position: {lat: data.geometry.coordinates[1], lng:data.geometry.coordinates[0]}
            });
            marker.addListener('click', function() {
              console.log(data.geometry.coordinates[1],data.geometry.coordinates[0]);
            infowindow.open(map, marker);
          });
          });

            shelters.features.map((data) => {
            const infowindow = new maps.InfoWindow({
                content: '<div>'+data.properties.ADDRESS_FU+'<br />'+data.properties.TYPE2+'</div>'
                });
           const marker = new maps.Marker({
              map: map,
              draggable: true,
              animation: maps.Animation.DROP,
              position: {lat: data.geometry.coordinates[1], lng:data.geometry.coordinates[0]}
            });
            marker.addListener('click', function() {
            infowindow.open(map, marker);
          });
          });

            youth.features.map((data) => {
            const infowindow = new maps.InfoWindow({
                content: '<div>'+data.properties.AGENCY_NAM+'<br />'+data.properties.HOURS+'<br />'+data.properties.ACCESSIBIL+'</div>'
                });
           const marker = new maps.Marker({
              map: map,
              draggable: true,
              animation: maps.Animation.DROP,
              position: {lat: data.geometry.coordinates[1], lng:data.geometry.coordinates[0]}
            });
            marker.addListener('click', function() {
            infowindow.open(map, marker);
          });
          });

        }}
        defaultCenter={{lat:43.66014526, lng:-79.37840775}}
        defaultZoom={16}
      >


      </GoogleMapReact></div>
    );
  }
}
export default Map;
