import React from 'react'
import Hero from './herosection'
import AboutPreview from './aboutpreview'
import Programs from './programs'
import Announcements from './announcements'
import Statistics from './statistics'


function home() {
  return (
    <div>
        
        <Hero />
        <AboutPreview />
        <Programs />
        <Announcements />
        <Statistics />
        

        
    </div>
  )
}

export default home