import { Dashboard } from "@/app/components/Dashboard/Dashboard";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import IndexPageHome from "@/app/components/Home/Index";

export default async function HomePage() {
  const { isAuthenticated } = getKindeServerSession();

  return (await isAuthenticated()) ? <Dashboard /> : <IndexPageHome />;
}
