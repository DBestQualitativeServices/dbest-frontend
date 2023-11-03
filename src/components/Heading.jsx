import i18next from "i18next";
import {useEffect, useState} from "react";

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

const Heading = () => {
    const [selected, setSelected] =useState('')

    useEffect(()=>{
        setSelected(getCookie("i18next"))
    }, [])

    return (
        <div className="sticky top-0 z-20 h-16 bg-opacity-80 backdrop-filter backdrop-blur-lg flex items-center justify-end px-6 md:px-9 text-base font-semibold text-white">
            {["en", "ro"].map(language => {
            return (
                <span
                    onClick={()=> {
                        i18next.changeLanguage(language)
                        setSelected(language)
                    }}
                    className={`py-1 px-1 mx-2 font-small cursor-pointer ${selected === language ? "border-b-2 border-b-brandColor" : ""}`}>
                    {language.toUpperCase()}
                </span>
            )})}
        </div>
    );
};

export default Heading;
