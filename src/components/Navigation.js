"use client";
import { Disclosure } from "@headlessui/react";
import MenuIcon from "@heroicons/react/24/outline/Bars3Icon";
import Link from "next/link";

export function Navigation() {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 lg:divide-y lg:divide-gray-200">
            <div className="flex justify-between h-16">
              <div className="flex px-2 lg:px-0">
                <div className="flex-shrink-0 flex items-center">
                  <div className="font-extrabold">
                    <Link href={"/"}>Home</Link>
                  </div>
                </div>
                <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                  <Link
                    className="border-transparent text-gray-500 hover:text-indigo-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    href="/experience"
                  >
                    Experience
                  </Link>
                  <Link
                    className="border-transparent text-gray-500 hover:text-indigo-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    href="/education"
                  >
                    Education
                  </Link>
                  <Link
                    className="border-transparent text-gray-500 hover:text-indigo-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    href="/projects"
                  >
                    Projects
                  </Link>
                  <Link
                    className="border-transparent text-gray-500 hover:text-indigo-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    href="/references"
                  >
                    References
                  </Link>
                  <Link
                    className="border-transparent text-gray-500 hover:text-indigo-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    href="/aboutme"
                  >
                    About Me
                  </Link>
                </div>
              </div>
              <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
                <div className="max-w-lg w-full lg:max-w-xs relative">
                  {/* <SearchContainer /> */}
                </div>
              </div>
              <div className="flex items-center">
                {" "}
                <a
                  href={"/aboutme"}
                  className="btn bg-gray-200 hover:bg-gray-200 text-gray-500 font-bold py-2 px-4 rounded"
                >
                  Contact me!
                </a>
              </div>
              <div className="flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <MenuIcon className="block h-6 w-6" aria-hidden="false" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="lg:hidden">
            <div className="flex flex-col items-center justify-center px-2 pt-2 pb-3 space-y-1">
              <Link
                className="border-transparent text-gray-500 hover:text-indigo-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                href="/experience"
              >
                Experience
              </Link>
              <Link
                className="border-transparent text-gray-500 hover:text-indigo-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                href="/education"
              >
                Education
              </Link>
              <Link
                className="border-transparent text-gray-500 hover:text-indigo-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                href="/projects"
              >
                Projects
              </Link>
              <Link
                className="border-transparent text-gray-500 hover:text-indigo-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                href="/references"
              >
                References
              </Link>
              <Link
                className="border-transparent text-gray-500 hover:text-indigo-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                href="/aboutme"
              >
                About Me
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
