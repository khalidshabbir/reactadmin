import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Menu from './Menu';
import Dashboard from './Dashboard';
import Aboutus from './components/Aboutus';
import Footer from './Footer';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div class="wrapper">
      <Header/>
      <Menu/>
      <Routes>
      <Route exact path="/" element={<Dashboard/>}/>
      <Route path="/aboutus" element={<Aboutus/>}/>
      
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
