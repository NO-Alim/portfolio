import React from 'react'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="error">
            <h1>404 Page not Found</h1>
            <Link to="/" className="Back-home">Home</Link>
        </div>
    )
}

export default Error
