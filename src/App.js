import './App.css';
import Header from './components/Header/Header';
import Speakers from './components/Speakers/Speakers';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header></Header>
        <Speakers></Speakers>
      </div>
    </div>
  );
}

export default App;
