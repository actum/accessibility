import React from 'react'

const Hero = () =>
  <div className="hero row row--gap">
    <div className="col col--6">
      <h1 className="hero__heading">
        <span className="hero__title--secondary">ACTUM</span>
        <br />
        <span className="hero__title--primary">Accessibility</span>
      </h1>
      <p className="hero__subtitle">Essential for some, useful for all.</p>
    </div>
    <div className="col col--6">
      <img src="/img/actum-accessibility.png" srcSet="/img/actum-accessibility.png 1x, /img/actum-accessibility-2x.png 2x" alt="" width="600" height="400" style={{ aspectRatio: '600/400'}} />
    </div>
  </div>

export default Hero
