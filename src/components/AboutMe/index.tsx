import ProfileCube from "./ProfileCube";
import AboutMeText from "./AboutMeText";

export default function AboutMe() {
    return (
        <section
            id="about"
            className="h-screen flex flex-row items-center justify-center gap-12 px-8 bg-white max-w-4xl mx-auto"
            // max-w-4xl = nice readable width, centered
            // mx-auto = center the section horizontally
        >
            <ProfileCube />
            <AboutMeText />
        </section>
    );
}
