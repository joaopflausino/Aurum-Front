import './Navbar.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import imagem from '../shared/images/nome-aurum-investing.png';
import { SidebarData } from './SidebarData';

function Navbar() {
    const [sidebar, setSidebar] = useState(true);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ className: 'qualquer' }}>
                <nav className={'nav-menu active'}>
                    <div className="imagem">
                        <img src={imagem} className="logo-aurum" />
                    </div>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName} id={item.id}>
                                    <Link to={item.path}>
                                        <div className='icon'>
                                            {item.icon}</div>
                                        <span>
                                            {item.title}
                                        </span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar