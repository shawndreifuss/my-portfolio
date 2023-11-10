import React from 'react'
import Contact from './pages/Contact.jsx';
import Body from './Body/Body.jsx'

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


export default function Home() {
    return (
      <>
      <div className="about full-screen d-lg-flex justify-content-center align-items-center" id="about">
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
                  <div className="about-image">
                      <img src='./public/images/home.jpg' className="img-fluid"></img>
                  </div>
              </div>

          </div>
      </div>
  </div>
< Body />
      <Contact />
      </>
      
);
  }
  