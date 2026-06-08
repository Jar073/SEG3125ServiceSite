import './App.css';

function App() {
  return (
    <>
      <header>
        <nav>
          <a href="/index.html" className="active">Home</a>
          <a href="/services.html">Services</a>
          <a href="/about.html">About</a>
          <a href="/booknow.html">Book Now</a>
        </nav>
      </header>

      <main className="container">
        <h1 className="section-title">Welcome to Experidental</h1>
        
        <section className="main-section">
          <div className="main-image-wrapper">
            <img src="/images/smilefamily.png" alt="Experidental Logo or Smiling Image" className="main-img" />
          </div>
          <div className="main-content">
            <div className="text-lines">
              <p>&nbsp;</p>
              <p>We're Experidental! your local dental office!</p>
              <p>&nbsp;</p>
              <p>Here at Experidental we care about high</p>
              <p>quality appointments, teeth and practice.</p>
              <p>We offer plenty of dental related services</p>
              <p>for the full family.</p>
            </div>
            <div className="main-cta">
              <h2 className="cta-title">Meet with us!</h2>
              <a href="/booknow.html" className="button button-booknow">Book Now</a>
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="about-images-container">
            <div className="img-wrapper box-1">
              <img src="/images/dentaloffice.png" alt="Dental Implants" className="about-img" />
            </div>
            <div className="img-wrapper box-2">
              <img src="/images/bigsmile.png" alt="Dental Clinic" className="about-img" />
            </div>
          </div>
          <div className="about-content">
            <h2>About Our Clinic</h2>
            <p className="descriptiontext">Our team of dental experts are always more than happy to help!</p>
            <p className="descriptiontext">View our full list of services to find what we can do for you.</p>
            <a href="/services.html" className="button button-services">View Our Services</a>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
