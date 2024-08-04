import React, { useState } from "react";

import { FaTruck } from "react-icons/fa";
import { MdPerson } from "react-icons/md";
import { RiFileList3Fill } from "react-icons/ri";
import { RiLogoutCircleFill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import Screensizehook from "./Screensizehook";

const Sidebar = ({ children }) => {
    const [open, setOpen] = useState(true);
    const screenSize = Screensizehook();
    const location = useLocation();
    const Menus = [
        {
            title: "My Moves",
            path: "/mymoves",
            src: <FaTruck />,
            heading: ["My Moves", "All Movements"],
        },
        {
            title: "My Profile",
            path: "/myprofile",
            src: <MdPerson />,
            heading: ["My Profile", "Edit your Profile"],
        },
        {
            title: "Get Quotes",
            path: "/getquotes",
            src: <RiFileList3Fill />,
            heading: ["Get Quotes", "Get Custom Quotes"],
        },
        {
            title: "Logout",
            path: "/",
            src: <RiLogoutCircleFill />,

        },

    ];
    let headings = {
        "/mymoves": ["My Moves", "All Movements"],
        "/myprofile": ["My Profile", "Edit your Profile"],
        "/getquotes": ["Get Quotes", "Get Custom Quotes"],
    };
    return (
        <div>
            <div className="bg-slate-200 flex h-screen">
                <aside className="fixed z-50 md:relative">
                    <input type="checkbox" className="peer hidden" id="sidebar-open" />
                    <label
                        className="peer-checked:rounded-full peer-checked:p-2 peer-checked:left-32 peer-checked:bg-gray-600 peer-checked:text-white absolute top-5 z-20 mx-4 cursor-pointer md:hidden"
                        for="sidebar-open"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </label>
                    <nav
                        aria-label="Sidebar Navigation"
                        className="peer-checked:w-44 left-0 z-10 flex h-screen w-0 flex-col overflow-hidden bg-gray-800 text-white transition-all md:h-screen md:w-44 lg:w-52"
                    >
                        <div className="bg-slate-800 py-5 pl-6 md:mt-2 border-b">
                            <span className="">
                                <span className="mr-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-600 align-bottom text-2xl font-bold">
                                    B
                                </span>
                                <span className="text-xl">Boxigo</span>
                            </span>
                        </div>

                        <ul className="pt-6 overflow-y-auto ">
                            {Menus.map((menu, index) => (
                                <Link to={menu.path} key={index} id="sidebar-open">
                                    <li
                                        className={`flex items-center gap-x-4 p-2 pl-4 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-600 dark:hover:bg-gray-700
                         mt-2 ${location.pathname === menu.path &&
                                            "bg-gray-600 dark:bg-gray-700"
                                            }`}
                                    >
                                        <span className="text-2xl">{menu.src}</span>
                                        <span
                                            className={`origin-left duration-300 hover:block`}
                                        >
                                            {menu.title}
                                        </span>
                                    </li>
                                </Link>
                            ))}
                        </ul>


                    </nav>
                </aside>

                <div className="flex h-full w-full flex-col">
                    <header className="relative flex flex-col items-center bg-white px-4 py-4 shadow sm:flex-row md:h-20">
                        <div className="flex w-full flex-col justify-between overflow-hidden transition-all sm:max-h-full sm:flex-row sm:items-center">

                            {screenSize.width >= 640 ? (
                                <div className="pl-6">
                                    <div className="text-gray-600 font-semibold text-lg">
                                        {headings[location.pathname] ? headings[location.pathname][0] : ""}
                                    </div>
                                    <div className="text-xs">{headings[location.pathname] ? headings[location.pathname][1] : ""}</div>
                                </div>
                            ) : (
                                ""
                            )}



                            {screenSize.width >= 640 ? (
                                <div className="relative ml-10 flex items-center justify-between rounded-md sm:ml-auto">
                                    <svg
                                        className="absolute left-2 block h-5 w-5 text-gray-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <circle cx="11" cy="11" r="8" className=""></circle>
                                        <line
                                            x1="21"
                                            y1="21"
                                            x2="16.65"
                                            y2="16.65"
                                            className=""
                                        ></line>
                                    </svg>
                                    <input
                                        type="name"
                                        name="search"
                                        className="h-12 w-full rounded-md border border-gray-100 bg-gray-100 py-4 pr-4 pl-12 shadow-sm outline-none focus:border-blue-500"
                                        placeholder="Search for anything"
                                    />
                                </div>
                            ) : (
                                ""
                            )}
                            <ul className="mx-auto mt-4 flex space-x-6 sm:mx-5 sm:mt-0">
                                <li className="">
                                    <button className="flex h-8 w-8 items-center justify-center rounded-xl border text-gray-600 hover:text-black hover:shadow">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            stroke-width="2"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </button>
                                </li>
                                <li className="">
                                    <button className="flex h-8 w-8 items-center justify-center rounded-xl border text-gray-600 hover:text-black hover:shadow">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            stroke-width="2"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                                            />
                                        </svg>
                                    </button>
                                </li>
                                <li className="">
                                    <button className="flex h-8 w-8 items-center justify-center rounded-xl border text-gray-600 hover:text-black hover:shadow">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            stroke-width="2"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                            />
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </header>

                    <div className="h-full overflow-hidden bg-white">
                        <div
                            // id="dashboard-main"
                            className="h-full overflow-auto px-4 pb-10"
                        >
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
