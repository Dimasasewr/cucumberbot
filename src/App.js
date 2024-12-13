import './App.css';
import Daily from './screens/Daily';
import Earn from './screens/Earn';
import Home from './screens/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Referrals from './screens/Referrals';
import AirDrop from './screens/AirDrop';
import BottomNavigation from './components/BottomNavigation';

function App() {
  return (
    <Router>
      <BottomNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Daily" element={<Daily />} />
        <Route path="/Earn" element={<Earn />} />
        <Route path="/Referrals" element={<Referrals />} />
        <Route path="/AirDrop" element={<AirDrop />} />
      </Routes>
    </Router>
  );
}

export default App;

