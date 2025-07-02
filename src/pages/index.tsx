import { useState } from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
    const [showNav, setShowNav] = useState(false);

    return (
        <>
            <Navbar visible={showNav} />
            <Hero onTextFade={(opacity) => setShowNav(opacity < 1)} />
            <div style={{ height: "100vh" }} />
            <main className="relative z-10 bg-white">
                {/* About Me */}
                <section id="about" className="min-h-screen flex flex-col items-center justify-center px-8 py-24">
                    <h2 className="text-4xl font-bold mb-6">About Me</h2>
                    <p className="max-w-2xl text-lg text-gray-700 text-center">
                        Hi, I’m Bram Smidt, a passionate software developer. I create, build, and publish projects with a love for modern design and solid engineering.<br />
                        (Add a longer story, your skills, and your personality here!)
                    </p>
                </section>
                {/* My Work */}
                <section id="work" className="min-h-screen flex flex-col items-center justify-center px-8 py-24 bg-gray-100">
                    <h2 className="text-4xl font-bold mb-6">My Work</h2>
                    <p className="max-w-2xl text-lg text-gray-700 text-center">
                        Check out some of the projects I’ve worked on.<br />
                        (Showcase projects, links, images, or cards here!)
                    </p>
                </section>
                {/* Contact */}
                <section id="contact" className="min-h-screen flex flex-col items-center justify-center px-8 py-24">
                    <h2 className="text-4xl font-bold mb-6">Contact</h2>
                    <p className="max-w-2xl text-lg text-gray-700 text-center">
                        Want to connect or work together? Reach out!<br />
                        (Put your email, a contact form, or socials here.)
                    </p>
                </section>
            </main>
        </>
    );
}
