"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

function Hero() {
    const bubbleAudioRef = useRef<HTMLAudioElement>(null);
    const glitchAudioRef = useRef<HTMLAudioElement>(null);

    const [isNerfed, setIsNerfed] = useState(false);
    const [glitchKey, setGlitchKey] = useState(0);
    const [isGlitching, setIsGlitching] = useState(false);

    const [visibleIndex, setVisibleIndex] = useState(-1);
    const phrases = [
        "Design Enginner",
        "TypeScript Enthusiast",
        "Indie hacker",
        "UI/UX designer",
        "Frontend developer",
        "Backend developer",
        "Full stack developer",
        "Logic and Problem Solving",
        "codebyajax",
        "Freelancer",
    ];

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const lightboxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const showFirst = setTimeout(() => setVisibleIndex(0), 2200);
        return () => clearTimeout(showFirst);
    }, []);

    useEffect(() => {
        if (visibleIndex < 0) return;
        const cycle = setInterval(() => {
            setVisibleIndex((prev) => (prev + 1) % phrases.length);
        }, 3200);
        return () => clearInterval(cycle);
    }, [visibleIndex]);


    const handleToggle = () => {
        glitchAudioRef.current?.play().catch(() => { });
        setIsNerfed((prev) => !prev);
        setGlitchKey((prev) => prev + 1);
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 300);
    };

    const profileImage = isNerfed
        ? "/assets/Images/JamesCD.PNG"
        : "/assets/Images/JamesBW.PNG";
    const name = isNerfed ? "codebyajax" : "Jacques Azainou Komi";
    const tickColor = isNerfed ? "#e8a807" : "#00aaff";

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (lightboxRef.current && !lightboxRef.current.contains(e.target as Node)) {
                setLightboxOpen(false);
            }
        }
        if (lightboxOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [lightboxOpen]);

    useEffect(() => {
        function handleKey(e: KeyboardEvent) {
            if (e.key === "Escape") setLightboxOpen(false);
        }
        if (lightboxOpen) document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, [lightboxOpen]);

    return (
        <>
            <div className="line" />
            <section className="hero flex sm:justify-between justify-center padding" aria-labelledby="hero-title">
                <div className="flex gap-3.5 flex-col h-fit w-fit sm:flex-row">
                    <figure className="holder overflow-hidden relative w-24 h-24 sm:rounded-2xl rounded-full flex justify-center items-center cursor-pointer mx-auto sm:mx-0 p-[2.5px] ">
                        <Image
                            key={glitchKey}
                            src={profileImage}
                            loading="lazy"
                            alt="Profile Image"
                            width={96}
                            height={96}
                            className={`rounded-full sm:rounded-xl object-cover hover:brightness-90 transition-al duration-300 select-none object-top size-full ${isGlitching ? "glitch-image" : ""}`}
                            onClick={() => setLightboxOpen(true)}
                        />
                    </figure>

                    <audio preload="auto" ref={glitchAudioRef} className="hidden">
                        <source src="/assets/sound/glitch.wav" type="audio/wav" />
                    </audio>
                    <audio preload="auto" ref={bubbleAudioRef} className="hidden">
                        <source src="/assets/sound/woosh.mp3" type="audio/mp3" />
                    </audio>

                    <div className="flex flex-col justify-between items-start">
                        <button
                            type="button"
                            onClick={handleToggle}
                            className="group text-foreground hidden sm:inline change text-2xl"
                            aria-label="Change personality"
                        >
                            {isNerfed ?

                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="opacity-90" height="12" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M448 256c0-106-86-192-192-192l0 384c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"></path></svg>

                                :

                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="opacity-90 rotate-120 hover:text-foreground transition-all duration-300" height="12" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z"></path></svg>
                            }
                        </button>

                        <div className="flex flex-col w-full max-h-40">
                            <div className="flex items-center mx-auto sm:mx-0">
                                <h1
                                    key={glitchKey + "-text"}
                                    className={`main-img tracking-normal w-full h-full rounded-xl ${isGlitching ? "glitch-text" : ""}`}
                                    id="hero-title"
                                >
                                    {name}
                                </h1>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    className="ml-0.5 size-6! tick"
                                    style={{ fill: tickColor }}
                                >
                                    <title>Verified</title>
                                    <path d="M17.999,10c0-1.097-.567-2.113-1.465-2.707.215-1.054-.103-2.174-.878-2.95-.775-.776-1.896-1.094-2.95-.878-.593-.897-1.609-1.464-2.706-1.464s-2.113.567-2.706,1.464c-1.053-.216-2.174.102-2.95.878s-1.093,1.896-.878,2.949c-.897.593-1.465,1.61-1.465,2.707s.567,2.113,1.465,2.707c-.215,1.054.103,2.174.878,2.95s1.898,1.092,2.95.878c.593.897,1.609,1.464,2.706,1.464s2.113-.568,2.706-1.465c1.059.214,2.176-.103,2.95-.878.776-.776,1.094-1.896.878-2.95.897-.593,1.465-1.609,1.465-2.707Zm-4.218-1.875l-4,5c-.178.222-.442.358-.726.374-.019,0-.037.001-.056.001-.265,0-.52-.105-.707-.293l-2-2c-.391-.391-.391-1.023,0-1.414s1.023-.391,1.414,0l1.21,1.21,3.302-4.127c.347-.43.975-.502,1.406-.156.431.345.501.974.156,1.405Z" />
                                </svg>
                            </div>

                            <div className="relative h-fit mb-2 sm:mb-0 sm:h-5  sm:mx-0 mx-auto">

                                <p
                                    className={`text-[#71717b] text-sm font-light hidden sm:block  transition-all duration-1200 ease-out ${visibleIndex >= 0 ? "opacity-0 blur-sm" : "opacity-100 blur-0"
                                        }`}
                                    aria-busy
                                    aria-hidden
                                >
                                    codebyajax
                                </p>

                                {phrases.map((phrase, i) => (
                                    <p
                                        key={i}
                                        className={`text-mutedForeground absolute inset-0 text-sm font-light transition-all duration-1200 ease-out select-none hidden sm:block ${i === visibleIndex ? "opacity-100 blur-0" : "opacity-0 blur-sm"
                                            }`}
                                    >
                                        {phrase}
                                    </p>
                                ))}

                                <p className=" flex items-center justify-center sm:hidden text-[#71717b] text-sm">
                                    <span className="font-sans">@</span>codebyajax</p>
                            </div>
                        </div>
                    </div>
                </div>


                <aside className=" hidden sm:flex items-end justify-between flex-col">
                    <button
                        type="button"
                        className="group night flex items-center justify-center"
                        aria-label="Toggle theme"
                    >
                        {isNerfed ?

                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="opacity-90 mb-1.25" height="12" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M448 256c0-106-86-192-192-192l0 384c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"></path></svg>

                            :

                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="opacity-90 mb-1.25 rotate-120 hover:text-foreground transition-all duration-300" height="12" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z"></path></svg>
                        }
                    </button>

                    <div className="flex items-center gap-1 select-none" aria-label="Profile views">
                        <Image src="/Eye.svg" alt="eye icon" width={18} height={18} className="opacity-50" loading="lazy" />
                        <p className="text-mutedForeground">2.2k</p>
                    </div>
                </aside>
            </section>

            {lightboxOpen && (
                <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/50 p-4 w-dvw h-dvh">
                    <div ref={lightboxRef} className="relative max-w-[90vw] max-h-[90vh]">
                        <Image
                            src={profileImage}
                            alt="Profile Preview"
                            loading="lazy"
                            width={400}
                            height={400}
                            className="rounded-xl size-100 object-cover object-top"
                        />
                        <button
                            className="absolute top-2 right-2 text-white bg-black/50 rounded-full w-8 h-8 flex items-center justify-center"
                            onClick={() => setLightboxOpen(false)}
                            aria-label="Close lightbox"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}

        </>
    );
}

export default Hero;
