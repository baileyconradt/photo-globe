import logo from './logo.svg';
import './App.css';
import Globe from 'react-globe.gl';
require('dotenv').config();

const apiKey = process.env.API_KEY;


//for searching for a specific coordinates based on a city ////////////////////////////////////////////////////////

// function getLatLng(city, apiKey) {
//   return new Promise((resolve, reject) => {
//       const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(city)}&key=${apiKey}`;

//       // Making a GET request to the Geocoding API
//       fetch(url)
//           .then(response => {
//               if (!response.ok) {
//                   throw new Error('Network response was not ok');
//               }
//               return response.json();
//           })
//           .then(data => {
//               if (data.status === 'OK') {
//                   const location = data.results[0].geometry.location;
//                   resolve({ latitude: location.lat, longitude: location.lng });
//               } else {
//                   reject('Geocoding request failed');
//               }
//           })
//           .catch(error => {
//               reject(error.message);
//           });
//   });
// }

// // Example usage
// const apiKey = apiKey;
// //use the city to search when entering in a new city
// const city = 'New York';

// getLatLng(city, apiKey)
//   .then(coords => {
//       console.log(`Latitude: ${coords.latitude}, Longitude: ${coords.longitude}`);
//   })
//   .catch(error => {
//       console.error('Error:', error);
//   });

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 // Gen random data
 const N = 30;
 const gData = [...Array(N).keys()].map(() => ({
   lat: (Math.random() - 0.5) * 180,
   lng: (Math.random() - 0.5) * 360,
   size: 7 + Math.random() * 30,
  //  color: 'blue',
   color: ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)],
  //  onmouseover: (()=>console.log('hi'))
 }));
 const pointsData= [
  {lat: 44.513332,
  lng: -88.015831,
  size: 40,
  color: 'white'
}
 ]

 const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

function App() {
  return (
    <div className="App">
      <Globe
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"

          htmlElementsData={gData}
          // objectsData={gData}
    htmlElement={d => {
      const el = document.createElement('div');
      el.innerHTML = markerSvg;
      el.style.color = d.color;
      el.style.width = `${d.size}px`;
      //do stuff on hover
      el.onmouseover = ()=>{console.log('hi')}

      el.style['pointer-events'] = 'auto';
      el.style.cursor = 'pointer';
      el.onclick = () => console.info(d);
      return el;
    }}
  />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
