import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Banner from './components/Banner.jsx'
import Products from './components/Products.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-full h-full text-white">
      <Navbar/>
      <Banner/>
      <Products/>
      <Footer/>
    </div>   
  )
}

export default App
