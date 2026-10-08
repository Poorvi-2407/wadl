function About() {
  return (
    <div className="page-content">

      <div className="page-heading">
        <div>
          <p className="eyebrow">
            INFORMATION
          </p>

          <h2>
            About LifeLink
          </h2>

          <p>
            Understanding our organ donation
            management prototype.
          </p>
        </div>
      </div>


      <div className="about-grid">

        <div className="panel">

          <div className="about-icon">
            ♥
          </div>

          <h3>
            What is LifeLink?
          </h3>

          <p className="about-text">
            LifeLink is a web-based organ donation
            management system designed to provide
            administrators with one centralized
            platform for managing donors, organ
            inventory and recipient requests.
          </p>

          <p className="about-text">
            The system demonstrates how a digital
            platform can organize donation records
            and simplify the process of finding
            compatible available organs.
          </p>

        </div>


        <div className="panel">

          <p className="eyebrow">
            TECHNOLOGY
          </p>

          <h3>
            Built With
          </h3>

          <div className="technology-list">

            <div>
              <strong>React</strong>
              <span>Frontend framework</span>
            </div>

            <div>
              <strong>Vite</strong>
              <span>Development and build tool</span>
            </div>

            <div>
              <strong>JavaScript</strong>
              <span>Application logic</span>
            </div>

            <div>
              <strong>CSS</strong>
              <span>User interface design</span>
            </div>

            <div>
              <strong>localStorage</strong>
              <span>Browser-based data persistence</span>
            </div>

          </div>

        </div>

      </div>


      <div className="info-banner">

        <div className="info-icon">
          i
        </div>

        <div>

          <strong>
            Prototype Disclaimer
          </strong>

          <p>
            LifeLink is a university hackathon
            prototype. It is designed for
            demonstration and educational purposes
            and must not be used for real-world
            medical decisions or organ allocation.
          </p>

        </div>

      </div>

    </div>
  );
}

export default About;