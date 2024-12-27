import React, { useState } from "react";
import Navbar from './Navbar';
import Home from '../pages/Home';
import Forum from '../pages/Forum';
import Learningpaths from "../pages/LearningPaths";
import Contact from '../pages/Contact';
import Course from '../pages/Course';
import Membership from '../pages/Membership';

function App() {

    const [currentPath, setCurrentPath] = useState('Home');

    const paths = ['Home', 'Contact', 'Course', 'Learningpaths', 'Membership', 'Forum'];
    const components = [<Home/>, <Contact/>, <Course/>, <Learningpaths/>, <Membership/>, <Forum/>];

    return <div className="container">
        <Navbar setCurrentPath={setCurrentPath}></Navbar>
        {paths.map((item) => {
            if(currentPath == item) {
                return components[paths.indexOf(item)];
            }
        })}

    </div>
}

export default App;