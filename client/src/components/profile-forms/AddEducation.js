import React, { useState, Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { addEducation } from '../../actions/profile';


const AddEducation = ({ addEducation }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        school: '',
        degree: '',
        fieldofstudy: '',
        from: '',
        to: '',
        current: false,
        description: ''
    });

    const [toDateDisabled, setToDateDisabled] = useState(false);

    const { school, degree, fieldofstudy, from, to, current, description } = formData;

    const recupData = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };

    const onSubmit = (e) => {
        e.preventDefault();
        addEducation(formData, navigate);
    };

    return (
        <Fragment>
            <h1 class="large text-primary">
                Ajouter une formation
            </h1>
            <p class="lead">
                <i class="fas fa-graduation-cap"></i> Ajouter une école, bootcamp, etc que vous avez fait
            </p>
            <small>* = Champs requis</small>
            <form class="form" onSubmit={onSubmit}>
                <div class="form-group">
                    <input
                        type="text"
                        placeholder="* Ecole ou Bootcamp"
                        name="school"
                        value={school}
                        onChange={recupData}
                        required
                    />
                </div>
                <div class="form-group">
                    <input
                        type="text"
                        placeholder="* Niveau d'étude ou certification"
                        name="degree"
                        value={degree}
                        onChange={recupData}
                        required
                    />
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Domaine d'étude" name="fieldofstudy" value={fieldofstudy} onChange={recupData} />
                </div>
                <div class="form-group">
                    <h4>Date de début</h4>
                    <input type="date" name="from" value={from} onChange={recupData} />
                </div>
                <div class="form-group">
                    <p>
                        <input type="checkbox" name="current" checked={current} value={current} onChange={() => {
                            setFormData({ ...formData, current: !current });
                            setToDateDisabled(!toDateDisabled);
                        }} /> Ecole ou Bootcamp actuel
                    </p>
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
                        placeholder="Description du programme"
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

export default connect(null, { addEducation })(AddEducation);
