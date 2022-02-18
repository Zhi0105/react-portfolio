import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter  } from 'react-router-dom'

// COMPONENT
import App from './App'

ReactDOM.render(
<StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</StrictMode>
, document.getElementById('root'))