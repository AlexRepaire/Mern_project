import React from 'react';
import { connect } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ auth: { isAuthenticated, loading } }) => {
    return !isAuthenticated && !loading ? <Navigate to={'/login'} /> : <Outlet />;
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
