// Import Parent Libraries
import { Routes, Route } from 'react-router-dom';

// Import Views
import Home from '../views/home';
import About from '../views/about';
import Contact from "../views/contact";

function Router() {
  return (
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  );
}
  
export default Router;