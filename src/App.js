import React, { useState } from 'react';
import './App.css';
import Login from './components/login';  
import SignUp from './components/signup';

function App() {
  const [isLogin, setIsLogin] = useState(true); 
  
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="App">
      {isLogin ? <Login toggleForm={toggleForm} /> : <SignUp toggleForm={toggleForm} />}
    </div>
  );
}

export default App;
