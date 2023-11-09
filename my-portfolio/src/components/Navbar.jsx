// Using object destructuring to pluck- off variables
// Assign them to their own variable names

export default function Navbar({ currentPage, handlePageChange }) {
    return (
        <nav class="navbar navbar-expand-sm navbar-light">
        <div class="container">
            <a class="navbar-brand" href="index.html"><i class='uil uil-user'></i> Shawn Dreifuss</a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                <span class="navbar-toggler-icon"></span>
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item">
                        <a href="#home" onClick={() => handlePageChange('Home')} 
                        className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                        class="nav-link"><span data-hover="Home">Home</span></a>
                    </li>
                    <li class="nav-item">
                        <a href="#about" onClick={() => handlePageChange('About')} 
                        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                        class="nav-link"><span data-hover="About">About</span></a>
                    </li>
                    <li class="nav-item">
                        <a href="#skills" onClick={() => handlePageChange('Skills')} 
                        className={currentPage === 'Skills' ? 'nav-link active' : 'nav-link'}
                        class="nav-link"><span data-hover="Skills">Skills</span></a>
                    </li>
                    <li class="nav-item">
                        <a href="#work" onClick={() => handlePageChange('Work')} 
                        className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'}
                        class="nav-link"><span data-hover="Work">Work</span></a>
                    </li>
                    <li class="nav-item">
                        <a href="#contact" onClick={() => handlePageChange('Contact')} 
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                        class="nav-link"><span data-hover="Home">Contact</span></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>


);
}

