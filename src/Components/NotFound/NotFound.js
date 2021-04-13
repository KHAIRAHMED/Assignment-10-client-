import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="text-center my-5">
            <h3 className="text-danger">This page is not found</h3>
            <Link to="/home">Go To Home</Link>
        </div>
    );
};

export default NotFound;