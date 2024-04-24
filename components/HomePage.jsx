import { Dashboard } from "@/app/components/Dashboard/Dashboard";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
// import {redirect} from "next/navigation";


export default async function HomePage(){

  const {isAuthenticated} = getKindeServerSession()
  return (await isAuthenticated() ? <Dashboard/> : redirect('/home'))
}