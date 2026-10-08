function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Register Donor",
      description:
        "The administrator records donor information including blood group, organ and location."
    },
    {
      number: "02",
      title: "Add Organ",
      description:
        "The donated organ is added to the inventory with its blood group, donor and hospital information."
    },
    {
      number: "03",
      title: "Create Recipient Request",
      description:
        "A recipient request is created with the required organ, blood group, hospital and urgency."
    },
    {
      number: "04",
      title: "Find a Match",
      description:
        "The system searches available inventory for an organ with a matching organ type and blood group."
    },
    {
      number: "05",
      title: "Reserve Organ",
      description:
        "The administrator can reserve a compatible available organ for the recipient."
    },
    {
      number: "06",
      title: "Fulfill Request",
      description:
        "Once the organ is reserved, the recipient request is marked as fulfilled."
    }
  ];

  return (
    <div className="page-content">

      <div className="page-heading">
        <div>
          <p className="eyebrow">
            SYSTEM WORKFLOW
          </p>

          <h2>
            How LifeLink Works
          </h2>

          <p>
            The complete workflow from donor
            registration to recipient matching.
          </p>
        </div>
      </div>


      <div className="workflow">

        {steps.map((step) => (
          <div
            className="workflow-step"
            key={step.number}
          >

            <div className="workflow-number">
              {step.number}
            </div>

            <div>

              <h3>
                {step.title}
              </h3>

              <p>
                {step.description}
              </p>

            </div>

          </div>
        ))}

      </div>


      <div className="matching-flow">

        <div>
          Donor
        </div>

        <span>→</span>

        <div>
          Organ Inventory
        </div>

        <span>→</span>

        <div>
          Recipient Request
        </div>

        <span>→</span>

        <div>
          Compatibility Match
        </div>

        <span>→</span>

        <div>
          Fulfilled
        </div>

      </div>

    </div>
  );
}

export default HowItWorks;