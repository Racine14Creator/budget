"use client"

import Link from "next/link"
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { usePathname } from "next/navigation"
import UserNav from "@/components/UserNav";


export default async function Navbar(){
    const { isAuthenticated } = useKindeBrowserClient();
    
    const pathname = usePathname()
    // console.log(pathname)
    return isAuthenticated ? (
    <UserNav/>
  ) : (
    <>
        <li><LoginLink>Sign In</LoginLink></li>
        <li><RegisterLink className="bg-white text-black">Sign Up</RegisterLink></li>
    </>
  );
}