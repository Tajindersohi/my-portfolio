import React, { useState } from 'react';
import Home from "../Pages/Home";
import About from "../Pages/About";
import Services from "../Pages/Services";
import Projects from "../Pages/Projects";
import Works from "../Pages/Works";
import NavBar from "..";

function GeneralLayout() {
const [currentTab, setCurrentTab] = useState('home');

const handleTab = (newTab) => {
    setCurrentTab(newTab);
}

const renderData = (tab) => {
    switch(tab) {
        case 'home': return <Home />;
        case 'works': return <Works />;
        case 'about': return <About />;
        case 'projects': return <Projects />;
        case 'services': return <Services />;
        default: return null;
    }
}

return (
    <div>
        <NavBar handleTab={handleTab} />
        {renderData(currentTab)}
    </div>
);
}

export default GeneralLayout;
