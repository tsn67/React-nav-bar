import React, { useEffect, useState } from "react";


function Navbar(props) {
    
    const [isMobile, setIsMobile] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [path, setPath] = useState('Home');

    useEffect(() => {
        props.setCurrentPath('Home');

        if(window.innerWidth < 1000) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
            setMenuOpen(false);
        }

        window.addEventListener('resize', ()=> {
            if(window.innerWidth < 1000) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
                setMenuOpen(false);
            }
        });

    }, []);

   
    function normalNavbar() {
        return <div className="nav-bar">
            <div className="nav-container">
                <div className="home"><h2>Site</h2></div>
                <ul>
                    <li className={path == 'Course'?'focus':'not-focus'} onClick={() => {
                        props.setCurrentPath('Course');
                        setPath('Course')
                    }}>Course</li>
                    <li className={path == 'Learningpaths'?'focus':'not-focus'} onClick={() => {
                        props.setCurrentPath('Learningpaths');
                        setPath('Learningpaths')
                    }}>Learning Paths</li>
                    <li className={path == 'Membership'?'focus':'not-focus'} onClick={() => {
                        props.setCurrentPath('Membership');
                        setPath('Membership')
                    }}>Memberships</li>
                    <li className={path == 'Forum'?'focus':'not-focus'} onClick={() => {
                        props.setCurrentPath('Forum');
                        setPath('Forum')
                    }}>Forum</li>
                    <li className={path == 'Contact'?'focus':'not-focus'} onClick={() => {
                        props.setCurrentPath('Contact');
                        setPath('Contact')
                    }}>Contact</li>
                </ul>
                <button>Member Area</button>
            </div>
        </div>
    }

    function mobileNavbar() {
        return <div className="nav-bar">
            <div className="nav-container">
                <div className="home"><h2>Site</h2></div>
                <button>Member Area</button>
                <button id="menu-button" onClick={() => {setMenuOpen(!menuOpen)}}>{menuOpen?'×':'☰'}</button>
            </div>

            {menuOpen?<div class="hidden-mobile-container">
                <ul>
                    <li className={path == 'Course'?'focus':'not-focus'} onClick={() => {
                        props.setCurrentPath('Course');
                        setPath('Course')
                    }}>Course</li>
                    <li className={path == 'Learningpaths'?'focus':'not-focus'} onClick={() => {
                        props.setCurrentPath('Learningpaths');
                        setPath('Learningpaths')
                    }}>Learning Paths</li>
                    <li className={path == 'Membership'?'focus':'not-focus'} onClick={() => {
                        props.setCurrentPath('Membership');
                        setPath('Membership')
                    }}>Memberships</li>
                    <li className={path == 'Forum'?'focus':'not-focus'} onClick={() => {
                        props.setCurrentPath('Forum');
                        setPath('Forum')
                    }}>Forum</li>
                    <li className={path == 'Contact'?'focus':'not-focus'} onClick={() => {
                        props.setCurrentPath('Contact');
                        setPath('Contact')
                    }}>Contact</li>
                </ul>
            </div>:null}

        </div>
    } 

    return (
        isMobile?mobileNavbar():normalNavbar()
    )
}


export default Navbar;