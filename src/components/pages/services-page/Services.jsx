import PageWrapper from "../../utils/PageWrapper";
import Reveal from "../../utils/Reveal";
import SectionHeader from "../../utils/SectionHeader";
import {useTranslation} from "react-i18next";

const Services = ({}) => {
    const {t} = useTranslation()


    const services = (t('services', { returnObjects: true }))
    console.log(services)

    return (
        <PageWrapper>
            <section className={"relative z-10 max-w-[1150px] mx-auto py-[7.2rem] sm:py-[9.6rem] overflow-hidden"}>
                <div className={"mx-[1rem]"}>
                    <Reveal width="100%" type="complex">
                        <h4 className={"text-lg sm:text-xl text-center font-extrabold leading-none"}>
                            {services.title}<span className={"text-brandColor"}>.</span>
                        </h4>
                    </Reveal>

                    <div className={"py-[3.1rem]"}></div>

                    {services.content.length !== 0 && services.content.map((service, index) => {
                        return (
                            <div key={index}>
                                <SectionHeader title={service.name} dir={index % 2 === 0 ? "l" : "r"}/>

                                <div className={"-mt-[1.2rem] mb-[2.4rem]"}>
                                    <Reveal width="100%" type="complex">
                                        <div className={index % 2 === 0 ? "flex" : "flex justify-end"}>
                                            <span className={`md:w-[80%] text-brandColor text-xs sm:text-md font-bold ${index % 2 === 0 ? "text-start" : "text-end"}`}>
                                                {service.quote}
                                            </span>
                                        </div>
                                    </Reveal>
                                </div>

                                <div className={"-mt-[1.2rem] mb-[4.8rem]"}>
                                    <Reveal width="100%">
                                        <div className={"flex "}>
                                            <span className={"text-xs sm:text-md font-thin text-justify"}>
                                                {service.description}
                                            </span>
                                        </div>
                                    </Reveal>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </PageWrapper>
    )
}

export default Services