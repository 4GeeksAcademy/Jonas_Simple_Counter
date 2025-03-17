import React from 'react'
import ReactDOM from 'react-dom/client'



//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// Font Awesome
import "@fortawesome/fontawesome-free/css/all.min.css";

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import SimpleCounter from './components/SimpleCounter';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SimpleCounter/>
  </React.StrictMode>,
)
