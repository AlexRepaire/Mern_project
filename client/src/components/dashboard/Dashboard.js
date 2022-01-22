import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import Spinner from '../layout/Spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Education from './Education';

const Dashboard = ({ getCurrentProfile, deleteAccount, auth: { user }, profile: { profile, loading } }) => {
    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile]);


    return loading && profile === null ?
        <Spinner /> :
        <Fragment>
            <h1 className='large text-primary'>Dashboard</h1>
            <p className='lead'>
                <FontAwesomeIcon icon={faUser} />{' '}
                Bienvenue {user && user.name}
            </p>
            {profile !== null ? (
                <Fragment>
                    <DashboardActions />
                    <Experience experience={profile.experience} />
                    <Education education={profile.education} />
                    <div className='my-2'>
                        <button className='btn btn-danger' onClick={deleteAccount}>
                            <FontAwesomeIcon icon={faTrash} /> Supprimer mon compte
                        </button>
                    </div>
                </Fragment>
            ) : (
                <Fragment>
                    <p>Tu n'as pas configurer ton profil, Tu peux ajouter des infos en cliquant ci dessous:</p>
                    <Link to={'/private/create-profile'} className='btn btn-primary my-1'>Créer un profil</Link>
                </Fragment>
            )}
        </Fragment>
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Dashboard);
