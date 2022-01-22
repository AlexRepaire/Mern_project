import React, { Fragment, useEffect } from 'react';
import Spinner from '../layout/Spinner';
import { Link, useParams } from 'react-router-dom';
import { getProfileById } from '../../actions/profile';
import { connect } from 'react-redux';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import ProfileExperience from './ProfileExperience';
import ProfileEducation from './ProfileEducation';
import ProfileGithub from './ProfileGithub';
import '../../styles/css/Profile.css';

const Profile = ({ getProfileById, profile: { profile, loading }, auth }) => {
    const { id } = useParams();
    useEffect(() => {
        getProfileById(id);

    }, [getProfileById, id]);

    return (
        <Fragment>
            {profile === null || loading ? (
                <Spinner />
            ) : (
                <Fragment>
                    <Link to={'/profiles'} className='btn btn-light'>
                        Retour aux profiles
                    </Link>
                    {auth.isAuthenticated && auth.loading === false && auth.user._id === profile.user._id && (
                        <Link to={'/private/edit-profile'} className='btn btn-dark'>
                            Editer profil
                        </Link>
                    )}
                    <div className='profile-grid my-1'>
                        <ProfileTop profile={profile} />
                        <ProfileAbout profile={profile} />
                        <div className='profile-exp bg-white p-2'>
                            <h2 className='text-primary'>Expérience</h2>
                            {profile.experience.length > 0 ? (
                                <Fragment>
                                    {profile.experience.map(experience => (
                                        <ProfileExperience key={experience._id} experience={experience} />
                                    ))}
                                </Fragment>
                            ) : (
                                <h4>Pas d'expérience</h4>
                            )}
                        </div>
                        <div className='profile-edu bg-white p-2'>
                            <h2 className='text-primary'>Education</h2>
                            {profile.education.length > 0 ? (
                                <Fragment>
                                    {profile.education.map(education => (
                                        <ProfileEducation key={education._id} education={education} />
                                    ))}
                                </Fragment>
                            ) : (
                                <h4>Pas de formation</h4>
                            )}
                        </div>
                        {profile.githubusername && (
                            <ProfileGithub username={profile.githubusername} />
                        )}
                    </div>
                </Fragment>
            )}
        </Fragment>
    );
};

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
});

export default connect(mapStateToProps, { getProfileById })(Profile);
