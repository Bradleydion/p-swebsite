import React from "react";

export default function Services() {
  return (
    <div className="services">
      <section className="construction">
        {/* should be a card  think h1, p, images, p */}
        <h1>Construction</h1>
        <p>
          Palmer and Sicard has been in business as a Mechanical Contractor
          since 1954.
        </p>
        <p>
          We are fully licensed mechanical, plumbing, sheet metal, and HVAC
          company who focuses on working with our commercial customers on
          design/build, negotiated and planned projects to ensure quality work
          for a great value.
        </p>
      </section>
      <section className="smallProjects">
        {/* should be a card, think h1, image, p */}
        <h1>Small Projects</h1>
        <p>
          Palmer and Sicard understands the importance of your comfort. Our team
          will work closely to assess your needs and work to provide the best
          solution. We will design and install the most effective system for you
          that will provide the most comfort, ease of maintenance and cost
          efficiency. Since 1954, Palmer and Sicard has provided excellent
          customer satisfaction in a variety of commercial industries. We take
          pride knowing we can offer:
        </p>
        {""}
        <h2>Guaranteed Quality Work</h2>
        <ul>
          <li>
            We work with commercial customers one on one for the best solution
          </li>
          <li>Help resolve comfort issues</li>
          <li>Replacement of equipment</li>
          <li>Help with energy rebates</li>
          <li>New Installations</li>
        </ul>

        <p>
          Our qualified team is ready to work with you. Talk to a Palmer and
          Sicard professional and schedule an appointment.
        </p>
      </section>
      <section className="service"></section>
      {/* think box with link in it the same size as the cards above */}
      <section className="safety"></section>
      {/* think box with link in it the same size as the cards above */}
    </div>
  );
}

// new branch called content
