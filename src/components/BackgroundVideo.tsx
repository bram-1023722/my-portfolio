import { useEffect, useRef, useState } from "react";

export default function BackgroundVideo() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [finished, setFinished] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        let slowing = false;
        let rafId: number;

        function handleTimeUpdate() {
            if (!video.duration || finished) return;

            const remaining = video.duration - video.currentTime;
            // Start slowing 1.3s before end
            if (remaining <= 1.3 && !slowing) {
                slowing = true;
                slowDown();
            }
        }

        function slowDown() {
            if (!video) return;
            const remaining = video.duration - video.currentTime;

            // Calculate new playback rate (goes from 1 to 0)
            let rate = Math.max(remaining / 1.3, 0.08); // don't go too slow
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
        <div
            className="fixed inset-0 -z-10 overflow-hidden bg-center bg-cover"
            style={{ backgroundImage: "url('/background.jpg')" }}
        >
            <video
                ref={videoRef}
                src="/background.mp4"
                autoPlay
                muted
                playsInline
                className={`w-full h-full object-cover transition-opacity duration-[3000ms] ${finished ? "opacity-0" : "opacity-100"}`}
            />
        </div>
    );
}
