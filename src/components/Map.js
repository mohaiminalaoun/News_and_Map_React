import {Component} from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactMapGL from 'react-map-gl';
import './Map.css';

class Map extends Component {

  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: 1000,
        height: 800,
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8
      },
      TOKEN : process.env.MAPBOX_API_KEY
    };
  }


  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        className="map"
        mapboxApiAccessToken={this.state.TOKEN}
        onViewportChange={(viewport) => this.setState({viewport})}
      />
    );
  }
}


export default Map;
