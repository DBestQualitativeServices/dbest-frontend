import {useState} from "react";
import SimpleAnimation from "../utils/SimpleAnimation";

const DetailedImageSlider = ({slides}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [imageLoaded, setImageLoaded] = useState(false);

    console.log(slides)

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    const goToNextSlide = () => {
        currentSlide !== slides.length - 1 ? setCurrentSlide(currentSlide + 1) : setCurrentSlide(0);
        setImageLoaded(false)
    };
    const goToPrevSlide = () => {
        currentSlide !== 0 ? setCurrentSlide(currentSlide - 1) : setCurrentSlide(slides.length - 1);
        setImageLoaded(false)
    };

    return (
        <div className={"flex flex-col w-full items-center gap-3"}>
            <SimpleAnimation styles={"flex w-full h-full lg:w-[500px] lg:h-[500px] items-center justify-center"}>
                <img
                    loading={"lazy"}
                    src={slides[currentSlide].photoUrl}
                    alt={slides[currentSlide].photoAlt}
                    className={"w-[65%] sm:w-[50%] lg:w-full aspect-square"}
                    onLoad={handleImageLoad}
                />
            </SimpleAnimation>


            <div className={"flex flex-col w-full items-center gap-3"}>
                <div className={"w-full flex-col gap-3 min-h-[250px] md:min-h-[170px]"}>
                    {imageLoaded && (
                        <SimpleAnimation styles={"flex flex-col w-full gap-3"}>
                            <h3 className={"mx-8 md:mx-16 text-phoneLarge md:text-pcLarge font-bold text-start text-accent"}>
                                {slides[currentSlide].heading}
                            </h3>
                            <h4 className={"mx-8 md:mx-16 text-phoneMedium md:text-pcMedium"}>{slides[currentSlide].description}</h4>
                        </SimpleAnimation>
                    )}

                </div>

                <div className={"flex flex-row w-full mt-3 justify-between"}>
                    <div className={"flex mx-8 md:mx-16 flex-row gap-3 text-phoneLarge md:text-pcLarge"}>
                        {slides.map((slide, index) => {
                            if (currentSlide === index) {
                                return <span key={index} className={"cursor-pointer"}>&#9864;</span>
                            } else return <span key={index} onClick={() => setCurrentSlide(index)}
                                                className={"cursor-pointer hover:scale-[1.3] transition transform duration-300"}>&#9862;</span>
                        })}
                    </div>
                    <div className={"flex gap-3 mx-8 md:mx-16"}>
                        <button
                            onClick={goToPrevSlide}
                            className={"py-[8px] pl-[14px] pr-[11px] text-pcMedium text-accent ring-2 ring-accent hover:text-whiteShade rotate-[180deg] hover:bg-accent hover:scale-110 transition transform duration-500 rounded-full"}>&#x27A4;</button>
                        <button
                            onClick={goToNextSlide}
                            className={"py-[8px] pl-[14px] pr-[11px] text-pcMedium text-accent ring-2 ring-accent hover:text-whiteShade hover:bg-accent hover:scale-110 transition transform duration-500 rounded-full"}>&#x27A4;</button>
                    </div>
                </div>
            </div>

            {/* Rest of the component code */}
        </div>
    );
};

export default DetailedImageSlider;
