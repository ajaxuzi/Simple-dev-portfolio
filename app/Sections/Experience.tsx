"use client";
import Image from "next/image";
import { useState, useRef } from "react";

export default function Experience() {
    const [isOpen, setIsOpen] = useState(true);
    const bodyRef = useRef(null);

    return (
        <section>
            <div className="line" />
            <h1 className="padding text-[1.35rem]">
                Experience
            </h1>
            <div className="line" />

            <div className="padding">
                <article>
                    <div
                        className="p-2 select-none cursor-pointer flex justify-between hover:bg-black/5"
                        onClick={() => setIsOpen((prev) => !prev)}
                    >
                        <div className="main flex gap-2">
                            <figure className="size-12 sm:size-14 shrink-0 rounded-[10px] p-0.5 overflow-hidden border">
                                <Image src="/assets/Images/download.jpg" width={45} height={45} priority className="size-full rounded-lg border" alt="company image" />
                            </figure>

                            <div className="flex flex-col gap-1">
                                <span className="flex align-center gap-4">
                                    <h1 className="sm:text-[1.20rem] text-[1.05rem] leading-[0.90] blur-[3.75px] font-bold">Cmon bruv</h1>
                                    <div className="cont smaller-hide">
                                        6 months
                                    </div>
                                </span>
                                <p className="text-[.9rem] opacity-75 text-nowrap">
                                    Software Engineer
                                </p>
                            </div>
                        </div>

                        <div className="sub flex gap-3 items-start">
                            <span className="gap-4 text-right text-[12px] font-bold md:text-[14px] text-nowrap">
                                <p>Aug, 2025 - present</p>
                                <p className="text-[.9rem] opacity-75 text-nowrap">
                                    Ikeja Lagos City, Nigeria
                                </p>
                            </span>

                            <button
                                aria-label="dropdown"
                                type="button"
                                className="smaller-hide opacity-70 dropdown-toggle transition-transform duration-300"
                                style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                            >
                                <svg stroke="currentColor" fill="none" strokeWidth="2"
                                    viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"
                                    className="text-muted group-hover:text-title transition-colors duration-300" height="18" width="18"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div
                        ref={bodyRef}
                        className="experience-body ml-2 transition-all duration-500 ease-in-out"
                        style={{
                            display: "grid",
                            gridTemplateRows: isOpen ? "1fr" : "0fr",
                            opacity: isOpen ? 1 : 0,
                        }}
                    >
                        <div className="overflow-hidden">
                            <ul className="flex flex-col gap-3 w-full my-4 mx-auto" style={{ color: "lab(29.82% 0.42 0.14)" }}>
                                <li className="small-hide point">
                                    Owned the core presentation editor, driving major performance and reliability improvements
                                </li>
                                <li className="point">
                                    Designed and built core editor features like drag-and-drop, resize, and keyboard shortcuts end-to-end
                                </li>
                                <li className="small-hide point">
                                    Owned a foundational refactor, strengthening a critical codebase to enable safer and faster production
                                </li>
                                <li className="point">
                                    Drove major Drive page performance improvements, resolving bugs to deliver faster, reliable experiences
                                </li>
                            </ul>

                            <div className="flex flex-wrap gap-2 pb-4">
                                <span className="cont">Next</span>
                                <span className="cont">Tailwind</span>
                                <span className="cont">Typescript</span>
                                <span className="cont">Javascript</span>
                                <span className="cont">Postgres SQL</span>
                                <span className="cont">Docker</span>
                                <span className="cont">Figma</span>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
}