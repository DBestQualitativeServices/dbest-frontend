import PageWrapper from "../../utils/PageWrapper";
import HomeBox from "./HomeBox";

import development from "../../../../public/assets/media/development.jpg"
import security from "../../../../public/assets/media/security.jpg"
import support from "../../../../public/assets/media/support.jpg"
import creativity from "../../../../public/assets/media/creativity.jpg"

const Home = () => {

    return (
        <PageWrapper>
            <div className="min-h-screen flex items-stretch justify-center text-textColor dark:text-darkTextColor">
                <div className="my-20 flex-1 flex items-stretch justify-center">
                    <div className="flex-1 flex flex-col m-5 max-w-[1300px] gap-[1.25rem]">
                        <div className="flex flex-col lg:flex-row gap-[1.25rem]">
                            <HomeBox id="c1" customStyles="w-full h-[230px]">
                                C1
                            </HomeBox>
                            <div className="flex flex-col md:flex-row items-stretch flex-1 gap-[1.25rem]">
                                <HomeBox id="c2"
                                         customStyles="flex-1 lg:w-[230px] lg:max-w-[230px] h-[230px] min-h-[230px]">
C2
                                </HomeBox>
                                <HomeBox id="c3"
                                         customStyles=" flex-1 lg:w-[230px] lg:max-w-[230px] h-[230px] min-h-[230px]">
                                    <img src={security} alt={""} className="bg-background dark:bg-darkBackground w-full min-w-full h-[230px] object-center object-cover rounded-lg"/>
                                </HomeBox>
                            </div>
                        </div>

                        <div className="flex flex-col-reverse lg:flex-row gap-[1.25rem]">
                            <HomeBox id="c4"
                                     customStyles="aspect-[3/1.2] lg:aspect-square  w-full lg:w-[460px] lg:h-[460px]">
                                <img src={development} alt={""} className="bg-background aspect-[3/1.2] lg:aspect-square dark:bg-darkBackground w-full lg:w-[460px] lg:h-[460px] object-center object-cover rounded-lg"/>

                            </HomeBox>
                            <div className="flex-col flex flex-1 gap-[1.25rem]">
                                <div className="flex-col flex md:flex-row flex gap-[1.25rem]">
                                    <HomeBox id="c5" customStyles="flex-1 h-[200px] min-h-[200px]">
                                        C5
                                    </HomeBox>
                                    <HomeBox id="c6" customStyles="flex-1 h-[200px] min-h-[200px]">
                                        C6
                                    </HomeBox>
                                </div>
                                <div id="c7-c8-c9-wrapper" className="flex flex-1 items-stretch flex-col sm:flex-row gap-[1.25rem]">
                                    <div id="c7-c9-wrapper" className="flex flex-row sm:flex-col gap-[1.25rem]">
                                        <HomeBox id="c7" customStyles="flex-1 w-full sm:w-[125px] sm:h-[125px] lg:h-auto">
                                            <img src={support} alt={""} className="bg-background dark:bg-darkBackground w-full sm:w-[125px]  sm:h-[125px] object-center object-cover rounded-lg"/>
                                        </HomeBox>
                                        <HomeBox id="c9" customStyles="flex-1 w-full sm:w-[125px] sm:h-[125px] lg:h-auto">
                                            <img src={creativity} alt={""} className="bg-background dark:bg-darkBackground w-full sm:w-[125px] sm:h-[125px] object-center object-cover rounded-lg"/>

                                        </HomeBox>
                                    </div>
                                    <HomeBox id="c8" customStyles=" w-full h-[270px] lg:h-auto">
                                        C8
                                    </HomeBox>
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