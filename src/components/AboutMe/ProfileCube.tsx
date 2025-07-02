import { useEffect, useState } from "react";
import styles from "./ProfileCube.module.css";

const images = [
    "/profile1.jpg",
    "/profile2.jpg",
    "/profile3.jpg",
    "/profile4.jpg",
];

export default function ProfileCube() {
    const [face, setFace] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setFace(f => (f + 1) % 4);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const rotationY = face * -90;

    return (
        <div className={styles.scene}>
            <div
                className={styles.cube}
                style={{ transform: `rotateY(${rotationY}deg)` }}
            >
                <div className={`${styles.face} ${styles.front}`}>
                    <img src={images[0]} alt="Profile 1" />
                </div>
                <div className={`${styles.face} ${styles.right}`}>
                    <img src={images[1]} alt="Profile 2" />
                </div>
                <div className={`${styles.face} ${styles.back}`}>
                    <img src={images[2]} alt="Profile 3" />
                </div>
                <div className={`${styles.face} ${styles.left}`}>
                    <img src={images[3]} alt="Profile 4" />
                </div>
            </div>
        </div>
    );
}
