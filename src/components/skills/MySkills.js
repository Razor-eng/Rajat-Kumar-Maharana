import { AiFillCode } from "react-icons/ai"
import { GrDeploy } from "react-icons/gr"
import { FaBootstrap, FaCss3, FaDatabase, FaGitAlt, FaGithub, FaHtml5, FaJava, FaNode, FaPython, FaReact, FaRegCircle, FaTools } from "react-icons/fa"
import { IoCodeSlash, IoLogoHtml5 } from "react-icons/io5"
import { SiAppwrite, SiC, SiCplusplus, SiEclipseide, SiExpress, SiFirebase, SiHeroku, SiHono, SiMongodb, SiMysql, SiNetlify, SiNextdotjs, SiPycharm, SiRapid, SiRedux, SiShadcnui, SiSpring, SiTailwindcss, SiTypescript, SiVercel, SiVite } from "react-icons/si"
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoVisualStudio } from "react-icons/bi";

const MySkills = [
    {
        title: 'Programming Languages',
        icon: IoCodeSlash,
        skills: [
            { name: 'Java', icon: FaJava, color: '#4D7C9A', description: 'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.' },
            { name: 'Python', icon: FaPython, color: '#4380B0', description: 'Python is a high-level, interpreted programming language known for its simplicity and readability. It supports multiple programming paradigms, including procedural, object-oriented, and functional programming. Python is widely used for web development, data analysis, artificial intelligence, scientific computing, automation, and more. It has a large standard library and a vibrant ecosystem of third-party packages, making it versatile and easy to use for beginners and experienced developers alike.' },
            { name: 'C++', icon: SiCplusplus, color: '#00427E', description: "C++ is one of the world's most popular programming languages. C++ can be found in today's operating systems, Graphical User Interfaces, and embedded systems. C++ is an object-oriented programming language which gives a clear structure to programs and allows code to be reused, lowering development costs." },
            { name: 'C', icon: SiC, color: '#6295CB', description: "C is a general-purpose computer programming language. It was created in the 1970s by Dennis Ritchie, and remains very widely used and influential. By design, C's features cleanly reflect the capabilities of the targeted CPUs." }
        ]
    },
    {
        title: 'Front End',
        icon: IoLogoHtml5,
        skills: [
            { name: 'HTML', icon: FaHtml5, color: '#DD4B25', description: 'HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.' },
            { name: 'CSS', icon: FaCss3, color: '#254BDD', description: 'Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.' },
            { name: 'JavaScript', icon: IoLogoJavascript, color: '#EFD81D', description: 'avaScript, often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior. Web browsers have a dedicated JavaScript engine that executes the client code.' },
            { name: 'React', icon: FaReact, color: '#00D5F7', description: 'React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js.' },
            { name: 'Next', icon: SiNextdotjs, description: 'Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.' },
            { name: 'TailwindCSS', icon: SiTailwindcss, color: '#36B7F0', description: 'Tailwind CSS is an open source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables.' },
            { name: 'TypeScript', icon: SiTypescript, color: '#2F74C0', description: "TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript. It is designed for the development of large applications and transpiles to JavaScript." },
            { name: 'Shadcn', icon: SiShadcnui, description: 'ShadCN is a collection of open-source UI components and design systems built with React and Tailwind CSS. It provides ready-to-use, customizable components such as buttons, forms, modals, and more, aimed at simplifying the development of modern web applications. ShadCN emphasizes design consistency and high performance, making it easy for developers to integrate visually appealing and responsive UI elements into their projects.' },
            { name: 'Redux', icon: SiRedux, color: '#7348B5', description: "Redux is an open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to Facebook's Flux architecture, it was created by Dan Abramov and Andrew Clark." },
            { name: 'Vite', icon: SiVite, color: '#AC47E1', description: 'Vite is a local development server written by Evan You, the creator of Vue.js, and used by default by Vue and for React project templates. It has support for TypeScript and JSX. It uses Rollup and esbuild internally for bundling.' },
            { name: 'Bootstrap', icon: FaBootstrap, color: '#7A11F3', description: 'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.' },
        ]
    },
    {
        title: 'Back End',
        icon: AiFillCode,
        skills: [
            { name: 'NodeJS', icon: FaNode, color: '#63655E', description: 'Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting.' },
            { name: 'ExpressJS', icon: SiExpress, description: 'Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.' },
            { name: 'Hono', icon: SiHono, color: "#FF9B5E", description: 'Hono is a fast and lightweight web framework for building APIs and server-side applications, designed with a focus on performance and minimalism. It is built in TypeScript and is especially suited for use with cloud functions, edge computing, and serverless environments. Hono provides features like routing, middleware support, and JSON handling, making it an efficient choice for developers who need a high-performance framework for handling HTTP requests.' },
            { name: 'Restful APIs', icon: SiRapid, color: '#0152D4', description: 'REST is a software architectural style that was created to guide the design and development of the architecture for the World Wide Web. REST defines a set of constraints for how the architecture of a distributed, Internet-scale hypermedia system, such as the Web, should behave.' },
            { name: 'Spring Boot', icon: SiSpring, color: '#6AAD3D', description: 'Spring Boot is an open-source Java framework used to create a Micro Service. Spring boot is used for programming standalone, production-grade Spring-based applications with minimal effort.' }
        ]
    },
    {
        title: 'Database',
        icon: FaDatabase,
        skills: [
            { name: 'MySQL', icon: SiMysql, color: '#005E86', description: `MySQL is an open-source relational database management system. Its name is a combination of "My", the name of co-founder Michael Widenius's daughter My, and "SQL", the acronym for Structured Query Language. ` },
            { name: 'MongoDB', icon: SiMongodb, color: '#00E661', description: 'MongoDB is a source-available, cross-platform, document-oriented database program. Classified as a NoSQL database product, MongoDB utilizes JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and current versions are licensed under the Server Side Public License.' },
            { name: 'Convex', icon: FaRegCircle, color: '#922C7B', description: `Convex is a modern, distributed database designed for high availability and scalability. It focuses on providing strong consistency while supporting a flexible, queryable storage model. The database is designed to handle large-scale data across distributed systems, ensuring that it can efficiently manage data in cloud or multi-node environments. It's often used in scenarios where performance, fault tolerance, and consistency are critical.` },
            { name: 'AppWrite', icon: SiAppwrite, color: '#FC3B73', description: `Appwrite is an open-source backend-as-a-service (BaaS) platform designed to help developers quickly build and scale web and mobile applications. It provides pre-built features like user authentication, databases, file storage, cloud functions, and more, allowing developers to focus on building the front end of their apps without worrying about managing infrastructure. Appwrite is designed to be easy to set up, customizable, and supports a wide range of programming languages and frameworks.` },
            { name: 'Firebase', icon: SiFirebase, color: '#F7C52A', description: "Firebase, Inc. is a set of backend cloud computing services and application development platforms provided by Google. It hosts databases, services, authentication, and integration for a variety of applications, including Android, iOS, JavaScript, Node.js, Java, Unity, PHP, and C++." },
        ]
    },
    {
        title: 'Deployment',
        icon: GrDeploy,
        skills: [
            { name: 'Firebase', icon: SiFirebase, color: '#F7C52A', description: "Firebase, Inc. is a set of backend cloud computing services and application development platforms provided by Google. It hosts databases, services, authentication, and integration for a variety of applications, including Android, iOS, JavaScript, Node.js, Java, Unity, PHP, and C++." },
            { name: 'Vercel', icon: SiVercel, description: "Vercel Inc., formerly ZEIT, is an American cloud platform as a service company. The company maintains the Next.js web development framework. Vercel's architecture is built around composable architecture, and deployments are handled through Git repositories. Vercel is a member of the MACH Alliance." },
            { name: 'Heroku', icon: SiHeroku, color: '#5C18AA', description: "Heroku is a cloud platform as a service supporting several programming languages. As one of the first cloud platforms, Heroku has been in development since June 2007, when it supported only the Ruby programming language, but now also supports Java, Node.js, Scala, Clojure, Python, PHP, and Go" },
            { name: 'Netlify', icon: SiNetlify, color: '#014645', description: "Netlify is a remote-first cloud computing company that offers a development platform that includes build, deploy, and serverless backend services for web applications and dynamic websites." },
        ]
    },
    {
        title: 'Tools',
        icon: FaTools,
        skills: [
            { name: 'Git', icon: FaGitAlt, color: '#E84E31', description: "Git is a distributed version control system that tracks changes in any set of computer files, usually used for coordinating work among programmers who are collaboratively developing source code during software development. Git's goals include speed, data integrity, and support for distributed, non-linear workflows." },
            { name: 'GitHub', icon: FaGithub, description: "GitHub is a developer platform that allows developers to create, store, manage and share their code. It uses Git software, providing the distributed version control of Git plus access control, bug tracking, software feature requests, task management, continuous integration, and wikis for every project." },
            { name: 'VS Code', icon: BiLogoVisualStudio, color: '#24A4EA', description: "Visual Studio Code, also commonly referred to as VS Code, is a source-code editor developed by Microsoft for Windows, Linux, macOS and web browsers. Features include support for debugging, syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded version control with Git." },
            { name: 'Eclipse', icon: SiEclipseide, color: '#2B2152', description: "Eclipse is an integrated development environment used in computer programming. It contains a base workspace and an extensible plug-in system for customizing the environment. It is the second-most-popular IDE for Java development, and, until 2016, was the most popular." },
            { name: 'PyCharm', icon: SiPycharm, color: '#28D88E', description: "PyCharm is a popular integrated development environment (IDE) for Python programming, developed by JetBrains. It provides a range of features like code completion, debugging, version control integration, and testing tools to help developers write, debug, and optimize Python code efficiently. PyCharm also supports web development frameworks (e.g., Django, Flask) and is available in both a free Community edition and a paid Professional edition with additional features." }
        ]
    },
]

export default MySkills;