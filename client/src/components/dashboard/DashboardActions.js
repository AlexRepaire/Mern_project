import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faSuitcase, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const DashboardActions = () => {
    return (
        <div className="dash-buttons">
            <Link to="/private/edit-profile" className="btn btn-light">
                <FontAwesomeIcon icon={faUserCircle} className='text-primary' transform={'left-4'} />Modifier profil</Link >
            <Link to="/private/add-experience" className="btn btn-light">
                <FontAwesomeIcon icon={faSuitcase} className='text-primary' transform={'left-4'} />Ajouter une expérience</Link>
            <Link to="/private/add-education" className="btn btn-light">
                <FontAwesomeIcon icon={faGraduationCap} className='text-primary' transform={'left-4'} />Ajouter un formation</Link>
        </div>
    )
};

export default DashboardActions;
