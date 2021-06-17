import './App.css';
import NavBar from './components/navigationBar'
import Carousel from './components/carousel'
import Shop from './components/shop'
import Footer from './components/footer'
import { useEffect } from 'react'
import axios from 'axios'

function App() {

  useEffect(() => {

    async function fetchData() {
      const result = await axios.get("http://localhost:3000/recent")
      console.log("Hello World", result)
    }

    fetchData()

  }

  )


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
