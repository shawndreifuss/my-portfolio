
export default function About({ currentPage, handlePageChange }) {
    return (
<section className="about full-screen d-lg-flex justify-content-center align-items-center" id="about">
        <div className="container">
            <div className="row">
                
                <div className="col-lg-7 col-md-12 col-12 d-flex align-items-center">
                    <div className="about-text">
                        <small className="small-text">Welcome to <span className="mobile-block">My portfolio Website!</span></small>
                        <h1 className="animated animated-text">
                            <span className="mr-2">Hello Everyone, I'm</span>
                                <div className="animated-info">
                                    <span className="animated-item">Shawn</span>
                                    <span className="animated-item">Dreifuss</span>
									<span className="animated-item">Developer</span>
                                </div>
                        </h1>

                        <p>Building a successful product is a challenge. I am highly energetic in user experience design, interfaces and web development.
							I am currently attending UCLA with Full Stack Coding!      
                            
                            
						</p>
                        
                        <div className="custom-btn-group mt-4">
                          <a href="#" className="btn mr-lg-2 custom-btn"><i className='uil uil-file-alt'></i> Download Resume</a>
                          <a href="#work" onClick={() => handlePageChange('Work')} 
                        className={currentPage === 'Work' ? 'btn custom-btn custom-btn-bg custom-btn-link active'  : 'btn custom-btn custom-btn-bg custom-btn-link' } ><span data-hover="Work"> My Work</span></a>
                  
                        </div>
                    </div>
                </div>

                <div className="col-lg-5 col-md-12 col-12">
                    <div className="about-image svg">
                        <img src="images/undraw/undraw_software_engineer_lvl5.svg" className="img-fluid" alt="svg image"></img>
                    </div>
                </div>

            </div>
        </div>
    </section>
);
}