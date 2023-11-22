import {Suspense,} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';

import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contact";
import ForOFour from "./components/pages/FourOFour";

const App = () => {
    return (
        <Suspense fallback={<div className="bg-background text-poppins"></div> }>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/home" element={<Navigate to="/"/>}/>
                <Route exact path="/services" element={<Services/>}/>
                <Route exact path="/contact" element={<Contact/>}/>
                <Route exact path="/404" element={<ForOFour/>}/>
                <Route exact path="/*" element={<Navigate to="/404"/>}/>
            </Routes>
        </Suspense>
    );
}

export default App;
