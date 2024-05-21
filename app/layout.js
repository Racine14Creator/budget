
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Navbar from "./components/Navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Racine14 Creator",
  description: "Budget Tracker is a WebSite design by Racine14Cretor",
  icon: 'next.svg'
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <div className="drawer z-10">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            <div className="bg-base-300 sticky top-0">
              <div className="max-w-[1000px] mx-auto navbar">
                <div className="flex-none lg:hidden">
                  <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                  </label>
                </div>
                <div className="flex-1 px-2 mx-2">
                  <Link href={'/'} className="btn">Budget Tracker</Link>
                </div>
                <div className="flex-none hidden lg:block">
                  <ul className="menu menu-horizontal gap-x-2">
                    <Navbar/>
                  </ul>
                </div>
              </div>
            </div>
            <div className="min-h-screen">
              <div className="container max-w-[1000px] py-10 mx-auto">
                {children}
              </div>
            </div>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200">
              <Navbar/>
            </ul>
          </div>
        </div>
      </body>
    </html>
  );
}
