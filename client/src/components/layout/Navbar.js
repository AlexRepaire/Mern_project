import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/css/Navbar.css';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';


const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to={'/profiles'}>Développeurs</Link>
      </li>
      <li>
        <Link to={'/private/posts'}>Publications</Link>
      </li>
      <li>
        <FontAwesomeIcon icon={faUser} /><Link to={'/private/dashboard'}>{' '}<span className='hide-sm'>Dashboard</span></Link>
      </li>
      <li>
        <a onClick={logout}>
          <FontAwesomeIcon icon={faSignOutAlt} />{' '}<span className='hide-sm'>Logout</span>
        </a>
      </li>

    </ul>
  );

  const guestLinks = (
    <ul>
      <li><Link to={'/profiles'}>Développeurs</Link></li>
      <li><Link to={"/register"}>Inscription</Link></li>
      <li><Link to={"/login"}>Connexion</Link></li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark">
      <h1>
        <FontAwesomeIcon icon={faCode} />

        <Link to={"/"}>DevConnect</Link>
      </h1>
      {!loading && (<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>)}
    </nav>
  )
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
