import React, {useEffect, useRef, useState} from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Reveal = ({ children, width = "fit-content", type }) => {
    const [height, setHeight] = useState(0)
    const mainControls = useAnimation();
    const slideControls = useAnimation();

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            slideControls.start("visible");
            mainControls.start("visible");
        } else {
            slideControls.start("hidden");
            mainControls.start("hidden");
        }

        // Extracting the height
        setHeight(ref.current.offsetHeight)
    }, [isInView, mainControls, slideControls]);

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                {children}
            </motion.div>
            {type && type==="complex" && (
                <motion.div
                    variants={{
                        hidden: { left: 0 },
                        visible: { left: "100%" },
                    }}
                    initial="hidden"
                    animate={slideControls}
                    transition={{ duration: 0.5, ease: "easeIn" }}
                    className={"absolute h-full top-4 bottom-4 left-0 right-0 bg-brandColor z-20 h-full"}
                />
            )}

        </div>
    );
};

export default Reveal
