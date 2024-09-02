"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";

import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Dashboard", href: "/dashboard", current: true, requireAuth: true },
  { name: "Transactions", href: "/dashboard/transactions", current: false },
  { name: "Gaderie", href: "/dashboard/garderie", current: false },
  // { name: "Garderie", href: "/dashboard/data", current: false },
  { name: "Reports", href: "/dashboard/reports", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Navbar() {
  //   const { isAuthenticated } = getKindeServerSession();
  const { isAuthenticated, user } = useKindeBrowserClient();
  const pathname = usePathname();
  const activeLink =
    "/dashboard" + (pathname.split("/")[2] ? "/" + pathname.split("/")[2] : "");

  const userNavigation = [
    { name: "Profile", href: "#" },
    { name: "Paramettre", href: "#" },
  ];

  return (
    <Disclosure as='nav' className='bg-gray-800 sticky top-0 z-50'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <Image
                width={200}
                height={200}
                alt='Racine14 Creator'
                src='/assets/logo.png'
                className='h-8 w-8'
              />
            </div>
            <div className='hidden md:block'>
              <div className='ml-10 flex items-baseline space-x-4'>
                {isAuthenticated &&
                  navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className={classNames(
                        activeLink === item.href
                          ? "bg-red-500 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
              </div>
            </div>
          </div>
          <div className='hidden md:block'>
            <div className='ml-4 flex items-center md:ml-6'>
              {isAuthenticated ? (
                <>
                  <button
                    type='button'
                    className='relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                  >
                    <span className='absolute -inset-1.5' />
                    <span className='sr-only'>View notifications</span>
                    <BellIcon aria-hidden='true' className='h-6 w-6' />
                  </button>

                  <Menu as='div' className='relative ml-3'>
                    <div>
                      <MenuButton className='relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
                        <span className='absolute -inset-1.5' />
                        <span className='sr-only'>Open user menu</span>
                        <Image
                          width={42}
                          height={42}
                          alt='Profile'
                          src={user.picture}
                          className='h-9 w-9 rounded-full'
                        />
                      </MenuButton>
                    </div>

                    <MenuItems
                      transition
                      className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in'
                    >
                      {userNavigation.map((item) => (
                        <MenuItem key={item.name}>
                          <Link
                            href={item.href}
                            className='block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100'
                          >
                            {item.name}
                          </Link>
                        </MenuItem>
                      ))}
                      <LogoutLink className='text-red-500 font-normal p-5'>
                        Se deconnecter
                      </LogoutLink>
                    </MenuItems>
                  </Menu>
                </>
              ) : (
                <>
                  <LoginLink className='bg-blue-500 text-white hover:bg-gray-700 hover:text-white/50 mr-3 rounded-md px-3 py-2 text-sm font-medium'>
                    Sign In
                  </LoginLink>
                  <RegisterLink className='relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
                    Sign Up
                  </RegisterLink>
                </>
              )}
            </div>
          </div>
          <div className='-mr-2 flex md:hidden'>
            <DisclosureButton className='group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
              <span className='absolute -inset-0.5' />
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon
                aria-hidden='true'
                className='block h-6 w-6 group-data-[open]:hidden'
              />
              <XMarkIcon
                aria-hidden='true'
                className='hidden h-6 w-6 group-data-[open]:block'
              />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel className='md:hidden'>
        <div className='space-y-1 px-2 pb-3 pt-2 sm:px-3'>
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as='a'
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
        <div className='border-t border-gray-700 pb-3 pt-4'>
          <div className='flex items-center px-5'>
            <div className='flex-shrink-0'>
              <Image
                width={42}
                height={42}
                alt='Profile'
                src={user?.picture}
                className='h-10 w-10 rounded-full'
              />
            </div>
            <div className='ml-3'>
              <div className='text-base font-medium leading-none text-white'>
                {user?.name}
              </div>
              <div className='text-sm font-medium leading-none text-gray-400'>
                {user?.email}
              </div>
            </div>
            <button
              type='button'
              className='relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
            >
              <span className='absolute -inset-1.5' />
              <span className='sr-only'>Les Notifications</span>
              <BellIcon aria-hidden='true' className='h-6 w-6' />
            </button>
          </div>
          <div className='mt-3 space-y-1 px-2'>
            {userNavigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as='a'
                href={item.href}
                className='block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white'
              >
                {item.name}
              </DisclosureButton>
            ))}
            <Link>
              <LogoutLink className='text-red-500'>Se deconnecter</LogoutLink>
            </Link>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
