import React, { useState } from "react";
import style from "./Navbar.module.css";
import logo from "../../assets/images/freshcart-logo.svg";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed bg-gray-200 inset-x-0 top-0 z-50">
        <nav
          className="flex items-center px-6 py-3 lg:px-8"
          aria-label="Global"
        >
          <div className="flex me-4">
            <a href="#" className="">
              <img className="w-32" src={logo} alt="" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(true)}
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 bg-red-900"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-3">
            <NavLink
              to={"home"}
              className="text-sm/6 font-medium text-gray-600"
            >
              Home
            </NavLink>
            <NavLink
              to={"cart"}
              className="text-sm/6 font-medium text-gray-600"
            >
              Cart
            </NavLink>
            <NavLink
              to={"categories"}
              className="text-sm/6 font-medium text-gray-600"
            >
              Categories
            </NavLink>
            <NavLink
              to={"brands"}
              className="text-sm/6 font-medium text-gray-600"
            >
              Brands
            </NavLink>
            <NavLink
              to={"products"}
              className="text-sm/6 font-medium text-gray-600"
            >
              Products
            </NavLink>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end space-x-3">
            <NavLink
              to={"login"}
              className="text-sm/6 font-medium text-gray-600"
            >
              Login <span aria-hidden="true">→</span>
            </NavLink>
            <NavLink to={""} className="text-sm/6 font-medium text-gray-600">
              Register
            </NavLink>
            <span className="text-sm/6 font-medium text-gray-600">Logout</span>
          </div>
        </nav>
        {/* Mobile menu, show/hide based on menu open state. */}
        <div
          className={isOpen ? "lg:hidden" : "hidden"}
          role="dialog"
          aria-modal="true"
        >
          {/* Background backdrop, show/hide based on slide-over state. */}
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <img className="w-32" src={logo} alt="" />
              </a>
              <button
                onClick={() => setIsOpen(false)}
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 bg-gray-200 hover:bg-gray-400 "
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <NavLink
                    to={"home"}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-medium text-gray-600 "
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to={"products"}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-medium text-gray-600 "
                  >
                    Products
                  </NavLink>
                  <NavLink
                    to={"categories"}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-medium text-gray-600 "
                  >
                    Categories
                  </NavLink>
                  <NavLink
                    to={"brands"}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-medium text-gray-600 "
                  >
                    Brands
                  </NavLink>
                </div>
                <div className="py-6">
                  <NavLink
                    to={"register"}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-medium text-gray-600 "
                  >
                    Register
                  </NavLink>
                  <NavLink
                    to={"login"}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-medium text-gray-600 "
                  >
                    Login
                  </NavLink>
                  <span className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-medium text-gray-600 ">
                    Logout
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
