import React,{useContext} from "react";
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
const NavWrapper=styled.div`
  display:flex;
  align-items:center;
  justify-content:space-around;
  gap:20px;
  padding:20px;
`;


const Navbar = () => {
   const value=useContext(CartContext);

  return (
    <NavWrapper>
      
      <Link to="/">Home</Link>
      Cart : {value}
      <Link to="/login">LogIn</Link>
    </NavWrapper>
  )
  
};

export default Navbar;
