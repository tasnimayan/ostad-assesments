
import './App.css'
import Footer from './components/footer/Footer'
import NavigationBar from './components/navbar/NavigationBar'
import './styles/style.css'
import { BrowserRouter } from 'react-router-dom'



function App() {

  return (
    <>
      <BrowserRouter>
        <NavigationBar />


        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
