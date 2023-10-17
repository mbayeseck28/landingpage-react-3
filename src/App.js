import './App.css';
import Navigation from './Components/Navigation';
import Baniere from './Components/Baniere';
import Offerings from './Components/Offerings';
import Courbe from './Components/Courbe';
import Capital from './Components/Capital';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Baniere />
      <Offerings />
      <Courbe />
      <Capital />
      <Footer />
    </div>
  );
}

export default App;
