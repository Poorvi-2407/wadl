function Help() {
  return (
    <div className="page-content">

      <div className="page-heading">
        <div>
          <p className="eyebrow">
            SUPPORT
          </p>

          <h2>
            Help & Information
          </h2>

          <p>
            Quick guidance for using the LifeLink
            management system.
          </p>
        </div>
      </div>


      <div className="help-grid">

        <div className="panel">

          <h3>
            How do I register a donor?
          </h3>

          <p className="help-text">
            Open the Donors section, complete the
            donor form and select Register Donor.
          </p>

        </div>


        <div className="panel">

          <h3>
            How do I add an organ?
          </h3>

          <p className="help-text">
            Open Organ Inventory and enter the
            organ, blood group, donor and hospital
            information.
          </p>

        </div>


        <div className="panel">

          <h3>
            How does matching work?
          </h3>

          <p className="help-text">
            The prototype searches for organs that
            are currently available and have the same
            organ type and blood group as the
            recipient request.
          </p>

        </div>


        <div className="panel">

          <h3>
            Where is the data stored?
          </h3>

          <p className="help-text">
            This prototype uses the browser's
            localStorage to preserve data between
            page refreshes.
          </p>

        </div>


        <div className="panel">

          <h3>
            Is this a real medical system?
          </h3>

          <p className="help-text">
            No. LifeLink is a university hackathon
            prototype and should not be used for
            real-world medical decisions.
          </p>

        </div>


        <div className="panel">

          <h3>
            Need technical support?
          </h3>

          <p className="help-text">
            Contact the system administrator for
            assistance with this demonstration
            application.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Help;