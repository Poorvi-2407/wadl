function Sidebar({ activePage, setActivePage }) {
  const mainMenu = [
    {
      name: "Dashboard",
      icon: "⌂"
    },
    {
      name: "Donors",
      icon: "♥"
    },
    {
      name: "Organ Inventory",
      icon: "◇"
    },
    {
      name: "Recipient Requests",
      icon: "□"
    }
  ];

  const informationMenu = [
    {
      name: "About",
      icon: "ⓘ"
    },
    {
      name: "How It Works",
      icon: "↗"
    },
    {
      name: "Help",
      icon: "?"
    }
  ];

  return (
    <aside className="sidebar">

      {/* BRAND */}

      <div className="brand">

        <div className="brand-icon">
          ♥
        </div>

        <div>
          <h2>
            LifeLink
          </h2>

          <p>
            Donation System
          </p>
        </div>

      </div>


      {/* NAVIGATION */}

      <nav className="navigation">

        <p className="nav-title">
          MAIN MENU
        </p>


        {mainMenu.map((item) => (

          <button
            key={item.name}
            className={`nav-button ${
              activePage === item.name
                ? "active"
                : ""
            }`}
            onClick={() =>
              setActivePage(item.name)
            }
          >

            <span className="nav-icon">
              {item.icon}
            </span>

            <span>
              {item.name}
            </span>

          </button>

        ))}


        {/* INFORMATION */}

        <p
          className="nav-title"
          style={{
            marginTop: "25px"
          }}
        >
          INFORMATION
        </p>


        {informationMenu.map((item) => (

          <button
            key={item.name}
            className={`nav-button ${
              activePage === item.name
                ? "active"
                : ""
            }`}
            onClick={() =>
              setActivePage(item.name)
            }
          >

            <span className="nav-icon">
              {item.icon}
            </span>

            <span>
              {item.name}
            </span>

          </button>

        ))}

      </nav>


      {/* SYSTEM STATUS */}

      <div className="sidebar-footer">

        <div className="status-dot"></div>

        <div>

          <strong>
            System Online
          </strong>

          <span>
            All services operational
          </span>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;