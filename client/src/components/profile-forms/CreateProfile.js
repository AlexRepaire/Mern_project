import React, { Fragment, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faYoutube, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { createProfile } from '../../actions/profile';
import { removeAlert } from '../../actions/alert';

const CreateProfile = ({ createProfile }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        company: '',
        website: '',
        location: '',
        status: '',
        skills: '',
        githubusername: '',
        bio: '',
        twitter: '',
        facebook: '',
        linkedin: '',
        youtube: '',
        instagram: ''
    });
    const [displaySocialInputs, setDisplaySocialInputs] = useState(false);

    const {
        company,
        website,
        location,
        status,
        skills,
        githubusername,
        bio,
        twitter,
        facebook,
        linkedin,
        youtube,
        instagram
    } = formData;

    const recupData = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };

    const onSubmit = (e) => {
        e.preventDefault();
        createProfile(formData, navigate);
        // try {
        //     const res = await profileService.createProfile(formData);
        //     dispatch(createProfile(res));
        //     const dataAlert = dispatch(setAlert('Profil créer !', 'success'));
        //     setTimeout(() => {
        //         dispatch(removeAlert(dataAlert.payload.id));
        //     }, 4000);
        //     navigate('/private/dashboard');
        // } catch (err) {
        //     const errors = err.response.data.errors;
        //     if (errors) {
        //         const data = errors.map(error => {
        //             return dispatch(setAlert(error.msg, 'danger'));
        //         });
        //         data.forEach(element => {
        //             setTimeout(() => {
        //                 dispatch(removeAlert(element.payload.id));
        //             }, 4000);
        //         });
        //     }
        //     dispatch(getCurrentProfilFail(err));
        // }
    };

    return (
        <Fragment>
            <h1 className="large text-primary">
                Créer votre profil
            </h1>
            <p className="lead">
                <FontAwesomeIcon icon={faUser} /> Ajouter des informations pour faire ressortir ton profil
            </p>
            <small>* = champs requis</small>
            <form className="form" onSubmit={onSubmit}>
                <div className="form-group">
                    <select name="status" value={status} onChange={recupData}>
                        <option value="0">* Selectionnez votre status pro</option>
                        <option value="Développeur">Développeur</option>
                        <option value="Développeur junior">Développeur junior</option>
                        <option value="Développeur sénior">Développeur sénior</option>
                        <option value="Manager">Manager</option>
                        <option value="Etudiant ou autodidacte">Etudiant ou autodidacte</option>
                        <option value="Formateur ou professeur">Formateur ou professeur</option>
                        <option value="Autres">Autres</option>
                    </select>
                    <small className="form-text">Donnez-nous une idée d'ou vous en etes dans votre carriere</small>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Entreprise ou société" name="company" value={company} onChange={recupData} />
                    <small className="form-text">Avez-vous votre propre entreprise ou travaillez pour une entreprise ?</small>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="site web" name="website" value={website} onChange={recupData} />
                    <small className="form-text">Avez-vous un site web ?</small>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="ville et pays" name="location" value={location} onChange={recupData} />
                    <small className="form-text">Ville et pays</small>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="* Compétences" name="skills" value={skills} onChange={recupData} />
                    <small className="form-text">les technologies utilisées (séparées par une virgule, ex: HTML,CSS,JavaScript,PHP)</small>
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Github Username"
                        name="githubusername"
                        value={githubusername}
                        onChange={recupData}
                    />
                    <small className="form-text">Si vous voulez montrer vos repos Git, incluez votre nom d'utilisateur GitHub</small>
                </div>
                <div className="form-group">
                    <textarea placeholder="Une courte description" name="bio" value={bio} onChange={recupData}></textarea>
                    <small className="form-text">Dis nous en plus sur vous</small>
                </div>

                <div className="my-2">
                    <button type="button" className="btn btn-light" onClick={() => setDisplaySocialInputs(!displaySocialInputs)}>
                        Ajoutez des réseaux socials
                    </button>
                    <span>Optionnel</span>
                </div>

                {displaySocialInputs && <Fragment>
                    <div className="form-group social-input">
                        <FontAwesomeIcon icon={faTwitter} className='m-1' className='text-primay' />
                        <input type="text" placeholder="Twitter URL" name="twitter" value={twitter} onChange={recupData} />
                    </div>

                    <div className="form-group social-input">
                        <FontAwesomeIcon icon={faFacebook} className='m-1' className='text-primay' />
                        <input type="text" placeholder="Facebook URL" name="facebook" value={facebook} onChange={recupData} />
                    </div>

                    <div className="form-group social-input">
                        <FontAwesomeIcon icon={faYoutube} className='m-1' className='text-primay' />
                        <input type="text" placeholder="YouTube URL" name="youtube" value={youtube} onChange={recupData} />
                    </div>

                    <div className="form-group social-input">
                        <FontAwesomeIcon icon={faLinkedin} className='m-1' className='text-primay' />
                        <input type="text" placeholder="Linkedin URL" name="linkedin" value={linkedin} onChange={recupData} />
                    </div>

                    <div className="form-group social-input">
                        <FontAwesomeIcon icon={faInstagram} className='m-1' className='text-primay' />
                        <input type="text" placeholder="Instagram URL" name="instagram" value={instagram} onChange={recupData} />
                    </div>
                </Fragment>}


                <input type="submit" className="btn btn-primary my-1" />
                <Link className="btn btn-light my-1" to="/private/dashboard">Retour</Link>
            </form>
        </Fragment>
    )
}



export default connect(null, { createProfile })(CreateProfile);
