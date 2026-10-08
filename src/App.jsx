import { useEffect, useState } from "react";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import Dashboard from "./pages/Dashboard";
import Donors from "./pages/Donors";
import Inventory from "./pages/Inventory";
import Requests from "./pages/Requests";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";

import {
  initialDonors,
  initialInventory,
  initialRequests
} from "./data/seedData";

import {
  loadData,
  saveData
} from "./utils/storage";

import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("Dashboard");

  const [donors, setDonors] = useState(() =>
    loadData("organ_donors", initialDonors)
  );

  const [inventory, setInventory] = useState(() =>
    loadData("organ_inventory", initialInventory)
  );

  const [requests, setRequests] = useState(() =>
    loadData("organ_requests", initialRequests)
  );

  useEffect(() => {
    saveData("organ_donors", donors);
  }, [donors]);

  useEffect(() => {
    saveData("organ_inventory", inventory);
  }, [inventory]);

  useEffect(() => {
    saveData("organ_requests", requests);
  }, [requests]);

  function renderPage() {
    switch (activePage) {
      case "Dashboard":
        return (
          <Dashboard
            donors={donors}
            inventory={inventory}
            requests={requests}
          />
        );

      case "Donors":
        return (
          <Donors
            donors={donors}
            setDonors={setDonors}
          />
        );

      case "Organ Inventory":
        return (
          <Inventory
            inventory={inventory}
            setInventory={setInventory}
          />
        );

      case "Recipient Requests":
        return (
          <Requests
            requests={requests}
            setRequests={setRequests}
            inventory={inventory}
            setInventory={setInventory}
          />
        );

      case "About":
        return <About />;

      case "How It Works":
        return <HowItWorks />;

      default:
        return (
          <Dashboard
            donors={donors}
            inventory={inventory}
            requests={requests}
          />
        );
    }
  }

  return (
    <div className="app">

      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <main className="main-area">

        <Header
          activePage={activePage}
        />

        {renderPage()}

        <Footer
          setActivePage={setActivePage}
        />

      </main>

    </div>
  );
}

export default App;