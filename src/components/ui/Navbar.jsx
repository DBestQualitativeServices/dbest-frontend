import {useState} from 'react';
import {Link} from "react-router-dom";

const Navbar = ({navContent}) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="sticky top-0 z-50 border-gray-200 bg-darkAccent">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to={navContent.links[0].path} className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className={"flex-shrink-0 py-[0.5rem] px-[0.4rem] text-2xl font-bold font-extrabold leading-none flex items-center justify-center bg-white rounded-md"}>
                    d
                    <span className={"font-extrabold text-2xl leading-none text-accent"}>B</span>
                </span>
                    <span className="hidden sm:block self-center text-2xl font-semibold whitespace-nowrap text-whiteShade">{navContent.longTitle}</span>
                    <span className="block sm:hidden self-center text-2xl font-semibold whitespace-nowrap text-whiteShade">{navContent.shortTitle}</span>
                </Link>
                <button
                    onClick={toggleMobileMenu}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none"
                    aria-controls="navbar-default"
                    aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div className={`w-full md:block md:w-auto ${isMobileMenuOpen ? 'block' : 'hidden'}`}
                     id="navbar-default">
                    <ul className="font-medium justify-center items-center flex flex-row p-4 md:px-4 md:py-1 mt-4 border rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-doubleDarkAccent border-tripleDarkAccent">
                        {navContent.links.map(link => (
                            <li key={link.id}>
                                <a href={link.path}
                                      className="block py-2 px-3 text-white rounded bg-transparent  md:px-4"
                                      aria-current="page">{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
