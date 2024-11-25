import logo from './logo.svg';
import './App.css';
import FirstPage from './Components/FirstPage';
import Portfolio from './Components/Portfolio';
import Certifications from './Components/Certifications';
import Connect from './Components/Connect';
import Roles from './Components/Roles';
import Music from './Components/Music';

function App() {
  
  

  return (
      <div className="App">
        <FirstPage />
        <Roles/>
        <Portfolio /> 
        <Certifications />
        <Music/>
        <Connect />
      </div>
  );
}

export default App;
