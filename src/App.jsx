import {Suspense,} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';

import Home from "./components/pages/home-page/Home";
import Contact from "./components/pages/contact-page/Contact";
import About from "./components/pages/about-page/About";
import Services from "./components/pages/services-page/Services";

const App = () => {
    return (
        <Suspense fallback={<div className="bg-background dark:bg-darkBackgroundColor"></div> }>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/home" element={<Navigate to="/"/>}/>
                <Route exact path="/about" element={<About />}/>
                <Route exact path="/services" element={<Services />}/>
                <Route exact path="/contact" element={<Contact/>}/>
            </Routes>
        </Suspense>
    );
}

export default App;
