import React from 'react'
import background from "../assets/welcome_background.jpg";

export default function HomePage() {

  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    height: '100vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    marginTop: '-30px',

  }
  const headingStyle = { paddingTop: '300px', fontSize: '38px' }

  return (
    <div>
      <div style={backgroundStyle}>
        <h1 style={headingStyle}>Govinena Home Gardening</h1>
      </div>
    </div>
  )
}
