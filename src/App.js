import React, { useState } from 'react'
import './App.scss'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

function App() {
  const [showGreeting, setShowGreeting ] = useState(false)

  const showAlertGreetingHandler = () => {
    setShowGreeting(showGreeting => !showGreeting)
  }

  return (
    <>
      <Navbar />
      <button type="submit" onClick={() => showAlertGreetingHandler()}>Greetings Visitor</button>
      {showGreeting && (
        <div>Hello my friend</div>
      )}
      <Footer />
    </>
  )
}

export default App
