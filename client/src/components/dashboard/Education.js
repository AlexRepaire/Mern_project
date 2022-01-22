import React, { Fragment } from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteEducation } from '../../actions/profile'


const Education = ({ education, deleteEducation }) => {

    const educations = education.map(edu => (
        <tr key={edu._id}>
            <td>{edu.school}</td>
            <td className='hide-sm'>{edu.degree}</td>
            <td>
                <Moment format='YYYY/MM/DD'>{edu.form}</Moment> - {' '}{
                    edu.to === null ? (' Maintenant') : (<Moment format='YYYY/MM/DD'>{edu.to}</Moment>)
                }
            </td>
            <td>
                <button className='btn btn-danger' onClick={() => deleteEducation(edu._id)}>Supprimer</button>
            </td>
        </tr>
    ));

    return (
        <Fragment>
            <h2 className='my-2'>Education</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Ecole</th>
                        <th className='hide-sm'>Diplome</th>
                        <th className='hide-sm'>Année</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {educations}
                </tbody>
            </table>
        </Fragment>
    );
};

export default connect(null, { deleteEducation })(Education);