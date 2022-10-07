import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Datadetails from './Components/Datadetails';

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Datadetails/>}/>
      </Routes>
    </Router>

    </>
  )
}

export default App