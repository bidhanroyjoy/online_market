import React from 'react';
import './Header.css';

import Head from './Head';
import Navbar from './Navbar';
import Search from './Search';

const Header = ({ CartItem }) => {
  return (
    <div>
        <Head />
        <Search CartItem={CartItem} />
        <Navbar />
    </div>
  )
}

export default Header