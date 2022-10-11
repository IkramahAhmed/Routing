import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Service from './Service';
import Found from './Found';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Contact from './Contact';
import Profile from './Profile';

function App() {
 
  return (
    <div>
      <Router>
      <Routes>
              <Route path="/" element={<Home/>}/>

              <Route path="Service" element={<Service/>}/>
              <Route path="About" element={<About/>}/>
              <Route path="Contact" element={<Contact/>}/>
              <Route path="Profile/:fname" element={<Profile/>}/>
              <Route path="*" element={<Found/>}/>


   

            
            </Routes>
          
            <Link to='/'>Home</Link>
            <Link to='About'>About</Link>
            <Link to='Service'>Service</Link>
            <Link to='Contact'>Contact</Link>
            <Link to="Profile/ikramah">Profile</Link>

            
        </Router>

    </div>
  );
}

export default App;
