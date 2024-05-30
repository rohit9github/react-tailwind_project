import './App.css';
import Category from './Componets/Category/Category';
import Navbar from './Componets/Navbar';
import Sliderrr from './Componets/Slider/Slider';

function App() {
  return (
    <div className="App bg-zinc-100">
      <Navbar/>
      <Category/>
      <Sliderrr/>
    </div>
  );
}

export default App;
