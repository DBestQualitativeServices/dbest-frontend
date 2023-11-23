import SimpleAnimation from "../utils/SimpleAnimation";
import MainButton from "../ui/MainButton";
import React from "react";
import { useNavigate } from "react-router";


const CallToAction = ({sectionContent}) => {
    const navigate = useNavigate()
    const handleRedirect = () => {
      return navigate("/contact")
    }
    return (
        <div className={"flex flex-col lg:flex-row items-center justify-center items-stretch"}>
            <div className={"w-full lg:w-1/2"}>
                <div className={"mx-8 md:mx-16 mt-40 mb-20"}>
                    <div className={"w-full flex flex-col gap-3"}>
                        <SimpleAnimation styles={"flex flex-col items-start gap-3"}>
                            <h2 className={"text-phoneTripleLarge md:text-pcTripleLarge text-accent font-bold leading-tight"}>{sectionContent.title}</h2>
                        </SimpleAnimation>
                        <SimpleAnimation styles={"flex justify-center items-center"}>
                            <h3 className={"text-phoneLarge md:text-pcLarge italic"}>{sectionContent.subtitle}</h3>
                        </SimpleAnimation>
                        <div>
                            <MainButton textContent={sectionContent.callToAction} onClick={handleRedirect}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"flex justify-center items-center lg:w-1/2" }>
                <img src={sectionContent.photoUrl} alt={sectionContent.photoAlt} className={"w-[65%] lg:w-full"}/>
            </div>
        </div>
    )
}

export default CallToAction