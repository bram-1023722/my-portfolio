import { useState } from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import AboutMe from "@/components/AboutMe";
import MyWork from "@/components/MyWork";
import Contact from "@/components/Contact";

export default function Home() {
    const [showNav, setShowNav] = useState(false);

    return (
        <>
            <Navbar visible={showNav} />
            <Hero onTextFade={opacity => setShowNav(opacity < 1)} />
            <div style={{ height: "100vh" }} />
            <main className="relative z-10 w-full bg-white">
                <AboutMe />
                <MyWork />
                <Contact />
            </main>
        </>
    );
}
