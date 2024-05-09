"use client";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { Dashboard } from "../components/Dashboard/Dashboard";

export default function HomePageAuth() {
  const { user } = useKindeBrowserClient();
  if (user) {
    console.log(user);

    const UserId = user.email;
  } else {
    console.log("Not user");
  }
  async function getUserRegistered() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/todo/${UserId}`
    );
    return res;
  }

  return <Dashboard />;
}
