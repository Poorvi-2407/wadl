import StatCard from "../components/StatCard";

function Dashboard({
  donors,
  inventory,
  requests
}) {
  const availableOrgans = inventory.filter(
    (item) => item.status === "Available"
  ).length;

  const pendingRequests = requests.filter(
    (item) => item.status === "Pending"
  ).length;

  const fulfilledRequests = requests.filter(
    (item) => item.status === "Fulfilled"
  ).length;

  return (
    <div className="page-content">

      {/* PAGE TITLE */}

      <div className="page-heading">
        <div>
          <p className="eyebrow">
            OVERVIEW
          </p>

          <h2>
            Donation Dashboard
          </h2>

          <p>
            Monitor donors, available organs
            and recipient requests from one place.
          </p>
        </div>
      </div>


      {/* STATISTICS */}

      <div className="stats-grid">

        <StatCard
          title="Registered Donors"
          value={donors.length}
          icon="♥"
          description="Active donor records"
        />

        <StatCard
          title="Available Organs"
          value={availableOrgans}
          icon="◈"
          description="Ready for matching"
        />

        <StatCard
          title="Pending Requests"
          value={pendingRequests}
          icon="!"
          description="Requests awaiting action"
        />

        <StatCard
          title="Fulfilled Requests"
          value={fulfilledRequests}
          icon="✓"
          description="Successfully completed"
        />

      </div>


      {/* DASHBOARD PANELS */}

      <div className="dashboard-grid">


        {/* SYSTEM STATUS */}

        <div className="panel">

          <div className="panel-header">

            <div>
              <p className="eyebrow">
                SYSTEM STATUS
              </p>

              <h3>
                Donation Network
              </h3>
            </div>

            <span className="status-badge available">
              Operational
            </span>

          </div>


          <div className="status-list">

            <div>
              <span>
                Donor Registry
              </span>

              <strong>
                Active
              </strong>
            </div>


            <div>
              <span>
                Organ Inventory
              </span>

              <strong>
                Active
              </strong>
            </div>


            <div>
              <span>
                Matching System
              </span>

              <strong>
                Active
              </strong>
            </div>


            <div>
              <span>
                Data Storage
              </span>

              <strong>
                Local
              </strong>
            </div>

          </div>

        </div>


        {/* CURRENT ACTIVITY */}

        <div className="panel">

          <div className="panel-header">

            <div>

              <p className="eyebrow">
                QUICK SUMMARY
              </p>

              <h3>
                Current Activity
              </h3>

            </div>

          </div>


          <div className="activity-item">

            <div className="activity-icon">
              ♥
            </div>

            <div>

              <strong>
                {donors.length} donors
              </strong>

              <span>
                registered in the system
              </span>

            </div>

          </div>


          <div className="activity-item">

            <div className="activity-icon">
              ◈
            </div>

            <div>

              <strong>
                {availableOrgans} organs
              </strong>

              <span>
                currently available
              </span>

            </div>

          </div>


          <div className="activity-item">

            <div className="activity-icon">
              ▣
            </div>

            <div>

              <strong>
                {pendingRequests} requests
              </strong>

              <span>
                awaiting matching
              </span>

            </div>

          </div>

        </div>

      </div>


      {/* INFORMATION BANNER */}

      <div className="info-banner">

        <div className="info-icon">
          i
        </div>

        <div>

          <strong>
            Hackathon Prototype
          </strong>

          <p>
            This system demonstrates donor,
            organ and recipient management using
            browser-based storage. Matching rules
            are simplified for demonstration and
            are not intended for real clinical
            decisions.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;