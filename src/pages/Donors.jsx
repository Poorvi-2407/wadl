import { useState } from "react";

function Donors({ donors, setDonors }) {
  const emptyForm = {
    name: "",
    age: "",
    bloodGroup: "",
    organ: "",
    city: "",
    phone: ""
  };

  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [search, setSearch] = useState("");
  const [bloodFilter, setBloodFilter] = useState("All");

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
      !form.name ||
      !form.age ||
      !form.bloodGroup ||
      !form.organ ||
      !form.city ||
      !form.phone
    ) {
      alert("Please fill all donor fields.");
      return;
    }

    if (form.phone.length !== 10) {
      alert("Phone number must contain 10 digits.");
      return;
    }

    if (editingId) {
      setDonors(
        donors.map((donor) =>
          donor.id === editingId
            ? {
                ...donor,
                ...form,
                age: Number(form.age)
              }
            : donor
        )
      );

      alert("Donor updated successfully.");
    } else {
      const newDonor = {
        id: Date.now(),
        ...form,
        age: Number(form.age),
        status: "Active"
      };

      setDonors([newDonor, ...donors]);

      alert("Donor registered successfully.");
    }

    setForm(emptyForm);
    setEditingId(null);
  }

  function handleEdit(donor) {
    setEditingId(donor.id);

    setForm({
      name: donor.name,
      age: donor.age,
      bloodGroup: donor.bloodGroup,
      organ: donor.organ,
      city: donor.city,
      phone: donor.phone
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  function handleDelete(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this donor?"
    );

    if (!confirmed) {
      return;
    }

    setDonors(
      donors.filter((donor) => donor.id !== id)
    );
  }

  function cancelEdit() {
    setForm(emptyForm);
    setEditingId(null);
  }

  const filteredDonors = donors.filter((donor) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      donor.name.toLowerCase().includes(searchText) ||
      donor.city.toLowerCase().includes(searchText) ||
      donor.organ.toLowerCase().includes(searchText);

    const matchesBlood =
      bloodFilter === "All" ||
      donor.bloodGroup === bloodFilter;

    return matchesSearch && matchesBlood;
  });

  return (
    <div className="page-content">

      <div className="page-heading">
        <div>
          <p className="eyebrow">
            DONOR MANAGEMENT
          </p>

          <h2>
            Donor Registry
          </h2>

          <p>
            Register and manage people who have
            volunteered for organ donation.
          </p>
        </div>
      </div>


      {/* DONOR FORM */}

      <div className="form-panel">

        <div className="panel-header">

          <div>
            <p className="eyebrow">
              {editingId
                ? "UPDATE RECORD"
                : "NEW RECORD"}
            </p>

            <h3>
              {editingId
                ? "Edit Donor"
                : "Register New Donor"}
            </h3>
          </div>

          {editingId && (
            <button
              className="button secondary"
              onClick={cancelEdit}
            >
              Cancel
            </button>
          )}

        </div>


        <form onSubmit={handleSubmit}>

          <div className="form-grid">

            <div className="form-group">
              <label>
                Full Name
              </label>

              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter donor name"
              />
            </div>


            <div className="form-group">
              <label>
                Age
              </label>

              <input
                type="number"
                name="age"
                value={form.age}
                onChange={handleChange}
                placeholder="Enter age"
                min="18"
              />
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
                City
              </label>

              <input
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="Enter city"
              />
            </div>


            <div className="form-group">
              <label>
                Phone
              </label>

              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="10 digit phone number"
                maxLength="10"
              />
            </div>

          </div>


          <button
            className="button primary"
            type="submit"
          >
            {editingId
              ? "Update Donor"
              : "Register Donor"}
          </button>

        </form>

      </div>


      {/* DONOR TABLE */}

      <div className="panel">

        <div className="panel-header">

          <div>
            <p className="eyebrow">
              DATABASE
            </p>

            <h3>
              Registered Donors
            </h3>
          </div>

          <span className="record-count">
            {filteredDonors.length} records
          </span>

        </div>


        {/* SEARCH AND FILTER */}

        <div className="filter-row">

          <input
            className="search-input"
            placeholder="Search by name, city or organ..."
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
          />


          <select
            value={bloodFilter}
            onChange={(event) =>
              setBloodFilter(event.target.value)
            }
          >
            <option value="All">
              All Blood Groups
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


        {/* TABLE */}

        <div className="table-wrapper">

          <table>

            <thead>

              <tr>
                <th>Donor</th>
                <th>Age</th>
                <th>Blood</th>
                <th>Organ</th>
                <th>Location</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>

            </thead>


            <tbody>

              {filteredDonors.length === 0 ? (

                <tr>
                  <td
                    colSpan="7"
                    className="empty-state"
                  >
                    No donors found.
                  </td>
                </tr>

              ) : (

                filteredDonors.map((donor) => (

                  <tr key={donor.id}>

                    <td>
                      <strong>
                        {donor.name}
                      </strong>

                      <span className="table-subtext">
                        {donor.phone}
                      </span>
                    </td>


                    <td>
                      {donor.age}
                    </td>


                    <td>
                      <span className="blood-badge">
                        {donor.bloodGroup}
                      </span>
                    </td>


                    <td>
                      {donor.organ}
                    </td>


                    <td>
                      {donor.city}
                    </td>


                    <td>
                      <span className="status-badge available">
                        {donor.status}
                      </span>
                    </td>


                    <td>

                      <div className="action-buttons">

                        <button
                          className="small-button"
                          onClick={() =>
                            handleEdit(donor)
                          }
                        >
                          Edit
                        </button>


                        <button
                          className="small-button danger"
                          onClick={() =>
                            handleDelete(donor.id)
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

export default Donors;