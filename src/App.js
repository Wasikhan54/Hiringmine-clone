import './App.css';
import { useState } from 'react';
import Headers from './Components/Header.js'
import Hero from './Components/Hero.js';
import CardDiv from './Components/Card.js';
import Cardfetch from './Components/Cardfetch.js';
import CardDetails from './Components/CardDetails.js';
import Footer from './Components/Footer.js';

function App() {
  const [data, setData] = useState([]);
  return (
    <div className="App">
      <Headers />
      <Hero/>
      <CardDiv/>
      <Cardfetch data={data} setData={setData} />
      <CardDetails data={data} setData={setData}/>
      <Footer />
    </div>
  );
}

export default App;
