import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import ProductDetail from './Pages/ProductDetail/ProductDetail';

function App() {
  return (
    <div className='section'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/product/:id' element={<ProductDetail></ProductDetail>}></Route>
      </Routes>
    </div>
  );
}

export default App;
