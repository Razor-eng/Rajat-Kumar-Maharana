"use client"
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'
import { HiChevronLeft, HiChevronRight, HiExternalLink } from 'react-icons/hi'
import { FeaturedProjectList, ProjectList } from '@/components/projects/projectList'
import { FaGithub, FaStar } from 'react-icons/fa'
import MySkills from '@/components/skills/MySkills'

const FramerImage = motion.create(Image);

function getColor(reqSkill) {
    let color = "#ffffff";
    MySkills.map((application) => {
        application.skills.map((skill) => {
            if (skill.name.toLowerCase() === reqSkill.toLowerCase()) {
                color = skill.color;
            }
        })
    })

    return color;
}

const ImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="relative w-full h-56 md:h-48 overflow-hidden rounded-md transition ease-in shadow-md">
            <div className="w-full h-full overflow-hidden rounded-lg">
                <AnimatePresence>
                    <motion.div
                        key={images[currentIndex]}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full"
                    >
                        <Image
                            src={images[currentIndex]}
                            alt={images[currentIndex]}
                            fill
                            className="transition-opacity duration-300 ease-in-out"
                            placeholder="blur"
                            priority
                            blurDataURL={images[currentIndex]}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-between items-end p-2 md:p-1">
                <button
                    onClick={prevImage}
                    className="bg-black bg-opacity-50 text-white p-2 md:p-1 rounded-full hover:bg-opacity-75 focus:outline-none transition duration-300 ease-in-out transform hover:scale-110"
                >
                    <HiChevronLeft size={30} />
                </button>
                <button
                    onClick={nextImage}
                    className="bg-black bg-opacity-50 text-white p-2 md:p-1 rounded-full hover:bg-opacity-75 focus:outline-none transition duration-300 ease-in-out transform hover:scale-110"
                >
                    <HiChevronRight size={30} />
                </button>
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`w-2 h-2 md:w-1.5 md:h-1.5 rounded-full bg-dark transition-all duration-300 ease-in-out ${currentIndex === index ? "scale-150" : "opacity-50"
                            }`}
                    ></div>
                ))}
            </div>
        </div>
    )
}

const FeaturedProject = ({ title, summary, images, link, github, techs }) => {
    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                    duration: 0.5,
                    ease: 'easeInOut',
                    staggerChildren: 0.08,
                }
            }}
            className='w-full flex flex-col p-3 items-center relative justify-between rounded-lg rounded-br-2xl bg-sky-50 shadow-md dark:bg-[#282828] lg:flex-col md:p-2 md:py-3 dark:shadow dark:shadow-light'
        >
            <ImageSlider images={images} />
            <div className='w-full flex flex-col items-start justify-between lg:w-full lg:pl-0 pt-3 md:pt-2'>
                <div className="flex items-center justify-between w-full">
                    <Link href={`/projects/featured/${title}`} target='_blank'>
                        <h2 className='relative w-full text-left text-3xl font-semibold sm:text-2xl mb-2 group'>
                            {title}
                            <span className="h-[2px] w-0 inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full translate-[width] ease duration-300 dark:bg-light">
                                &nbsp;
                            </span>
                        </h2>
                    </Link>
                    <motion.div
                        className="flex items-center justify-center space-x-2 px-3 py-2 rounded-2xl bg-orange-100 font-semibold text-sm shadow-sm hover:scale-105 transition-transform duration-300 ease-in-out dark:bg-rose-500 cursor-pointer"
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                            transition: { duration: 0.1 },
                        }}
                        whileTap={{
                            scale: 0.98,
                            boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.08)",
                            transition: { duration: 0.1 },
                        }}
                    >
                        <FaStar className="text-sm text-amber-500 dark:text-amber-400" />
                        <span className="text-xs">Featured Project</span>
                    </motion.div>
                </div>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm line-clamp-2'>
                    {summary}
                </p>
                <div className="w-full grid items-center grid-cols-2 gap-2 shadow text-sm p-1 mt-3">
                    {techs?.map((tech, id) => id < 4 && (
                        <div
                            key={id}
                            className={`shadow-md px-3 py-1 font-semibold rounded-md text-zinc-600 dark:text-zinc-300 bg-neutral-200 dark:bg-zinc-600 w-full text-center`}
                            style={{ color: `${getColor(tech)}` }}
                        >
                            {tech}
                        </div>
                    ))}
                </div>
                <div className='mt-4 flex items-center justify-between w-full gap-4 sm:gap-2'>
                    <Link
                        href={github}
                        target='_blank'
                        className="flex items-center justify-center bg-black text-white dark:bg-white dark:text-black px-6 py-2.5 rounded-lg shadow-md hover:bg-gray-800 transform transition duration-300 ease-in-out hover:scale-105 sm:w-full w-48"
                    >
                        <FaGithub className="text-xl mr-2" />
                        <span className="text-base font-semibold md:hidden">GitHub</span>
                    </Link>
                    <Link
                        href={`/projects/featured/${title}`}
                        target='_blank'
                        className="flex items-center justify-center bg-blue-600 text-white px-6 py-2.5 rounded-lg shadow-md hover:bg-blue-700 transform transition duration-300 ease-in-out hover:scale-105 sm:w-full w-48"
                    >
                        <HiExternalLink className="text-xl mr-2 md:hidden" />
                        <span className="text-base font-semibold">View</span>
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

