import logo from './logo.svg';
import './App.css';
import FirstPage from './Components/FirstPage';
import Portfolio from './Components/Portfolio';
import Certifications from './Components/Certifications';
import Connect from './Components/Connect';
// import WhatIDo from './Components/WhatIDo';

function App() {
  
  

  return (
      <div className="App">
        <FirstPage />
        {/* <WhatIDo/> */}
        <Portfolio />
        <Certifications />
        <Connect />
      </div>
  );
}

export default App;
