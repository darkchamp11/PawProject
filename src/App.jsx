import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import VolunteerForm from './components/VolunteerForm'
import ImpactStories from './components/ImpactStories'
import PetAdoptionCarousel from './components/PetAdoptionCarousel'
import ChatBot from './components/ChatBot'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <div className="container">
        <section id="volunteer" className="section">
          <h2>Join Our Volunteer Team</h2>
          <VolunteerForm />
        </section>
        
        <section id="stories" className="section">
          <h2>Impact Stories</h2>
          <ImpactStories />
        </section>
        
        <section id="adoption" className="section">
          <h2>Find Your Perfect Companion</h2>
          <PetAdoptionCarousel />
        </section>
      </div>
      <ChatBot />
      <Footer />
    </div>
  )
}

export default App