import React from 'react';
import{useParams} from 'react-router-dom';

const Profile =()=>{
    const {fname}= useParams();

    return <h1> profile{fname} page</h1>
};
    export default Profile; 