import React, { useEffect, useRef, useState } from 'react';


const Home = () => {
    const userName=useRef();
    const [inputText,setInputText]=useState('');
    const [user,setUser]=useState({});
    console.log(user);
    const submitHandler=(e)=>{
        e.preventDefault()
        setInputText(userName.current.value)
        userName.current.value=''
    }
    useEffect(()=>{
        const url=`https://api.github.com/users/${inputText}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setUser(data))
    },[inputText])
    
    return (
        <div>
            <div className='mt-5'>
                <form action="">
                    <input className='p-2 outline-double rounded' type="text" placeholder='Type github username' ref={userName}/>
                    
                    <button onClick={submitHandler} className='px-4 py-2 ml-4 bg-indigo-400 rounded text-white hover:bg-indigo-500'>Submit</button>
                
                </form>
            </div>
            <div className='mt-10 p-10 border-4 w-96 mx-auto'>
                <div className='flex justify-between items-center'>
                    <img className='w-16' src={user.avatar_url} alt="" />
                    <h1>{user.name}</h1>
                </div>
            </div>

        </div>
    );
};

export default Home;