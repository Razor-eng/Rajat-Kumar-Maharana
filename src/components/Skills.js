import SkillCard from "./SkillCard"
import MySkills from "./skills/MySkills"

const Skills = () => {
    return (
        <>
            <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>Skills</h2>
            <div className="w-fulls grid grid-cols-3 md:grid-cols-1 gap-8 mt-8">
                {MySkills.map((skill, id) => (
                    <SkillCard title={skill.title} id={id} codes={skill.skills} Icon={skill.icon} key={id} />
                ))}
            </div>
        </>
    )
}

export default Skills