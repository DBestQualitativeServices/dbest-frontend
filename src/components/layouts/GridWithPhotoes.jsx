import SimpleAnimation from "../utils/SimpleAnimation";
import React from "react";

const GridWithPhotoes = ({grids}) => {

    return (
        <div className={"mx-8 md:mx-16 my-20"}>
            <div
                className={"flex w-full flex-col lg:flex-row items-center lg:items-start justify-start lg:justify-center gap-10"}>
                {grids.length !== 0 && grids.map((grid, index) => {
                    return (
                        <SimpleAnimation
                            key={index}
                            styles={"w-full lg:w-1/3 max-w-[370px] flex flex-col items-center justify-start gap-3"}>
                            <div>
                                <img
                                    loading={"lazy"}
                                    src={grid.photoUrl}
                                    className={"w-full h-full aspect-square"}
                                />
                            </div>
                            <h5 className={"text-phoneLarge md:text-pcLarge text-accent font-bold"}>
                                {grid.title}
                            </h5>
                            <h6 className={"text-phoneMedium md:text-pcMedium italic"}>
                                {grid.description}
                            </h6>
                        </SimpleAnimation>)
                })}
            </div>
        </div>
    )
}

export default GridWithPhotoes