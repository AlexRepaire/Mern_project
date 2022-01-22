import React, { Fragment } from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteExperience } from '../../actions/profile'

const Experience = ({ experience, deleteExperience }) => {

    const experiences = experience.map(exp => (
        <tr key={exp._id}>
            <td>{exp.company}</td>
            <td className='hide-sm'>{exp.title}</td>
            <td>
                <Moment format='YYYY/MM/DD'>{exp.form}</Moment> - {' '}{
                    exp.to === null ? (' Maintenant') : (<Moment format='YYYY/MM/DD'>{exp.to}</Moment>)
                }
            </td>
            <td>
                <button className='btn btn-danger' onClick={() => deleteExperience(exp._id)}>Supprimer</button>
            </td>
        </tr>
    ));

    return (
        <Fragment>
            <h2 className='my-2'>Experience</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Entreprise</th>
                        <th className='hide-sm'>Titre</th>
                        <th className='hide-sm'>Année</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {experiences}
                </tbody>
            </table>
        </Fragment>
    );
};

export default connect(null, { deleteExperience })(Experience);
