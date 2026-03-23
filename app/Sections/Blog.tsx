import Button from "../Components/Button";
import XPostCard from "../Components/XPostCard";

export default function ThoughtsPage() {
    return (
        <section>
            <h1 className="padding text-[1.35rem]">Blogs</h1>
            <div className="line" />

            <div className="experience mx-auto">
                <XPostCard
                    tweetId="1723990780145184971"
                    title="Building my portfolio with Next.js & Tailwind – lessons learned"
                    date="Mar 2026"
                    readTimeOrClaps="120"
                    tags={["Next.js", "Portfolio", "Frontend"]}
                />
                <div className="line" />
                <XPostCard
                    tweetId="YOUR_SECOND_TWEET_ID"
                    title="Just shipped a cool drag-and-drop editor feature"
                    date="Feb 2026"
                    readTimeOrClaps="85"
                    tags={["React", "UI", "OpenSource"]}
                />
                <div className="line" />
                <XPostCard
                    tweetId="YOUR_SECOND_TWEET_ID"
                    title="My C# Journey "
                    date="Dec 2025"
                    readTimeOrClaps="1000"
                    tags={["React", "UI", "OpenSource"]}
                />
            </div>

            <div className="line" />
            <div className="size-full flex items-center justify-center p-2.5">
                <Button text={"More Blogs"} dir={"/Blogs"} fontsize={"15px"} />
            </div>


        </section>
    );
}