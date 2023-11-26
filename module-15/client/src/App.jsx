import { Fragment } from 'react'
import './App.css'
import Navigation from './Components/Navigation'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <Fragment>
      <BrowserRouter >
        <Navigation />
      </BrowserRouter>
    </Fragment>
  )
}

export default App
