import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import '../../styles/css/Landing.css';
import { connect } from 'react-redux';

const Landing = ({ isAuthenticated }) => {
    if (isAuthenticated) {
        return <Navigate to={'/private/dashboard'} />
    }

    return (
        <section className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                    <h1 className="x-large">Développeur Connect</h1>
                    <p className="lead">
                        Créer ton profil/portfolio de développeur, partage des publications et aide les autres développeurs
                    </p>
                    <div className="buttons">
                        <Link to={"/register"} className="btn btn-primary">Inscription</Link>
                        <Link to={"/login"} className="btn btn-light">Connexion</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
