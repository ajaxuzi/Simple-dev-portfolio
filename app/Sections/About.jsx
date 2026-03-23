import GitHubContributionGraph from "../Components/GitHubContributionGraph";
import Image from "next/image";
import Link from "next/link";
export default function About() {
    const username = "codebyajax"
    return (
        <section className="padding about mb-2">
            <p className="font-light">
                Azianou komi Jacques recognized as a Full stack developer and UI/UX philantrophist from Lagos, Nigeria crafting scalable, accesible and well defined web applications. He is curently focused on building fast conversion driven projects with clear and simple architecture.
            </p>

            <p className="mt-4 font-light">
                With strong expertise in modern technologies, he builds end to end solutions that balances design integrity with technical efficency.
            </p>

            <div className="flex gap-2.5 mt-4">
                <button className=" py-[.5em] px-4 bg-[#404040] text-white rounded-lg flex items-center gap-2.5">
                    <Image
                        src="/Calendar.svg"
                        width={20}
                        height={20}
                        loading="lazy"
                        alt="icon"
                        className="size-3.75 mb-0.5"
                    />
                    Book a meeting
                </button>

                <Link href="/Resume" target="_blank" className="rounded-lg">
                    <button className=" py-[.5em] px-4 flex gap-2.5 items-center border rounded-lg">
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
                </Link>
            </div>

            <div className="mt-4">
                Tech space handles
                <div className="flex gap-1 sm:gap-3 mt-3 flex-wrap select-none">
                    <Link href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer" aria-label="Github profile" className="button-about">
                        <Image alt="icon for Github" loading="eager" width={20} height={20} decoding="async" className="size-4 mb-0.5" src="/assets/SVG/Github.svg" />Github</Link>
                    <Link href={`https://twitter.com/${username}`} target="_blank" rel="noopener noreferrer" aria-label="Twitter profile" className="button-about"><Image alt="icon for Twitter" loading="eager" width={20} height={20} decoding="async" className="size-4 mb-0.5" src="/assets/SVG/Twitter.svg" />Twitter</Link>
                    <Link href={`https://linkedin.com/in/${username}`} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="button-about"><Image alt="icon for LinkedIn" loading="eager" width={20} height={20} decoding="async" className="size-4 mb-0.5" src="/assets/SVG/LinkedIn.svg" />LinkedIn</Link>




                    <Link href={`https://medium.com/@${username}`} target="_blank" rel="noopener noreferrer" aria-label="Medium profile" className="button-about smaller-hide"><Image alt="icon for Medium" loading="eager" width={20} height={20} decoding="async" className="size-4 mb-0.5" src="/assets/SVG/Medium.svg" />Medium</Link>

                    <Link href={`https://leetcode.com/${username}`} target="_blank" rel="noopener noreferrer" aria-label="Leetcode profile" className="button-about smaller-hide">
                        <Image alt="icon for Leetcode" loading="eager" width={20} height={20} decoding="async" className="size-4 mb-0.5" src="/assets/SVG/Leetcode.svg" />
                        Leetcode
                    </Link>

                    <button type="button" aria-label="More" className="button-about"><Image alt="icon for More" loading="eager" width={20} height={20} decoding="async" className="size-4 mb-0.5" src="/assets/SVG/More.svg" />More</button></div>
            </div>
            <GitHubContributionGraph />

        </section>
    );
}
