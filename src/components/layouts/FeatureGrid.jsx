import ColumnTitle from "./ColumnTitle";
import React from "react";
import SimpleAnimation from "../utils/SimpleAnimation";

const FeatureGrid = ({sectionContent}) => {

    return (
        <div className={"flex flex-col lg:flex-row items-stretch"}>
            <div className={"lg:min-w-[470px]"}>
                <ColumnTitle sectionContent={sectionContent.heading}/>
            </div>
            <div className={"mx-8 md:mr-16 mt-0 lg:mt-20"}>
                <div className={"w-full grid grid-cols-1 md:grid-cols-2 gap-x-10"}>
                    {sectionContent.content.length && sectionContent.content.map((section, index) => {
                        return (
                            <div key={index} className={"w-full"}>
                                <SimpleAnimation
                                    styles={"relative w-full flex  flex-col items-start "}>
                                    <div className={"w-full flex justify-center items-center"}>
                                        <img
                                            loading={"lazy"}
                                            src={section.photoUrl}
                                            className={"max-w-[290px] h-full aspect-square"}
                                        />
                                    </div>
                                    <h5 className={"text-phoneLarge md:text-pcLarge text-accent font-bold"}>
                                        {section.title}
                                    </h5>
                                    <h6 className={"text-phoneMedium md:text-pcMedium"}>
                                        {section.description}
                                    </h6>
                                </SimpleAnimation>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default FeatureGrid