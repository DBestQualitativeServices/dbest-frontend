import AboutBox from "./AboutBox";
import {useEffect, useState} from "react";

const FourBoxLayout = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setScreenWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize); // add event listener for resize

        return () => {
            window.removeEventListener("resize", handleResize); // remove event listener on component unmount
        };
    }, []);

    return (
        <div
            className='w-full xl:w-1/2 md:bg-backgroundDark md:dark:bg-darkBackgroundDark text-textColor dark:text-darkTextColor rounded-lg flex min-h-[600px]  flex-col md:flex-row gap-[1.25rem]'>
            <div
                className="bg-background dark:bg-darkBackground md:w-[15%] lg:w-[32.5%] xl:hidden md:block hidden"></div>
            <div
                className="relative w-full md:w-[300px] flex flex-col items-center justify-start md:items-start gap-[1.25rem]">
                <div className="w-full flex justify-end">
                    <AboutBox id="c1" customStyles="top-[100px]" animateTo={screenWidth < 845 ? "right":"bottom"}>
                        C1
                    </AboutBox>
                </div>
                <div className="w-full flex justify-start">
                    <AboutBox id="c2" customStyles="top-[295px]" animateTo={screenWidth < 845 ? "left":"right"}>
                        C2
                    </AboutBox>
                </div>
            </div>

            <div
                className="relative w-full md:w-[300px] flex flex-col items-center md:items-start gap-[1.25rem]">
                <div className="w-full flex justify-end">
                    <AboutBox id="c3" customStyles="top-[140px]" animateTo={screenWidth < 845 ? "right":"left"}>
                            C3
                    </AboutBox>
                </div>
                <div className="w-full flex justify-start">
                    <AboutBox id="c4" customStyles="top-[335px]" animateTo={screenWidth < 845 ? "left":"top"}>
                        C4
                    </AboutBox>
                </div>
            </div>
        </div>

    )
}

export default FourBoxLayout