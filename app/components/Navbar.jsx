"use client"

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import UserNav from "@/components/UserNav";

export default function Navbar(){

  const { isAuthenticated } = useKindeBrowserClient();

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