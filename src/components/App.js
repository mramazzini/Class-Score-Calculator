
import './../styles/App.css';

import Calculator from './Calculator';
import ParticlesDiv from './ParticlesDiv' ; 
function App() {
  return (
    <div className="main">
      
      <div className="body">
        <div className='header-container'>
        <header className="header-1">Allo</header>
        </div>
      
        <Calculator/>
      <ParticlesDiv/>
      </div>
      
    </div>
  );
}

export default App;
