import React from 'react';
const styles = {
  projectImage: {
   backgroundImage: url('https://source.unsplash.com/random/?sig=1')
  }
}


export default function Work() {
    return (
  
<section className="colorlib-work" data-section="work">
<div className="colorlib-narrow-content">
  <div className="row">
    <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
      <span className="heading-meta">My Work</span>
      <h2 className="colorlib-heading animate-box">Recent Work</h2>
    </div>
  </div>
  <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
    <div className="col-md-12">
      <p className="work-menu"><span><a href="#" className="active">Web Applications</a></span></p>
    </div>
  </div>
  <div className="row">
    <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
      <div className="project" style={styles.projectImage}>
        <div className="desc">
          <div className="con">
            <h3><a href="work.html">Work 01</a></h3>
            <span>Website</span>
            <p className="icon">
             
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
      <div className="project" style={styles.projectImage}>
        <div className="desc">
          <div className="con">
            <h3><a href="work.html">Work 02</a></h3>
            <span>Application</span>
            <p className="icon">
              
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-6 animate-box" data-animate-effect="fadeInTop">
      <div className="project" style={styles.projectImage}>
        <div className="desc">
          <div className="con">
            <h3><a href="work.html">Work 03</a></h3>
            <span>Application</span>
            <p className="icon">
              
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-6 animate-box" data-animate-effect="fadeInBottom">
      <div className="project" style={styles.projectImage}>
        <div className="desc">
          <div className="con">
            <h3><a href="work.html">Work 4</a></h3>
            <span>Application</span>
            <p className="icon">
              
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
      <div className="project" style={styles.projectImage}>
        <div className="desc">
          <div className="con">
            <h3><a href="work.html">Work 5</a></h3>
            <span>Logo Generator</span>
            <p className="icon">
              
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
      <div className="project" style={styles.projectImage}>
        <div className="desc">
          <div className="con">
            <h3><a href="work.html">Work 6</a></h3>
            <span>Web Design</span>
            <p className="icon">
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-md-12 animate-box">
    </div>
  </div>
</div>
</section>

    );
  }
  