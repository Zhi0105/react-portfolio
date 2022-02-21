import React from 'react'

import Particles from 'react-tsparticles'
import SnowConfig from './snow-config.json'

const Particle = () => {
    return (
        <Particles 
            // style={{ position: 'absolute' }}
            options= { SnowConfig } 
        />
    )
}

export default Particle