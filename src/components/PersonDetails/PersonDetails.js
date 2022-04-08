import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// personal details page 
const PersonDetails = () => {
    const {id}=useParams();
    const [user,setUser]=useState({});
    console.log(user);
    useEffect(()=>{
        fetch(`https://api.github.com/users/${id}`)
        .then(res=>res.json())
        .then(data=>setUser(data))
    },[id])
    return (
        <div className=''>
            <img className='mx-auto mt-4 rounded-lg' src={user.avatar_url} alt="" />
            <h2>{user.name}</h2>
            <p>Bio: {user.bio? user.bio:'Not Found'}</p>
            <h4>Location: {user.location? user.location:'Not Found'}</h4>
            <div className='flex justify-center gap-5'>
                <h3>Followers: {user.followers}</h3>
                <h3>Following: {user.following}</h3>
            </div>
            <h5>Account create: {user.created_at}</h5>
            <a className='p-2 text-blue-700 hover:underline rounded' href={user.html_url}>Click github profile</a>
        </div>
    );
};

export default PersonDetails;