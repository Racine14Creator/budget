import Link from "next/link"
function Navbar() {
    return (
        <div className="drawer">
            <div className="max-w-[1000px] mx-auto">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <div className="w-full navbar bg-base-300">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2">Personnel Budget</div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal">

                                <li><Link href={"/register"}>Register</Link></li>
                                <li><Link href={"/"}>Data</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="min-h-screen">
                        <div className="container max-w-md mx-auto">
                            Content
                        </div>
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200">

                        <li><Link href={"#"}>Register</Link></li>
                        <li><Link href={"#"}>Data</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar