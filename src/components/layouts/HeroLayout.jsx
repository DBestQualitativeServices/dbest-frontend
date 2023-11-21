import MainButton from "../ui/MainButton";
import DetailedImageSlider from "../ui/DetailedImageSlider";
import SimpleAnimation from "../utils/SimpleAnimation";
import {useNavigate} from "react-router";

const HeroLayout = ({heroContent}) => {
    const navigate = useNavigate()
    const handleRedirect = () => {
        return navigate("/contact")
    }

    return (
        <div className={"flex flex-col min-h-screen min-w-screen lg:flex-row items-stretch"}>
            <div className={"flex flex-col w-full lg:w-1/2 gap-3 justify-center"}>
                <SimpleAnimation styles={"flex flex-col w-full gap-3 justify-center"}>
                    <h1 className={"mx-8 md:mx-16 mt-8 text-phoneTripleLarge text-accent md:text-pcTripleLarge font-bold leading-tight"}>
                        {heroContent.title}
                    </h1>

                    <h2 className={"mx-8 md:mx-16 max-w-[500px] text-phoneSmall md:text-pcMedium"}>
                        {heroContent.subtitle}
                    </h2>
                </SimpleAnimation>
                <SimpleAnimation styles={"mx-8 md:mx-16 mb-8"}>
                    <MainButton textContent={heroContent.callToAction} onClick={handleRedirect}/>
                </SimpleAnimation>
            </div>
            <div className={"w-full lg:w-1/2 flex justify-center"}>
                <DetailedImageSlider slides={heroContent.gallery}/>
            </div>
        </div>
    )
}

export default HeroLayout