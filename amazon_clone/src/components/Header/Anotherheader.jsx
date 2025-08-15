import React from 'react'
import classes from "./header.module.css";
import { MdOutlineMenu } from "react-icons/md";
function Anotherheader() {
  return (
    <div>
      <div className={classes.small_container}>
        <a href="#" className={classes.manu}>
          <span>
            <MdOutlineMenu size={26} />
          </span>
          <p>ALL</p>
        </a>
        <a href="#">
          <p>Today's Deals</p>
        </a>
        <a href="#">
          <p>Prime Video</p>
        </a>
        <a href="#">
          <p>Registry</p>
        </a>
        <a href="#">
          <p>Customer Service</p>
        </a>
        <a href="#">
          <p>Gift Cards</p>
        </a>
        <a href="#">
          <p>Sell</p>
        </a>
      </div>
    </div>
  );
}

export default Anotherheader
