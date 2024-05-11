"use client";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { Dashboard } from "../components/Dashboard/Dashboard";

export default function HomePageAuth() {
  const { user, isLoading } = useKindeBrowserClient();

  return isLoading ? (
    <div className='absolute top-0 left-0 w-full h-screen bg-black flex justify-center items-center flex-wrap'>
      <span className='max-w-md loading loading-bars loading-lg mx-auto'></span>
    </div>
  ) : (
    <Dashboard />
  );
}
