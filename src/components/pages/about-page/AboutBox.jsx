import AnimatedSection from "../../utils/AnimatedSection";


const AboutBox = ({ customStyles, children, animateTo }) => {

    return (
        <AnimatedSection
            customStyles={`${customStyles} p-2 md:absolute -left-[85px] w-full sm:w-[400px] md:w-[300px] h-[175px] bg-brandColor dark:bg-brandColor rounded-lg shadow-2xl flex items-center justify-center`}
            animateTo={animateTo}
        >
            {children}
        </AnimatedSection>
    );
};

export default AboutBox;