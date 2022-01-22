import React, { Fragment, useEffect } from 'react';
import ProfileItem from './ProfileItem';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getProfiles } from '../../actions/profile';
import '../../styles/css/Profiles.css';

const Profiles = ({ profile: { profiles, loading }, getProfiles }) => {
    useEffect(() => {
        getProfiles();
    }, [getProfiles]);

    return (
        <Fragment>
            {loading ? <Spinner /> :
                <Fragment>
                    <h1 className='large text-primary'>Développeurs</h1>
                    <p className='lead'>
                        Liste des profiles de chaque développeurs
                    </p>
                    <div className='profiles'>
                        {profiles.length > 0 ? (
                            profiles.map(item => (
                                <ProfileItem key={item._id} profile={item} />
                            ))
                        ) : <h4>Pas de profiles trouvés...</h4>}
                    </div>
                </Fragment>}
        </Fragment>
    );
};

const mapStateToProps = state => ({
    profile: state.profile
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
