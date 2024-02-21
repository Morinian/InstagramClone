import './App.css';

import Navbar from './componentes/page/navbar';
import Direita from './componentes/page/direita';
import Meio from './componentes/page/meio';

function App() {
  return (
    <div className="App">
      <div className="lado"> 
        <Navbar/>
        <Meio/>
        <Direita/>
      </div>

    </div>
  );
}

export default App;
