import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Cats from './Cats';
import Covid from './Covid';
import Starwars from './Starwars';
import NotFound from './NotFound';
import Register from './Register';
import Login from './Login';
import Films from './Films';
import Vehicles from './Vehicles';
import Starships from './Starships';
import Planets from './Planets';
import Species from './Species';

import { useState, useEffect } from 'react';

function App() {

  const [userData, setUserData] = useState(null);
  let navigate = useNavigate;

  function saveUserData() {
    let userEmail = localStorage.getItem('userEmail'); // get token to transformation token becaose get user data
    setUserData(userEmail); // set user data in object becaose using 
  }

  function logOut() {
    setUserData(null);
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userPassword');
    navigate('/Login');
  }

  useEffect(() => {
    if (localStorage.getItem('userEmail')) {
      saveUserData();
    }
  }, [])


  function ProtectedRoute(props) {
    if (localStorage.getItem('userEmail') === null) {
      return <Navigate to='/Login' />
    }
    else {
      return props.children;
    }
  };


  return (
    <>
      <Navbar logOut={logOut} userData={userData} />

      <div className=" container">
        <Routes>

          <Route path="" element={<ProtectedRoute><Covid /></ProtectedRoute>} />
          <Route path="home" element={<ProtectedRoute><Covid /></ProtectedRoute>} />
          <Route path="cats" element={<ProtectedRoute><Cats /></ProtectedRoute>} />
          <Route path="covid" element={<ProtectedRoute><Covid /></ProtectedRoute>} />
          <Route path="starwars" element={<ProtectedRoute><Starwars /></ProtectedRoute>} />
          <Route path="films" element={<ProtectedRoute><Films /></ProtectedRoute>}/>
          <Route path="vehicles" element={<ProtectedRoute><Vehicles /></ProtectedRoute>} />
          <Route path="starships" element={<ProtectedRoute><Starships /></ProtectedRoute>} />
          <Route path="planets" element={<ProtectedRoute><Planets /></ProtectedRoute>} />
          <Route path="species" element={<ProtectedRoute><Species /></ProtectedRoute>} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </div>
    </>
  );
}

export default App;
