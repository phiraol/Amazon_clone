import React from 'react'
import { IoIosSearch } from "react-icons/io";
import amazonlogo from "../../assets/amazonlogo.png"; 
import { MdOutlineLocationOn } from "react-icons/md";
import usflag from "../../assets/american-flag.jpg";
import classes from "./header.module.css"
import { BiCartAdd } from "react-icons/bi";


function Header() {
    return (
      <section>
        <div className={classes.header_container}>
          <div className={classes.logo_container}>
            <a href="#">
              <img src={amazonlogo} alt="amazon logo" />
            </a>
            <div className={classes.delivery}>
              <span>
                <MdOutlineLocationOn />
              </span>
              <div>
                <p>Delivered to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          <div className={classes.search}>
            <select name="" id="">
              <option value="">all</option>
            </select>
            <input type="text" placeholder="search amazon" />
            <IoIosSearch size={25} />
          </div>
          <div className={classes.order_container}>
            <a href="#" className={classes.language}>
              <img src={usflag} alt="" />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </a>
            <a href="#" className={classes.sign}>
              <div>
                <p>Sing in</p>
                <span>Account & Lists</span>
                <select name="" id="">
                  <option value=""></option>
                </select>
              </div>
            </a>
            <a href="/" className={classes.returns}>
              <p>Returns</p>
              <span> &Orders</span>
            </a>
            <a href="/" className={classes.cart}>
              <BiCartAdd size={35}/>
              <span>0</span>
            </a>
          </div>
        </div>
      </section>
    );
}

export default Header
