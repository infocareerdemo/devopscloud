import React, { useState } from 'react';
// import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import Javabasic from '../Java/Javabasic';
import JavaIntroduction from '../Java/JavaIntroduction';
import JavaConculsion from '../Java/JavaConculsion';
import JavaOpps from '../Java/JavaOpps';
import "./Navbar.css";

function NavbarComp() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [selectedMenuItem, setSelectedMenuItem] = useState(null);
    const [hoveredMenuItem, setHoveredMenuItem] = useState(null);
    const [selectedListItem, setSelectedListItem] = useState(null);

    const handleMenuItemClick = (menuItem) => {
        setSelectedMenuItem(menuItem);
        setSelectedListItem(null); // Reset selected list item when changing the menu
    };

    const handleListItemClick = (listItem) => {
        setSelectedListItem(listItem);
    };

    const handleMenuMouseEnter = (menuItem) => {
        setHoveredMenuItem(menuItem);
    };

    const handleMenuMouseLeave = () => {
        setHoveredMenuItem(null);
    };
    const renderComponent = () => {
        switch (selectedListItem) {
            case 'Java Basic':
                return <Javabasic />;
            case 'Java Indroduction':
                return <JavaIntroduction />;
            case 'Consultion':
                return <JavaConculsion />;
            case 'Java Opps':
                return <JavaOpps />;
            default:
                return null;
        }
    };
    const contentMap = {
        Java: {
            content: 'Java Content Here',
            list: ['Java Basic', 'Java Indroduction', 'Java Opps', 'Consultion'],
            rightContent: selectedListItem ? `${selectedListItem}` : 'Select an item',

        },
        Python: {
            content: 'Python Content Here',
            list: ['Item A', 'Item B', 'Item C', 'Item D', 'Item E'],
        },
        React: {
            content: 'React Content Here',
            list: ['Option X', 'Option Y', 'Option Z'],
        },
        Ionic: {
            content: 'Ionic Content Here',
            list: ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango'],
        },
        Net: {
            content: '.NET Content Here',
            list: ['Framework 1', 'Framework 2', 'Framework 3', 'Framework 4', 'Framework 5'],
        },
        Oracle: {
            content: 'Oracle Content Here',
            list: ['One', 'Two', 'Three', 'Four', 'Five'],
        },
    };
    return (
        <div>
            <div className='footer'>
                <div className='footer_split'>
                    <div className='header_split'>
                        <GiHamburgerMenu cursor="pointer" size={25} className='header-toggle-icon' onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
                    </div>
                    <div className='header_split'>
                        <FontAwesomeIcon icon={faChevronLeft} className="navbar-icon" />
                    </div>
                    {['Java', 'Python', 'React', 'Ionic', 'Net', 'Oracle', 'Java', 'Python', 'React', 'Ionic', 'Net', 'Oracle', 'Java', 'Python'].map((menuItem, index) => (
                        <div
                            key={index}
                            style={{ cursor: 'pointer', borderBottom: `${selectedMenuItem === menuItem || hoveredMenuItem === menuItem ? '2px solid orange' : 'none'}` }}
                            onMouseEnter={() => handleMenuMouseEnter(menuItem)}
                            onMouseLeave={() => handleMenuMouseLeave()}
                        >
                            <span onClick={() => handleMenuItemClick(menuItem)}>{menuItem}</span>
                        </div>
                    ))}
                    <div className='header_split'>
                        <FontAwesomeIcon icon={faChevronRight} className="navbar-icon" />
                    </div>
                </div>
            </div>
            <div className='main_content'>
                {/* Left Sidebar */}
                <div className={`splitresume ${isSidebarOpen === true ? '' : 'sidebar-open'}`}>
                    <div className='Learning_center'>

                        {selectedMenuItem !== null ? (
                            <>
                                <span style={{paddingLeft:"30px",fontWeight:"bold"}}>{contentMap[selectedMenuItem]?.content}</span>
                                <ul className='listside'>
                                    {contentMap[selectedMenuItem]?.list.map((item, index) => (
                                        <li style={{ listStyle: 'none', cursor: 'pointer' }} key={index} onClick={() => handleListItemClick(item)}>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </>
                        ) : (
                            <div style={{paddingLeft:"30px"}}>
                            <p>Select a list item</p>
                            </div>
                        )}


                    </div>
                </div>
                {/* Right Content */}
                <div className={`right-content ${isSidebarOpen === true ? '' : 'right-content-shifted'}`}>
                    {selectedListItem !== null ? (
                        <>
                            {renderComponent()}
                        </>
                    ) : (
                        'Select a list item'
                    )}
                </div>
            </div>
        </div>
    );
}

export default NavbarComp;
