

export default function Contact() {
    return (
      <section className="contact py-5" id="contact" align="center">
      <div className="container">
        <div className="row">
          
          <div className="col-lg-5 mr-lg-5 col-12">
            <div className="google-map w-100">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13397.417492647684!2d-117.23070561691894!3d32.915234320375646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1699502215794!5m2!1sen!2sus" width="400" height="300" frameBorder="0"  allowFullScreen></iframe>
            </div>

            <div className="contact-info d-flex justify-content-between align-items-center py-4 px-lg-5">
                <div className="contact-info-item">
                  <h3 className="mb-3 text-white">Say Hi!</h3>
                  <p className="footer-text mb-0">760 470 0245</p>
                  <p><a href="mailto:shawndreifuss@icloud.com">ShawnDreifuss@icloud.com</a></p>
                </div>

          
            </div>
          </div>

          <div className="col-lg-6 col-12">
            <div className="contact-form">
              <h2 className="mb-4">Interested to work together? Let's talk</h2>

              <form action="" method="get">
                <div className="row">
                  <div className="col-lg-6 col-12">
                    <input type="text" className="form-control" name="name" placeholder="Your Name" id="name"></input>
                  </div>

                  <div className="col-lg-6 col-12">
                    <input type="email" className="form-control" name="email" placeholder="Email" id="email"></input>
                  </div>

                  <div className="col-12">
                    <textarea name="message" rows="6" className="form-control" id="message" placeholder="Message"></textarea>
                  </div>

                  <div className="ml-lg-auto col-lg-5 col-12">
                    <input type="submit" className="form-control submit-btn" value="Send"></input>
                  </div>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
    );
  }
  