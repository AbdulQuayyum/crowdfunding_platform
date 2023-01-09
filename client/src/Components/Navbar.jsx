import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { CustomButton } from "./Index"
import { Logo2, menu, search, thirdweb } from '../Assets/Index';
import {  navlinks } from "../Constants/Index"

const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');
  const [toggleDrawer, setToggleDrawer] = useState(false);
  return (
    <div>Navbar</div>
  )
}

export default Navbar