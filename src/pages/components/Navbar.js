import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      
      <header className={styles.nav }>
        <ul>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/blog">
            <li>Blog</li>
          </Link>
          <Link href="/contact">
            <li>Contact us</li>
          </Link>
        </ul>
      </header>
    </>
  );
};

export default Navbar;
