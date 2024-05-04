import { Dashboard } from "@/app/components/Dashboard/Dashboard";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import IndexPage from "./IndexPage";


export default async function HomePage(){

  const {isAuthenticated} = getKindeServerSession()

  return (await isAuthenticated() ? (
  <Dashboard/>
) : (
<IndexPage/>
))
}