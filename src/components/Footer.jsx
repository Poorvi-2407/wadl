function Footer({ setActivePage }) {
  function goTo(page) {
    setActivePage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return (
    <footer className="footer">

      <div className="footer-main">

        <div>
          <div className="footer-brand">
            <span className="footer-heart">♥</span>
            <strong>LifeLink</strong>
          </div>

          <p>
            Organ Donation Management System
          </p>

          <p className="footer-description">
            A university hackathon prototype for
            managing donors, organ inventory and
            recipient requests.
          </p>
        </div>


        <div className="footer-links">

          <strong>
            Information
          </strong>

          <button
            onClick={() => goTo("About")}
          >
            About
          </button>

          <button
            onClick={() => goTo("How It Works")}
          >
            How It Works
          </button>

          <button
            onClick={() => goTo("Help")}
          >
            Help
          </button>

        </div>


        <div className="footer-links">

          <strong>
            System
          </strong>

          <button
            onClick={() => goTo("Dashboard")}
          >
            Dashboard
          </button>

          <button
            onClick={() => goTo("Donors")}
          >
            Donors
          </button>

          <button
            onClick={() => goTo("Organ Inventory")}
          >
            Organ Inventory
          </button>

        </div>

      </div>


      <div className="footer-bottom">

        <span>
          © 2026 LifeLink. University Hackathon
          Prototype.
        </span>

        <span>
          Not intended for real-world medical
          decision-making.
        </span>

      </div>

    </footer>
  );
}

export default Footer;