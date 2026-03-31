"use client";
import Image from "next/image";
import { useState } from "react";
import Button from "../Components/button"


type ExperienceItem = {
    name: string;
    logo: string;
    moniker: string;
    status: string;
    achievements: string[];
    video: string;
    technologies: string[];
    isPresent?: boolean;
};

const experiences: ExperienceItem[] = [
    {
        name: "PLATYPUS",
        logo: "/assets/Images/Logo-1.png",
        moniker: "Fintech app",
        status: "Building",
        video: "/assets/videos/video-1.webm",
        isPresent: true,
        achievements: [
            "A savings app created and curated for the current public idea",
        ],
        technologies: ["Figma", "React Native", "Typescript", "MongoDB"],
    },

    {
        name: "Ehizua College",
        logo: "/assets/Images/Logo-2.png",
        moniker: "Frontend Developer",
        status: "Deployed",
        video: "/assets/videos/video-2.webm",
        achievements: [
            "Reduced initial page load time by 47% through lazy-loading and image optimization",
        ],
        technologies: ["React", "Next.js", "Zustand", "Tailwind CSS", "TypeScript", "WebSockets", "Vercel"],
    },

    {
        name: "PaySwift Nigeria",
        logo: "/assets/Images/Logo-3.png",
        moniker: "Full-Stack Engineer (Intern → Full-time)",
        status: "Ready",
        video: "/assets/videos/video-3.webm",
        achievements: [
            "Wrote comprehensive unit & integration tests reaching 82% coverage",
        ],
        technologies: ["Next.js", "Node.js", "Express", "PostgreSQL", "Prisma", "Jest", "Redis", "Docker"],
    },
];

export default function Projects() {

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section>
            <h1 className="padding text-[1.35rem]">Projects</h1>
            <div className="line" />

            {/* 2×2 grid with cross dividers */}
            <div className="experience mx-auto">
                <div className="grid grid-cols-2">
                    {experiences.map((exp, index) => {
                        const isOpen = openIndex === index;

                        // Determine border classes to create the cross-divider effect
                        const isLeftCol = index % 2 === 0;
                        const isTopRow = index < 2;

                        const borderClasses = [
                            isLeftCol ? "border-r" : "",        // right border on left-column cells
                            !isTopRow ? "border-t" : "",        // top border on bottom-row cells
                        ].filter(Boolean).join(" ");

                        return (
                            <div
                                key={index}
                                className={`border-(--border-color,#e5e7eb) ${borderClasses}`}
                            >
                                <div className="w-full flex flex-col p-2">
                                    <div className="flex items-center justify-center border rounded-[18px] p-1">
                                        <div className="border overflow-hidden relative rounded-[16px] bg-[#f2f2f2] size-full h-130">
                                            <Image
                                                src={exp.logo}
                                                width={45}
                                                height={45}
                                                loading="lazy"
                                                className="object-cover size-15 shrink-0 rounded-[14px] absolute top-0.75 left-0.75 p-0.5 overflow-hidden bg-white"
                                                alt={`${exp.name} logo`}
                                            />
                                        </div>
                                    </div>

                                    <div className="text-body p-5">
                                        <span className="flex justify-between">
                                            <h2 className="text-2xl">{exp.name}</h2>
                                            <span className="flex">
                                                <div className="flex items-center gap-2">
                                                    <span className="bg-red-400 relative grow-0 size-2 rounded-full">
                                                        <span className="size-3 grow-0 bg-red-500 rounded-full inline-block absolute animate-ping translate-1/2 -top-full -left-full"></span>
                                                    </span>
                                                    <p className="opacity-75 font-medium!">{exp.status}</p>
                                                </div>
                                            </span>
                                        </span>

                                        <div className="overflow-hidden">
                                            <ul
                                                className="flex flex-col gap-1.5 w-full my-1 text-[14px]"
                                                style={{ color: "lab(29.82% 0.42 0.14)" }}
                                            >
                                                {exp.achievements.map((point, i) => (
                                                    <li key={i} className={i >= 2 ? "small-hide point" : "point"}>
                                                        {point}
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {exp.technologies.map((tech) => (
                                                    <span key={tech} className="cont">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <span className="flex items-center hover:cursor-pointer group opacity-80 hover:opacity-100 gap-1">
                                            View Project
                                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="transition-all duration-300 group-hover:rotate-45 group-hover:text-title" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
                                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                                <polyline points="7 7 17 7 17 17"></polyline>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="line" />
            <div className="size-full flex items-center justify-center p-2.5">
                <Button text={"See More"} dir={"/#"} fontsize={"15px"} />
            </div>
        </section>
    );
}
