"use client";
import Image from 'next/image'
import React from 'react'

import {useKindeBrowserClient} from "@kinde-oss/kinde-auth-nextjs";

const Profile = () => {
    const {user, isLoading} = useKindeBrowserClient();
    // console.log(user)
    let name = ''
    if(user){name = `${user.given_name + ' ' + user.family_name}`}
    if(isLoading) return <div className="h">Loading...</div>

    return (
        <>
            <h3 className="text-3xl font-bold my-3">Profile</h3>
            <div className="flex justify-between sm:flex-col sm:p-5 max-w-md mx-auto">
                <div className="flex justify-between items-center p-5 rounded-full bg-white text-black shadow-md my-3">
                    <Image src={user.picture} height={50} width={50} alt='Profile' className='relative w-50 h-70 rounded-full shadow-lg' />
                    <p className="text-xl font-bold">Profile</p>
                </div>
                <div className="flex justify-between items-center sm:p-5 rounded-full bg-white text-black shadow-md my-3 sm:w-full">
                    <p className="text-xl font-normal">{name}</p>
                    <p className="text-xl font-bold">Name</p>
                </div>
                <div className="flex justify-between items-center p-5 rounded-full bg-white text-black shadow-md my-3">
                    <p className="text-xl font-normal">{user.email}</p>
                    <p className="text-xl font-bold">Email</p>
                </div>
            </div>
        </>
    )
}

export default Profile