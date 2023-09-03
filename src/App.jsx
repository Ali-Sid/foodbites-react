import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Home from './Home';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
      </Routes>
    </Router>
  )
}

export default App
