
import { Dashboard } from "@/app/components/Dashboard/Dashboard";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {redirect} from "next/navigation";


const HomePage = async () => {

    const {isAuthenticated} = getKindeServerSession();

    if (!(await isAuthenticated())) {
        redirect("/login");
    }else{
      return <Dashboard/>
    }
}

export default HomePage