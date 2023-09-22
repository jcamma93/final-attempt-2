import * as React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='bg-primary p-2'>
            <Link className='btn btn-info' to={"/"}>Home</Link>
            <Link className='btn btn-info' to={"/login"}>Login</Link>
            <Link className='btn btn-info' to={"/pizza"}>Pizza Party?</Link>
        </div>
    )
};

export default Navbar;