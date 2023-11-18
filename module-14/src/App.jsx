
import './App.css'

import { BrowserRouter } from 'react-router-dom'
import NavBar from './components/navbar/NavBar'
import Footer from './components/footer/Footer'
import Subscribe from './components/subscribe/Subscribe'

function App() {

  return (
    <>
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
    <Subscribe />
    <Footer />
      
    </>
  )
}

export default App
