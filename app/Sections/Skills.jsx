import Image from "next/image";
import Link from "next/link";
export default function Skills() {
    return (
        <section>
            <div className="line" />
            <h1 className="padding text-[1.35rem] font-bold">
                Skills and Technologies
            </h1>
            <div className="line" />

            <fieldset className="flex flex-wrap my-3 md:gap-2 gap-1.5 items-center justify-center padding">
                <Link href="https://react.dev" target="_blank" rel="noopener noreferrer">
                    <span className="border border-black/20!  transition-all duration-300 hover:text-black hover:border-black! hover:bg-black/10  px-2 py-1 skill-stack">
                        <Image alt="React" loading="lazy" width={16} height={16} className="group-hover:opacity-100 opacity-65 size-4 mt-0.5" src="/assets/SVG/React.svg" />
                        React
                    </span>
                </Link>


                <Link href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
                    <span className="border border-black/20!  transition-all duration-300 hover:text-black hover:border-black! hover:bg-black/10  px-2 py-1 skill-stack">
                        <Image alt="Next" loading="lazy" width={16} height={16} className="group-hover:opacity-100 opacity-65 size-4 mt-0.5" src="/assets/SVG/Next.svg" />
                        Next
                    </span>
                </Link>


                <Link href="https://expo.dev" target="_blank" rel="noopener noreferrer">
                    <span className="border border-black/20!  transition-all duration-300 hover:text-black hover:border-black! hover:bg-black/10  px-2 py-1 skill-stack">
                        <Image alt="Expo" loading="lazy" width={16} height={16} className="group-hover:opacity-100 opacity-65 size-4 mt-0.5" src="/assets/SVG/Expo.svg" />
                        Expo
                    </span>
                </Link>


                <Link href="https://djangoproject.com" target="_blank" rel="noopener noreferrer">
                    <span className="border border-black/20!  transition-all duration-300 hover:text-black hover:border-black! hover:bg-black/10  px-2 py-1 skill-stack">
                        <Image alt="Django" loading="lazy" width={16} height={16} className="group-hover:opacity-100 opacity-65 size-4 mt-0.5" src="/assets/SVG/Django.svg" />
                        Django
                    </span>
                </Link>


                <Link href="https://expressjs.com" target="_blank" rel="noopener noreferrer">
                    <span className="border border-black/20!  transition-all duration-300 hover:text-black hover:border-black! hover:bg-black/10  px-2 py-1 skill-stack">
                        <Image alt="Express" loading="lazy" width={16} height={16} className="group-hover:opacity-100 opacity-65 size-4 mt-0.5" src="/assets/SVG/Express.svg" />
                        Express
                    </span>
                </Link>


                <Link href="https://nodejs.org" target="_blank" rel="noopener noreferrer">
                    <span className="border border-black/20!  transition-all duration-300 hover:text-black hover:border-black! hover:bg-black/10  px-2 py-1 skill-stack">
                        <Image alt="Node" loading="lazy" width={16} height={16} className="group-hover:opacity-100 opacity-65 size-4 mt-0.5" src="/assets/SVG/Node.svg" />
                        Node
                    </span>
                </Link>


                <Link href="https://bun.sh" target="_blank" rel="noopener noreferrer">
                    <span className="border border-black/20!  transition-all duration-300 hover:text-black hover:border-black! hover:bg-black/10  px-2 py-1 skill-stack">
                        <Image alt="Bun" loading="lazy" width={16} height={16} className="group-hover:opacity-100 opacity-65 size-4 mt-0.5" src="/assets/SVG/Bun.svg" />
                        Bun
                    </span>
                </Link>


                <Link href="https://postgresql.org" target="_blank" rel="noopener noreferrer">
                    <span className="border border-black/20!  transition-all duration-300 hover:text-black hover:border-black! hover:bg-black/10  px-2 py-1 skill-stack"><Image alt="PostgreSQL" loading="lazy" width={16} height={16} className="group-hover:opacity-100 opacity-65 size-4 mt-0.5" src="/assets/SVG/PostgreSQL.svg" />
                        PostgreSQL
                    </span>
                </Link>


                <Link href="https://mongodb.com" target="_blank" rel="noopener noreferrer">
                    <span className="border border-black/20!  transition-all duration-300 hover:text-black hover:border-black! hover:bg-black/10  px-2 py-1 skill-stack"><Image alt="MongoDB" loading="lazy" width={16} height={16} className="group-hover:opacity-100 opacity-65 size-4 mt-0.5" src="/assets/SVG/MongoDB.svg" />
                        MongoDB
                    </span>
                </Link>


                <Link href="https://redis.io" target="_blank" rel="noopener noreferrer">
                    <span className="border border-black/20!  transition-all duration-300 hover:text-black hover:border-black! hover:bg-black/10  px-2 py-1 skill-stack">
                        <Image alt="Redis" loading="lazy" width={16} height={16} className="group-hover:opacity-100 opacity-65 size-4 mt-0.5" src="/assets/SVG/Redis.svg" />
                        Redis
                    </span>
                </Link>


                <Link href="https://prisma.io" target="_blank" rel="noopener noreferrer">
                    <span className="border border-black/20!  transition-all duration-300 hover:text-black hover:border-black! hover:bg-black/10  px-2 py-1 skill-stack">
                        <Image alt="Prisma" loading="lazy" width={16} height={16} className="group-hover:opacity-100 opacity-65 size-4 mt-0.5" src="/assets/SVG/Prisma.svg" />
                        Prisma
                    </span>
                </Link>


                <Link href="https://zustand-demo.pmnd.rs" target="_blank" rel="noopener noreferrer">
                    <span className="border border-black/20!  transition-all duration-300 hover:text-black hover:border-black! hover:bg-black/10  px-2 py-1 skill-stack">
                        <Image alt="Zustand" loading="lazy" width={16} height={16} className="group-hover:opacity-100 opacity-65 size-4 mt-0.5" src="/assets/SVG/Zustand.svg" />
                        Zustand
                    </span>
                </Link>


                <Link href="https://tanstack.com/query" target="_blank" rel="noopener noreferrer">
                    <span className="border border-black/20!  transition-all duration-300 hover:text-black hover:border-black! hover:bg-black/10  px-2 py-1 skill-stack">
                        <Image alt="Transact Query" loading="lazy" width={16} height={16} className="group-hover:opacity-100 opacity-65 size-4 mt-0.5" src="/assets/SVG/tanstack-query.svg" />
                        Transact Query
                    </span>
                </Link>


                <Link href="https://postman.com" target="_blank" rel="noopener noreferrer">
                    <span className="border border-black/20!  transition-all duration-300 hover:text-black hover:border-black! hover:bg-black/10  px-2 py-1 skill-stack">
                        <Image alt="Postman" loading="lazy" width={16} height={16} className="group-hover:opacity-100 opacity-65 size-4 mt-0.5" src="/assets/SVG/Postman.svg" />
                        Postman
                    </span>
                </Link>


                <Link href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">
                    <span className="border border-black/20!  transition-all duration-300 hover:text-black hover:border-black! hover:bg-black/10  px-2 py-1 skill-stack">
                        <Image alt="Tailwind" loading="lazy" width={16} height={16} className="group-hover:opacity-100 opacity-65 size-4 mt-0.5" src="/assets/SVG/Tailwind.svg" />
                        Tailwind
                    </span>
                </Link>


                <Link href="https://ui.shadcn.com" target="_blank" rel="noopener noreferrer">
                    <span className="border border-black/20!  transition-all duration-300 hover:text-black hover:border-black! hover:bg-black/10  px-2 py-1 skill-stack"><Image alt="Shadcn" loading="lazy" width={16} height={16} className="group-hover:opacity-100 opacity-65 size-4 mt-0.5" src="/assets/SVG/Shadcn.svg" />
                        Shadcn
                    </span>
                </Link>


                <Link href="https://framer.com/motion" target="_blank" rel="noopener noreferrer">
                    <span className="border border-black/20!  transition-all duration-300 hover:text-black hover:border-black! hover:bg-black/10  px-2 py-1 skill-stack">
                        <Image alt="Framer Motion" loading="lazy" width={16} height={16} className="group-hover:opacity-100 opacity-65 size-4 mt-0.5" src="/assets/SVG/framer-motion.svg" />
                        Framer
                    </span>
                </Link>


                <Link href="https://gsap.com" target="_blank" rel="noopener noreferrer">
                    <span className="border border-black/20!  transition-all duration-300 hover:text-black hover:border-black! hover:bg-black/10  px-2 py-1 skill-stack">
                        <Image alt="GSAP" loading="lazy" width={16} height={16} className="group-hover:opacity-100 opacity-65 size-4 mt-0.5" src="/assets/SVG/GSAP.svg" />
                        GSAP
                    </span>
                </Link>


                <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
                    <span className="border border-black/20!  transition-all duration-300 hover:text-black hover:border-black! hover:bg-black/10  px-2 py-1 skill-stack">
                        <Image alt="JavaScript" loading="lazy" width={16} height={16} className="group-hover:opacity-100 opacity-65 size-4 mt-0.5" src="/assets/SVG/a.svg" />
                        JavaScript
                    </span>
                </Link>


                <Link href="https://typescriptlang.org" target="_blank" rel="noopener noreferrer">
                    <span className="border border-black/20!  transition-all duration-300 hover:text-black hover:border-black! hover:bg-black/10  px-2 py-1 skill-stack">
                    <Image alt="TypeScript" loading="lazy" width={16} height={16} className="group-hover:opacity-100 opacity-65 size-4 mt-0.5" src="/assets/SVG/u.svg" />
                        TypeScript
                    </span>
                </Link>


                <Link href="https://java.com" target="_blank" rel="noopener noreferrer">
                    <span className="border border-black/20!  transition-all duration-300 hover:text-black hover:border-black! hover:bg-black/10  px-2 py-1 skill-stack">
                        <Image alt="Java" loading="lazy" width={16} height={16} className="group-hover:opacity-100 opacity-65 size-4 mt-0.5" src="/assets/SVG/Java.svg" />
                        Java
                    </span>
                </Link>


                <Link href="https://python.org" target="_blank" rel="noopener noreferrer">
                    <span className="border border-black/20!  transition-all duration-300 hover:text-black hover:border-black! hover:bg-black/10  px-2 py-1 skill-stack">
                        <Image alt="Python" loading="lazy" width={16} height={16} className="group-hover:opacity-100 opacity-65 size-4 mt-0.5" src="/assets/SVG/Python.svg" />
                        Python
                    </span>
                </Link>


                <Link href="https://en.wikipedia.org/wiki/SQL" target="_blank" rel="noopener noreferrer">
                    <span className="border border-black/20!  transition-all duration-300 hover:text-black hover:border-black! hover:bg-black/10  px-2 py-1 skill-stack">
                        <Image alt="SQL" loading="lazy" width={16} height={16} className="group-hover:opacity-100 opacity-65 size-4 mt-0.5" src="/assets/SVG/SQL.svg" />
                        SQL
                    </span>
                </Link>


                <Link href="https://git-scm.com" target="_blank" rel="noopener noreferrer">
                    <span className="border border-black/20!  transition-all duration-300 hover:text-black hover:border-black! hover:bg-black/10  px-2 py-1 skill-stack">
                        <Image alt="Git" loading="lazy" width={16} height={16} className="group-hover:opacity-100 opacity-65 size-4 mt-0.5" src="/assets/SVG/Git.svg" />
                        Git
                    </span>
                </Link>


                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <span className="border border-black/20!  transition-all duration-300 hover:text-black hover:border-black! hover:bg-black/10  px-2 py-1 skill-stack"><Image alt="Github" loading="lazy" width={16} height={16} className="group-hover:opacity-100 opacity-65 size-4 mt-0.5" src="/assets/SVG/Github.svg" />
                        Github
                    </span>
                </Link>


                <Link href="https://figma.com" target="_blank" rel="noopener noreferrer">
                    <span className="border border-black/20!  transition-all duration-300 hover:text-black hover:border-black! hover:bg-black/10  px-2 py-1 skill-stack">
                        <Image alt="Figma" loading="lazy" width={16} height={16} className="group-hover:opacity-100 opacity-65 size-4 mt-0.5" src="/assets/SVG/Figma.svg" />
                        Figma
                    </span>
                </Link>


                <Link href="https://docker.com" target="_blank" rel="noopener noreferrer">
                    <span className="border border-black/20!  transition-all duration-300 hover:text-black hover:border-black! hover:bg-black/10  px-2 py-1 skill-stack">
                        <Image alt="Docker" loading="lazy" width={16} height={16} className="group-hover:opacity-100 opacity-65 size-4 mt-0.5" src="/assets/SVG/Docker.svg" />
                        Docker
                    </span>
                </Link>


                <Link href="https://linux.org" target="_blank" rel="noopener noreferrer">
                    <span className="border border-black/20!  transition-all duration-300 hover:text-black hover:border-black! hover:bg-black/10  px-2 py-1 skill-stack">
                        <Image alt="Linux" loading="lazy" width={16} height={16} className="group-hover:opacity-100 opacity-65 size-4 mt-0.5" src="/assets/SVG/Linux.svg" />
                        Linux
                    </span>
                </Link>
            </fieldset>
        </section>
    )
}