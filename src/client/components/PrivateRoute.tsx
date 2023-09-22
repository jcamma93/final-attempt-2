import * as React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { TOKEN_KEY } from '../services/api-service';

const PrivateRoute = (props: PrivateRouteProps) => {

    const TOKEN = localStorage.getItem(TOKEN_KEY);

    if (!TOKEN) {
        return (
            <Navigate to="/login" />
        );
    } else {
        return (
            <>{props.children}</>
        );
    }
};

interface PrivateRouteProps {
    path?: string;
    exact?: boolean;
    children: React.ReactNode;
}



export default PrivateRoute;