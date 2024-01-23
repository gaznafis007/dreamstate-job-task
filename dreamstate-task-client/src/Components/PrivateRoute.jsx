/* eslint-disable react/prop-types */
import  { useContext } from 'react';
import { AuthContext } from '../api/Auth/AuthProvider';
import CardSkeleton from './CardSkeleton';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <CardSkeleton/>
    }
    if(user?.uid){
        return children
    }
    return (
       <Navigate to='/login' from={{state:location}} replace></Navigate>
    )
};

export default PrivateRoute;