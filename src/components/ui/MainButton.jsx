const MainButton = ({textContent, onClick}) => {

    return (
        <button
            onClick={onClick}
            className={"flex grow-0 items-center justify-center ring-2 ring-accent hover:scale-110 transition transform duration-500 px-3 py-2 rounded-full bg-accent text-whiteShade text-phoneLarge md:text-pcLarge"}>
            {textContent}
        </button>
    )
}

export default MainButton