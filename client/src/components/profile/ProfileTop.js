import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInternetExplorer, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const ProfileTop = ({ profile: { status, company, location, website, social, user: { name, avatar } } }) => {
    return (
        <div className="profile-top bg-primary p-2">
            <img
                className="round-img my-1"
                src={avatar}
                alt="avatar de profil"
            />
            <h1 className="large">{name}</h1>
            <p className="lead">{status} {company && <span> chez {company}</span>}</p>
            <p>{location}</p>
            <div className="icons my-1">
                {
                    website && (
                        <a href={website} target="_blank">
                            <FontAwesomeIcon icon={faInternetExplorer} className='text-white' />
                        </a>
                    )
                }
                {
                    social && social.twitter && (
                        <a href={social.twitter} target="_blank">
                            <FontAwesomeIcon icon={faTwitter} className='text-white' />
                        </a>
                    )
                }
                {
                    social && social.facebook && (
                        <a href={social.facebook} target="_blank">
                            <FontAwesomeIcon icon={faFacebook} className='text-white' />
                        </a>
                    )
                }
                {
                    social && social.linkedin && (
                        <a href={social.facebook} target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} className='text-white' />
                        </a>
                    )
                }
                {
                    social && social.youtube && (
                        <a href={social.youtube} target="_blank">
                            <FontAwesomeIcon icon={faYoutube} className='text-white' />
                        </a>
                    )
                }
            </div>
        </div>
    );
};

export default ProfileTop;
