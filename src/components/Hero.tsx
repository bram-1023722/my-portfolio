import { motion } from "framer-motion";

const firstLine = "PROJECTS MADE, DISPLAYED AND PUBLISHED";
const secondLine = "BY BRAM SMIDT";

const popUpAnimation = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.6,
            ease: [0.7, 0, 0.84, 0]
        }
    })
};

export default function Hero() {
    return (
        <div className="w-full flex flex-col items-center justify-start pt-6">
            <div className="flex justify-center">
                <div className="text-center leading-[1.1]">
                    {firstLine.split(" ").map((word, idx) => (
                        <motion.span
                            key={`first-${idx}`}
                            className="text-7xl font-bold text-white uppercase tracking-tight -mb-2 mr-4 inline-block"
                            variants={popUpAnimation}
                            initial="hidden"
                            animate="visible"
                            custom={idx}
                        >
                            {word}
                        </motion.span>
                    ))}
                </div>
            </div>
            <div className="flex justify-center mt-4">
                <div className="text-center leading-[1.1]">
                    {secondLine.split(" ").map((word, idx) => (
                        <motion.span
                            key={`second-${idx}`}
                            className="text-7xl font-bold uppercase tracking-tight -mb-2 mr-4 inline-block text-white"
                            variants={popUpAnimation}
                            initial="hidden"
                            animate="visible"
                            custom={firstLine.split(" ").length + idx}
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
    );
}
