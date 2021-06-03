import './App.css';
import NavBar from './components/navigationBar'
import Carousel from './components/carousel'
import Shop from './components/shop'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Carousel />
      <Shop />
      <Footer />
    </div>
  );
}

export default App;
