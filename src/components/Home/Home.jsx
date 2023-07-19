import React from 'react'

import Vision from './Vision'
import Studyat from './Studyat'
import Upcoming from './Upcoming'
import Footer from '../Footer'
import Hero from './Hero'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Vision />
        <Studyat />
        <Upcoming />
    </div>
  )
}

export default Home