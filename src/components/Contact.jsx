import PageWrapper from "./PageWrapper";
import Reveal from "../utils/Reveal";
import {AiFillMail} from "react-icons/ai";

const Contact = ({}) => {

    return (
        <PageWrapper>
            <section className={"relative z-10 max-w-[1150px] mx-auto py-[7.2rem] sm:py-[9.6rem] overflow-hidden"}>
                <div className={"max-w-[750px] m-auto"}>
                    <Reveal width="100%">
                        <h4 className={"text-lg sm:text-xl text-center font-extrabold leading-none"}>
                            Contact<span className={"text-brandColor"}>.</span>
                        </h4>
                    </Reveal>
                    <Reveal width="100%">
                        <p className={"text-center text-xs font-extralight my-[2.4rem] mx-[1rem]  "}>
                            Echipa noastră <span className={"text-brandColor"}>dedicată</span> este pregătită să vă ofere soluții personalizate
                            pentru nevoile dumneavoastră. Pentru detalii suplimentare vă rugăm să ne contactați la adresa de email.
                        </p>
                    </Reveal>
                    <Reveal width="100%">
                        <a href="mailto:danmartin_25@icloud.com">
                            <div
                                style={{
                                    transition: '0.25s color'
                                }}
                                className={"flex items-center hover:text-brandColor py-2 h-auto justify-center gap-[0.8rem] text-xs sm:text-sm m-auto"}
                            >
                                <AiFillMail size="2.4rem" />
                                <span className={"hover:text-brandColor"}>danmartin_25@icloud.com</span>
                            </div>
                        </a>
                    </Reveal>
                </div>
            </section>
        </PageWrapper>
    )
}

export default Contact