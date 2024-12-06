"use client"
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'
import MySkills from '@/components/skills/MySkills'
// import { useRouter } from 'next/navigation'

function Skill() {
    // const router = useRouter();

    return (
        <div className="min-h-screen flex flex-col gap-8 items-center">
            {MySkills.map((category, index) => (
                <motion.div
                    initial={{ y: 200, opacity: 0 }}
                    whileInView={{
                        y: 0,
                        opacity: 1,
                        transition: {
                            duration: 0.5,
                            ease: 'easeInOut',
                            staggerChildren: 0.08,
                        }
                    }}
                    className="w-full flex flex-col gap-5"
                    key={index}
                >
                    <h2 className="text-3xl md:text-xl font-semibold text-gray-800 dark:text-light text-left">{category.title}</h2>
                    <div className="grid md:gap-x-2 gap-8 gap-y-4 md:grid-cols-3 lg:grid-cols-3 grid-cols-4">
                        {category.skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                // onClick={() => router.push(`/skills/${skill.name}`)}
                                className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg overflow-hidden cursor-pointer"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                whileHover={{
                                    scale: 1.1,
                                    rotate: 2,
                                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                                }}
                                whileTap={{
                                    scale: 0.95,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    scale: 1,
                                    x: 0,
                                    transition: { duration: 1, type: 'spring', stiffness: 100 },
                                }}
                                viewport={{ once: true }}
                            >
                                <div className="bg-gray-200 dark:bg-neutral-700 flex items-center justify-center py-3">
                                    <skill.icon color={skill.color} size={60} />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 text-center">{skill.name}</h3>
                                    <div className="line-clamp-3">
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 md:hidden">
                                            {skill.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
    );
}


export default function Skills() {
    return (
        <>
            <TransitionEffect />
            <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text="Skill Surpasses Potential!" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
                    <Skill />
                </Layout>
            </main>
        </>
    )
}