import React, { useState, Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { addExperience } from '../../actions/profile';



const AddExperience = ({ addExperience }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        company: '',
        title: '',
        location: '',
        from: '',
        to: '',
        current: false,
        description: ''
    });
    const [toDateDisabled, setToDateDisabled] = useState(false);

    const { company, title, location, from, to, current, description } = formData;

    const recupData = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };

    const onSubmit = (e) => {
        e.preventDefault();
        addExperience(formData, navigate);
    };

    return (
        <Fragment>
            <h1 class="large text-primary">
                Ajouter une expérience
            </h1>
            <p class="lead">
                <i class="fas fa-code-branch"></i> Ajouter une expérience professionnelle que vous avez eu
            </p>
            <small>* = Champs requis</small>
            <form class="form" onSubmit={onSubmit}>
                <div class="form-group">
                    <input type="text" placeholder="* nom du poste" name="title" value={title} onChange={recupData} required />
                </div>
                <div class="form-group">
                    <input type="text" placeholder="* entreprise" name="company" value={company} onChange={recupData} required />
                </div>
                <div class="form-group">
                    <input type="text" placeholder="localisation" name="location" value={location} onChange={recupData} />
                </div>
                <div class="form-group">
                    <h4>Date de début</h4>
                    <input type="date" name="from" value={from} onChange={recupData} />
                </div>
                <div class="form-group">
                    <p><input type="checkbox" name="current" checked={current} value={current} onChange={() => {
                        setFormData({ ...formData, current: !current });
                        setToDateDisabled(!toDateDisabled)
                    }}
                    />Poste actuel</p>
                </div>
                <div class="form-group">
                    <h4>Date de fin</h4>
                    <input type="date" name="to" value={to} onChange={recupData} disabled={toDateDisabled ? 'disabled' : ''} />
                </div>
                <div class="form-group">
                    <textarea
                        name="description"
                        cols="30"
                        rows="5"
                        placeholder="Description de l'activité"
                        value={description}
                        onChange={recupData}
                    ></textarea>
                </div>
                <input type="submit" class="btn btn-primary my-1" />
                <Link className="btn btn-light my-1" to="/private/dashboard">Retour</Link>
            </form>
        </Fragment>
    );
};

export default connect(null, { addExperience })(AddExperience);
