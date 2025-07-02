import { motion } from "framer-motion";

export default function Navbar({ visible }: { visible: boolean }) {
    return (
        <motion.nav
            initial={false}
            animate={{ opacity: visible ? 1 : 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full flex items-center justify-between px-10 py-4 z-50 pointer-events-none backdrop-blur-md"
            style={{
                background: `
                    linear-gradient(
                        to right,
                        rgba(32,32,32,0.36) 0%,
                        rgba(220,220,220,0.44) 48%,
                        rgba(220,220,220,0.44) 52%,
                        rgba(32,32,32,0.36) 100%
                    )
                `,
                boxShadow: "0 2px 24px 0 rgba(0,0,0,0.12)",
                WebkitBackdropFilter: "blur(16px)",
                backdropFilter: "blur(16px)",
            }}
        >
            <div className="pointer-events-auto">
                <span
                    className="font-bold uppercase text-2xl text-white"
                    style={{
                        textShadow: "0 0 30px #fff, 0 0 60px #ffe066, 0 0 120px #ffe066",
                        filter: "brightness(1.35)",
                        letterSpacing: "0.05em",
                    }}
                >
                    BRAM SMIDT
                </span>
            </div>
            <div className="flex gap-8 pointer-events-auto">
                <a href="#about" className="text-white font-semibold hover:underline transition">About me</a>
                <a href="#work" className="text-white font-semibold hover:underline transition">My work</a>
                <a href="#contact" className="text-white font-semibold hover:underline transition">Contact</a>
            </div>
        </motion.nav>
    );
}
