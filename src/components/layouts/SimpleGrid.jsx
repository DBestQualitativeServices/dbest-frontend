import React from 'react';
import SimpleAnimation from "../utils/SimpleAnimation";

const SimpleGrid = ({grids}) => {

    return (
        <div className={"mx-8 md:mx-16 my-20"}>
            <div
                className={"flex w-full flex-col lg:flex-row items-center lg:items-start justify-start lg:justify-center gap-10"}>
                {grids.length !== 0 && grids.map((grid, index) => {
                    return (
                        <SimpleAnimation
                            key={index}
                            styles={"w-full lg:w-1/3 max-w-[370px] flex flex-col items-center justify-start gap-3"}>
                            <h5 className={"text-phoneLarge md:text-pcLarge text-accent font-bold"}>
                                {grid.title}
                            </h5>
                            <h6 className={"text-phoneMedium md:text-pcMedium italic"}>
                                {grid.description}
                            </h6>
                            <div className={"flex flex-row w-full justify-start text-start"}>
                                {grid.icon}
                            </div>
                        </SimpleAnimation>)
                })}
            </div>
        </div>
    )
}

export default SimpleGrid