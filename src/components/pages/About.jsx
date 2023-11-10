
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
export default function About({ currentPage, handlePageChange }) {
    return (
      <section id="about" class="about-mf sect-pt4 route">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="box-shadow-full">
              <div class="row">
                <div class="col-md-6">
                  <div class="column">
                    <div class="col-sm-6 col-md-5">
                      <div class="profile-img1">
                        <img src="/images/IMG_5474.jpeg" class="img-fluid" id='down'></img>
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-7">
                      <div class="about-info">
                        <p><span class="title-s">Name: </span> <span>Shawn Dreifuss</span></p>
                        <p><span class="title-s">Profile: </span> <span>Full Stack Developer</span></p>
                        <p><span class="title-s">Email: </span> <span>ShawnDreifuss@icloud.com</span></p>
                        <p><span class="title-s">Phone: </span> <span>(760) 470-0245</span></p>
                      </div>
                    </div>
                 </div>   
               </div>
                <div class="col-md-6">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h5 className="title-left">
                        About me
                      </h5>
                    </div>
                    <p className="lead">
					Fueled by high energy levels and boundless enthusiasm, 
					I'm easily inspired and more then willing to follow my fascinations wherever they take me. 
					I'm passionate, expressive, multi-talented spirit with a natural ability to entertain and inspire.
					 I'm never satisfied to just come up with ideas. Instead I have an almost impulsive need to act on them.


                    </p>
                    <p className="lead">
					My abundant energy fuels me in the pursuit of many interests, hobbies, 
					areas of study and artistic endeavors. 
					I'm a fast learner, able to pick up new skills 
					and juggle different projects and roles with relative ease.


                    </p>
                    <p className="lead">
                    I don't like to define myself by the work I've done. I define myself by the work I want to do. 
					Skills can be taught, personality is inherent. 
					I prefer to keep learning, continue challenging myself, and do interesting things that matter
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="colorlib-skills" data-section="skills">
				<div className="colorlib-narrow-content">
					<div className="row">
						<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
							<span>My Specialty</span>
						
						</div>
					</div>
					<div className="row">
						<div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
					</div>
						<div className="col-md-6 animate-box" style={styles.margin} data-animate-effect="fadeInLeft">
							<div className="progress-wrap">
								<h3>HTML5</h3>
								<div className="progress">
								 	<div className="progress-bar color-2" role="progressbar" aria-valuenow="75"
								  	aria-valuemin="0" aria-valuemax="100" style={styles.w85}>
								    <span>90%</span>
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
								  	aria-valuemin="0" aria-valuemax="100" style={styles.w70}>
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
								  	aria-valuemin="0" aria-valuemax="100" style={styles.w60}>
								    <span>65%</span>
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
			</div>
      
      
    </section>
);
}