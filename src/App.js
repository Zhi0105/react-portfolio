import React from 'react'
import {Routes, Route} from 'react-router-dom'


// COMPONENTS
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Opinion from './components/Opinion'



const App = () => {
    return (
            <div className='app-main'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/project' element={<Projects />} />    
                    <Route path='/opinion' element={<Opinion />} />
                </Routes>
            </div>
    )
}

export default App