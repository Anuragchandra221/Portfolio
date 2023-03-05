import logo from './logo.svg';
import './App.css';
import FirstPage from './Components/FirstPage';
import Portfolio from './Components/Portfolio';
import Certifications from './Components/Certifications';
import Connect from './Components/Connect';

function App() {
  
  

  return (
      <div className="App">
        <FirstPage />
        <Portfolio />
        <Certifications />
        <Connect />
      </div>
  );
}

export default App;
