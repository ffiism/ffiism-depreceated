import React,{Component} from 'react';
import { Map, GoogleApiWrapper,Marker } from 'google-maps-react';
export class Contact extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        stores: [{lat: 47.49855629475769, lng: -122.14184416996333},
                {latitude: 23.814637, longitude: 86.441200},
                {latitude: 23.819257, longitude: 86.441110},
                {latitude: 47.6307081, longitude: -122.1434325},
                {latitude: 47.3084488, longitude: -122.2140121},
                {latitude: 47.5524695, longitude: -122.0425407}]
      }
    }
  
    displayMarkers = () => {
      return this.state.stores.map((store, index) => {
        return <Marker key={index} id={index} position={{
         lat: store.latitude,
         lng: store.longitude
       }}
       onClick={() => console.log("You clicked me!")} />
      })
    }
  
    render() {
        
          
      return (
          <div className="container">
              <div className="row">
                <div className="col-12 col-sm-6">
                  <img src="../assets/images/msg4.png"/>
                </div>
              </div>
              <div className="row m-8">
                  <br/><br/>
          <Map
            google={this.props.google}
            zoom={8}
            style={{width: '100%', height: '500px', 'top': '1.5rem'}}
            initialCenter={{ lat: 47.444, lng: -122.176}}
          >
            {this.displayMarkers()}
          </Map>
          </div>
          </div>
      );
    }
  }


export default  GoogleApiWrapper({
    apiKey: process.env.REACT_APP_API_KEY
  })(Contact);