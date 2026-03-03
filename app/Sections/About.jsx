"use client"
import Image from "next/image";

export default function About() {
    const socials = [
        { name: "Github", href: "https://github.com/yourusername" },
        { name: "Twitter", href: "https://twitter.com/yourusername" },
        { name: "LinkedIn", href: "https://linkedin.com/in/yourusername" },
        { name: "Medium", href: "https://medium.com/@yourusername", hideOnSmall: true },
        { name: "Leetcode", href: "https://leetcode.com/yourusername" },
        { name: "More", href: undefined },
    ]

    return (
        <section className="padding about mb-2">
            <p className="font-light">
                Hey, I'm Jacques<sup className="opacity-75">/Zhock/</sup>, a full stack developer who loves building clean, modern
                websites and apps where design, functionality,
                and even the smallest details matter, with a focus on making products that are both practical and visually
                satisfying.
            </p>

            <p className="mt-4 font-light">
                Tech stack isn't my concern, I'm flexible with whatever the project needs, though I prefer modern frameworks and
                tools.
                I'm always open for new opportunities to learn and grow.
            </p>

            <div className="flex gap-2.5 mt-4">
                <button className="font-medium py-[.5em] px-4 bg-[#52525C] text-white rounded-lg flex items-center gap-2.5">
                    <Image
                        src="/Calendar.svg"
                        width={20}
                        height={20}
                        loading="lazy"
                        alt="icon"
                        className="size-3.75 mb-0.5 invert-100"
                    />
                    Book a Meeting
                </button>

                <a href="/Resume" target="_blank" className="rounded-lg">
                    <button className="font-medium py-[.5em] px-4 flex gap-2.5 items-center border rounded-lg">
                        <Image
                            src="/file.svg"
                            width={20}
                            height={20}
                            loading="lazy"
                            alt="icon"
                            className="size-4"
                        />
                        Resume
                    </button>
                </a>
            </div>

            <div className="mt-4">
                Here are my Handles

                <div className="flex gap-3 mt-3 flex-wrap">
                    {socials.map((social) => {
                        const cls = `font-medium text-sm py-[.5em] px-4 hover:bg-[#e0e0e0] bg-[#f0f0f0] rounded-lg cursor-pointer flex items-center justify-center gap-2.5${social.hideOnSmall ? " smaller-hide" : ""}`;

                        const content = (
                            <>
                                <Image
                                    src={`/assets/SVG/${social.name}.svg`}
                                    width={20}
                                    height={20}
                                    loading="lazy"
                                    alt={`icon for ${social.name}`}
                                    className="size-4 mb-0.5"
                                />
                                {social.name}
                            </>
                        );

                        return social.href ? (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${social.name} profile`}
                                className={cls}
                            >
                                {content}
                            </a>
                        ) : (
                            <button
                                key={social.name}
                                type="button"
                                aria-label={social.name}
                                className={cls}
                            >
                                {content}
                            </button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
