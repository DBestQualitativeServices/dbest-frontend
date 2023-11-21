import SimpleAnimation from "../utils/SimpleAnimation";

const InlineTitle = ({sectionContent}) => {

    return (
        <div className={"flex flex-col lg:flex-row  w-full"}>
            <div className={"w-full lg:w-1/2 mt-20"}>
                <SimpleAnimation styles={"flex flex-col items-start mx-8 mt-8 md:mx-16 gap-3"}>
                    <h4 className={"text-phoneMedium md:text-pcMedium"}>{sectionContent.moto} <span
                        className={"text-phoneLarge md:text-pcLarge"}>&#8765;</span></h4>
                    <h2 className={"text-phoneDoubleLarge md:text-pcDoubleLarge text-accent font-bold leading-tight"}>{sectionContent.title}</h2>
                </SimpleAnimation>
            </div>
            <div className={"w-full lg:w-1/2 flex justify-center items-center"}>
                <SimpleAnimation styles={"flex justify-center items-center mx-8 mt-8 md:mx-16 lg:mt-40"}>
                    <h3 className={"text-phoneMedium md:text-pcMedium italic"}>{sectionContent.subtitle}</h3>
                </SimpleAnimation>
            </div>
        </div>
    )
}

export default InlineTitle