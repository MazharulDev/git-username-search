import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
// personal details page 
const PersonDetails = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});
    console.log(user);
    useEffect(() => {
        fetch(`https://api.github.com/users/${id}`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [id])
    return (
        <div className=''>
            <div className='w-7/12 mx-auto border-4 rounded-2xl mt-5 bg-indigo-200'>
                <img width={300} className='mx-auto mt-4 rounded-full border-8 hover:scale-105 border-indigo-500 mb-4' src={user.avatar_url} alt="" />
                <div className='rounded-br-xl rounded-bl-xl'>
                    <h2 className='bg-blue-600 inline-block p-2 rounded-md text-white hover:scale-105 hover:-skew-y-12 mb-3 '>{user.name}</h2><br />
                    <p className='inline-block bg-indigo-600 text-white p-1 rounded-md hover:scale-105 hover:skew-y-12 mb-3'>Bio: {user.bio ? user.bio : 'Not Found'}</p><br />
                    <h4 className='inline-block p-1 bg-blue-600 rounded-md text-white hover:scale-110 mb-2'>Location: {user.location ? user.location : 'Not Found'}</h4>
                    <div className='flex justify-center gap-5'>
                        <h3 className='bg-blue-600 p-1 rounded-md text-white'>Followers: {user.followers}</h3>
                        <h3 className='bg-indigo-600 p-1 rounded-md text-white'>Following: {user.following}</h3>
                    </div>
                    <h5 className='mt-3 text-cyan-800'>Account Create: {user.created_at}</h5>
                    
                        <a className='inline-block p-2 text-blue-700 rounded hover:scale-110' href={user.html_url}>Go to github profile <AiOutlineArrowRight className='inline-block'></AiOutlineArrowRight> </a>
                        
                    
                </div>
            </div>
        </div>
    );
};

export default PersonDetails;