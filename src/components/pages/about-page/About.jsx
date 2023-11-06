import PageWrapper from "../../utils/PageWrapper";

const About = ({}) => {

    return (
        <PageWrapper>
            <div id="home-main-grid-wrapper"
                 className="min-h-screen flex items-stretch justify-center text-textColor dark:text-darkTextColor">
                <div className="my-20 flex-1 flex items-stretch justify-center">
                    <div id="about-main-grid"
                         className="flex-1 flex flex-col xl:flex-row m-5 max-w-[1400px]">

                        <div id="values-title-wrapper" className='w-full xl:w-1/2'>

                        </div>

                        <div id="values-content-wrapper"
                             className='w-full xl:w-1/2 md:bg-backgroundDark md:dark:bg-darkBackgroundDark text-textColor dark:text-darkTextColor rounded-lg flex min-h-[600px]  flex-col md:flex-row gap-[1.25rem]'>
                            <div className="bg-background dark:bg-darkBackground md:w-[15%] lg:w-[32.5%] xl:hidden md:block hidden">

                            </div>
                            <div className="relative w-full md:w-[300px] flex flex-col items-center md:items-start gap-[1.25rem]">
                                <div
                                    className="md:absolute -left-[95px] top-[100px] w-[300px] h-[175px] bg-background dark:bg-darkBackground rounded-lg shadow-2xl flex items-center justify-center">C1
                                </div>
                                <div
                                    className="md:absolute -left-[95px] top-[295px] w-[300px] h-[175px] bg-background dark:bg-darkBackground rounded-lg shadow-2xl flex items-center justify-center">C2
                                </div>
                            </div>
                            <div className="relative w-full md:w-[300px] flex flex-col items-center md:items-start gap-[1.25rem]">
                                <div
                                    className="md:absolute -left-[95px] top-[140px] w-[300px] h-[175px] bg-background dark:bg-darkBackground rounded-lg shadow-2xl flex items-center justify-center">C3
                                </div>
                                <div
                                    className="md:absolute -left-[95px] top-[335px] w-[300px] h-[175px] bg-background dark:bg-darkBackground rounded-lg shadow-2xl flex items-center justify-center">C4
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageWrapper>
    )
}

export default About