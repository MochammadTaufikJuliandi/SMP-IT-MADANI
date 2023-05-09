import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <>
    <Navbar />
    <Hero />
    <Main />
    </>
    </BrowserRouter>
  );
}

export default App;
