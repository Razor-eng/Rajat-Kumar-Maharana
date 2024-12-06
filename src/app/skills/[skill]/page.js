"use client";
import MySkills from "@/components/skills/MySkills";
import { useParams } from "next/navigation";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useEffect, useState } from "react";
import SkillLoadingSkeleton from "@/components/skills/SkillLoadingSkeleton";

const SkillPage = () => {
    const { skill } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        MySkills.map((components) => {
            components.skills.map((skill) => {
                setData(skill);
            })
        })
    }, [skill])

    const goBack = () => {
        // navigate(location.state.back);
    }

    return (
        <div className="md:py-12 py-10 h-screen md:overflow-hidden">
            <MdKeyboardArrowLeft className="md:ml-48 ml-3 bg-zinc-300 hover:opacity-70 cursor-pointer transition-all ease-in duration-150 flex items-center justify-center rounded-full hover:scale-105" fontSize={40} onClick={goBack} />
            <div className="px-3 md:px-48 md:py-28 py-10">
                {
                    (data !== null && !loading) ?
                        <div>
                            <div className="flex items-end justify-start gap-5 text-4xl md:text-6xl font-semibold">
                                <data.icon color={codeData?.color} fontSize={100} />
                                <h2 className="" style={{ color: `${codeData?.color}` }}>{codeData?.name}</h2>
                            </div>
                            <p className="flex justify-center py-10 text-xl md:text-3xl text-zinc-600 dark:text-zinc-500">{codeData?.description}</p>
                        </div>
                        :
                        <SkillLoadingSkeleton />
                }
            </div>
        </div>
    )
}
export default SkillPage