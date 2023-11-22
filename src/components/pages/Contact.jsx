import {useTranslation} from "react-i18next";
import i18n from 'i18next';

import Navbar from "../ui/Navbar";
import SimpleAnimation from "../utils/SimpleAnimation";
import BottomBanner from "../ui/BottomBanner";
import ValidationPopup from "../ui/ValidationPopup";
import ContactForm from "../ui/ContactForm";
import {useContext, useState} from "react";
import {FetchContext} from "../../contexts/FetchContext";

const Contact = () => {
    const [popup, setPopup] = useState({title: "", message: "", visible: false})
    const [buttonStatus, setButtonStatus] = useState(false)
    const {sendContactForm} = useContext(FetchContext)
    const {t} = useTranslation()
    const navbar = t('navbar', {returnObjects: true})
    const contact = t('contact', {returnObjects: true})

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonStatus(true)
        const formData = {};
        for (let [key, value] of new FormData(e.target).entries()) {
            formData[key] = value
        }
        if (Object.values(formData).every(value => value === '')) {
            setButtonStatus(false)
            return setPopup(prevPopup => ({
                ...contact.validationPopup.error1,
                visible: true
            }));
        }
        for (let key in formData) {
            const field = contact.form.fields.find(field => field.id === key)
            if (formData[key].length > field.maxLength * 1) {
                setButtonStatus(false)
                return setPopup(prevPopup => ({
                    ...contact.validationPopup.error2,
                    message: t('contact.validationPopup.error2.message', {
                        parameter: field.label,
                        length: field.maxLength
                    }),
                    visible: true
                }));
            }
            if (formData[key].length <= field.minLength * 1) {
                const field = contact.form.fields.find(field => field.id === key)
                setButtonStatus(false)
                return setPopup(prevPopup => ({
                    ...contact.validationPopup.error3,
                    message: t('contact.validationPopup.error3.message', {
                        parameter: field.label,
                        length: field.minLength
                    }),
                    visible: true
                }));
            }

        }
        try {
            const submit = await sendContactForm(formData)
            if (submit && Object.entries(formData).every(([key, value]) => submit[key] === value)) {
                e.target.reset()
                setButtonStatus(false)
                return setPopup(prevPopup => ({
                    ...contact.validationPopup.success,
                    visible: true
                }));
            }
        } catch (error) {
            setButtonStatus(false)
            return setPopup(prevPopup => ({
                ...contact.validationPopup.failure,
                visible: true
            }));
        }
    }

    const removePopup = () => {
        if (popup.visible) {
            setPopup(prevPopup => ({...prevPopup, visible: false}));
        }
    };


    return (
        <div
            onClick={removePopup}
            className={"relative min-w-screen min-h-screen text-darkShade selection:text-whiteShade selection:bg-accent font-poppins"}>
            <Navbar navContent={navbar}/>
            <main className={"relative min-w-screen"}>
                <div className={"absolute w-full min-w-screen -z-10 top-0"}>
                    <img src={contact.main.photoUrl} alt={"Background image"}
                         className={"w-full min-h-[800px] opacity-30 object-center object-cover"}/>
                </div>
                <section className={" z-10 max-w-[1150px] mx-auto py-[7.2rem] sm:py-[9.6rem]"}>
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
                    </div>
                </section>
                <div className={"flex justify-center items-start -my-[100px]"}>
                    <ContactForm data={contact} onSubmit={handleSubmit} buttonStatus={buttonStatus}/>
                </div>
            </main>
            <div className={"h-[200px]"}></div>
            <BottomBanner/>
            {popup.visible && (
                <ValidationPopup popup={popup} removePopup={removePopup}/>
            )}
        </div>
    )
}

export default Contact