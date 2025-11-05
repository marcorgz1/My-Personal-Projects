import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar'
import ImageShow from './components/ImageShow'
import ImageList from './components/ImageList'

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <SearchBar />
      <ImageShow />
      <ImageList />
    </div>
  );
}

export default App;
