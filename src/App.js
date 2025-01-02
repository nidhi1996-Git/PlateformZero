import logo from './logo.svg';
import './App.css';
import LoginPage from './Component/Login';
import RegistrationPage from './Component/Registration';
import {AuthRouter} from './Pages/authRouter'
function App() {
  return (
    <div className="App">
      {/* <LoginPage/> */}
      {/* <RegistrationPage/> */}
      <AuthRouter/>
    </div>
  );
}

export default App;
