import {useTranslation} from 'react-i18next';
import SimpleAnimation from "../utils/SimpleAnimation";
import Navbar from "../ui/Navbar";
import BottomBanner from "../ui/BottomBanner";

const Services = ({}) => {
    const {t} = useTranslation();
    const navbar = t('navbar', { returnObjects: true })
    const services = t('services', {returnObjects: true});

    return (
        <main
            className={"min-w-screen min-h-screen text-darkShade bg-whiteShade selection:text-whiteShade selection:bg-accent"}>
            <Navbar navContent={navbar}/>
            <section className={'relative z-10 mx-auto max-w-[1500px] py-[7.2rem] overflow-hidden'}>
                <div className={'mx-[1rem]'}>
                    <SimpleAnimation styles={'text-phoneTripleLarge sm:text-pcTripleLarge text-center font-extrabold leading-none'}>
                        {services.title}
                        <span className={'text-accent'}>.</span>
                    </SimpleAnimation>

                    <div className={'py-[3.1rem]'}></div>

                    {services.content.length !== 0 &&
                    services.content.map((service, index) => {
                        return (
                            <div key={index}>
                                <SimpleAnimation styles={`${index % 2 !== 0 ? 'flex-row' : 'flex-row-reverse'} flex items-center gap-[2.4rem] mb-[2.4rem]`}>
                                    <div className={'w-full h-[1px] bg-darkShade opacity-30'}/>
                                    <h3>
                                        <div className={'w-auto text-phoneDoubleLarge sm:text-pcDoubleLarge font-extrabold text-end'}>
                                            {service.name}
                                            <span className={'text-accent'}>?</span>
                                        </div>
                                    </h3>
                                </SimpleAnimation>

                                <div className={'-mt-[1.2rem] mb-[2.4rem]'}>
                                    <SimpleAnimation styles={index % 2 === 0 ? 'flex' : 'flex justify-end'}>
                                        <span
                                            className={`md:w-[80%] text-accent text-phoneMedium sm:text-pcMedium italic font-bold ${index % 2 === 0 ? 'text-start' : 'text-end'}`}>
                                          {service.quote}
                                        </span>
                                    </SimpleAnimation>
                                </div>

                                <div className={'-mt-[1.2rem] mb-[4.8rem]'}>
                                    <SimpleAnimation styles={"flex"}>
                                        <span
                                            className={'text-phoneMedium sm:text-pcMedium font-thin text-justify'}>{service.description}</span>
                                    </SimpleAnimation>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
            <BottomBanner />
        </main>
    );
};

export default Services;
