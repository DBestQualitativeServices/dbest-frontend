import {motion} from "framer-motion";
import {useTranslation} from "react-i18next"

const SideBar = () => {
    const {t} = useTranslation()
    const navLinks = (t('navbar', { returnObjects: true }))
    console.log(navLinks)

    return (
        <motion.nav
            initial={{x: -70}}
            animate={{x: 0}}
            transition={{duration: 0.5}}
            className={"bg-backgroundDark h-[100%] min-h-screen  sticky top-0 right-0 z-20 flex flex-col items-center"}
            style={{
                msOverflowStyle: 'none',
                scrollbarWidth: 'none'
            }}
        >
            <div className={"fixed flex flex-col items-center overflow-hidden"}
                 style={{
                     msOverflowStyle: 'none',
                     scrollbarWidth: 'none'
                 }}>
                 <span
                     className={"flex-shrink-0 py-[0.5rem] px-[0.4rem] text-sm font-extrabold leading-none w-45 h-45 flex items-center justify-center bg-background rounded-md my-7"}>
                  d<span className={"text-sm font-extrabold leading-none text-brandColor"}>B</span>
                </span>
                {navLinks.length && navLinks.map((navLink, index) => {
                    return (
                        <motion.a
                            key={index}
                            initial={{x: -70}}
                            animate={{x: 0}}
                            transition={{duration: 0.5, delay: 0.1 + 0.1 * index}}
                            href={`/${navLink.id}`}
                            className={"h-100 flex-shrink-0 text-xs font-extralight flex items-center justify-center opacity-50 border-r-2 border-transparent py-5 transition-all w-full hover:bg-brandColor hover:text-background hover:bg-opacity-70 rounded-sm hover:border-r-2 hover:border-background hover:opacity-100"}
                            style={{
                                writingMode: 'vertical-rl'
                            }}
                        >
                            {navLink.name}
                        </motion.a>
                    )
                })}

            </div>
        </motion.nav>
    );
};

export default SideBar
