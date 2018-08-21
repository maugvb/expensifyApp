import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({ isAuthenticated, component: Component, ...rest}) => (
    <Route 
    component={(props) => (
        isAuthenticated ? (<Component {...props}/>) : (<Redirect to='/'/>)
    )}
    {...rest}
    
    />
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PrivateRoute);