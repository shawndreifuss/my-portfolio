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

    // Method to check currentPage and return component to render
    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'Home') {
            return <About />;
        }
        if (currentPage === 'Home') {
            return <Work />;
        }
        if (currentPage === 'Home') {
            return <Skills />;
        }
        if (currentPage === 'Home') {
            return <Contact />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <body>
          <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
          <div>{renderPage()}</div>
        </body>
            )
};