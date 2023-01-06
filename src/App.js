import React, { useState, Suspense, lazy } from 'react';
import './App.scss'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import CssExs from './components/items/CssExs'
import Greeting from './components/items/Greeting'
import Loader from './components/items/Loader'

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
        <Suspense fallback={<Loader />}>
          <Greeting />
        </Suspense>
      )}
      <CssExs />
      <Footer />
    </>
  )
}

export default App
