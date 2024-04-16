"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const NavLinks = [
  { id: 1, label: "Dashboard", href: "/", Icon: "" },
  { id: 2, label: "Profile", href: "/profile", Icon: "" },
  { id: 3, label: "Data", href: "/data", Icon: "" },
  { id: 4, label: "Add data", href: "/register", Icon: "" },
]
export default function Navbar(){
    
    const pathname = usePathname()
    // console.log(pathname)
    return (
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
        </>
    )
}