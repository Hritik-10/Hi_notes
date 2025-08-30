import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NoteState from './states/NoteState';
import UserState from './states/UserState';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <>
      <Router>
        <UserState>
          <NoteState>
            <div>
              <Routes>
                <Route exact path="/" element={<Login />} />
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/signup" element={<Signup />} />
              </Routes>
            </div>
          </NoteState>
        </UserState>
      </Router>
    </>
  );
}

export default App;
