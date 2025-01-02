import './App.css';
import {AuthRouter} from './Pages/authRouter';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function App() {
  const userState= useSelector(state=>state.user)
  console.log(userState) 
  return (
    <div className="App">
      {!userState.login && <AuthRouter/>}
    </div>
  );
}

export default App;
