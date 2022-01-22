import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';


const Register = ({ isAuthenticated, register }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formData;

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (password !== password2) {
            setAlert("Les mots de passe ne sont pas identiques", 'danger');
        } else {
            console.log('ok');
            register({ name, email, password });
        };
    }

    if (isAuthenticated) {
        return <Navigate to={"/private/dashboard"} />
    }

    return (
        <Fragment>
            <h1 className="large text-primary">Inscription</h1>
            <p className="lead"><i className="fas fa-user"></i> Créer un compte</p>
            <form className="form" onSubmit={onSubmit}>
                <div className="form-group">
                    <input type="text" placeholder="Nom" name="name" value={name} onChange={onChange} />
                </div>
                <div className="form-group">
                    <input type="email" placeholder="Adresse Mail" name="email" value={email} onChange={onChange} />
                    <small className="form-text">
                        Le site utilises Gravatar donc si tu veux utiliser une image de profile, utilise un mail gravatar
                    </small>

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
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Confirmer mot de passe"
                        name="password2"
                        value={password2}
                        onChange={onChange}
                        minLength="6"
                    />
                </div>
                <input type="submit" className="btn btn-primary" value="Inscription" />
            </form>
            <p className="my-1">
                Tu as déja un compte ? <Link to={"/login"}>Connexion</Link>
            </p>
        </Fragment>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);
