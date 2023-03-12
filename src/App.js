
import './App.css';


import Weather from "./Weather";
import CityTemp from "./citytemp";
import Search from "./search";
function App() {
  return (
    <div className="container">
      
      <Search />
      <CityTemp />
      <Weather />
      
    </div>
  );
}

export default App;
