import {Routes, Route} from 'react-router-dom'
import { Home } from './pages/home/Home'
import { Products } from './pages/products/Products'
import { Service } from './pages/service/Service'
import { Contact } from './pages/contact/Contact'
import { AboutUs } from './pages/aboutus/AboutUs'
import { Navbar } from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className='bg-wild-sand-500'>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/products" element={<Products/>} />
      <Route path="/service" element={<Service/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/about-us" element={<AboutUs/>} />
    </Routes>
    <Footer/>
    </div>
  )
}

export default App
