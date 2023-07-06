import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Cart from './components/Cart';
import Home from './components/Home';
import Layout from './components/Layout';
import Account from './components/Account';
import Menu from './components/Menu';
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

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={"/search"} element={<Search />} />
          <Route path={"/menu"} element={<Menu />} />
          <Route path={'menu/st1'} element={<St1/>}/>
          <Route path={'menu/st2'} element={<St2/>}/>
          <Route path={'menu/st3'} element={<St3/>}/>
          <Route path={'menu/st4'} element={<St4/>}/>
          <Route path={'menu/st5'} element={<St5/>}/>
          <Route path={'menu/st6'} element={<St6/>}/>
          <Route path={"/account"} element={<Account />} />
          <Route path="/account/login" element={<Login />} />
          <Route path="/account/signup" element={<Signup />} />
          <Route path={"/cart"} element={<Cart />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

