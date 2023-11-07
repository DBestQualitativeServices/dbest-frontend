const HomeBox = ({customStyles, children}) => {

    return (
        <div
            className={`${customStyles} relative p-0 m-0 bg-backgroundDark dark:bg-darkBackgroundDark rounded-lg flex items-center justify-center`}>
            {children}
        </div>
    )
}

export default HomeBox