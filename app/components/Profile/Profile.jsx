import Image from 'next/image'
import React from 'react'

const Profile = () => {
    return (
        <>
            <h3 className="text-3xl font-bold my-3">Profile</h3>
            <div className="flex justify-between sm:flex-col sm:p-5 max-w-md mx-auto">
                <div className="flex justify-between items-center p-5 rounded-full bg-white text-black shadow-md my-3">
                    <Image src={'/next.svg'} height={50} width={50} className='relative w-50 h-70 rounded-full shadow-lg' />
                    <p className="text-xl font-bold">Profile</p>
                </div>
                <div className="flex justify-between items-center sm:p-5 rounded-full bg-white text-black shadow-md my-3 sm:w-full">
                    <p className="text-xl font-normal">User name</p>
                    <p className="text-xl font-bold">Name</p>
                </div>
                <div className="flex justify-between items-center p-5 rounded-full bg-white text-black shadow-md my-3">
                    <p className="text-xl font-normal">Email@gmail.com</p>
                    <p className="text-xl font-bold">Email</p>
                </div>
            </div>
        </>
    )
}

export default Profile