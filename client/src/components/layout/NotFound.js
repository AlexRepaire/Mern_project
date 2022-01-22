import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment } from 'react';

const NotFound = () => {
    return (
        <Fragment>
            <h1 className='x-large text-primary'>
                <FontAwesomeIcon icon={faExclamationTriangle} />
                Page Not found
            </h1>
            <p className='large'>Désolé, la page demandée n'éxiste pas !!!</p>
        </Fragment>
    );
};

export default NotFound;
