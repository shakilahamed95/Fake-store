import { Routes, Route } from 'react-router-dom';
import './App.css';
import ContactUs from './Pages/ContactUs/ContactUs';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Footer from './Pages/Footer/Footer';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className='section'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/contact-us' element={<ContactUs></ContactUs>}></Route>
        <Route path='/product/:id' element={<ProductDetail></ProductDetail>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
