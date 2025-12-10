import React, { useContext } from 'react'
import { IoIosSearch } from "react-icons/io";
import amazonlogo from "../../assets/amazonlogo.png"; 
import { MdOutlineLocationOn } from "react-icons/md";
import usflag from "../../assets/american-flag.jpg";
import classes from "./header.module.css"
import { BiCartAdd } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { DataContext } from '../dataProvider/DataProvider';
import { auth } from "../../utility/firebase.js";



function Header() {
  const [{user, basket }, dispatch] = useContext(DataContext);
  console.log(basket.length);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0)
  return (
    <section className={classes.fixed}>
      <section>
        <div className={classes.header_container}>
          <div className={classes.logo_container}>
            <Link to="/">
              <img src={amazonlogo} alt="amazon logo" />
            </Link>
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
            <a href="/" className={classes.language}>
              <img src={usflag} alt="" />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </a>
            <Link to={!user && "/auth"} className={classes.sign}>
              <div>
                <div>
                  {user ? (
                    <>
                      <p>
                        Hello,{" "}
                        {user.email.split("@")[0].charAt(0).toUpperCase() +
                          user.email.split("@")[0].slice(1)}
                      </p>
                      <p style={{ fontWeight: "bold" }} onclick={()=>auth.signOut}>   Sign Out</p>
                    </>
                    
                  ) : (
                    <>
                      <p>Hello, Sign In</p>
                      <span>Account & Lists</span>
                    </>
                  )}
                </div>
                <select name="" id="">
                  <option value=""></option>
                </select>
              </div>
            </Link>
            <Link to="/orders" className={classes.returns}>
              <p>Returns</p>
              <span> &Orders</span>
            </Link>
            <Link to="/cart" className={classes.cart}>
              <BiCartAdd size={35} />
              <span>{totalItem}</span>
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Header
