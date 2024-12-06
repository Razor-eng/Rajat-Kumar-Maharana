const SkillLoadingSkeleton = () => {
    return (
        <div className="animate-pulse duration-1000">
            <div className="flex items-end justify-start gap-5">
                <div className="rounded-full bg-gray-300 w-32 h-32"></div>
                <h2 className="w-40 bg-gray-300 rounded-md h-16"></h2>
            </div>
            <p className="bg-gray-300 mt-10 rounded-md h-60 w-full"></p>
        </div>
    )
}

export default SkillLoadingSkeleton