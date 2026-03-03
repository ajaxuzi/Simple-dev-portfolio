"use client"

import { useState, useRef } from "react";

export default function Experience() {
    const [isOpen, setIsOpen] = useState(true);
    const bodyRef = useRef(null);

    return (
        <section className="mb-3">
            <div className="line" />
            <h1 className="padding text-[1.35rem]">
                Experience
            </h1>
            <div className="line" />

            <article className="padding">
                <div
                    className="p-2 select-none cursor-pointer head flex justify-between bg-white"
                    onClick={() => setIsOpen((prev) => !prev)}
                >
                    <div className="main flex gap-2">
                        <figure className="size-14 shrink-0 rounded-[10px] p-0.75 overflow-hidden border flex items-center justify-center">
                            <img src="./assets/Images/download.jpg" className="size-full rounded-lg border" alt="company image" />
                        </figure>

                        <div className="flex flex-col gap-1">
                            <span className="flex align-center gap-4">
                                <p className="sm:text-[1.20rem] text-[1.05rem] leading-[0.90] font-semibold blur-xs">Why boi?</p>
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
                            <p className="font-normal opacity-75 text-nowrap">
                                Ikeja Lagos City, Nigeria
                            </p>
                        </span>

                        <button
                            aria-label="dropdown"
                            type="button"
                            className="smaller-hide opacity-70 dropdown-toggle transition-transform duration-300"
                            style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsOpen((prev) => !prev);
                            }}
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
                    className="experience-body ml-2 overflow-hidden transition-all duration-300 ease-in-out"
                    style={{
                        maxHeight: isOpen ? bodyRef.current?.scrollHeight + "px" ?? "500px" : "0px",
                        opacity: isOpen ? 1 : 0,
                    }}
                >
                    <ul className="flex flex-col gap-3 w-[95%] my-4 mx-auto list-disc" style={{ color: "lab(29.82% 0.42 0.14)" }}>
                        <li className="small-hide">
                            Owned the core presentation editor, driving major performance and reliability improvements
                        </li>
                        <li>
                            Designed and built core editor features like drag-and-drop, resize, and keyboard shortcuts end-to-end
                        </li>
                        <li className="small-hide">
                            Owned a foundational refactor, strengthening a critical codebase to enable safer and faster production
                        </li>
                        <li>
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
            </article>
            <div className="line" />
        </section>
    );
}
