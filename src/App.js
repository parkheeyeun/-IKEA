import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Cart from './components/Cart';
import Home from './components/Home';
import Layout from './components/Layout';
import Account from './components/Account';
import Menu from './components/Menu';
import NotFound from './components/NotFound';
import Search from './components/Search';
import './index.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path={"/search"} element={<Search />}/>
          <Route path={"/menu"} element={<Menu />}/>
          <Route path={"/account"} element={<Account />}/>
          <Route path={"/cart"} element={<Cart />}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  );
}

