"use client"

import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
export default function IndexPage(){

    const {isAuthenticated} = useKindeBrowserClient()
    
    if(isAuthenticated){
        redirect('/home')
    }

    return (
        <>
        <div className="h-[40vh] w-full flex flex-col justify-center items-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-12">Welcome to MyBudget App</h1>
            <p className="text-secondary text-lg lg:text-2xl px-5 text-center mb-12">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, laudantium delectus ipsa accusamus impedit eligendi itaque illum tempore minima quae molestiae distinctio ab iure, excepturi quod quaerat a laboriosam. Accusantium.
            </p>
            <LogoutLink className="w-fit bg-error px-5 py-2 rounded-md text-lg lg:text-xl">Get Started</LogoutLink>
        </div>
        <div className="relative my-[200px]">
            <span className="circle"></span>
            <div className="realtive w-full gap-10 bg-white p-10 rounded-2xl flex flex-col lg:flex-row justify-between items-center">
                <div className="lg:w-1/2">
                    <h3 className="text-4xl lg:text-5xl font-bold text-black">Budget <span className="text-error">Tracker</span></h3>
                    <p className="text-black text-left my-5 text-lg lg:text-2xl">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure reiciendis nam rerum vel error quo, cum natus ratione eaque nulla accusantium vitae, culpa minus dolorum facilis tempora minima fuga hic unde sed necessitatibus beatae quas!
                    </p>
                </div>
                <div className="relative bg-black rounded-xl p-4 lg:w-1/2">
                    <Image width={550} height={320} src={'/assets/img/budgetbrand.png'} className="img" alt="Budget Tracker"/>
                </div>
            </div>
        </div>
        </>
    );
}
