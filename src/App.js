// Import React Router
import React from 'react';

//  Router and Routes:
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Pages:
import Home from "./components/Pages/Home";
import ItemPage from "./components/Pages/itemPage";

// APP:
function App() {
  return (
    <Router>
      <nav>
        <ul>
          <button>
            <Link to="/">Home</Link>
          </button>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/itemPage/:id' element={<ItemPage />} />
      </Routes>
    </Router>
  );

}

export default App;







