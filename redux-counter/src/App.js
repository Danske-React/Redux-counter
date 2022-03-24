import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Home from './components/home';
import DisplayCart from './components/displayCart';
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<DisplayCart />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
