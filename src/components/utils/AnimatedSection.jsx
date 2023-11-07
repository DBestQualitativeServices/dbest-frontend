// Import necessary components and hooks
import {motion, useAnimation} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const AnimatedSection = ({ customStyles, children, animateTo }) => {
    const mainControls = useAnimation();
    const ref = useRef(null);
    const [isInView, setIsInView] = useState(false); // Add a state for checking if the component is in view

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                    } else {
                        setIsInView(false);
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        const handleResize = () => {
            if (ref.current) {
                const { width, height } = ref.current.getBoundingClientRect();
                if (width > 0 && height > 0) {
                    if (window.innerWidth > width) {
                        setIsInView(true);
                    } else {
                        setIsInView(false);
                    }
                }
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    let initialAnimation = { y: 75, opacity: 0 };
    let animateAnimation = { y: 0, opacity: 1 };

    if (animateTo === "top") {
        initialAnimation = { y: 75, opacity: 0 };
        animateAnimation = { y: 0, opacity: 1 };
    } else if (animateTo === "bottom") {
        initialAnimation = { y: -75, opacity: 0 };
        animateAnimation = { y: 0, opacity: 1 };
    } else if (animateTo === "right") {
        initialAnimation = { x: -75, opacity: 0 };
        animateAnimation = { x: 0, opacity: 1 };
    } else if (animateTo === "left") {
        initialAnimation = { x: 75, opacity: 0 };
        animateAnimation = { x: 0, opacity: 1 };
    }

    return (
        <motion.div
            ref={ref} // Add the ref to the motion div
            initial={initialAnimation}
            animate={isInView ? animateAnimation : initialAnimation} // Control the animation based on the isInView state
            transition={{ duration: 0.5, delay: 0.25 }}
            className={customStyles}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedSection;
