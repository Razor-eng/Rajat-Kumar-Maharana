"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Link from "next/link";
import { FaGithub, FaLink } from "react-icons/fa";
import { FeaturedProjectList, ProjectList } from "@/components/projects/projectList";
import MySkills from "@/components/skills/MySkills";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

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
        <div className="relative max-h-[320px] w-full h-full md:h-60 overflow-hidden rounded-md transition ease-in shadow-md">
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

            {images.length > 1 &&
                <>
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
                </>
            }
        </div>
    )
}

const ProjectPage = () => {
    const { type, project } = useParams();
    const [projectData, setProjectData] = useState([]);
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        if (type === "featured") {
            FeaturedProjectList.map((result) => {
                if (result.title === project.replace("%20", " ")) {
                    setProjectData(result);
                }
            })
        } else if (type === "project") {
            ProjectList.map((result) => {
                if (result.title === project.replace("%20", " ")) {
                    setProjectData(result);
                }
            })
        }

        if (projectData.length !== 0) {
            let data = [];
            MySkills.map((techs) => {
                projectData?.techs?.map((tech => {
                    techs.skills.map(skill => {
                        if (skill.name === tech) {
                            data.push(skill);
                        }
                    })
                }))
            })
            const uniqueItems = [
                ...new Map(data.map(item => [item.name, item])).values()
            ];
            setSkills(uniqueItems);
        }
    }, [project, projectData, type])

    return (
        <>
            <TransitionEffect />
            <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
                <Layout className='pt-10'>
                    <div className="px-3 md:px-0">
                        {
                            (projectData.length !== 0) ?
                                <div className="grid md:grid-cols-1 grid-cols-2 gap-20 md:gap-6 md:p-0 p-4 py-14 shadow-md border-t md:border-none md:shadow-none bg-blue-50 dark:bg-zinc-800 dark:border-t-zinc-900 min-h-[500px]">
                                    <div className="flex flex-col justify-between gap-8">
                                        <ImageSlider images={projectData.photoUrl} />
                                        <div className="flex w-full justify-between md:flex-col gap-12 md:gap-4">
                                            <Link
                                                href={projectData.GitHub}
                                                target="_blank"
                                                className="flex items-center justify-center gap-4 text-sm md:text-lg bg-slate-300 dark:bg-slate-700 rounded-md md:px-8 py-3 hover:opacity-80 transition-all ease-in duration-150 w-full h-fit active:scale-95"
                                            >
                                                <FaGithub fontSize={20} />
                                                <p className="font-semibold">Source Code</p>
                                            </Link>
                                            <Link
                                                href={projectData.link}
                                                target="_blank"
                                                className="flex items-center justify-center text-sm md:text-lg gap-4 bg-blue-400 text-white rounded-md md:px-8 py-3 hover:opacity-80 transition-all ease-in duration-150 w-full h-fit active:scale-95"
                                            >
                                                <FaLink fontSize={18} />
                                                <span className="font-semibold">Live Link</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-4 md:py-6 py-10">
                                        <h2 className="text-4xl font-extrabold text-zinc-800 dark:text-zinc-200">
                                            {projectData?.title}
                                        </h2>
                                        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
                                            {projectData?.summary}
                                        </p>
                                        {type !== "project" &&
                                            <div className="flex flex-col gap-6 md:gap-3">
                                                <p className="text-zinc-700 dark:text-zinc-300 text-xl font-semibold underline">
                                                    Tech Used:
                                                </p>
                                                <div className="grid grid-cols-3 md:grid-cols-2 gap-x-4 gap-y-2 md:gap-x-2">
                                                    {skills.map((skill, id) => (
                                                        <div
                                                            key={id}
                                                            className="flex items-center text-white justify-center gap-2 py-2 rounded-md"
                                                            style={{ backgroundColor: `${skill.color ? skill.color : "#000000"}` }}
                                                        >
                                                            <skill.icon />
                                                            <span className="font-semibold">
                                                                {skill.name}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>
                                :
                                <div className="animate-pulse duration-1000">
                                    <div className="flex items-end justify-start gap-5">
                                        <div className="rounded-full bg-gray-300 w-32 h-32"></div>
                                        <h2 className="w-40 bg-gray-300 rounded-md h-16"></h2>
                                    </div>
                                    <p className="bg-gray-300 mt-10 rounded-md h-40 w-full"></p>
                                </div>
                        }
                    </div>
                </Layout>
            </main>
        </>
    )
}
export default ProjectPage