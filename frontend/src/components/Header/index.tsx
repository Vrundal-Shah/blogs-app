import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import styles from './index.module.css';
import AuthContext from '../../contexts/AuthContext';

type HeaderProps = {};

const Header = (props: HeaderProps) => {
  const contextValue = useContext(AuthContext);
  const loggedIn: any = contextValue?.state.userId;

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Blogspot</h1>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link to="/posts/all" className={styles.navLink}>
              Posts
            </Link>
            {loggedIn && (
              <ul className={styles.dropdown}>
                <li>
                  <Link to="/posts/my" className={styles.navLink}>
                    My Posts
                  </Link>
                </li>
                <li>
                  <Link to="/posts/create" className={styles.navLink}>
                    Create Post
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className={styles.navItem}>
            <Link to="/tags" className={styles.navLink}>
              Tags
            </Link>
          </li>
          <li className={styles.navItem}>
            {loggedIn ? (
              <Link to="/loginout" className={styles.userAction}>
                {' '}
                <FaUserCircle /> Logout
              </Link>
            ) : (
              <Link to="/loginout" className={styles.userAction}>
                {' '}
                {/* Changed the route to /login */}
                <FaUserCircle /> Login
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
