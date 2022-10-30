import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title : 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title : 'News',
        path: '/news',
        icon: <FaIcons.FaRegNewspaper/>,
        cName: 'nav-text'
    },
    {
        title : 'Principais ações',
        path: '/pa',
        icon: <MdIcons.MdOutlineTableChart/>,
        cName: 'nav-text'
    },
    {
        title : 'Meus Investimentos',
        path: '/mi',
        icon: <FaIcons.FaWallet/>,
        cName: 'nav-text'
    },
    {
        title : 'Simular Investimentos',
        path: '/si',
        icon: <FaIcons.FaRegChartBar/>,
        cName: 'nav-text'
    },
    {
        title : 'Suporte',
        path: '/suporte',
        icon: <IoIcons.IoMdHelpCircle/>,
        cName: 'nav-text'
    },

]