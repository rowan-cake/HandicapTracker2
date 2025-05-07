import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Feed from './pages/Feed';
import Profile from './pages/Profile';
import NewRound from './pages/NewRound';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        {/* Nav Bar */}
        <nav className="bg-white shadow p-4 flex justify-around">
          <Link to="/" className="text-red-600 font-bold">Feed</Link>
          <Link to="/new-round" className="bg-red-600 text-white px-4 py-1 rounded-full">Start</Link>
          <Link to="/profile" className="text-red-600 font-bold">Profile</Link>
        </nav>

        {/* Main View */}
        <div className="p-6 flex-grow">
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/new-round" element={<NewRound />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

