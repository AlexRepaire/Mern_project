import React, { useState, Fragment } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { login } from '../../actions/auth';
import { connect } from 'react-redux';

const Login = ({ isAuthenticated, login }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        login(email, password);
    };

    if (isAuthenticated) {
        return <Navigate to={"/private/dashboard"} />
    }

    return (
        <Fragment>
            <h1 className="large text-primary">Connexion</h1>
            <p className="lead"><i className="fas fa-user"></i>Connectez-vous</p>
            <form className="form" onSubmit={onSubmit}>
                <div className="form-group">
                    <input type="email" placeholder="Adresse Mail" name="email" value={email} onChange={onChange} />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Mot de passe"
                        name="password"
                        value={password}
                        onChange={onChange}
                        minLength="6"
                    />
                </div>
                <input type="submit" className="btn btn-primary" value="Connexion" />
            </form>
            <p className="my-1">
                Tu n'as pas de compte ? <Link to={"/register"}>Inscription</Link>
            </p>
        </Fragment>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
