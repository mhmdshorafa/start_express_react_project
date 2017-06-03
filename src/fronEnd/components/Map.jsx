import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import drop_ins from '../../../public/drop_ins.js';
import shelters from '../../../public/shelters.js';
import List from './list.jsx';

class Map extends Component {
  constructor(props) {
    super(props);
    this.matchMarker = this.matchMarker.bind(this);
    this.state = {
      map: null,
      maps: null,
      markers: [],
      content: '',
      prevMarker: null
    }
  }

  matchMarker(id, address, name) {
    this.setState({
      content: '<div>' + address + '<br />' + name + '</div>'
    }, () => {
      (this.state.prevMarker != null)
        ? this.state.prevMarker.setAnimation(null)
        : console.log('ss')
      const matchMarker = this.state.markers.filter((marker) => {
        return marker.get('id') == id;
      })
      if (matchMarker.length > 0) {
        this.state.maps.event.trigger(matchMarker[0], "click");
      }
    });
  }

  render() {

    var allMarkers = [];
    var infowindow;

    return (
      <div>
        <div className="map-wrp">
          <GoogleMapReact bootstrapURLKeys={{key: 'AIzaSyDFeKjIbY0DFXhuE_iRx0rAGTOTUPjcXFs'}}
            onGoogleApiLoaded={({map, maps}) => {

              drop_ins.features.map((data) => {
                const marker = new maps.Marker({
                  map: map,
                  draggable: true,
                  animation: maps.Animation.DROP,
                  position: {
                    lat: data.geometry.coordinates[1],
                    lng: data.geometry.coordinates[0]
                  }
                });

              marker.addListener('click', () => {
                this.setState({prevMarker: marker});
                infowindow.close();
                infowindow = new maps.InfoWindow({content: this.state.content});
                infowindow.open(map, marker);
                marker.setAnimation(maps.Animation.BOUNCE);
              });

              marker.set("id", data.properties.OBJECTID);
              allMarkers.push(marker);
            });


            shelters.features.map((data) => {
              infowindow = new maps.InfoWindow({content: this.state.content});
              const marker = new maps.Marker({
                map: map,
                draggable: true,
                animation: maps.Animation.DROP,
                position: {
                  lat: data.geometry.coordinates[1],
                  lng: data.geometry.coordinates[0]
                }
              });

              marker.addListener('click', () => {
                this.setState({prevMarker: marker});
                infowindow.close();
                marker.setAnimation(maps.Animation.BOUNCE);
                infowindow.open(map, marker);
              });

              marker.set("id", data.properties.OBJECTID);
              allMarkers.push(marker);
            });
            this.setState({map: map, maps: maps, markers: allMarkers});
          }}

          defaultCenter={{
            lat: 43.66014526,
            lng: -79.37840775
          }} defaultZoom={15}></GoogleMapReact>
        </div>

        <List drop={drop_ins.features} shelters={shelters.features} matchMarker={this.matchMarker}/>

      </div>
    );
  }
}
export default Map;
