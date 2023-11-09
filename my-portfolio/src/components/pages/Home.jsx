import React from 'react'
import Contact from './Contact.jsx';
const url = 'http://source.unsplash.com/random/?sig=1'
const styles = {
  w60: {
    width: '65%',
    
  },
  w85: {
    width: '85%'
  },
  w70: {
    width: '70%'
  },
  w75: {
    width: '75%'
  },
  w90: {
    width: '90%'  },
  w80: {
    width: '80%'
  },
  margin: {
    marginTop: 15,
    marginBottom: 15
  }

}
import '../../components/pages/skills.css'

export default function Home() {
    return (
      <>
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
                        <a href="#" className="btn mr-lg-2 custom-btn custom-btn-bg"><i className='uil uil-file-alt'></i> Download Resume</a>
                    
                      </div>
                  </div>
              </div>

              <div className="col-lg-5 col-md-12 col-12">
                  <div className="about-image svg">
                      <img src={ url } className="img-fluid" alt="svg image"></img>
                  </div>
              </div>

          </div>
      </div>
  </section>

  {/* <section className="project py-5 active" id="project">
      <div className="container">
              
              <div className="row">
                <div className="col-lg-11 text-center mx-auto col-12">

                    <div className="col-lg-8 mx-auto">
                      <h2>My Portfolio</h2>
                    </div>

                    <div className="owl-carousel owl-theme">
                      <div className="item">
                        <div className="project-info svg">
                        <img src={ url } className="img-fluid" ></img>
                        </div>
                      </div>

                      <div className="item">
                        <div className="project-info svg">
                        <img src={ url } className="img-fluid"></img>
                        </div>
                      </div>

                      <div className="item">
                        <div className="project-info">
                          <img src={ url } className="img-fluid"></img>
                        </div>
                      </div>

                      <div className="item">
                        <div className="project-info">
                          <img src={ url }className="img-fluid"></img>
                        </div>
                      </div>

                      <div className="item">
                        <div className="project-info">
                          <img src={url} className="img-fluid" ></img>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
      </div>
   </section>
  
<section className="colorlib-skills" data-section="skills">
				<div className="colorlib-narrow-content">
					<div className="row">
						<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
							<span className="heading-meta">My Specialty</span>
							<h2 className="colorlib-heading animate-box">My Skills</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
							<p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
						</div>
						<div className="col-md-6 animate-box" style={styles.margin} data-animate-effect="fadeInLeft">
							<div className="progress-wrap">
								<h3>HTML5</h3>
								<div className="progress">
								 	<div className="progress-bar color-2" role="progressbar" aria-valuenow="75"
								  	aria-valuemin="0" aria-valuemax="100" style={styles.w75}>
								    <span>75%</span>
								  	</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 animate-box" style={styles.margin} data-animate-effect="fadeInRight">
							<div className="progress-wrap">
								<h3>CSS</h3>
								<div className="progress">
								 	<div className="progress-bar color-1" role="progressbar" aria-valuenow="60"
								  	aria-valuemin="0" aria-valuemax="100" style={styles.w80}>
								    <span>80%</span>
								  	</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 animate-box" style={styles.margin} data-animate-effect="fadeInLeft">
							<div className="progress-wrap">
								<h3>JavaScript</h3>
								<div className="progress">
								 	<div className="progress-bar color-3" role="progressbar" aria-valuenow="85"
								  	aria-valuemin="0" aria-valuemax="100" style={styles.w60}>
								    <span>70%</span>
								  	</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 animate-box" style={styles.margin} data-animate-effect="fadeInRight">
							<div className="progress-wrap">
								<h3>MongoDB</h3>
								<div className="progress">
								 	<div className="progress-bar color-4" role="progressbar" aria-valuenow="90"
								  	aria-valuemin="0" aria-valuemax="100" style={styles.w85}>
								    <span>85%</span>
								  	</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 animate-box" style={styles.margin} data-animate-effect="fadeInLeft">
							<div className="progress-wrap">
								<h3>Node.js</h3>
								<div className="progress">
								 	<div className="progress-bar color-5" role="progressbar" aria-valuenow="70"
								  	aria-valuemin="0" aria-valuemax="100" style={styles.w70}>
								    <span>70%</span>
								  	</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 animate-box" style={styles.margin} data-animate-effect="fadeInRight">
							<div className="progress-wrap">
								<h3>React</h3>
								<div className="progress">
								 	<div className="progress-bar color-6" role="progressbar" aria-valuenow="80"
								  	aria-valuemin="0" aria-valuemax="100" style={styles.w80}>
								    <span>80%</span>
								  	</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section> */}
      <Contact />
      </>
      
);
  }
  