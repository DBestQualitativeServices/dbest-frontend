import PageWrapper from "../../utils/PageWrapper";
import FourBoxLayout from "./FourBoxLayout";
import HomeBox from "../home-page/HomeBox";
import AnimatedSection from "../../utils/AnimatedSection";

const About = () => {

    return (
        <PageWrapper>
            <div className="min-h-screen flex items-stretch justify-center text-textColor dark:text-darkTextColor">
                <div className="my-20 flex-1 flex flex-col items-stretch justify-center">
                    <div className="flex-1 flex flex-col xl:flex-row m-5 max-w-[1400px]">
                        <div className='w-full mb-[1.25rem] xl:mb-0 xl:w-1/2 flex'>
                            <div
                                className="flex-1 min-h-[300px] flex flex-col items-start justify-center gap-[1.25rem]">
                                <AnimatedSection customStyles="min-h-[75px] w-full md:w-auto sm:min-w-[500px] md:ml-20 xl:ml-0" animateTo="right">
                                    <HomeBox id="values-title"
                                             customStyles="h-full w-full">
                                        Title
                                    </HomeBox>
                                </AnimatedSection>
                                <AnimatedSection customStyles="min-h-[200px] w-full md:w-auto sm:min-w-[450px] md:ml-20 xl:ml-0" animateTo="right">
                                    <HomeBox id="values-title"
                                             customStyles="h-full w-full">
                                        Description
                                    </HomeBox>
                                </AnimatedSection>
                                <div className="xl:block hidden xl:h-[50px]"></div>
                            </div>
                            <div className="xl:block hidden xl:w-[100px]"></div>
                        </div>
                        <FourBoxLayout/>
                    </div>
                    <div className="min-h-screen">

                    </div>
                </div>
            </div>
        </PageWrapper>
    )
}

export default About