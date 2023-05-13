import logo from './logo.svg';
import './App.css';
import AllRoutes from "./Components/AllRoutes";
import Navbar1 from './Components/Navbar1';
import Navbar2 from './Components/Navbar2';
import Footer1 from './Components/Footer1';



function App() {
  return (
    <div className="App">
       <Navbar1/>
       <Navbar2/>
       <AllRoutes/>
       <Footer1/>
    </div>
  );
}

export default App;
