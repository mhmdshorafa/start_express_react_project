import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import drop_ins from '../../../public/drop_ins.js';
import shelters from '../../../public/shelters.js';
import water from '../../../public/water.js';
import youth from '../../../public/youth.js';
import List from './list.jsx';

class Map extends Component {
  constructor(props) {
    super(props);
    this.log = this.log.bind(this);
    this.state = {
      map: null,
      maps: null,
      markers: []
    }
  }

  log(i) {
    console.log(this.state.markers);
    this.state.maps.event.trigger(this.state.markers[14], "click");
  }

  render() {
    var drops = [];
    return (
      <div>
        <div className="map-wrp">
          <GoogleMapReact bootstrapURLKeys={{
            key: 'AIzaSyDFeKjIbY0DFXhuE_iRx0rAGTOTUPjcXFs'
          }} onGoogleApiLoaded={({map, maps}) => {
            drop_ins.features.map((data) => {
              const infowindow = new maps.InfoWindow({
                content: '<div>' + data.properties.Address + '<br />' + data.properties.NAME + '</div>'
              });
              const marker = new maps.Marker({
                map: map,
                draggable: true,
                animation: maps.Animation.DROP,
                position: {
                  lat: data.geometry.coordinates[1],
                  lng: data.geometry.coordinates[0]
                }
              });
              marker.addListener('click', function() {
                infowindow.open(map, marker);
                if (marker.getAnimation() !== null) {
                  marker.setAnimation(null);
                } else {
                  marker.setAnimation(maps.Animation.BOUNCE);
                }
              });
              marker.set("id", data.properties.OBJECTID);
              drops.push(marker);
            });
            water.features.map((data) => {
              const infowindow = new maps.InfoWindow({
                content: '<div>' + data.properties.Address + '<br />' + data.properties.NAME + '</div>'
              });
              const marker = new maps.Marker({
                map: map,
                draggable: true,
                animation: maps.Animation.DROP,
                position: {
                  lat: data.geometry.coordinates[1],
                  lng: data.geometry.coordinates[0]
                }
              });
              marker.addListener('click', function() {
                infowindow.open(map, marker);
              });
              marker.set("id", data.properties.OBJECTID);
              drops.push(marker);
            });
            shelters.features.map((data) => {
              const infowindow = new maps.InfoWindow({
                content: '<div>' + data.properties.ADDRESS_FU + '<br />' + data.properties.TYPE2 + '</div>'
              });
              const marker = new maps.Marker({
                map: map,
                draggable: true,
                animation: maps.Animation.DROP,
                position: {
                  lat: data.geometry.coordinates[1],
                  lng: data.geometry.coordinates[0]
                }
              });
              marker.addListener('click', function() {
                infowindow.open(map, marker);
              });
              marker.set("id", data.properties.OBJECTID);
              drops.push(marker);
            });
            youth.features.map((data) => {
              const infowindow = new maps.InfoWindow({
                content: '<div>' + data.properties.AGENCY_NAM + '<br />' + data.properties.HOURS + '<br />' + data.properties.ACCESSIBIL + '</div>'
              });
              const marker = new maps.Marker({
                map: map,
                draggable: true,
                animation: maps.Animation.DROP,
                position: {
                  lat: data.geometry.coordinates[1],
                  lng: data.geometry.coordinates[0]
                }
              });
              marker.addListener('click', function() {
                infowindow.open(map, marker);
              });
              marker.set("id", data.properties.OBJECTID);
              drops.push(marker);
            });
            this.setState({map: map, maps: maps, markers: drops});
          }} defaultCenter={{
            lat: 43.66014526,
            lng: -79.37840775
          }} defaultZoom={16}></GoogleMapReact>
        </div>

        <List drop={drop_ins.features} water={water.features} shelters={shelters.features} youth={youth.features} log={this.log} dropMarkers={drops}/>

      </div>
    );
  }
}
export default Map;