const Project = ({ title, img, link, github }) => {
    return (
        <div className="w-full rounded-lg overflow-hidden shadow-lg bg-purple-100 dark:bg-[#292939] transition-all duration-300 p-1">
            <FramerImage
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                src={img}
                alt={title}
                className='w-full h-40 rounded-md'
                priority
                height={1000}
                width={1000}
                sizes='
                    (max-width:768px) 100vw,
                    (max-width:1200px) 50vw,
                    50vw
                '
            />
            <div className="p-2">
                <Link href={`/projects/project/${title}`} target='_blank'>
                    <h2 className='relative text-lg font-semibold text-gray-800 dark:text-white group w-fit'>
                        <span className='line-clamp-1'>
                            {title}
                        </span>
                        <span className="h-[2px] w-0 inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full translate-[width] ease duration-300 dark:bg-light">
                            &nbsp;
                        </span>
                    </h2>
                </Link>
                <div className='mt-4 grid items-center grid-cols-2 sm:mt-2 w-full gap-4 sm:gap-2'>
                    <Link
                        href={github}
                        target='_blank'
                        className="flex items-center justify-center bg-black text-white dark:bg-white dark:text-black px-6 py-2 rounded-md shadow-md hover:bg-gray-800 transform transition duration-300 ease-in-out hover:scale-105 w-full"
                    >
                        <FaGithub className="text-xl mr-2" />
                    </Link>
                    <Link
                        href={link}
                        target='_blank'
                        className="flex items-center justify-center bg-blue-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700 transform transition duration-300 ease-in-out hover:scale-105 w-full"
                    >
                        <HiExternalLink className="text-xl mr-2 hidden md:block" />
                        <span className="text-base font-semibold md:hidden">Visit</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default function projects() {
    return (
        <>
            <TransitionEffect />
            <main className=' w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
                <Layout className=' pt-16'>
                    <AnimatedText text="Imagination Trumps Knowledge!" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
                    <div className='grid grid-cols-12 gap-7'>
                        {FeaturedProjectList.map((project, id) => (
                            <div key={id} className="col-span-4 xl:col-span-6 md:col-span-12" >
                                <FeaturedProject
                                    key={project.id}
                                    title={project.title}
                                    link={project.link}
                                    github={project.GitHub}
                                    summary={project.summary}
                                    images={project.photoUrl}
                                    techs={project.techs}
                                />
                            </div>
                        ))}
                    </div>
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{
                            y: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.5,
                                ease: 'easeInOut',
                                staggerChildren: 0.08,
                            }
                        }}
                        className='mt-20 grid grid-cols-12 gap-4 gap-y-7'
                    >
                        {ProjectList.map((project, id) => project.type === 'Project' && (
                            <div key={id} className="col-span-3 lg:col-span-4 md:col-span-6 sm:col-span-12" >
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
                    </motion.div>
                </Layout>
            </main >
        </>
    )
}

