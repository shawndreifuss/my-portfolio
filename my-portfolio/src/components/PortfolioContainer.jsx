import { useState } from 'react';
import Navbar from './Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
    //set deafult page to home 
    const [currentPage, setCurrentPage] = useState('Home');
}