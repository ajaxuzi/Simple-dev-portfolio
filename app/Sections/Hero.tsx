"use client";

import ImagePIP from "../Components/ImagePIP";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

function Hero() {
    const { resolvedTheme, setTheme } = useTheme();
    const [overlayActive, setOverlayActive] = useState(false);
    const bubbleAudioRef = useRef<HTMLAudioElement>(null);
    const glitchAudioRef = useRef<HTMLAudioElement>(null);

    const [isNerfed, setIsNerfed] = useState(false);
    const [glitchKey, setGlitchKey] = useState(0);
    const [isGlitching, setIsGlitching] = useState(false);

    const [visibleIndex, setVisibleIndex] = useState(-1);
    const phrases = [
        "Software Engineer",
        "Indie hacker",
        "UI/UX designer",
        "Logic and Problem Solving",
        "Frontend developer",
        "Freelancer",
    ];

    // Lightbox state
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
        setTimeout(() => setIsGlitching(false), 600);
    };

    const profileImage = isNerfed
        ? "/assets/Images/JamesCD.webp"
        : "/assets/Images/JamesBW.webp";
    const name = isNerfed ? "𝔠𝔞𝔯𝔫𝔦𝔣𝔢𝚡 ☬" : "Azianou Jacques";
    const tickColor = isNerfed ? "#e8a807" : "#00aaff";

    // Close lightbox on click outside
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

    // Close lightbox on ESC key
    useEffect(() => {
        function handleKey(e: KeyboardEvent) {
            if (e.key === "Escape") setLightboxOpen(false);
        }
        if (lightboxOpen) document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, [lightboxOpen]);

    return (
        <>
            <div className="grid-holder">
                <div className="grid"></div>
            </div>
            <div className="line" />

            <section className="hero flex justify-between padding" aria-labelledby="hero-title">
                <div className="flex gap-3.5">
                    {/* Profile Image */}
                    <figure className="holder relative w-24 h-24 rounded-2xl p-1 cursor-pointer">
                        <Image
                            key={glitchKey}
                            src={profileImage}
                            alt="Profile Image"
                            width={80}
                            height={80}
                            className={`rounded-xl ${isGlitching ? "glitch-image" : ""}`}
                            onClick={() => setLightboxOpen(true)}
                        />
                    </figure>

                    {/* Audio */}
                    <audio preload="auto" ref={glitchAudioRef} className="hidden">
                        <source src="/assets/sound/glitch.wav" type="audio/wav" />
                    </audio>
                    <audio preload="auto" ref={bubbleAudioRef} className="hidden">
                        <source src="/assets/sound/woosh.mp3" type="audio/mp3" />
                    </audio>

                    {/* Info + Button */}
                    <div className="flex flex-col justify-between items-start">
                        <button
                            type="button"
                            onClick={handleToggle}
                            className="group text-foreground change text-2xl"
                            aria-label="Change personality"
                        >
                            {isNerfed ? "C" : "Z"}
                        </button>

                        <div className="flex flex-col gap-0">
                            <div className="flex items-center">
                                <h1
                                    key={glitchKey + "-text"}
                                    className={`main-img w-full h-full rounded-xl ${isGlitching ? "glitch-text" : ""}`}
                                    id="hero-title"
                                >
                                    {name}
                                </h1>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    className="md:mt-0.75 mt-1.5 ml-0.5 md:ml-1 tick"
                                    style={{ fill: tickColor }}
                                >
                                    <title>Verified</title>
                                    <path d="M17.999,10c0-1.097-.567-2.113-1.465-2.707.215-1.054-.103-2.174-.878-2.95-.775-.776-1.896-1.094-2.95-.878-.593-.897-1.609-1.464-2.706-1.464s-2.113.567-2.706,1.464c-1.053-.216-2.174.102-2.95.878s-1.093,1.896-.878,2.949c-.897.593-1.465,1.61-1.465,2.707s.567,2.113,1.465,2.707c-.215,1.054.103,2.174.878,2.95s1.898,1.092,2.95.878c.593.897,1.609,1.464,2.706,1.464s2.113-.568,2.706-1.465c1.059.214,2.176-.103,2.95-.878.776-.776,1.094-1.896.878-2.95.897-.593,1.465-1.609,1.465-2.707Zm-4.218-1.875l-4,5c-.178.222-.442.358-.726.374-.019,0-.037.001-.056.001-.265,0-.52-.105-.707-.293l-2-2c-.391-.391-.391-1.023,0-1.414s1.023-.391,1.414,0l1.21,1.21,3.302-4.127c.347-.43.975-.502,1.406-.156.431.345.501.974.156,1.405Z" />
                                </svg>
                            </div>

                            <div className="relative h-5">
                                <p
                                    className={`text-[#71717b] text-sm font-light absolute inset-0 transition-all duration-1200 ease-out ${visibleIndex >= 0 ? "opacity-0 blur-sm" : "opacity-100 blur-0"
                                        }`}
                                    aria-busy
                                    aria-hidden
                                >
                                    Open Source Contributor
                                </p>

                                {phrases.map((phrase, i) => (
                                    <p
                                        key={i}
                                        className={`text-mutedForeground text-sm font-light absolute inset-0 transition-all duration-1200 ease-out ${i === visibleIndex ? "opacity-100 blur-0" : "opacity-0 blur-sm"
                                            }`}
                                    >
                                        {phrase}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>


                <aside className="flex items-end justify-between flex-col">
                    <button
                        type="button"
                        className="group night flex items-center justify-center"
                        aria-label="Toggle theme"
                    >
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            className="mb-1"
                            strokeWidth="0"
                            viewBox="0 0 512 512"
                            height="12"
                            width="12"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M448 256c0-106-86-192-192-192l0 384c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
                        </svg>
                    </button>

                    <div className="flex items-center gap-1" aria-label="Profile views">
                        <Image src="/Eye.svg" alt="eye icon" width={18} height={18} className="opacity-50" />
                        <p className="text-mutedForeground">2.2k</p>
                    </div>
                </aside>
            </section>

            <ImagePIP />

            {/* Lightbox Modal */}
            {lightboxOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                    <div ref={lightboxRef} className="relative max-w-[90vw] max-h-[90vh]">
                        <Image
                            src={profileImage}
                            alt="Profile Preview"
                            width={400}
                            height={400}
                            className="rounded-xl object-contain"
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
