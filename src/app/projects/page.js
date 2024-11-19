"use client"

import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
// import project1 from '@/components/projects'
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'
import { projectList } from '@/components/projects/projectList'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const FramerImage = motion.create(Image);

const FeaturedProject = ({ type, title, summary, img, images, link, github }) => {
    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent((current) => (current - 1));
    const next = () => setCurrent((current) => (current + 1));

    return (
        <motion.article initial={{ y: 200 }} whileInView={{ y: 0, transition: { duration: 0.5, ease: 'easeInOut' } }} className=' w-full flex p-12 items-center relative justify-between rounded-3xl rounded-br-2xl bg-sky-50 shadow-2xl dark:bg-dark lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 dark:shadow dark:shadow-light'>
            {/* <div className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
                <FramerImage whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }} src={img} alt={title} className=' w-full h-auto' />
                </div> */}
            {images ?
                <div className='w-1/2 h-full cursor-pointer overflow-hidden rounded-md lg:w-full relative transition ease-in shadow-md'>
                    <Image
                        src={images[current]}
                        height={1000}
                        width={1000}
                        alt='image'
                        priority
                        className='h-full w-full object-cover'
                    />
                    <div className="absolute flex inset-0 items-end justify-between mx-2 mb-5">
                        {!(current === 0) ?
                            <div className="w-full flex justify-start">
                                <button onClick={prev} disabled={current === 0} className='p-1 rounded-full shadow-sm drop-shadow-sm bg-white/80 text-gray-800 hover:bg-white disabled:bg-zinc-100/50 hover:shadow-md border hover:border-none opacity-70 hover:opacity-100'>
                                    <ChevronLeft />
                                </button>
                            </div>
                            : null
                        }
                        {!(current === images.length - 1) ?
                            <div className="w-full flex justify-end">
                                <button onClick={next} disabled={current === images.length - 1} className='p-1 rounded-full shadow-sm drop-shadow-sm bg-white/80 text-gray-800 hover:bg-white disabled:bg-zinc-100/50 hover:shadow-md border hover:border-none opacity-70 hover:opacity-100'>
                                    <ChevronRight />
                                </button>
                            </div>
                            : null
                        }
                    </div>
                </div>
                :
                null
            }

            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-rose-400 font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
                <Link className=' hover:underline underline-offset-2' href={link} target='_blank'>
                    <h2 className=' my-2 w-full text-left text-4xl font-bold sm:text-sm'>{title}</h2>
                </Link>
                <p className=' my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className=' mt-2 flex items-center w-full gap-4'>
                    <Link href={github} target='_blank' className=' w-fit rounded-lg text-dark p-2 px-6 text-lg font-semibold dark:text-light border border-dark dark:border-light sm:px-4 sm:text-base flex items-center gap-2 justify-center hover:text-opacity-70 hover:bg-zinc-200/45 transition'>
                        <GithubIcon className="w-10" />
                        <p>GitHub</p>
                    </Link>
                    <Link href={link} target='_blank' className=' rounded-lg bg-dark text-light py-3 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base hover:opacity-90 transition text-center'>
                        Visit project
                    </Link>
                </div>
            </div>
        </motion.article>
    )
}

const Project = ({ type, title, img, link, github }) => {
    return (
        <article className='w-full flex flex-col p-6 items-center justify-center rounded-2xl shadow-md dark:shadow-light bg-rose-50 relative dark:bg-dark xs:p-4'>
            {/* <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-br-3xl rounded-[2rem] bg-dark dark:bg-light md:-right-2 md:w-[101%] xs:w-[102%] xs:rounded-[1.5rem]]" /> */}
            {img ?
                <Link href={link} target='_blank'
                    className='w-full cursor-pointer overflow-hidden rounded-lg shadow-md'
                >
                    <FramerImage
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        src={img} alt={title}
                        className=' w-full h-auto'
                        priority
                        height={1000}
                        width={1000}
                        sizes='
                            (max-width:768px) 100vw,
                            (max-width:1200px) 50vw,
                            50vw
                        '
                    />
                </Link>
                : null
            }

            <div className='w-full  flex flex-col items-start justify-between mt-4'>
                <span className='text-rose-400 dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base'>{type}</span>
                <Link className=' hover:underline underline-offset-2' href={link} target='_blank'>
                    <h2 className=' my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
                </Link>
                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link href={github} target='_blank' className=' w-fit rounded-lg text-dark p-2 px-6 text-lg font-semibold dark:text-light border border-dark dark:border-light sm:px-4 sm:text-base flex items-center gap-2 justify-center hover:text-opacity-70 hover:bg-zinc-200/45 transition'>
                        <GithubIcon className="w-8 md:w-6" />
                        <p>GitHub</p>
                    </Link>
                    <Link href={link} target='_blank' className=' rounded-lg bg-dark text-light py-3 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base hover:opacity-90 transition w-36 text-center'>
                        Visit
                    </Link>
                </div>
            </div>
        </article>
    )
}

export default function projects() {
    return (
        <>
            <TransitionEffect />
            <main className=' w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
                <Layout className=' pt-16'>
                    <AnimatedText text="Imagination Trumps Knowledge!" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
                    <div className=' grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                        <>
                            {projectList.map((project, id) => project.type === 'Featured Project' && (
                                <div key={id} className="col-span-12" >
                                    <FeaturedProject
                                        key={project.id}
                                        title={project.title}
                                        img={project.photoUrl}
                                        link={project.link}
                                        github={project.GitHub}
                                        summary={project.summary}
                                        images={project.photoUrl}
                                        type="Featured Project"
                                    />
                                </div>
                            ))}
                            {projectList.map((project, id) => project.type === 'Project' && (
                                <div key={id} className="col-span-6 sm:col-span-12" >
                                    <Project
                                        key={project.id}
                                        title={project.title}
                                        img={project.photoUrl[0]}
                                        link={project.link}
                                        github={project.GitHub}
                                        type="Project"
                                    />
                                </div>
                            ))}
                        </>
                    </div>
                </Layout>
            </main >
        </>
    )
}

