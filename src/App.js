import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Speakers from './components/Speakers/Speakers';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header></Header>
        <Speakers></Speakers>
        <Footer></Footer> 
      </div>
    </div>
  );
}

export default App;
