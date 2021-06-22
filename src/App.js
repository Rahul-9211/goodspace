
import './App.css';
import Mini_card from './Goodspace/Mini_card';
import Max_card from './Goodspace/Max_card';
import Home from './Goodspace/Home';
import Navbar from './Goodspace/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="menu">
        <Mini_card/>
        <Max_card/>
        <Home/>
      </div>
    </div>
  );
}

export default App;
