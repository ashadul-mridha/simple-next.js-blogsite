import Link from 'next/link';
import React from 'react';
import styles from '../../styles/Header.module.css';

const Header = () => {
  return (
    <>
      <nav>
            <ul className={styles.mainnav}>
              <Link href='/' scroll={false}><li> <a>Home</a> </li></Link>
                <Link href='/about'><li><a>About</a></li></Link>
                <Link href='/blog'><li><a>Blog</a></li></Link>
                <Link href='/contact'><li><a>Contact</a></li></Link>
            </ul>
        </nav>
    </>
  );
};

export default Header;
