import { useState } from 'react';
import Navbar from './Navbar';
import Home from './pages/Home';
import About from './pages/about';
import Work from './pages/Work';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

function PortfolioContainer() {
    //set default page to home 
    const [currentPage, setCurrentPage] = useState('Home');

    // Method to check currentPage and return component to render
    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Work') {
            return <Work />;
        }
        if (currentPage === 'Skills') {
            return <Skills />;
        }
         return <Contact />;
    
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <>
          <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
          <>{renderPage()}</>
        </>
            )
};

export default PortfolioContainer;