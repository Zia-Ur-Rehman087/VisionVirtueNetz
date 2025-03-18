'use client'
import React from 'react'
import { Link } from "react-scroll";

const HireBtn  = ({ children, text = "Click Me", classes = "", ...rest }) => {
  return (
    <Link 
    activeClass='activ2'
      spy={true} 
      smooth={true} 
      to='contact' 
      className={classes} 
      {...rest}
    >
      {text && <span>{text}</span>} 
      {children}
    </Link>
  );
}

export default HireBtn;
