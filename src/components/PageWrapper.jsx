import SideBar from "./SideBar";

const PageWrapper = ({children}) => {


    return (
        <div className="flex flex-row h-full w-full min-h-screen min-w-screen selection:text-background selection:bg-brandColor">
            <div className="min-h-screen  w-[60px] min-w-[60px]">
                <SideBar/>
            </div>
            <main className="flex-1">
                {children}
            </main>
        </div>
    );
};

export default PageWrapper;