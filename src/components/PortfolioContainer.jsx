import { useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './pages/About';
import Work from './pages/Work';


import Contact from './pages/Contact';
import Footer from './pages/Footer'

function PortfolioContainer() {
    //set default page to home 
    const [currentPage, setCurrentPage] = useState('Home');

    // Method to check currentPage and return component to render
    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'About') {
            return <About currentPage={currentPage} handlePageChange={handlePageChange}/>;
        }
        if (currentPage === 'Work') {
            return <Work />;
        }

         return <Contact />;
    
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <>
          <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
          { currentPage === 'Work' ? (<link  rel="stylesheet" href='../../src/assets/css/work.scss'></link>) : <></>}
          <>{renderPage()}</>
          { currentPage === 'Work' ? (<script  rel="stylesheet" href='../../src/assets/js/work.js'></script>) : <></>}
          <Footer />
        </>
            )
};

export default PortfolioContainer;