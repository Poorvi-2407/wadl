import { useState } from "react";

function Requests({
  requests,
  setRequests,
  inventory,
  setInventory
}) {
  const emptyForm = {
    recipientName: "",
    age: "",
    bloodGroup: "",
    organ: "",
    hospital: "",
    urgency: "Medium"
  };

  const [form, setForm] = useState(emptyForm);
  const [search, setSearch] = useState("");
  const [matchingRequestId, setMatchingRequestId] =
    useState(null);

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
      !form.recipientName ||
      !form.age ||
      !form.bloodGroup ||
      !form.organ ||
      !form.hospital ||
      !form.urgency
    ) {
      alert("Please complete all recipient fields.");
      return;
    }

    const newRequest = {
      id: Date.now(),
      ...form,
      age: Number(form.age),
      status: "Pending",
      date: new Date().toISOString().split("T")[0]
    };

    setRequests([newRequest, ...requests]);

    setForm(emptyForm);

    alert("Recipient request created successfully.");
  }

  function findMatches(request) {
    return inventory.filter(
      (item) =>
        item.status === "Available" &&
        item.organ === request.organ &&
        item.bloodGroup === request.bloodGroup
    );
  }

  function showMatches(requestId) {
    setMatchingRequestId(requestId);
  }

  function reserveOrgan(request, organId) {
    const confirmed = window.confirm(
      "Reserve this organ for the selected recipient?"
    );

    if (!confirmed) {
      return;
    }

    setInventory(
      inventory.map((item) =>
        item.id === organId
          ? {
              ...item,
              status: "Reserved"
            }
          : item
      )
    );

    setRequests(
      requests.map((item) =>
        item.id === request.id
          ? {
              ...item,
              status: "Fulfilled",
              matchedOrganId: organId
            }
          : item
      )
    );

    setMatchingRequestId(null);

    alert(
      "Organ matched and request fulfilled successfully."
    );
  }

  function cancelRequest(id) {
    const confirmed = window.confirm(
      "Delete this recipient request?"
    );

    if (!confirmed) {
      return;
    }

    setRequests(
      requests.filter(
        (request) => request.id !== id
      )
    );
  }

  const filteredRequests = requests.filter(
    (request) => {
      const searchText =
        search.toLowerCase();

      return (
        request.recipientName
          .toLowerCase()
          .includes(searchText) ||
        request.organ
          .toLowerCase()
          .includes(searchText) ||
        request.hospital
          .toLowerCase()
          .includes(searchText)
      );
    }
  );

  return (
    <div className="page-content">

      {/* PAGE HEADING */}

      <div className="page-heading">
        <div>
          <p className="eyebrow">
            RECIPIENT MANAGEMENT
          </p>

          <h2>
            Recipient Requests
          </h2>

          <p>
            Manage organ requests and find
            compatible available organs.
          </p>
        </div>
      </div>


      {/* REQUEST FORM */}

      <div className="form-panel">

        <div className="panel-header">

          <div>
            <p className="eyebrow">
              NEW REQUEST
            </p>

            <h3>
              Register Recipient
            </h3>
          </div>

        </div>


        <form onSubmit={handleSubmit}>

          <div className="form-grid">

            <div className="form-group">
              <label>
                Recipient Name
              </label>

              <input
                name="recipientName"
                value={form.recipientName}
                onChange={handleChange}
                placeholder="Enter recipient name"
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
                min="1"
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
                Required Organ
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
                Hospital
              </label>

              <input
                name="hospital"
                value={form.hospital}
                onChange={handleChange}
                placeholder="Hospital name"
              />
            </div>


            <div className="form-group">
              <label>
                Urgency
              </label>

              <select
                name="urgency"
                value={form.urgency}
                onChange={handleChange}
              >
                <option value="High">
                  High
                </option>

                <option value="Medium">
                  Medium
                </option>

                <option value="Low">
                  Low
                </option>
              </select>
            </div>

          </div>


          <button
            className="button primary"
            type="submit"
          >
            Create Request
          </button>

        </form>

      </div>


      {/* REQUEST LIST */}

      <div className="panel">

        <div className="panel-header">

          <div>
            <p className="eyebrow">
              REQUEST DATABASE
            </p>

            <h3>
              Active Requests
            </h3>
          </div>

          <span className="record-count">
            {filteredRequests.length} records
          </span>

        </div>


        {/* SEARCH */}

        <div className="filter-row">

          <input
            className="search-input"
            placeholder="Search recipient, organ or hospital..."
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
          />

        </div>


        {/* REQUEST CARDS */}

        <div className="request-cards">

          {filteredRequests.length === 0 ? (

            <div className="empty-box">
              No recipient requests found.
            </div>

          ) : (

            filteredRequests.map((request) => {

              const matches =
                findMatches(request);

              return (
                <div
                  className="request-card"
                  key={request.id}
                >

                  <div className="request-main">

                    <div className="request-avatar">
                      {request.recipientName
                        .charAt(0)
                        .toUpperCase()}
                    </div>

                    <div>
                      <h3>
                        {request.recipientName}
                      </h3>

                      <p>
                        Request created on{" "}
                        {request.date}
                      </p>
                    </div>

                  </div>


                  <div className="request-details">

                    <div>
                      <span>
                        Age
                      </span>

                      <strong>
                        {request.age}
                      </strong>
                    </div>


                    <div>
                      <span>
                        Blood
                      </span>

                      <strong>
                        {request.bloodGroup}
                      </strong>
                    </div>


                    <div>
                      <span>
                        Organ
                      </span>

                      <strong>
                        {request.organ}
                      </strong>
                    </div>


                    <div>
                      <span>
                        Urgency
                      </span>

                      <strong
                        className={`urgency ${
                          request.urgency.toLowerCase()
                        }`}
                      >
                        {request.urgency}
                      </strong>
                    </div>

                  </div>


                  <p>
                    <strong>
                      Hospital:
                    </strong>{" "}
                    {request.hospital}
                  </p>


                  <div
                    style={{
                      marginTop: "15px"
                    }}
                  >

                    {request.status ===
                    "Fulfilled" ? (

                      <span className="status-badge available">
                        ✓ Request Fulfilled
                      </span>

                    ) : (

                      <button
                        className="button primary"
                        onClick={() =>
                          showMatches(request.id)
                        }
                      >
                        Find Matching Organ
                      </button>

                    )}


                    <button
                      className="small-button danger"
                      style={{
                        marginLeft: "8px"
                      }}
                      onClick={() =>
                        cancelRequest(request.id)
                      }
                    >
                      Delete
                    </button>

                  </div>


                  {matchingRequestId ===
                    request.id && (

                    <div className="match-results">

                      <strong>
                        MATCHING RESULTS
                      </strong>


                      {matches.length === 0 ? (

                        <p>
                          No compatible available
                          organ was found.
                        </p>

                      ) : (

                        <>
                          <p>
                            {matches.length} compatible
                            organ(s) found.
                          </p>

                          {matches.map(
                            (organ) => (

                              <div
                                className="match-item"
                                key={organ.id}
                              >

                                <div>
                                  <strong>
                                    {organ.organ}
                                  </strong>

                                  <span>
                                    {organ.bloodGroup}
                                    {" • "}
                                    {organ.donorName}
                                    {" • "}
                                    {organ.hospital}
                                  </span>
                                </div>


                                <button
                                  className="small-button"
                                  onClick={() =>
                                    reserveOrgan(
                                      request,
                                      organ.id
                                    )
                                  }
                                >
                                  Reserve & Fulfill
                                </button>

                              </div>

                            )
                          )}
                        </>

                      )}

                    </div>

                  )}

                </div>
              );
            })

          )}

        </div>


        {/* MATCHING NOTE */}

        <div className="matching-note">

          <strong>
            Matching rule:
          </strong>

          The prototype matches an available
          organ when both the organ type and
          blood group exactly match the
          recipient request.

        </div>

      </div>

    </div>
  );
}

export default Requests;