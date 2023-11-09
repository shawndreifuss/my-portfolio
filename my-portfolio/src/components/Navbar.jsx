// Using object destructuring to pluck- off variables
// Assign them to their own variable names
export default function Navbar({ currentPage, handlePageChange }) {
    return (
        <div id="colorlib-page">
		<div className="container-wrap">
		<a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i></i></a>
		<aside id="colorlib-aside" role="complementary" className="border js-fullheight">
			<div className="text-center">
				<div className="author-img" style="background-image: url(images/about.jpg);"></div>
				<h1 id="colorlib-logo"><a href="index.html">Shawn Dreifuss</a></h1>
				<span className="position"><a href="#">Full Stack Developer</a> in San Diego</span>
			</div>
			<nav id="colorlib-main-menu" role="navigation" className="navbar">
				<div id="navbar" className="collapse">
					<ul>
						<li className="active">
                        <a href="#home" 
                        onClick={() => handlePageChange('Home')}
                        className={currentPage === 'Home' ? 'display' : 'no-display'}
                        >Home
                        </a>
                        </li>
                        <li className="active"><a href="#about" 
                        onClick={() => handlePageChange('About')}
                        className={currentPage === 'About' ? 'display' : 'no-display'}
                        >About
                        </a>
                        </li>
                        <li className="active"><a href="#skills" 
                        onClick={() => handlePageChange('Skills')}
                        className={currentPage === 'Skills' ? 'display' : 'no-display' }
                        >Skills</a>
                        </li>
                        <li className="active"><a href="#work" 
                        onClick={() => handlePageChange('Work')}
                        className={currentPage === 'Work' ? 'display' : 'no-display'}
                        >Work</a>
                        </li>
                        <li
                        className="active"> <a href="#contact"
                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'display' : 'no-display' } 
                        >Contact</a>
                        </li>
					</ul>
				</div>
			</nav>
			<div className="colorlib-footer">
				<ul>
                    <li><a href="#gitgub"><i className="icon-github"></i></a></li>
					<li><a href="#linkedIn"><i className="icon-linkedin2"></i></a></li>
				</ul>
			</div>
 </aside>
  </div>
</div>
);
}

