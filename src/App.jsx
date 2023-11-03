import {Suspense,} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';

import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Services from "./components/Services";

const App = () => {
    return (
        <Suspense fallback={<div/>}>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/home" element={<Navigate to="/"/>}/>
                <Route exact path="/about" element={<About />}/>
                <Route exact path="/services" element={<Services />}/>
                <Route exact path="/contact" element={<Contact/>}/>
            </Routes>
        </Suspense>
    );
};

export default App;
