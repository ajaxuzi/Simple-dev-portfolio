"use client"
import Image from "next/image";
export default function Skills() {
    const Stack = [
        { name: "React", link: "https://react.dev" },
        { name: "Next", link: "https://nextjs.org" },
        { name: "Expo", link: "https://expo.dev" },
        { name: "Django", link: "https://djangoproject.com" },
        { name: "Express", link: "https://expressjs.com" },
        { name: "Node", link: "https://nodejs.org" },
        { name: "Bun", link: "https://bun.sh" },
        { name: "PostgreSQL", link: "https://postgresql.org" },
        { name: "MongoDB", link: "https://mongodb.com" },
        { name: "Redis", link: "https://redis.io" },
        { name: "Prisma", link: "https://prisma.io" },
        { name: "Zustand", link: "https://zustand-demo.pmnd.rs" },
        { name: "Transact Query", link: "https://tanstack.com/query" },
        { name: "Postman", link: "https://postman.com" },
        { name: "Tailwind", link: "https://tailwindcss.com" },
        { name: "Shadcn", link: "https://ui.shadcn.com" },
        { name: "Framer Motion", link: "https://framer.com/motion" },
        { name: "GSAP", link: "https://gsap.com" },
        { name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { name: "TypeScript", link: "https://typescriptlang.org" },
        { name: "Java", link: "https://java.com" },
        { name: "Python", link: "https://python.org" },
        { name: "SQL", link: "https://en.wikipedia.org/wiki/SQL" },
        { name: "Git", link: "https://git-scm.com" },
        { name: "Github", link: "https://github.com" },
        { name: "Figma", link: "https://figma.com" },
        { name: "Docker", link: "https://docker.com" },
        { name: "Linux", link: "https://linux.org" },
    ]

    return (
        <section className="TechStack">
            <h1 className="padding text-[1.35rem] font-bold">
                Skills and Technologies
            </h1>
            <div className="line" />
            <div className="flex flex-wrap my-3 md:gap-2.5 gap-1.5 items-center justify-center padding">
                {Stack.map(({ name, link }) => (
                    <a href={link} key={name} target="_blank" rel="noopener noreferrer">
                        <span className="min-w-fit w-full skill group relative flex-1 flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg border border-black/20! px-2 py-1 transition-all duration-300 hover:text-black hover:border-black! hover:bg-black/10 select-none max-w-fit">
                            <Image src={`/assets/SVG/${name}.svg`} width={16} height={16} alt={name} className="group-hover:opacity-100 opacity-65 size-4 mt-0.5" />
                            {name}
                        </span>
                    </a>
                ))}
            </div>
        </section>
    )
}