import React from 'react';
import { Link } from 'gatsby';

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li> <Link to="/">home</Link> </li>
        <li> <Link to="/course">shop</Link> </li>
        <li> <Link to="/cart">cart</Link> </li>
        <li> <Link to="/blog">blog</Link> </li>
        <li> <Link to="/account">account</Link> </li>
      </ul>
    </nav>
  )
}