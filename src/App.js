import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experiences from './components/Experiences'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Hero />
        <Experiences />
      </header>
    </div>
  );
}

export default App;
