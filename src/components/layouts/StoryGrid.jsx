import SimpleAnimation from "../utils/SimpleAnimation";
import React from "react";
import Button from "../ui/Button";

const StoryGrid = ({grids}) => {

    return (
        <div className={"mx-8 md:mx-16 mb-20"}>
            <article
                className={"flex w-full flex-col lg:flex-row items-center lg:items-start justify-start lg:justify-center gap-10"}>
                {grids.map((story, index) => {
                    return (
                        <SimpleAnimation
                            key={index}
                            styles={"w-full lg:w-1/2 max-w-[440px] p-4 ring-2 ring-accent rounded-sm flex flex-col items-stretch justify-start gap-3"}>
                            <div>
                                <img
                                    loading={"lazy"}
                                    src={story.photoUrl}
                                    alt={story.photoAlt}
                                    className={"w-full h-[200px] rounded-sm"}
                                />
                            </div>
                            <h4 className={"text-center text-phoneLarge md:text-pcLarge text-accent font-bold"}>
                                {story.title}
                            </h4>
                            <h5 className={"text-phoneMedium md:text-pcMedium italic"}>
                                {story.subtitle}
                            </h5>
                            <div className={"items-stretch w-full flex items-center justify-center gap-10 mt-5"}>
                                <Button textContent={"Continue Reading"} />
                            </div>
                        </SimpleAnimation>
                    )
                })}
            </article>
        </div>
    )
}

export default StoryGrid