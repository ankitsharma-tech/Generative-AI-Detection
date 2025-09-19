import './App.css';
import CardBody from './Components/CardBody';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <Navbar />
      <CardBody />
      <Footer />
    </div>
  );
}

export default App;
