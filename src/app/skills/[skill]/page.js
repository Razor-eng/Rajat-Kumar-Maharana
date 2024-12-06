"use client";
import MySkills from "@/components/skills/MySkills";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import AnimatedText from "@/components/AnimatedText";

const SkillPage = () => {
    const { skill } = useParams();
    const [codeData, setCodeData] = useState([]);

    useEffect(() => {
        MySkills.map((components) => {
            components.skills.map((data) => {
                if (skill === data.name) {
                    setCodeData(data);
                }
            })
        })
    }, [skill])

    return (
        <>
            <TransitionEffect />
            <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
                <Layout className='pt-16 mb-4'>
                    <AnimatedText text="Skill surpasses limits" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
                    <div className="px-3">
                        {
                            (codeData.length !== 0) ?
                                <div>
                                    <div className="flex items-end justify-start gap-5 md:text-4xl text-6xl font-semibold">
                                        {codeData.icon &&
                                            <codeData.icon color={codeData?.color} fontSize={100} />
                                        }
                                        <h2 className="" style={{ color: `${codeData?.color}` }}>{codeData?.name}</h2>
                                    </div>
                                    <p className="flex justify-center py-10 text-xl md:text-3xl text-zinc-600 dark:text-zinc-500">{codeData?.description}</p>
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
export default SkillPage