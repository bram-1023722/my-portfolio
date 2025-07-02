import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const firstLine = "PROJECTS MADE, DISPLAYED AND PUBLISHED";
const secondLine = "BY BRAM SMIDT";

export default function Hero({ onTextFade }: { onTextFade?: (opacity: number) => void }) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [finished, setFinished] = useState(false);

    // Scroll fade logic
    const [scrollY, setScrollY] = useState(0);
    const [heroHeight, setHeroHeight] = useState(800);
    useEffect(() => {
        setHeroHeight(window.innerHeight);
    }, []);
    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Fade starts after 60% of hero, fades over next 180px
    const FADE_START = heroHeight * 0.6;
    const FADE_DISTANCE = 180;
    const fadeProgress = (scrollY - FADE_START) / FADE_DISTANCE;
    const textOpacity = scrollY < FADE_START ? 1 : Math.max(0, 1 - fadeProgress);

    // Inform parent when textOpacity changes
    useEffect(() => {
        if (onTextFade) onTextFade(textOpacity);
    }, [textOpacity, onTextFade]);

    // Video slowdown logic
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
        let slowing = false;
        let rafId: number;
        function handleTimeUpdate() {
            if (!video || !video.duration || finished) return;
            const remaining = video.duration - video.currentTime;
            if (remaining <= 1.3 && !slowing) {
                slowing = true;
                slowDown();
            }
        }
        function slowDown() {
            if (!video) return;
            const remaining = video.duration - video.currentTime;
            const rate = Math.max(remaining / 1.3, 0.08);
            video.playbackRate = rate;
            if (remaining > 0.05) {
                rafId = requestAnimationFrame(slowDown);
            } else {
                setFinished(true);
                video.playbackRate = 1;
            }
        }
        video.addEventListener("timeupdate", handleTimeUpdate);
        return () => {
            video.removeEventListener("timeupdate", handleTimeUpdate);
            cancelAnimationFrame(rafId);
            if (video) video.playbackRate = 1;
        };
    }, [finished]);

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-center bg-cover w-full h-full" style={{ backgroundImage: "url('/background.jpg')" }}>
            <video
                ref={videoRef}
                src="/background.mp4"
                autoPlay
                muted
                playsInline
                className={`w-full h-full object-cover transition-opacity duration-[3000ms] ${finished ? "opacity-0" : "opacity-100"}`}
            />
            {/* HERO TEXT */}
            <div
                className="absolute w-full flex flex-col items-center justify-start pt-6 top-0 left-0 h-full pointer-events-none"
                style={{
                    opacity: textOpacity,
                    transition: "opacity 0.2s",
                }}
            >
                {/* First Line */}
                <div className="flex justify-center">
                    <div className="text-center leading-[1.1]">
                        {firstLine.split(" ").map((word, idx) => (
                            <motion.span
                                key={`first-${idx}`}
                                className="text-7xl font-bold text-white uppercase tracking-tight -mb-2 mr-4 inline-block"
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: idx * 0.2,
                                    duration: 0.6,
                                    ease: [0.7, 0, 0.84, 0] as [number, number, number, number],
                                }}
                            >
                                {word}
                            </motion.span>
                        ))}
                    </div>
                </div>
                {/* Second Line */}
                <div className="flex justify-center mt-4">
                    <div className="text-center leading-[1.1]">
                        {secondLine.split(" ").map((word, idx) => (
                            <motion.span
                                key={`second-${idx}`}
                                className="text-7xl font-bold uppercase tracking-tight -mb-2 mr-4 inline-block text-white"
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: (firstLine.split(" ").length + idx) * 0.2,
                                    duration: 0.6,
                                    ease: [0.7, 0, 0.84, 0] as [number, number, number, number],
                                }}
                                style={
                                    ["BRAM", "SMIDT"].includes(word)
                                        ? {
                                            textShadow: "0 0 30px #fff, 0 0 60px #ffe066, 0 0 120px #ffe066",
                                            filter: "brightness(1.35)",
                                        }
                                        : {}
                                }
                                whileHover={
                                    ["BRAM", "SMIDT"].includes(word)
                                        ? {
                                            textShadow: "0 0 60px #fff, 0 0 120px #ffe066, 0 0 160px #fff",
                                            filter: "brightness(1.8)",
                                            transition: { duration: 0.4 },
                                        }
                                        : {}
                                }
                            >
                                {word}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
