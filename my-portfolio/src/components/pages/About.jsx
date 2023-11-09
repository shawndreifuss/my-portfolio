
export default function About() {
    return (
<section className="about d-lg-flex justify-content-center " id="about">
	<div className="container">
		<div className="row">
			
			<div className=" d-flex align-items-right">
				<div className="about-text">
					<small className="small-text">Welcome to <span className="mobile-block">my portfolio website!</span></small>
					<h1 className="animated animated-text">
						<span className="mr-2">Hey folks, I'm</span>
							<div className="animated-info">
								<span className="animated-item">Marvel Sann</span>
								<span className="animated-item">Web Designer</span>
								<span className="animated-item">UI Specialist</span>
							</div>
					</h1>

					<p>Building a successful product is a challenge. I am highly energetic in user experience design, interfaces and web development.</p>
					
					<div className="custom-btn-group mt-4">
					  <a href="#" class="btn mr-lg-2 custom-btn"><i className='uil uil-file-alt'></i> Download Resume</a>
					  <a href="#contact" class="btn custom-btn custom-btn-bg custom-btn-link">Get a free quote</a>
					</div>
				</div>
			</div>

			<div className="col-lg-5 col-md-12 col-12">
				<div className="about-image svg">
					<img src="" className="img-fluid" alt="svg image"></img>
				</div>
			</div>

		</div>
	</div>
</section>
);
}