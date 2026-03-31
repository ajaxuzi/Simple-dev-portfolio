import GitHubContributionGraph from "../Components/gitHubContributionGraph";
import Image from "next/image";
import Link from "next/link";

export default function About() {
    const username = "codebyajax";
    const linkedinUsername = "azianou-komi-jacques";
    return (
        <section className="padding about mb-2">
            <p className="font-light">
                Azianou komi Jacques recognized as a Full stack developer and UI/UX philanthropist from Lagos, Nigeria crafting scalable, accessible and well defined web applications. He is currently focused on building fast conversion driven projects with clear and simple architecture.
            </p>

            <p className="mt-4 font-light">
                With strong expertise in modern technologies, he builds end to end solutions that balances design integrity with technical efficiency.
            </p>

            <div className="flex gap-2.5 mt-4">
                <Link
                    href="/Resume"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-[.5em] px-4 rounded-lg bg-[#404040] text-white flex items-center gap-2.5"
                >
                    <Image
                        src="/assets/svg/calendar.svg"
                        width={20}
                        height={20}
                        loading="lazy"
                        alt="icon"
                        className="size-3.75 mb-0.5"
                    />
                    Book a meeting
                </Link>

                <Link
                    href="/Resume"
                    target="_blank">
                    <button className="py-[.5em] px-4 
                    flex gap-2.5 items-center 
                    border
                     rounded-lg">
                        <Image
                            src="/assets/svg/file.svg"
                            width={20}
                            height={20}
                            loading="lazy"
                            alt="icon"
                            className="size-4"
                        />
                        Resume
                    </button>
                </Link>
            </div>

            <div className="mt-4">
                Tech space handles
                <div className="flex gap-1 sm:gap-3 mt-3 flex-wrap select-none">
                    <Link href={`https://github.com/${username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Github profile"
                        className="button-about">
                        <Image
                            alt="icon for Github"
                            loading="lazy"
                            width={20}
                            height={20}
                            decoding="async"
                            className="size-4 mb-0.5"
                            src="/assets/SVG/Github.svg" />
                        Github
                    </Link>
                    <Link href={`https://twitter.com/${username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter profile"
                        className="button-about">
                        <Image
                            alt="icon for Twitter"
                            loading="lazy"
                            width={20}
                            height={20}
                            decoding="async"
                            className="size-4 mb-0.5"
                            src="/assets/SVG/Twitter.svg" />
                        Twitter
                    </Link>
                    <Link href={`https://medium.com/@${username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Medium profile"
                        className="button-about">
                        <Image
                            alt="icon for Medium"
                            loading="lazy"
                            width={20}
                            height={20}
                            decoding="async"
                            className="size-4 mb-0.5"
                            src="/assets/SVG/Medium.svg" />
                        Medium
                    </Link>
                    <Link href={`https://linkedin.com/in/${linkedinUsername}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn profile"
                        className="button-about">
                        <Image
                            alt="icon for LinkedIn"
                            loading="lazy"
                            width={20}
                            height={20}
                            decoding="async"
                            className="size-4 mb-0.5"
                            src="/assets/SVG/Linkedin.svg" />
                        LinkedIn
                    </Link>
                    <Link href={`https://leetcode.com/${username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Leetcode profile"
                        className="button-about">
                        <Image
                            alt="icon for Leetcode"
                            loading="lazy"
                            width={20}
                            height={20}
                            decoding="async"
                            className="size-4 mb-0.5"
                            src="/assets/SVG/Leetcode.svg" />
                        Leetcode
                    </Link>
                    <Link
                        href="#"
                        aria-label="More"
                        className="button-about">
                        <Image
                            alt="icon for More"
                            loading="lazy"
                            width={20}
                            height={20}
                            decoding="async"
                            className="size-4 mb-0.5"
                            src="/assets/SVG/More.svg"
                        />
                        More
                    </Link>
                </div>
                <GitHubContributionGraph />
            </div>
        </section>
    );
}
