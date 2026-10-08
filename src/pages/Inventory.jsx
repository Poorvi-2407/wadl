import { useState } from "react";

function Inventory({ inventory, setInventory }) {
  const emptyForm = {
    organ: "",
    bloodGroup: "",
    donorName: "",
    hospital: ""
  };

  const [form, setForm] = useState(emptyForm);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  function handleChange(event) {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (
      !form.organ ||
      !form.bloodGroup ||
      !form.donorName ||
      !form.hospital
    ) {
      alert("Please complete all inventory fields.");
      return;
    }

    const newOrgan = {
      id: Date.now(),
      ...form,
      status: "Available",
      date: new Date().toISOString().split("T")[0]
    };

    setInventory([newOrgan, ...inventory]);

    setForm(emptyForm);

    alert("Organ added to inventory.");
  }

  function changeStatus(id) {
    setInventory(
      inventory.map((item) => {
        if (item.id !== id) {
          return item;
        }

        return {
          ...item,
          status:
            item.status === "Available"
              ? "Reserved"
              : "Available"
        };
      })
    );
  }

  function deleteOrgan(id) {
    const confirmed = window.confirm(
      "Delete this organ inventory record?"
    );

    if (!confirmed) {
      return;
    }

    setInventory(
      inventory.filter((item) => item.id !== id)
    );
  }

  const filteredInventory = inventory.filter((item) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      item.organ.toLowerCase().includes(searchText) ||
      item.donorName.toLowerCase().includes(searchText) ||
      item.hospital.toLowerCase().includes(searchText);

    const matchesFilter =
      filter === "All" ||
      item.status === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="page-content">

      <div className="page-heading">
        <div>
          <p className="eyebrow">
            ORGAN INVENTORY
          </p>

          <h2>
            Available Organs
          </h2>

          <p>
            Manage donated organs and their
            current availability.
          </p>
        </div>
      </div>


      {/* ADD ORGAN FORM */}

      <div className="form-panel">

        <div className="panel-header">

          <div>
            <p className="eyebrow">
              INVENTORY ENTRY
            </p>

            <h3>
              Add Organ
            </h3>
          </div>

        </div>


        <form onSubmit={handleSubmit}>

          <div className="form-grid">

            <div className="form-group">
              <label>
                Organ
              </label>

              <select
                name="organ"
                value={form.organ}
                onChange={handleChange}
              >
                <option value="">
                  Select organ
                </option>

                <option value="Kidney">
                  Kidney
                </option>

                <option value="Liver">
                  Liver
                </option>

                <option value="Heart">
                  Heart
                </option>

                <option value="Lung">
                  Lung
                </option>

                <option value="Pancreas">
                  Pancreas
                </option>
              </select>
            </div>


            <div className="form-group">
              <label>
                Blood Group
              </label>

              <select
                name="bloodGroup"
                value={form.bloodGroup}
                onChange={handleChange}
              >
                <option value="">
                  Select blood group
                </option>

                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>


            <div className="form-group">
              <label>
                Donor Name
              </label>

              <input
                name="donorName"
                value={form.donorName}
                onChange={handleChange}
                placeholder="Donor name"
              />
            </div>


            <div className="form-group">
              <label>
                Hospital
              </label>

              <input
                name="hospital"
                value={form.hospital}
                onChange={handleChange}
                placeholder="Hospital name"
              />
            </div>

          </div>


          <button
            className="button primary"
            type="submit"
          >
            Add Organ
          </button>

        </form>

      </div>


      {/* INVENTORY TABLE */}

      <div className="panel">

        <div className="panel-header">

          <div>
            <p className="eyebrow">
              ORGAN RECORDS
            </p>

            <h3>
              Inventory
            </h3>
          </div>

          <span className="record-count">
            {filteredInventory.length} records
          </span>

        </div>


        {/* SEARCH AND FILTER */}

        <div className="filter-row">

          <input
            className="search-input"
            placeholder="Search organ, donor or hospital..."
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
          />


          <select
            value={filter}
            onChange={(event) =>
              setFilter(event.target.value)
            }
          >
            <option value="All">
              All Status
            </option>

            <option value="Available">
              Available
            </option>

            <option value="Reserved">
              Reserved
            </option>
          </select>

        </div>


        <div className="table-wrapper">

          <table>

            <thead>

              <tr>
                <th>Organ</th>
                <th>Blood</th>
                <th>Donor</th>
                <th>Hospital</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>

            </thead>


            <tbody>

              {filteredInventory.length === 0 ? (

                <tr>
                  <td
                    colSpan="7"
                    className="empty-state"
                  >
                    No inventory records found.
                  </td>
                </tr>

              ) : (

                filteredInventory.map((item) => (

                  <tr key={item.id}>

                    <td>
                      <strong>
                        {item.organ}
                      </strong>
                    </td>


                    <td>
                      <span className="blood-badge">
                        {item.bloodGroup}
                      </span>
                    </td>


                    <td>
                      {item.donorName}
                    </td>


                    <td>
                      {item.hospital}
                    </td>


                    <td>
                      {item.date}
                    </td>


                    <td>

                      <span
                        className={`status-badge ${
                          item.status === "Available"
                            ? "available"
                            : "reserved"
                        }`}
                      >
                        {item.status}
                      </span>

                    </td>


                    <td>

                      <div className="action-buttons">

                        <button
                          className="small-button"
                          onClick={() =>
                            changeStatus(item.id)
                          }
                        >
                          {item.status === "Available"
                            ? "Reserve"
                            : "Release"}
                        </button>


                        <button
                          className="small-button danger"
                          onClick={() =>
                            deleteOrgan(item.id)
                          }
                        >
                          Delete
                        </button>

                      </div>

                    </td>

                  </tr>

                ))

              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Inventory;