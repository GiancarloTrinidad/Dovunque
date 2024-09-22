import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Reservation from './components/Reservation';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar>
    </Navbar>
    <div className="App">
    <Routes>
           <Route path ='/login' element = {<Login />} >Login</Route>
           <Route path ='/payment' element = {<Payment />} >Payment</Route>
           <Route path ='/register' element = {<Register />} >Register</Route>
           <Route path ='/reservation' element = {<Reservation />} >Reservation</Route>
        </Routes>
    </div>
    </>
    
  );
}

export default App;
