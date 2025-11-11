import './App.css';
import SearchBar from './components/SearchBar.js'
import ImageShow from './components/ImageShow.js'
import ImageList from './components/ImageList.js'
import { useEffect } from 'react';
import fetchCars from './api.js'


function App() {
  // Fetching data using axios
  useEffect(() => {
    fetchCars();
  }, []);


  // Fetching data using fetch
  // const fetchCars = async function () {
  //   const response = await fetch('https://api.unsplash.com/search/photos/?query=cars');
  //   const data = await response.json();
  //   console.log(`Data: ${data}`)
  // }

  // useEffect(() => {
  //   fetchCars();
  // }, []);

  return (
    <div className="App">
      <h1>App</h1>
      <SearchBar fetchCars={fetchCars} />
      <ImageList />
      <ImageShow />
    </div>
  );
}

export default App;
