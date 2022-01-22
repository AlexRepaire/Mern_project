import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment, useEffect } from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const ProfileAbout = ({ profile: { bio, skills, user: { name } } }) => {
    return (
        <div className="profile-about bg-light p-2">
            {bio && (
                <Fragment>
                    <h2 className="text-primary">Bio de {name.trim().split(' ')[0]}</h2>
                    <p>{bio}</p>
                    <div className="line"></div>
                </Fragment>
            )}

            <h2 className="text-primary">Compétences:</h2>
            <div className="skills">
                {skills.map((skill, index) => (
                    <div className="p-1" key={index}><FontAwesomeIcon icon={faCheck} />{' '}{skill}</div>
                ))}

            </div>
        </div>
    );
};

export default ProfileAbout;
