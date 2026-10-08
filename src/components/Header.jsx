function Header({ activePage }) {
  return (
    <header className="topbar">
      <div>
        <p className="topbar-label">
          ORGAN DONATION MANAGEMENT SYSTEM
        </p>

        <h1>{activePage}</h1>
      </div>

      <div className="admin-profile">
        <div className="profile-avatar">
          A
        </div>

        <div>
          <strong>Administrator</strong>
          <span>System Manager</span>
        </div>
      </div>
    </header>
  );
}

export default Header;