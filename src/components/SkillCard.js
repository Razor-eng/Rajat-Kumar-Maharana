import { motion } from 'framer-motion'

const SkillCard = ({ id, title, codes, Icon }) => {
    return (
        <motion.article
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
            className="bg-white dark:bg-neutral-800 shadow-lg dark:shadow-zinc-800 rounded-md">
            <div className="bg-green-400 dark:bg-blue-950 text-white rounded-t-md py-6 font-semibold flex flex-col justify-center items-center gap-2">
                <Icon fontSize={24} />
                <h1>{title}</h1>
            </div>
            <div className="flex flex-col py-6 font-semibold [&>*:nth-last-child(1)]:border-none">
                {codes.map((code, id) => id < 6 && (
                    <div
                        key={id}
                        className="border-b border-neutral-500 dark:border-neutral-700 py-3 hover:bg-zinc-100 dark:hover:bg-sky-900 cursor-pointer flex items-center pl-36 md:pl-40 gap-2 hover:scale-105 hover:rounded-lg hover:shadow-sm transition-all ease-in duration-150 dark:text-white"
                    >
                        <code.icon fontSize={18} color={code.color} />
                        <p style={{ color: `${code.color}` }}>{code.name}</p>
                    </div>
                ))}
            </div>
        </motion.article>
    )
}

export default SkillCard