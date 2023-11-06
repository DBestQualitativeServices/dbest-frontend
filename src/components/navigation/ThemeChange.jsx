import {useEffect, useState} from "react";
import {FiSun} from "react-icons/fi";
import {BsMoonStarsFill} from "react-icons/bs";


const ThemeChange = () => {
    const [theme, setTheme] = useState(null)

    useEffect(() => {
        if (!localStorage.getItem("theme")) {
            localStorage.setItem("theme", "light");
        }
        setTheme(localStorage.getItem("theme"));
    }, []);

    useEffect(() => {
        if (theme) {
            localStorage.setItem("theme", theme.toString());
            const htmlElement = document.querySelector('html');
            if (htmlElement) {
                if (theme === "dark") {
                    htmlElement.classList.add('dark');
                    htmlElement.classList.remove('light');

                } else {
                    htmlElement.classList.add('light');
                    htmlElement.classList.remove('dark');
                }
            }
        }
    }, [theme]);

    const posibleThemes = [
        {id: "light", icon: <FiSun className={`${"light" === theme ? "text-brandColor" : ""} cursor-pointer`}/>},
        {id: "dark", icon: <BsMoonStarsFill className={`${"dark" === theme ? "text-brandColor" : ""} cursor-pointer`}/>}
    ]

    return (
        <div className={"flex flex-row gap-[1.5rem] mr-[2rem]"}>
            {posibleThemes.length && posibleThemes.map(eachTheme => {
                return (
                   <div key={eachTheme.id} onClick={() => setTheme(eachTheme.id)} className={"scale-[1.2npm ]"}>
                       {eachTheme.icon}
                   </div>
                )
            })}
        </div>
    )
}

export default ThemeChange