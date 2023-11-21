import Navbar from "../ui/Navbar";
import {useTranslation} from "react-i18next";
import SimpleAnimation from "../utils/SimpleAnimation";
import BottomBanner from "../ui/BottomBanner";

const Contact = () => {
    const {t} = useTranslation()
    const navbar = t('navbar', { returnObjects: true })
    const contact = t('contact', { returnObjects: true })


    return (
        <div
            className={"min-w-screen min-h-screen text-darkShade bg-whiteShade selection:text-whiteShade selection:bg-accent"}>
            <Navbar navContent={navbar}/>
            <main className={"relative min-w-screen"}>
                <section className={"relative z-10 max-w-[1150px] mx-auto py-[7.2rem] sm:py-[9.6rem] overflow-hidden"}>
                    <div className={"max-w-[750px] m-auto"}>
                        <SimpleAnimation>
                            <h4 className={"text-phoneTripleLarge sm:text-pcTripleLarge  text-center font-extrabold leading-none"}>
                                {contact.main.title}<span className={"text-accent"}>.</span>
                            </h4>
                        </SimpleAnimation>
                        <SimpleAnimation>
                            <p className={"text-center text-pcMedium font-extralight my-[2.4rem] mx-[1rem]  "}>
                                {contact.main.subTitle}
                            </p>
                        </SimpleAnimation>
                        <SimpleAnimation>
                            <a href="mailto:db@dbest.ro">
                                <div
                                    style={{
                                        transition: '0.25s color'
                                    }}
                                    className={"flex items-center hover:text-accent py-2 h-auto justify-center gap-[0.8rem] text-phoneMedium sm:text-pcMedium m-auto"}
                                >
                                    <span className={"hover:text-brandColor"}>db@dbest.ro</span>
                                </div>
                            </a>
                        </SimpleAnimation>
                    </div>
                </section>
            </main>
            <BottomBanner />
        </div>
    )
}

export default Contact