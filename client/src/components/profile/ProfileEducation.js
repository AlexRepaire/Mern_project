import React from 'react';
import Moment from 'react-moment';

const ProfileEducation = ({ education: { school, degree, fieldofstudy, current, to, from, description } }) => {
    return (
        <div>
            <h3 className='text-dark'>{school}</h3>
            <p>
                <Moment format='YYYY/MM/DD'>{from}</Moment> - {!to ? ' Maintenant' : <Moment format='YYYY/MM/DD'>{to}</Moment>}
            </p>
            <p>
                <strong>Diplome: </strong> {degree}
            </p>
            <p>
                <strong>Domaine d'étude: </strong> {fieldofstudy}
            </p>
            <p>
                <strong>Description: </strong> {description}
            </p>
        </div>
    );
};

export default ProfileEducation;
