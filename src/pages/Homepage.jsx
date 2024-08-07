import React from 'react'
import HeaderC from '../components/HeaderC'
import IntroPost from '../components/IntroPost'
import Posts from '../components/Posts'
import FooterC from '../components/FooterC'


function Homepage() {
  return (
    <div>
        {/* header */}
        <HeaderC/> 
        {/* Intro */}
        <IntroPost/>
        {/* Posts */}
        <Posts/>
        {/* Footer */}
        <FooterC/>
    </div>
  )
}

export default Homepage
