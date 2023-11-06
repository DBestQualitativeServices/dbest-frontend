import PageWrapper from "../../utils/PageWrapper";

const Home = ({}) => {

    return (
        <PageWrapper>
            <div id="home-main-grid-wrapper"
                 className="min-h-screen flex items-stretch justify-center text-textColor dark:text-darkTextColor">
                <div className="my-20 flex-1 flex items-stretch justify-center">
                    <div id="home-main-grid"
                         className="flex-1 flex flex-col m-5 max-w-[1300px] gap-[1.25rem]">

                        <div id="c1-c2-c3-wrapper" className="flex flex-col lg:flex-row gap-[1.25rem]">
                            <div id="c1"
                                 className="bg-backgroundDark dark:bg-darkBackgroundDark rounded-lg w-full h-[230px] flex items-center justify-center">C1
                            </div>
                            <div id="c2-c3-wrapper"
                                 className="flex flex-col md:flex-row items-stretch flex-1 gap-[1.25rem]">
                                <div id="c2"
                                     className="flex-1 bg-backgroundDark dark:bg-darkBackgroundDark rounded-lg lg:w-[230px] lg:max-w-[230px] h-[230px] min-h-[230px] flex items-center justify-center">C2
                                </div>
                                <div id="c3"
                                     className="flex-1 bg-backgroundDark dark:bg-darkBackgroundDark rounded-lg lg:w-[230px] lg:max-w-[230px] h-[230px] min-h-[230px] flex items-center justify-center">C3
                                </div>
                            </div>
                        </div>

                        <div id="c4-c5-c6-c7-c8-c9-wrapper" className="flex flex-col-reverse lg:flex-row gap-[1.25rem]">
                            <div id="c4"
                                 className="bg-backgroundDark dark:bg-darkBackgroundDark rounded-lg aspect-[2/1] lg:aspect-square w-full lg:w-[460px] lg:h-[460px] flex items-center justify-center">C4
                            </div>
                            <div id="c5-c6-c7-c8-c9-wrapper" className="flex-col flex flex-1 gap-[1.25rem]">
                                <div id="c5-c6-wrapper" className="flex-col flex md:flex-row flex gap-[1.25rem]">
                                    <div
                                        className="flex-1 bg-backgroundDark dark:bg-darkBackgroundDark h-[200px] min-h-[200px] rounded-lg flex items-center justify-center">C5
                                    </div>
                                    <div
                                        className="flex-1 bg-backgroundDark dark:bg-darkBackgroundDark h-[200px] min-h-[200px] rounded-lg flex items-center justify-center">C6
                                    </div>
                                </div>
                                <div id="c7-c8-c9-wrapper" className="flex flex-1 items-stretch flex-row gap-[1.25rem]">
                                    <div id="c7-c9-wrapper" className="flex flex-col gap-[1.25rem]">
                                        <div id="c7" className="flex-1 bg-backgroundDark dark:bg-darkBackgroundDark rounded-lg w-[125px] h-[125px] lg:h-auto flex-1 flex items-center justify-center">C7</div>
                                        <div id="c9" className="flex-1 bg-backgroundDark dark:bg-darkBackgroundDark rounded-lg w-[125px] h-[125px] lg:h-auto flex-1 flex items-center justify-center">C9</div>
                                    </div>
                                    <div id="c8" className="flex-1 bg-backgroundDark dark:bg-darkBackgroundDark rounded-lg w-full h-[270px] lg:h-auto flex-1  flex items-center justify-center">C8</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </PageWrapper>
    )
}

export default Home