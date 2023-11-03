import SideBar from "./SideBar";
import Heading from "./Heading";

const PageWrapper = ({children}) => {


    return (
        <div className="flex flex-row h-full w-full min-h-screen min-w-screen selection:text-background selection:bg-brandColor">
            <div className="min-h-screen  w-[60px] min-w-[60px]">
                <SideBar/>
            </div>
            <main className="flex-1 -mt-[4rem]">
                <Heading />
                {children}
            </main>
        </div>
    );
};

export default PageWrapper;