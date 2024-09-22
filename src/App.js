import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Register.js';
import Login from './components/Login.js';
import Reservation from './components/Reservation';

function App() {
  return (
    <div>
      <Register />
      <Login />
      <Reservation />
    </div>
  );
}

export default App;