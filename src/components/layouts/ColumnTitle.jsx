import SimpleAnimation from "../utils/SimpleAnimation";

const ColumnTitle = ({sectionContent}) => {

    return (
        <div className={"mx-8 md:mx-16 my-20"}>
            <div className={"w-full max-w-[700px] flex flex-col gap-3"}>
                <SimpleAnimation styles={"flex flex-col items-start gap-3"}>
                    <h4 className={"text-phoneMedium md:text-pcMedium"}>{sectionContent.moto} <span
                        className={"text-phoneLarge md:text-pcLarge"}>&#8765;</span></h4>
                    <h2 className={"text-phoneDoubleLarge md:text-pcDoubleLarge text-accent font-bold leading-tight"}>{sectionContent.title}</h2>
                </SimpleAnimation>
                <SimpleAnimation styles={"flex justify-center items-center"}>
                    <h3 className={"text-phoneMedium md:text-pcMedium italic"}>{sectionContent.subtitle}</h3>
                </SimpleAnimation>
            </div>
        </div>
    )
}

export default ColumnTitle