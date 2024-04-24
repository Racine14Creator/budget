import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavLinks = [
  { id: 1, label: "Dashboard", href: "/home", Icon: "" },
  { id: 2, label: "Profile", href: "/profile", Icon: "" },
  { id: 3, label: "Data", href: "/data", Icon: "" },
]
export default function UserNav(){
    const pathname = usePathname();
    return(
        <>
            {
                NavLinks.map((n) => (
                    <li key={n.id}>
                        <Link href={n.href} className={`${pathname === n.href ? 'bg-white text-black' : 'bg-transparent'}`}>
                        {n.label}
                        </Link>
                    </li>
                    ))
            }
            <li><LogoutLink className="bg-error text-white">Logout</LogoutLink></li>
            </>
    )
}