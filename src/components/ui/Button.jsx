const Button = ({textContent, disabled, type}) => {
    return (
        <button
            disabled={disabled}
            className={`
            ${type === "normal" ? "bg-whiteShade text-accent hover:bg-accent hover:text-whiteShade" : "bg-accent text-whiteShade hover:bg-whiteShade hover:text-accent"} 
            ${disabled === true ? "cursor-not-allowed" : "transition transform duration-500"}
            flex w-full grow-1 items-center justify-center ring-2 ring-accent px-3 py-2 rounded-sm text-phoneMedium md:text-pcMedium`}>
            {textContent}
        </button>
    )
}

export default Button