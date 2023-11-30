// Using object destructuring to pluck- off variables
// Assign them to their own variable names

export default function Navbar({ currentPage, handlePageChange }) {
    return (
        <nav className="navbar navbar-expand-sm navbar-light">
        <div className="container">
            <a className="navbar-brand" href="#about"onClick={() => handlePageChange('About')} ><i className='uil uil-cloud-download'>Shawn Dreifuss</i></a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                <span className="navbar-toggler-icon"></span>
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <a href="#home" onClick={() => handlePageChange('Home')} 
                        className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'} ><span data-hover="Home">Home</span></a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" onClick={() => handlePageChange('About')} 
                        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'} ><span data-hover="About">About</span></a>
                    </li>
                    <li className="nav-item">
                        <a href="#skills" onClick={() => handlePageChange('Skills')} 
                        className={currentPage === 'Skills' ? 'nav-link active' : 'nav-link'} ><span data-hover="Skills">Skills</span></a>
                    </li>
                    <li className="nav-item">
                        <a href="#work" onClick={() => handlePageChange('Work')} 
                        className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'} ><span data-hover="Work">Work</span></a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" onClick={() => handlePageChange('Contact')} 
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} ><span data-hover="Contact">Contact</span></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    


);
}

