import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/login';
import OTPVerfication from './pages/OTPVerfication';

function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verification" element={<OTPVerfication/>}/>

      </Routes>
    </Router>
  );
}
export default App;