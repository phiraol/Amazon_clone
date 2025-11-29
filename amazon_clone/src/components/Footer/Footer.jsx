import React from 'react'
import classes from "./footer.module.css"
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer_one}>
        <div className={classes.footer_col}>
          <h4>Amazon Music</h4>
          <Link to='/'>
            Stream millions
            <br />
            of songs
          </Link>
        </div>

        <div className={classes.footer_col}>
          <h4>Amazon Ads</h4>
          <Link to = "/">
            Reach customers
            <br />
            wherever they
            <br />
            spend their time
          </Link>
        </div>

        <div className={classes.footer_col}>
          <h4>6pm</h4>
          <Link to = "/">
            Score deals
            <br />
            on fashion brands
          </Link>
        </div>

        <div className={classes.footer_col}>
          <h4>AbeBooks</h4>
          <Link to = "/">
            Books, art
            <br />& collectibles
          </Link>
        </div>

        <div className={classes.footer_col}>
          <h4>ACX</h4>
          <Link to = "/">
            Audiobook Publishing
            <br />
            Made Easy
          </Link>
        </div>

        <div className={classes.footer_col}>
          <h4>Sell on Amazon</h4>
          <Link to ="/">
            Start a Selling
            <br />
            Account
          </Link>
        </div>

        <div className={classes.footer_col}>
          <h4>Veego</h4>
          <Link to = "/">
            Shipping Software
            <br />
            Inventory
            <br />
            Management
          </Link>
        </div>

        <div className={classes.footer_col}>
          <h4>Amazon Business</h4>
          <Link to ="/">
            Everything For
            <br />
            Your Business
          </Link>
        </div>

        <div className={classes.footer_col}>
          <h4>AmazonGlobal</h4>
          <Link to ="/">
            Ship Orders
            <br />
            Internationally
          </Link>
        </div>

        <div className={classes.footer_col}>
          <h4>IMDb</h4>
          <Link to ="/">
            Movies, TV
            <br />& Celebrities
          </Link>
        </div>
      </div>

      <div className={classes.footer_bottom}>
        <Link to ="/">Conditions of Use</Link>
        <Link to ='/'>Privacy Notice</Link>
        <Link to ='/'>Your Ads Privacy Choices</Link>
        <p>© 1996-2025, Amazon.com, Inc. or its affiliates</p>
      </div>
    </footer>
  );
}

export default Footer
