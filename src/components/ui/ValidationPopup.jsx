import SimpleAnimation from "../utils/SimpleAnimation";

const ValidationPopup = ({ popup, removePopup }) => {
    return (
        <div className="fixed top-[15%] z-50 w-full flex justify-center">
            <SimpleAnimation styles={"max-w-md w-full shadow-lg"}>
                <div className={`${popup.title === "Success!" ? "ring-darkAccent" : "ring-red-600"} relative rounded-md bg-whiteShade p-4 ring ring-[1.7px]`}>
                    <h2 className={`${popup.title === "Success!" ? "text-darkAccent" : "text-red-600"} text-lg font-bold`}>{popup.title}</h2>
                    <p className="text-darkShade">{popup.message}</p>
                    <button
                        onClick={removePopup}
                        className={"absolute right-[10px] top-[4px]"}>
                        &#x2715;
                    </button>
                </div>
            </SimpleAnimation>
        </div>
    );
};

export default ValidationPopup;
