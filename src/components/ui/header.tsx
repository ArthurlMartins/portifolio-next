"use client"

import Logo from "./logo"
import { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Link from "next/link";

export default function Header() {

    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="fixed top-5 z-30 w-full md:top-6">
            <div className="mx-auto max-w-6xl px-4 px-6">
                <div className='relative shadow-sm flex h-20 items-center justify-between gap-3 rounded-2xl px-8 transition-all ease-in duration-600 bg-white md:bg-white/90 px-3 shadow-lg shadow-black/[0.03] md:backdrop-blur-sm backdrop-blur-lg before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]'>
                    <div>
                        <Logo 
                        width={175}
                        height={40}
                        />
                    </div>
                    <span
                        className="text-2xl text-black cursor-pointer md:hidden block"
                        onClick={handleClick}
                    >
                        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </span>
                    <ul className={`bg-white md:bg-transparent navmenu text-black md:flex md:items-center z-[-1] md:z-auto md:static absolute rounded-b-2xl w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-100 top-[-400px] transition-all ease-in duration-200 ${
                                    isOpen ? 'top-[65px] opacity-100' : 'top-[-100px] opacity-0'
                    }`}>
                        <li className="mx-4 my-10 md:my-0 relative">
                            <Link className="navbar-link relative" href="#hero">Home</Link>
                        </li>
                        <li className="mx-4 my-10 md:my-0">
                            <Link className="navbar-link relative" href="#about">About Me</Link>
                        </li>
                        <li className="mx-4 my-10 md:my-0">
                            <Link className="navbar-link relative" href="#projects">Projects</Link>
                        </li>
                        <li className="mx-4 my-10 md:my-0">
                            <Link className="navbar-link relative" href="#skills">Skills</Link>
                        </li>
                        <li className="mx-4 my-10 md:my-0">
                            <Link className="navbar-link relative" href="#contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}