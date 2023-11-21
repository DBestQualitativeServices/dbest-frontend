// Import necessary components and hooks
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const SimpleAnimation = ({ styles, children }) => {
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
                    setIsInView(true);
                } else {
                    setIsInView(false);
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

    let initialAnimation = { opacity: 0 };
    let animateAnimation = { opacity: 1 };

    useEffect(() => {
        if (!isInView) {
            ref.current.style.opacity = initialAnimation.opacity;
        }
    }, [isInView, initialAnimation]);

    return (
        <motion.div
            ref={ref}
            initial={initialAnimation}
            animate={isInView ? animateAnimation : initialAnimation}
            transition={{ duration: 0.5, delay: 0.15 }}
            className={styles}
        >
            {children}
        </motion.div>
    );
};

export default SimpleAnimation;
