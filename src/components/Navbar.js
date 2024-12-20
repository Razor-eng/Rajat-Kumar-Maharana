"use client";

import Link from 'next/link'
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg'
import React, { useState } from 'react'
import Logo from './Logo'
import { usePathname, useRouter } from 'next/navigation'
import { DribbbleIcon, GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon, TwitterIcon } from './Icons'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import Image from 'next/image'

const CustomLink = ({ href, title, className = "" }) => {
    const path = usePathname();
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`
                h-[1px] inline-block bg-dark 
                absolute left-0 -bottom-0.5
                group-hover:w-full translate-[width] ease duration-300
                ${path === href ? 'w-full' : 'w-0'}
                dark:bg-light `}
            >
                &nbsp;
            </span>
        </Link>
    )
}

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
    const router = useRouter();
    const path = usePathname();
    const handleClick = () => {
        toggle();
        router.push(href);
    }
    return (
        <button href={href} className={`${className} font-semibold text-lg relative group text-light dark:text-light my-2`} onClick={handleClick}>
            {title}
            <span className={`
                h-[1px] inline-block bg-light dark:bg-light 
                absolute left-0 -bottom-0.5
                group-hover:w-full translate-[width] ease duration-300
                ${path === href ? 'w-full' : 'w-0'}`}
            >
                &nbsp;
            </span>
        </button>
    )
}

const Navbar = () => {

    const { theme: mode, setTheme: setMode } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header className=' w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8'>

            <button className='flex-col justify-center items-center hidden lg:flex' onClick={handleClick}>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>

            <div className=' w-full flex justify-between items-center lg:hidden'>
                <nav>
                    <CustomLink href="/" title="Home" className='mr-4' />
                    <CustomLink href="/about" title="About" className='mx-4' />
                    <CustomLink href="/skills" title="Skills" className='ml-4' />
                    <CustomLink href="/projects" title="Projects" className='mx-4' />
                    {/* <CustomLink href="/articles" title="Articles" className='ml-4' /> */}
                </nav>

                <nav className=' flex items-center justify-center flex-wrap'>
                    {/* <motion.a href="https://twitter.com" target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className=' w-6 mr-3'
                    >
                        <TwitterIcon />
                    </motion.a> */}
                    <motion.a href="https://github.com/razor-eng" target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className=' w-6 mx-3'
                    >
                        <GithubIcon />
                    </motion.a>
                    <motion.a href="https://www.linkedin.com/in/rajat-kumar-maharana-80103820b/" target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className=' w-6 mx-3'
                    >
                        <LinkedInIcon />
                    </motion.a>
                    {/* <motion.a href="https://pinterest.com" target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className=' bg-light rounded-full w-6 mx-3'
                    >
                        <PinterestIcon />
                    </motion.a>
                    <motion.a href="https://dribble.com" target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className=' w-6 ml-3'
                    >
                        <DribbbleIcon />
                    </motion.a> */}

                    <button
                        onClick={() => setMode(mode === "dark" ? "light" : "dark")}
                        className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "dark" ? "bg-light text-zinc-800" : "bg-zinc-800 text-yellow-500"}`}
                    >
                        {
                            mode === "dark" ?
                                <SunIcon />
                                :
                                <MoonIcon />
                        }
                    </button>
                </nav>
            </div>

            {
                isOpen ?
                    <motion.div
                        initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
                        animate={{ scale: 1, opacity: 1 }}
                        className='min-w-{70vw} flex flex-col w-full justify-between items-center z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        bg-dark/90 dark:bg-dark/60 border rounded-lg backdrop-blur-md py-32
                    '>
                        <nav className='flex items-center flex-col justify-center'>
                            <CustomMobileLink href="/" title="Home" className='' toggle={handleClick} />
                            <CustomMobileLink href="/about" title="About" className='' toggle={handleClick} />
                            <CustomMobileLink href="/skills" title="Skills" className='' toggle={handleClick} />
                            <CustomMobileLink href="/projects" title="Projects" className='' toggle={handleClick} />
                            {/* <CustomMobileLink href="/articles" title="Articles" className='' toggle={handleClick} /> */}
                        </nav>

                        <nav className='flex items-center justify-center flex-wrap mt-2'>
                            {/* <motion.a href="https://twitter.com" target={"_blank"}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                className=' w-6 mr-3 sm:mx-1'
                            >
                                <TwitterIcon />
                            </motion.a> */}
                            <motion.a href="https://github.com/razor-eng" target={"_blank"}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                className='bg-light rounded-full dark:bg-dark w-6 mx-3 sm:mx-1'
                            >
                                <GithubIcon />
                            </motion.a>
                            <motion.a href="https://www.linkedin.com/in/rajat-kumar-maharana-80103820b/" target={"_blank"}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                className=' w-6 mx-3 sm:mx-1'
                            >
                                <LinkedInIcon />
                            </motion.a>
                            {/* <motion.a href="https://pinterest.com" target={"_blank"}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                className=' bg-light rounded-full w-6 mx-3 sm:mx-1'
                            >
                                <PinterestIcon />
                            </motion.a>
                            <motion.a href="https://dribble.com" target={"_blank"}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                className=' w-6 ml-3 sm:mx-1'
                            >
                                <DribbbleIcon />
                            </motion.a> */}

                            <button
                                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                                className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
                            >
                                {
                                    mode === "dark" ?
                                        <SunIcon className={"fill-dark"} />
                                        :
                                        <MoonIcon className={"fill-dark"} />
                                }
                            </button>
                        </nav>
                    </motion.div>
                    : null
            }


            <div className='absolute top-2 md:left-[70%] lg:left-[85%] translate-x-[-50%]'>
                <div className='absolute w-8 lg:w-10 xs:w-5 hidden lg:inline-block md:top-2 md:left-[6rem] xs:left-[4rem]'>
                    <Image onClick={() => setMode(mode === "light" ? "dark" : "light")} src={lightBulb} alt='Rajat' className={`rotate-180 w-full h-auto cursor-pointer md:w-12 md:h-12 md:text-[10px] ${mode === 'dark' ? 'grayscale' : ''}`} />
                </div>
            </div>
            <div className=' absolute top-2 left-[50%] translate-x-[-50%]'>
                <Logo />
            </div>
        </header>
    )
}

export default Navbar