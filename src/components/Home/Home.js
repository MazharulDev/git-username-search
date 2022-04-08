import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const navigate = useNavigate();
    const userName = useRef();
    const [inputText, setInputText] = useState('');
    const [user, setUser] = useState({});
    const submitHandler = (e) => {
        e.preventDefault()
        setInputText(userName.current.value)
        userName.current.value = ''
    }
    useEffect(() => {
        const url = `https://api.github.com/users/${inputText}`
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [inputText])

    return (
        <div>
            <div className='mt-5'>
                <form action="">
                    <input className='p-2 border-2 rounded hover:scale-105' type="text" placeholder='Type github username' ref={userName} />

                    <button onClick={submitHandler} className='px-4 py-2 ml-4 bg-indigo-400 rounded text-white hover:bg-indigo-500 hover:scale-110'>Submit</button>

                </form>
            </div>
            <>
                {
                    user.name ? <div className='mt-10 p-10 w-96 mx-auto bg-indigo-600 rounded-lg text-white shadow-2xl'>
                        <div className='flex justify-between items-center'>
                            <img className='w-16 rounded-full hover:scale-125' src={user.avatar_url} alt="" />
                            <h1>{user.name}</h1>
                            <button onClick={() => navigate(`/personDetails/${inputText}`)} className='p-2 bg rounded bg-white text-black hover:bg-gray-200 hover:scale-110'>Details</button>
                        </div>
                    </div> : ''
                }
            </>


        </div>
    );
};

export default Home;