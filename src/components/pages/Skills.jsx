import './skills.css'

export default function Skills() {
    return (

      <section className="colorlib-services" data-section="services">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
            <span className="heading-meta">What I do?</span>
            <h2 className="colorlib-heading">Here are some of my expertise skills</h2>
          </div>
        </div>
        <div className="row row-pt-md">
          <div className="col-md-4 text-center animate-box">
            <div className="services color-1">
              <span className="icon">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
              </span>
              <div className="desc">
                <h3>React</h3>
                <p>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center animate-box">
            <div className="services color-2">
              <span className="icon">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
              </span>
              <div className="desc">
                <h3>GitHub</h3>
                <p>I genuinely care about people, and love helping fellow designers work on their craft.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center animate-box">
            <div className="services color-3">
              <span className="icon">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
              </span>
              <div className="desc">
                <h3>Frontend Developer</h3>
                <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center animate-box">
            <div className="services color-4">
              <span className="icon">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
              </span>
              <div className="desc">
                <h3>Backend Developer</h3>
                <p>My Favorite!! Anything is posible to develop and im looking forward to the future with JavaScript.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center animate-box">
            <div className="services color-5">
              <span className="icon">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
              </span>
              <div className="desc down">
                <h3>MongoDB</h3>
                <p>I have created databases with MongoDb and MySql in many of my projects.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center animate-box">
            <div className="services color-6">
              <span className="icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
              </span>
              <div className="desc">
                <h3>Express</h3>
                <p>I have used in express in many of my applications to build RESTful APIs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
  }
  