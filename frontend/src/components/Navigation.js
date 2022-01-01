import React, { useRef } from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';
import { AiOutlineHome } from 'react-icons/ai';
import { BsShop, BsCart3 } from 'react-icons/bs';
import { RiUser3Fill } from 'react-icons/ri';
import { VscBook } from 'react-icons/vsc';

const StickyNavBottomForMobile = styled.nav`
  position: fixed;
  width: calc(100% - 20px);
  right: 10px;
  border-radius: 10px;
  bottom: 10px;
  height: 55px;
  background-color: var(--primary-color);
  overflow: hidden;
  & .active-page {
    background-color: var(--secondary-color);
    height: 40px;
    width: 40px;
    position: absolute;
    top: 50%;
    right: 100%;
    transform: translateY(-50%) translateX(-50%);
    transition: all 500ms ease-in-out;
    z-index: -1;
    border-radius: 5px;
  }
  & ul {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    height: 100%;
  }
  & a {
    color: var(--grey);
    font-size: 0.9rem;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    svg {
      width: 1.8rem;
      height: 1.8rem;
      margin-bottom: 3px;
    }
    &[aria-current='page'] {
      span {
        color: #fff;
        font-weight: bolder;
        transition: color 500ms ease-in-out;
      }
      svg {
        fill: #fff;
        transition: fill 500ms ease-in-out;
      }
    }
  }
`;

const navigationData = graphql``;
export default function Navigation() {
  const activePageRef = useRef();
  const handleActivePage = ({ currentTarget }) => {
    const { left, width } = currentTarget.getBoundingClientRect();
    activePageRef.current.style.left = `${left - 10 + width / 2}px`;
    activePageRef.current.style.transition = `all 500ms ease-in-out`;
  };

  return (
    <StickyNavBottomForMobile>
      <div
        ref={activePageRef}
        style={{ left: '-10%' }}
        className="active-page"
      />
      <ul>
        <li>
          <Link onClick={handleActivePage} to="/">
            <AiOutlineHome />
            <span>home</span>
          </Link>
        </li>
        <li>
          <Link onClick={handleActivePage} to="/course">
            <BsShop />
            <span>shop</span>
          </Link>
        </li>
        <li>
          <Link onClick={handleActivePage} to="/cart">
            <BsCart3 />
            <span>cart</span>
          </Link>
        </li>
        <li>
          <Link onClick={handleActivePage} to="/blog">
            <VscBook />
            <span>blog</span>
          </Link>
        </li>
        <li>
          <Link onClick={handleActivePage} to="/account">
            <RiUser3Fill />
            <span>Account</span>
          </Link>
        </li>
      </ul>
    </StickyNavBottomForMobile>
  );
}
