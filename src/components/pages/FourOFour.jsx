import Navbar from "../ui/Navbar";
import {useTranslation} from "react-i18next";
import BottomBanner from "../ui/BottomBanner";

const ForOFour = () => {
    const {t} = useTranslation()
    const navbar = t('navbar', { returnObjects: true })
    const fourOFour = t('404', { returnObjects: true })


    return (
        <div
            className={"relative w-screen h-screen min-w-screen min-h-screen text-darkShade selection:text-whiteShade selection:bg-accent overflow-hidden"}>
            <Navbar navContent={navbar}/>
            <img src={"https://i.imgur.com/IfXHTgO.jpg"} alt={"404 Error"} className={"absolute w-full -z-10 h-full object-cover object-center opacity-90 rotate-[180deg]"}/>
            <main className={"relative text-phoneLarge sm:text-pcLarge flex text-center flex-col gap-[20px] items-center mt-20 mx-5 sm:mx-20 justify-center items-start text-whiteShade font-bold"}>
                <h3 className={""}>404</h3>
                <h1 className={"text-phoneTripleLarge sm:text-pcTripleLarge"}>{fourOFour.title}</h1>
                <h2 className={"text-phoneDoubleLarge sm:text-pcDoubleLarge"}>{fourOFour.subtitle}</h2>
                <div className={"flex"}>
                    <span className={"rotate-[180deg] mr-3 mt-[2px]"}>&#x27A4;</span>
                    <a href={'/home'} className={"font-thin underline"}>{fourOFour.button}</a>
                </div>

            </main>
            <BottomBanner />
        </div>
    )
}

export default ForOFour