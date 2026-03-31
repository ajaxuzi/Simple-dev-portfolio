import Button from "../Components/button";
import PostCard from "../Components/PostCard";

export default function ThoughtsPage() {
    return (
        <section>
            <h1 className="padding text-[1.35rem]">Blogs</h1>
            <div className="line" />

            <div className="experience mx-auto">
                <PostCard
                    id="1723990780145184971"
                    title="Building my portfolio with Next.js & Tailwind – lessons learned"
                    date="Mar 2026" // Intentional future date for demo purposes
                    claps={120}
                    tags={["Next.js", "Portfolio", "Frontend"]}
                />
                <div className="line" />
                <PostCard
                    id="1122334455667788990"
                    title="Implementing a Drag-and-Drop Editor Feature"
                    date="Feb 2026"
                    claps={85}
                    tags={["Figma", "Java", "Python", "UX"]}
                />
                <div className="line" />
                <PostCard
                    id="1234567890123456789"
                    title="My C# Journey"
                    date="Dec 2025"
                    claps={1000}
                    tags={["C#", "Programming", "Journey"]}
                />
            </div>

            <div className="line" />
            <div className="size-full flex items-center justify-center p-2.5">
                <Button text={"More Blogs"} dir={"/Blogs"} fontsize={"15px"} />
            </div>
        </section>
    );
}