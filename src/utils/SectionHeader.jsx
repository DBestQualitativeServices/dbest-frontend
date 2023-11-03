import Reveal from "./Reveal";

const SectionHeader = ({title, dir = "r"}) => {
    return (
        <div
            className={"flex items-center gap-[2.4rem] mb-[2.4rem]"}
            style={{flexDirection: dir === "r" ? "row" : "row-reverse"}}
        >
            <div className={"w-full h-[1px] bg-textColor opacity-30"}/>
            <h3>
                <Reveal>
          <span className={"text-md sm:text-lg font-extrabold text-end"}>
            {title}
              <span className={"text-brandColor"}>?</span>
          </span>
                </Reveal>
            </h3>
        </div>
    );
};

export default SectionHeader;