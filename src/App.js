import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Cart from './components/Cart';
import Home from './components/Home';
import Layout from './components/Layout';
import Account from './components/Account';
import Cate from './components/Cate';
import NotFound from './components/NotFound';
import Search from './components/Search';
import Login from './components/Login';
import Signup from './components/Signup';
import St1 from './components/St1';
import St2 from './components/St2';
import St3 from './components/St3';
import St4 from './components/St4';
import St5 from './components/St5';
import St6 from './components/St6';
import './index.css';
import Menu from './components/Menu';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/IKEA" element={<Layout />}>
          <Route path='/IKEA' element={<Home />} />
          <Route path="/IKEA/menu/:id" element={<Menu/>}/>
          <Route path={"/IKEA/search"} element={<Search />} />
          <Route path={"/IKEA/cate"} element={<Cate/>} />
          <Route path={'/IKEA/cate/st1'} element={<St1/>}/>
          <Route path={'/IKEA/cate/st2'} element={<St2/>}/>
          <Route path={'/IKEA/cate/st3'} element={<St3/>}/>
          <Route path={'/IKEA/cate/st4'} element={<St4/>}/>
          <Route path={'/IKEA/cate/st5'} element={<St5/>}/>
          <Route path={'/IKEA/cate/st6'} element={<St6/>}/>
          <Route path={"/IKEA/account"} element={<Account />} />
          <Route path="/IKEA/account/login" element={<Login />} />
          <Route path="/IKEA/account/signup" element={<Signup />} />
          <Route path={"/IKEA/cart"} element={<Cart />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

