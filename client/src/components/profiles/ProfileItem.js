import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const ProfileItem = ({ profile: { user: { _id, name, avatar }, status, company, location, skills } }) => {


    return (
        //FIXME Refaire le css
        <div className='profile bg-light'>
            <img className='round-img' alt='image de profil' src={avatar} />
            <div>
                <h2>{name}</h2>
                <p>{status} {company && <span> chez {company}</span>}</p>
                <p className='my-1'>{location && <span>{location}</span>}</p>
                <Link to={`/profile/${_id}`} className='btn btn-primary'>
                    Voir profile
                </Link>
            </div>
            <ul>
                {skills.slice(0, 4).map((skill, index) => (
                    <li key={index} className='text-primary'>
                        <FontAwesomeIcon icon={faCheck} />
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProfileItem;
