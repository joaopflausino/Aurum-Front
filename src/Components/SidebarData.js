import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';
import * as Io5Icons from 'react-icons/io5';
import * as BsIcons from "react-icons/bs";
import ProvedorAutenticado from '../main/ProvedorDeAutentificacao';

const e = new ProvedorAutenticado();

export const SidebarData = [
    {
        title: 'Página Inicial',
        path: '/home',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text',
        id: 'home'
    },
    {
        title: 'Notícias',
        path: '/noticias',
        icon: <FaIcons.FaRegNewspaper />,
        cName: 'nav-text',
        id: 'news'
    },
    {
        title: 'Principais ações',
        path: '/principais-acoes',
        icon: <MdIcons.MdOutlineTableChart />,
        cName: 'nav-text',
        id: 'stocks'
    },
    {
        title: 'Meus Investimentos',
        path: '/meus-investimentos',
        icon: <FaIcons.FaWallet />,
        cName: 'nav-text',
        id: 'investments'
    },
    {
        title: 'Adicionar Investimentos',
        path: '/adicionar-investimento',
        icon: <Io5Icons.IoBagAddSharp />,
        cName: 'nav-text',
        id: 'add-investments'
    },
    {
        title: 'Simular Investimentos',
        path: '/simular-investimento',
        icon: <BsIcons.BsGraphUp />,
        cName: 'nav-text',
        id: 'simulate'
    },
    {
        title: 'Meus dados',
        path: '/meus-dados',
        icon: <BsIcons.BsFillGearFill />,
        cName: 'nav-text',
        id: 'account'
    },
    {
        title: 'Sair',
        icon: <MdIcons.MdLogout />,
        cName: 'nav-text',
        id: 'logout'
    },
]